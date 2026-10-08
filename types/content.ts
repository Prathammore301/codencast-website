export type CtaLink = {
  label: string;
  href: string;
};

export type MockupVariant = "fintech" | "healthcare" | "commerce";

export type WorkProjectSummary = {
  id: string;
  slug: string;
  index: string;
  name: string;
  industry: string;
  title: string;
  description: string;
  tags: string[];
  mockup: MockupVariant;
  layout: "feature" | "offset" | "horizontal";
};

export type CaseStudySection = {
  id: string;
  title: string;
  body: string[];
  list?: string[];
};

export type WorkCaseStudy = WorkProjectSummary & {
  conceptLabel: string;
  heroSupporting: string;
  overview: string[];
  challenge: CaseStudySection;
  approach: CaseStudySection;
  experienceAreas: { title: string; description: string }[];
  thinking: CaseStudySection;
  outcome: CaseStudySection;
  capabilities: string[];
  technologies: string[];
};

export type ServiceSummary = {
  slug: string;
  index: string;
  title: string;
  categoryLabel: string;
  shortDescription: string;
  connection: string;
  keywords: string[];
};

export type ServiceDetail = ServiceSummary & {
  heroSupporting: string;
  whoNeedsIt: string;
  whatWeSolve: CaseStudySection;
  whatWeBuild: CaseStudySection;
  approach: CaseStudySection;
  capabilities: string[];
  technology: string[];
  engagement: string[];
  relatedSlugs: string[];
};

export type ProcessStep = {
  index: string;
  title: string;
  purpose: string;
  activities: string[];
  deliverables: string[];
  next: string;
};

export type InsightArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTimeMinutes: number;
  publishedAt: string;
  introduction: string[];
  sections: { heading?: string; paragraphs: string[] }[];
};

export type PrivacySection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
};
