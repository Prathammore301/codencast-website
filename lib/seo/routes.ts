import { getAllInsightSlugs } from "@/content/insights";
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

export function getAllSitePaths(): string[] {
  const servicePaths = serviceSlugs.map((slug) => `/services/${slug}`);
  const insightPaths = getAllInsightSlugs().map((slug) => `/insights/${slug}`);

  return [...staticRoutes, ...servicePaths, ...insightPaths];
}
