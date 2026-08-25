# Building web pages and app screens

Read [`tokens.md`](tokens.md) first. Full standard: `docs/brand/02-WEB_UI_STANDARD.md`.

## Stack

Next.js 16 App Router · React 19 · TypeScript strict · Tailwind v4 + CSS custom
properties · shadcn/ui (`base-nova`) + Base UI · Lucide icons · MDX via
`next-mdx-remote`.

New projects: drop in `tokens/sugo-theme.css`. It maps shadcn's semantic vars
onto Sugo tokens so primitives inherit the system instead of neutral defaults.

## Token discipline

No file may declare a design value. Every colour and `font-family` references a
token. Inline hex, inline `oklch()`, and a bare `font-family: "Some Font"` are
defects. If a value is needed that does not exist, name the gap — do not
improvise one.

## Atoms

Every interactive atom ships **all eight states**: default, hover,
`:focus-visible`, `:active`, disabled, loading, error, success.

**Primary button** — navy fill, paper text, stacked viola shadow:
```css
min-height: 48px; padding: var(--space-sm) var(--space-lg);
border: 2px solid var(--color-ink); border-radius: var(--radius-btn);
background: var(--color-accent); color: var(--color-accent-ink);
font: 600 var(--text-base) var(--font-body); line-height: 1;
box-shadow: var(--shadow-stack-viola);
```
Hover: `accent-hover` fill, `translate(-1px,-1px)`, shadow `5px 5px 0`.
Active: `translate(1px,1px)`, shadow `2px 2px 0`.
Disabled: `opacity: 0.55`, no shadow, no transform.
Loading: disabled styling + `aria-busy="true"` + text swap. **No spinner.**

**Secondary (ghost)** — 2px ink outline, transparent fill, hover fills `paper-2`,
active nudges 1px down. No shadow. There is no third variant.

**Link** — ink, 600, 1px underline at 3px offset. Hover thickens to 2px and
switches colour to `--color-underline`.

**Input** — 2px ink border, `radius-btn`, card background, 48px min height.
Label above, never a placeholder-as-label. Errors get a message in `ink` at
body 600, a 16px Lucide `alert-circle`, `aria-invalid`, and `aria-describedby`.
**There is no danger colour** — red belongs to the mark alone (B-41), so the
error is carried by the icon and the words, never by hue.

**Panel** — `border: 2px solid ink`, `radius-panel`, `card` background,
`overflow: hidden`. Adjacent panels share their seam: the child draws
`border-left` (or `border-top` when collapsed), the parent draws the outer box.

**Ticket chip** — card ground, 2px ink, `radius-card`, `margin-inline-end: -0.4rem`,
odd children `rotate(-1.2deg)`, even `rotate(1.2deg) translateY(3px)`, in a
`viola-50` tray. The one place rotation is allowed.

**Stat** — mono 700, `--text-stat`, `line-height: 1`, `letter-spacing: -0.03em`,
tabular. Always on saffron. Always footnoted when sourced.

**Focus** — `2px solid var(--color-focus)`, 2px offset, `radius-micro`.
On navy or viola floods, `--color-focus-on-flood`. Never `outline: none` without
an equal replacement.

## Patterns

Reuse these. The diversification rule is **inverted** for Sugo properties —
pages must share the system.

| Pattern | Shape |
| --- | --- |
| Split hero | Panel, `7fr / 5fr`, copy left + viola art flood right, strip beneath |
| Typographic hero | `display-s` head at `18ch`, lede at `52ch` |
| Evidence panel | Panel, `5fr / 7fr`, saffron stat left + prose right, mono footnote bar |
| Two buckets | `6.5fr / 5.5fr`, one card lifted, one viola-50 |
| Process switcher | Panel, `4.5fr / 7.5fr`, vertical tabs + 160ms crossfade |
| Numbered scroll bands | 3px ink top rule, mono numeral, alternating `paper-2` |
| Navy flood | Ink panel, viola key words, hairline-separated list |
| Definition card | Blush card, `dl` with display `dt` |
| Accordion | Panel, hairlines, `grid-template-rows: 0fr → 1fr` |
| Action-row footer | Statement + body + CTA row + mark + meta bar |

Composition: one navy flood per page · one accent per section · one entrance per
page · every section inside a `.wrap` at `74rem` · every image-bearing grid track
`minmax(0, 1fr)`.

## Chrome

Nav is **sticky, in flow, never fixed** — `position: sticky; top: 0; z-index: 300`
with a 2px ink bottom border that content slides beneath. Wordmark + mark left,
links right, primary CTA last. Below `59.99rem` links collapse into a drawer via
`grid-template-rows: 0fr → 1fr` over 420ms; Escape and route change close it.

## Responsive floor

Verified at **320 / 375 / 414 / 768px** every build:

- `overflow-x: clip` on `html` and `body` — never `hidden`
- No clickable text wrapping to two lines (buttons, nav, footer links, CTAs)
- Display headings carry `overflow-wrap: anywhere; min-width: 0`
- Splits collapse to one column at `59.99rem`; vertical borders become horizontal
- Tab strips scroll horizontally and do not scroll-jump on selection

## Accessibility

Skip link first in `<body>` · one `h1` per page, no skipped levels · tabs get
`role="tablist"`/`role="tab"` with `aria-selected` and roving tabindex ·
accordions use `<button aria-expanded aria-controls>` inside the heading ·
modals trap focus, close on Escape, return focus to the trigger · decorative art
gets `alt=""` + `aria-hidden` · async status uses `aria-live="polite"`.

Run axe on every route. Keyboard-test the full page.

## Done means

- [ ] Every colour and font is a token
- [ ] All eight states on every interactive element
- [ ] 320 / 375 / 414 / 768px clean, no horizontal scroll
- [ ] axe clean, full keyboard pass, visible focus everywhere
- [ ] `prefers-reduced-motion` honoured
- [ ] One flood, one accent per section, one entrance
- [ ] No invented facts
- [ ] `npm run lint` and `npm run type-check` clean
