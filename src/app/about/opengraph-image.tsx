import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt =
  "Sugo AI is a product studio for traditional businesses building serious software";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    eyebrow: "About Sugo AI",
    titleLines: [
      "A product studio for",
      "traditional businesses",
      "building serious software.",
    ],
  });
}
