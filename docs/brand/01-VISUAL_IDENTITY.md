# Sugo AI visual identity

Version 1.0.0 · Last reviewed 24 August 2026

The cross-medium rules for how Sugo AI looks. Everything here holds whether the
artifact is a web page, an application screen, a proposal PDF, a slide, an
invoice, a social card, or an email signature.

**This document covers:** the mark, colour, typography, geometry, motion,
imagery, iconography, and the accessibility floor.

**This document does not cover:** what to say (see
[`MESSAGING_AND_VOICE.md`](MESSAGING_AND_VOICE.md)), why the brand exists (see
[`BRAND_FOUNDATIONS.md`](BRAND_FOUNDATIONS.md)), web component behaviour (see
[`02-WEB_UI_STANDARD.md`](02-WEB_UI_STANDARD.md)), or page geometry for printed
artifacts (see [`03-DOCUMENT_SYSTEM.md`](03-DOCUMENT_SYSTEM.md)).

Values live in [`tokens/sugo.tokens.json`](tokens/sugo.tokens.json). If a number
here disagrees with the tokens file, the tokens file wins.

---

## 1. The system in one paragraph

Sugo AI is **Viola Light**: warm paper grounds, a light viola atmosphere, navy
as the only ink and the only dark, and a chunky pixel tomato as the single
memorable gesture. Panels are drawn in 2 px navy like carpentry — adjacent
panels share a seam. Type is confident geometric display over highly readable
body, with a monospace reserved for numbers and metadata. Motion is quiet: one
orchestrated entrance, one idle hop on the mark, nothing else. Colour creates
warmth; form stays disciplined.

---

## 2. The mark

### 2.1 What it is

A chunky pixel tomato. Coral body, dark green stem, two white specular pixels.
It is the only red-family element anywhere in the system, and it is deliberately
scarce — the red should never exceed roughly **3% of any composition**.

Canonical file: `public/brand/sugo-mark-simple-transparent.png` — 372 × 398,
RGBA, transparent.

Two artwork variants exist:

| Variant | File stem | Minimum size | Use |
| --- | --- | --- | --- |
| **Simple** | `sugo-mark-simple-*` | 16 px / 0.2 in | Default everywhere. Nav, footer, favicons, documents, social. |
| **Complex** | `sugo-mark-complex-*` | 64 px / 0.6 in | Large-format only — poster, hero art, merch. Its navy outline and extra pixels collapse when small. |

### 2.2 The lockup

The primary lockup is **wordmark left, mark right**.

- Wordmark: `Sugo AI`, Red Hat Display 700, letter-spacing `0.01em`
- Gap between wordmark and mark: `0.35em`
- Mark height: **1.1 × the wordmark's font size** (at a 20 px wordmark, the mark
  is 22 px)
- Mark is optically raised `1px` (`translateY(-1px)`) — the pixel tomato sits
  low against a cap-height wordmark without it

Three approved forms, in order of preference:

1. **Lockup** — wordmark + mark. Nav, footer, letterhead, deck title slide, email
   signature.
2. **Mark alone** — app icons, favicons, avatars, hero art, watermarks, anywhere
   the name is already present in type.
3. **Wordmark alone** — allowed only where the mark cannot reproduce cleanly
   (embroidery below 1 in, single-colour fax-grade output, a partner's logo bar
   that forbids illustration).

There is no stacked lockup, no tagline lockup, and no monogram. If a layout
seems to need one, it needs a different layout.

### 2.3 Clear space

Clear space on all four sides is **25% of the mark's height**. Nothing enters it
— not type, not a rule, not another logo, not a panel edge.

In a lockup, clear space is measured from the outer bounds of the whole lockup,
not the mark alone.

### 2.4 Backgrounds

