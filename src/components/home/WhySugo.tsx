import { SectionLabel } from "@/components/ui/SectionLabel";
import { Fade } from "@/components/ui/Fade";

const ROWS: [string, string, string][] = [
  ["Deliverable", "A slide deck and a recommendation.", "Working software your team uses on Monday."],
  ["Who shows up", "A partner in the pitch, juniors on the build.", "A senior product leader, on the build, for the duration."],
  ["Toolkit", "Legacy stacks, slow cycle times.", "AI-native toolchain, modern stack \u2014 shipped weekly."],
  ["Coverage", "Operations or product. Pick one.", "Operations and product. Same senior thinking, both sides."],
];

export function WhySugo() {
  return (
    <section
      className="py-[100px] max-[767px]:py-[56px]"
      style={{ borderTop: "1px solid var(--color-rule-soft)" }}
    >
      <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6 relative">
        <div className="max-w-[680px]">
          <SectionLabel n="05">Why Sugo</SectionLabel>
          <h2 className="type-h1">What makes this <span className="italic-accent">different.</span></h2>
        </div>
        <div
          className="mt-12"
          style={{ borderTop: "2px solid var(--color-ink-900)", borderBottom: "2px solid var(--color-ink-900)" }}
          role="table"
          aria-label="Typical firm vs. Sugo"
        >
          <div
            className="grid grid-cols-[1.2fr_1.5fr_1.5fr] gap-6 py-4 max-[767px]:hidden"
            style={{
              borderBottom: "1px solid var(--color-rule-soft)",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: "var(--color-ink-500)",
            }}
            role="row"
          >
            <div role="columnheader">Dimension</div>
            <div role="columnheader">Typical firm</div>
            <div role="columnheader">Sugo</div>
          </div>
          {ROWS.map(([dim, typ, sugo]) => (
            <Fade
              key={dim}
              className="grid grid-cols-[1.2fr_1.5fr_1.5fr] gap-6 py-6 items-baseline last:border-b-0 max-[767px]:grid-cols-1 max-[767px]:gap-2 max-[767px]:py-5"
              style={{ borderBottom: "1px solid var(--color-rule-soft)" }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--color-ink-900)" }}>{dim}</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "15px", lineHeight: "1.5", color: "var(--color-ink-300)", textDecoration: "line-through" }}>{typ}</div>
              <div className="type-compare-sugo compare-arrow">{sugo}</div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
