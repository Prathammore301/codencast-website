export type ContentStatus = "draft" | "published";

export type CaseStudyPreview = {
  slug: string;
  title: string;
  summary: string;
  services: string[];
  status: ContentStatus;
};
