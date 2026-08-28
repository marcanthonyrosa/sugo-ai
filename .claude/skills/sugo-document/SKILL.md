---
name: sugo-document
description: Produce any Sugo AI business document as a branded PDF — invoices, proposals, statements of work, contracts, one-pagers, reports, memos, letterhead, and decks. Use this skill whenever Marc asks for an invoice, a proposal, an SOW, a contract, a leave-behind, a one-pager, a client report, or "something to send" a client, and whenever an existing Sugo document needs editing or reissuing. It replaces every pre-redesign document template, including the recurring biweekly client invoice. Trigger even when he doesn't say "PDF" or "branded"; any client-facing Sugo document goes through here so it lands on the current Viola Light system rather than being improvised.
---

# Sugo AI documents

Builds Sugo AI documents as branded PDFs. HTML is the editorial source; the PDF
is the artifact of record.

The system this implements is `docs/brand/03-DOCUMENT_SYSTEM.md`. Read it when
composing something this skill has no template for.

**Everything predating the 2026-08-13 redesign is out of scope.** Do not adapt an
old template, sample an old colour, or copy an old layout. Build from here.

## What ships

```
assets/
  sugo-print-tokens.css  fonts + token values. Every print surface imports this.
                         Declares no layout. Do not hand-edit values.
  sugo-document.css      Letter format — document and sheet setups
  sugo-deck.css          16:9 format — the six slide types
  invoice.html           Jinja2 invoice (Sheet setup)
  document.html          Jinja2 generic (Document setup) — proposals, SOWs,
                         contracts, reports, memos
  deck.html              Jinja2 deck (16:9)
  sugo-mark.png          the canonical mark
scripts/
  build.py               Jinja2 → HTML → PDF via WeasyPrint
  measure.py             line-length check on a built PDF (B-46)
```

No stylesheet may declare a value. If one is needed that
`sugo-print-tokens.css` does not carry, add it to
`docs/brand/tokens/sugo.tokens.json` first, then mirror it here.

## Dependencies

```bash
pip install jinja2 weasyprint
```

Needs Python 3.10+ and the Pango/Cairo native libraries (`brew install python@3.13
pango`). `pdftotext` from `poppler` is also required, or `cleanup/check-private.py`
silently skips PDFs instead of scanning them.

In this repo the interpreter lives in `.venv/`:

```bash
.venv/bin/python .claude/skills/sugo-document/scripts/build.py --help
```

WeasyPrint fetches Red Hat Display and JetBrains Mono from Google Fonts and
embeds them. General Sans is handled separately: `build.py` caches both weights
under `.fontcache/` (gitignored — the family is ITF-licensed and must not be
redistributed) and repairs the 400 face, whose `name` table Fontshare ships
broken. Without that repair fontconfig discards the regular weight and sets
every paragraph in 600. Network access is required on the first build; later
builds reuse the cache. The resulting PDF is self-contained.

## Build

```bash
# From a JSON context
python3 scripts/build.py --template invoice --context ctx.json --out invoice-004.pdf

# Keep the intermediate HTML to inspect or hand-edit
python3 scripts/build.py --template document --context ctx.json --out sow.pdf --keep-html

# Convert HTML you composed yourself
python3 scripts/build.py --html my-doc.html --out my-doc.pdf
```

`build.py` fills in the constants that are the same on every Sugo document —
year, `marc@sugoai.com`, `Sugo Product Company, LLC`, Net 15, the mark. Override
any of them in the context.

## Invoice

Sheet setup, always one page.

Required context keys:

```json
{
  "invoice_number": "INV-004",
  "invoice_seq": "04",
  "issue_date": "24 Aug 2026",
  "due_date": "08 Sep 2026",
  "service_period": "10 – 21 Aug 2026",
  "to_name": "Example Client, LLC",
  "to_lines": ["Attn: Accounts Payable", "City, State", "ap@example.com"],
  "items": [{
    "title": "AI product development",
    "meta": "WEEK OF 10 AUG · WEEK OF 17 AUG",
    "detail": "One or two sentences of scope.",
    "qty": "1", "rate": "1.00", "amount": "1.00"
  }],
  "subtotal": "$1.00",
  "total_due": "$1.00",
  "remittance": "Payable by ACH or check. Bank details on file.",
  "enclosed": ""
}
```

Rules:

- Invoice numbers are zero-padded and sequential. **Never reuse one.** Scan the
  output folder for the highest existing `invoice-NNN.pdf` and take the next.
- Terms default to **Net 15**; due date is issue + 15 days.
- Set `"enclosed": "Form W-9"` on a first invoice to a new client only. Omitting
  it on later invoices is correct — including it would be misleading.
- Filename `invoice-NNN.pdf`.
- Pass `--client <key>` rather than pasting billing details into the context.
- Confirm the billing period, invoice number, and total back to Marc before he
  sends it.

