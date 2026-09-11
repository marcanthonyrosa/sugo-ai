#!/usr/bin/env python3
"""
Sugo AI document builder.

Renders a Jinja2 HTML template from the skill's assets/ directory into a
branded PDF via WeasyPrint. HTML is the editorial source; the PDF is the
artifact of record.

Usage
-----
  # From a JSON context file
  python3 build.py --template invoice --context ctx.json --out ./invoice-002.pdf

  # With a private client profile (billing entity, address, rate, remittance)
  python3 build.py --template invoice --client acme --context ctx.json --out inv.pdf

  # From an already-rendered HTML file (skip templating)
  python3 build.py --html ./my-doc.html --out ./my-doc.pdf

  # Keep the intermediate HTML for inspection
  python3 build.py --template invoice --context ctx.json --out out.pdf --keep-html

Dependencies
------------
  pip install jinja2 weasyprint --break-system-packages
"""

import argparse
import json
import shutil
import sys
from datetime import date
from pathlib import Path

SKILL_ROOT = Path(__file__).resolve().parent.parent
ASSETS = SKILL_ROOT / "assets"


# --- General Sans font cache -------------------------------------------------
# Fontshare ships General Sans 400 with a corrupt `name` table (family reads
# "false"). Browsers ignore internal names and honour the @font-face
# descriptors, so the website is unaffected — but WeasyPrint resolves faces
# through fontconfig, which reads the internal names, discards the 400 face and
# renders every paragraph in the 600 weight. That silently destroys the
# emphasis mechanism, since the brand has no italics and uses 600 for stress.
#
# The fix: fetch both weights at build time, repair the 400 name table in a
# local cache, and hand WeasyPrint those files. The cache is gitignored — the
# fonts are ITF-licensed and must not be redistributed, so they are never
# committed and never leave this machine.

FONT_CACHE = SKILL_ROOT / ".fontcache"
FONTSHARE_CSS = "https://api.fontshare.com/v2/css?f[]=general-sans@400,600"


def ensure_fonts() -> "Path | None":
    """Return a directory holding usable General Sans 400/600, or None."""
    f400 = FONT_CACHE / "general-sans-400.woff2"
    f600 = FONT_CACHE / "general-sans-600.woff2"
    if f400.exists() and f600.exists():
        return FONT_CACHE
    try:
        import re
        from urllib.request import urlopen, Request
        from fontTools.ttLib import TTFont

        def get(url: str) -> bytes:
            req = Request(url, headers={"User-Agent": "Mozilla/5.0"})
            return urlopen(req, timeout=30).read()

        css = get(FONTSHARE_CSS).decode("utf-8", "replace")
        urls = {}
        for blk in css.split("@font-face"):
            w = re.search(r"font-weight:\s*(400|600)", blk)
            u = re.search(r"url\('(//cdn[^']+woff2)'", blk)
            st = re.search(r"font-style:\s*(\w+)", blk)
            if w and u and (st is None or st.group(1) == "normal"):
                urls.setdefault(w.group(1), "https:" + u.group(1))
        if "400" not in urls or "600" not in urls:
            return None

        FONT_CACHE.mkdir(parents=True, exist_ok=True)
        raw = FONT_CACHE / ".raw-400.woff2"
        raw.write_bytes(get(urls["400"]))
        f600.write_bytes(get(urls["600"]))

        t = TTFont(str(raw))
        t["name"].setName("General Sans", 1, 3, 1, 0x409)
        t["name"].setName("Regular", 2, 3, 1, 0x409)
        t["name"].setName("General Sans Regular", 4, 3, 1, 0x409)
        t.flavor = "woff2"
        t.save(str(f400))
        raw.unlink(missing_ok=True)
        return FONT_CACHE
    except Exception as exc:                      # offline, API change, etc.
        print(f"  note: General Sans cache unavailable ({exc}); "
              f"falling back to Fontshare", file=sys.stderr)
        return None


def font_css(cache: "Path | None") -> str:
    if cache is None:
        # Degrade to Fontshare. Renders, but body copy comes out in the 600
        # weight — see the note above. Better than no General Sans at all.
        return '@import url("https://api.fontshare.com/v2/css?f[]=general-sans@400,600");'
    return f"""
@font-face {{ font-family:"General Sans"; font-weight:400; font-style:normal;
  src:url("{(cache / 'general-sans-400.woff2').as_uri()}") format("woff2"); }}
@font-face {{ font-family:"General Sans"; font-weight:600; font-style:normal;
  src:url("{(cache / 'general-sans-600.woff2').as_uri()}") format("woff2"); }}
"""


def stage_assets(dest: Path) -> None:
    """Copy the stylesheets and images the templates reference into `dest`."""
    dest.mkdir(parents=True, exist_ok=True)
    for f in ASSETS.iterdir():
        if f.is_file() and f.suffix.lower() in {".css", ".png", ".svg", ".jpg"}:
            target = dest / f.name
            if not target.exists() or target.read_bytes() != f.read_bytes():
                shutil.copy(f, target)


def die(msg: str) -> None:
    print(f"ERROR: {msg}", file=sys.stderr)
    raise SystemExit(1)


def render(template_name: str, context: dict) -> str:
    try:
        from jinja2 import Environment, FileSystemLoader, select_autoescape
    except ImportError:
        die("jinja2 not installed. Run: pip install jinja2 --break-system-packages")

    path = ASSETS / f"{template_name}.html"
    if not path.exists():
        available = sorted(p.stem for p in ASSETS.glob("*.html"))
        die(f"No template '{template_name}'. Available: {', '.join(available)}")

    env = Environment(
        loader=FileSystemLoader(str(ASSETS)),
        autoescape=select_autoescape(["html"]),
    )
    # `body` on the generic document template is pre-built HTML, not user text.
    env.filters["safe_html"] = lambda v: v
    return env.get_template(f"{template_name}.html").render(**context)


