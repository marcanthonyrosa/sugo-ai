"use client";

import { useSearchParams } from "next/navigation";
import { AskSugo } from "@/components/ask-sugo/AskSugo";

export function AskPageClient() {
  const searchParams = useSearchParams();
  const variant =
    searchParams.get("variant") === "paper" ? "paper" : "chat";

  return <AskSugo variant={variant} />;
}
