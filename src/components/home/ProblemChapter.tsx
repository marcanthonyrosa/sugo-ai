"use client";

import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Fade } from "@/components/ui/Fade";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

export function ProblemChapter() {
  const statRef = useRef<HTMLDivElement>(null);
  const statInView = useInView(statRef, 0.35);
  const pct = useCountUp(95, 900, statInView);
  const figRef = useRef<HTMLDivElement>(null);
  const figIn = useInView(figRef, 0.3);
  const figPct = useCountUp(95, 900, figIn);
  const figSmall = useCountUp(5, 900, figIn);

  const items: [string, string, string][] = [
    ["01", "Generic tools, shallow fit.", "ChatGPT is brilliant for individuals. In the enterprise, it doesn\u2019t learn your workflows, so usage stays optional and ROI stays invisible."],
    ["02", "Build-it-yourself bias.", "Companies that try to build AI internally succeed roughly a third as often as companies that bring in a specialist partner. Most still try to go it alone."],
    ["03", "Budget in the wrong place.", "Over half of AI spend goes to sales and marketing tools. The highest-ROI work\u200A—\u200Aquietly, repeatedly\u200A—\u200Ais in back-office automation."],
  ];

  return (
    <section className="canvas-ink py-24 max-[767px]:py-16 w-full" style={{ borderRadius: 0 }}>
      <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6 relative">
        <div className="max-w-[680px]">
          <SectionLabel n="01">The Problem</SectionLabel>
          <h2 className="type-h1">
            Most enterprise AI never leaves the <span className="italic-accent">pilot stage.</span>
          </h2>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)_minmax(280px,360px)] gap-16 items-start mt-14 max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <div className="max-w-[620px]">
            <Fade>
              <p>
                MIT&rsquo;s 2025 GenAI research found that 95% of enterprise AI
                initiatives don&rsquo;t move the P&amp;L. The gap isn&rsquo;t
                the technology. It&rsquo;s everything around it
                {"\u200A—\u200A"}integration, workflow fit, adoption, and the
                time it takes to turn a promising prototype into software your
                team will actually use every day.
              </p>
            </Fade>
          </div>
          <div
            ref={statRef}
            style={{
              border: "1px solid rgba(236, 234, 227, 0.15)",
              borderRadius: "var(--r-lg)",
              padding: "28px",
              minWidth: "280px",
            }}
          >
            <div className="fig">MIT &middot; August 2025</div>
            <div className="type-stat-figure" style={{ margin: "12px 0" }}>{pct}<span className="unit">%</span></div>
            <p style={{ fontSize: "15px" }}>
              of enterprise AI pilots fail to move the P&amp;L.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-16 max-w-[620px]">
          {items.map(([n, h, b]) => (
            <Fade key={n} className="grid grid-cols-[48px_1fr] gap-6 items-baseline">
              <div className="font-mono text-sm tracking-[0.08em]" style={{ color: "rgba(255,255,255,0.4)" }}>{n}</div>
              <div>
                <div className="font-sans font-medium text-[17px] mb-1.5" style={{ color: "var(--color-offwhite)" }}>{h}</div>
                <p style={{ fontSize: "15px" }}>{b}</p>
              </div>
            </Fade>
          ))}
        </div>

        <Fade>
          <blockquote className="type-pullquote mt-16">
            <span className="open">&ldquo;</span>The gap isn&rsquo;t the model. It&rsquo;s the mile of work around it.<span className="open">&rdquo;</span>
            <cite>MIT &middot; State of AI in Business 2025</cite>
          </blockquote>
        </Fade>

        <Fade>
          <div
            ref={figRef}
            className="mt-16 mb-4"
            style={{
              background: "var(--color-surface-3)",
              border: "1px solid var(--color-rule-soft)",
              borderRadius: "var(--r-lg)",
              padding: "28px",
            }}
          >
            <div className="flex justify-between items-baseline pb-5" style={{ borderBottom: "1px solid var(--color-rule-soft)" }}>
              <span className="fig" style={{ color: "var(--color-ink-500)" }}>Fig. 01 &middot; Pilot → Production</span>
              <span className="fig" style={{ color: "var(--color-ink-500)" }}>MIT &middot; 2025</span>
            </div>
            <div className="grid grid-cols-2 items-end pt-10 pb-4" style={{ borderBottom: "1px solid var(--color-rule-soft)" }}>
              <div className="px-2">
                <div className="type-fig-pct" style={{ color: "var(--color-ink-900)" }}>{figPct}%</div>
                <div className="fig mt-4">Stall at pilot</div>
              </div>
              <div className="px-2 text-right">
                <div className="type-fig-pct" style={{ color: "var(--color-sage)" }}>{figSmall}%</div>
                <div className="fig mt-4">Cross over</div>
              </div>
            </div>
            <p className="type-small mt-4 max-w-[640px]">
              Two populations, one divide. The right side is where working software actually ships.
            </p>
          </div>
        </Fade>

        <div className="max-w-[620px]">
          <p className="type-closing mt-12">
            The companies crossing the divide do the opposite. They partner with
            a specialist, pick one painful workflow, and launch something real
            before expanding.
            <br /><br />
            That&rsquo;s where we come in.
          </p>
        </div>
      </div>
    </section>
  );
}
