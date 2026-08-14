# Social-card fonts

These Latin webfont subsets are the repository-local source for the website and
the deterministic Open Graph image renderer in `src/lib/og-image.tsx`. Keeping
them in the repository makes builds reproducible without a compile-time request
to a third-party font host.

The optimized WOFF2 files serve the website. Static Bold TTF instances are kept
for Next.js ImageResponse, whose font parser does not support WOFF2 or variable
TTF input.

- Red Hat Display is distributed under the SIL Open Font License 1.1:
  [`LICENSE-red-hat-display.txt`](LICENSE-red-hat-display.txt) and
  <https://fonts.google.com/specimen/Red+Hat+Display>
- JetBrains Mono is distributed under the SIL Open Font License 1.1:
  [`LICENSE-jetbrains-mono.txt`](LICENSE-jetbrains-mono.txt) and
  <https://fonts.google.com/specimen/JetBrains+Mono>

The website loads these files through `next/font/local` in `src/app/layout.tsx`.
