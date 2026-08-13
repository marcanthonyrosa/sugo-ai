# Sugo AI — Copy Brief for Site Pages (v1)

**For:** the copywriting agent that produced the approved homepage copy
**From:** the design/build session, August 13, 2026
**Deliverable:** final copy for four new pages — How we work, Contact, About, Writing — slot by slot, using the § codes below. Each § code maps to an `<!-- COPY-STUB: brief §XX-n -->` comment in the corresponding prototype HTML file, so your output can be filled in mechanically.

---

## 1 · What's locked (do not relitigate)

**Positioning (verbatim, preserved):**
- "Modern product development for companies that aren't software companies."
- "Sugo AI is a product studio for traditional businesses building serious software."
- "We help traditional businesses ship internal tools, AI agents, and customer products with the discipline of a modern software company."

**Differentiation lines (verbatim, preserved):**
- "We are not a strategy shop that disappears after the deck."
- "We are not a dev shop waiting for tickets."
- "We are a product studio that helps traditional businesses build and ship software to a much higher standard."
- "We own the full product lifecycle." / "We stay close to the work until the product is live, stable, usable, and working inside the real constraints of the business."

**Audience:** operators and executives at traditional businesses — healthcare, insurance, operationally complex or regulated legacy businesses. They know their business deeply; they have not historically run like software companies. Never condescend to them; they are strong operators without software-company operating habits.

**The one citable number:** the MIT NANDA report, "The GenAI Divide: State of AI in Business," August 2025 — only a small minority (~5%, "one in twenty") of enterprise GenAI pilots showed measurable P&L impact. Always footnoted. **No other numbers, metrics, client names, testimonials, or dates may be invented — anywhere.** If a slot seems to want proof we don't have, write around it with specificity of language instead.

**Brand register:** calm, serious, modern, product-literate, confident, quietly playful. The playfulness ceiling: at most one wry beat per section. The sauce/sugo motif belongs to the About page's name-origin section and the site-wide footnote ("sugo (n.) — Italian for sauce. The good ones are made slowly, with real ingredients.") — do not spread tomato jokes across pages.

**Banned:** consulting filler; startup clichés (seamless, unleash, empower, supercharge, transform, journey, innovative solutions, next-generation, "in today's digital landscape"); abstract strategy language detached from shipping; exclamation marks; "click here"; humor in any frustration or money context.

**Typography conventions:** curly quotes, real em-dashes (—), ellipsis character (…). Sentence case headlines. Buttons are verbs.

**Design context that shapes length:** display headlines sit in a bold grotesk (Red Hat Display) — headlines read best ≤ 50 characters, hard max ~70. Body copy sits at ~62ch measure. "Ticket" items are little cards — 3–7 words each. Nothing you write should need to wrap inside a button.

---

## 2 · Page: How we work (`/how-we-work`)

**Job:** the proof-of-method page. A skeptical COO should leave believing we run a real product-development system and stay accountable through production — without feeling sold a framework.

| Code | Slot | Intent & constraints |
|---|---|---|
| §HW-1 | Hero lede (2 sentences under the headline "We run like a software company. That's where we come from.") | Set up the page: traditional businesses have operators, constraints, domain knowledge; what they lack is a product-development system. ~40 words. |
| §HW-2a | Stage 01 Discovery — body (2–3 sentences) + 3 ticket labels | What actually happens: sitting with operators, tracing where time/money leak, naming the constraint that matters. Tickets: concrete artifacts (e.g., "A named problem worth building for"). |
| §HW-2b | Stage 02 Workflow mapping — body + 3 tickets | End-to-end mapping so the product fits how work actually moves. No "as-is/to-be" consulting talk. |
| §HW-2c | Stage 03 Product design — body + 3 tickets | Design shaped for regulated, operationally complex environments; usable by real staff, not demo audiences. |
| §HW-2d | Stage 04 Engineering through production — body + 3 tickets | Hands-on ownership until live: real code, real rollout, coordination with internal teams. |
| §HW-2e | Stage 05 Iteration — body + 3 tickets | Version one is the beginning; the loop back is deliberate. |
| §HW-3 | Lifecycle band — one-line glosses for the 5 "parts many firms avoid": production readiness · accessibility · implementation detail · internal coordination · real rollout | One plain clause each. This is the credibility core — be specific, unglamorous. |
| §HW-4 | Three engagement shapes — 2 sentences each: "A first product" / "An embedded build" / "Pilot to production" | Describe the situation each fits, not a productized package. You may rename the patterns if better names exist. |
| §HW-5 | "What we ask of you" — 4 short items | Client-side expectations, plain: access to operators, a real decision-maker, honesty about constraints, appetite to ship. Warm, not contractual. |
| §HW-6 | "Why pilots stall" restatement — 2 sentences + footnote | Compress the homepage section; ownership is the thesis. MIT citation footnoted. |
| §HW-7a–e | FAQ answers (1–3 sentences each) to: "How long until something ships?" / "Who actually does the work?" / "How do you handle regulated data?" / "What does it cost?" / "What happens after version one?" | Answer like a person. No invented timelines or prices — for cost/timeline, explain *how* it's determined honestly and concretely. You may swap in stronger questions if these are weak. |

