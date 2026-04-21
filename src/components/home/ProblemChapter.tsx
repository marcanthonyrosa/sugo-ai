"use client";

import { useRef, useEffect } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Fade } from "@/components/ui/Fade";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { useNavColor } from "@/contexts/NavColorContext";

export function ProblemChapter() {
  const { setNavColor } = useNavColor();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.15);
  const statRef = useRef<HTMLDivElement>(null);
  const statInView = useInView(statRef, 0.35);
  const pct = useCountUp(95, 900, statInView);
  const figRef = useRef<HTMLDivElement>(null);
  const figIn = useInView(figRef, 0.3);
  const figPct = useCountUp(95, 900, figIn);
  const figSmall = useCountUp(5, 900, figIn);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && e.intersectionRatio > 0.3) setNavColor("clay");
        else setNavColor((c) => (c === "clay" ? "paper" : c));
      },
      { threshold: [0, 0.3, 0.6] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [setNavColor]);

  const items: [string, string, string][] = [
    ["01", "Generic tools, shallow fit.", "ChatGPT is brilliant for individuals. In the enterprise, it doesn\u2019t learn your workflows, so usage stays optional and ROI stays invisible."],
    ["02", "Build-it-yourself bias.", "Companies that try to build AI internally succeed roughly a third as often as companies that bring in a specialist partner. Most still try to go it alone."],
    ["03", "Budget in the wrong place.", "Over half of AI spend goes to sales and marketing tools. The highest-ROI work\u200A—\u200Aquietly, repeatedly\u200A—\u200Ais in back-office automation."],
  ];

  return (
    <section ref={ref} className="chapter-clay py-[100px] max-[767px]:py-[56px] w-full relative">
      {/* Gutter annotations */}
      <div className="absolute right-10 top-[140px] w-[180px] flex flex-col gap-6 z-2 max-[1199px]:hidden" aria-hidden="true">
        <div className="gutter-anno">MIT Sloan<br />Aug 2025 · Tbl. 4.2</div>
        <div className="gutter-anno">⅓ internal<br />⅔ partnered</div>
        <div className="gutter-anno">50%+ spend<br />→ Sales &amp; Mkt</div>
      </div>

      <div className="max-w-[1320px] mx-auto px-8 max-[1199px]:px-10 max-[767px]:px-6 relative">
        <div className="max-w-[680px] ml-40 max-[1199px]:max-w-[580px] max-[1199px]:ml-20 max-[767px]:max-w-full max-[767px]:ml-0">
          <SectionLabel n="02">The Problem</SectionLabel>
          <h2 className="type-h2" style={{ opacity: inView ? 1 : 0.4, transition: "opacity 400ms" }}>
            Most enterprise AI<br />never leaves the pilot stage.
          </h2>
        </div>

        {/* Problem grid */}
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(280px,360px)] gap-20 items-start mt-[72px] max-[1023px]:grid-cols-1 max-[1023px]:gap-12">
          <div className="max-w-[680px]">
            <Fade>
              <p className="type-body">
                MIT&rsquo;s 2025 GenAI research found that 95% of enterprise AI
                initiatives don&rsquo;t move the P&amp;L. The gap isn&rsquo;t
                the technology. It&rsquo;s everything around it
                {"\u200A—\u200A"}integration, workflow fit, adoption, and the
                time it takes to turn a promising prototype into software your
                team will actually use every day.
              </p>
            </Fade>
          </div>
          <div ref={statRef} className="border border-paper-40 p-8 min-w-[280px]">
            <p className="type-mono-label">MIT · August 2025</p>
            <div className="type-stat-figure text-paper">{pct}%</div>
            <p className="font-serif italic text-xl leading-[1.3] text-paper-80">
              of enterprise AI pilots fail to move the P&amp;L.
            </p>
          </div>
        </div>

        {/* Numbered list + pullout side-by-side */}
        <div className="grid grid-cols-[1fr_minmax(0,400px)] gap-20 mt-24 items-start max-[1023px]:grid-cols-1 max-[1023px]:gap-12">
          <div className="flex flex-col gap-10">
            {items.map(([n, h, b]) => (
              <Fade key={n} className="grid grid-cols-[48px_1fr] gap-6 items-baseline">
                <div className="font-mono text-sm tracking-[0.08em] text-paper pt-1">{n}</div>
                <div>
                  <div className="font-sans font-medium text-[19px] text-paper mb-1.5">{h}</div>
                  <p className="type-body text-paper">{b}</p>
                </div>
              </Fade>
            ))}
          </div>

          <div className="pt-2 max-[1023px]:pt-0">
            <p className="type-pullout !ml-0 !max-w-none">
              &ldquo;The gap isn&rsquo;t the model. It&rsquo;s the mile of work around it.&rdquo;
            </p>
          </div>
        </div>

        {/* Fig 01 */}
        <div ref={figRef} className="bg-paper text-ink border border-paper/25 px-14 py-12 mt-24 mb-6 max-[767px]:p-7">
          <div className="flex justify-between items-baseline pb-6 border-b border-rule">
            <span className="type-mono-label tracking-[0.12em]">Fig. 01 · Pilot → Production</span>
            <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-stone">MIT · 2025</span>
          </div>
          <div className="grid grid-cols-2 items-end pt-12 pb-4 border-b border-stone">
            <div className="px-2">
              <div className="type-fig-pct text-ink">{figPct}%</div>
              <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-stone mt-4">Stall at pilot</div>
            </div>
            <div className="px-2 text-right">
              <div className="type-fig-pct text-clay">{figSmall}%</div>
              <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-stone mt-4">Cross over</div>
            </div>
          </div>
          <p className="font-sans text-sm leading-[1.5] text-ink-80 mt-5 max-w-[640px]">
            Two populations, one divide. The right side is where working software actually ships.
          </p>
        </div>

        <div className="max-w-[680px] ml-40 max-[1199px]:max-w-[580px] max-[1199px]:ml-20 max-[767px]:max-w-full max-[767px]:ml-0">
          <p className="type-closing mt-16 text-paper max-w-[680px]">
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
