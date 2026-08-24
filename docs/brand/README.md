# Sugo AI brand library

Version 1.0.0 · Last reviewed 24 August 2026

Everything needed to make something that looks and sounds like Sugo AI —
a web page, an application screen, a proposal, an invoice, a deck, a post.

This replaces the previous `docs/brand/README.md`; the logo inventory it carried
is preserved in §4 below.

---

## 1. Which document do I need?

| I am… | Read |
| --- | --- |
| Deciding *what to say* or *who this is for* | [`BRAND_FOUNDATIONS.md`](BRAND_FOUNDATIONS.md) |
| Writing copy, a post, a proposal narrative | [`MESSAGING_AND_VOICE.md`](MESSAGING_AND_VOICE.md) |
| Making anything visual, anywhere | [`01-VISUAL_IDENTITY.md`](01-VISUAL_IDENTITY.md) |
| Building a web page or an app screen | [`02-WEB_UI_STANDARD.md`](02-WEB_UI_STANDARD.md) |
| Producing a document, contract, invoice, or deck | [`03-DOCUMENT_SYSTEM.md`](03-DOCUMENT_SYSTEM.md) |
| Writing anything with the legal entity, a bio, or a claim in it | [`04-BRAND_FACTS.md`](04-BRAND_FACTS.md) |
| Wondering why something is the way it is | [`DECISIONS.md`](DECISIONS.md) |
| In Word, PowerPoint, Google, Figma, or Canva | [`tokens/sugo-office.md`](tokens/sugo-office.md) |
| Writing code | [`tokens/sugo-tokens.css`](tokens/sugo-tokens.css) or [`tokens/sugo-theme.css`](tokens/sugo-theme.css) |
| Building a tool that reads the brand | [`tokens/sugo.tokens.json`](tokens/sugo.tokens.json) |

---

## 2. The stack

Six layers. Each answers a different question, and each has a strict scope so
they do not contradict each other.

```
  STRATEGY      BRAND_FOUNDATIONS.md      why the brand exists, who it's for
  VERBAL        MESSAGING_AND_VOICE.md    what to say and how to say it
  FACTS         04-BRAND_FACTS.md         entity, boilerplate, approved claims
  VISUAL        01-VISUAL_IDENTITY.md     how it looks, in any medium
  APPLIED       02-WEB_UI_STANDARD.md     web + app implementation
                03-DOCUMENT_SYSTEM.md     print, PDF, Office, deck
  MACHINE       tokens/                   the values, in every format
  GOVERNANCE    DECISIONS.md              what was decided, and what's open
```

Plus [`SHARING_AND_DISCOVERY.md`](SHARING_AND_DISCOVERY.md) for canonical URLs,
metadata, social cards, and the launch checklist.

**Reading order for someone new:** Foundations → Messaging → Visual Identity →
whichever applied standard fits the job.

---

## 3. Authority

When two files disagree:

1. `tokens/sugo.tokens.json` — the source of truth for every value
2. `01-VISUAL_IDENTITY.md` — the source of truth for every rule
3. The applied standard for the medium (`02-` or `03-`)
4. The implementation (`src/app/site.css`, a template, a skill)

`design.md` in the repository root is the entry point for Hallmark runs. It
carries no independent authority — it points here.

**No implementation file may declare a design value.** If a needed value does not
exist, add it to the JSON, regenerate the CSS, then reference it. Inline hex,
inline `oklch()`, and a bare `font-family` declaration are defects.

---

## 4. Asset inventory

Shareable logo exports live in [`public/brand/logos`](../../public/brand/logos)
and are addressable from the site at `/brand/logos/<filename>`.

| File | Artwork | Background | Size |
| --- | --- | --- | --- |
| `public/brand/sugo-mark-simple-transparent.png` | Simple pixel tomato — **canonical** | Transparent | 372 × 398 |
| `logos/sugo-mark-simple-viola-background.png` | Simple | Viola | 1000 × 1000 |
| `logos/sugo-mark-simple-white-background.png` | Simple | White | 1000 × 1000 |
| `logos/sugo-mark-complex-viola-background.png` | Detailed, navy outline | Viola | 1000 × 1000 |
| `logos/sugo-mark-complex-white-background.png` | Detailed, navy outline | White | 1000 × 1000 |
| `prototypes/art/tomato-a.png` / `tomato-a-viola.png` | Simple, transparent | — | 372 × 398 |
| `prototypes/art/tomato-b.png` / `tomato-b-viola.png` | Detailed, transparent | — | 482 × 449 |

The canonical mark is RGBA with a real transparent background. The four
full-canvas exports are flattened RGB without an alpha channel — the two files
described upstream as "no background" are in fact white, and are named
accordingly.

