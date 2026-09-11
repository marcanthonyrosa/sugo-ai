# Documents, decks, and collateral

Read [`tokens.md`](tokens.md) first. Full standard:
`docs/brand/03-DOCUMENT_SYSTEM.md`. Entity facts: `docs/brand/04-BRAND_FACTS.md`.

**To actually build one, use the `sugo-document` skill** — it ships the CSS, the
templates, and the HTML → PDF pipeline. This file is the specification behind it.

## Page setups

| Setup | Margins | Use |
| --- | --- | --- |
| **Document** | 0.9in top / 0.9in sides / 0.75in bottom | Proposals, SOWs, contracts, reports, memos, briefings |
| **Sheet** | 0.5in all round | Invoices, one-pagers, covers |
| **Deck** | 0.6in, 13.333 × 7.5in | 16:9 |

US Letter portrait. 12 columns, 0.167in gutters. Body sets on columns 1–8
(~68 characters). Marginalia and figure labels on 9–12.

## Ground and ink

On screen and in PDF the sheet is `paper #F5F2E8`. On physical stock, leave it
white. Ink is `#101D3E` for everything — never black, never grey body text.
One accent per document.

## Type (pt)

| Element | Font | Size | Weight | Leading |
| --- | --- | --- | --- | --- |
| Document title | Red Hat Display | 16 | 700 | 1.1 |
| Section head | Red Hat Display | 13.5 | 700 | 1.2 |
| Subsection | Red Hat Display | 11.5 | 700 | 1.3 |
| Body | General Sans | 10.5 | 400 | 1.5 |
| Body strong | General Sans | 10.5 | 600 | 1.5 |
| Small | General Sans | 9 | 400 | 1.4 |
| Eyebrow | JetBrains Mono | 8.5 | 400 | uppercase, +14% tracking |
| Figures / dates / amounts | JetBrains Mono | 8.5–14 | 400 | tabular |

Sentence case headings. **No italics** — body 600 for emphasis. Body never below
10pt. Every number in mono with tabular figures. Never letterspace lowercase body.

## Anatomy

0. **Measure first** — document setup is **0.9in margins** (sides match the
   head), body 10.5pt/1.5, and **nothing caps its own width**: prose, tables,
   callouts and the folio all end at the page margin (B-46, B-47). That
   measures ~90 characters; Sugo documents run wide by choice. The margin is not the
   readability lever — one right edge, baseline-aligned list markers and a
   heading scale that ranks by weight are.
1. **Masthead** (page 1) — two rows. Lockup left (`Sugo AI` 16pt display 700 + 17pt mark),
   mono eyebrow `SUGO PRODUCT COMPANY LLC` beneath. Right: mono document-type
   16pt title on one line, then one mono run: type · version · date.
   Closed by a 2px ink rule.
   The masthead identifies; it does not announce (B-42).
2. **Parties / meta band** — `FROM` / `TO` / `DATE` / `REFERENCE`. Mono eyebrow
   labels, display 500 13pt names, body 10.5pt lines. Closed by a hairline.
3. **Body** — section heads 13.5pt, no rule above (B-49). Lists use `1.` in
   the body face (B-48) or a 2px ink square. Never a disc or chevron.
4. **Callouts** — three only: **evidence** (saffron, always footnoted), **plain
   terms** (`viola`), **note** (`viola-50`). No blush and no red: both retired (B-41, B-45). All 2px ink, 8px radius, 0.2in padding.
5. **Tables** — header mono 7.5pt uppercase +12% on viola-50 with a 2px ink rule
   beneath; body 10pt separated by hairlines; no vertical rules; zebra
   (`paper-2`) only over 12 rows; numerics right-aligned mono tabular; totals
   with a hairline above and a mono figure.
6. **Footer** — a page number and nothing else: mono 8pt `N of M`, bottom
   right (B-44). The legal line closes the last page in the flow. The mark
   appears **once**, in the masthead.

## Artifacts

**Proposal** — Document setup, 4–8pp. Fixed order: the problem as we understand
it → what we would build → how we would work → what we need from you → scope
boundaries (viola-50 note) → investment and terms → next step. If section one
could have been written without the discovery call, it isn't finished. No case
studies until a client agrees in writing to be named.

