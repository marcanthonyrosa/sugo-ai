# Sugo AI document and collateral system

Version 1.0.0 · Last reviewed 24 August 2026

How Sugo AI looks on paper and in PDF: proposals, statements of work, contracts,
invoices, one-pagers, reports, decks, and email. The website is not the brand —
it is one expression of it. These artifacts carry the same system into
environments with no CSS, no hover states, and a recipient who may open the file
in Word on a machine that has never heard of General Sans.

**This document covers:** page geometry, document anatomy, per-artifact
specifications, production pipeline, and delivery format.

**This document does not cover:** colour and type values (see
[`tokens/sugo-office.md`](tokens/sugo-office.md)), what to write (see
[`MESSAGING_AND_VOICE.md`](MESSAGING_AND_VOICE.md)), or the canonical entity and
boilerplate facts (see [`04-BRAND_FACTS.md`](04-BRAND_FACTS.md) — read that before
any contract or invoice).

---

## 1. Two page setups

Everything is US Letter, portrait, unless a client's counsel requires otherwise.

| Setup | Margins | Use |
| --- | --- | --- |
| **Document** | 0.9 in top · 0.75 in sides · 0.75 in bottom | Multi-page: proposals, SOWs, contracts, reports, memos |
| **Sheet** | 0.5 in all round | Single-page instruments: invoices, one-pagers, covers |

Grid: 12 columns across the live area, 0.167 in gutters. Body text sets on
columns 1–8 (roughly 4.6 in, ~68 characters) unless the content is a table.
Marginalia, footnotes, and figure labels sit on columns 9–12.

Deck: 16:9, 13.333 × 7.5 in, 0.6 in margins, 12 columns.

---

## 2. Ground and ink

**On screen and in PDF**, the sheet is `paper` `#F5F2E8`. **On physical stock**,
leave it white — do not print a paper-coloured field edge to edge.

Ink is `#101D3E` for everything: headings, body, rules. Never pure black. Never
grey body text — `ink-700` `#283854` is the lightest that carries running copy.

One accent per document. A proposal is not a colour showcase.

---

## 3. Type

| Element | Font | Size | Weight | Leading |
| --- | --- | --- | --- | --- |
| Document title | Red Hat Display | 28 pt | 700 | 1.05 |
| Section head | Red Hat Display | 17 pt | 700 | 1.15 |
| Subsection | Red Hat Display | 13 pt | 500 | 1.25 |
| Body | General Sans | 10.5 pt | 400 | 1.45 |
| Body strong | General Sans | 10.5 pt | 600 | 1.45 |
| Small / caption | General Sans | 9 pt | 400 | 1.4 |
| Eyebrow | JetBrains Mono | 8.5 pt | 400 | uppercase, +14% tracking |
| Figures, dates, amounts | JetBrains Mono | 8.5–14 pt | 400 | tabular |
| Footnote | JetBrains Mono | 8.5 pt | 400 | 1.4 |

Rules:

- Sentence case headings. No Title Case, no ALL CAPS headings.
- **No italics.** Body 600 carries emphasis.
- Body never below 10 pt. General Sans has closed apertures; it degrades fast.
- Every number, date, and amount is JetBrains Mono with tabular figures. This is
  what makes a Sugo invoice legible at a glance.
- Never letterspace lowercase body text.

---

## 4. Document anatomy

Every multi-page Sugo document has the same six parts, in this order.

### 4.1 Masthead (first page only)

Left: the lockup — `Sugo AI` in Red Hat Display 700 at 24 pt with the mark at
26 pt beside it. Beneath it, a mono eyebrow: `SUGO PRODUCT COMPANY, LLC`.

Right: the document title block — mono eyebrow naming the document type
(`PROPOSAL`, `STATEMENT OF WORK`, `INVOICE`), then the title at 28 pt display 700,
then the reference number in mono 9 pt.

A 2 px ink rule closes the masthead. Nothing else on the page touches it.

### 4.2 Parties / meta band

Two to four columns beneath the masthead: `FROM` / `TO` / `DATE` / `REFERENCE`.
Labels in mono eyebrow; values in display 500 at 13 pt for names and body 10.5 pt
for address lines. Closed with a 1 px hairline.

### 4.3 Body

Section heads at 17 pt with a 1 px hairline above, `--space-lg` clear beneath.
Body on columns 1–8. Lists use a mono zero-padded numeral (`01`, `02`) or a 2 px
ink square bullet — never a disc, never a chevron.

### 4.4 Callouts

Three, and only three:

| Callout | Ground | Use |
| --- | --- | --- |
| **Evidence** | `saffron` `#E8C270` | A cited figure. Always footnoted. |
| **Plain terms** | `blush` `#EDD0C6` | A definition or a plain-language aside. |
| **Note** | `viola-50` `#F3EEF8` | A scope boundary, assumption, or caveat. |

