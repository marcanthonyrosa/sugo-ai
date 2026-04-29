"use client";

import { openCal } from "@/components/ui/CalModal";

export function GetStarted() {
  return (
    <section className="canvas-ink py-24 max-[767px]:py-16 relative overflow-hidden" style={{ borderRadius: 0 }}>
      {/* Decorative arcs — right side */}
      <div className="absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none max-[900px]:hidden" aria-hidden="true">
        <svg
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-[-60px] top-[50%] -translate-y-[50%] w-[500px] h-[400px]"
          style={{ opacity: 0.6 }}
        >
          <circle cx="350" cy="200" r="160" stroke="rgba(236,234,227,0.06)" strokeWidth="1" fill="none" />
          <circle cx="350" cy="200" r="120" stroke="rgba(236,234,227,0.08)" strokeWidth="1" fill="none" />
          <circle cx="350" cy="200" r="80" stroke="rgba(236,234,227,0.1)" strokeWidth="1" fill="none" />
          <circle cx="350" cy="200" r="40" stroke="rgba(236,234,227,0.06)" strokeWidth="1.5" fill="none" />
          <path d="M 350 40 A 160 160 0 0 1 510 200" stroke="rgba(181,154,212,0.15)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 230 200 A 120 120 0 0 1 350 80" stroke="rgba(181,154,212,0.1)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <circle cx="350" cy="200" r="4" fill="rgba(232,128,107,0.3)" />
          <circle cx="420" cy="130" r="2" fill="rgba(236,234,227,0.12)" />
          <circle cx="280" cy="260" r="2" fill="rgba(236,234,227,0.1)" />
          <circle cx="400" cy="280" r="1.5" fill="rgba(181,154,212,0.2)" />
          <circle cx="300" cy="140" r="1.5" fill="rgba(236,234,227,0.08)" />
          <line x1="350" y1="200" x2="420" y2="130" stroke="rgba(236,234,227,0.06)" strokeWidth="0.5" />
          <line x1="350" y1="200" x2="280" y2="260" stroke="rgba(236,234,227,0.05)" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6 relative">
        <div className="max-w-[600px]">
          <div className="eyebrow mb-6">Next step</div>
          <h2 className="type-h1">Start a <span className="italic-accent">conversation.</span></h2>
          <p className="type-lead max-w-[480px]" style={{ marginTop: "16px" }}>
            30 minutes, no deck. Tell us what you&rsquo;re working on.
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
      </div>
    </section>
  );
}
