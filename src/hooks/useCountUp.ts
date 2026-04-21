"use client";

import { useState, useEffect } from "react";

export function useCountUp(
  target: number,
  durationMs = 900,
  trigger: boolean,
): number {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setVal(target);
      return;
    }

    let raf: number;
    let start: number | undefined;

    const tick = (ts: number) => {
      if (start === undefined) start = ts;
      const t = Math.min(1, (ts - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, trigger]);

  return val;
}
