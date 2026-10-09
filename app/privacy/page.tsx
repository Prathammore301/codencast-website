import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { EditorialList } from "@/components/ui/EditorialList";
import { privacyPageContent, privacySections } from "@/content/privacy";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: privacyPageContent.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageShell>
      <div className="cn-container cn-page-bottom-lg">
        <header className="cn-page-top-nav mx-auto max-w-3xl lg:max-w-4xl">
          <p className="cn-tech-label text-brand-muted">
            Last updated {privacyPageContent.lastUpdated}
          </p>
          <h1 className="cn-display-md mt-4 text-brand-text lg:cn-display-lg">
            {privacyPageContent.title}
          </h1>
          <p className="mt-6 cn-body-lg text-brand-muted">{privacyPageContent.description}</p>
        </header>

        <div className="mx-auto mt-14 max-w-3xl space-y-12 lg:mt-16">
          {privacySections.map((section) => (
            <section key={section.id} aria-labelledby={`privacy-${section.id}`}>
              <h2 id={`privacy-${section.id}`} className="cn-heading-md text-brand-text">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="cn-body-lg text-brand-muted">
                    {p}
                  </p>
                ))}
              </div>
              {section.list?.length ? (
                <EditorialList items={section.list} className="mt-4" />
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
