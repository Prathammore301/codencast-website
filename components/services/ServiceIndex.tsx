"use client";

import Link from "next/link";
import type { ServiceSummary } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

type ServiceIndexProps = {
  services: ServiceSummary[];
};

export function ServiceIndex({ services }: ServiceIndexProps) {
  return (
    <ul className="mt-12 lg:mt-16">
      {services.map((service, index) => (
        <Reveal key={service.slug} delay={index * 0.04} y={20}>
          <li className="border-t border-brand-border/80 last:border-b">
            <Link
              href={`/services/${service.slug}`}
              className="group grid gap-5 py-10 cn-interactive sm:gap-6 lg:grid-cols-12 lg:items-start lg:gap-8 lg:py-14 xl:py-16"
            >
              <div className="flex items-baseline gap-4 lg:col-span-2 lg:flex-col lg:gap-2">
                <span className="font-mono text-sm tracking-[0.25em] text-brand-muted-secondary">
                  {service.index}
                </span>
                <span className="cn-tech-label text-brand-accent">{service.categoryLabel}</span>
              </div>

              <div className="lg:col-span-4">
                <h2 className="cn-heading-lg text-brand-text transition-colors duration-300 group-hover:text-brand-accent lg:cn-heading-xl">
                  {service.title}
                </h2>
                <p className="mt-4 cn-body-md text-brand-muted-secondary lg:hidden">
                  {service.connection}
                </p>
              </div>

              <div className="lg:col-span-4 lg:pt-1">
                <p className="cn-body-lg text-brand-muted">{service.shortDescription}</p>
                <p className="mt-4 hidden cn-body-sm text-brand-muted-secondary lg:block">
                  {service.connection}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 lg:col-span-2 lg:flex-col lg:items-end lg:pt-1">
                <div className="flex flex-wrap gap-2">
                  {service.keywords.slice(0, 3).map((kw) => (
                    <span
                      key={kw}
                      className="border border-brand-border/80 px-2.5 py-1 cn-caption text-brand-muted-secondary"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
                <span
                  aria-hidden
                  className="cn-body-sm text-brand-accent transition-transform duration-300 group-hover:translate-x-1"
                >
                  Explore →
                </span>
              </div>
            </Link>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}
