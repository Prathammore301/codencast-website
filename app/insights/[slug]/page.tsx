import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightArticleView } from "@/components/insights/InsightArticleView";
import { PageShell } from "@/components/layout/PageShell";
import { getAllInsightSlugs, getInsightBySlug } from "@/content/insights";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getArticleJsonLd, getBreadcrumbJsonLd } from "@/lib/seo/json-ld";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) return createPageMetadata({ noIndex: true });

  return createPageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${slug}`,
  });
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) notFound();

  const breadcrumb = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: article.title, path: `/insights/${slug}` },
  ]);
  const articleLd = getArticleJsonLd(article);

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumb, articleLd]) }}
      />
      <InsightArticleView article={article} />
    </PageShell>
  );
}