## Who is billing

**Default: Sugo Product Company, LLC d/b/a Sugo AI.** Every client, unless that
client has an explicit exception on file.

**Exception: independent contractor.** A small number of engagements are
contracted with Marc personally rather than through the LLC — usually because of
how benefits or worker classification are handled on the client side. Those
invoice as *Marc Anthony Rosa, Independent Contractor*, with his personal email
and the matching W-9 and copyright line.

This is **per client, and never inferred.** An engagement bills personally only
if it is named as such in `.sugo-private.json`. If a client isn't configured and
Marc hasn't said otherwise, bill as the LLC. If you are unsure, ask — getting
the billing entity wrong on a sent invoice is a tax problem, not a formatting one.

## Private facts

Client names, rates, remittance details, and Marc's business address (which is
his home address) never go in the repository.

They live in `.sugo-private.json` — gitignored, loaded automatically by
`build.py` from the skill root, the working directory, or `~`. Copy
`.sugo-private.example.json` to create it.

```bash
python3 scripts/build.py --template invoice --client <key> \
  --context period.json --out invoice-004.pdf
```

`--client` applies that client's billing profile, address lines, terms, and
remittance in one step, so the period-specific context file carries only dates
and line items — nothing sensitive.

Without the private file, the build still works and produces a correct document
using the public LLC defaults. That is the intended fallback, not a failure.

**Never write into the repo, an example, or a committed context file:** a real
client name, a real fee, the home address, bank or routing details, an EIN, or
a personal email. Examples use `Example Client, LLC` and `$1.00`.

This applies to **rendered output too**. A PDF carries everything its context
file did, so an example PDF is sanitised on the same terms as its source. Run
`cleanup/check-private.py` before committing anything — it reads its denylist
from `.sugo-private.json` and scans PDFs as well as text.

## Documents (proposal, SOW, contract, report, memo)

Document setup. Pass `body` as pre-built HTML using the classes below, plus:

```json
{
  "doc_type": "PROPOSAL",
  "title": "Buyer intelligence, version one",
  "reference": "SUGO-2026-004",
  "parties": [
    {"label": "From", "name": "Sugo Product Company, LLC",
     "lines": ["d/b/a Sugo AI", "marc@sugoai.com"]},
    {"label": "Prepared for", "name": "Client Co.",
     "lines": ["Attn: Name, Title"]}
  ],
  "signatures": true,
  "client_entity": "Client Co.",
  "client_signer": "Name",
  "client_title": "Title",
  "body": "<h2>…</h2><p>…</p>"
}
```

Set `"signatures": false` for anything that isn't executed.

### Body classes

| Class | Renders |
| --- | --- |
| `h2` / `h3` | Section head (17pt, hairline above) / subsection (13pt) |
| `p` | Body, capped at 68 characters |
| `ol.numbered` | Mono zero-padded numerals hanging left |
| `ul.squares` | 2px ink square bullets |
| `.callout.callout--evidence` | Saffron. A cited figure. Add `.figure-lead` for the number. **Always footnote it.** |
| `.callout.callout--plain` | Viola. A definition or plain-language aside. |
| `.callout.callout--note` | Viola-50. A scope boundary, assumption, or caveat. |
| `table` / `table.zebra` | Mono uppercase header on viola-50, hairline rows. `.r` on numeric cells. `tr.total` for totals. |
| `.due` | The amount-due box |
| `figure` + `figcaption` | 2px ink frame, mono caption |
| `.footnotes` | Mono citations block |
| `.page-break` | Force a page break |

One accent per document — at most one saffron **and** one viola plain-terms
block in the whole artifact, not one of each per page.

**No red, and no warm pink.** There is no danger colour, no error ink, and no
blush: red belongs to the mark alone (DECISIONS B-41, B-45). Blush `#EDD0C6`
was retired because it is the coral's own family and reads as red on the page.

When a table row is the exception that matters, mark it with a `viola-50`
ground, not a hue.

**One right edge (B-47).** No element declares a `max-width`. Prose, callouts,
tables, panels and the folio all end at the page margin.

**Document setup is 0.9 in sides**, body 10.5 pt on 1.5, which measures
~90 characters a line. That is above the 75–85 ideal: **Sugo documents run
wide by choice**, and 90 is exactly the median of a standard SOS / IRS
business letter. Sides match the 0.9 in head, and 0.9 in clears a three-hole
punch.

**The margin is not the readability lever.** Measured on the same report, the
old typography at 0.75 in ran 90 characters and the current typography at
0.75 in runs 92 — yet one reads far better. The gains came from the rules
above: one right edge, list markers on the baseline, a heading scale that
ranks by weight, callout copy at body size. If a document reads badly, fix
those before touching the margin.

**Margin barely moves the measure and never moves the page count.** Across
0.75 in to 1 in sides the count runs 92 down to 87, and every setting in that
range sets the same nine-page report in nine.

