#!/usr/bin/env python3
"""
Measure line length on a built Sugo document.

DECISIONS B-46 requires the measure to be checked on the built PDF rather than
estimated, because the two disagree: a re-render can resolve a different font
than the one build.py embeds, and General Sans is narrow enough that a fallback
face shifts the count by several characters a line.

    python3 scripts/measure.py out/proposal.pdf

Target 75-85 characters. Over that, take the side margin in — the margin is the
measure, since nothing in this system caps its own width (B-47).
"""
import statistics
import subprocess
import sys
from pathlib import Path


def measure(pdf: Path) -> int:
    if not pdf.exists():
        print(f"ERROR: {pdf} not found", file=sys.stderr)
        return 1
    try:
        txt = subprocess.run(["pdftotext", str(pdf), "-"],
                             capture_output=True, text=True, check=True).stdout
    except FileNotFoundError:
        print("ERROR: pdftotext not installed. brew install poppler", file=sys.stderr)
        return 1

    # Running copy only. Below 45 characters is a table cell, a heading or a
    # mono run; above 140 is an extraction artifact rather than a set line.
    body = [len(l.strip()) for l in txt.splitlines() if 45 <= len(l.strip()) <= 140]
    if not body:
        print(f"{pdf.name}: no running copy found")
        return 0

    info = subprocess.run(["pdfinfo", str(pdf)], capture_output=True, text=True).stdout
    pages = next((l.split()[-1] for l in info.splitlines() if l.startswith("Pages")), "?")

    med = statistics.median(body)
    p90 = sorted(body)[int(len(body) * 0.9)]
    verdict = "ok" if med <= 85 else "TOO LONG — take the side margin in"
    print(f"{pdf.name}")
    print(f"  pages            {pages}")
    print(f"  body lines       {len(body)}")
    print(f"  chars per line   median {med:.0f}   p90 {p90}   max {max(body)}")
    print(f"  target 75-85     {verdict}")
    return 0 if med <= 85 else 2


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__.strip(), file=sys.stderr)
        raise SystemExit(1)
    raise SystemExit(max(measure(Path(a)) for a in sys.argv[1:]))
