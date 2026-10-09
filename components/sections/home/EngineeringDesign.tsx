import { engineeringDesignContent } from "@/content/home";
import { PipelineDiagram } from "@/components/sections/home/PipelineDiagram";
import { Reveal } from "@/components/motion/Reveal";

export function EngineeringDesign() {
  return (
    <section
      aria-labelledby="engineering-design-heading"
      className="cn-section-y-home cn-bg-grid-dark border-y border-brand-border/50"
    >
      <div className="cn-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <Reveal className="lg:col-span-5 xl:col-span-4">
            <p className="cn-tech-label text-brand-accent-secondary">Engineering + design</p>
            <h2
              id="engineering-design-heading"
              className="cn-display-md mt-6 text-brand-text lg:cn-display-lg"
            >
              {engineeringDesignContent.headline}
            </h2>
            <p className="mt-8 cn-body-lg text-brand-muted lg:mt-10 lg:text-[1.125rem] lg:leading-[1.75]">
              {engineeringDesignContent.supporting}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-7 xl:col-span-8" delay={0.08}>
            <PipelineDiagram />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
