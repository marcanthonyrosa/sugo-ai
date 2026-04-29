"use client";

import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

export function ProofChapter() {
  const s1Ref = useRef<HTMLDivElement>(null);
  const s1In = useInView(s1Ref, 0.4);
  const p67 = useCountUp(67, 900, s1In);

  const dots = [];
  for (let i = 0; i < 100; i++) {
    dots.push(
      <div
        key={i}
        className="transition-[background] duration-300"
        style={{
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          border: "1px solid rgba(236, 234, 227, 0.5)",
          background: s1In && i < 67 ? "var(--color-offwhite)" : "transparent",
          transitionDelay: `${i * 8}ms`,
        }}
      />,
    );
  }

  return (
    <section className="canvas-ink py-24 max-[767px]:py-16 w-full" style={{ borderRadius: 0 }}>
      <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6 relative">
        <SectionLabel n="06">The Evidence</SectionLabel>
        <blockquote className="type-pullquote mt-4" style={{ maxWidth: "48ch" }}>
          <span className="open">&ldquo;</span>Companies that buy AI from specialists and build
          partnerships succeed about two-thirds of the time. Internal builds
          succeed one-third as often.<span className="open">&rdquo;</span>
          <cite>MIT &middot; State of AI in Business 2025</cite>
        </blockquote>

        <div className="mt-14 grid grid-cols-[auto_1fr] gap-12 items-start max-[900px]:grid-cols-1 max-[900px]:gap-8" ref={s1Ref}>
          <div
            className="grid gap-2"
            style={{ gridTemplateColumns: "repeat(10, 18px)", gridTemplateRows: "repeat(10, 18px)" }}
            aria-label="67 of 100 dots filled, representing partnership success rate"
            role="img"
          >
            {dots}
          </div>
          <div className="flex flex-col gap-6 pl-6 pt-2 max-[900px]:pl-0 max-[900px]:pt-4" style={{ borderLeft: "1px solid rgba(236, 234, 227, 0.2)" }}>
            <div className="flex flex-col gap-2">
              <div className="type-stat-figure" style={{ fontSize: "clamp(48px, 8vw, 72px)" }}>{p67}<span className="unit">%</span></div>
              <div className="dot-legend-lab">Partnership success</div>
            </div>
            <div className="flex items-baseline gap-4">
              <div style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "40px", lineHeight: 1, color: "var(--color-offwhite)" }}>⅓</div>
              <div className="dot-legend-lab">Internal-build success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
