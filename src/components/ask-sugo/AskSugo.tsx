"use client";

import { AskSugoChat } from "./AskSugoChat";
import { AskSugoPaper } from "./AskSugoPaper";

interface AskSugoProps {
  variant: "chat" | "paper";
  openCal?: () => void;
}

export function AskSugo({ variant, openCal }: AskSugoProps) {
  if (variant === "chat") return <AskSugoChat openCal={openCal} />;
  return <AskSugoPaper />;
}
