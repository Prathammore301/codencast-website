export const siteConfig = {
  legalName: "CODE N CAST PVT LTD",
  brandName: "CodeNCast",
  tagline: "Building solutions, empowering futures.",
  description:
    "CodeNCast delivers end-to-end digital solutions — software, web, mobile, e-commerce, SEO, and design for ambitious businesses.",
  locale: "en_IN",
  /**
   * Set NEXT_PUBLIC_SITE_URL in deployment (e.g. https://codencast.com).
   * Falls back to localhost during development.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000",
} as const;

export type SiteConfig = typeof siteConfig;
