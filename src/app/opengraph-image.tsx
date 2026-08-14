import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt =
  "Sugo AI — modern product development for companies that aren’t software companies";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    eyebrow: "Sugo AI",
    titleLines: [
      "Modern product development",
      "for companies that aren’t",
      "software companies.",
    ],
  });
}
