"use client";

import { motion, useReducedMotion } from "framer-motion";
import { engineeringDesignContent, pipelineDisplayLabels } from "@/content/home";

const annotations = [
  "Research & alignment",
  "Systems & UI",
  "Production build",
  "Release & QA",
  "Iteration",
];

export function PipelineDiagram() {
  const reduced = useReducedMotion();
  const steps = engineeringDesignContent.pipeline;

  return (
    <div className="relative overflow-hidden border border-brand-border/80 bg-brand-surface/35 p-6 cn-bg-grid-dark lg:p-10 xl:p-12">
      <div className="flex items-center justify-between gap-4">
        <p className="cn-tech-label text-brand-accent">Integrated delivery model</p>
        <p className="cn-tech-label text-brand-muted">Design ↔ Engineering</p>
      </div>

      <div className="relative mt-12 hidden lg:block">
        <svg
          viewBox="0 0 1000 120"
          className="h-24 w-full"
          aria-hidden
          preserveAspectRatio="none"
        >
          <path
            d="M40 60 H960"
            stroke="rgba(0,240,255,0.25)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            fill="none"
          />
          {[40, 270, 500, 730, 960].map((x) => (
            <circle
              key={x}
              cx={x}
              cy={60}
              r="6"
              fill="#0b0f17"
              stroke="rgba(0,240,255,0.55)"
              strokeWidth="2"
            />
          ))}
        </svg>

        <ol className="relative -mt-16 grid grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.li
              key={step}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: index * 0.07, duration: 0.45 }}
              className="pt-20"
            >
              <p className="cn-tech-label text-brand-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 cn-heading-md text-brand-text">
                {pipelineDisplayLabels[index] ?? step}
              </p>
              <p className="mt-2 cn-caption text-brand-muted-secondary">
                {annotations[index]}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>

      <ol className="relative mt-10 space-y-0 lg:hidden">
        {steps.map((step, index) => (
          <li key={step} className="relative pl-8 pb-10 last:pb-0">
            {index < steps.length - 1 ? (
              <span
                aria-hidden
                className="absolute bottom-0 left-[0.55rem] top-6 w-px bg-brand-accent/30"
              />
            ) : null}
            <span className="absolute left-0 top-1 flex size-5 items-center justify-center rounded-full border border-brand-accent/50 bg-brand-bg cn-tech-label text-[0.6rem] text-brand-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="cn-heading-md text-brand-text">
              {pipelineDisplayLabels[index] ?? step}
            </p>
            <p className="mt-2 cn-body-sm text-brand-muted">{annotations[index]}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
