"use client";

import { openCal } from "@/components/ui/CalModal";

export function GetStarted() {
  return (
    <section className="canvas-ink py-20 max-[767px]:py-16 relative overflow-hidden" style={{ borderRadius: 0 }}>
      <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6 relative">
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(320px,420px)] gap-10 items-start max-[900px]:grid-cols-1">
          <div className="max-w-[600px]">
            <div className="eyebrow mb-6">Next step</div>
            <h2 className="type-h1">Start a <span className="italic-accent">conversation.</span></h2>
            <p className="type-lead max-w-[520px]" style={{ marginTop: "16px" }}>
              30 minutes, no deck. Tell us what you&rsquo;re working on, where the
              friction is, and what a useful first move would look like.
            </p>
            <div className="flex items-center gap-5 flex-wrap mt-8">
              <button className="btn-primary" onClick={openCal}>
                Book 30 minutes <span className="arrow">→</span>
              </button>
              <a
                className="btn-secondary"
                href="mailto:marc@sugoai.com"
                style={{
                  borderColor: "rgba(236,234,227,0.2)",
                  color: "var(--color-offwhite)",
                  textDecoration: "none",
                }}
              >
                Email Marc <span className="arrow">→</span>
              </a>
            </div>
            <p className="fig mt-8" style={{ color: "rgba(236,234,227,0.4)" }}>
              Based in Houston, TX &middot; working US-wide
            </p>
          </div>

          <div className="grid gap-4">
            <div
              className="card"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(236,234,227,0.12)",
                display: "grid",
                gap: "10px",
              }}
            >
              <div className="fig">What we cover in the first call</div>
              {[
                "What problem is worth solving first",
                "Whether this is an audit, a build, or not a fit yet",
                "What a realistic timeline and scope might be",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full" style={{ background: "var(--color-viola-500)" }} />
                  <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.78)", lineHeight: 1.45 }}>{item}</span>
                </div>
              ))}
            </div>

            <div
              className="card"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(236,234,227,0.12)",
                display: "grid",
                gap: "8px",
              }}
            >
              <div className="fig">Good reasons to reach out</div>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.78)", lineHeight: 1.5 }}>
                You have AI energy but not enough clarity, or you know exactly
                where the drag is and need a senior partner to help get the
                first serious version shipped.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
