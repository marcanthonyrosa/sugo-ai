import type { ReactNode } from "react";

interface SectionLabelProps {
  n: string;
  children: ReactNode;
}

export function SectionLabel({ n, children }: SectionLabelProps) {
  return (
    <>
      <p className="type-mono-label mb-3">
        {n} — {children}
      </p>
      <div className="h-0.5 w-14 bg-clay mb-8" aria-hidden="true" />
    </>
  );
}