| Ground | Approved | Note |
| --- | --- | --- |
| Paper `#F5F2E8` | Yes | Default |
| Paper 2 `#EFEBDD` | Yes | |
| Card `#FBFAF4` | Yes | |
| White `#FFFFFF` | Yes | Print sheet stock |
| Viola `#E3D4EF` | Yes | Hero flood, social card |
| Viola 50 `#F3EEF8` | Yes | |
| Ink navy `#101D3E` | Yes | The coral reads well; wordmark flips to paper |
| Saffron `#E8C270` | **No** | Warm-on-warm; the tomato disappears |
| Blush `#EDD0C6` | **No** | Same family as the coral; the mark stops reading |
| Photography | **No** | Place the mark on a paper or viola plate instead |

### 2.5 Misuse

Do not:

- recolour the mark, including to a single-colour or duotone version
- outline it, add a drop shadow, glow, gradient, or bevel
- rotate or skew it — the only sanctioned transform is the vertical Hop
- re-draw it at a different pixel density, or "clean up" its soft edges
- flatten the transparent PNG by colour-selecting the background out (the white
  highlight pixels go with it)
- place another logo inside its clear space
- use the complex mark below 64 px
- stretch, crop, or set it inside a circle, pill, or badge
- animate it beyond the Hop and the pot steam
- pair it with a tagline as a fixed lockup

### 2.6 Motion of the mark — "Hop"

The mark is mostly still. Every ~3.4 s it makes a quick two-frame vertical hop
(−9 px, then −3 px, then rest), stepped, never eased. It runs on the hero mark
only — not in the nav, not in the footer, not in documents. Under
`prefers-reduced-motion: reduce` the Hop does not run at all.

---

## 3. Colour

### 3.1 Roles, not a palette

Every colour has one job. Colour is not decoration to be distributed evenly.

| Token | Hex | Job |
| --- | --- | --- |
| `paper` | `#F5F2E8` | Default ground |
| `paper-2` | `#EFEBDD` | Alternating band, secondary ground |
| `card` | `#FBFAF4` | Raised panel, table body |
| `ink` | `#101D3E` | Type, 2 px carpentry, primary action, the only dark flood |
| `ink-2` | `#283854` | Body copy, secondary type |
| `muted` | `#4C586F` | Meta, captions, footnotes |
| `rule` | `#D9DEE6` | Hairline inside a panel. Never type. |
| `viola-50` | `#F3EEF8` | Supporting tint surface, ticket tray, callout |
| `viola` | `#E3D4EF` | The brand colour. Hero flood, social card, theme colour |
| `viola-400` | `#CCB8DC` | Depth inside a viola field |
| `viola-500` | `#B296D2` | Decoration only — stacked shadow, dividers, dots |
| `viola-900` | `#855CA7` | Link underline, emphasis type, document accent |
| `saffron` | `#E8C270` | **Evidence** |
| `blush` | `#EDD0C6` | **Human** |
| `sky` | `#C9D3DA` | **Diagram fill** — reserved, not a marketing surface |

### 3.2 The two accents carry meaning

Saffron and blush are not interchangeable swatches.

- **Saffron = evidence.** The stat panel. The cited figure. The number you want
  read before anything else. On the homepage it holds ≈5%; on `/how-we-work` it
  holds the pilots-stall stat. If there is no number and no citation, saffron is
  the wrong colour.
- **Blush = human.** Plain-language explainers, the origin story, what to bring
  to a call. The warm moment where the brand stops being a vendor.

**One accent per composition.** Never saffron and blush in the same section. A
page may use both if they sit in different sections doing different jobs.

### 3.3 Ratio

Roughly, per composition:

- 80% paper / card / ink
- 15% viola family
- ≤5% one accent
- ≤3% mark coral

If a layout needs more colour than that, the layout is under-structured. Fix the
hierarchy, don't add hue.

### 3.4 Dark

`ink` navy floods are the **only** dark moments — the manifesto band, the
lifecycle band, the About contrast band. One per page, maximum. On a flood, type
flips to `paper`, hairlines become `rule-flood` `#4C586F`, viola tints carry the
emphasis, and the focus ring switches to `focus-on-flood` `#F5EFD7`.

Sugo has **no dark mode**. See `DECISIONS.md` D-14.

### 3.5 Contrast — verified

Measured against WCAG 2.2. These are facts about the palette, not aspirations.

