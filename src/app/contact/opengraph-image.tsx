import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "Start a conversation with Sugo AI";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    eyebrow: "Start a conversation",
    titleLines: [
      "If the work matters,",
      "the conversation is",
      "worth having.",
    ],
  });
}
