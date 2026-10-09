import Link from "next/link";
import {
  Code2,
  Globe,
  LayoutTemplate,
  ShoppingBag,
  Smartphone,
  TestTube2,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { whatWeBuildContent } from "@/content/home";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const iconMap: Record<(typeof whatWeBuildContent.items)[number]["icon"], LucideIcon> = {
  software: Code2,
  web: Globe,
  mobile: Smartphone,
  commerce: ShoppingBag,
  design: LayoutTemplate,
  growth: TrendingUp,
  qa: TestTube2,
};

export function WhatWeBuild() {
  return (
    <section
      id="what-we-build"
      aria-labelledby="what-we-build-heading"
      className="cn-section-y-home border-b border-brand-border/60 bg-brand-bg scroll-mt-24"
    >
      <div className="cn-container">
        <Reveal>
          <SectionHeader
            titleId="what-we-build-heading"
            title={whatWeBuildContent.title}
            description={whatWeBuildContent.description}
            scale="editorial"
          />
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3 lg:mt-14">
          {whatWeBuildContent.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.id} delay={index * 0.04}>
                <li className="h-full">
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col rounded-cn-md border border-brand-border bg-brand-surface/40 p-6 cn-interactive hover:border-brand-accent/35 hover:bg-brand-surface-elevated/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
                  >
                    <span
                      aria-hidden
                      className="inline-flex size-10 items-center justify-center rounded-cn-sm border border-brand-border-light bg-brand-bg/80 text-brand-accent-secondary transition-colors group-hover:border-brand-accent-secondary/40 group-hover:text-brand-accent-secondary"
                    >
                      <Icon className="size-[1.125rem] stroke-[1.75]" />
                    </span>
                    <h3 className="cn-heading-md mt-5 text-brand-text transition-colors group-hover:text-brand-text">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 cn-body-md text-brand-muted">{item.description}</p>
                    <span className="mt-5 cn-body-sm font-medium text-brand-accent transition-colors group-hover:text-brand-accent">
                      View service
                    </span>
                  </Link>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
