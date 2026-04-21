"use client";

import { useRef, useEffect } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { useNavColor } from "@/contexts/NavColorContext";

export function ProofChapter() {
  const { setNavColor } = useNavColor();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.15);
  const s1Ref = useRef<HTMLDivElement>(null);
  const s1In = useInView(s1Ref, 0.4);
  const p67 = useCountUp(67, 900, s1In);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && e.intersectionRatio > 0.3) setNavColor("moss");
        else setNavColor((c) => (c === "moss" ? "paper" : c));
      },
      { threshold: [0, 0.3, 0.6] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [setNavColor]);

  const dots = [];
  for (let i = 0; i < 100; i++) {
    dots.push(
      <div
        key={i}
        className={`w-[18px] h-[18px] rounded-full border border-paper bg-transparent transition-[background] duration-300 ${s1In && i < 67 ? "!bg-paper" : ""}`}
        style={{ transitionDelay: `${i * 8}ms` }}
      />,
    );
  }

  return (
    <section ref={ref} className="chapter-moss py-40 max-[767px]:py-24 w-full">
      <div className="max-w-[1320px] mx-auto px-8 max-[1199px]:px-10 max-[767px]:px-6 relative">
        <div>
          <SectionLabel n="07">The 5% Side</SectionLabel>
        </div>
        <p className="type-proof-quote" style={{ opacity: inView ? 1 : 0.4, transition: "opacity 400ms" }}>
          &ldquo;Companies that buy AI from specialists and build partnerships
          succeed about two-thirds of the time. Internal builds succeed
          one-third as often.&rdquo;
        </p>
        <p className="proof-attrib-mark type-mono-meta tracking-[0.08em] uppercase text-paper-70 mt-16">
          MIT · State of AI in Business 2025
        </p>

        {/* Dot grid */}
        <div className="mt-[72px] grid grid-cols-[auto_1fr] gap-16 items-start max-[1023px]:grid-cols-1 max-[1023px]:gap-8" ref={s1Ref}>
          <div
            className="grid gap-2"
            style={{ gridTemplateColumns: "repeat(10, 18px)", gridTemplateRows: "repeat(10, 18px)" }}
            aria-label="67 of 100 dots filled, representing partnership success rate"
            role="img"
          >
            {dots}
          </div>
          <div className="flex flex-col gap-7 border-l border-paper/40 pl-8 pt-2 max-[1023px]:border-l-0 max-[1023px]:pl-0 max-[1023px]:border-t max-[1023px]:border-paper/40 max-[1023px]:pt-6">
            <div className="flex flex-col gap-2">
              <div className="type-dot-big text-paper">{p67}%</div>
              <div className="dot-legend-lab">Partnership success</div>
            </div>
            <div className="flex items-baseline gap-4">
              <div className="type-dot-frac text-paper">⅓</div>
              <div className="dot-legend-lab">Internal-build success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
