# Sugo AI

The website for Sugo Product Company — an AI product and consulting practice that helps mid-to-large enterprises cross the gap between AI pilots and production.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 + legacy vanilla CSS design tokens
- **Components:** shadcn/ui (New York style, neutral base)
- **Fonts:** Fraunces (display), Inter (body), JetBrains Mono (labels/code) via `next/font`
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

## Legacy files

The `/legacy/` directory contains the original Claude Design export — six static files (HTML, JSX, CSS) that were the starting point for this Next.js port. They are kept as reference and are not used by the build.

## Deployment

Deploys to Railway via Nixpacks Node builder. No custom Docker needed.
