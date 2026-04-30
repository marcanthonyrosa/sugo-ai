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
          <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-8 items-start max-[900px]:grid-cols-1">
            <div className="grid gap-4">
              <div className="eyebrow" style={{ color: "var(--color-viola-900)" }}>
                Why this matters
              </div>
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
                <div style={{ maxWidth: "34ch", paddingBottom: "10px" }}>
                  <p style={{ color: "var(--color-viola-900)", opacity: 0.92, fontSize: "17px", margin: 0, lineHeight: 1.5 }}>
                    of enterprise AI pilots fail to move the P&amp;L, which is
                    why a small consultancy has to show how it gets from promise
                    to production.
                  </p>
                  <div className="fig mt-3" style={{ color: "var(--color-viola-900)", opacity: 0.55 }}>
                    MIT &middot; State of AI in Business &middot; Aug 2025
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                ["What stalls teams", "Weak workflow fit, shallow integration, and no owner for the last mile to launch."],
                ["Where Sugo starts", "One painful workflow or one promising product feature with measurable upside."],
                ["What good looks like", "A shipped build, clear success metrics, and a team that knows how to extend it."],
              ].map(([title, copy]) => (
                <div
                  key={title}
                  className="card"
                  style={{
                    padding: "16px 18px",
                    background: "rgba(255,255,255,0.45)",
                    borderColor: "rgba(181,154,212,0.18)",
                    display: "grid",
                    gap: "6px",
                  }}
                >
                  <div className="fig" style={{ color: "var(--color-viola-900)" }}>{title}</div>
                  <p style={{ color: "var(--color-viola-900)", opacity: 0.8, fontSize: "14px", lineHeight: 1.45 }}>
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
