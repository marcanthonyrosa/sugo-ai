# Sugo AI — values for Word, PowerPoint, Google, Figma, Canva, print

Everything here is derived from [`sugo.tokens.json`](sugo.tokens.json). If a value
disagrees with the JSON, the JSON wins.

Use this page when you are somewhere that cannot read CSS: Word, PowerPoint,
Excel, Google Docs/Slides, Figma, Canva, an email signature editor, a printer's
spec sheet.

---

## Fonts to install

Install all three as desktop fonts before building anything in Office.

| Role | Family | Weights to install | Source | Licence |
| --- | --- | --- | --- | --- |
| Display | Red Hat Display | Medium (500), Bold (700) | fonts.google.com/specimen/Red+Hat+Display | SIL OFL 1.1 |
| Body | General Sans | Regular (400), Semibold (600) | fontshare.com/fonts/general-sans | ITF Free Font Licence |
| Figures / meta | JetBrains Mono | Regular (400), Bold (700) | fonts.google.com/specimen/JetBrains+Mono | SIL OFL 1.1 |

**Licence constraints that actually matter:**

- Red Hat Display and JetBrains Mono are OFL. Self-host, embed, redistribute freely.
- General Sans is free for commercial use, but **self-hosting the webfont requires
  written ITF consent** and the font files may not be redistributed. On the web,
  load it from `api.fontshare.com`. In documents, install the desktop OTF locally
  and **deliver as PDF** — do not ship a DOCX that depends on the recipient having
  General Sans installed.

**Fallback ladder** (declare in this order in any Word or Google template):

- Display → `Red Hat Display, Segoe UI, Helvetica Neue, Arial`
- Body → `General Sans, Segoe UI, Helvetica Neue, Arial`
- Figures → `JetBrains Mono, Consolas, Menlo, Courier New`

---

## Colour — hex for pickers

Word, PowerPoint, and Google all take hex without the `#`.

### Core

| Name | Hex | RGB | Use it for |
| --- | --- | --- | --- |
| Paper | `F5F2E8` | 245, 242, 232 | Page ground on screen. On paper stock, leave white. |
| Paper 2 | `EFEBDD` | 239, 235, 221 | Alternating band, table zebra |
| Card | `FBFAF4` | 251, 250, 244 | Raised panel, table body |
| **Ink (navy)** | **`101D3E`** | 16, 29, 62 | All headline and body type; every 2pt rule; the only dark flood |
| Ink 700 | `283854` | 40, 56, 84 | Body copy, secondary type |
| Ink 500 | `4C586F` | 76, 88, 111 | Meta, captions, footnotes |
| Hairline | `D9DEE6` | 217, 222, 230 | Thin rules inside a panel. Never type. |

### Viola

| Name | Hex | RGB | Use it for |
| --- | --- | --- | --- |
| Viola 50 | `F3EEF8` | 243, 238, 248 | Callout ground, tinted table header |
| **Viola** | **`E3D4EF`** | 227, 212, 239 | The brand colour. Cover fields, hero blocks, social cards |
| Viola 400 | `CCB8DC` | 204, 184, 220 | Depth inside a viola field |
| Viola 500 | `B296D2` | 178, 150, 210 | Decoration only — shadows, dots, dividers. **Never type.** |
| Viola 900 | `855CA7` | 133, 92, 167 | Accent type, emphasised figure, link colour |

### Accents — one per composition, never two in a section

| Name | Hex | RGB | Means |
| --- | --- | --- | --- |
| Saffron | `E8C270` | 232, 194, 112 | Evidence. Numbers, cited findings, the figure you want read first |
| Viola | `E3D4EF` | 227, 212, 239 | Human. Plain language, origin story, warmth. Replaced blush, retired in B-45 |
| Sky | `C9D3DA` | 201, 211, 218 | Neutral fill in architecture diagrams. Not a marketing surface |

### Mark-only

Inside the pixel tomato and nowhere else. Do not sample these for anything.

| Name | Hex |
| --- | --- |
| Tomato coral | `EC705B` |
| Stem green | `264534` |

### Charts — use in this order

`101D3E` → `9970C4` → `B5820C` → `607F91` → `5C8E67` → `C0765D`

Every step clears 3:1 against paper. Always add a shape, label, or pattern —
never encode meaning by hue alone.

---

## Type sizes for documents

| Element | Font | Size | Weight | Leading | Notes |
| --- | --- | --- | --- | --- | --- |
| Document title | Red Hat Display | 28 pt | Bold | 1.05 | Tracking −2%. Sentence case. |
| Section head | Red Hat Display | 17 pt | Bold | 1.15 | |
| Subsection | Red Hat Display | 13 pt | Medium | 1.25 | |
| Body | General Sans | 10.5 pt | Regular | 1.45 | Never below 10 pt — the apertures close up |
| Body strong | General Sans | 10.5 pt | Semibold | 1.45 | Use instead of italics |
| Small / caption | General Sans | 9 pt | Regular | 1.4 | |
| Eyebrow | JetBrains Mono | 8.5 pt | Regular | — | UPPERCASE, tracking +14% |
| Figures, dates, amounts | JetBrains Mono | 8.5–14 pt | Regular | — | Tabular numerals on |
| Slide title | Red Hat Display | 36 pt | Bold | 1.05 | |
| Slide body | General Sans | 18 pt | Regular | 1.35 | |

---

## Page setup

| Format | Size | Margins |
| --- | --- | --- |
| Document (proposal, SOW, report, memo, contract) | Letter 8.5 × 11 in | 0.9 top / 0.75 sides / 0.75 bottom |
| Sheet (invoice, one-pager, cover) | Letter 8.5 × 11 in | 0.5 in all round |
| Deck | 16:9, 13.333 × 7.5 in | 0.6 in |
| Social card | 1200 × 630 px | 62 top / 74 sides / 56 bottom |

---

## The mark

- Canonical file: `public/brand/sugo-mark-simple-transparent.png` (372 × 398, RGBA).
- Clear space on all sides: **25% of the mark's height**.
- Minimum size: **16 px** on screen, **0.2 in** in print. Below that, don't use it.
- The detailed ("complex") mark needs **64 px / 0.6 in** minimum — it loses its
  pixels under that.
- Approved backgrounds: paper, paper 2, card, white, viola, viola 50, ink.
- Never on saffron or a photograph.
