import type { MetadataRoute } from "next";
import { getSitemapEntries } from "@/lib/seo/routes";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapEntries().map(({ path, lastModified }) => {
    const entry: MetadataRoute.Sitemap[number] = {
      url: new URL(path, siteConfig.url).toString(),
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : path.startsWith("/insights") ? 0.6 : 0.8,
    };
    if (lastModified) {
      entry.lastModified = lastModified;
    }
    return entry;
  });
}
