import { SectionLabel } from "@/components/ui/SectionLabel";
import { Fade } from "@/components/ui/Fade";

const ROWS: [string, string, string][] = [
  ["Deliverable", "A slide deck and a recommendation.", "Working software your team uses on Monday."],
  ["Who shows up", "A partner in the pitch, juniors on the build.", "A senior product leader, on the build, for the duration."],
  ["Toolkit", "Legacy stacks, slow cycle times.", "Claude Code, Cursor, Figma, Supabase, Vercel \u2014 shipped weekly."],
  ["Coverage", "Operations or product. Pick one.", "Operations and product. Same senior thinking, both sides."],
];

export function WhySugo() {
  return (
    <section className="py-[84px] max-[1199px]:py-16 max-[767px]:py-12">
      <div className="max-w-[1320px] mx-auto px-8 max-[1199px]:px-10 max-[767px]:px-6 relative">
        <div className="max-w-[680px]">
          <SectionLabel n="06">Why Sugo</SectionLabel>
          <h2 className="type-h2">What makes this different.</h2>
        </div>
        <div className="mt-[72px] border-t-2 border-b-2 border-ink" role="table" aria-label="Typical firm vs. Sugo">
          <div className="grid grid-cols-[1.2fr_1.5fr_1.5fr] gap-8 py-5 border-b border-rule font-mono text-[11px] tracking-[0.12em] uppercase text-stone max-[767px]:hidden" role="row">
            <div role="columnheader">Dimension</div>
            <div role="columnheader">Typical firm</div>
            <div role="columnheader">Sugo</div>
          </div>
          {ROWS.map(([dim, typ, sugo]) => (
            <Fade key={dim} className="grid grid-cols-[1.2fr_1.5fr_1.5fr] gap-8 py-8 border-b border-rule items-baseline last:border-b-0 max-[767px]:grid-cols-1 max-[767px]:gap-2.5 max-[767px]:py-6">
              <div className="font-mono text-xs tracking-[0.1em] uppercase text-ink">{dim}</div>
              <div className="font-sans text-base leading-[1.5] text-stone line-through decoration-1">{typ}</div>
              <div className="type-compare-sugo compare-arrow text-ink">{sugo}</div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
