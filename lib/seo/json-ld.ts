import type { InsightArticle } from "@/types/content";
import { siteConfig } from "@/lib/site";

export function getHomeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.brandName,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        description: siteConfig.description,
        slogan: siteConfig.tagline,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.brandName,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: siteConfig.locale.replace("_", "-"),
      },
    ],
  };
}

export function getBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

export function getServiceJsonLd(options: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    provider: { "@id": `${siteConfig.url}/#organization` },
    url: new URL(options.path, siteConfig.url).toString(),
  };
}

export function getArticleJsonLd(article: InsightArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.brandName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brandName,
      url: siteConfig.url,
    },
    mainEntityOfPage: new URL(`/insights/${article.slug}`, siteConfig.url).toString(),
  };
}
