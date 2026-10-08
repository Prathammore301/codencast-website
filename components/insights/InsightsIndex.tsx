import Link from "next/link";
import type { InsightArticle } from "@/types/content";
import { InsightCard } from "@/components/insights/InsightCard";
import { Reveal } from "@/components/motion/Reveal";

type InsightsIndexProps = {
  featured: InsightArticle;
  articles: InsightArticle[];
  categories: readonly string[];
};

function formatInsightDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function InsightsIndex({ featured, articles, categories }: InsightsIndexProps) {
  const rest = articles.filter((a) => a.slug !== featured.slug);

  return (
    <div className="mt-10 lg:mt-14">
      <Reveal>
        <article className="relative grid gap-8 overflow-hidden border border-brand-border/80 bg-brand-surface/20 p-6 cn-bg-grid-teal lg:grid-cols-12 lg:gap-10 lg:p-10 xl:p-12">
          <div className="lg:col-span-7">
            <p className="cn-tech-label text-brand-accent">Featured insight</p>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 cn-tech-label text-brand-muted-secondary">
              <span>{featured.category}</span>
              <time dateTime={featured.publishedAt}>{formatInsightDate(featured.publishedAt)}</time>
              <span>{featured.readTimeMinutes} min read</span>
            </div>
            <h2 className="cn-display-md mt-6 text-brand-text lg:cn-heading-xl">
              <Link
                href={`/insights/${featured.slug}`}
                className="cn-interactive hover:text-brand-accent after:absolute after:inset-0"
              >
                {featured.title}
              </Link>
            </h2>
            <p className="mt-5 max-w-xl cn-body-lg text-brand-muted">{featured.excerpt}</p>
            <Link
              href={`/insights/${featured.slug}`}
              className="relative z-10 mt-8 inline-flex min-h-11 items-center cn-body-sm text-brand-text cn-interactive hover:text-brand-accent"
            >
              Read featured →
            </Link>
          </div>
          <div className="flex flex-col justify-end lg:col-span-5">
            <p className="cn-tech-label text-brand-muted">Topics we write about</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className="border border-brand-border/70 px-3 py-1.5 cn-caption text-brand-muted"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Reveal>

      <div className="mt-16 lg:mt-20">
        <p className="cn-tech-label text-brand-muted">Recent insights</p>
        <div className="mx-auto mt-4 max-w-3xl lg:max-w-none xl:max-w-4xl">
          {rest.map((article) => (
            <InsightCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
