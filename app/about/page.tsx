import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { CTASection } from "@/components/layout/CTASection";
import { PageContent } from "@/components/layout/PageContent";
import { EditorialList } from "@/components/ui/EditorialList";
import { Reveal } from "@/components/motion/Reveal";
import { aboutPageContent } from "@/content/about";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "CodeNCast combines software engineering, product design and digital growth to build useful business systems.",
  path: "/about",
});

export default function AboutPage() {
  const c = aboutPageContent;
  const jsonLd = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="cn-container cn-page-bottom-lg pb-0">
        <PageHero
          eyebrow={c.eyebrow}
          title={c.title}
          description={c.description}
          size="large"
          meta={[
            { id: "studio", label: "Studio", value: "Engineering · Design · Growth" },
            { id: "focus-systems", label: "Focus", value: "Useful digital systems for business" },
            {
              id: "focus-delivery",
              label: "Delivery",
              value: "Capabilities-led delivery for business teams",
            },
          ]}
        />

        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <PageContent width="full" className="space-y-14 lg:col-span-8 lg:space-y-16">
            <Reveal>
              <section>
                <h2 className="cn-heading-lg text-brand-text">{c.whoWeAre.title}</h2>
                <div className="mt-5 space-y-4">
                  {c.whoWeAre.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)} className="cn-body-lg text-brand-muted lg:text-[1.125rem]">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
            <Reveal delay={0.04}>
              <section>
                <h2 className="cn-heading-lg text-brand-text">{c.howWeThink.title}</h2>
                <div className="mt-5 space-y-4">
                  {c.howWeThink.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)} className="cn-body-lg text-brand-muted lg:text-[1.125rem]">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
            <Reveal delay={0.06}>
              <section>
                <h2 className="cn-heading-lg text-brand-text">{c.whatWeCombine.title}</h2>
                <ul className="mt-8 space-y-0 divide-y divide-brand-border/80 border-y border-brand-border/80">
                  {c.whatWeCombine.items.map((item) => (
                    <li key={item.title} className="grid gap-3 py-8 sm:grid-cols-12 sm:gap-6">
                      <h3 className="cn-heading-sm text-brand-text sm:col-span-4">{item.title}</h3>
                      <p className="cn-body-md text-brand-muted sm:col-span-8 lg:text-lg">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
            <Reveal delay={0.08}>
              <section>
                <h2 className="cn-heading-lg text-brand-text">{c.howWeWork.title}</h2>
                <div className="mt-5 space-y-4">
                  {c.howWeWork.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)} className="cn-body-lg text-brand-muted">
                      {p}
                    </p>
                  ))}
                </div>
                <Link
                  href="/process"
                  className="mt-6 inline-flex min-h-11 items-center cn-body-sm text-brand-accent cn-interactive hover:underline"
                >
                  Read the full process →
                </Link>
              </section>
            </Reveal>
            <Reveal delay={0.1}>
              <section>
                <h2 className="cn-heading-lg text-brand-text">{c.capabilities.title}</h2>
                <EditorialList items={c.capabilities.list} className="mt-6" />
              </section>
            </Reveal>
          </PageContent>

          <aside className="lg:col-span-4">
            <Reveal delay={0.05}>
              <div className="sticky top-28 border border-brand-border/80 bg-brand-surface/20 p-6 lg:p-8">
                <p className="cn-tech-label text-brand-accent-secondary">{c.principles.title}</p>
                <ul className="mt-6 space-y-6">
                  {c.principles.items.map((item) => (
                    <li key={item.title}>
                      <h3 className="cn-heading-sm text-brand-text">{item.title}</h3>
                      <p className="mt-2 cn-body-md text-brand-muted">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
      <CTASection />
    </PageShell>
  );
}
