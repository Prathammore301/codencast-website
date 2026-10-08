import type { WorkCaseStudy } from "@/types/content";

export type CaseStudyTheme = {
  heroGlow: string;
  accentBorder: string;
  experienceBg: string;
  experienceLayout: "grid" | "stack" | "split";
  heroLayout: "visual-first" | "split" | "stacked";
  outcomeTitle: string;
  experienceTitle: string;
  conceptBadge: string;
};

export const caseStudyThemes: Record<string, CaseStudyTheme> = {
  "northstar-capital": {
    heroGlow: "bg-[radial-gradient(circle_at_70%_0%,rgba(0,240,255,0.08),transparent_55%)]",
    accentBorder: "border-brand-accent/25",
    experienceBg: "bg-brand-surface/[0.14]",
    experienceLayout: "grid",
    heroLayout: "visual-first",
    outcomeTitle: "Concept direction",
    experienceTitle: "Analytics & reporting surfaces",
    conceptBadge: "CONCEPT PROJECT · FINTECH",
  },
  "medaxis-flow": {
    heroGlow: "bg-[radial-gradient(circle_at_10%_20%,rgba(0,200,215,0.07),transparent_50%)]",
    accentBorder: "border-brand-accent-secondary/30",
    experienceBg: "bg-[#0d121c]",
    experienceLayout: "split",
    heroLayout: "split",
    outcomeTitle: "Prototype direction",
    experienceTitle: "Operations & workflow systems",
    conceptBadge: "CONCEPT PROJECT · OPERATIONS",
  },
  "vanta-commerce": {
    heroGlow: "bg-[radial-gradient(circle_at_50%_100%,rgba(0,240,255,0.06),transparent_45%)]",
    accentBorder: "border-brand-border-light/40",
    experienceBg: "bg-brand-surface/[0.1]",
    experienceLayout: "stack",
    heroLayout: "stacked",
    outcomeTitle: "Experience design concept",
    experienceTitle: "Discovery & conversion flows",
    conceptBadge: "CONCEPT PROJECT · COMMERCE",
  },
};

export function getCaseStudyTheme(project: WorkCaseStudy): CaseStudyTheme {
  return caseStudyThemes[project.slug] ?? caseStudyThemes["northstar-capital"];
}
