# Sugo AI web and application standard

Version 1.0.0 · Last reviewed 24 August 2026

How to build web pages and application screens in the Sugo AI system. This is the
implementation contract: atoms, patterns, states, code conventions, and the file
authority hierarchy.

**This document covers:** component specifications, interaction states, layout
patterns, accessibility implementation, and where code lives.

**This document does not cover:** colour and type values (see
[`01-VISUAL_IDENTITY.md`](01-VISUAL_IDENTITY.md) and
[`tokens/`](tokens/)), copy (see [`MESSAGING_AND_VOICE.md`](MESSAGING_AND_VOICE.md)),
or print artifacts (see [`03-DOCUMENT_SYSTEM.md`](03-DOCUMENT_SYSTEM.md)).

---

## 1. Authority hierarchy

There has been drift. This is the ruling.

| Rank | File | Status |
| --- | --- | --- |
| 1 | `docs/brand/tokens/sugo.tokens.json` | **Source of truth for every value.** |
| 2 | `docs/brand/tokens/sugo-tokens.css` | Generated. Web runtime token layer. |
| 3 | `src/app/site.css` | Shared chrome + component classes. Consumes tokens; defines no new ones. |
| 4 | `src/app/pages-core.css`, `src/app/pages-sub.css` | Page-scoped sections. Consume tokens and chrome only. |
| 5 | `src/app/globals.css` | **Reduce to Tailwind + shadcn plumbing only.** Its Sugo colour, font, radius, and shadow blocks are pre-redesign and contradict the system (`--r-pill: 999px`, soft blurred shadows, `--font-serif`, `--color-sage`, a `.dark` block). Delete them outright. |
| — | `design.md` | Hallmark entry point. Points at this library; carries no independent authority. |

**Rule:** no file below rank 2 may declare a design value. If a value is needed
that does not exist, add it to the JSON, regenerate, then reference it. Inline
hex, inline `oklch()`, and a bare `font-family: "Some Font"` are all defects.

### Out of the system

The 2026-08-13 redesign is the whole brand. Anything predating it is not a
reference and not a migration source — it is deleted or rebuilt. See
[`README.md`](README.md) §7 for the full list.

In this codebase specifically:

- Delete the Sugo blocks in `globals.css` and the `.dark` block.
- Delete `legacy/`. It is the pre-redesign export.
- `TODO.md` predates the redesign and still names retired typefaces. Rewrite it
  or delete it; do not treat any line in it as a current decision.
- `design.md` states `--display-tracking: -0.02em` and `--display-lh: 1.12`;
  `site.css` ships `-0.015em` and `1.1`. **`site.css` is correct** — correct
  `design.md` to match.

---

## 2. Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16, App Router, React 19, TypeScript strict |
| Styling | Tailwind v4 + CSS custom properties; hand-written component CSS for the carpentry |
| Primitives | shadcn/ui (`base-nova`) + Base UI |
| Icons | Lucide, 1.5 px stroke |
| Fonts | `next/font/local` for Red Hat Display + JetBrains Mono; Fontshare CDN for General Sans |
| Content | MDX via `next-mdx-remote` + `gray-matter` |

New Sugo applications start from `tokens/sugo-theme.css` dropped into a
Next.js + Tailwind v4 + shadcn project. That file already maps shadcn's semantic
variables onto Sugo tokens, so primitives inherit the system instead of neutral
defaults.

---

## 3. Atoms

Every interactive atom ships **all eight states**: default, hover,
`:focus-visible`, `:active`, disabled, loading, error, success. A component
without its disabled and focus states is not finished.

### 3.1 Button

Two variants. There is no third.

**Primary** — navy fill, paper text, stacked viola shadow.

```
min-height: 48px; padding: var(--space-sm) var(--space-lg);
border: 2px solid var(--color-ink); border-radius: var(--radius-btn);
background: var(--color-accent); color: var(--color-accent-ink);
font: 600 var(--text-base) var(--font-body); line-height: 1;
box-shadow: var(--shadow-stack-viola);          /* 4px 4px 0 */
```

