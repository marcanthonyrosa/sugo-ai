# Sugo AI

Marketing site for Sugo Product Company — an AI product and consulting practice
that helps mid-to-large enterprises cross the gap between AI pilots and
production.

## Project overview

- **Framework:** Next.js 16 (App Router, React 19, Turbopack)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 with CSS custom-property design tokens
- **Components:** shadcn/ui (New York, neutral base) and Base UI primitives
- **Content:** MDX articles via `next-mdx-remote` + `gray-matter` frontmatter
- **Package manager:** npm

Routes, project layout, and content conventions are in [`README.md`](README.md).

### Commands

```bash
npm run dev           # local dev server
npm run build         # production build
npm run lint          # eslint
npm run type-check    # tsc --noEmit
npm run tokens        # regenerate CSS from the token JSON
npm run tokens:check  # fail if generated token files have drifted
```

## Brand — non-negotiable

This repository has a locked design system: **Viola Light**, decided 2026-08-13.
Everything predating that date is out of the system — not a reference, not a
fallback, not a migration source. If you find yourself reading `legacy/`,
`TODO.md`, or a retired typeface name, stop: you are looking at a brand that no
longer exists.

**Read `docs/brand/README.md` before any visual, copy, or document work.** It is
the index. Do not reconstruct the system from the CSS.

### Authority

1. `docs/brand/tokens/sugo.tokens.json` — the source of truth for every value
2. `docs/brand/01-VISUAL_IDENTITY.md` — the source of truth for every rule
3. The applied standard for the medium — `02-WEB_UI_STANDARD.md` (web, app) or
   `03-DOCUMENT_SYSTEM.md` (print, PDF, deck)
4. The implementation — `src/app/site.css`, `pages-*.css`, a template, a skill

`src/app/tokens.css`, `docs/brand/tokens/sugo-tokens.css`, and
`docs/brand/tokens/sugo-theme.css` are **generated**. Never hand-edit them.
Change the JSON, run `npm run tokens`, commit the result.

**No file below rank 2 may declare a design value.** Inline hex, inline
`oklch()`, and a bare `font-family: "Some Font"` are defects, not shortcuts. If a
needed value does not exist, add it to the JSON first.

### The eight rules

1. **Navy `#101D3E` is the only ink and the only dark.** Every headline, every
   body line, every 2px rule, the primary button, one dark flood per page. Never
   black. Never grey body text.
2. **Viola is the atmosphere.** `#E3D4EF` is the brand colour. `#F3EEF8` is its
   quiet tint. `#B296D2` is **decoration only** — 2.29:1 on paper, so never type,
   never a meaningful icon, never a sole state indicator.
3. **One accent per composition, and accents mean things.** Saffron `#E8C270` =
   evidence, a number or a citation. Blush `#EDD0C6` = human, plain language or
   warmth. Never both in one section.
4. **The mark is the only red.** The chunky pixel tomato, ≤3% of any composition.
   Never recoloured, outlined, rotated, or placed on saffron, blush, or a photo.
   Clear space is 25% of its height.
5. **2px navy carpentry.** Panels are drawn, not floated; adjacent panels share
   their seam. Radii 2/4/8/10px — nothing is a pill. The only shadow is a stacked
   hard offset `4px 4px 0`. No blur, ever.
6. **Two families plus one outlier.** Red Hat Display 700/500 display, General
   Sans 400/600 body, JetBrains Mono for numerals and metadata only. Sentence case
   headings. **No italics** — body 600 carries emphasis. No emoji.
7. **Motion is quiet.** One orchestrated entrance per page, 160ms crossfades, the
   Hop on the hero mark. Nothing else. Honour `prefers-reduced-motion`.
8. **Honest copy.** No invented metric, testimonial, client name, logo, or date.
   The one citable figure is MIT NANDA, August 2025, ≈5% of enterprise GenAI
   pilots showing measurable P&L impact — and it always travels with its footnote.

### Privacy — this repository is public

Never commit: a real client name on an invoice or example, a real fee or rate,
the business address (it is a home address), an EIN, bank or remittance detail,
or a personal email.

Those live in `.sugo-private.json`, which is gitignored. Examples use
**`Example Client, LLC`** and **`$1.00`** — a convention, not a placeholder
awaiting real values.

**This applies to rendered output too.** A PDF carries everything its context
file did. Run `python3 cleanup/check-private.py --repo . --staged` before
committing; it scans PDFs as well as source and reads its denylist from the
gitignored private file.

### Facts that must be exact

| Field | Value |
| --- | --- |
| Legal entity | Sugo Product Company, LLC |
| Trade name | Sugo AI (Texas DBA) |
| Contractual form | Sugo Product Company, LLC d/b/a Sugo AI |
| Signatory | Marc Rosa, **Managing Member** (marketing title: Founder) |
| Email | `marc@sugoai.com` — `hello@` does not exist |
| Domain | `https://sugoai.com` — apex, no `www` |
| Copyright | `© <year> Sugo Product Company, LLC d/b/a Sugo AI` |

The **LLC signs**. The DBA never signs. Billing defaults to the LLC; invoicing
personally as an independent contractor is a per-client exception recorded in
`.sugo-private.json` and **never inferred**.

### Building things

| Task | Do this |
| --- | --- |
| A page or component | Read `docs/brand/02-WEB_UI_STANDARD.md`. All eight interactive states. Verify 320/375/414/768px. |
| A document, invoice, proposal, deck | Use the `sugo-document` skill — `.claude/skills/sugo-document/`. Never improvise a layout. |
| Copy of any kind | Read `docs/brand/MESSAGING_AND_VOICE.md`. |
| Anything with the entity or a claim in it | Read `docs/brand/04-BRAND_FACTS.md` first. |
| Changing a brand decision | Amend `docs/brand/DECISIONS.md` first, then the JSON, then `npm run tokens`, then the rule, then the implementation. Never the implementation first. |

### Before you emit

- [ ] Every colour and font is a token — no inline values
- [ ] Navy ink, paper ground, one accent, one flood
- [ ] No pill radius, no blurred shadow, no italics, no emoji
- [ ] All eight states on every interactive element
- [ ] Contrast: body ≥4.5:1, graphics ≥3:1. Nothing set in `viola-500`
- [ ] 320/375/414/768px clean, no horizontal scroll
- [ ] `prefers-reduced-motion` honoured
- [ ] No invented facts; any figure cited and footnoted
- [ ] No private facts, in source or in rendered output
- [ ] `npm run lint`, `npm run type-check`, `npm run tokens:check` clean
