---
name: sugo-brand
description: Build anything in the Sugo AI brand — web pages, app screens, landing pages, components, documents, proposals, decks, one-pagers, social cards, email signatures, diagrams, or marketing copy. Use this skill whenever Marc asks for something "for Sugo", "on-brand", "in the Sugo style", "branded", "Viola Light", or names a Sugo AI surface (sugoai.com, the site, the deck, a proposal, an invoice, a one-pager). Also use it proactively when he is editing an existing Sugo artifact, when a request mentions the pixel tomato, viola, the navy carpentry, Red Hat Display or General Sans, or when building anything that will carry the Sugo AI name in front of a client. When in doubt on a Sugo-adjacent request, load this skill — a correct artifact beats a fast wrong one.
---

# Sugo AI brand

Make it look and sound like Sugo AI. This skill carries the locked **Viola
Light** system and the rules that hold it together.

## Before anything else

1. **Find the brand library.** If a `sugo-ai` repository is available, read
   `docs/brand/` — it is the source of truth and may be newer than this skill.
   Look for `docs/brand/tokens/sugo.tokens.json` first.
2. **If the repo is not available**, use [`references/tokens.md`](references/tokens.md)
   in this skill. It is a faithful snapshot.
3. **Never invent a value.** Every colour, font, radius, and duration comes from
   the tokens. If a needed value does not exist, say so rather than improvising.

Then read the reference that matches the job:

| Making | Read |
| --- | --- |
| Web page, app screen, component | [`references/web.md`](references/web.md) |
| Document, proposal, invoice, deck | [`references/document.md`](references/document.md) — and prefer the `sugo-document` skill, which builds them |
| Copy of any kind | [`references/voice.md`](references/voice.md) |
| Anything at all | [`references/tokens.md`](references/tokens.md) + the rules below |

---

## The system in eight rules

These are not preferences. Breaking one produces something that is not Sugo.

1. **Navy is the only ink and the only dark.** `#101D3E` for every headline,
   every body line, every 2 px rule, the primary button, and the one dark flood
   per page. Never black. Never grey body text.

2. **Viola is the atmosphere.** `#E3D4EF` is the brand colour — hero floods,
   social cards, cover fields. `#F3EEF8` is its quiet tint. `#B296D2` is
   **decoration only** (2.29:1 on paper — never type, never a meaningful icon).

3. **One accent per composition, and accents mean things.**
   Saffron `#E8C270` = **evidence** (a number, a citation).
   Viola `#E3D4EF` = **human** (plain language, warmth, origin). Blush
   `#EDD0C6` is retired (B-45) — it reads as red. There is no danger red
   either (B-41): red belongs to the mark alone.
   Never both in the same section.

4. **The mark is the only red.** The chunky pixel tomato, ≤3% of any
   composition. Never recoloured, outlined, rotated, or set on saffron
   or a photo. Clear space = 25% of its height.

5. **2 px navy carpentry.** Panels are drawn, not floated. Adjacent panels share
   their seam. Radii 2 / 4 / 8 / 10 px — nothing is a pill. The only shadow is a
   stacked hard offset `4px 4px 0`, no blur, ever.

6. **Two families plus one outlier.** Red Hat Display 700/500 for display,
   General Sans 400/600 for body, JetBrains Mono for numerals and metadata only.
   Sentence case headings. **No italics** — body 600 carries emphasis. No emoji.

7. **Motion is quiet.** One orchestrated entrance per page. 160 ms crossfades.
   The Hop on the hero mark. Nothing else. Honour `prefers-reduced-motion`.

8. **Honest copy.** No invented metric, testimonial, client name, logo, or date.
   The one citable figure is MIT NANDA, August 2025, ≈5% of enterprise GenAI
   pilots showing measurable P&L impact — and it always travels with its
   footnote.

---

## Voice, compressed

Plain, operator-sharp, production-oriented. Written for smart people who know
their business and do not live in software jargon.

- **Plain, not simplified.** "We map the handoffs, approvals, edge cases, and
  dependencies" — not "cross-functional alignment across the value stream."
- **Specific, not inflated.** "Code in the production system" — not
  "best-in-class digital transformation."
- **Confident, not absolute.** Say what is contained, what is larger, and where
  the uncertainty is. Never guarantee a timeline.
- **Warm, not performative.** A senior partner talking to another adult.
- **Quietly playful.** At most one dry beat per section. The sauce motif lives in
  the About origin story and the site footer footnote — nowhere else.

Never say: seamless, unleash, empower, supercharge, transform, journey,
innovative solutions, next-generation, in today's digital landscape.

Never describe the audience as behind, legacy, unsophisticated, or resistant.
They are **traditional businesses** with strong operators and real constraints.

Full rules: [`references/voice.md`](references/voice.md).

---

## Facts that must be exact

| Field | Value |
| --- | --- |
| Legal entity | Sugo Product Company, LLC |
| Trade name | Sugo AI (Texas DBA) |
| Contractual form | Sugo Product Company, LLC d/b/a Sugo AI |
| Signatory | Marc Rosa, **Managing Member** (marketing title: Founder) |
| Email | `marc@sugoai.com` — `hello@` does not exist |
| Domain | `https://sugoai.com` — apex, no `www` |
| Copyright | `© <year> Sugo Product Company, LLC d/b/a Sugo AI` |

The **LLC signs**. The DBA never signs.

---

## Before emitting anything

Run this. Fix anything that fails; do not ship and caveat.

- [ ] Every colour and font is a token — no inline hex, no bare `font-family`
- [ ] Navy ink, paper ground, one accent, one dark flood
- [ ] No pill radius, no blurred shadow, no italics, no emoji
- [ ] The mark, if present: correct variant, clear space, approved background
- [ ] Interactive elements have all eight states (default, hover, focus-visible,
      active, disabled, loading, error, success)
- [ ] Contrast: body ≥ 4.5:1, graphics ≥ 3:1. Nothing set in `viola-500`
- [ ] Responsive at 320 / 375 / 414 / 768 px, no horizontal scroll
- [ ] `prefers-reduced-motion` honoured
- [ ] No invented facts; any figure is cited and footnoted
- [ ] Copy reads calm, direct, specific — could a generic consultancy have
      written it? If yes, rewrite

Then state, in one line, which rules were load-bearing for this artifact. If
something in the brief conflicts with the system, name the conflict rather than
quietly resolving it.
