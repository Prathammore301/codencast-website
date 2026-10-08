import Link from "next/link";
import type { InsightArticle } from "@/types/content";

type InsightCardProps = {
  article: Pick<
    InsightArticle,
    "slug" | "category" | "title" | "excerpt" | "readTimeMinutes" | "publishedAt"
  >;
};

function formatInsightDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function InsightCard({ article }: InsightCardProps) {
  return (
    <article className="group relative border-t border-brand-border/80 py-10 lg:py-12">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 cn-tech-label text-brand-muted-secondary">
        <span className="text-brand-accent">{article.category}</span>
        <span>{formatInsightDate(article.publishedAt)}</span>
        <span>{article.readTimeMinutes} min read</span>
      </div>
      <h2 className="cn-heading-lg mt-5 text-brand-text transition-colors group-hover:text-brand-accent">
        <Link href={`/insights/${article.slug}`} className="cn-interactive after:absolute after:inset-0">
          {article.title}
        </Link>
      </h2>
      <p className="mt-4 max-w-2xl cn-body-lg text-brand-muted">{article.excerpt}</p>
      <Link
        href={`/insights/${article.slug}`}
        className="relative z-10 mt-6 inline-flex min-h-11 items-center cn-body-sm text-brand-text cn-interactive hover:text-brand-accent"
      >
        Read insight →
      </Link>
    </article>
  );
}
