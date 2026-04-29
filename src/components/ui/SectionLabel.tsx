import type { ReactNode } from "react";

interface SectionLabelProps {
  n: string;
  children: ReactNode;
}

export function SectionLabel({ n, children }: SectionLabelProps) {
  return (
    <>
      <div className="section-no mb-2">§ {n}</div>
      <div className="eyebrow mb-6">{children}</div>
    </>
  );
}
