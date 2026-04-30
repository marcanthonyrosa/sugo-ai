"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

export function StatCallout() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, 0.3);
  const pct = useCountUp(95, 1300, inView);

  return (
    <section className="py-4 max-[767px]:py-3">
      <div className="max-w-[1180px] mx-auto px-8 max-[1024px]:px-6">
        <div
          ref={ref}
          style={{
            background: "linear-gradient(135deg, var(--color-viola-50) 0%, #F9F3FC 50%, var(--color-surface-1) 100%)",
            borderRadius: "var(--r-xl)",
            border: "1px solid rgba(181, 154, 212, 0.2)",
            padding: "38px",
          }}
          className="max-[767px]:p-7"
        >
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-8 items-center max-[900px]:grid-cols-1">
            <div className="flex items-end gap-6 flex-wrap">
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(72px, 12vw, 128px)",
                  lineHeight: "0.9",
                  color: "var(--color-viola-900)",
                  letterSpacing: "-0.03em",
                  whiteSpace: "nowrap",
                  minWidth: "2.2ch",
                  fontVariantNumeric: "tabular-nums",
                  display: "inline-block",
                }}
              >
                {pct}
                <span
                  style={{
                    fontSize: "0.45em",
                    fontStyle: "italic",
                    fontWeight: 300,
                    color: "var(--color-viola-500)",
                    marginLeft: "6px",
                  }}
                >
                  %
                </span>
              </div>
            </div>

            <div style={{ maxWidth: "48ch" }}>
              <p style={{ color: "var(--color-viola-900)", opacity: 0.92, fontSize: "17px", margin: 0, lineHeight: 1.55 }}>
                of enterprise AI pilots fail to move the P&amp;L. Weak workflow
                fit, shallow integration, and no owner for the last mile to
                launch. Sugo starts with one painful workflow or one promising
                feature &mdash; and ships something measurable.
              </p>
              <div className="fig mt-3" style={{ color: "var(--color-viola-900)", opacity: 0.55 }}>
                MIT &middot; State of AI in Business &middot; Aug 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
