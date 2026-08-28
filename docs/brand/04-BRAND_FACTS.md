# Sugo AI brand facts and boilerplate

Version 1.0.0 · Last reviewed 24 August 2026

The canonical register of facts that must be identical everywhere they appear:
legal entity, signatory, contact, descriptions, and reusable boilerplate.

**Read this before writing any contract, invoice, proposal, directory listing,
partner form, or company profile.** Getting the entity name wrong on a signed
instrument is a real problem, not a style problem.

**This document does not cover:** voice or messaging strategy (see
[`MESSAGING_AND_VOICE.md`](MESSAGING_AND_VOICE.md)) or how documents are laid out
(see [`03-DOCUMENT_SYSTEM.md`](03-DOCUMENT_SYSTEM.md)).

---

## 1. Entity

| Field | Value |
| --- | --- |
| Legal entity | **Sugo Product Company LLC** |
| Trade name (DBA) | **Sugo AI** — registered Texas assumed name |
| How to write it in full | Sugo Product Company LLC d/b/a Sugo AI |
| Signatory | **Marc Rosa** |
| Signatory title | **Managing Member** (confirmed via Texas entity lookup) |
| Jurisdiction | Texas |
| Canonical domain | `https://sugoai.com` — apex, no `www` |
| Contact email | `marc@sugoai.com` |
| Copyright line | `© <year> Sugo Product Company LLC d/b/a Sugo AI` |

**Rules:**

- The **LLC signs**; the DBA does not. Any contract, SOW, W-9, or bank instrument
  names *Sugo Product Company LLC*. "Sugo AI" may appear as the trade name on the
  same line but never alone on a signature block.
- Marketing, the website, social, and decks use **Sugo AI**.
- Marc's title is **Founder** in marketing contexts and **Managing Member** on
  anything the entity signs. These are not interchangeable.
- `hello@sugoai.com` does not exist. Never publish it.

## 1a. Who bills

**Default: Sugo Product Company LLC d/b/a Sugo AI.** This is the billing party
for every client.

**Exception: independent contractor.** A small number of engagements are
contracted with Marc personally rather than through the LLC, usually because of
how benefits or worker classification are handled on the client side. Those
invoice as **Marc Anthony Rosa, Independent Contractor**, with his personal email
and the matching W-9 and copyright line.

Two rules make this safe:

1. **Per client, never inferred.** An engagement bills personally only where that
   is recorded for the client. Absent a record, bill as the LLC.
2. **The exception is billing only.** It does not change the brand, the voice,
   the visual system, or anything Sugo signs. A contractor invoice is still a
   Sugo AI document.

Which clients fall under the exception is a private fact — see §1b.

## 1b. Private facts

Some facts are real and necessary and still must never reach a public
repository. They live in a gitignored `.sugo-private.json` alongside the
`sugo-document` skill, shaped by `.sugo-private.example.json`.

**Never committed, never in an example, never in a brand document:**

| Fact | Why |
| --- | --- |
| The business address | It is Marc's home address |
| EIN or any tax identifier | |
| Bank, routing, or remittance detail | |
| Personal email | |
| Real client names on an invoice or example | Reveals who is engaged, and on what terms |
| Real fees, rates, or totals | Reveals commercial terms |
| Which clients use the contractor exception | Reveals the engagement structure |

**Examples in this library use `Example Client, LLC` and `$1.00`.** That is the
convention, not a placeholder waiting to be filled in.

A client name may appear in public work where the client has agreed **in
writing** to be named — a case study, a logo bar. That is a separate decision
from what appears on a financial instrument, and it is currently unexercised.

---

## 2. Descriptions

Use the shortest one that fits. Do not paraphrase into a new variant.

**Positioning line (≤ 90 characters)**

> Sugo AI is a product studio for traditional businesses building serious software.

**Primary headline**

> Modern product development for companies that aren't software companies.

**One sentence (≤ 200 characters)**

> We help traditional businesses ship internal tools, AI agents, and customer
> products with the discipline of a modern software company.

