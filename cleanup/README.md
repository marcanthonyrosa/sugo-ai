# Repo cleanup — removing the pre-redesign layer

One script, one job: strip the CSS that predates the 2026-08-13 redesign out of
`src/app/globals.css` without breaking the routes that still depend on it.

## Why this is scripted rather than hand-deleted

`globals.css` is 1,693 lines. Most of it is archetype sections from before the
redesign — but a comment near line 1,261 marks part of it as legacy styling
still serving the Ask Sugo, Writing, and client-example routes. Those routes are
live. A blind delete breaks them.

So the script decides by evidence: it reads every `.tsx`, `.ts`, `.mdx`,
`site.css`, `pages-core.css`, and `pages-sub.css`, and deletes a section only
when **every** class it defines is referenced nowhere.

## Result on the current repo

```
1,693 lines → 1,043 lines   (650 removed, 38%)
```

Deleted — no class referenced anywhere:

| Section | Lines |
| --- | --- |
| ARCHETYPE E · STORY | 478–551 |
| ARCHETYPE F · NUMBERED CHAPTERS | 552–638 |
| PRINCIPLES | 639–682 |
| PRICING | 683–735 |
| PORTRAIT + INTRO | 736–808 |
| PULLQUOTE | 809–853 |
| PERSONAL ANCHOR | 906–944 |
| CONTACT PAGE — ACTIONS | 945–1044 |
| CONTACT PAGE — FILTER | 1045–1114 |
| CONTACT PAGE — SIGNOFF | 1115–1146 |
| `.dark` block | — |

Kept, and why:

- **RESET & BASE, BUTTONS & LINKS, ENTRANCE MOTION** — element selectors, not
  page components. Protected from auto-deletion.
- **LEGACY (611–1043 after cleanup)** — 19 of its 38 classes are live on
  `/ask`, `/writing`, and `/tmc`.
- **ARCHETYPE B / C / D / G, TIMELINE** — each has at least one live class.
  Several of those matches are weak (`accent`, `callout`, `success`, `work`,
  `card` are common words that can match in prose). Worth a manual look before
  a second pass.
- **All `@theme` tokens** — every one still has a consumer inside the sections
  above. They prune themselves automatically once LEGACY is retired; re-run the
  script then.

## Run it

```bash
python3 clean-globals.py --repo /path/to/sugo-ai            # dry run, report only
python3 clean-globals.py --repo /path/to/sugo-ai --write    # apply, writes globals.css.bak
```

The script is idempotent — a second run on a cleaned file removes nothing.
Braces balance after the write; that is checked, but it is not a substitute for
a build.

## After running

1. `npm run build` and `npm run type-check`
2. Open every route and diff visually: `/`, `/how-we-work`, `/about`,
   `/contact`, `/ask`, `/writing`, `/tmc`, `/tmc-example`
3. Delete `globals.css.bak` once you are satisfied

## Not covered by this script — do by hand

- **`legacy/`** — delete the directory outright. It is the pre-redesign export.
- **`TODO.md`** — dated April 2026, still names Fraunces and Switzer. Rewrite or
  delete; no line in it is a current decision.
- **Losing prototype rounds** — `concept-1a`–`1d`, `concept-2`, `concept-3`,
  `_demo-kit-reference.html`. Archive or delete. Keep `home-master.html`,
  `how-we-work.html`, `contact.html`, `about.html`, `writing.html`.
- **`design.md`** — states `--display-tracking: -0.02em` and `--display-lh: 1.12`.
  `site.css` ships `-0.015em` and `1.1`. Correct `design.md`.
- **RESET & BASE overlap** — `globals.css` sets `h1, h2, h3, h4` to
  `font-weight: 400`; `site.css` sets `h1, h2, h3` to `700` and never mentions
  `h4`. Because `site.css` imports second it wins for h1–h3, but **`h4` still
  renders at weight 400** — a weight the vendored Red Hat Display subset
  (500–700) does not carry, so the browser synthesises it. Add `h4` to the
  `site.css` heading rule.
- **`sugo-product-company`** — retire the repo or redirect it to sugoai.com.

## check-private.py — the guard

Sanitising by hand does not hold. It failed twice while this library was being
built: a client name survived in a lowercase filename example
(`sugo-<client>-proposal-…`) that a case-sensitive grep missed, and three
rendered PDFs kept real names and a real fee after their source files were
already clean.

So the check is scripted, and it scans rendered output as well as source.

```bash
python3 cleanup/check-private.py --repo .            # scan the working tree
python3 cleanup/check-private.py --repo . --staged   # scan staged files only
```

**The denylist is never committed.** The guard reads its terms out of
`.sugo-private.json` — the gitignored file that already holds the client names,
the address, the rates, and the contact details. Every leaf string in that file
becomes a term to search for, minus the public boilerplate. On a machine without
the private file the guard prints one line and exits 0, so it never blocks a
contributor who has nothing to leak.

It scans `.pdf` as well as text, via `pdftotext`. A clean source file next to a
rendered PDF that still names the client is not clean.

Findings are reported as `path (N-char private term)` rather than echoing the
term, so a CI log never becomes the leak.

### Install as a pre-commit hook

```bash
cat > .git/hooks/pre-commit <<'EOF'
#!/bin/sh
python3 cleanup/check-private.py --repo . --staged || exit 1
EOF
chmod +x .git/hooks/pre-commit
```

### On false positives

Tighten the term in `.sugo-private.json`; do not weaken the guard. Marc's own
legal name is the judgement call — it appears legitimately in
`04-BRAND_FACTS.md` as the contractor billing party, so it probably does not
belong in the denylist. Client names, the address, fees, and remittance detail
always do.

## Separate from cleanup: what the public repo already exposes

The brand library keeps client names out of its own documents. The repository
itself does not. Before making anything more public, decide what to do about:

- the `/tmc` and `/tmc-example` routes and their components
- `public/tmc-example/` — an architecture diagram, an ERD, and a system page
- `src/components/tmc/`

They are `noindex`, which keeps them out of search but not out of the repo. If
the engagement is meant to be private, they belong in a private repo or behind
an env flag, not in `noindex`. If it is fine for them to be visible, nothing to
do — but make that a decision rather than a default.
