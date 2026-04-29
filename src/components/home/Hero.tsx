"use client";

import { Fade } from "@/components/ui/Fade";
import { openCal } from "@/components/ui/CalModal";
import { HeroIllustration } from "./HeroIllustration";

export function Hero() {
  return (
    <section className="pt-[120px] pb-20 max-[767px]:pt-24 max-[767px]:pb-[56px] relative overflow-hidden">
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
        <div className="grid grid-cols-[1fr_minmax(0,480px)] gap-12 items-center max-[900px]:grid-cols-1 max-[900px]:gap-8">
          {/* Text column */}
          <div>
            <div className="eyebrow mb-6">Sugo AI</div>
            <h1 className="type-display">
              You&rsquo;ve invested in AI. Where are the <span className="italic-accent">results?</span>
            </h1>
            <Fade>
              <p className="type-lead mt-8 max-w-[540px]">
                Most enterprise AI pilots never reach production. Sugo AI is the
                specialist partner that takes you from stalled pilot to working
                software your team uses every day.
              </p>
            </Fade>
            <Fade delay={80}>
              <div className="mt-10">
                <button className="btn-primary" onClick={openCal}>
                  Start a conversation <span className="arrow">→</span>
                </button>
              </div>
            </Fade>
          </div>

          {/* Illustration column */}
          <Fade delay={120}>
            <div className="max-[900px]:max-w-[360px] max-[900px]:mx-auto">
              <HeroIllustration />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
