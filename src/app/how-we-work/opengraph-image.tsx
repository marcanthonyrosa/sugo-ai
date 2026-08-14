import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt =
  "How Sugo AI works from discovery through production rollout";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    eyebrow: "How we work",
    titleLines: [
      "We run like",
      "a software company.",
      "That’s where we come from.",
    ],
  });
}
