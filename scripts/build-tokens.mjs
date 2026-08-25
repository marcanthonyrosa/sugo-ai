#!/usr/bin/env node
/**
 * Sugo AI token generator.
 *
 * Reads docs/brand/tokens/sugo.tokens.json — the single source of truth — and
 * emits the three consumable forms:
 *
 *   src/app/tokens.css                    runtime CSS custom properties
 *   docs/brand/tokens/sugo-tokens.css     the same file, published in the library
 *   docs/brand/tokens/sugo-theme.css      Tailwind v4 @theme + shadcn plumbing
 *
 * Run: npm run tokens
 * Check in CI: npm run tokens:check  (fails if the emitted files drift)
 *
 * No dependencies. Node 18+.
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "..");
const SRC = join(ROOT, "docs/brand/tokens/sugo.tokens.json");

const BANNER = (name, note) => `/* ==========================================================================
   Sugo AI · ${name}
   GENERATED from docs/brand/tokens/sugo.tokens.json — do not hand-edit.
   Change the JSON, then run \`npm run tokens\`.
   ${note}
   ========================================================================== */
`;

const t = JSON.parse(readFileSync(SRC, "utf8"));

/** OKLCH source if the token carries one, otherwise the hex value. */
const authored = (node) => node?.$extensions?.oklch ?? node?.$value;
/** Always the sRGB hex — for surfaces that cannot read OKLCH. */
const hex = (node) => node?.$value;

const c = t.color;
const pair = (name, node, comment) => {
  const v = authored(node);
  const h = hex(node);
  const trail = comment ?? (v !== h ? h : null);
  return `  --${name}:${" ".repeat(Math.max(1, 22 - name.length))}${v};${trail ? ` /* ${trail} */` : ""}`;
};

const runtime = [
  BANNER("tokens.css", "Token layer only. Chrome and sections live in site.css and pages-*.css."),
  "",
  ":root {",
  "  /* ---------- Surface ---------- */",
  pair("color-paper", c.surface.paper),
  pair("color-paper-2", c.surface["paper-2"]),
  pair("color-card", c.surface.card),
  "",
  "  /* ---------- Ink ---------- */",
  pair("color-ink", c.ink["900"]),
  pair("color-ink-2", c.ink["700"]),
  pair("color-muted", c.ink["500"]),
  pair("color-rule", c.ink["100"]),
  pair("color-rule-flood", c.ink["500"], "hairlines on a navy flood"),
  "",
  "  /* ---------- Viola ---------- */",
  pair("color-viola-50", c.viola["50"]),
  pair("color-viola", c.viola["300"]),
  "  --color-flood:          var(--color-viola);",
  pair("color-flood-shade", c.viola["400"]),
  pair("color-viola-500", c.viola["500"], "DECORATIVE ONLY — 2.29:1, never type"),
  pair("color-underline", c.viola["900"]),
  "",
  "  /* ---------- Accents · one per composition ---------- */",
  pair("color-saffron", c.accent.saffron, "evidence"),
  pair("color-sky", c.accent.sky, "diagrams only"),
  "",
  "  /* ---------- Mark · never used outside the tomato ---------- */",
  pair("color-mark-coral", c.mark.coral),
  pair("color-mark-stem", c.mark.stem),
  "",
  "  /* ---------- Action ---------- */",
  "  --color-accent:         var(--color-ink);",
  pair("color-accent-hover", c.action.hover),
  "  --color-accent-ink:     var(--color-paper);",
  "",
  "  /* ---------- Focus ---------- */",
  pair("color-focus", c.focus["on-paper"]),
  pair("color-focus-on-flood", c.focus["on-flood"]),
  "",
  "  /* ---------- Status · application UI only, never marketing ---------- */",
  // Derived from the token file, not a fixed list: the status palette is
  // allowed to shrink. `danger` was removed by B-41 (red belongs to the mark).
  ...Object.keys(c.status)
    .filter((k) => !k.startsWith("$"))
    .map(
      (k) => `  --color-${k}:${" ".repeat(22 - k.length)}${c.status[k].surface.$value};  --color-${k}-ink: ${c.status[k].ink.$value};`
    ),
  "",
  "  /* ---------- Data visualisation · use in order ---------- */",
  ...Object.keys(c.dataviz)
    .filter((k) => !k.startsWith("$"))
    .map((k) => `  --color-dv-${k}: ${c.dataviz[k].$value};  /* ${c.dataviz[k].$extensions.name} */`),
  "",
  "  /* ---------- Type ---------- */",
  `  --font-display: var(--font-redhat), ${t.font.display.$value.map((f) => (f.includes(" ") ? `"${f}"` : f)).join(", ")};`,
  `  --font-body:    ${t.font.body.$value.map((f) => (f.includes(" ") ? `"${f}"` : f)).join(", ")};`,
  `  --font-outlier: var(--font-jb-mono), ${t.font.outlier.$value.map((f) => (f.includes(" ") ? `"${f}"` : f)).join(", ")};`,
  "",
  "  --display-tracking:  -0.015em;",
  "  --display-lh:        1.1;",
  "  --display-weight:    700;",
  "  --display-weight-md: 500;",
  "",
  ...Object.entries(t.typography.web).map(
    ([k, v]) => `  --text-${k}:${" ".repeat(Math.max(1, 14 - k.length))}${v.$value};`
  ),
  "",
  "  /* ---------- Space · 4-pt base ---------- */",
  ...Object.entries(t.space)
    .filter(([k]) => !k.startsWith("$"))
    .map(([k, v]) => `  --space-${k}:${" ".repeat(Math.max(1, 6 - k.length))}${v.$value};`),
  "",
  "  /* ---------- Geometry ---------- */",
  `  --border-panel: ${t.geometry["border-panel"].$value.replace(hex(c.ink["900"]), "var(--color-ink)")};`,
  `  --border-hair:  ${t.geometry["border-hair"].$value.replace(hex(c.ink["100"]), "var(--color-rule)")};`,
  `  --border-stage: ${t.geometry["border-stage"].$value.replace(hex(c.ink["900"]), "var(--color-ink)")};`,
  "  --radius-micro: 2px;",
  "  --radius-btn:   4px;",
  "  --radius-card:  8px;",
  "  --radius-panel: 10px;",
  "",
  "  --shadow-stack:             4px 4px 0 var(--color-ink);",
  "  --shadow-stack-lift:        5px 5px 0 var(--color-ink);",
  "  --shadow-stack-press:       2px 2px 0 var(--color-ink);",
  "  --shadow-stack-viola:       4px 4px 0 var(--color-viola-500);",
  "  --shadow-stack-viola-lift:  5px 5px 0 var(--color-viola-500);",
  "  --shadow-stack-viola-press: 2px 2px 0 var(--color-viola-500);",
  "",
  "  /* ---------- Motion ---------- */",
  ...Object.entries(t.motion).map(([k, v]) => `  --${k}:${" ".repeat(Math.max(1, 14 - k.length))}${v.$value};`),
  "",
  "  /* ---------- Layout ---------- */",
  `  --wrap-max:     ${t.layout["wrap-max"].$value};`,
  `  --measure-body: ${t.layout["measure-body"].$value};`,
  `  --measure-lede: ${t.layout["measure-lede"].$value};`,
  `  --measure-head: ${t.layout["measure-head"].$value};`,
  `  --z-raised:     ${t.layout["z-raised"].$value};`,
  `  --z-sticky-nav: ${t.layout["z-sticky-nav"].$value};`,
  "}",
  "",
].join("\n");

const theme = [
  BANNER("sugo-theme.css", "Tailwind v4 @theme export + shadcn plumbing. Light only — Sugo has no dark palette (DECISIONS D/B-34)."),
  "",
  "@theme {",
  `  --color-paper:     ${authored(c.surface.paper)};`,
  `  --color-paper-2:   ${authored(c.surface["paper-2"])};`,
  `  --color-card:      ${authored(c.surface.card)};`,
  `  --color-ink:       ${authored(c.ink["900"])};`,
  `  --color-ink-2:     ${authored(c.ink["700"])};`,
  `  --color-muted:     ${authored(c.ink["500"])};`,
  `  --color-rule:      ${authored(c.ink["100"])};`,
  `  --color-viola-50:  ${authored(c.viola["50"])};`,
  `  --color-viola:     ${authored(c.viola["300"])};`,
  `  --color-viola-400: ${authored(c.viola["400"])};`,
  `  --color-viola-500: ${authored(c.viola["500"])};`,
  `  --color-viola-900: ${authored(c.viola["900"])};`,
  `  --color-saffron:   ${authored(c.accent.saffron)};`,
  `  --color-sky:       ${authored(c.accent.sky)};`,
  ...Object.keys(c.status)
    .filter((k) => !k.startsWith("$"))
    .flatMap((k) => [
      `  --color-${k}:     ${c.status[k].surface.$value};`,
      `  --color-${k}-ink: ${c.status[k].ink.$value};`,
    ]),
  ...Object.keys(c.dataviz)
    .filter((k) => !k.startsWith("$"))
    .map((k) => `  --color-dv-${k}: ${c.dataviz[k].$value};`),
  "",
  `  --font-display: var(--font-redhat), ${t.font.display.$value.map((f) => (f.includes(" ") ? `"${f}"` : f)).join(", ")};`,
  `  --font-sans:    ${t.font.body.$value.map((f) => (f.includes(" ") ? `"${f}"` : f)).join(", ")};`,
  `  --font-mono:    var(--font-jb-mono), ${t.font.outlier.$value.map((f) => (f.includes(" ") ? `"${f}"` : f)).join(", ")};`,
  "",
  ...Object.entries(t.typography.web)
    .filter(([k]) => !k.includes("clamp") && !["display-s", "statement", "stat"].includes(k))
    .map(([k, v]) => `  --text-${k}: ${v.$value};`),
  "",
  "  --spacing: 0.25rem;",
  "  --radius-micro: 2px;",
  "  --radius-btn:   4px;",
  "  --radius-card:  8px;",
  "  --radius-panel: 10px;",
  `  --shadow-stack:       4px 4px 0 ${authored(c.ink["900"])};`,
  `  --shadow-stack-viola: 4px 4px 0 ${authored(c.viola["500"])};`,
  "",
  ...["ease-out", "ease-in", "ease-in-out"].map((k) => `  --${k}: ${t.motion[k].$value};`),
  "}",
  "",
  "/* shadcn semantic vars mapped onto Sugo tokens. Delete if not using shadcn. */",
  ":root {",
  `  --background:           ${authored(c.surface.paper)};`,
  `  --foreground:           ${authored(c.ink["900"])};`,
  `  --card:                 ${authored(c.surface.card)};`,
  `  --card-foreground:      ${authored(c.ink["900"])};`,
  `  --popover:              ${authored(c.surface.card)};`,
  `  --popover-foreground:   ${authored(c.ink["900"])};`,
  `  --primary:              ${authored(c.ink["900"])};`,
  `  --primary-foreground:   ${authored(c.surface.paper)};`,
  `  --secondary:            ${authored(c.viola["50"])};`,
  `  --secondary-foreground: ${authored(c.ink["900"])};`,
  `  --muted:                ${authored(c.surface["paper-2"])};`,
  `  --muted-foreground:     ${authored(c.ink["500"])};`,
  `  --accent:               ${authored(c.viola["300"])};`,
  `  --accent-foreground:    ${authored(c.ink["900"])};`,
  // shadcn requires --destructive to exist. There is no red in this system
  // (B-41), so a destructive action is navy like every other action; it is
  // distinguished by its icon, its label, and its confirmation step.
  `  --destructive:          ${authored(c.ink["900"])};`,
  `  --border:               ${authored(c.ink["900"])};  /* 2px carpentry: borders are ink, not grey */`,
  `  --input:                ${authored(c.ink["900"])};`,
  `  --ring:                 ${authored(c.focus["on-paper"])};`,
  "  --radius:               8px;",
  ...Object.keys(c.dataviz)
    .filter((k) => !k.startsWith("$"))
    .slice(0, 5)
    .map((k, i) => `  --chart-${i + 1}: ${c.dataviz[k].$value};`),
  "}",
  "",
].join("\n");

const outputs = [
  [join(ROOT, "src/app/tokens.css"), runtime],
  [join(ROOT, "docs/brand/tokens/sugo-tokens.css"), runtime],
  [join(ROOT, "docs/brand/tokens/sugo-theme.css"), theme],
];

const check = process.argv.includes("--check");
let drift = 0;

for (const [path, body] of outputs) {
  if (check) {
    let current = "";
    try {
      current = readFileSync(path, "utf8");
    } catch {}
    if (current !== body) {
      console.error(`  DRIFT  ${path.replace(ROOT + "/", "")}`);
      drift++;
    }
  } else {
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, body, "utf8");
    console.log(`  wrote  ${path.replace(ROOT + "/", "")}  (${body.split("\n").length} lines)`);
  }
}

if (check) {
  if (drift) {
    console.error(`\n${drift} file(s) out of date. Run \`npm run tokens\` and commit the result.`);
    process.exit(1);
  }
  console.log("  tokens: in sync");
}
