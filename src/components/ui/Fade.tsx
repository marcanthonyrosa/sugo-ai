"use client";

import { useRef, type ReactNode, type CSSProperties, type ElementType } from "react";
import { useInView } from "@/hooks/useInView";

interface FadeProps {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

export function Fade({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  style = {},
}: FadeProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.15);

  return (
    <Tag
      ref={ref}
      className={"fade-in " + (inView ? "in " : "") + className}
      style={{
        transitionDelay: inView ? `${delay}ms` : "0ms",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
