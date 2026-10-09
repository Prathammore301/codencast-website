import Link from "next/link";
import type { ServiceDetail } from "@/types/content";
import { getServiceBySlug } from "@/content/services";
import { CTASection } from "@/components/layout/CTASection";
import { PageContent } from "@/components/layout/PageContent";
import { PageHero } from "@/components/layout/PageHero";
import { EditorialList } from "@/components/ui/EditorialList";
import { Reveal } from "@/components/motion/Reveal";

type ServiceDetailViewProps = {
  service: ServiceDetail;
};

function SectionBlock({
  title,
  body,
  list,
}: {
  title: string;
  body: string[];
  list?: string[];
}) {
  return (
    <section className="border-t border-brand-border/80 pt-10 lg:pt-12">
      <h2 className="cn-heading-lg text-brand-text">{title}</h2>
      <div className="mt-5 space-y-4">
        {body.map((p) => (
          <p key={p.slice(0, 40)} className="cn-body-lg text-brand-muted">
            {p}
          </p>
        ))}
      </div>
      {list?.length ? <EditorialList items={list} className="mt-6" /> : null}
    </section>
  );
}

export function ServiceDetailView({ service }: ServiceDetailViewProps) {
  const related = service.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean) as ServiceDetail[];

  return (
    <>
      <div className="cn-container cn-page-bottom-lg pb-0">
        <PageHero
          eyebrow={`${service.categoryLabel} · Service`}
          title={service.title}
          description={service.heroSupporting}
          size="large"
          meta={[
            { label: "Who it’s for", value: service.whoNeedsIt },
            { label: "Studio connection", value: service.connection },
          ]}
        />

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <PageContent width="full" className="lg:col-span-8">
            <Reveal>
              <SectionBlock
                title="Problem / opportunity"
                body={service.whatWeSolve.body}
                list={service.whatWeSolve.list}
              />
            </Reveal>
            <Reveal delay={0.04}>
              <SectionBlock
                title={service.whatWeBuild.title}
                body={service.whatWeBuild.body}
                list={service.whatWeBuild.list}
              />
            </Reveal>
            <Reveal delay={0.06}>
              <SectionBlock
                title={service.approach.title}
                body={service.approach.body}
                list={service.approach.list}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <section className="border-t border-brand-border/80 pt-10 lg:pt-12">
                <h2 className="cn-heading-lg text-brand-text">Capabilities</h2>
                <EditorialList items={service.capabilities} className="mt-6" />
              </section>
            </Reveal>
            <Reveal delay={0.1}>
              <section className="border-t border-brand-border/80 pt-10 lg:pt-12">
                <h2 className="cn-heading-lg text-brand-text">Technology</h2>
                <p className="mt-3 cn-body-md text-brand-muted-secondary">
                  Stacks vary by project — these are typical starting points, not a fixed menu.
                </p>
                <EditorialList items={service.technology} className="mt-6" />
              </section>
            </Reveal>
          </PageContent>

          <aside className="lg:col-span-4">
            <Reveal delay={0.05}>
              <div className="sticky top-28 space-y-6 border border-brand-border/80 bg-brand-surface/25 p-6 lg:p-8">
                <div>
                  <p className="cn-tech-label text-brand-accent-secondary">What happens next</p>
                  <EditorialList items={service.engagement} className="mt-4" />
                </div>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-cn-md bg-brand-accent cn-body-sm font-medium text-brand-bg cn-interactive hover:shadow-cn-glow"
                >
                  Discuss this service
                </Link>
                <Link
                  href="/process"
                  className="inline-flex min-h-11 w-full items-center justify-center cn-body-sm text-brand-muted cn-interactive hover:text-brand-text"
                >
                  See our process →
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>

      <section className="border-t border-brand-border/80 bg-brand-surface/[0.08]">
        <div className="cn-container cn-section-y-md">
          <p className="cn-tech-label text-brand-accent-secondary">Related services</p>
          <h2 className="cn-heading-md mt-3 text-brand-text">Works well alongside</h2>
          <ul className="mt-8 divide-y divide-brand-border/80 border-y border-brand-border/80">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/services/${item.slug}`}
                  className="group flex flex-col gap-2 py-6 cn-interactive sm:flex-row sm:items-center sm:justify-between lg:py-8"
                >
                  <div>
                    <p className="cn-tech-label text-brand-muted">{item.categoryLabel}</p>
                    <p className="cn-heading-sm text-brand-text group-hover:text-brand-accent">
                      {item.title}
                    </p>
                  </div>
                  <span className="cn-body-sm text-brand-muted group-hover:text-brand-text">
                    View service →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection />
    </>
  );
}
