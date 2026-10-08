"use client";

import Link from "next/link";
import { useState } from "react";
import { capabilitiesContent } from "@/content/home";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Capabilities() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="capabilities-heading"
      className="cn-section-y-home border-y border-brand-border/60 bg-brand-bg"
    >
      <div className="cn-container">
        <Reveal>
          <SectionHeader
            titleId="capabilities-heading"
            title={capabilitiesContent.heading}
            scale="editorial"
            description={capabilitiesContent.supporting}
          />
        </Reveal>

        <ul className="mt-10 lg:mt-14">
          {capabilitiesContent.items.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <Reveal key={item.title} delay={index * 0.03}>
                <li className="border-t border-brand-border/80 last:border-b">
                  <Link
                    href={item.href}
                    className="group grid min-h-11 gap-3 py-7 cn-interactive sm:gap-4 lg:grid-cols-[3.5rem_1.1fr_1.5fr_2rem] lg:items-start lg:gap-10 lg:py-10"
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    onFocus={() => setActiveIndex(index)}
                    onBlur={() => setActiveIndex(null)}
                  >
                    <span className="cn-caption text-brand-muted-secondary lg:pt-2">
                      {item.index}
                    </span>
                    <div>
                      <h3
                        className={`cn-heading-lg transition-colors duration-300 lg:cn-heading-xl ${
                          isActive ? "text-brand-accent" : "text-brand-text"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="mt-3 cn-body-md text-brand-muted lg:hidden">
                        {item.summary}
                      </p>
                    </div>
                    <div className="hidden lg:block lg:pt-1">
                      <p className="cn-body-md text-brand-muted">{item.summary}</p>
                      <p
                        className={`mt-3 cn-body-sm text-brand-muted-secondary transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-60"
                        }`}
                      >
                        {isActive ? item.detail : "View capability"}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className={`hidden self-center cn-tech-label transition-all lg:inline ${
                        isActive ? "text-brand-accent" : "text-brand-muted-secondary"
                      }`}
                    >
                      {isActive ? "OPEN" : "—"}
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