| State | Change |
| --- | --- |
| Hover | `background: accent-hover`, `translate(-1px,-1px)`, shadow → `5px 5px 0` |
| Active | `translate(1px,1px)`, shadow → `2px 2px 0` |
| Focus | 2 px `focus` ring, 2 px offset (`focus-on-flood` on navy/viola) |
| Disabled | `opacity: 0.55`, no shadow, no transform, `cursor: not-allowed` |
| Loading | Disabled styling + `aria-busy="true"` + a text swap. **No spinner.** |

**Secondary (ghost)** — 2 px ink outline, transparent fill, hover fills
`paper-2`, active nudges 1 px down. No shadow.

Labels are short and action-led: *Start a conversation*, *See how we work*. Never
"Click here", "Learn more", or "Submit".

### 3.2 Link

`ink` text, 600, 1 px underline at 3 px offset. Hover thickens to 2 px and
switches the underline colour to `underline` `#855CA7`. Active drops to `ink-2`.

Nav links are the exception: uppercase, `0.08em` tracking, `text-sm`, 600,
underline appearing on hover and on `aria-current="page"` at 2 px / 6 px offset.

### 3.3 Input, textarea, select

- 2 px `ink` border, `radius-btn`, `card` background, `min-height: 48px`
- Label above the field, body 600, `text-sm`. **Never a placeholder as a label.**
- Helper text below in `muted`, `text-sm`
- Error: border stays 2 px ink, an error message appears below in `ink` with a
  Lucide `alert-circle` at 16 px and body 600, and the field gets
  `aria-invalid="true"` + `aria-describedby`. **No red** — there is no danger
  colour in this system (B-41)
- Success: same pattern, message in `success-ink` `#205335`
- Focus: 2 px `focus` ring, 2 px offset

Colour never carries the error alone — the message does.

### 3.4 Panel and card

```
border: var(--border-panel);          /* 2px solid ink */
border-radius: var(--radius-panel);   /* 10px */
background: var(--color-card);
overflow: hidden;
```

Adjacent panels in a grid share their seam: the child draws `border-left` (or
`border-top` when collapsed), the parent draws the outer box. Lifted panels add
`--shadow-stack` (`4px 4px 0` ink).

### 3.5 Ticket chip

The small rotated pills used for "what you get" lists.

```
background: card; border: 2px solid ink; border-radius: radius-card;
padding: var(--space-xs) var(--space-md); font: 600 var(--text-sm);
margin-inline-end: -0.4rem;
:nth-child(odd)  { transform: rotate(-1.2deg); }
:nth-child(even) { transform: rotate(1.2deg) translateY(3px); }
```

They live in a `viola-50` tray with `radius-card`. This is the one place rotation
is allowed.

### 3.6 Eyebrow / section label

JetBrains Mono or body 600, `text-sm`, uppercase, `0.08em` tracking, `muted` or
`ink`. Optionally prefixed with a zero-padded mono numeral.

### 3.7 Stat

`font-family: var(--font-outlier)`, 700, `--text-stat`, `line-height: 1`,
`letter-spacing: -0.03em`, `font-variant-numeric: tabular-nums`. Always on
`saffron`. Always footnoted when it comes from a source.

### 3.8 Focus ring

```
:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px;
                 border-radius: var(--radius-micro); }
.on-flood :focus-visible { outline-color: var(--color-focus-on-flood); }
```

Never `outline: none` without a replacement of equal or better visibility.

---

## 4. Patterns

The recurring section shapes. Reuse them; the diversification rule is **inverted**
for Sugo properties — pages must share this system rather than differentiate from
each other.

