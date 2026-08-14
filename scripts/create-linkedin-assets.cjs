// One-off LinkedIn asset generator (cover 4200x700 + logo 400x400).
// Deps (not in package.json): npm i --no-save playwright-core sharp
// Uses system Chrome via executablePath; fonts from src/assets/fonts.
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright-core");
const sharp = require("sharp");

const root = path.resolve(__dirname, "..");
const outputDir = path.join(root, "output", "linkedin");
const fontPath = path.join(
  root,
  "src",
  "assets",
  "fonts",
  "red-hat-display-latin.woff2",
);
const markPath = path.join(
  root,
  "public",
  "brand",
  "sugo-mark-simple-transparent.png",
);

const fontData = fs.readFileSync(fontPath).toString("base64");
const markData = fs.readFileSync(markPath).toString("base64");

const palette = {
  viola: "#e3d4ef",
  navy: "#101d3e",
};

function documentFor(body, width, height) {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      @font-face {
        font-family: "Red Hat Display";
        font-style: normal;
        font-weight: 500 700;
        font-display: block;
        src: url(data:font/woff2;base64,${fontData}) format("woff2");
      }
      * { box-sizing: border-box; }
      html, body {
        width: ${width}px;
        height: ${height}px;
        margin: 0;
        overflow: hidden;
        background: ${palette.viola};
      }
      body { position: relative; }
      ${body}
    </style>
  </head>
  <body></body>
</html>`;
}

const coverCss = `
  body::before,
  body::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${palette.navy};
  }
  body::before { left: 520px; }
  body::after { right: 520px; }

  .headline {
    position: absolute;
    left: 650px;
    top: 50%;
    width: 2620px;
    transform: translateY(-50%);
    color: ${palette.navy};
    font-family: "Red Hat Display", sans-serif;
    font-size: 112px;
    font-weight: 700;
    letter-spacing: -0.015em;
    line-height: 1.08;
    white-space: nowrap;
  }
  .headline span { display: block; }

  .tomato {
    position: absolute;
    left: 3250px;
    top: 50%;
    width: 300px;
    height: auto;
    transform: translateY(-50%);
    display: block;
  }
`;

const logoCss = `
  .tomato {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 300px;
    height: auto;
    transform: translate(-50%, -50%);
    display: block;
  }
`;

async function capture(page, html, width, height, targetPath) {
  await page.setViewportSize({ width, height });
  await page.setContent(html, { waitUntil: "load" });
  await page.evaluate(async () => {
    document.body.innerHTML = document.body.dataset.content || "";
    await document.fonts.ready;
    await Promise.all(
      [...document.images].map((image) =>
        image.complete
          ? Promise.resolve()
          : new Promise((resolve, reject) => {
              image.addEventListener("load", resolve, { once: true });
              image.addEventListener("error", reject, { once: true });
            }),
      ),
    );
  });
  await page.screenshot({ path: targetPath, type: "png" });
}

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });

  const browser = await chromium.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const page = await browser.newPage({ deviceScaleFactor: 1 });

  const markSrc = `data:image/png;base64,${markData}`;
  const coverHtml = documentFor(coverCss, 4200, 700).replace(
    "<body></body>",
    `<body data-content='&lt;div class="headline"&gt;&lt;span&gt;Modern product development&lt;/span&gt;&lt;span&gt;for companies that aren’t software companies.&lt;/span&gt;&lt;/div&gt;&lt;img class="tomato" src="${markSrc}" alt=""&gt;'></body>`,
  );
  const logoHtml = documentFor(logoCss, 400, 400).replace(
    "<body></body>",
    `<body data-content='&lt;img class="tomato" src="${markSrc}" alt=""&gt;'></body>`,
  );

  const coverRaw = path.join(outputDir, "sugo-linkedin-cover-4200x700.raw.png");
  const logoRaw = path.join(outputDir, "sugo-linkedin-logo-400x400.raw.png");
  const coverFinal = path.join(outputDir, "sugo-linkedin-cover-4200x700.png");
  const logoFinal = path.join(outputDir, "sugo-linkedin-logo-400x400.png");

  await capture(page, coverHtml, 4200, 700, coverRaw);
  await capture(page, logoHtml, 400, 400, logoRaw);
  await browser.close();

  await sharp(coverRaw).png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(coverFinal);
  await sharp(logoRaw).png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(logoFinal);
  fs.unlinkSync(coverRaw);
  fs.unlinkSync(logoRaw);

  console.log(coverFinal);
  console.log(logoFinal);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
