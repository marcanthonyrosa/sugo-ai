# Sugo AI — Roadmap

Tracking file for multi-session work. Check items off as they ship.

---

## Completed

- [x] **Phase 1: Next.js migration** — Scaffolded Next.js 15, App Router, TypeScript, Tailwind v4, shadcn/ui. Ported all routes, components, and hooks from legacy Claude Design export.
- [x] **Phase 2: Tailwind migration** — Registered Sugo tokens in `@theme`, converted all components to Tailwind utilities, kept complex type/animation rules as `@layer components` composites. Deleted raw legacy CSS.
- [x] **Phase 3: MDX for Writing** — Installed `next-mdx-remote` + `gray-matter`. Articles live in `/content/writing/*.mdx`. Writing list and detail pages read from filesystem at build time. `generateStaticParams` for SSG.

---

## Phase 4: Real Integrations

### Calendly
- [ ] Install `react-calendly` (or use Calendly's embed script)
- [ ] Replace `CalModal` placeholder text with real Calendly inline widget
- [ ] Add Calendly URL to env var (`NEXT_PUBLIC_CALENDLY_URL`)
- [ ] Test modal open/close, booking flow, mobile responsiveness

### Ask Sugo → real LLM backend
- [ ] Create Route Handler: `src/app/api/ask/route.ts`
- [ ] Wire up Anthropic SDK — stream Claude responses back as `ReadableStream`
- [ ] Update `ask-engine.ts` to call the Route Handler instead of local canned responses
- [ ] Keep canned responses as fallback when API key is missing (dev/preview)
- [ ] Add `ANTHROPIC_API_KEY` to env vars
- [ ] **Decision:** plain Claude wrapper vs. RAG with site content (embedding the essays, engagement descriptions, etc.). RAG adds complexity but makes Ask Sugo actually useful. Decide before building.
- [ ] Rate limiting on the API route (basic: per-IP throttle)
- [ ] Error handling UI — show a graceful message if the stream fails

### Contact form
- [ ] Add a real form to `/contact` (name, email, message) using shadcn `input` + `textarea`
- [ ] Create Route Handler: `src/app/api/contact/route.ts`
- [ ] Wire up email delivery (Resend or SendGrid)
- [ ] Add `RESEND_API_KEY` or equivalent to env vars
- [ ] Client-side validation + server-side validation
- [ ] Success/error states in the UI
- [ ] Consider honeypot or Turnstile for spam prevention

### Email capture on Ask Sugo
- [ ] Wire `EmailLine` component to submit to the contact API (or a separate `/api/subscribe` route)
- [ ] Store emails somewhere (Resend audience, database, or a simple webhook to Notion/Airtable)
- [ ] Confirmation UI after submit

---

## Phase 5: SEO + Performance

### Metadata
- [ ] Add unique `export const metadata` to every page (title, description, keywords)
- [ ] Add Open Graph metadata (`openGraph` in metadata) — title, description, type, url, images
- [ ] Add Twitter card metadata
- [ ] Create or commission an OG image (1200×630) — can be a branded template

### Structured data
- [ ] Add `Organization` JSON-LD to root layout
- [ ] Add `Article` JSON-LD to writing detail pages (author, datePublished, headline)
- [ ] Add `WebSite` JSON-LD with `SearchAction` if appropriate

### Technical SEO
- [ ] Create `src/app/sitemap.ts` (auto-generate from MDX files + static routes)
- [ ] Create `src/app/robots.ts`
- [ ] Add canonical URLs to each page
- [ ] Verify trailing slash behavior is consistent

### Performance
- [ ] Audit with Lighthouse — target 95+ on all categories
- [ ] Optimize font loading — audit Fraunces variable axes (opsz + SOFT), ensure we're not pulling unused weights
- [ ] Add `next/image` for Marc's headshot when available (currently placeholder)
- [ ] Review bundle size — ensure no unnecessary client JS on server-rendered pages
- [ ] Add `loading="lazy"` or `priority` attributes to images as appropriate
- [ ] Consider preloading critical CSS for above-fold content

---

## Phase 6: Polish + Production Hardening

### Error & loading states
- [ ] Add `src/app/not-found.tsx` — styled 404 page matching the site's design
- [ ] Add `src/app/error.tsx` — global error boundary
- [ ] Add `src/app/writing/[slug]/not-found.tsx` — specific 404 for invalid article slugs
- [ ] Add `src/app/loading.tsx` or per-route `loading.tsx` with skeleton UI

### Page transitions
- [ ] Evaluate options: `next/navigation` events, `framer-motion` layout animations, or CSS-only
- [ ] Implement subtle fade between route changes (keep it minimal — matches the editorial tone)
- [ ] **Decision needed:** Is a library like `framer-motion` worth the bundle cost here, or is a CSS transition sufficient?

### Analytics
- [ ] Choose provider: Plausible (privacy-first, paid), Vercel Analytics (free tier), or PostHog
- [ ] Install and configure
- [ ] Track key events: page views, CTA clicks (Calendly opens, email link clicks), Ask Sugo interactions
- [ ] Set up a simple dashboard

### Accessibility
- [ ] Run axe-core audit on every route
- [ ] Test keyboard navigation end-to-end (Tab order, focus traps on modals, Escape to close)
- [ ] Test with VoiceOver on macOS
- [ ] Verify color contrast ratios (clay on paper, paper on clay, paper on moss)
- [ ] Ensure all interactive elements have visible focus indicators (already styled with `:focus-visible`)
- [ ] Test reduced-motion preferences (animations should respect `prefers-reduced-motion`)

### Content
- [ ] Write the first real essay: "Why 95% of enterprise AI pilots fail"
- [ ] Replace lorem ipsum in other article stubs with real or near-final content
- [ ] Add Marc's headshot to replace the portrait placeholder
- [ ] Review all copy for typos, broken links, stale dates
- [ ] Add a favicon / app icon (replace Next.js default)

### Infrastructure
- [ ] Set up Railway environment variables (API keys, etc.)
- [ ] Verify Railway Nixpacks build works (`npm run build` + `npm start`)
- [ ] Set up a custom domain
- [ ] Configure HTTPS (Railway handles this with custom domains)
- [ ] Set up preview deployments for PRs (if using GitHub integration)

---

## Future / Backlog

These are ideas, not commitments. Revisit after launch.

- [ ] **RSS feed** for writing — `src/app/feed.xml/route.ts` generating Atom/RSS from MDX files
- [ ] **Newsletter integration** — connect email capture to ConvertKit, Buttondown, or Resend Audiences
- [ ] **Case studies** — new content type alongside writing (different layout, metrics-heavy)
- [ ] **Dark mode** — the shadcn dark vars are already in globals.css, but the Sugo palette is light-only. Would need a dark palette design.
- [ ] **i18n** — not needed now, but Next.js App Router supports it natively if Sugo expands
- [ ] **CMS** — if Marc wants to publish without touching code, consider Sanity, Contentlayer, or Keystatic. MDX-on-disk works well for now.
- [ ] **Search** — if the writing section grows, add client-side search (Pagefind, Fuse.js) or Algolia
- [ ] **Animation library** — if page transitions or section animations need more sophistication, evaluate `framer-motion` or `motion`

---

*Last updated: 2026-04-21*
