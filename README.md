# Sugo AI

Marketing site for Sugo Product Company — an AI product and consulting practice that helps mid-to-large enterprises cross the gap between AI pilots and production.

## Stack

- **Framework:** Next.js 16 (App Router, React 19, Turbopack)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 with CSS custom-property design tokens in `globals.css`
- **Components:** shadcn/ui (New York, neutral base) and Base UI primitives
- **Content:** MDX articles via `next-mdx-remote` + `gray-matter` frontmatter
- **Fonts:** Red Hat Display (display) and JetBrains Mono (figures) self-hosted via `next/font`; General Sans (body) via Fontshare
- **Package manager:** npm

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript type checking (`tsc --noEmit`) |
| `npm run tokens` | Regenerate CSS from `docs/brand/tokens/sugo.tokens.json` |
| `npm run tokens:check` | Fail if the generated token files have drifted |

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Home — hero, stat callout, what we do, credibility, why Sugo, get started |
| `/about` | Practice background and principals |
| `/how-we-work` | Engagement model and delivery cadence |
| `/tmc` | Client-specific product overview (TMC × Sugo) with team-tag toggle |
| `/tmc-example` | Standalone client example page |
| `/ask` | Ask Sugo — streamed canned-response Q&A interface |
| `/contact` | Contact cards + Cal.com modal |
| `/writing` | Index of essays |
| `/writing/[slug]` | MDX article page |

## Project layout

```
content/writing/        MDX essays — frontmatter: title, date, readTime, category, standfirst
docs/                   Durable positioning, copy, and brand references
src/app/                Route segments + globals.css design tokens
src/components/
  home/                 Home-page sections (Hero, WhatWeDoCompact, Credibility, …)
  layout/               Nav, Footer
  tmc/                  TMC product table toggle
  ask-sugo/             Ask Sugo chat UI + streaming engine
  writing/              MDX renderer
  ui/                   shadcn/ui primitives + custom (Fade, PotMark, SectionLabel, Wordmark, CalModal)
src/lib/mdx.ts          Filesystem-backed MDX index and loader
src/contexts/           NavColorContext (lets sections retint the fixed nav)
src/hooks/              useInView, useCountUp
public/                 Static assets (icons, headshots, logos)
```

## Brand and design system

Day-to-day usage — setup, making a document, changing a value — is walked
through in [`docs/brand/USING_THE_BRAND_TOOLS.md`](docs/brand/USING_THE_BRAND_TOOLS.md).

Sugo AI runs on a locked design system — **Viola Light**, 2026-08-13. The full
system lives in [`docs/brand/`](docs/brand/README.md):

| | |
| --- | --- |
| [`docs/brand/README.md`](docs/brand/README.md) | Index, authority hierarchy, change control |
| [`01-VISUAL_IDENTITY.md`](docs/brand/01-VISUAL_IDENTITY.md) | Mark, colour, type, geometry, motion, imagery — any medium |
| [`02-WEB_UI_STANDARD.md`](docs/brand/02-WEB_UI_STANDARD.md) | Web and application implementation |
| [`03-DOCUMENT_SYSTEM.md`](docs/brand/03-DOCUMENT_SYSTEM.md) | Documents, PDFs, decks |
| [`04-BRAND_FACTS.md`](docs/brand/04-BRAND_FACTS.md) | Entity, boilerplate, approved claims |
| [`DECISIONS.md`](docs/brand/DECISIONS.md) | Every decision, and what is still open |
| [`tokens/`](docs/brand/tokens/) | The values — JSON, CSS, Tailwind, and Office/print |

### Tokens are generated

`docs/brand/tokens/sugo.tokens.json` is the single source of truth.

```bash
npm run tokens         # regenerate src/app/tokens.css and the published CSS
npm run tokens:check   # fail if the generated files have drifted
```

Never hand-edit `src/app/tokens.css`, `sugo-tokens.css`, or `sugo-theme.css`.

### Privacy

This repository is public. Client names, fees, the business address, and contact
details live in a gitignored `.sugo-private.json`; examples use
`Example Client, LLC` and `$1.00`.

```bash
python3 cleanup/check-private.py --repo . --staged
```

Install it as a pre-commit hook — see [`cleanup/README.md`](cleanup/README.md).

## Adding an essay

1. Drop a new file at `content/writing/<slug>.mdx`.
2. Frontmatter required by `src/lib/mdx.ts`:
   ```yaml
   ---
   title: …
   date: "May 2026"        # "Mon YYYY" — used for sorting
   readTime: "6 min read"
   category: …
   standfirst: …
   ---
   ```
3. The article appears on `/writing` (sorted newest first) and at `/writing/<slug>`.

## Ask Sugo

`/ask` renders a small chat UI backed by `src/components/ask-sugo/ask-engine.ts`. Today it streams hand-authored responses for a fixed seed set and a generic acknowledgement for everything else — no model call yet. Replace `askSugo()` to wire in a real backend.

## Legacy files

`/legacy/` holds the original Claude Design export (HTML, JSX, CSS) used as the starting point for this Next.js port. Kept for reference; not part of the build.

## Deployment

Deploys to Railway via the Nixpacks Node builder. No custom Docker.
