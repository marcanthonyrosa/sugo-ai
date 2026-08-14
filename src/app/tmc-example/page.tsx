import type { Metadata } from "next";
import { TmcExampleClient } from "./tmc-example-client";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "TMC Intelligence — Pre-Interview Product Discovery",
  description:
    "A solo product exploration from discovery through architecture — four product opportunities surfaced from a CEO interview, with a deep dive into portfolio intelligence for the Texas Medical Center.",
  path: "/tmc-example",
  noIndex: true,
});

export default function TmcExamplePage() {
  return <TmcExampleClient />;
}
