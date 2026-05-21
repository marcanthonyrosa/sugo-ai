import type { ReactNode } from "react";

interface SectionLabelProps {
  n: string;
  children: ReactNode;
}

export function SectionLabel({ n, children }: SectionLabelProps) {
  return (
    <div className="eyebrow mb-6">
      <span className="eyebrow__num">{n}</span>
      <span>{children}</span>
    </div>
  );
}
