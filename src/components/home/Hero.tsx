"use client";

import Link from "next/link";
import { Fade } from "@/components/ui/Fade";
import { openCal } from "@/components/ui/CalModal";
import { HeroIllustration } from "./HeroIllustration";

export function Hero() {
  return (
    <section className="pt-[108px] pb-16 max-[767px]:pt-24 max-[767px]:pb-[52px] relative overflow-hidden">
      {/* Dot grid background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-ink-200) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.04) 50%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.04) 50%, transparent 80%)",
        }}
      />

      <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6 relative">
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(420px,500px)] gap-10 items-center max-[900px]:grid-cols-1 max-[900px]:gap-8">
          {/* Text column */}
          <div className="max-w-[620px]">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="chip-pill viola">Founder-led</span>
              <span className="chip-pill">AI opportunity audits</span>
              <span className="chip-pill">Production builds</span>
            </div>
            <h1 className="type-display">
              You&rsquo;ve invested in AI. Where are the <span className="italic-accent">results?</span>
            </h1>
            <Fade>
              <p className="type-lead mt-6 max-w-[580px]">
                Most enterprise AI pilots never reach production. Sugo AI is the
                specialist partner that takes you from stalled pilot to working
                software your team uses every day.
              </p>
            </Fade>
            <Fade delay={40}>
              <div className="grid grid-cols-2 gap-4 mt-8 max-[640px]:grid-cols-1">
                <div className="card" style={{ padding: "18px 20px", display: "grid", gap: "8px" }}>
                  <div className="fig">Best fit</div>
                  <p style={{ fontSize: "15px", color: "var(--color-ink-700)", lineHeight: 1.5 }}>
                    Small and mid-sized teams with a stuck pilot, a painful ops
                    workflow, or an AI feature that needs to get out of concept mode.
                  </p>
                </div>
                <div className="card" style={{ padding: "18px 20px", display: "grid", gap: "8px" }}>
                  <div className="fig">What changes</div>
                  <p style={{ fontSize: "15px", color: "var(--color-ink-700)", lineHeight: 1.5 }}>
                    We clarify where AI should go, build one thing that works, and
                    leave your team with something measurable and maintainable.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade delay={80}>
              <div className="flex items-center gap-4 flex-wrap mt-8">
                <button className="btn-primary" onClick={openCal}>
                  Start a conversation <span className="arrow">→</span>
                </button>
                <Link className="btn-secondary" href="/how-we-work" style={{ border: "none" }}>
                  See how we work <span className="arrow">→</span>
                </Link>
              </div>
            </Fade>
            <Fade delay={120}>
              <div className="grid grid-cols-3 gap-4 mt-8 max-[700px]:grid-cols-1">
                {[
                  ["2-3 weeks", "to rank the right opportunities"],
                  ["6-16 weeks", "to ship the first real build"],
                  ["Senior-led", "from scoping through handoff"],
                ].map(([label, copy]) => (
                  <div key={label} style={{ display: "grid", gap: "4px" }}>
                    <div className="fig" style={{ color: "var(--color-ink-900)" }}>{label}</div>
                    <p style={{ fontSize: "14px", color: "var(--color-ink-500)", lineHeight: 1.45 }}>
                      {copy}
                    </p>
                  </div>
                ))}
              </div>
            </Fade>
          </div>

          {/* Illustration column */}
          <Fade delay={120}>
            <div className="max-[900px]:max-w-[420px] max-[900px]:mx-auto relative">
              <HeroIllustration />
              <div
                className="card absolute bottom-[8%] right-0 max-w-[260px] max-[900px]:right-[4%] max-[900px]:bottom-[4%]"
                style={{
                  padding: "18px 18px 16px",
                  background: "rgba(253, 251, 244, 0.94)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="fig mb-2">What we deliver</div>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "24px",
                    lineHeight: 1.15,
                    color: "var(--color-ink-900)",
                  }}
                >
                  Real workflow fit, real software, and a team that can carry it forward.
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
