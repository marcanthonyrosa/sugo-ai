# Design — Sugo AI

Locked design system, decided 2026-08-13 after the Panel Press concept round
(variants A–E2), the type/art/motion demos, and the user's hardened picks.
Future Hallmark runs read this file first; pages defer to it. The
diversification rule is INVERTED for this project: pages must SHARE this
system. Amend intentionally — the file is the rule.

## System
- Genre · playful-editorial (Dodonut-spiritual carpentry, calm hierarchy)
- Macrostructure · Split Studio panel-carpentry (home) · document/workflow spines (inner pages)
- Theme · custom "Viola Light" (vibe: "light viola atmosphere, navy sole dark + action")
- Axes · light / geometric-sans / chromatic-viola-light
- Mark · the chunky pixel tomato (`prototypes/art/tomato-a.png`) — nav 22px beside wordmark
  (translateY(-1px)), hero ~54%/max-320px on flood panels, footer brandmark identical to nav.
  Red strategy: the mark is the ONLY red-family element (pomodoro coral), ≤3% viewport.
- Motion · "Hop" sprite idle on the hero mark (mostly still, quick 2-frame hop ~3.4s, steps());
  pot steam where the pot appears; 160ms opacity crossfades on tab switches; nothing else.

## Tokens (canonical — mirrored in `src/app/site.css` after integration)
```css
:root {
  --color-paper:    oklch(96% 0.014 95);   --color-paper-2:  oklch(94% 0.020 95);
  --color-card:     oklch(98.5% 0.008 100);
  --color-ink:      oklch(24% 0.065 265);  --color-ink-2:    oklch(34% 0.055 262);
  --color-muted:    oklch(46% 0.04 262);   --color-rule:     oklch(90% 0.012 258);
  --color-viola-50: oklch(95.5% 0.015 310); --color-viola:   oklch(89% 0.04 310);  /* hero flood */
  --color-viola-500:oklch(72% 0.09 305);   --color-underline:oklch(55% 0.12 308);
  --color-saffron:  oklch(83% 0.11 85);    --color-blush:    oklch(88% 0.035 40);
  --color-accent:   var(--color-ink);      --color-accent-hover: oklch(30% 0.07 262);
  --color-accent-ink: var(--color-paper);
  --color-focus:    oklch(46% 0.13 310);   --color-focus-on-flood: oklch(95% 0.032 95);
  --color-mark-coral: oklch(70% 0.12 30);  /* the tomato's red-family license */

  --font-display: "Red Hat Display", ui-sans-serif, system-ui, sans-serif; /* 700 / 500 */
  --font-body:    "General Sans", ui-sans-serif, system-ui, sans-serif;    /* 400 / 600 */
  --font-outlier: "JetBrains Mono", ui-monospace, monospace; /* numerals + meta ONLY */

  /* 4-pt spacing: --space-3xs…--space-4xl · type scale 1.25 from 1.0625rem body */
  --display-tracking: -0.02em; --display-lh: 1.12;
  --ease-out: cubic-bezier(0.16,1,0.3,1); --ease-in: cubic-bezier(0.7,0,0.84,0);
  --ease-in-out: cubic-bezier(0.65,0,0.35,1);
  --dur-micro: 120ms; --dur-short: 220ms; --dur-long: 420ms;
  --radius-btn: 4px; --radius-card: 8px; --radius-panel: 10px;
}
```

## Carpentry & CTA voice
- Nav: sticky (`position: sticky; top: 0; z-index: var(--z-sticky-nav)`) — in-flow, never fixed;
  the 2px ink rule is the seam content slides beneath. Approved 2026-08-13.
- Panels: 2px solid `--color-ink` borders; adjacent panels share borders (zine carpentry).
- Primary CTA · navy fill (`--color-accent`) + `--color-accent-ink` text · radius-btn ·
  stacked hard shadow `4px 4px 0 var(--color-viola-500)` · hover darkens to accent-hover.
- Secondary · 2px ink outline, transparent fill. Links: ink text, viola-500→ink underline.
- Navy floods (manifesto/lifecycle bands) are the page's ONLY dark moments; text flips to paper.

## Motion stance
- Quiet. One orchestrated hero entrance (fade-up stagger ≤500ms) per page maximum.
- Reduced-motion: everything static / ≤150ms opacity. Focus rings instant, 2px, per-surface tokens.

## Voice (summary — full rules in COPY_BRIEF.md)
- Plain, operator-sharp, production-oriented. No consulting filler, no startup clichés.
- Honesty: no invented metrics/testimonials/dates. Only citable number: MIT NANDA (Aug 2025), footnoted.
- Quietly playful: ≤1 wry beat per section; the sauce motif lives in About's origin story +
  the footer footnote. Legal line: "© 2026 Sugo Product Company, LLC d/b/a Sugo AI".
- Contact email everywhere: marc@sugoai.com (hello@ does not exist).

## Exports
Canonical values live above and in `prototypes/` (reference implementations:
`home-master.html`, `how-we-work.html`, `contact.html`, `about.html`, `writing.html`).
After Next.js integration, `src/app/site.css` is the runtime source of truth.
For Tailwind v4 `@theme` / DTCG / shadcn exports, ask to extend this file.
