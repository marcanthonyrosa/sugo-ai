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

    The default billing party is always Sugo Product Company, LLC. Invoicing
    personally as an independent contractor is a per-client exception that must
    be named in .sugo-private.json — it is never inferred.
    """
    return {
        "year": date.today().year,
        "contact_email": "marc@sugoai.com",
        "from_entity": "Sugo Product Company, LLC",
        "from_name": "Sugo Product Company, LLC",
        "from_lines": ["d/b/a Sugo AI", "marc@sugoai.com"],
        "legal_line": f"© {date.today().year} Sugo Product Company, LLC d/b/a Sugo AI",
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
        # The stylesheet must resolve; copy it beside the HTML if it isn't there.
        css = base / "sugo-document.css"
        if not css.exists():
            shutil.copy(ASSETS / "sugo-document.css", css)
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
            shutil.copy(ASSETS / "sugo-document.css", html_out.parent / "sugo-document.css")
        print(f"  HTML -> {html_out}")

    to_pdf(html, base, args.out)
    print(f"  PDF  -> {args.out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
