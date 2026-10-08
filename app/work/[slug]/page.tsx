import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";
import { PageShell } from "@/components/layout/PageShell";
import { getWorkBySlug, workSlugs } from "@/content/work";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd } from "@/lib/seo/json-ld";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return workSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkBySlug(slug);
  if (!project) return createPageMetadata({ noIndex: true });

  return createPageMetadata({
    title: `${project.name} — Concept Case Study`,
    description: `${project.description} Concept project by CodeNCast.`,
    path: `/work/${slug}`,
    noIndex: true,
  });
}

export default async function WorkCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getWorkBySlug(slug);
  if (!project) notFound();

  const jsonLd = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: project.name, path: `/work/${slug}` },
  ]);

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyView project={project} />
    </PageShell>
  );
}
