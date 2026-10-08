import { techStackItems } from "@/content/home";

export function TechMarquee() {
  const track = [...techStackItems, ...techStackItems];

  return (
    <section
      aria-label="Technology capabilities"
      className="border-y border-brand-border bg-brand-bg py-5 lg:py-6"
    >
      <div className="cn-container mb-4 hidden items-center gap-4 lg:flex">
        <span className="cn-tech-label text-brand-muted-secondary">
          Technology
        </span>
        <span className="h-px flex-1 bg-brand-border" aria-hidden />
        <span className="cn-tech-label text-brand-muted-secondary">
          Capabilities
        </span>
        <span className="h-px flex-1 bg-brand-border" aria-hidden />
        <span className="cn-tech-label text-brand-muted-secondary">Systems</span>
      </div>

      <div className="overflow-hidden">
        <ul className="flex w-max animate-marquee items-center gap-0 hover:[animation-play-state:paused] motion-reduce:animate-none">
          {track.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className="flex shrink-0 items-center gap-5 px-6 lg:px-8"
            >
              <span className="size-1 shrink-0 rounded-full bg-brand-accent/60" aria-hidden />
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-brand-muted lg:text-xs">
                {item}
              </span>
              <span
                className="hidden h-3 w-px shrink-0 bg-brand-border-light sm:block"
                aria-hidden
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
