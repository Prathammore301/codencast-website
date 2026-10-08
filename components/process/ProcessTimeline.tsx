"use client";

import type { ProcessStep } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";
import { EditorialList } from "@/components/ui/EditorialList";

type ProcessTimelineProps = {
  steps: ProcessStep[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <ol className="relative mt-12 lg:mt-16">
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[0.65rem] top-0 hidden w-px bg-gradient-to-b from-brand-accent/40 via-brand-border/80 to-transparent lg:left-[1.35rem] lg:block"
      />
      {steps.map((step, index) => (
        <Reveal key={step.index} delay={index * 0.05} y={24}>
          <li className="relative grid gap-8 border-t border-brand-border/80 py-10 pl-8 lg:grid-cols-12 lg:gap-10 lg:py-14 lg:pl-0">
            <span
              aria-hidden
              className="absolute left-0 top-12 size-3 rounded-full border-2 border-brand-accent bg-brand-bg lg:left-0 lg:top-16"
            />

            <div className="lg:col-span-4 lg:pl-10">
              <p className="font-mono text-sm tracking-[0.25em] text-brand-accent">{step.index}</p>
              <h2 className="cn-heading-lg mt-3 text-brand-text lg:cn-heading-xl">{step.title}</h2>
              <p className="mt-4 cn-body-md text-brand-muted lg:text-lg">{step.purpose}</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3 lg:pl-4">
              <div>
                <p className="cn-tech-label text-brand-muted">Key activities</p>
                <EditorialList items={step.activities} className="mt-4" />
              </div>
              <div>
                <p className="cn-tech-label text-brand-muted">Deliverables</p>
                <EditorialList items={step.deliverables} className="mt-4" />
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <p className="cn-tech-label text-brand-muted">Next</p>
                <p className="mt-4 cn-body-md text-brand-muted">{step.next}</p>
              </div>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
