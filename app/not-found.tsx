import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Page not found",
    description: "The page you requested could not be found on CodeNCast.",
    path: "/404",
    noIndex: true,
  }),
};

export default function NotFound() {
  return (
    <PageShell>
      <div className="cn-container cn-bg-grid-teal flex min-h-[55vh] flex-col justify-center border-b border-brand-border/60 py-28 lg:min-h-[60vh] lg:py-32">
        <p className="cn-tech-label text-brand-accent-secondary">404</p>
        <h1 className="cn-display-md mt-4 text-brand-text lg:cn-display-lg">Page not found.</h1>
        <p className="mt-4 max-w-md cn-body-lg text-brand-muted">
          The page you are looking for may have moved or does not exist. Try the homepage or our
          services and capabilities.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-cn-md bg-brand-accent px-8 cn-body-sm font-medium text-brand-bg cn-interactive hover:shadow-cn-glow"
          >
            Back home
          </Link>
          <Link
            href="/services"
            className="inline-flex min-h-12 items-center justify-center rounded-cn-md border border-brand-border-light px-8 cn-body-sm text-brand-text cn-interactive hover:border-brand-accent/40"
          >
            Explore services
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