| Pair | Ratio | Verdict |
| --- | --- | --- |
| ink on paper | 14.79 | AAA |
| ink on card | 15.85 | AAA |
| ink on viola | 11.78 | AAA |
| ink on saffron | 9.77 | AAA |
| ink on blush | 11.39 | AAA |
| ink-2 on paper | 10.51 | AAA |
| muted on paper | 6.39 | AA |
| muted on viola | 5.09 | AA |
| paper on ink | 14.79 | AAA |
| viola-50 on ink | 14.52 | AAA |
| viola-900 on paper | 4.59 | AA |
| **viola-500 on paper** | **2.29** | **FAIL** |

**Standing rule:** `viola-500` is decorative only. It may be a shadow, a
divider, a dot, or a non-essential flourish. It may never be type, an icon that
carries meaning, or the sole indicator of state.

### 3.6 Status colours

Functional application UI only — form validation, toasts, table states. They
never appear in marketing, on the website chrome, or in documents. The one
exception is a past-due stamp on an invoice.

| State | Surface | Ink | Contrast |
| --- | --- | --- | --- |
| Success | `#D0EED5` | `#205335` | 7.18 |
| Warning | `#F9E6BF` | `#754B10` | 6.17 |
| Danger | `#FBDCD9` | `#9B1E22` | 6.1 |
| Info | `#DCEAF4` | `#385975` | 6.00 |

Danger is a deep claret, deliberately unlike the tomato coral. The mark must stay
the only red-family *brand* element; a validation error is not brand.

### 3.7 Data visualisation

Six-step categorical series, used **in order**:

`#101D3E` → `#9970C4` → `#B5820C` → `#607F91` → `#5C8E67` → `#C0765D`

Every step clears 3:1 against paper (WCAG 2.2 §1.4.11). Always encode with shape,
direct label, or pattern in addition to hue — never hue alone. Grid lines are
`rule` at 1 px. Axis labels are JetBrains Mono. No gradients, no 3-D, no
drop shadows on data.

---

## 4. Typography

### 4.1 The three families

| Role | Family | Weights | Job |
| --- | --- | --- | --- |
| Display | **Red Hat Display** | 700, 500 | Headlines, panel titles, statements, stage names |
| Body | **General Sans** | 400, 600 | All running text, UI labels, buttons |
| Outlier | **JetBrains Mono** | 400, 700 | Numerals, eyebrows, metadata, footnotes, code, table headers |

Two families plus one outlier. Never introduce a fourth. Never use the outlier
for running prose.

### 4.2 Rules that hold everywhere

- **Sentence case for headings.** Always. No Title Case, no ALL CAPS headlines.
- **Uppercase is reserved for eyebrows and nav links**, always in the outlier or
  body 600, always with ≥`0.08em` tracking.
- **No italics.** Use body 600 for emphasis.
- **Display tracking is negative** (`-0.015em`); body and outlier are not.
- **Numbers are tabular.** `font-variant-numeric: tabular-nums` on every figure,
  stat, price, date, and table column.
- **Headline length:** aim under 50 characters, ceiling 70.
- **Measure:** body copy caps at `62ch`; ledes at `52ch`; display heads at `22ch`.
- **Long words wrap.** `overflow-wrap: anywhere; min-width: 0` on every display
  heading — the display sizes will otherwise blow out a 320 px viewport.

### 4.3 Web scale

1.25 modular scale from a 17 px body.

| Token | Size |
| --- | --- |
| `sm` | 0.875rem |
| `base` | 1.0625rem |
| `md` | 1.25rem |
| `lg` | 1.5625rem |
| `xl` | 1.953rem |
| `2xl` | 2.441rem |
| `3xl` | 3.052rem |
| `display-s` | `clamp(2.4rem, 3.7vw + 1rem, 3.9rem)` |
| `statement` | `clamp(2rem, 3vw + 1rem, 3.25rem)` |
| `stat` | `clamp(3.5rem, 6vw + 1rem, 6rem)` |

### 4.4 Document scale

