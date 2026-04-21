import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Fade } from "@/components/ui/Fade";

const ROWS: [string, string, string][] = [
  ["AI Opportunity Audit", "2–3 weeks", "A short, structured engagement to rank the highest-ROI AI opportunities across your business and product."],
  ["Back-office Agent Build", "6–12 weeks", "We pick one painful, repetitive workflow and launch an agent that runs inside the business\u200A—\u200Ameasurable from day one."],
  ["AI-native Product Feature", "8–16 weeks", "We design and launch an AI-native feature inside your product\u200A—\u200Athe kind customers feel. Discovery through launch."],
  ["Embedded AI Leadership", "3–12 months", "Fractional or embedded product leadership for companies building a portfolio of AI initiatives."],
];

export function Engagements() {
  return (
    <section className="py-[84px] max-[1199px]:py-16 max-[767px]:py-12">
      <div className="max-w-[1320px] mx-auto px-8 max-[1199px]:px-10 max-[767px]:px-6 relative">
        <div className="max-w-[680px]">
          <SectionLabel n="05">Engagements</SectionLabel>
          <h2 className="type-h2">Four shapes of engagement.</h2>
        </div>
        <div className="mt-[72px] border-t-2 border-b-2 border-ink" role="table" aria-label="Engagements">
          <div className="grid grid-cols-[2fr_1fr_3fr] gap-8 py-5 border-b border-rule font-mono text-[11px] tracking-[0.12em] uppercase text-stone max-[767px]:hidden" role="row">
            <div role="columnheader">Engagement</div>
            <div role="columnheader">Duration</div>
            <div role="columnheader">Description</div>
          </div>
          {ROWS.map(([name, dur, desc]) => (
            <Fade key={name} className="grid grid-cols-[2fr_1fr_3fr] gap-8 py-7 border-b border-rule items-baseline last:border-b-0 max-[767px]:grid-cols-1 max-[767px]:gap-2 max-[767px]:py-6">
              <div className="type-serif-name text-ink">{name}</div>
              <div className="font-mono text-[13px] tracking-[0.06em] uppercase text-clay">{dur}</div>
              <div className="font-sans text-base leading-[1.55] text-ink-80">{desc}</div>
            </Fade>
          ))}
        </div>
        <p className="mt-10">
          <span className="type-body text-ink-80">Not sure which fits? </span>
          <Link className="link-grow" href="/contact">
            Start with a conversation →
          </Link>
        </p>
      </div>
    </section>
  );
}
