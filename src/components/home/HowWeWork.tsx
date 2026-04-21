import { SectionLabel } from "@/components/ui/SectionLabel";
import { Fade } from "@/components/ui/Fade";

const STEPS: [string, string, string][] = [
  ["01", "Map the landscape.", "Two to three weeks. We find the AI opportunities with real ROI and real feasibility\u200A—\u200Ascored, ranked, and scoped."],
  ["02", "Build something small and real.", "Six to twelve weeks for a back-office agent; eight to sixteen for an AI-native product feature. Not a demo\u200A—\u200Asoftware your team actually uses."],
  ["03", "Expand what works.", "Once something is used and measured, we widen from there. Most engagements compound into a second and third workstream."],
];

export function HowWeWork() {
  return (
    <section className="py-[140px] max-[1199px]:py-28 max-[767px]:py-[72px]">
      <div className="max-w-[1320px] mx-auto px-8 max-[1199px]:px-10 max-[767px]:px-6 relative">
        <div className="max-w-[680px]">
          <SectionLabel n="04">How We Work</SectionLabel>
          <h2 className="type-h2">Small, senior, and on the clock.</h2>
        </div>
        <div className="flex flex-col gap-16 mt-[72px] max-w-[680px] ml-40 max-[1199px]:max-w-[580px] max-[1199px]:ml-20 max-[767px]:max-w-full max-[767px]:ml-0">
          {STEPS.map(([n, h, b]) => (
            <Fade key={n} className="grid grid-cols-[140px_1fr] gap-10 items-baseline max-[767px]:grid-cols-1 max-[767px]:gap-3">
              <div className="type-step-num text-clay">{n}</div>
              <div>
                <h3 className="type-serif-heading mb-3">{h}</h3>
                <p className="type-body">{b}</p>
              </div>
            </Fade>
          ))}
        </div>
        <p className="type-pullout mt-24">
          &ldquo;Software your team uses on Monday&mdash;not a deck.&rdquo;
        </p>
      </div>
    </section>
  );
}
