import Link from "next/link";
import type { WorkCaseStudy } from "@/types/content";
import { CTASection } from "@/components/layout/CTASection";
import { PageContent } from "@/components/layout/PageContent";
import { EditorialList } from "@/components/ui/EditorialList";
import { ProductMockup } from "@/components/work/ProductMockup";
import { Reveal } from "@/components/motion/Reveal";
import { getCaseStudyTheme } from "@/lib/work/case-study-theme";
import { workCaseStudies } from "@/content/work";

type CaseStudyViewProps = {
  project: WorkCaseStudy;
};

function ContentBlock({
  title,
  body,
  list,
}: {
  title: string;
  body: string[];
  list?: string[];
}) {
  return (
    <div className="border-t border-brand-border/80 pt-10 lg:pt-12">
      <h2 className="cn-heading-lg text-brand-text">{title}</h2>
      <div className="mt-5 space-y-4">
        {body.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="cn-body-lg text-brand-muted">
            {paragraph}
          </p>
        ))}
      </div>
      {list?.length ? (
        <div className="mt-6">
          <EditorialList items={list} />
        </div>
      ) : null}
    </div>
  );
}

export function CaseStudyView({ project }: CaseStudyViewProps) {
  const theme = getCaseStudyTheme(project);
  const related = workCaseStudies.filter((p) => p.slug !== project.slug).slice(0, 2);

  const heroVisual = (
    <div
      className={`overflow-hidden border shadow-cn-lg ${theme.accentBorder} ${theme.heroLayout === "split" ? "lg:min-h-[420px]" : ""}`}
    >
      <ProductMockup variant={project.mockup} size="feature" />
    </div>
  );

  return (
    <>
      <article>
        <div className={`relative cn-container cn-page-bottom-lg pb-0 ${theme.heroGlow}`}>
          <Reveal>
            <header className="cn-page-top-nav grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12 xl:gap-16">
              <div
                className={
                  theme.heroLayout === "split"
                    ? "lg:col-span-5 lg:order-2"
                    : "lg:col-span-6 xl:col-span-5"
                }
              >
                <p className="cn-tech-label text-brand-accent-secondary">{theme.conceptBadge}</p>
                <p className="mt-4 font-mono text-sm tracking-[0.2em] text-brand-muted-secondary">
                  {project.index}
                </p>
                <p className="mt-4 cn-tech-label text-brand-muted">{project.industry}</p>
                <h1 className="cn-display-md mt-4 text-brand-text lg:cn-display-lg xl:max-w-[14ch]">
                  {project.name}
                </h1>
                <p className="mt-6 cn-heading-sm font-normal leading-relaxed text-brand-muted lg:text-xl lg:leading-[1.45]">
                  {project.title}
                </p>
                <p className="mt-4 max-w-xl cn-body-lg text-brand-muted">{project.heroSupporting}</p>
              </div>

              {theme.heroLayout === "split" ? (
                <div className="lg:col-span-7 lg:order-1">{heroVisual}</div>
              ) : null}
              {theme.heroLayout === "stacked" ? (
                <div className="lg:col-span-12">{heroVisual}</div>
              ) : null}
            </header>
          </Reveal>

          {theme.heroLayout === "visual-first" ? (
            <Reveal delay={0.05} y={24}>
              <div className="mt-10 lg:mt-14 xl:mt-16">{heroVisual}</div>
            </Reveal>
          ) : null}

          <PageContent width="reading" className="mt-16 lg:mt-20">
            <Reveal>
              <section aria-labelledby="overview-heading">
                <h2 id="overview-heading" className="cn-heading-lg text-brand-text">
                  Product architecture concept
                </h2>
                <div className="mt-5 space-y-4">
                  {project.overview.map((p) => (
                    <p key={p.slice(0, 40)} className="cn-body-lg text-brand-muted">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.04}>
              <ContentBlock
                title={project.challenge.title}
                body={project.challenge.body}
                list={project.challenge.list}
              />
            </Reveal>
            <Reveal delay={0.06}>
              <ContentBlock
                title={project.approach.title}
                body={project.approach.body}
                list={project.approach.list}
              />
            </Reveal>
          </PageContent>
        </div>

        <section className={`cn-section-y-lg ${theme.experienceBg}`}>
          <div className="cn-container">
            <Reveal>
              <h2 className="cn-heading-lg text-brand-text">{theme.experienceTitle}</h2>
            </Reveal>
            {theme.experienceLayout === "split" ? (
              <ul className="mt-10 space-y-0 divide-y divide-brand-border/80 border-y border-brand-border/80">
                {project.experienceAreas.map((area, i) => (
                  <Reveal key={area.title} delay={i * 0.05}>
                    <li className="grid gap-4 py-8 lg:grid-cols-12 lg:gap-10 lg:py-10">
                      <h3 className="cn-heading-sm text-brand-text lg:col-span-4">{area.title}</h3>
                      <p className="cn-body-md text-brand-muted lg:col-span-8 lg:text-lg">
                        {area.description}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            ) : theme.experienceLayout === "stack" ? (
              <ul className="mt-10 space-y-8">
                {project.experienceAreas.map((area, i) => (
                  <Reveal key={area.title} delay={i * 0.05}>
                    <li className="max-w-3xl border-l-2 border-brand-accent/40 pl-6 lg:pl-8">
                      <h3 className="cn-heading-sm text-brand-text">{area.title}</h3>
                      <p className="mt-3 cn-body-md text-brand-muted lg:text-lg">{area.description}</p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            ) : (
              <ul className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-8">
                {project.experienceAreas.map((area, i) => (
                  <Reveal key={area.title} delay={i * 0.05}>
                    <li className="border border-brand-border/80 bg-brand-bg/60 p-6 lg:p-8">
                      <h3 className="cn-heading-sm text-brand-text">{area.title}</h3>
                      <p className="mt-3 cn-body-md text-brand-muted">{area.description}</p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            )}
          </div>
        </section>

        <div className="cn-container cn-section-y-lg">
          <PageContent width="reading">
            <Reveal>
              <ContentBlock
                title={project.thinking.title}
                body={project.thinking.body}
                list={project.thinking.list}
              />
            </Reveal>
            <Reveal delay={0.05}>
              <ContentBlock
                title={theme.outcomeTitle}
                body={project.outcome.body}
                list={project.outcome.list}
              />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="border-t border-brand-border/80 pt-10 lg:pt-12">
                <h2 className="cn-heading-lg text-brand-text">Technology & capabilities</h2>
                <div className="mt-8 grid gap-10 lg:grid-cols-2">
                  <div>
                    <p className="cn-tech-label text-brand-accent-secondary">Capabilities</p>
                    <EditorialList items={project.capabilities} className="mt-4" />
                  </div>
                  <div>
                    <p className="cn-tech-label text-brand-accent-secondary">Technology direction</p>
                    <EditorialList items={project.technologies} className="mt-4" />
                  </div>
                </div>
              </div>
            </Reveal>
          </PageContent>
        </div>

        <section className="border-t border-brand-border/80">
          <div className="cn-container cn-section-y-md">
            <p className="cn-tech-label text-brand-accent-secondary">Related work</p>
            <ul className="mt-6 divide-y divide-brand-border/80">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/work/${item.slug}`}
                    className="group flex min-h-[4.5rem] flex-col justify-center gap-1 py-6 cn-interactive sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="cn-tech-label text-brand-muted">{item.industry}</p>
                      <p className="cn-heading-sm text-brand-text group-hover:text-brand-accent">
                        {item.name}
                      </p>
                    </div>
                    <span className="cn-body-sm text-brand-muted group-hover:text-brand-text">
                      View case study →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
      <CTASection />
    </>
  );
}
