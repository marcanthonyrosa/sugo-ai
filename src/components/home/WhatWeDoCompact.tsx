import Link from "next/link";
import { Fade } from "@/components/ui/Fade";

export function WhatWeDoCompact() {
  return (
    <section
      className="py-[80px] max-[767px]:py-[48px]"
      style={{ borderTop: "1px solid var(--color-rule-soft)" }}
    >
      <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6">
        <Fade>
          <div className="eyebrow mb-5">What we do</div>
          <h2 className="type-h1">
            Two places AI earns its <span className="italic-accent">keep.</span>
          </h2>
        </Fade>

        <div className="grid grid-cols-2 gap-6 mt-10 max-[900px]:grid-cols-1">
          <Fade>
            <div className="card" style={{ display: "grid", gap: "14px", height: "100%" }}>
              <div className="flex items-center gap-4">
                <div
                  className="icon-frame"
                  style={{ background: "var(--color-basil-50)", color: "var(--color-basil-ink)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="14" height="14" rx="3" />
                    <path d="M3 9h14M9 3v14" />
                  </svg>
                </div>
                <span
                  className="chip-pill"
                  style={{
                    fontSize: "11px",
                    padding: "4px 10px",
                    background: "var(--color-basil-50)",
                    color: "var(--color-basil-ink)",
                    borderColor: "rgba(74,124,89,0.18)",
                  }}
                >
                  6–12 weeks
                </span>
              </div>
              <h3 className="type-serif-heading">Agents inside the <span className="italic-accent">business.</span></h3>
              <p style={{ fontSize: "15px", color: "var(--color-ink-700)", lineHeight: 1.55 }}>
                Back-office agents that take manual work off the team,
                integrations that stop the copy-paste, dashboards that actually
                get opened on Monday.
              </p>
            </div>
          </Fade>
          <Fade delay={80}>
            <div className="card" style={{ display: "grid", gap: "14px", height: "100%" }}>
              <div className="flex items-center gap-4">
                <div
                  className="icon-frame"
                  style={{ background: "var(--color-sky-50)", color: "var(--color-sky-ink)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h12v12H4z" />
                    <path d="M4 8h12M8 4v12" />
                  </svg>
                </div>
                <span
                  className="chip-pill"
                  style={{
                    fontSize: "11px",
                    padding: "4px 10px",
                    background: "var(--color-sky-50)",
                    color: "var(--color-sky-ink)",
                    borderColor: "rgba(143,163,177,0.22)",
                  }}
                >
                  8–16 weeks
                </span>
              </div>
              <h3 className="type-serif-heading">AI-native product <span className="italic-accent">features.</span></h3>
              <p style={{ fontSize: "15px", color: "var(--color-ink-700)", lineHeight: 1.55 }}>
                Customer-facing features designed end-to-end{"\u200A—\u200A"}discovery
                through launch, measured against real outcomes. The kind
                customers feel.
              </p>
            </div>
          </Fade>
        </div>

        <Fade>
          <div className="mt-8">
            <Link className="btn-ghost" href="/how-we-work" style={{ border: "none" }}>
              See all engagements <span className="arrow">→</span>
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
}