**Short paragraph (≤ 400 characters)**

> Sugo AI is a senior product studio for traditional businesses building serious
> software. We partner with teams that know their business deeply but have not
> historically operated like software companies, and we own the work from the
> first product decision through production and rollout.

**Long paragraph**

> Sugo AI is a senior product studio for traditional businesses building serious
> software. It brings the product, design, and engineering discipline of a modern
> software company to organizations with strong operators, deep domain knowledge,
> and complex real-world constraints. Sugo works from the first product decision
> through production and rollout, combining judgment with hands-on delivery so
> useful software actually reaches the people who need it.

**Differentiation**

> We are not a strategy shop that disappears after the deck. We are not a dev shop
> waiting for tickets. We are a product studio that stays close to the work and
> remains accountable for what ships.

**Service line (for cards, footers, meta)**

> Internal tools · AI agents · Customer products

**Founder bio, short**

> Marc Rosa is the founder of Sugo AI. He was most recently Head of Product at
> Thread and Director of Product at Deep 6 AI, acquired by Tempus. His work spans
> health technology, SaaS, and 0→1 product development.

Reconfirm founder and outcome claims before publishing them in a new external
channel.

---

## 3. Search and social metadata

| Path | Search title | Social title |
| --- | --- | --- |
| `/` | AI Product Development for Traditional Businesses \| Sugo AI | Modern product development for companies that aren't software companies. |
| `/how-we-work` | Product Development From Discovery Through Production \| Sugo AI | We run like a software company. That's where we come from. |
| `/about` | Product Studio for Traditional Businesses \| Sugo AI | A product studio for traditional businesses building serious software. |
| `/contact` | Start a Conversation \| Sugo AI | If the work matters, the conversation is worth having. |

Default description:

> Sugo AI builds internal tools, AI agents, and customer products for traditional
> businesses—from product discovery through production rollout.

Theme colour: `#E3D4EF`. Title template: `%s | Sugo AI`.

`/tmc` and `/tmc-example` are `noindex`. Writing routes stay `noindex` until the
essays are real.

---

## 4. Citable evidence

**One** external claim is currently approved for use:

> MIT NANDA, *The GenAI Divide: State of AI in Business*, August 2025 — only a
> small minority, approximately 5%, of enterprise GenAI pilots showed measurable
> P&L impact.

Rules:

- The citation travels with the figure. Every time.
- Written as `≈5%`, never `95% of AI projects fail`.
- It supports the ownership thesis. It is not a scare tactic and it is not the
  brand story.
- Verify the wording against the source before adapting it for a new channel.

No other metric, testimonial, client name, logo, win rate, delivery timeline, or
headcount claim is approved. Do not invent one.

---

## 5. The footnote

The sauce line that closes the site footer:

> sugo (n.) — Italian for sauce. The good ones are made slowly, with real
> ingredients.

Set in JetBrains Mono. It appears on the website footer and nowhere else. It does
not go on invoices, contracts, or decks.

---

## 6. Origin story

For About pages, bios, and brand-origin contexts only:

> "Sugo" is Italian for sauce. Every Sunday, Marc and his sons start with the same
> recipe and change one small thing. The pixel tomato carries that idea: use a few
> ingredients well, learn from what happened, and make the next change count.

Keep it personal and short. Do not spread tomato or sauce jokes into unrelated
copy.

---

## 7. Words that are always spelled this way

| Correct | Not |
| --- | --- |
| Sugo AI | SUGO AI, sugo.ai, Sugo.ai, SugoAI |
| Sugo Product Company LLC | Sugo Product Company, LLC (with a comma), Sugo Products |
| product studio | agency, consultancy, firm, shop |
| traditional businesses | legacy businesses, non-tech companies, laggards |
| companies that aren't software companies | non-software orgs |
| AI agents | agentic AI, AI agentic workflows |
| internal tools | line-of-business apps |
| version one | MVP |
| production | go-live |
| rollout | change management |
