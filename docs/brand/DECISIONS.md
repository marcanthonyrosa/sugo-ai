# Sugo AI brand decision register

Version 1.0.0 · 24 August 2026

Every decision the brand rests on, in one place. Three sections:

- **A — Extracted.** Decisions already made and visible in the repo or on the live
  site, now written down so they stop being tribal knowledge.
- **B — Newly defined.** Decisions the system needed but had never expressed.
  These were made in building this library; they are proposals until Marc
  confirms, then they are law.
- **C — Open.** Things that genuinely need a call.

When a decision changes, amend it here first, then in the document it governs.

**Scope:** the brand is the 2026-08-13 redesign and everything built on it.
Pre-redesign work is not a reference and not a migration source. Where an entry
below names a retired typeface or colour, it is recording what was replaced, not
preserving a fallback.

---

## A · Extracted decisions

### Identity

| # | Decision | Source |
| --- | --- | --- |
| A-01 | System is **Viola Light**, locked 2026-08-13 after the Panel Press round (variants A–E2) | `design.md`, `.hallmark/log.json` |
| A-02 | Axes: light / geometric-sans / chromatic-viola-light | `design.md` |
| A-03 | Macrostructure: Split Studio panel-carpentry on home; document/workflow spines on inner pages | `design.md` |
| A-04 | The mark is the **chunky pixel tomato**, simple variant, transparent PNG | `design.md`, `docs/brand/README.md` |
| A-05 | The mark is the **only** red-family element; ≤3% of viewport | `design.md` |
| A-06 | Nav mark 22 px beside the wordmark, `translateY(-1px)` | `design.md`, `Nav.tsx` |
| A-07 | Hero mark at `min(54%, 320px)` on flood panels | `pages-core.css` |
| A-08 | Two artwork variants: `simple` (reduced coral + green) and `complex` (detailed, navy outline) | `docs/brand/README.md` |
| A-09 | Brand name and mark come from the Sunday sauce ritual | `BRAND_FOUNDATIONS.md` |

### Typography

| # | Decision | Source |
| --- | --- | --- |
| A-10 | Display: **Red Hat Display** 700 / 500 | `site.css`, `layout.tsx` |
| A-11 | Body: **General Sans** 400 / 600, loaded from Fontshare CDN | `layout.tsx` |
| A-12 | Outlier: **JetBrains Mono**, numerals and metadata **only** | `site.css` |
| A-13 | Fraunces and Switzer were **retired** on 2026-08-13 | `.hallmark/log.json` |
| A-14 | Body 17 px, 1.25 modular scale, display tracking `-0.015em`, leading `1.1` | `site.css` |
| A-15 | Sentence case headings; no exclamation marks; curly quotes and em dashes | `MESSAGING_AND_VOICE.md` |
| A-16 | Red Hat Display and JetBrains Mono vendored locally as WOFF2 + Bold TTF for the OG renderer | `src/assets/fonts/README.md` |

### Colour

| # | Decision | Source |
| --- | --- | --- |
| A-17 | Navy `#101D3E` is the sole ink, the action colour, and the only dark flood | `site.css` |
| A-18 | Paper `#F5F2E8` is the default ground; card `#FBFAF4` is the raised plane | `site.css` |
| A-19 | Viola `#E3D4EF` is the hero flood, the social-card ground, and the browser theme colour | `site.css`, `layout.tsx` |
| A-20 | Saffron `#E8C270` carries the stat panel; ~~blush `#EDD0C6` carries the plain-terms card~~ **superseded by B-45** — the plain-terms card is now `viola` | `pages-core.css` |
| A-21 | Navy floods are the page's **only** dark moments; text flips to paper | `design.md` |
| A-22 | Focus is `#6E3F8D` on light, `#F5EFD7` on flood | `site.css` |
| A-23 | Palette authored in OKLCH | `site.css` |

### Geometry and motion

