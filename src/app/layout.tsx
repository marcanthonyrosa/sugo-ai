import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Nav } from "@/components/layout/Nav";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";
import "./globals.css";
import "./site.css";

const redHat = localFont({
  src: "../assets/fonts/red-hat-display-latin.woff2",
  variable: "--font-redhat",
  weight: "500 700",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "../assets/fonts/jetbrains-mono-latin.woff2",
  variable: "--font-jb-mono",
  weight: "400 700",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Marc Rosa", url: "/about" }],
  creator: "Marc Rosa",
  publisher: LEGAL_NAME,
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title:
      "Modern product development for companies that aren’t software companies.",
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Modern product development for companies that aren’t software companies.",
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#e3d4ef",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${redHat.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Nav />
        {children}
      </body>
    </html>
  );
}
