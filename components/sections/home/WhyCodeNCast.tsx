import { whyPrinciples } from "@/content/home";
import { Reveal } from "@/components/motion/Reveal";

export function WhyCodeNCast() {
  return (
    <section
      aria-labelledby="why-heading"
      className="cn-section-y-home border-t border-brand-border/60"
    >
      <div className="cn-container">
        <Reveal>
          <h2 id="why-heading" className="cn-display-md text-brand-text lg:cn-display-lg">
            Why CodeNCast
          </h2>
        </Reveal>

        <div className="mt-8 lg:mt-10">
          {whyPrinciples.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="grid gap-4 border-t border-brand-border py-8 lg:grid-cols-[5rem_1fr] lg:gap-10 lg:py-10">
                <p className="font-mono text-xl tracking-widest text-brand-accent/75 lg:text-3xl">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="cn-heading-lg text-brand-text lg:cn-heading-xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-2xl cn-body-lg text-brand-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