See [`03-DOCUMENT_SYSTEM.md`](03-DOCUMENT_SYSTEM.md) §3 and
[`tokens/sugo-office.md`](tokens/sugo-office.md).

### 4.5 Licensing constraints

- **Red Hat Display** — SIL OFL 1.1. Self-host, embed, redistribute freely.
- **JetBrains Mono** — SIL OFL 1.1. Same.
- **General Sans** — ITF Free Font Licence. Free for commercial use, but
  **self-hosting the webfont requires written ITF consent** and the files may not
  be redistributed. Load from `api.fontshare.com` on the web. Install the desktop
  OTF locally for Office. **Deliver client documents as PDF**, not DOCX, so the
  document does not depend on the recipient having General Sans.

This is why the repository vendors `red-hat-display-latin.woff2` and
`jetbrains-mono-latin.woff2` but not General Sans. That asymmetry is intentional
— do not "fix" it by vendoring the Fontshare files.

---

## 5. Geometry and layout

### 5.1 The carpentry

The system's structural signature is a **2 px solid navy border**. Panels are
drawn, not floated. Adjacent panels share a border rather than each drawing their
own — the seam is the point.

| Stroke | Value | Use |
| --- | --- | --- |
| Panel | `2px solid #101D3E` | Every panel, card, button, image frame |
| Hairline | `1px solid #D9DEE6` | Rules *inside* a panel |
| Stage | `3px solid #101D3E` | Top rule on a numbered scroll band |
| Flood hairline | `1px solid #4C586F` | Rules inside a navy flood |

### 5.2 Radii

Modest, and they mean something.

| Token | Value | Use |
| --- | --- | --- |
| `radius-micro` | 2px | Focus ring |
| `radius-btn` | 4px | Buttons |
| `radius-card` | 8px | Cards, image frames, ticket chips |
| `radius-panel` | 10px | Panels |

Nothing is a pill. Nothing is fully rounded. No `border-radius: 999px` anywhere
in the system.

### 5.3 Shadow

There is no soft elevation. The only shadow is a **stacked hard offset**:

- `4px 4px 0` — resting
- `5px 5px 0` — hover (paired with `translate(-1px, -1px)`)
- `2px 2px 0` — active (paired with `translate(1px, 1px)`)

Colour is `viola-500` on the primary button, `ink` on panels that need to lift.
No blur, ever.

### 5.4 Spacing

4-pt base: `0.25 / 0.5 / 0.75 / 1 / 1.5 / 2.5 / 4 / 6` rem. Section rhythm is
`--space-3xl` (6rem) between major bands, `--space-xl` (2.5rem) inside a panel.

### 5.5 Composition

- Site measure `74rem`, padded `clamp(1rem, 4vw, 2rem)`.
- Asymmetric grids, not equal thirds. The recurring splits are `7fr / 5fr` (hero,
  contact), `5fr / 7fr` (evidence), `6.5fr / 5.5fr` (buckets),
  `4.5fr / 7.5fr` (process). Every image-bearing track uses `minmax(0, 1fr)`,
  never bare `1fr`.
- Collapse to one column at `59.99rem`. The vertical border becomes a horizontal
  one — the carpentry survives the breakpoint.
- **One memorable gesture per composition.** A bold hero, the tomato, a diagram,
  or a typographic moment. Supporting elements make room for it rather than
  competing.

---

## 6. Motion

Quiet by policy.

| Moment | Rule |
| --- | --- |
| Page entrance | One orchestrated fade-up stagger, ≤500 ms total, 90 ms per item |
| Tab / panel switch | 160 ms opacity crossfade |
| Button | 120 ms transform + shadow |
| Mark | The Hop idle, hero only |
| Pot art | Steam rise, only where the pot appears |
| Everything else | Nothing |

Easing: `ease-out` `cubic-bezier(0.16, 1, 0.3, 1)` for entrances,
`ease-in-out` `cubic-bezier(0.65, 0, 0.35, 1)` for reversible states.
Durations: 120 / 220 / 420 ms.