| Pattern | Shape | Use |
| --- | --- | --- |
| **Split hero** | Panel, `7fr / 5fr`, copy left + viola art flood right, strip beneath | Home |
| **Typographic hero** | `display-s` head at `18ch`, lede at `52ch` | Inner pages |
| **Evidence panel** | Panel, `5fr / 7fr`, saffron stat block left + prose right, mono footnote bar | Anywhere a cited number leads |
| **Two buckets** | `6.5fr / 5.5fr`, one card lifted, one viola-50 | Two-category explainers |
| **Process switcher** | Panel, `4.5fr / 7.5fr`, vertical tabs left + panel right, 160 ms crossfade | Multi-stage process, compact |
| **Numbered scroll bands** | 3 px ink top rule, mono numeral, alternating `paper-2` | Same process, expanded |
| **Navy flood** | Ink panel, viola key words, hairline-separated list | The one dark moment per page |
| **Ticket tray** | Viola-50 tray of rotated chips | "What you get" lists |
| **Definition card** | Blush card, `dl` with display `dt` | Plain-language glossaries |
| **Accordion** | Panel, hairline-separated, `grid-template-rows: 0fr → 1fr` | FAQ |
| **Action-row footer** | Statement + body + CTA row + mark + meta bar | Every page |

### Composition rules

- One navy flood per page.
- One accent per section.
- One orchestrated entrance per page.
- Every section belongs to a `.wrap` at `74rem`.
- Every grid track that can hold an image uses `minmax(0, 1fr)`.

---

## 5. Navigation and chrome

- **Nav is sticky, never fixed.** `position: sticky; top: 0; z-index: 300`,
  2 px ink bottom border. Content slides beneath the seam.
- Wordmark + mark at left, links right, primary CTA last.
- Below `59.99rem`, links collapse into a drawer using
  `grid-template-rows: 0fr → 1fr` over 420 ms. Escape closes it; route change
  closes it.
- **Footer** is the action row: statement (`--text-statement`, `24ch`), body
  (`56ch`), CTA + mark row, hairline meta bar with the legal line and the sauce
  footnote in mono.

---

## 6. Responsive floor

Verified at **320 / 375 / 414 / 768 px** on every build. Hard requirements:

- No horizontal scroll. `overflow-x: clip` on both `html` and `body` — never
  `hidden`.
- No clickable text wrapping to two lines: buttons, nav links, footer links,
  CTAs. `white-space: nowrap` on those.
- Display headings carry `overflow-wrap: anywhere; min-width: 0`.
- Image-bearing grid tracks use `minmax(0, 1fr)`.
- Section splits collapse to one column at `59.99rem`; vertical borders become
  horizontal.
- Tab strips scroll horizontally rather than reflowing, and do not scroll-jump on
  selection.

---

## 7. Accessibility implementation

- Skip link first in `<body>`, revealed on focus.
- One `h1` per page; headings nest without skipping levels.
- Tabs: `role="tablist"` / `role="tab"` with `aria-selected` and roving tabindex.
- Accordions: `<button aria-expanded aria-controls>` inside the heading, panel
  animated by grid rows so it stays in the accessibility tree.
- Modals: focus trapped, Escape closes, focus returns to the trigger,
  `aria-modal="true"`.
- Decorative art: `alt=""` plus `aria-hidden="true"`.
- Live regions for async status (e.g. the copy-email confirmation) with
  `aria-live="polite"`.
- Run axe on every route before shipping. Keyboard-test the full page.

---

## 8. Content and honesty rules in code

These are enforcement rules, not style preferences.

- **No invented metrics, testimonials, client names, logos, or dates.** If a
  number is not supplied and citable, use a labelled placeholder or a different
  pattern.
- The only currently citable figure is MIT NANDA, *The GenAI Divide: State of AI
  in Business*, August 2025 (≈5% of enterprise GenAI pilots showing measurable
  P&L impact). It always ships with its footnote.
- Client-specific routes (`/tmc`, `/tmc-example`) are `noindex`.
- Contact address is `marc@sugoai.com` everywhere. `hello@` does not exist.
- Legal line: `© <year> Sugo Product Company LLC d/b/a Sugo AI`.

---

## 9. Definition of done

A screen is done when all of the following are true.

- [ ] Every colour and font reference is a token; no inline values
- [ ] All eight states implemented on every interactive element
- [ ] Verified at 320 / 375 / 414 / 768 px with no horizontal scroll
- [ ] axe clean; full keyboard pass; visible focus on every control
- [ ] `prefers-reduced-motion` honoured
- [ ] One flood, one accent per section, one entrance
- [ ] Copy passes the review checklist in `MESSAGING_AND_VOICE.md`
- [ ] No invented facts
- [ ] `npm run lint` and `npm run type-check` clean
