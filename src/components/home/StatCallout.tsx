"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

export function StatCallout() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, 0.3);
  const pct = useCountUp(95, 900, inView);

  return (
    <section className="py-6 max-[767px]:py-4">
      <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6">
        <div
          ref={ref}
          style={{
            background: "linear-gradient(135deg, var(--color-viola-50) 0%, #F9F3FC 50%, var(--color-surface-1) 100%)",
            borderRadius: "var(--r-xl)",
            border: "1px solid rgba(181, 154, 212, 0.2)",
            padding: "48px",
          }}
          className="max-[767px]:p-7"
        >
          <div className="flex items-baseline gap-10 flex-wrap max-[767px]:gap-6">
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(72px, 12vw, 128px)",
                lineHeight: "0.9",
                color: "var(--color-viola-900)",
                letterSpacing: "-0.03em",
              }}
            >
              {pct}<span
                style={{
                  fontSize: "0.45em",
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "var(--color-viola-500)",
                  marginLeft: "6px",
                }}
              >%</span>
            </div>
            <div style={{ flex: 1, minWidth: "200px", maxWidth: "32ch" }}>
              <p style={{ color: "var(--color-viola-900)", opacity: 0.9, fontSize: "17px", margin: 0, lineHeight: 1.5 }}>
                of enterprise AI pilots fail to move the P&amp;L.
              </p>
              <div className="fig mt-3" style={{ color: "var(--color-viola-900)", opacity: 0.5 }}>
                MIT &middot; State of AI in Business &middot; Aug 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
