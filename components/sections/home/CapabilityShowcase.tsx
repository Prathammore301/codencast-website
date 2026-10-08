import { capabilityShowcaseContent } from "@/content/home";
import { CapabilityVisual } from "@/components/sections/home/CapabilityVisual";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CapabilityShowcase() {
  return (
    <section
      aria-labelledby="capability-showcase-heading"
      className="cn-section-y-home border-b border-brand-border/60 bg-brand-surface/[0.06]"
    >
      <div className="cn-container">
        <Reveal>
          <SectionHeader
            eyebrow={capabilityShowcaseContent.eyebrow}
            titleId="capability-showcase-heading"
            title={capabilityShowcaseContent.title}
            scale="editorial"
            description={capabilityShowcaseContent.description}
          />
        </Reveal>

        <ul className="mt-10 space-y-12 lg:mt-14 lg:space-y-16">
          {capabilityShowcaseContent.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.04}>
              <li className="grid gap-8 border-t border-brand-border/80 pt-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pt-12 first:border-t-0 first:pt-0">
                <div className="lg:col-span-5 xl:col-span-4">
                  <p className="font-mono text-sm tracking-[0.25em] text-brand-muted-secondary">
                    {item.index}
                  </p>
                  <h3 className="cn-heading-lg mt-3 text-brand-accent lg:cn-heading-xl">
                    {item.category}
                  </h3>
                  <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                    {item.keywords.map((kw) => (
                      <li key={kw} className="cn-body-md text-brand-muted">
                        {kw}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-7 xl:col-span-8">
                  <CapabilityVisual variant={item.visual} />
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
