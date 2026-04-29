import { SectionLabel } from "@/components/ui/SectionLabel";
import { Fade } from "@/components/ui/Fade";

export function WhatWeDo() {
  return (
    <section
      className="py-[100px] max-[767px]:py-[56px]"
      style={{ borderTop: "1px solid var(--color-rule-soft)" }}
    >
      <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6 relative">
        <div className="max-w-[680px]">
          <SectionLabel n="02">What We Do</SectionLabel>
          <h2 className="type-h1">Two places AI earns its <span className="italic-accent">keep.</span></h2>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-12 max-[900px]:grid-cols-1">
          <Fade>
            <div className="card" style={{ display: "grid", gap: "16px" }}>
              <div
                className="icon-frame"
                style={{ background: "var(--color-basil-50)", color: "var(--color-sage)" }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M3 9h14M9 3v14"/></svg>
              </div>
              <h3 className="type-serif-heading">Agents inside the <span className="italic-accent">business.</span></h3>
              <p className="type-body">
                Quiet back-office software{"\u200A—\u200A"}agents that take
                manual work off the team, integrations that stop the copy-paste,
                dashboards that actually get opened on Monday.
              </p>
              <div style={{ color: "var(--color-ink-500)", fontSize: "13px" }}>
                6–12 weeks &middot; <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>→</span>
              </div>
            </div>
          </Fade>
          <Fade delay={80}>
            <div className="card" style={{ display: "grid", gap: "16px" }}>
              <div
                className="icon-frame"
                style={{ background: "var(--color-sky-50)", color: "var(--color-sky-ink)" }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h12v12H4z"/><path d="M4 8h12M8 4v12"/></svg>
              </div>
              <h3 className="type-serif-heading">AI-native product <span className="italic-accent">features.</span></h3>
              <p className="type-body">
                Customer-facing features designed end-to-end. Discovery through
                launch, measured against real outcomes.
              </p>
              <div style={{ color: "var(--color-ink-500)", fontSize: "13px" }}>
                8–16 weeks &middot; <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>→</span>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
