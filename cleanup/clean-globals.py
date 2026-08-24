#!/usr/bin/env python3
"""
Remove pre-redesign CSS from src/app/globals.css.

The 2026-08-13 redesign moved all page styling into site.css, pages-core.css,
and pages-sub.css. globals.css still carries the archetype sections that
preceded it. This script deletes only the sections whose class selectors are
referenced nowhere in src/, content/, or the three current stylesheets — then
prunes any @theme token left with no consumer.

It is conservative by design:
  · Element-selector blocks (RESET & BASE) are never deleted — they are
    reported instead, because site.css overrides them and the overlap needs a
    human decision.
  · A section is deleted only if EVERY class it defines is unreferenced.
  · Tokens are pruned only after the section deletions, and only if the token
    then has zero `var(--x)` consumers anywhere.

Usage
-----
  python3 clean-globals.py --repo /path/to/sugo-ai            # dry run, report only
  python3 clean-globals.py --repo /path/to/sugo-ai --write    # apply
"""

import argparse
import re
import shutil
from pathlib import Path

# Sections that hold element selectors, not page components. Never auto-deleted.
PROTECTED = {"RESET & BASE", "BUTTONS & LINKS", "ENTRANCE MOTION", "Theme"}

CLASS_IN_SELECTOR = re.compile(r"\.([a-zA-Z][a-zA-Z0-9_-]*)")
TOKEN_DECL = re.compile(r"^\s*(--[a-zA-Z0-9-]+)\s*:")


def consumer_text(repo: Path) -> str:
    parts = []
    for pat in ("src/**/*.tsx", "src/**/*.ts", "content/**/*.mdx"):
        for p in repo.glob(pat):
            parts.append(p.read_text(encoding="utf-8"))
    for name in ("site.css", "pages-core.css", "pages-sub.css"):
        f = repo / "src/app" / name
        if f.exists():
            parts.append(f.read_text(encoding="utf-8"))
    return "\n".join(parts)


def sections(lines):
    """Yield (start_index, end_index, title) for each banner-delimited section."""
    heads = []
    for i, l in enumerate(lines):
        stripped = l.strip()
        if stripped.startswith("/*") and set(stripped.strip("/* ")) <= set("= "):
            for j in range(i + 1, min(i + 4, len(lines))):
                m = re.match(r"^\s{3}([A-Z][^\n]*)$", lines[j])
                if m:
                    heads.append((i, m.group(1).strip()))
                    break
    heads.append((len(lines), "EOF"))
    for k in range(len(heads) - 1):
        yield heads[k][0], heads[k + 1][0], heads[k][1]


def classes_in(block: str):
    found = set()
    for line in block.split("\n"):
        s = line.strip()
        if "{" in line and not s.startswith(("/*", "*", "@")):
            found |= set(CLASS_IN_SELECTOR.findall(line.split("{")[0]))
    return found


def referenced(cls: str, hay: str) -> bool:
    return re.search(r"[\"'\s.]" + re.escape(cls) + r"[\"'\s,.:)]", hay) is not None


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--repo", type=Path, required=True)
    ap.add_argument("--write", action="store_true")
    args = ap.parse_args()

    target = args.repo / "src/app/globals.css"
    if not target.exists():
        print(f"ERROR: {target} not found")
        return 1

    hay = consumer_text(args.repo)
    lines = target.read_text(encoding="utf-8").split("\n")
    original_count = len(lines)

    drop = set()
    print(f"{'lines':>13}  {'section':46} {'cls':>4} {'used':>4}  action")
    print("-" * 86)
    for a, b, name in sections(lines):
        block = "\n".join(lines[a:b])
        cls = classes_in(block)
        used = {c for c in cls if referenced(c, hay)}
        protected = any(name.startswith(p) for p in PROTECTED)
        if protected:
            action = "KEEP (protected)"
        elif not cls:
            action = "KEEP (no classes)"
        elif used:
            action = f"KEEP — {', '.join(sorted(used)[:3])}"
        else:
            action = "DELETE"
            drop |= set(range(a, b))
        print(f"{a+1:>6}-{b:<6}  {name[:46]:46} {len(cls):>4} {len(used):>4}  {action}")

    kept = [l for i, l in enumerate(lines) if i not in drop]

    # Remove the .dark block if nothing consumes it.
    if not re.search(r'(dark:|className=[^>]*\bdark\b)', hay):
        out, i, removed_dark = [], 0, 0
        while i < len(kept):
            if kept[i].strip().startswith(".dark {"):
                depth = 0
                while i < len(kept):
                    depth += kept[i].count("{") - kept[i].count("}")
                    i += 1
                    removed_dark += 1
                    if depth == 0:
                        break
                continue
            out.append(kept[i]); i += 1
        kept = out
        if removed_dark:
            print(f"\n  .dark block removed ({removed_dark} lines) — no consumers")

    # Prune orphaned tokens.
    body = "\n".join(kept)
    orphans = []
    for m in TOKEN_DECL.finditer(body):
        tok = m.group(1)
        if tok.startswith(("--font-redhat", "--font-jb-mono")):
            continue
        uses = body.count(f"var({tok}") + hay.count(f"var({tok}")
        # A --color-x token in @theme also generates the bg-x / text-x utilities.
        util = tok.replace("--color-", "")
        if tok.startswith("--color-") and re.search(
                r"\b(bg|text|border|fill|stroke|ring|from|to|via)-" + re.escape(util) + r"\b", hay):
            continue
        if uses == 0:
            orphans.append(tok)
    if orphans:
        print(f"\n  Orphaned tokens ({len(orphans)}), no var() consumer and no utility use:")
        for t in orphans:
            print(f"    {t}")
        kept = [l for l in kept if not (TOKEN_DECL.match(l) and TOKEN_DECL.match(l).group(1) in orphans)]

    print(f"\n  {original_count} lines → {len(kept)} lines  ({original_count - len(kept)} removed)")

    if args.write:
        shutil.copy(target, target.with_suffix(".css.bak"))
        target.write_text("\n".join(kept), encoding="utf-8")
        print(f"  written · backup at {target.with_suffix('.css.bak').name}")
        print("  next: npm run build, then diff every route visually")
    else:
        print("  dry run — pass --write to apply")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
