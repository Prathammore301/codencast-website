import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

export type PageHeroMetaItem = {
  id?: string;
  label: string;
  value: string;
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  size?: "default" | "large";
  layout?: "standard" | "editorial";
  meta?: PageHeroMetaItem[];
  /** Use inside split layouts (e.g. contact) — avoids double top padding */
  compactTop?: boolean;
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  size = "default",
  layout = "editorial",
  meta,
  compactTop = false,
  aside,
}: PageHeroProps) {
  const titleClass =
    size === "large"
      ? "cn-display-md sm:cn-display-lg lg:cn-display-lg xl:cn-display-xl text-brand-text"
      : "cn-display-md lg:cn-display-lg text-brand-text";

  const topPad = compactTop ? "pt-0" : "cn-page-top-nav";

  const heading = (
    <>
      {eyebrow ? <p className="cn-tech-label text-brand-accent-secondary">{eyebrow}</p> : null}
      <h1 className={`${titleClass} ${eyebrow ? "mt-5 lg:mt-6" : ""} max-w-[18ch] leading-[1.05]`}>
        {title}
      </h1>
      {description ? (
        <p className="mt-5 max-w-xl cn-body-lg text-brand-muted lg:mt-6 lg:max-w-2xl lg:text-[1.125rem] lg:leading-[1.7]">
          {description}
        </p>
      ) : null}
    </>
  );

  const metaPanel =
    meta && meta.length > 0 ? (
      <div className="border border-brand-border/80 bg-brand-surface/30 p-5 lg:p-6">
        <p className="cn-tech-label text-brand-muted">At a glance</p>
        <dl className="mt-5 space-y-4">
          {meta.map((item) => (
            <div key={item.id ?? `${item.label}::${item.value}`}>
              <dt className="cn-caption text-brand-muted-secondary">{item.label}</dt>
              <dd className="mt-1 cn-body-md text-brand-text">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    ) : null;

  if (layout === "standard") {
    return (
      <Reveal>
        <header className={`max-w-4xl ${topPad}`}>{heading}</header>
      </Reveal>
    );
  }

  return (
    <section
      aria-labelledby="page-hero-title"
      className={`-mx-[var(--cn-container-padding)] border-b border-brand-border/60 cn-bg-radial-glow px-[var(--cn-container-padding)] pb-12 lg:pb-16 ${topPad}`}
    >
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12 xl:gap-16">
          <div className="lg:col-span-7 xl:col-span-7">
            <div id="page-hero-title">{heading}</div>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-5 lg:pb-1">
            {aside ?? metaPanel}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
