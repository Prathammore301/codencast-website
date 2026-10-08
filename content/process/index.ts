import type { ProcessStep } from "@/types/content";

export const processPageContent = {
  eyebrow: "Process",
  title: "A clearer path from idea to launch.",
  description:
    "Six connected phases — from understanding the problem to growing what ships.",
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    purpose: "Understand the business, users, constraints and desired outcome.",
    activities: [
      "Stakeholder interviews and context gathering",
      "Review of existing tools, content and data flows",
      "Success criteria and risk identification",
    ],
    deliverables: ["Discovery summary", "Problem framing", "Initial opportunity map"],
    next: "Define scope, priorities and technical direction.",
  },
  {
    index: "02",
    title: "Define",
    purpose: "Translate requirements into scope, architecture and priorities.",
    activities: [
      "Information architecture and feature prioritisation",
      "Technical approach and stack alignment",
      "Milestone planning and dependency mapping",
    ],
    deliverables: ["Scope document", "Architecture outline", "Roadmap and estimates"],
    next: "Design experiences and systems before heavy build.",
  },
  {
    index: "03",
    title: "Design",
    purpose: "Shape the interface, experience and product system before development.",
    activities: [
      "User flows and wireframes",
      "Visual design and responsive layouts",
      "Prototype critical paths for validation",
    ],
    deliverables: ["UX flows", "UI designs or design system tokens", "Build-ready specs"],
    next: "Implement with quality and maintainability.",
  },
  {
    index: "04",
    title: "Build",
    purpose: "Develop the product with scalable architecture and tested components.",
    activities: [
      "Sprint-based implementation",
      "Code review and automated checks where applicable",
      "Integration with CMS, APIs or third-party services",
    ],
    deliverables: ["Working software in staging", "Documentation", "Test notes"],
    next: "Launch with monitoring and a clear handover.",
  },
  {
    index: "05",
    title: "Launch",
    purpose: "Deploy, monitor and refine the product after release.",
    activities: [
      "Production deployment and smoke testing",
      "Analytics and search tooling verification",
      "Training or handover for content and ops teams",
    ],
    deliverables: ["Live environment", "Launch checklist", "Support transition plan"],
    next: "Grow through measurement and iteration.",
  },
  {
    index: "06",
    title: "Grow",
    purpose: "Improve performance, visibility and product fit after launch.",
    activities: [
      "Review analytics and user feedback",
      "SEO and content refinements",
      "Feature iteration and technical debt management",
    ],
    deliverables: ["Optimisation backlog", "Performance reports", "Roadmap updates"],
    next: "Cycle back to Discover when new opportunities emerge.",
  },
];