## 3 · Page: Contact (`/contact`)

**Job:** the whole page is the CTA. Warm, low-friction, zero hype. "Your call." energy — inviting, not needy.

| Code | Slot | Intent & constraints |
|---|---|---|
| §CT-1 | Hero lede under "Start a conversation." (2 sentences) + keep "Or email us — hello@sugoai.com" | No qualification hoops. Talking to us is useful even if they never hire us. ~30 words. |
| §CT-2 | "What happens next" — 3 numbered steps, 1 sentence each | Direction to preserve: we read it the same week / a short call with the people who'd actually do the work / a plain-language plan either way. Rewrite freely but keep the "no handoff to sales" spirit and invent no SLAs. |
| §CT-3 | "Worth bringing" — 3–4 items | What makes a first conversation productive: the workflow that hurts, who lives in it, what's been tried. Framed as helpful, not homework. |
| §CT-4 | Fit honesty — "A good fit if" / "Probably not if", 3 items each | The Thoughtbot trust move. "Probably not if" must stay generous and self-aware (e.g., seeking a body-shop for pre-written tickets; wanting a deck, not a product) — never smug. |

## 4 · Page: About (`/about`)

**Job:** beliefs + origin. The one page where the brand's soul lives.

| Code | Slot | Intent & constraints |
|---|---|---|
| §AB-1 | Hero body under the positioning line (2 sentences) | Who we partner with and the discipline we bring — may adapt the approved positioning body. |
| §AB-2 | "What we believe" — 7 numbered principles, each ≤ 8 words, optionally with a one-line gloss | Manifesto energy in operator language. Current placeholder directions: "Shipped beats planned" / "The operators know where it hurts" / "Software is a practice, not a project." Make them sharp, concrete, non-generic; at most one wry one. |
| §AB-3 | Founder note — 2 short first-person paragraphs + signoff | **This slot needs real founder facts and cannot be fabricated.** Draft a structure/skeleton with [bracketed placeholders] for the founder to fill: where "we come from a software company" is literally true, what they saw, why traditional businesses. Flag it clearly as requiring founder input. |
| §AB-4 | "Why 'sugo'" — 3 sentences beside the pixel tomato | The name: sauce, made slowly, with real ingredients — and the pixel: software's memory of itself, the 80s/90s machines where many of us started. The one place full playfulness is allowed. Land it, don't belabor it. |

## 5 · Page: Writing (`/writing`)

**Job:** editorial index. Almost nothing exists yet — the page must be honest about that while signaling the voice to come.

| Code | Slot | Intent & constraints |
|---|---|---|
| §WR-1 | Intro under "Notes from the work." (1–2 sentences) | Who this writing is for (operators, not engineers) and what it does (plain-English, from real build work). |
| §WR-2 | Featured piece — real title + 2-line dek for the first essay to be written | Current placeholder: "What a pilot is actually for." Choose the strongest first-essay premise from our thesis (ownership, pilots, rollout) and write its title + dek as if commissioning it. Mark stays "In progress." |
| §WR-3a–d | 4 more planned titles + one-line deks | A coherent editorial slate in the voice (current stubs: "The rollout is the product" / "Plain terms: AI agent" / "Why internal tools rot" / "Production is a habit"). Improve or replace. All marked in-progress — no fake dates. |
| §WR-4 | "Plain terms" — 2 new glossary entries: "Internal tool" and "Rollout" (the existing three are locked: AI agent, Pilot, Production) | Format: one honest definition sentence + one dry second beat. Example of locked tone: "Production — when software stops being a demo and starts being how the work gets done." |

## 6 · Also worth drafting (optional, small)

- **Meta descriptions** for all five pages (≤ 155 chars each, plain, no keyword stuffing).
- **404 line** — one sentence, on-voice, one wry beat allowed.
- **Form microcopy** for the contact form: field labels are locked (Name / Company / What are you trying to build?), but draft the success line (silent-simple) and one honest error line (what happened → what to do; no "Oops!").

**Return format:** one markdown file, organized by § code, copy only (no commentary), so it can be filled into the prototypes directly.