All three: 2 px ink border, 8 px radius, 0.2 in padding. One accent per document
means at most one saffron *and* one blush block per artifact, not one of each per
page.

### 4.5 Tables

- Header row: mono 8.5 pt uppercase, `+16%` tracking, `ink-500`, on `viola-50`,
  with a 2 px ink rule beneath.
- Body rows: 10.5 pt, `ink-700`, separated by 1 px hairlines. No vertical rules.
- Zebra striping only in tables over 12 rows, alternating `paper-2`.
- Numeric columns right-aligned, mono, tabular.
- Total rows: 1 px hairline above, body 600, mono figure.

### 4.6 Footer

Every page: a 1 px hairline, then a single mono 8.5 pt line in `ink-500` —
`Sugo AI · <document reference> · Page N of M`. On the last page, the legal line
replaces the reference: `© <year> Sugo Product Company, LLC d/b/a Sugo AI`.

The mark does not repeat in the footer of a document. It appears once, in the
masthead.

---

## 5. The artifacts

### 5.1 Letterhead / memo

Document setup. Masthead, no parties band, straight into body. Sign-off is
`Marc Rosa` in display 500 at 13 pt, then a mono line with the title and email.

### 5.2 Proposal

Document setup, 4–8 pages. Fixed section order:

1. **The problem as we understand it** — their workflow and constraints, in their
   language, before any Sugo framing. If this section could have been written
   without the discovery call, it is not finished.
2. **What we would build** — the first useful version, scoped.
3. **How we would work** — the engagement shape (a first product / an embedded
   build / pilot to production) and the five-stage loop, only as much as applies.
4. **What we need from you** — access, decisions, and the people whose time is
   required.
5. **Scope boundaries** — a `viola-50` note block naming what is explicitly out.
6. **Investment and terms** — price as a function of problem shape, systems, and
   how much of the path to production already exists. Never a delivery date
   before the workflow is understood.
7. **Next step** — one action.

No case-study section until there is a client who has agreed in writing to be
named.

### 5.3 Statement of work

Document setup. The proposal's commitments, made contractual. Adds: deliverables
table, acceptance criteria, assumptions, change-control clause, payment schedule,
and a signature block (§5.8). Numbered sections throughout —
`1.` / `1.1` / `1.1.1`, mono numerals hanging in the left margin.

### 5.4 Master services agreement / contract

Document setup, restrained: masthead, no accent callouts, no mark beyond the
masthead, no viola fields. Legal documents get the typography and none of the
atmosphere. Numbered clauses, mono numerals, `62ch` measure, 1.5 leading.

Entity facts, signatory, and title come from
[`04-BRAND_FACTS.md`](04-BRAND_FACTS.md). The signing party is **Sugo Product
Company, LLC**, not "Sugo AI" — the DBA is a trade name and does not sign.

### 5.5 Invoice

Sheet setup, one page, always.

Layout, top to bottom:

- Masthead: lockup left, `INVOICE` eyebrow + invoice number in mono right
- Parties band: `FROM` (Sugo Product Company, LLC + address + email) /
  `BILL TO` (client legal entity + contact)
- Meta strip: `ISSUED` / `DUE` / `TERMS` / `SERVICE PERIOD`, mono values
- Line items table: description (display 500 title + mono meta line + body
  detail), quantity, rate, amount
- Totals block: subtotal, adjustments, then **amount due** in a `viola-50` box
  with a 2 px ink border, label in mono eyebrow `viola-900`, figure in mono 20 pt
- Payment instructions and, on a first invoice only, `Enclosed: Form W-9`
- Footer: legal line

Terms default to **Net 15**. Invoice numbers are zero-padded, sequential, never
reused: `INV-001`, `INV-002`. Filename `invoice-NNN.pdf`.

> The `sugo-document` skill ships a working invoice template built to this spec.
> Use it. The pre-redesign invoice template is out of the system — rebuild from
> the template, do not adapt the old one.

### 5.6 One-pager / leave-behind

Sheet setup. Single page, one idea. Structure: statement head at 28 pt across the
full measure, a two-column body, one evidence or plain-terms callout, and a
footer with the mark, `sugoai.com`, and `marc@sugoai.com`. This is the artifact
that may carry a viola field — up to 40% of the sheet.

### 5.7 Report / brief

Document setup. Adds a contents page (mono numerals, hairline rules, no dot
leaders) and running section heads in the footer. Diagrams follow
[`01-VISUAL_IDENTITY.md`](01-VISUAL_IDENTITY.md) §7.3. Figures numbered
`Figure 01` in mono with a body 9 pt caption beneath.

