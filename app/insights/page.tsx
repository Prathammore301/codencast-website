import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { CTASection } from "@/components/layout/CTASection";
import { InsightsIndex } from "@/components/insights/InsightsIndex";
import {
  insightArticles,
  insightCategories,
  insightsPageContent,
} from "@/content/insights";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = createPageMetadata({
  title: "Insights",
  description:
    "Editorial notes on websites, software, product design, SEO and commerce from CodeNCast.",
  path: "/insights",
});

export default function InsightsPage() {
  const featured = insightArticles[0];
  const jsonLd = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
  ]);

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="cn-container cn-page-bottom-lg pb-0">
        <PageHero
          eyebrow={insightsPageContent.eyebrow}
          title={insightsPageContent.title}
          description={insightsPageContent.description}
          size="large"
          meta={[
            { label: "Format", value: "Evergreen editorial" },
            { label: "Articles", value: `${insightArticles.length} published` },
            { label: "Focus", value: "Planning, build decisions, growth foundations" },
          ]}
        />
        <InsightsIndex
          featured={featured}
          articles={insightArticles}
          categories={insightCategories}
        />
      </div>
      <CTASection />
    </PageShell>
  );
}
