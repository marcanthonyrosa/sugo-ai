import type { Metadata } from "next";

export const SITE_NAME = "Sugo AI";
export const SITE_URL = new URL("https://sugoai.com");
export const SITE_EMAIL = "marc@sugoai.com";
export const LEGAL_NAME = "Sugo Product Company LLC";

export const DEFAULT_TITLE =
  "AI Product Development for Traditional Businesses | Sugo AI";
export const DEFAULT_DESCRIPTION =
  "Sugo AI builds internal tools, AI agents, and customer products for traditional businesses—from product discovery through production rollout.";

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  socialTitle?: string;
  noIndex?: boolean;
  type?: "website" | "article";
};

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  socialTitle = title,
  noIndex = false,
  type = "website",
}: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: path === "/" ? { absolute: fullTitle } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      locale: "en_US",
      url: path,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
        }
      : {
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
}

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL.origin}/#organization`,
      name: SITE_NAME,
      alternateName: LEGAL_NAME,
      legalName: LEGAL_NAME,
      url: SITE_URL.origin,
      email: `mailto:${SITE_EMAIL}`,
      description: DEFAULT_DESCRIPTION,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/icon.png"),
        width: 512,
        height: 512,
      },
      founder: {
        "@type": "Person",
        name: "Marc Rosa",
        jobTitle: "Founder",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL.origin}/#website`,
      url: SITE_URL.origin,
      name: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      publisher: {
        "@id": `${SITE_URL.origin}/#organization`,
      },
      inLanguage: "en-US",
    },
  ],
} as const;
