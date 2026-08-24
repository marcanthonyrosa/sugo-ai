# Using the brand tools

Plain-language walkthrough. What exists, what you do once, and what you do every
time. For the rules themselves, start at [`README.md`](README.md).

---

## 1. What you have now

| Where | What it is | Do you edit it? |
| --- | --- | --- |
| `docs/brand/*.md` | The written rules — colour, type, logo, documents, entity facts | Yes, when a decision changes |
| `docs/brand/tokens/sugo.tokens.json` | Every colour, font, and spacing value. **The source of truth** | Yes — this is where values change |
| `docs/brand/tokens/*.css`, `src/app/tokens.css` | Generated from that JSON | **Never.** Run `npm run tokens` instead |
| `.claude/skills/sugo-brand/` | Skill: enforces the brand on anything you make | Rarely |
| `.claude/skills/sugo-document/` | Skill: builds invoices, proposals, SOWs, decks into PDFs | Rarely |
| `cleanup/check-private.py` | Guard: blocks private facts from being committed | No |
| `.sugo-private.json` | Your real client names, rates, address. **Gitignored** | Yes, locally |
| `CLAUDE.md` | What Claude Code reads at the start of every session | Occasionally |

The short version: **JSON holds the values, the markdown holds the rules, the
skills apply both, and the guard stops private facts escaping.**

---

## 2. Setup — once per machine

### a. Fill in your private facts

```bash
cp .claude/skills/sugo-document/.sugo-private.example.json .sugo-private.json
```

Then edit it with real values — address, remittance, and one entry per client.
The client billed personally rather than through the LLC gets
`"billing_profile": "contractor"`.

> **Every string of 4+ characters in this file becomes a denylist term for the
> commit guard.** Put real values in it and nothing generic. Leaving template
> text like `"Attn: Accounts Payable"` in there will block legitimate commits.

Check it worked, and that the file is invisible to git:

```bash
python3 cleanup/check-private.py --repo .
git status --short          # .sugo-private.json must NOT appear
```

### b. The document toolchain

Building PDFs needs Python 3.10+, the Pango/Cairo native libraries, and
`pdftotext` (without which the guard silently skips PDFs instead of scanning
them):

```bash
brew install python@3.13 pango poppler
python3.13 -m venv .venv
.venv/bin/pip install jinja2 weasyprint
```

Verify:

```bash
.venv/bin/python .claude/skills/sugo-document/scripts/build.py --help
```

`.venv/` is gitignored. The first PDF build downloads and caches the General
Sans weights into `.fontcache/` — also gitignored, because the family is
ITF-licensed and must not be redistributed.

### c. Optional — use the skills anywhere on this machine

```bash
mkdir -p ~/.claude/skills
ln -s "$PWD/.claude/skills/sugo-brand"    ~/.claude/skills/sugo-brand
ln -s "$PWD/.claude/skills/sugo-document" ~/.claude/skills/sugo-document
```

For Claude.ai: Settings → Capabilities → Skills → upload each skill folder.

---

## 3. The three ways you actually use this

### Way 1 — Work in this repo. Nothing to remember.

Claude Code reads `CLAUDE.md` at the start of every session, so the brand rules
are already loaded. You no longer say "use the Sugo colours" or "no italics."
Just ask for the work:

> Add a pricing section to the how-we-work page.

It already knows the ink is navy, the radius is never a pill, and that a value
not in the token JSON has to be added there first.

### Way 2 — Make a document

Ask in plain language. The `sugo-document` skill triggers on its own:

> Build a proposal for `<client key>`. Here's the scope, here's what's out of
> scope. Show me the body copy before you render.

Asking to see the copy first is worth doing — it separates the editorial
decision from the rendering, and the copy is the part worth arguing about.

To run it yourself:

```bash
.venv/bin/python .claude/skills/sugo-document/scripts/build.py \
  --template document --context ctx.json --out proposal.pdf
```

Templates are `invoice`, `document`, and `deck`. `--client <key>` pulls that
client's billing profile out of `.sugo-private.json`. `--keep-html` writes the
intermediate HTML so you can read or hand-edit it.

**Running an existing document through the brand.** For copy you already wrote,
compose or paste it as HTML and convert it directly:

```bash
.venv/bin/python .claude/skills/sugo-document/scripts/build.py \
  --html my-existing-doc.html --out my-existing-doc.pdf
```

Or hand the source to Claude Code and ask it to bring the document onto the
brand — that runs the copy past `MESSAGING_AND_VOICE.md` and the voice rules,
not just the visual system.

### Way 3 — Change a brand decision

**Never change the implementation first.** That is how the old invoice template
ended up two design systems behind the website. The order is fixed:

1. Write the reason in `docs/brand/DECISIONS.md`
2. Change the value in `docs/brand/tokens/sugo.tokens.json`
3. `npm run tokens`
4. Update the rule in `01-VISUAL_IDENTITY.md` and the applied standard it touches
5. Update the implementation
6. Bump the version and review date on every file you touched

---

## 4. Commands

| Command | What it does |
| --- | --- |
| `npm run tokens` | Regenerate the CSS from the token JSON |
| `npm run tokens:check` | Fail if the generated files have drifted. Worth running in CI |
| `python3 cleanup/check-private.py --repo .` | Scan the whole tree for private facts |
| `.venv/bin/python .claude/skills/sugo-document/scripts/build.py …` | Build a PDF |

A pre-commit hook runs the guard against staged files automatically. It fails
closed — if it errors, the commit is blocked rather than waved through.

---

## 5. When something looks wrong

| Symptom | Cause | Fix |
| --- | --- | --- |
| Every paragraph in a PDF looks bold | Fontshare ships General Sans 400 with a corrupt name table, so fontconfig substitutes the 600 face | `build.py` repairs this. Delete `.fontcache/` and rebuild to re-fetch |
| A PDF renders in Times New Roman | The stylesheets did not resolve next to the HTML | `build.py` stages them. If you call WeasyPrint directly, copy all of `assets/` |
| The guard blocks a commit you know is clean | `.sugo-private.json` still holds generic template text | Replace it with real values — do not weaken the guard |
| `tokens:check` fails | Someone hand-edited a generated file | `npm run tokens`, then commit the result |
| Claude ignores a brand rule | The session started before `CLAUDE.md` existed, or the rule is only in a reference doc | Restart the session; if the rule is real but unwritten, add it |

---

## 6. The one thing to remember

Nothing below the token JSON gets to invent a value. If a colour, size, or
spacing step you need does not exist, it goes in
`docs/brand/tokens/sugo.tokens.json` first — not inline, not "just this once."
That single rule is what keeps the website, the invoice, and the proposal on the
same brand a year from now.