**SOW** — the proposal's commitments made contractual. Adds deliverables table,
acceptance criteria, assumptions, change control, payment schedule, signature
block. Numbered `1.` / `1.1` / `1.1.1`, mono numerals hanging left.

**Contract / MSA** — austere. Masthead only. No accent callouts, no viola fields,
no mark beyond the masthead. Legal documents get the typography, not the
atmosphere.

**Invoice** — Sheet setup, always one page. Masthead → parties → meta strip
(`ISSUED` / `DUE` / `TERMS` / `SERVICE PERIOD`) → line items → totals with the
amount due in a viola-50 box, 2px ink border, mono eyebrow label in `viola-900`,
figure in mono 20pt → payment instructions → legal footer. **Net 15** default.
Numbers zero-padded, sequential, never reused.

**One-pager** — Sheet setup. One idea. 28pt statement head, two-column body, one
callout, footer with mark + `sugoai.com` + `marc@sugoai.com`. The one artifact
that may carry a viola field across up to 40% of the sheet.

**Report** — Document setup plus a contents page (mono numerals, hairlines, no
dot leaders) and running section heads in the footer. Figures numbered
`Figure 01` in mono with a 9pt caption.

**Briefing** — Document setup, 2–8pp, for data-led readouts: tables,
timelines, charts. Build on `sugo-briefing.css` + the `briefing` template.
Two-line front matter (lockup + title, then one byline), labels in sentence
case, **one frame per document**, a fill or a rule never both, table headers
on viola-50 and group rows on paper-2, compact footnotes, one chart glyph
set, and copy that states content, never the document. Full rules:
03-DOCUMENT_SYSTEM §5.12 (B-54 to B-63).

**Deck** — six slide types only: title (viola flood), statement (ink flood, max
one per five slides), content (paper), evidence (paper + saffron block), diagram,
close (viola flood). No list over five items, no slide over 40 words, no
transitions, no builds. Slide numbers mono, bottom right.

**Email signature** — text only, no image logo:
```
Marc Rosa
Founder · Sugo AI
marc@sugoai.com · sugoai.com
```

## Signature block

```
SUGO PRODUCT COMPANY LLC          <CLIENT LEGAL ENTITY>
d/b/a Sugo AI

________________________           ________________________
Marc Rosa                          <Name>
Managing Member                    <Title>
Date: __________                   Date: __________
```

The **LLC signs**. The DBA never signs. Marc's title on any instrument is
**Managing Member**; **Founder** is the marketing title.

## Production and delivery

**HTML + CSS → PDF (WeasyPrint) → optional DOCX.** HTML is the editorial source
and uses the same tokens as the website, so documents and pages cannot drift.

Deliver **PDF** for everything. DOCX only when a client must redline, and it will
not match the PDF exactly — the fallback fonts are different, and that is
expected. The PDF is the artifact of record. Never send raw HTML.

Reason: General Sans cannot be assumed on the recipient's machine (its ITF licence
also forbids self-hosting the webfont and redistributing the files), and a PDF
cannot silently reflow into something that isn't the Sugo system.

Print: printer converts CMYK from hex; mark minimum 0.2in simple / 0.6in complex;
the 2px carpentry becomes **0.5pt** at document scale; uncoated warm white stock,
never gloss.

Naming: `sugo-<client>-<doctype>-<YYYY-MM-DD>.pdf`; instruments `invoice-NNN.pdf`.

## Before sending

- [ ] Correct page setup; masthead once; mark once
- [ ] **Sugo Product Company LLC d/b/a Sugo AI** on anything contractual;
      signatory **Marc Rosa, Managing Member**
- [ ] `marc@sugoai.com`; no `hello@`
- [ ] One accent; no italics; no emoji
- [ ] Every figure mono, tabular, and footnoted if cited
- [ ] No invented metric, testimonial, client name, logo, or date
- [ ] Sentence case headings; page numbers on every page
- [ ] Briefings follow 03 §5.12: one frame, one filled box, every page looked at
- [ ] Delivered as PDF
