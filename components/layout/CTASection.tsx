import Link from "next/link";
import { defaultPageCta } from "@/content/site/cta";
import { Reveal } from "@/components/motion/Reveal";

type CTASectionProps = {
  eyebrow?: string;
  headlineLines?: readonly [string, string];
  supporting?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CTASection(props: CTASectionProps = {}) {
  const {
    eyebrow = defaultPageCta.eyebrow,
    headlineLines = defaultPageCta.headlineLines,
    supporting = defaultPageCta.supporting,
    primaryCta = defaultPageCta.primaryCta,
    secondaryCta = defaultPageCta.secondaryCta,
  } = props;

  return (
    <section aria-labelledby="page-cta-heading" className="cn-section-y-xl pb-8 lg:pb-12">
      <div className="cn-container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.25rem] border border-brand-border bg-brand-surface-elevated px-6 py-14 cn-bg-grid-teal lg:px-14 lg:py-20 xl:px-20 xl:py-24">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,240,255,0.06),transparent_45%)]" />
            <div className="relative max-w-3xl">
              <p className="cn-tech-label text-brand-accent-secondary">{eyebrow}</p>
              <h2
                id="page-cta-heading"
                className="cn-display-md mt-6 text-brand-text lg:cn-display-lg xl:cn-display-xl"
              >
                {headlineLines[0]}
                <span className="mt-1 block text-brand-muted">{headlineLines[1]}</span>
              </h2>
              <p className="mt-6 cn-body-lg text-brand-muted lg:mt-8 lg:max-w-2xl lg:text-[1.125rem] lg:leading-[1.75]">
                {supporting}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-12">
                <Link
                  href={primaryCta.href}
                  className="inline-flex min-h-12 items-center justify-center rounded-cn-md bg-brand-accent px-8 py-3.5 cn-body-sm font-medium text-brand-bg cn-interactive hover:shadow-cn-glow"
                >
                  {primaryCta.label}
                </Link>
                <Link
                  href={secondaryCta.href}
                  className="inline-flex min-h-12 items-center justify-center rounded-cn-md border border-brand-border-light px-8 py-3.5 cn-body-sm text-brand-text cn-interactive hover:border-brand-accent/40"
                >
                  {secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
