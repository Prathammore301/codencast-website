import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const defaultOgImagePath = "/brand/codencast-logo.png";

export function createPageMetadata(options?: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const title = options?.title
    ? `${options.title} | ${siteConfig.brandName}`
    : siteConfig.brandName;
  const description = options?.description ?? siteConfig.description;
  const canonicalPath = options?.path ?? "/";
  const canonicalUrl = new URL(canonicalPath, siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale.replace("_", "-"),
      url: canonicalUrl,
      siteName: siteConfig.brandName,
      title,
      description,
      images: [
        {
          url: defaultOgImagePath,
          alt: `${siteConfig.brandName} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImagePath],
    },
    robots: options?.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