| # | Decision | Source |
| --- | --- | --- |
| A-24 | 2 px solid navy panel borders; adjacent panels share the border | `design.md` |
| A-25 | Radii: 2 / 4 / 8 / 10 px. Nothing is a pill. | `site.css` |
| A-26 | Only shadow is the stacked hard offset `4px 4px 0`, no blur | `site.css` |
| A-27 | Primary CTA: navy fill, paper text, viola-500 stacked shadow | `design.md` |
| A-28 | Nav is **sticky, in flow, never fixed** — approved 2026-08-13 | `design.md` |
| A-29 | 4-pt spacing scale | `site.css` |
| A-30 | Motion: Hop idle on the hero mark (~3.4 s, stepped), pot steam, 160 ms tab crossfades, one hero entrance per page, nothing else | `design.md` |
| A-31 | Reduced motion: everything static or ≤150 ms opacity | `site.css` |

### Content and structure

| # | Decision | Source |
| --- | --- | --- |
| A-32 | Positioning: *a product studio for traditional businesses building serious software* | `MESSAGING_AND_VOICE.md` |
| A-33 | Two work categories: internal tools & AI agents; customer products | `BRAND_FOUNDATIONS.md` |
| A-34 | Five-stage loop: discovery → workflow mapping → product design → engineering through production → iteration | live site |
| A-35 | Three engagement shapes: a first product / an embedded build / pilot to production | `BRAND_FOUNDATIONS.md` |
| A-36 | Only citable figure: MIT NANDA, Aug 2025, ≈5%, always footnoted | `design.md` |
| A-37 | No invented metrics, testimonials, client names, or dates | `design.md` |
| A-38 | `marc@sugoai.com` everywhere; `hello@` does not exist | `design.md` |
| A-39 | Legal line: `© 2026 Sugo Product Company, LLC d/b/a Sugo AI` | `design.md` |
| A-40 | Canonical domain is the apex `sugoai.com`; `www` permanently redirects | `SHARING_AND_DISCOVERY.md` |
| A-41 | `/tmc` and `/tmc-example` are `noindex`; writing routes `noindex` while gated | `SHARING_AND_DISCOVERY.md` |
| A-42 | Social cards: 1200 × 630, deterministic, viola ground, brand language not search titles | `SHARING_AND_DISCOVERY.md` |
| A-43 | Sauce motif confined to the About origin story and the footer footnote | `design.md` |
| A-44 | Audience is never described as behind, unsophisticated, or resistant | `BRAND_FOUNDATIONS.md` |
| A-45 | Diversification rule is **inverted** for Sugo properties — pages must share the system | `design.md` |
| A-46 | Reference lineage: Dodonut, Thoughtbot, Viget, Browser London — ingredients, not templates | `BRAND_FOUNDATIONS.md` |

---

## B · Newly defined

Gaps found while extracting. Each was undefined, ambiguous, or contradicted
somewhere.

### Logo

| # | Decision | Why it was needed |
| --- | --- | --- |
| **B-01** | **Clear space = 25% of the mark's height** on all four sides; measured from the outer bounds of a lockup | No clear-space rule existed anywhere |
| **B-02** | **Minimum sizes:** simple mark 16 px / 0.2 in; complex mark 64 px / 0.6 in; lockup 96 px / 1 in | Nothing stopped the complex mark being used at favicon size |
| **B-03** | **Three approved forms:** lockup (preferred), mark alone, wordmark alone (constrained). No stacked lockup, no tagline lockup, no monogram | The lockup existed in code but was never named as the rule |
| **B-04** | **Lockup proportion:** mark height = 1.1 × wordmark font size, gap `0.35em`, mark raised 1 px | Derived from the nav; now portable to print and decks |
| **B-05** | **Approved backgrounds for the mark:** paper, paper-2, card, white, viola, viola-50, ink. **Never** saffron or photography | The coral collides with a warm accent. Blush is retired entirely (B-45) |
| **B-06** | **Misuse list** — no recolour, outline, shadow, rotation, re-draw, colour-key knockout, badge containment, or fixed tagline | `docs/brand/README.md` warned about the knockout only |

### Colour

