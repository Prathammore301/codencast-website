import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { contactPageContent } from "@/content/contact";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Start a project with CodeNCast — software, websites, mobile apps, e-commerce, design and growth.",
  path: "/contact",
});

export default function ContactPage() {
  const jsonLd = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="cn-container cn-page-top-nav cn-page-bottom-lg pb-20 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <div className="lg:col-span-5">
            <PageHero
              eyebrow={contactPageContent.eyebrow}
              title={contactPageContent.title}
              description={contactPageContent.description}
              layout="standard"
              compactTop
            />
            <div className="mt-10 space-y-6 border-t border-brand-border/80 pt-8">
              <div>
                <p className="cn-tech-label text-brand-accent-secondary">Email</p>
                <p className="mt-2 cn-body-md text-brand-muted">{contactPageContent.emailNote}</p>
              </div>
              <div>
                <p className="cn-tech-label text-brand-accent-secondary">Location</p>
                <p className="mt-2 cn-body-md text-brand-muted">{contactPageContent.locationNote}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-[1rem] border border-brand-border/80 bg-brand-surface/25 p-6 cn-bg-grid-dark lg:p-8 xl:p-10">
              <p className="cn-tech-label text-brand-muted">Project enquiry</p>
              <p className="mt-2 cn-body-sm text-brand-muted-secondary">
                Fields marked with * are required. Submit the form to send your enquiry to our team.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
