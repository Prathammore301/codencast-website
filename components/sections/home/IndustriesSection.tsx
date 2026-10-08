import { industries } from "@/content/home";
import { Reveal } from "@/components/motion/Reveal";

export function IndustriesSection() {
  return (
    <section
      aria-labelledby="industries-heading"
      className="cn-section-y-home bg-brand-surface/[0.06]"
    >
      <div className="cn-container">
        <Reveal>
          <p className="cn-tech-label tracking-[0.16em] text-brand-accent">
            INDUSTRIES WE CAN SUPPORT
          </p>
          <h2
            id="industries-heading"
            className="cn-display-md mt-5 max-w-3xl text-brand-text lg:cn-display-lg"
          >
            Built for businesses with something to solve.
          </h2>
        </Reveal>

        <ul className="mt-8 lg:mt-10">
          {industries.map((industry, index) => (
            <Reveal key={industry} delay={index * 0.03}>
              <li className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 border-t border-brand-border/80 py-5 lg:grid-cols-[4rem_1fr_4rem] lg:py-6">
                <span className="font-mono text-sm text-brand-muted-secondary lg:text-base">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="cn-heading-sm text-brand-text transition-colors group-hover:text-brand-accent lg:cn-heading-md">
                  {industry}
                </p>
                <span
                  aria-hidden
                  className="cn-tech-label text-brand-accent opacity-0 transition-opacity group-hover:opacity-100"
                >
                  —
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
