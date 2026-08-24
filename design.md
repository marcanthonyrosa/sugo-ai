# Design — Sugo AI

Locked system: **Viola Light**, decided 2026-08-13 after the Panel Press concept
round (variants A–E2), the type/art/motion demos, and the user's hardened picks.

**This file is the Hallmark entry point. It carries no independent authority.**
The system lives in [`docs/brand/`](docs/brand/README.md) — read that first.

The diversification rule is **INVERTED** for this project: pages must SHARE this
system rather than differentiate from each other. Amend intentionally, and amend
[`docs/brand/DECISIONS.md`](docs/brand/DECISIONS.md) first.

## Where things are

| Need | File |
| --- | --- |
| Every value | [`docs/brand/tokens/sugo.tokens.json`](docs/brand/tokens/sugo.tokens.json) |
| Every rule — mark, colour, type, geometry, motion, imagery | [`docs/brand/01-VISUAL_IDENTITY.md`](docs/brand/01-VISUAL_IDENTITY.md) |
| Web and app implementation | [`docs/brand/02-WEB_UI_STANDARD.md`](docs/brand/02-WEB_UI_STANDARD.md) |
| Documents, PDFs, decks | [`docs/brand/03-DOCUMENT_SYSTEM.md`](docs/brand/03-DOCUMENT_SYSTEM.md) |
| Entity, boilerplate, approved claims | [`docs/brand/04-BRAND_FACTS.md`](docs/brand/04-BRAND_FACTS.md) |
| Strategy and voice | `docs/brand/BRAND_FOUNDATIONS.md`, `docs/brand/MESSAGING_AND_VOICE.md` |
| Why something is the way it is | [`docs/brand/DECISIONS.md`](docs/brand/DECISIONS.md) |

## System summary

- **Genre** · playful-editorial, calm hierarchy
- **Macrostructure** · Split Studio panel-carpentry (home) · document/workflow
  spines (inner pages)
- **Theme** · Viola Light — light viola atmosphere, navy as sole dark and action
- **Axes** · light / geometric-sans / chromatic-viola-light
- **Type** · Red Hat Display 700/500 · General Sans 400/600 · JetBrains Mono
  (numerals and metadata only). Sentence case. No italics.
- **Mark** · the chunky pixel tomato. Nav 22px beside the wordmark
  (`translateY(-1px)`); hero ~54%/max-320px on flood panels. The mark is the ONLY
  red-family element, ≤3% of viewport.
- **Carpentry** · 2px solid navy panel borders; adjacent panels share the seam.
  Radii 2/4/8/10px. Only shadow is the stacked hard offset `4px 4px 0`, no blur.
- **Nav** · sticky, in flow, never fixed. The 2px ink rule is the seam content
  slides beneath.
- **Floods** · navy is the page's only dark moment, one maximum. Text flips to
  paper.
- **Motion** · Hop idle on the hero mark (~3.4s, stepped); pot steam where the pot
  appears; 160ms crossfades on tab switches; one orchestrated entrance per page.
  Nothing else. Reduced motion: static or ≤150ms opacity.

## Tokens

`src/app/tokens.css` is the runtime layer and is **generated** from the JSON by
`npm run tokens`. Never hand-edit it, `docs/brand/tokens/sugo-tokens.css`, or
`docs/brand/tokens/sugo-theme.css`.

`src/app/site.css` carries shared chrome; `pages-core.css` and `pages-sub.css`
carry page sections. None of them may declare a design value.

## Voice

Plain, operator-sharp, production-oriented. No consulting filler, no startup
clichés. No invented metrics, testimonials, client names, or dates. The only
citable number is MIT NANDA (August 2025), footnoted. Quietly playful — at most
one wry beat per section; the sauce motif lives in the About origin story and the
footer footnote only. Contact is `marc@sugoai.com` everywhere.

Full rules: [`docs/brand/MESSAGING_AND_VOICE.md`](docs/brand/MESSAGING_AND_VOICE.md).