**Measure the built PDF, never estimate** — `python3 scripts/measure.py
out/<doc>.pdf`.

**Lists use `1.` in the body face at body size** (B-48), hanging at the text
edge with an 18 pt indent. A mono numeral at a different size cannot share the
baseline of the copy beside it.

**A callout's copy sets at body size** (B-50); its ground and border carry the
emphasis. **No rule above a section head** (B-49) — space does that job.

**Long tables break, they do not jump.** Anything over ~10 rows gets
`class="long"` so it splits across sheets with its header repeating.

### Proposal section order

Fixed:

1. The problem as we understand it — their workflow and constraints, in their
   language, before any Sugo framing. If this could have been written without the
   discovery call, it isn't finished.
2. What we would build — the first useful version, scoped.
3. How we would work — engagement shape and the five-stage loop, only as much as
   applies.
4. What we need from you — access, decisions, whose time is required.
5. Scope boundaries — a `callout--note` naming what's explicitly out.
6. Investment and terms — price as a function of problem shape, systems involved,
   and how much of the path to production already exists. **Never a delivery date
   before the workflow is understood.**
7. Next step — one action.

No case studies until a client has agreed in writing to be named.

### Contracts

Austere. Masthead only. No accent callouts, no viola fields, no mark beyond the
masthead. Legal documents get the typography and none of the atmosphere.

The **LLC signs**; the DBA never signs. Signatory is **Marc Rosa, Managing
Member** — not Founder, which is the marketing title.

## Decks

16:9, 13.333 × 7.5in, one `<section class="slide">` per page.

```bash
python3 scripts/build.py --template deck --context deck.json --out deck.pdf
```

Context is a `slides` array. Six types, and no others:

```json
{
  "title": "Buyer intelligence",
  "slides": [
    {"type":"title","title":"Buyer intelligence, version one",
     "meta":"CLIENT · 24 AUGUST 2026"},

    {"type":"content","eyebrow":"Where the work breaks",
     "title":"The pipeline lives in one person's head.",
     "body":"One or two sentences.",
     "bullets":["Up to five","Never more"],
     "two_col": false},

    {"type":"statement","lead":"Most pilots stall because ",
     "key":"nobody owns","tail":" what happens after the demo."},

    {"type":"evidence","eyebrow":"The market picture","number":"5%",
     "qualifier":"of enterprise GenAI pilots show measurable P&L impact",
     "note":"One short paragraph of interpretation.",
     "cite":"MIT NANDA, \"The GenAI Divide: State of AI in Business,\" August 2025."},

    {"type":"diagram","eyebrow":"How it fits","title":"System shape",
     "image":"arch.png","alt":"…","caption":"Figure 01 — …"},

    {"type":"close","title":"If the software matters, the product work should too.",
     "action":"marc@sugoai.com"}
  ]
}
```

Rules the template enforces or you must:

- **Statement slides are the deck's only dark moments.** Maximum one per five
  slides. `key` renders in viola against the navy flood.
- Bullets are truncated to five by the template. If you need six, the slide is
  two slides.
- No slide over 40 words.
- Slide numbers are automatic, mono, bottom right. Title and close slides carry
  none.
- No transitions, no builds, no animation. A deck is a printed artifact that
  happens to be projected.

## Delivery

**PDF for everything.** DOCX only when a client must redline — generate it
separately, expect it not to match the PDF, and send the PDF alongside as the
reference. Never send raw HTML.

The reason is licensing as much as fidelity: General Sans cannot be assumed on a
recipient's machine, and its ITF licence forbids redistributing the files.

Filenames: `sugo-<client>-<doctype>-<YYYY-MM-DD>.pdf`, instruments
`invoice-NNN.pdf`.

## Before handing it over

- [ ] Correct setup — Sheet for invoices and one-pagers, Document for everything else
- [ ] Masthead once; mark once; page numbers on every page
- [ ] **Sugo Product Company, LLC d/b/a Sugo AI** on anything contractual;
      signatory **Marc Rosa, Managing Member**
- [ ] `marc@sugoai.com` — `hello@` does not exist
- [ ] One accent; **no red anywhere but the mark**; no italics; no emoji
- [ ] Every figure in mono, tabular, footnoted if cited
- [ ] No invented metric, testimonial, client name, logo, or date
- [ ] Sentence case headings
- [ ] Line length measured on the built PDF (B-46) — ~90 is this system's
      standing figure; past 100 means something is wrong
      — `python3 scripts/measure.py out/<doc>.pdf`
- [ ] One right edge — no element sets its own `max-width` (B-47)
- [ ] Rendered and eyeballed **page by page** — a half-empty sheet mid-document
      means a `break-inside: avoid` block is jumping; let that table break and
      repeat its header (`table.long`) rather than shaving points to fit
- [ ] Echo the key numbers back to Marc before he sends it
