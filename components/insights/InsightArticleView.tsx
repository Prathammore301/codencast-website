import Link from "next/link";
import type { InsightArticle } from "@/types/content";
import { insightArticles } from "@/content/insights";
import { CTASection } from "@/components/layout/CTASection";
import { PageContent } from "@/components/layout/PageContent";
import { Reveal } from "@/components/motion/Reveal";

type InsightArticleViewProps = {
  article: InsightArticle;
};

function formatInsightDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function InsightArticleView({ article }: InsightArticleViewProps) {
  const related = insightArticles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <article className="cn-container cn-page-bottom-lg pb-0">
        <Reveal>
          <header className="cn-page-top-nav mx-auto max-w-[45rem]">
            <div className="flex flex-wrap gap-x-4 gap-y-2 cn-tech-label text-brand-muted-secondary">
              <span className="text-brand-accent">{article.category}</span>
              <time dateTime={article.publishedAt}>{formatInsightDate(article.publishedAt)}</time>
              <span>{article.readTimeMinutes} min read</span>
            </div>
            <h1 className="cn-display-md mt-6 text-brand-text lg:cn-display-lg lg:leading-[1.08]">
              {article.title}
            </h1>
            <div className="mt-8 space-y-4 border-l-2 border-brand-accent/35 pl-6 lg:pl-8">
              {article.introduction.map((p) => (
                <p key={p.slice(0, 40)} className="cn-body-lg text-brand-muted lg:text-[1.125rem] lg:leading-[1.75]">
                  {p}
                </p>
              ))}
            </div>
          </header>
        </Reveal>

        <PageContent width="reading" className="mt-14 lg:mt-16">
          {article.sections.map((section) => (
            <section
              key={section.heading ?? section.paragraphs[0]?.slice(0, 32)}
              className="mt-10 first:mt-0 lg:mt-12"
            >
              {section.heading ? (
                <h2 className="cn-heading-md text-brand-text lg:cn-heading-lg">{section.heading}</h2>
              ) : null}
              <div className={`space-y-4 ${section.heading ? "mt-5 lg:mt-6" : ""}`}>
                {section.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 48)}
                    className="cn-body-lg leading-[1.75] text-brand-muted lg:text-[1.0625rem]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </PageContent>

        {related.length > 0 ? (
          <aside className="mx-auto mt-16 max-w-[45rem] border-t border-brand-border/80 pt-10 lg:mt-20">
            <p className="cn-tech-label text-brand-accent-secondary">Related insights</p>
            <ul className="mt-6 divide-y divide-brand-border/80">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/insights/${item.slug}`}
                    className="group block py-5 cn-interactive"
                  >
                    <p className="cn-heading-sm text-brand-text group-hover:text-brand-accent">
                      {item.title}
                    </p>
                    <p className="mt-2 cn-body-md text-brand-muted">{item.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
      </article>
      <CTASection />
    </>
  );
}