**Do not** knock out a flattened background by colour selection. The tomato's
white highlight pixels and soft edges go with it. Use the canonical transparent
file or the `prototypes/art` variants instead.

Naming: `sugo-<artifact>-<variant>-<background>.<ext>`, where `variant` is
`simple` or `complex` and the background is always stated explicitly.

### Icons

`favicon.ico` · `favicon-48.png` · `icon-192.png` · `icon-512.png` ·
`apple-icon.png` (180 × 180). All derive from the simple mark.

### Fonts

`src/assets/fonts/` vendors Red Hat Display and JetBrains Mono (both SIL OFL 1.1)
as Latin WOFF2 for the site plus static Bold TTF for the Open Graph renderer.

General Sans is **deliberately not vendored** — its ITF licence requires written
consent to self-host as a webfont. It loads from `api.fontshare.com`. Do not
"fix" this.

---

## 5. Change control

The brand is allowed to evolve. It is not allowed to drift.

**Preserve** (changing any of these is a brand decision, not an execution one):

- the traditional-business audience and the respectful framing
- the modern-software-company discipline as the promise
- the two work categories and end-to-end ownership through production
- the small, senior, hands-on operating model
- calm confidence, friendly seriousness, quiet playfulness
- the pixel tomato as the mark
- navy as the sole ink and dark; viola as the atmosphere; the mark as the only red

**Evolve intentionally:**

- campaign concepts and headline expressions
- layout systems outside the website
- supporting colour, illustration, photography, diagrams
- the prominence of AI relative to broader product work
- examples, proof points, industry emphasis
- service and engagement language

### To change something

1. Add or amend the entry in [`DECISIONS.md`](DECISIONS.md), with the reason.
2. Change `tokens/sugo.tokens.json`.
3. Regenerate `tokens/sugo-tokens.css` and `tokens/sugo-theme.css`.
4. Update the rule in `01-VISUAL_IDENTITY.md` and any applied standard it touches.
5. Update the implementation.
6. Bump the version and the review date on every file you touched.

Never change an implementation first. That is how the invoice template ended up
two systems behind the website.

---

## 6. Skills

Two Claude skills operationalise this library. They live in
[`skills/`](../../skills/) and are the fastest path to a correct artifact.

| Skill | Use |
| --- | --- |
| `sugo-brand` | Any Sugo artifact — loads the system, enforces it, self-checks before emitting |
| `sugo-document` | Proposals, SOWs, invoices, one-pagers, reports, decks: HTML → PDF → optional DOCX |

---

## 7. Scope — what is in, what is out

**The brand is the 2026-08-13 redesign and everything built on it.** Nothing
earlier is a reference, a fallback, or a migration source. When an old artifact
needs replacing, rebuild it from this library rather than adapting it.

### In

| Artifact | Why |
| --- | --- |
| `src/` — the shipped Next.js application | The system, running |
| `src/app/site.css`, `pages-core.css`, `pages-sub.css` | Ported from the locked prototypes; runtime truth |
| `design.md` | The lock record, 2026-08-13 |
| `docs/brand/*` | This library |
| `HOMEPAGE_SPEC.md`, `COPY_BRIEF.md` | Redesign-era briefs. Historical, superseded by `MESSAGING_AND_VOICE.md`, but not contradictory |
| `prototypes/home-master.html`, `how-we-work.html`, `contact.html`, `about.html`, `writing.html` | The approved reference builds |
| `public/brand/*` | Current mark exports |
| `scripts/create-linkedin-assets.cjs` | Already on the new palette and typeface |

### Out

| Artifact | Action |
| --- | --- |
| `legacy/` | Delete. Pre-redesign export. |
| Sugo colour / font / radius / shadow blocks in `globals.css`, and `.dark` | Delete. Pre-redesign values that contradict the system. |
| `TODO.md` | Rewrite or delete. Predates the redesign; names retired typefaces. |
| `prototypes/concept-1a`–`1d`, `concept-2`, `concept-3`, `_demo-kit-reference.html` | Exploration rounds that lost. Archive or delete. |
| Any pre-redesign document template, invoice, deck, or collateral | Rebuild from `03-DOCUMENT_SYSTEM.md`. Do not adapt. |

### Doing it

`cleanup/clean-globals.py` removes the dead CSS by evidence rather than by
guess — it deletes a section only when every class it defines is referenced
nowhere in `src/`, `content/`, or the three current stylesheets. On the current
repo that is **650 of 1,693 lines**. See [`cleanup/README.md`](../../cleanup/README.md)
for what it keeps and why, and for the four things that still need doing by hand.

### One correction outstanding

`design.md` states `--display-tracking: -0.02em` and `--display-lh: 1.12`;
`site.css` ships `-0.015em` and `1.1`. `site.css` is correct.
