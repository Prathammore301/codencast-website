import type { NextConfig } from "next";

if (
  process.env.NODE_ENV === "production" &&
  !process.env.NEXT_PUBLIC_SITE_URL?.trim()
) {
  console.warn(
    "[CodeNCast] NEXT_PUBLIC_SITE_URL is not set. Rebuild with your production origin (e.g. https://your-domain.com) so canonical URLs, sitemap.xml, robots.txt, Open Graph, and JSON-LD are not emitted with http://localhost:3000.",
  );
}

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/e-commerce",
        destination: "/services/ecommerce",
        permanent: true,
      },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
