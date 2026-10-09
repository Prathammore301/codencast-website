import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { CTASection } from "@/components/layout/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import { WorkFeatureBlock } from "@/components/work/WorkFeatureBlock";
import { workPageContent } from "@/content/work";
import { getWorkSummaries } from "@/content/work";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = createPageMetadata({
  title: "Selected Work",
  description:
    "Concept projects exploring fintech, healthcare logistics and commerce UX — designed and engineered by CodeNCast.",
  path: "/work",
  noIndex: true,
});

function ProjectDivider({ index }: { index: string }) {
  return (
    <div aria-hidden className="flex items-center gap-4 py-8 lg:py-12">
      <span className="cn-tech-label text-brand-muted-secondary">{index}</span>
      <span className="h-px flex-1 bg-brand-border/80" />
      <span className="cn-tech-label tracking-[0.2em] text-brand-accent/80">
        {workPageContent.label.toUpperCase()}
      </span>
    </div>
  );
}

export default function WorkPage() {
  const conceptProjects = getWorkSummaries();
  const jsonLd = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
  ]);

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="cn-container cn-page-bottom-lg pb-0">
        <PageHero
          eyebrow={workPageContent.eyebrow.toUpperCase()}
          title={workPageContent.title}
          description={workPageContent.description}
          size="large"
          meta={[
            { label: "Projects", value: "3 concept explorations" },
            { label: "Focus", value: "FinTech · Healthcare logistics · Commerce" },
            { label: "Status", value: "Concept work — not client deployments" },
          ]}
        />

        <section
          aria-label="Concept projects"
          className="-mx-[var(--cn-container-padding)] mt-12 bg-brand-surface/[0.12] px-[var(--cn-container-padding)] py-10 lg:mt-16 lg:py-16"
        >
          {conceptProjects.map((project, index) => (
            <div key={project.id} className="cn-container px-0">
              {index > 0 ? <ProjectDivider index={project.index} /> : null}
              <Reveal delay={index * 0.04} y={28}>
                <WorkFeatureBlock project={project} layoutIndex={index} emphasis />
              </Reveal>
            </div>
          ))}
        </section>
      </div>
      <CTASection />
    </PageShell>
  );
}