| # | Decision | Why it was needed |
| --- | --- | --- |
| **B-07** | **Accents carry fixed meaning: saffron = evidence, viola = human.** One accent per composition; never both in one section. *(Amended by B-45: the human role moved off blush.)* | They were being applied by feel |
| **B-08** | **Colour ratio:** ~80% paper/ink · 15% viola · ≤5% one accent · ≤3% mark coral | No budget existed |
| **B-09** | **`viola-500` is decorative only.** Measured 2.29:1 on paper — it fails AA and may never be type, a meaningful icon, or a sole state indicator | It sits one token away from being used as an accent text colour |
| **B-10** | **`sky` `#C9D3DA` is reserved for diagram fills.** It exists in the tokens but appears nowhere in the built site | It was an orphan token; now it has a job |
| **B-11** | ~~**Functional status palette** (success / warning / danger / info) for application UI only, never marketing. Danger is a deep claret `#9B1E22`~~ **Superseded by B-41.** The palette survives as success / warning / info; the danger colour is retired | Apps need validation states; the "mark is the only red" rule had no carve-out. The carve-out was withdrawn |
| **B-12** | **Six-step data-viz series** in fixed order, every step ≥3:1 on paper, always paired with shape or label | shadcn's grayscale `--chart-*` defaults were still in place |
| **B-13** | **Full hex/RGB register** published for every OKLCH token | OKLCH is unusable in Word, PowerPoint, Google, and print |

### Typography

| # | Decision | Why it was needed |
| --- | --- | --- |
| **B-14** | **No italics anywhere.** Body 600 carries emphasis | The retired Fraunces templates used italic viola accents; the new system has no italic story |
| **B-15** | **Document type scale in points** — 28 / 17 / 13 / 10.5 / 9 / 8.5 pt | The scale existed only in rem |
| **B-16** | **Fallback ladder:** display → `Segoe UI, Helvetica Neue, Arial`; body → same; mono → `Consolas, Menlo, Courier New` | Documents leave the machine that made them |
| **B-17** | **Body never below 10 pt** in print — General Sans's closed apertures degrade | |
| **B-18** | **General Sans may not be self-hosted as a webfont** (ITF licence requires written consent) and its files may not be redistributed. Client documents therefore ship as **PDF**, not DOCX | The asymmetry in `src/assets/fonts` looked like an oversight; it is a licence constraint and must be documented so nobody "fixes" it |

### Documents

| # | Decision | Why it was needed |
| --- | --- | --- |
| **B-19** | **Two page setups:** Document (0.9 / 0.75 / 0.75 in) and Sheet (0.5 in) | Nothing defined page geometry |
| **B-20** | **Six-part document anatomy:** masthead → parties band → body → callouts → tables → footer | |
| **B-21** | **Three document callouts only:** evidence (saffron), plain terms (`viola`), note (`viola-50`) *(amended by B-45)* | |
| **B-22** | **Signature block format**, with **Sugo Product Company, LLC** as the signing party and **Marc Rosa, Managing Member** as signatory. The DBA does not sign | The distinction was in memory, not in any template |
| **B-23** | **Six deck slide types only**; no builds, no transitions, ≤40 words per slide | No deck system existed |
| **B-24** | **Email signature is text-only** — no image logo, no banner, no social icons | |
| **B-25** | **Production pipeline: HTML → PDF (WeasyPrint) → optional DOCX**; PDF is the artifact of record | Matches the invoice skill's proven path; now the standard |
| **B-26** | **File naming:** `sugo-<client>-<doctype>-<YYYY-MM-DD>.pdf`; instruments `invoice-NNN.pdf` | |
| **B-27** | **Contracts are austere** — masthead only, no accent callouts, no viola fields | Legal documents get the typography, not the atmosphere |

### Web and system

| # | Decision | Why it was needed |
| --- | --- | --- |
| **B-28** | **Authority hierarchy:** `sugo.tokens.json` → `sugo-tokens.css` → `site.css` → `pages-*.css`. `globals.css` drops to Tailwind/shadcn plumbing only | Three files currently claim to be the source of truth |
| **B-29** | **Every interactive atom ships all eight states**: default, hover, focus-visible, active, disabled, loading, error, success | Loading and disabled were inconsistent |
| **B-30** | **Iconography:** Lucide, 1.5 px stroke, never filled, never accent-coloured, no emoji | `iconLibrary: lucide` was configured but unspecified |
| **B-31** | **Imagery:** no stock photography, ever. Approved: the tomato family, Marc's headshot, real screenshots, system diagrams. Screenshots get a 2 px ink frame and a mono caption; never fake browser chrome | |
| **B-32** | **Diagram style** codified: 2 px ink strokes, card/viola-50/sky/saffron fills, mono labels, no 3-D or gradients | The client architecture drawings already in the repo were the de facto standard, undocumented |
| **B-33** | **Accessibility floor is WCAG 2.2 AA**, with 44 px targets and a published contrast table | `TODO.md` had an unchecked "verify contrast" item referencing retired colours ("clay on paper, paper on moss") |
| **B-34** | **No dark mode.** Sugo is a light-only system. The `.dark` block in `globals.css` is dead code | It was sitting in the backlog as an open idea; leaving it ambiguous invites half-built dark surfaces |