### 5.8 Signature block

Fixed format. Both parties, side by side, 1 px hairline above each signature
line.

```
SUGO PRODUCT COMPANY, LLC          <CLIENT LEGAL ENTITY>
d/b/a Sugo AI

________________________           ________________________
Marc Rosa                          <Name>
Managing Member                    <Title>
Date: __________                   Date: __________
```

Labels in mono eyebrow, names in display 500 at 13 pt, titles in body 10.5 pt.
Marc's title on any Sugo Product Company instrument is **Managing Member**.

### 5.9 Deck

16:9. Six slide types, and no others:

| Type | Ground | Contents |
| --- | --- | --- |
| **Title** | Viola flood | Lockup, deck title at 36 pt, mono meta line (client, date) |
| **Statement** | Ink flood | One sentence at 36 pt, paper type, viola key words. Max one per five slides. |
| **Content** | Paper | Section eyebrow, 36 pt head, body at 18 pt on ≤2 columns |
| **Evidence** | Paper + saffron block | One number, one sentence, one mono footnote |
| **Diagram** | Paper or card | Full-bleed diagram in the §7.3 style, mono caption |
| **Close** | Viola flood | One action, `marc@sugoai.com`, mark |

Rules: no bullet lists longer than five items. No slide with more than 40 words.
No transitions, no builds, no animation. Slide numbers in mono, bottom right.

### 5.10 Email signature

Plain text or minimal HTML. No image logo — mail clients block it, and a broken
image is worse than none.

```
Marc Rosa
Founder · Sugo AI
marc@sugoai.com · sugoai.com
```

Display 500 for the name if the client renders HTML; otherwise plain. Rule above
in `#D9DEE6` if HTML. No quotes, no banner, no social icons, no confidentiality
boilerplate unless counsel requires it.

### 5.11 Social card

1200 × 630. Already generated deterministically by `src/lib/og-image.tsx` — that
renderer is the spec. Viola ground, 2 px navy rules inset 42 px left and right,
mono eyebrow top, Red Hat Display 700 statement at 66–76 pt, mono service line at
the bottom (`INTERNAL TOOLS · AI AGENTS · CUSTOMER PRODUCTS`). Social titles use
brand language, not search titles.

---

## 6. Production and delivery

### 6.1 Pipeline

The reliable path, and the one the skills use:

**HTML + CSS → PDF (WeasyPrint) → optional DOCX**

HTML is the editorial source. It uses the same tokens as the website, so a
document and a web page cannot drift. WeasyPrint honours `@page`, page breaks,
and embedded webfonts, which gives full type fidelity.

DOCX is generated separately (via `docx-js`) only when a client must redline in
Word. It uses the fallback ladder, not the brand fonts, and will not match the
PDF exactly. **That is expected.** The PDF is the artifact of record.

### 6.2 Delivery format

| Situation | Send |
| --- | --- |
| Proposal, SOW, report, one-pager, invoice | **PDF** |
| Contract the client will redline | **DOCX** plus the PDF for reference |
| Deck | **PDF** unless the client asks to present it themselves |
| Anything at all | Never a raw HTML file |

PDF is the default because General Sans cannot be assumed on the recipient's
machine, and because a PDF cannot silently reflow into something that is not the
Sugo system.

### 6.3 Print

- CMYK conversion is done by the printer from the hex values; do not hand-author
  CMYK.
- Minimum mark size in print: 0.2 in simple, 0.6 in complex.
- The 2 px carpentry becomes **0.5 pt** at document scale — thinner than it looks
  on screen, and correct.
- Uncoated warm white stock. Never gloss.

### 6.4 File naming

- Client documents: `sugo-<client>-<doctype>-<YYYY-MM-DD>.pdf`
- Numbered instruments: `invoice-NNN.pdf`, `sow-NNN.pdf`

---

## 7. Document review checklist

Before anything leaves the building:

- [ ] Correct page setup (Document vs Sheet)
- [ ] Masthead present once; mark appears once
- [ ] Legal entity is **Sugo Product Company, LLC d/b/a Sugo AI** on anything
      contractual; signatory is **Marc Rosa, Managing Member**
- [ ] `marc@sugoai.com`; no `hello@`
- [ ] One accent, maximum; no italics; no emoji
- [ ] Every figure in mono, tabular, and — if cited — footnoted
- [ ] No invented metric, testimonial, client name, logo, or date
- [ ] Sentence case headings throughout
- [ ] Page numbers and footer on every page
- [ ] Copy passes the review checklist in `MESSAGING_AND_VOICE.md`
- [ ] Delivered as PDF unless there is a redlining reason not to
