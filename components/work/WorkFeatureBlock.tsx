"use client";

import Link from "next/link";
import type { WorkProjectSummary } from "@/types/content";
import { ProductMockup } from "@/components/work/ProductMockup";

type WorkFeatureBlockProps = {
  project: WorkProjectSummary;
  layoutIndex: number;
  emphasis?: boolean;
};

export function WorkFeatureBlock({ project, layoutIndex, emphasis = false }: WorkFeatureBlockProps) {
  const copyPanel = (
    <div className="border border-brand-border/80 bg-brand-bg/88 p-6 backdrop-blur-sm lg:p-8 xl:p-9">
      <p className="cn-tech-label tracking-[0.16em] text-brand-accent">
        {emphasis ? "CONCEPT PROJECT" : "Concept project"}
      </p>
      <p className="mt-3 font-mono text-sm tracking-[0.2em] text-brand-muted-secondary">
        {project.index}
      </p>
      <p className="mt-5 cn-tech-label text-brand-muted">{project.industry}</p>
      <h3
        id={`project-${project.id}-title`}
        className="mt-3 cn-display-md text-brand-text lg:max-w-[12ch]"
      >
        {project.name}
      </h3>
      <p className="mt-5 cn-heading-sm font-normal leading-relaxed text-brand-muted lg:text-lg lg:leading-[1.5]">
        {project.title}
      </p>
      <p className="mt-4 cn-body-md text-brand-muted lg:max-w-md">{project.description}</p>
      <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
        {project.tags.map((tag) => (
          <li key={tag} className="cn-caption text-brand-muted-secondary">
            {tag}
          </li>
        ))}
      </ul>
      <Link
        href={`/work/${project.slug}`}
        className="group/link mt-8 inline-flex items-center gap-3 cn-body-sm text-brand-text"
      >
        <span className="cn-interactive group-hover/link:text-brand-accent">
          View case study
        </span>
        <span aria-hidden className="transition-transform group-hover/link:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );

  const panelPosition =
    layoutIndex === 1
      ? "lg:left-0 lg:top-10 lg:max-w-[26rem] xl:max-w-md"
      : layoutIndex === 2
        ? "lg:bottom-8 lg:right-0 lg:max-w-[26rem] xl:max-w-md"
        : "lg:bottom-6 lg:left-0 lg:max-w-[26rem] xl:max-w-md";

  const visualAlign =
    layoutIndex === 1 ? "lg:ml-auto lg:w-[94%] xl:w-[92%]" : "lg:w-[96%] xl:w-[94%]";

  return (
    <article
      aria-labelledby={`project-${project.id}-title`}
      className="group py-4 lg:py-8"
    >
      <div
        className={`relative ${emphasis ? "lg:min-h-[660px] xl:min-h-[720px] 2xl:min-h-[780px]" : "lg:min-h-[620px] xl:min-h-[680px]"}`}
      >
        <div
          className={`relative overflow-hidden border border-brand-border/60 shadow-cn-lg transition-transform duration-700 group-hover:-translate-y-0.5 ${visualAlign}`}
        >
          <ProductMockup variant={project.mockup} size="feature" />
        </div>

        <div
          className={`relative z-10 mt-8 max-w-xl lg:absolute lg:mt-0 ${panelPosition}`}
        >
          {copyPanel}
        </div>
      </div>
    </article>
  );
}