### Billing and privacy

| # | Decision | Why it was needed |
| --- | --- | --- |
| **B-35** | **Default billing party is Sugo Product Company, LLC d/b/a Sugo AI.** Invoicing personally as *Marc Anthony Rosa, Independent Contractor* is a **per-client exception**, recorded per client and never inferred. Absent a record, bill as the LLC | Some engagements are contracted with Marc personally because of how benefits or worker classification are handled client-side. Without a stated default the wrong entity ends up on a sent invoice — a tax problem, not a formatting one |
| **B-36** | **The exception is billing only.** It changes the party on the instrument. It does not change the brand, the voice, the visual system, or anything Sugo signs | Prevents the exception spreading into a second visual or verbal identity |
| **B-37** | **Private facts layer.** Business address (Marc's home address), tax identifiers, remittance detail, personal email, real client names, and real fees live in a gitignored `.sugo-private.json` — never in the repository. `build.py` loads it if present and produces a correct generic document if not | The repository is public. The pre-redesign invoice template carried a real client name, a real fee, and a personal email in committed source |
| **B-38** | **Examples use `Example Client, LLC` and `$1.00`** — the convention, not a placeholder awaiting real values | |
| **B-39** | **A scripted guard, not a habit.** `cleanup/check-private.py` reads its denylist out of the gitignored `.sugo-private.json`, scans source **and rendered PDFs**, and runs as a pre-commit hook | Manual sanitising failed twice here — a client name survived in a lowercase filename example that a case-sensitive grep missed, and three rendered PDFs kept real names and a real fee after their sources were clean |
| **B-40** | **Sanitise the artifact, not just the source.** Any committed or shared PDF, image, or export is scanned on the same terms as the file that produced it | A rendered document carries everything its context file did |
| **B-41** | **Red belongs to the mark and to nothing else.** No functional carve-out, no past-due stamp, no error ink. `status.danger` is removed from the token file. An error state is carried by a Lucide `alert-circle`, a 2 px `ink` border, and the message in body 600 — never by hue | Marc, on review of the first long-form client report: "I never want to use the red color anywhere except for the logo." A carve-out that exists gets used, and the mark stops being the one red thing on the page. Removing the colour is also the stronger accessibility position: the error was never allowed to rest on hue alone, and now it cannot |
| **B-42** | **Document masthead and title block set smaller.** Wordmark 16 pt (was 24), mark 17 pt (was 26), document title ~~19 pt~~ **16 pt** (was 28) — *amended by B-49*, parties and meta bands tightened | The old scale spent the top third of page one on identification. On a multi-page report that is a cover page nobody asked for. The lockup still reads first; it just stops shouting |
| **B-43** | **Body copy in a document sets to the full live measure**, not columns 1–8. *Superseded in method by B-46 and B-47: the principle was right and the execution was not. Removing the cap without moving the margin produced 98-character lines; a later two-width compromise produced three right edges on one page.* | A 68 ch paragraph beside a full-width table reads as an indent error, not as a measure. On a report it also costs pages |
| **B-44** | **Document footer is a page number and nothing else** — `N of M`, mono 8 pt, bottom right. The running `Sugo AI · <reference>` line is retired; the reference lives in the masthead, where it is read once | Every page carried a line nobody reads, and it made the sheets feel padded |
| **B-45** | **Blush `#EDD0C6` is retired.** It reads as red on the page, and red belongs to the mark alone. The **human / plain-terms** role moves to `viola` `#E3D4EF`, the brand colour. The document callout set becomes evidence (`saffron`), plain terms (`viola`), note (`viola-50`) | Marc, on the same review as B-41: the blush action box "is still a reddish color, I want it removed." Blush and the coral are the same family; a warm pink field on a page competes with the mark and, at a glance, simply looks red. Retiring the swatch is more reliable than asking each artifact to use it sparingly |
| **B-46** | **The side margin is the measure.** Document setup is 0.85 in top · **1 in sides** · 0.8 in bottom, body 10.5 pt on 1.5. Because nothing caps its own width, the margin is the only thing setting line length. Measure the built PDF, never estimate: ideal 75–85 characters, acceptable to 90, long past that. **Sugo documents run wide by choice, at ~92.** *Amended twice on 28 Aug 2026: 1.5 in measured a comfortable 73 but read as a book beside a state filing; 1 in measured 87. Settled at the original 0.75 in on Marc's preference. The evidence that made this an easy call: on the same report the original typography at 0.75 in ran 90 characters and the rebuilt typography at 0.75 in runs 92, yet one reads far better than the other — **the margin was never what made the first draft hard to read.** B-47 to B-51 did that work. Margin also costs no pages: 0.75 in, 1 in and 1.5 in all set the same report in nine.* | The first draft ran a median 98 characters a line, p90 106, against a best-practice ceiling of 75. That one number produced most of the "hard to read" symptoms, including the impression that the type was too large — type that feels oversized is usually type oversized *for its measure*. Widening these margins is a typographic decision, not a whitespace one |
| **B-47** | **One right edge.** No content element declares a `max-width`. Prose, callouts, tables, panels and the folio all end at the page margin | A capped text column beside full-bleed exhibits put three right edges on one page: the margin where the folio sits, the container edge, and the prose edge. That is worse than a long line, because the eye has no single edge to return to |
| **B-48** | **List markers are `1.` in the body face at body size**, hanging at the text edge with an 18 pt indent; square bullets indent 14 pt | A zero-padded mono `01` set at 9 pt beside 10.5 pt General Sans can never share its baseline, and a 28 pt indent put a third left edge on the page |
| **B-49** | **Heading scale: h1 16 pt, h2 13.5 pt, h3 11.5 pt, all 700.** Levels separate by weight and space, not by size alone. Space above a head is ~3× the space below. **No rule above a section head** | h3 at 13 pt/500 against 10.5 pt body barely read as a level. The hairline above every h2 was one of four horizontal rules inside an inch and a half |
| **B-50** | **A callout's copy sets at body size.** The ground and the 2 px border carry the emphasis | A pull quote at 15 pt display against 10.5 pt body reads as a headline dropped into a paragraph |
| **B-51** | **The masthead is two rows.** Title on one line; document type, version and date consolidate onto a single mono run beneath it. The reference code moves to the closing block | Three stacked elements pushed the title onto two lines and spent the top of page one on identification |

---

## C · Open — needs a call

| # | Question | Why it matters |
| --- | --- | --- |
| **C-04** | **When does the pre-redesign code come out?** `globals.css` Sugo blocks, the `.dark` block, `legacy/`, `TODO.md`, and the losing prototype concepts. *Partially addressed 24 Aug 2026: the two hardcoded shadcn `--destructive` reds in `globals.css` were pointed at `--color-ink` under B-41. The rest of the block still carries a neutral greyscale that is not this brand, and `src/app/tokens.css` is generated but imported nowhere* | Any agent reading those files inherits a brand that no longer exists |
| **C-05** | **Rebuild the recurring client invoice on the `sugo-document` template before the next cycle?** The template and the private client profile are both ready | It is the only live client-facing document artifact |
| **C-06** | **Retire `sugo-product-company` repo/site, or redirect it to sugoai.com?** | Already noted as an intention; still outstanding |
| **C-07** | **Sub-brand rule for client-embedded work.** Does a Sugo-built client product carry the Sugo mark, a co-mark, or nothing? | Comes up the moment a second client product ships |
| **C-08** | **Is `Founder` or `Managing Member` used on a proposal cover?** The system says Founder for marketing, Managing Member for instruments — a proposal is arguably both | |
| **C-09** | **Should a case-study format exist yet?** The proposal spec defers it until a client agrees in writing to be named | |
| **C-10** | **Does the complex mark have a job at all?** It currently appears in no shipped surface | If not, retire it and cut the inventory in half |
