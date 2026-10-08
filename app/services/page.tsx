import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { CTASection } from "@/components/layout/CTASection";
import { ServiceIndex } from "@/components/services/ServiceIndex";
import { getServiceSummaries, servicesPageContent } from "@/content/services";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Software development, web, mobile, e-commerce, UI/UX, SEO and graphic design — one connected studio workflow.",
  path: "/services",
});

export default function ServicesPage() {
  const services = getServiceSummaries();
  const jsonLd = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="cn-container cn-section-y-lg pb-0">
        <PageHero
          eyebrow={servicesPageContent.eyebrow}
          title={servicesPageContent.title}
          description={servicesPageContent.description}
          size="large"
          meta={[
            { label: "Disciplines", value: "7 connected capabilities" },
            { label: "Model", value: "Engineering · Design · Growth" },
            { label: "Engagement", value: "Discovery through launch and iteration" },
          ]}
        />
        <ServiceIndex services={services} />
      </div>
      <CTASection />
    </PageShell>
  );
}
