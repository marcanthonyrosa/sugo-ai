# Sugo AI tokens — snapshot

Faithful copy of `docs/brand/tokens/sugo.tokens.json` v1.0.0. If the repository
is available, read the JSON instead — it may be newer.

## Colour

### Surface
| Token | Hex | OKLCH | Job |
| --- | --- | --- | --- |
| `paper` | `#F5F2E8` | `oklch(96% 0.014 95)` | Default ground |
| `paper-2` | `#EFEBDD` | `oklch(94% 0.020 95)` | Alternating band |
| `card` | `#FBFAF4` | `oklch(98.5% 0.008 100)` | Raised panel, table body |

### Ink
| Token | Hex | OKLCH | Job |
| --- | --- | --- | --- |
| `ink` | `#101D3E` | `oklch(24% 0.065 265)` | Type, 2px carpentry, action, dark flood |
| `ink-2` | `#283854` | `oklch(34% 0.055 262)` | Body copy |
| `muted` | `#4C586F` | `oklch(46% 0.04 262)` | Meta, captions, flood hairlines |
| `rule` | `#D9DEE6` | `oklch(90% 0.012 258)` | Hairline. Never type. |

### Viola
| Token | Hex | OKLCH | Job |
| --- | --- | --- | --- |
| `viola-50` | `#F3EEF8` | `oklch(95.5% 0.015 310)` | Tint surface, ticket tray, callout |
| `viola` | `#E3D4EF` | `oklch(89% 0.04 310)` | The brand colour |
| `viola-400` | `#CCB8DC` | `oklch(81% 0.055 310)` | Depth in a viola field |
| `viola-500` | `#B296D2` | `oklch(72% 0.09 305)` | **Decoration only.** 2.29:1 — never type |
| `viola-900` | `#855CA7` | `oklch(55% 0.12 308)` | Underline, emphasis type, doc accent |

### Accents — one per composition
| Token | Hex | Means |
| --- | --- | --- |
| `saffron` | `#E8C270` | Evidence — numbers, citations |
| `blush` | `#EDD0C6` | Human — plain language, origin, warmth |
| `sky` | `#C9D3DA` | Diagram fill only. Not marketing. |

### Mark-only — never sample these
`coral #EC705B` · `stem #264534` · `highlight #FFFFFF`

### Action
`default #101D3E` · `hover #1A2D51` · `on-action #F5F2E8` · `shadow #B296D2`

### Focus
`on-paper #6E3F8D` · `on-flood #F5EFD7`

### Status — application UI only, never marketing
| State | Surface | Ink |
| --- | --- | --- |
| Success | `#D0EED5` | `#205335` |
| Warning | `#F9E6BF` | `#754B10` |
| Danger | `#FBDCD9` | `#9B1E22` |
| Info | `#DCEAF4` | `#385975` |

### Data viz — use in order
`#101D3E` → `#9970C4` → `#B5820C` → `#607F91` → `#5C8E67` → `#C0765D`

Always pair hue with a shape, label, or pattern.

## Contrast — verified

| Pair | Ratio |
| --- | --- |
| ink on paper | 14.79 AAA |
| ink on card | 15.85 AAA |
| ink on viola | 11.78 AAA |
| ink on saffron | 9.77 AAA |
| ink on blush | 11.39 AAA |
| ink-2 on paper | 10.51 AAA |
| muted on paper | 6.39 AA |
| paper on ink | 14.79 AAA |
| viola-900 on paper | 4.59 AA |
| **viola-500 on paper** | **2.29 FAIL** |

## Type

| Role | Family | Weights | Job |
| --- | --- | --- | --- |
| Display | Red Hat Display | 700, 500 | Headlines, panel titles, statements |
| Body | General Sans | 400, 600 | All running text, UI labels, buttons |
| Outlier | JetBrains Mono | 400, 700 | Numerals, eyebrows, metadata, footnotes |

Fallbacks: display and body → `Segoe UI, Helvetica Neue, Arial`;
mono → `Consolas, Menlo, Courier New`.

**Web scale** (1.25 from 17px): `sm 0.875` · `base 1.0625` · `md 1.25` ·
`lg 1.5625` · `xl 1.953` · `2xl 2.441` · `3xl 3.052` rem ·
`display-s clamp(2.4rem, 3.7vw + 1rem, 3.9rem)` ·
`statement clamp(2rem, 3vw + 1rem, 3.25rem)` ·
`stat clamp(3.5rem, 6vw + 1rem, 6rem)`

Display: weight 700/500, tracking `-0.015em`, leading `1.1`.
Body: 17px, leading `1.6`.

**Document scale (pt):** title 28 · section 17 · subsection 13 · body 10.5 ·
small 9 · eyebrow 8.5 mono uppercase +14% · slide title 36 · slide body 18.

## Space — 4-pt base

`2xs 0.25` · `xs 0.5` · `sm 0.75` · `md 1` · `lg 1.5` · `xl 2.5` · `2xl 4` ·
`3xl 6` rem

## Geometry

- `border-panel: 2px solid #101D3E` — the carpentry; adjacent panels share it
- `border-hair: 1px solid #D9DEE6` — inside a panel
- `border-stage: 3px solid #101D3E` — numbered scroll band
- Radii: `micro 2px` · `btn 4px` · `card 8px` · `panel 10px`
- Shadow: `4px 4px 0` rest · `5px 5px 0` hover · `2px 2px 0` active.
  Viola-500 on the primary button, ink on lifted panels. **No blur.**

## Motion

`ease-out cubic-bezier(0.16,1,0.3,1)` · `ease-in cubic-bezier(0.7,0,0.84,0)` ·
`ease-in-out cubic-bezier(0.65,0,0.35,1)`
Durations `120 / 220 / 420ms`; reduced-motion ceiling `150ms`, opacity only.

Hop idle (hero mark only): `0-78% 0 · 80-85% -9px · 86-90% -3px · 91-100% 0`
over 3.4s, stepped, infinite.

## Layout

`wrap-max 74rem` · `measure-body 62ch` · `measure-lede 52ch` ·
`measure-head 22ch` · `z-sticky-nav 300`

Page: Document `8.5x11in, 0.9/0.75/0.75` · Sheet `8.5x11in, 0.5` ·
Slide `13.333x7.5in, 0.6` · Social `1200x630px`

## Accessibility

WCAG 2.2 AA · 44px targets · body >=4.5:1 · graphics >=3:1 ·
focus 2px solid, 2px offset, `radius-micro`.
