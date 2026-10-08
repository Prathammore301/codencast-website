import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { ServiceDetailView } from "@/components/services/ServiceDetailView";
import { getServiceBySlug, serviceSlugs } from "@/content/services";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd, getServiceJsonLd } from "@/lib/seo/json-ld";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return createPageMetadata({ noIndex: true });

  return createPageMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const breadcrumb = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${slug}` },
  ]);
  const serviceLd = getServiceJsonLd({
    name: service.title,
    description: service.shortDescription,
    path: `/services/${slug}`,
  });

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumb, serviceLd]) }}
      />
      <ServiceDetailView service={service} />
    </PageShell>
  );
}
