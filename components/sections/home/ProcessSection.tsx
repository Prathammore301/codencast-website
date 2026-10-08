import { processSteps } from "@/content/home";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProcessSection() {
  return (
    <section
      aria-labelledby="process-heading"
      className="cn-section-y-home border-t border-brand-border/60 bg-brand-surface/[0.08]"
    >
      <div className="cn-container">
        <Reveal>
          <SectionHeader
            titleId="process-heading"
            title="A clearer path from idea to launch."
            scale="editorial"
            description="Structured phases that keep product, design and engineering aligned from discovery through release."
          />
        </Reveal>

        <div className="relative mt-10 lg:mt-12">
          <div
            aria-hidden
            className="absolute left-[0.65rem] top-2 bottom-2 w-px bg-brand-border-light lg:left-0 lg:right-0 lg:top-6 lg:bottom-auto lg:h-px lg:w-full"
          />

          <ol className="relative space-y-8 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0 2xl:grid-cols-6 2xl:gap-5">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05}>
                <li className="relative pl-8 lg:pl-0 lg:pt-12">
                  <span className="absolute left-0 top-0 flex size-5 items-center justify-center rounded-full border border-brand-accent/45 bg-brand-bg font-mono text-[0.65rem] text-brand-accent lg:left-4 lg:-top-0.5 lg:size-6 lg:text-xs">
                    {step.index}
                  </span>
                  <h3 className="cn-heading-md text-brand-text lg:cn-heading-lg">
                    {step.title}
                  </h3>
                  <p className="mt-3 cn-body-md leading-relaxed text-brand-muted">
                    {step.description}
                  </p>
                  {index < processSteps.length - 1 ? (
                    <span
                      aria-hidden
                      className="mt-4 hidden cn-tech-label text-brand-muted lg:inline"
                    >
                      ——
                    </span>
                  ) : null}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
