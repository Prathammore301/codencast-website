import { getWorkSummaries } from "@/content/work";
import { WorkFeatureBlock } from "@/components/work/WorkFeatureBlock";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

function ProjectDivider({ index }: { index: string }) {
  return (
    <div
      aria-hidden
      className="flex items-center gap-4 py-6 lg:py-10"
    >
      <span className="cn-tech-label text-brand-muted-secondary">{index}</span>
      <span className="h-px flex-1 bg-brand-border/80" />
      <span className="cn-tech-label text-brand-accent-secondary/70">Concept</span>
    </div>
  );
}

export function SelectedWork() {
  const conceptProjects = getWorkSummaries();
  return (
    <section
      aria-labelledby="selected-work-heading"
      className="cn-section-y-xl bg-brand-surface/[0.14]"
    >
      <div className="cn-container">
        <Reveal>
          <SectionHeader
            titleId="selected-work-heading"
            title="Selected work"
            scale="editorial"
            description="A look at the systems, interfaces and digital experiences we design and build."
          />
        </Reveal>

        <div className="mt-16 lg:mt-24">
          {conceptProjects.map((project, index) => (
            <div key={project.id}>
              {index > 0 ? <ProjectDivider index={project.index} /> : null}
              <Reveal delay={index * 0.04} y={28}>
                <WorkFeatureBlock project={project} layoutIndex={index} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
