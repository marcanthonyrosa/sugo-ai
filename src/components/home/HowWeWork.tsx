import { SectionLabel } from "@/components/ui/SectionLabel";
import { Fade } from "@/components/ui/Fade";

const STEPS: [string, string, string][] = [
  ["01", "Map the landscape.", "Two to three weeks. We find the AI opportunities with real ROI and real feasibility\u200A—\u200Ascored, ranked, and scoped."],
  ["02", "Build something small and real.", "Six to twelve weeks for a back-office agent; eight to sixteen for an AI-native product feature. Not a demo\u200A—\u200Asoftware your team actually uses."],
  ["03", "Expand what works.", "Once something is used and measured, we widen from there. Most engagements compound into a second and third workstream."],
];

export function HowWeWork() {
  return (
    <section
      className="py-[100px] max-[767px]:py-[56px]"
      style={{ borderTop: "1px solid var(--color-rule-soft)" }}
    >
      <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6 relative">
        <div className="max-w-[680px]">
          <SectionLabel n="03">Process</SectionLabel>
          <h2 className="type-h1">Small, senior, and on the <span className="italic-accent">clock.</span></h2>
        </div>
        <div className="flex flex-col gap-12 mt-14 max-w-[680px]">
          {STEPS.map(([n, h, b], i) => (
            <Fade key={n} delay={i * 80} className="grid grid-cols-[100px_1fr] gap-8 items-baseline max-[767px]:grid-cols-1 max-[767px]:gap-3">
              <div className="type-step-num">{n}</div>
              <div>
                <h3 className="type-serif-heading mb-3">{h}</h3>
                <p className="type-body">{b}</p>
              </div>
            </Fade>
          ))}
        </div>
        <Fade>
          <blockquote className="type-pullquote mt-16">
            <span className="open">&ldquo;</span>Software your team uses on Monday{"\u200A—\u200A"}not a deck.<span className="open">&rdquo;</span>
          </blockquote>
        </Fade>
      </div>
    </section>
  );
}
