import type { MetadataRoute } from "next";
import { getAllSitePaths } from "@/lib/seo/routes";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return getAllSitePaths().map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/insights") ? 0.6 : 0.8,
  }));
}
