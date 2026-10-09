import { getAllInsightSlugs, getInsightBySlug } from "@/content/insights";
import { serviceSlugs } from "@/content/services";

export const staticRoutes = [
  "/",
  "/services",
  "/about",
  "/process",
  "/insights",
  "/contact",
  "/privacy",
] as const;

/** Indexable public paths only — excludes `/work` and unreleased case studies */
export function getAllSitePaths(): string[] {
  const servicePaths = serviceSlugs.map((slug) => `/services/${slug}`);
  const insightPaths = getAllInsightSlugs().map((slug) => `/insights/${slug}`);

  return [...staticRoutes, ...servicePaths, ...insightPaths];
}

export type SitemapEntry = {
  path: string;
  lastModified?: Date;
};

export function getSitemapEntries(): SitemapEntry[] {
  return getAllSitePaths().map((path) => {
    const insightMatch = path.match(/^\/insights\/(.+)$/);
    if (insightMatch) {
      const article = getInsightBySlug(insightMatch[1]);
      if (article?.publishedAt) {
        return { path, lastModified: new Date(article.publishedAt) };
      }
    }
    return { path };
  });
}
