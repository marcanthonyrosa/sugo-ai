#!/usr/bin/env python3
"""
Guard against private facts reaching a public commit.

Reads the denylist out of .sugo-private.json — the gitignored file that already
holds client names, the business address, rates, and personal contact details —
and scans the working tree (or just the staged files) for any of them.

The denylist is never itself committed. That is the point: the guard knows what
to look for because the private file exists locally, and the check simply does
nothing on a machine that does not have it.

It scans binaries too. A sanitised source file is not much use if a rendered PDF
sitting next to it still carries the client name.

Usage
-----
  python3 check-private.py --repo .              # scan the working tree
  python3 check-private.py --repo . --staged     # scan staged files only

As a pre-commit hook, in .git/hooks/pre-commit:

  #!/bin/sh
  python3 cleanup/check-private.py --repo . --staged || exit 1
"""

from __future__ import annotations   # `X | None` on Python 3.9

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path

PRIVATE_NAME = ".sugo-private.json"
SKIP_DIRS = {".git", "node_modules", ".next", "dist", "build", "__pycache__"}
TEXT_LIKE = {".md", ".txt", ".json", ".js", ".jsx", ".ts", ".tsx", ".css",
             ".html", ".mdx", ".py", ".yml", ".yaml", ".sh", ".cjs", ".mjs"}
# Extensions worth extracting text from before scanning.
EXTRACTABLE = {".pdf"}


def find_private(repo: Path) -> Path | None:
    for c in (repo / PRIVATE_NAME,
              repo / ".claude/skills/sugo-document" / PRIVATE_NAME,
              Path.home() / PRIVATE_NAME):
        if c.exists():
            return c
    return None


def collect_terms(data, out: set) -> set:
    """Every leaf string in the private file is a term to look for."""
    if isinstance(data, dict):
        for k, v in data.items():
            if k.startswith("_"):
                continue
            collect_terms(v, out)
    elif isinstance(data, list):
        for v in data:
            collect_terms(v, out)
    elif isinstance(data, str):
        s = data.strip()
        # Skip boilerplate that is public by design, and anything too short or
        # too generic to be a meaningful signal.
        if len(s) < 4:
            return out
        if s.lower() in {"net 15", "biweekly", "sugo", "contractor", "sugo ai",
                         "independent contractor", "marc@sugoai.com",
                         "sugo product company, llc", "d/b/a sugo ai"}:
            return out
        if s.startswith("©") or "{year}" in s:
            return out
        out.add(s)
    return out


def extract(path: Path) -> str:
    if path.suffix.lower() == ".pdf":
        try:
            return subprocess.run(["pdftotext", str(path), "-"],
                                  capture_output=True, text=True,
                                  timeout=30).stdout
        except Exception:
            return ""
    return ""


def files(repo: Path, staged: bool):
    if staged:
        out = subprocess.run(["git", "-C", str(repo), "diff", "--cached",
                              "--name-only", "--diff-filter=ACM"],
                             capture_output=True, text=True).stdout
        for line in out.split("\n"):
            if line.strip():
                p = repo / line.strip()
                if p.exists():
                    yield p
        return
    for p in repo.rglob("*"):
        if p.is_file() and not any(d in p.parts for d in SKIP_DIRS):
            yield p


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--repo", type=Path, default=Path("."))
    ap.add_argument("--staged", action="store_true")
    args = ap.parse_args()
    repo = args.repo.resolve()

    pf = find_private(repo)
    if pf is None:
        print(f"check-private: no {PRIVATE_NAME} on this machine — nothing to check.")
        return 0

    terms = sorted(collect_terms(json.loads(pf.read_text(encoding="utf-8")), set()),
                   key=len, reverse=True)
    if not terms:
        print("check-private: private file has no terms to guard.")
        return 0

    patterns = [(t, re.compile(re.escape(t), re.IGNORECASE)) for t in terms]
    hits = []

    for p in files(repo, args.staged):
        if p.name == PRIVATE_NAME or p.resolve() == pf.resolve():
            continue
        suffix = p.suffix.lower()
        if suffix in TEXT_LIKE:
            try:
                body = p.read_text(encoding="utf-8", errors="ignore")
            except Exception:
                continue
        elif suffix in EXTRACTABLE:
            body = extract(p)
        else:
            continue
        for term, rx in patterns:
            if rx.search(body):
                hits.append((p.relative_to(repo), term))

    if not hits:
        n = "staged files" if args.staged else "the working tree"
        print(f"check-private: clean — {len(terms)} private terms, none found in {n}.")
        return 0

    print("check-private: PRIVATE FACTS FOUND\n")
    for path, term in hits:
        # Never echo the term itself into CI logs.
        print(f"  {path}  ({len(term)}-char private term)")
    print("\nReplace with the public convention: 'Example Client, LLC' and '$1.00'.")
    print("If a hit is a false positive, tighten the term in "
          f"{PRIVATE_NAME} rather than weakening the guard.")
    return 1


if __name__ == "__main__":
    sys.exit(main())