def to_pdf(html: str, base_url: Path, out: Path) -> None:
    try:
        from weasyprint import HTML
    except ImportError:
        die("weasyprint not installed. Run: pip install weasyprint --break-system-packages")
    out.parent.mkdir(parents=True, exist_ok=True)
    extra = font_css(ensure_fonts())
    if extra:
        # Must go in the document head. WeasyPrint ignores @font-face rules in
        # stylesheets passed via `stylesheets=`; only document-level ones
        # register with the font engine.
        block = f"<style>{extra}</style>"
        html = (html.replace("</head>", block + "</head>", 1)
                if "</head>" in html else block + html)
    HTML(string=html, base_url=str(base_url)).write_pdf(str(out))


PRIVATE_NAME = ".sugo-private.json"


def load_private() -> dict:
    """
    Private facts — home address, client names, rates, remittance details.

    Never committed. Looked for in the skill root, the current directory, then
    the home directory; first hit wins. Absent is fine: the public defaults
    below produce a correct but generic document.
    """
    for candidate in (SKILL_ROOT / PRIVATE_NAME,
                      Path.cwd() / PRIVATE_NAME,
                      SKILL_ROOT.parent.parent.parent / PRIVATE_NAME,  # repo root
                      Path.home() / PRIVATE_NAME):
        if candidate.exists():
            data = json.loads(candidate.read_text(encoding="utf-8"))
            return {k: v for k, v in data.items() if not k.startswith("_")}
    return {}


def defaults() -> dict:
    """
    Facts that are the same on every Sugo document.

    The default billing party is always Sugo Product Company LLC. Invoicing
    personally as an independent contractor is a per-client exception that must
    be named in .sugo-private.json — it is never inferred.
    """
    return {
        "year": date.today().year,
        "contact_email": "marc@sugoai.com",
        "from_entity": "Sugo Product Company LLC",
        "from_name": "Sugo Product Company LLC",
        "from_lines": ["d/b/a Sugo AI", "marc@sugoai.com"],
        "legal_line": f"© {date.today().year} Sugo Product Company LLC d/b/a Sugo AI",
        "terms": "Net 15",
        "mark_src": "sugo-mark.png",   # the canonical mark, in assets/
        "signatures": False,
        "parties": None,
    }


def apply_client(ctx: dict, private: dict, client_key: str) -> dict:
    """Layer a private client profile onto the context. Explicit, never guessed."""
    clients = private.get("clients", {})
    if client_key not in clients:
        known = ", ".join(sorted(clients)) or "none configured"
        die(f"No client '{client_key}' in {PRIVATE_NAME}. Known: {known}")
    client = {k: v for k, v in clients[client_key].items() if not k.startswith("_")}

    profile_key = client.pop("billing_profile", "sugo")
    profiles = private.get("billing_profiles", {})
    if profile_key not in profiles:
        die(f"No billing_profile '{profile_key}' in {PRIVATE_NAME}.")
    profile = {k: v for k, v in profiles[profile_key].items() if not k.startswith("_")}
    profile["legal_line"] = profile.get("legal_line", "").replace(
        "{year}", str(date.today().year))

    if private.get("address_lines"):
        profile["from_lines"] = list(profile.get("from_lines", [])) + list(private["address_lines"])
    if private.get("remittance"):
        ctx.setdefault("remittance", private["remittance"])

    ctx.update(profile)
    ctx.update(client)
    print(f"  client '{client_key}' · billing as {ctx.get('from_name')} ({profile_key})")
    return ctx


def main() -> int:
    ap = argparse.ArgumentParser(description="Build a Sugo AI branded PDF.")
    src = ap.add_mutually_exclusive_group(required=True)
    src.add_argument("--template", help="Template stem in assets/ (e.g. invoice, document)")
    src.add_argument("--html", type=Path, help="Pre-rendered HTML file to convert")
    ap.add_argument("--context", type=Path, help="JSON file of template variables")
    ap.add_argument("--client", help=f"Client key from {PRIVATE_NAME}; applies that "
                                     f"client's billing profile and details")
    ap.add_argument("--out", type=Path, required=True, help="Output PDF path")
    ap.add_argument("--keep-html", action="store_true", help="Also write the intermediate HTML")
    args = ap.parse_args()

    if args.html:
        if not args.html.exists():
            die(f"{args.html} not found")
        html = args.html.read_text(encoding="utf-8")
        base = args.html.parent
        # Every stylesheet and image the templates reference must resolve
        # beside the HTML. Copying only sugo-document.css leaves its
        # @import of sugo-print-tokens.css dangling, which drops the tokens
        # AND the font imports — the PDF silently renders in Times New Roman.
        stage_assets(base)
    else:
        ctx = defaults()
        private = load_private()
        if args.client:
            ctx = apply_client(ctx, private, args.client)
        elif private.get("remittance"):
            ctx.setdefault("remittance", private["remittance"])
        if args.context:
            if not args.context.exists():
                die(f"{args.context} not found")
            ctx.update(json.loads(args.context.read_text(encoding="utf-8")))
        html = render(args.template, ctx)
        base = ASSETS

    if args.keep_html:
        html_out = args.out.with_suffix(".html")
        html_out.parent.mkdir(parents=True, exist_ok=True)
        html_out.write_text(html, encoding="utf-8")
        if base != html_out.parent:
            stage_assets(html_out.parent)
        print(f"  HTML -> {html_out}")

    to_pdf(html, base, args.out)
    print(f"  PDF  -> {args.out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
