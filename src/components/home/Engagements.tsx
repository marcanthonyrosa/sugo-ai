import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Fade } from "@/components/ui/Fade";

const ROWS: { name: string; dur: string; desc: string; iconBg: string; iconColor: string }[] = [
  {
    name: "AI Opportunity Audit",
    dur: "2–3 weeks",
    desc: "A short, structured engagement to rank the highest-ROI AI opportunities across your business and product.",
    iconBg: "var(--color-pomodoro-50)",
    iconColor: "var(--color-pomodoro-ink)",
  },
  {
    name: "Back-office Agent Build",
    dur: "6–12 weeks",
    desc: "We pick one painful, repetitive workflow and launch an agent that runs inside the business\u200A—\u200Ameasurable from day one.",
    iconBg: "var(--color-basil-50)",
    iconColor: "var(--color-sage)",
  },
  {
    name: "AI-native Product Feature",
    dur: "8–16 weeks",
    desc: "We design and launch an AI-native feature inside your product\u200A—\u200Athe kind customers feel. Discovery through launch.",
    iconBg: "var(--color-sky-50)",
    iconColor: "var(--color-sky-ink)",
  },
  {
    name: "Embedded AI Leadership",
    dur: "3–12 months",
    desc: "Fractional or embedded product leadership for companies building a portfolio of AI initiatives.",
    iconBg: "var(--color-viola-50)",
    iconColor: "var(--color-viola-500)",
  },
];

export function Engagements() {
  return (
    <section
      className="py-[100px] max-[767px]:py-[56px]"
      style={{ borderTop: "1px solid var(--color-rule-soft)" }}
    >
      <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6 relative">
        <div className="max-w-[680px]">
          <SectionLabel n="04">Engagements</SectionLabel>
          <h2 className="type-h1">Four shapes of <span className="italic-accent">engagement.</span></h2>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-12 max-[900px]:grid-cols-1">
          {ROWS.map((row, i) => (
            <Fade key={row.name} delay={i * 80}>
              <div className="card" style={{ display: "grid", gap: "16px" }}>
                <div
                  className="icon-frame"
                  style={{ background: row.iconBg, color: row.iconColor }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="10" cy="10" r="6" />
                    <path d="M10 7v3l2 1.5" />
                  </svg>
                </div>
                <h3 className="type-serif-heading">{row.name}</h3>
                <p style={{ fontSize: "15px", color: "var(--color-ink-700)" }}>{row.desc}</p>
                <div style={{ color: "var(--color-ink-500)", fontSize: "13px" }}>
                  {row.dur} &middot; <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>→</span>
                </div>
              </div>
            </Fade>
          ))}
        </div>
        <p className="mt-8" style={{ fontSize: "15px", color: "var(--color-ink-500)" }}>
          Not sure which fits?{" "}
          <Link className="link-grow" href="/contact" style={{ border: "none" }}>
            Start a conversation <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
