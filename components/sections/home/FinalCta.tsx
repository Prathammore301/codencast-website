import Link from "next/link";
import { finalCtaContent } from "@/content/home";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="cn-section-y-home pb-8 lg:pb-12">
      <div className="cn-container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.25rem] border border-brand-border bg-brand-surface-elevated px-6 py-12 cn-bg-grid-teal lg:px-14 lg:py-16 xl:px-20 xl:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,240,255,0.06),transparent_45%)]" />
            <div className="relative max-w-3xl">
              <p className="cn-tech-label text-brand-accent-secondary">
                {finalCtaContent.eyebrow}
              </p>
              <h2
                id="final-cta-heading"
                className="cn-display-md mt-6 text-brand-text lg:cn-display-lg xl:cn-display-xl"
              >
                {finalCtaContent.headlineLines[0]}
                <span className="mt-1 block text-brand-muted">
                  {finalCtaContent.headlineLines[1]}
                </span>
              </h2>
              <p className="mt-6 cn-body-lg text-brand-muted lg:mt-8 lg:max-w-2xl lg:text-[1.125rem] lg:leading-[1.75]">
                {finalCtaContent.supporting}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-12">
                <Link
                  href={finalCtaContent.primaryCta.href}
                  className="inline-flex min-h-12 items-center justify-center rounded-cn-md bg-brand-accent px-8 py-3.5 cn-body-sm font-medium text-brand-bg cn-interactive hover:shadow-cn-glow"
                >
                  {finalCtaContent.primaryCta.label}
                </Link>
                <Link
                  href={finalCtaContent.secondaryCta.href}
                  className="inline-flex min-h-12 items-center justify-center rounded-cn-md border border-brand-border-light px-8 py-3.5 cn-body-sm text-brand-text cn-interactive hover:border-brand-accent/40"
                >
                  {finalCtaContent.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
