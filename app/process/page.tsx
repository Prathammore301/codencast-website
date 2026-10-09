import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { CTASection } from "@/components/layout/CTASection";
import { ProcessTimeline } from "@/components/process/ProcessTimeline";
import { processPageContent, processSteps } from "@/content/process";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = createPageMetadata({
  title: "Process",
  description:
    "Discover, define, design, build, launch and grow — CodeNCast's path from idea to sustainable digital products.",
  path: "/process",
});

export default function ProcessPage() {
  const jsonLd = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Process", path: "/process" },
  ]);

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="cn-container cn-page-bottom-lg pb-0">
        <PageHero
          eyebrow={processPageContent.eyebrow}
          title={processPageContent.title}
          description={processPageContent.description}
          size="large"
          meta={[
            { label: "Phases", value: "6 connected stages" },
            { label: "Output", value: "Scope, design, build, launch, growth" },
            { label: "Cadence", value: "Documented checkpoints throughout" },
          ]}
        />
        <ProcessTimeline steps={processSteps} />
      </div>
      <CTASection />
    </PageShell>
  );
}
