import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = {
  width: 1200,
  height: 630,
};

type OgImageOptions = {
  eyebrow: string;
  titleLines: string[];
};

const palette = {
  viola: "#e3d4ef",
  navy: "#101d3e",
  muted: "#4c586f",
  rule: "#b296d2",
};

export async function createOgImage({
  eyebrow,
  titleLines,
}: OgImageOptions) {
  const [displayFont, monoFont, mark] = await Promise.all([
    readFile(
      path.join(
        process.cwd(),
        "src/assets/fonts/red-hat-display.ttf",
      ),
    ),
    readFile(
      path.join(process.cwd(), "src/assets/fonts/jetbrains-mono.ttf"),
    ),
    readFile(
      path.join(
        process.cwd(),
        "public/brand/sugo-mark-simple-transparent.png",
      ),
    ),
  ]);

  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;
  const titleSize = titleLines.length >= 3 ? 66 : 76;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: palette.viola,
          color: palette.navy,
          padding: "62px 74px 56px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 42,
            width: 2,
            background: palette.navy,
            opacity: 0.55,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 42,
            width: 2,
            background: palette.navy,
            opacity: 0.55,
          }}
        />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "JetBrains Mono",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: palette.muted,
            }}
          >
            {eyebrow}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 825,
              fontFamily: "Red Hat Display",
              fontSize: titleSize,
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
            }}
          >
            {titleLines.map((line) => (
              <div key={line} style={{ display: "flex" }}>
                {line}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontFamily: "JetBrains Mono",
              fontSize: 15,
              color: palette.muted,
              letterSpacing: "0.025em",
            }}
          >
            <span>INTERNAL TOOLS</span>
            <span style={{ color: palette.rule }}>•</span>
            <span>AI AGENTS</span>
            <span style={{ color: palette.rule }}>•</span>
            <span>CUSTOMER PRODUCTS</span>
          </div>
        </div>

        {/* next/image is not supported inside ImageResponse. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={markSrc}
          alt=""
          width="230"
          height="246"
          style={{
            position: "absolute",
            right: 88,
            top: 192,
            width: 230,
            height: 246,
            objectFit: "contain",
          }}
        />
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        {
          name: "Red Hat Display",
          data: displayFont,
          weight: 700,
          style: "normal",
        },
        {
          name: "JetBrains Mono",
          data: monoFont,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