Under `prefers-reduced-motion: reduce`: everything becomes static or a ≤150 ms
opacity change. The Hop stops. Steam holds at 30% opacity. Focus rings are always
instant.

**Documents and decks do not move.** No slide transitions, no build animations,
no animated GIFs in a PDF.

---

## 7. Imagery

### 7.1 What is allowed

1. **The pixel tomato family** — the mark, the tomato-in-pot linework, the pot.
2. **Marc's headshot** — the approved crops in `public/brand/marc.jpg` and
   `public/marc-rosa.png`. Framed 2 px ink, `radius-card`.
3. **Product and system screenshots** — real UI from real work.
4. **Diagrams** — drawn in the system (see §7.3).

### 7.2 What is not

- Stock photography. None. No people in offices, no abstract network graphics,
  no "AI" glowing brains, no server rooms.
- Generated hero imagery.
- Client logos, until the client has given written permission and the claim has
  been reconfirmed (see `MESSAGING_AND_VOICE.md` § Claims and evidence).
- Icons or illustration in a second style.

Screenshots get a 2 px ink border, `radius-card`, and a JetBrains Mono caption.
Never a fake browser chrome, fake phone frame, or fake IDE window around them.

### 7.3 Diagrams

Architecture and workflow diagrams are part of the identity. The system
drawings already in `public/` are the reference.

- Strokes: 2 px `ink`. Arrows: 2 px `ink`, simple triangle heads.
- Node fills: `card` default, `viola-50` for a highlighted node, `sky` for a
  neutral or third-party system, `saffron` for the one node you want read first.
- Labels: JetBrains Mono, 8.5–10 pt, `ink`. Node titles may be Red Hat Display 500.
- Radii: `radius-card` on nodes.
- No gradients, no soft shadows, no isometric perspective, no 3-D.

---

## 8. Iconography

- Library: **Lucide** (already the configured `iconLibrary` in `components.json`).
- Stroke: **1.5 px** at 20 px and 24 px. Never filled.
- Colour: `ink` or `muted`. Icons are never accent-coloured — an icon does not
  carry meaning through hue.
- Sizes: 16 / 20 / 24 px. Optically align to the cap height of adjacent type.
- An icon never appears alone as a control unless it has an accessible name.
- **No emoji.** Not in UI, not in copy, not in documents, not in social posts.

---

## 9. Accessibility floor

**WCAG 2.2 AA is the floor, not the goal.** Non-negotiables:

- Body text ≥ 4.5:1; large text and graphical objects ≥ 3:1.
- Focus is always visible: 2 px solid, 2 px offset, `radius-micro`, using
  `focus` on light surfaces and `focus-on-flood` on navy or viola.
- Interactive targets ≥ 44 × 44 px.
- Reduced motion is honoured everywhere.
- Colour is never the only signal. State gets a label, an icon, or a shape too.
- Every image has an `alt`; decorative art gets `alt=""` and `aria-hidden`.
- Headings nest correctly. One `h1` per page.
- Skip link on every page.

---

## 10. Naming and files

**Brand assets:** `sugo-<artifact>-<variant>-<background>.<ext>`
e.g. `sugo-mark-simple-viola-background.png`

- `simple` / `complex` — the two artwork variants
- background treatment is always stated explicitly, including `transparent`

**Client documents:** `sugo-<client>-<doctype>-<YYYY-MM-DD>.<ext>`
e.g. `sugo-example-client-proposal-2026-09-02.pdf`

**Numbered instruments:** `invoice-NNN.pdf`, `sow-NNN.pdf` — zero-padded,
sequential, never reused.

---

## 11. What breaks the system

A fast checklist. Any of these means stop and fix, not ship.

- A colour that is not in the token file
- A fourth typeface, or the outlier used for prose
- Italics
- A pill radius, or a soft blurred shadow
- Two accents in one section
- Red anywhere except the mark and a functional danger state
- The mark on saffron, blush, or a photo
- A second dark flood on the same page
- Stock photography
- An invented metric, testimonial, client name, or date
- An emoji
- Motion beyond the sanctioned list
- Text on `viola-500`
