import type { WorkCaseStudy, WorkProjectSummary } from "@/types/content";

const northstar: WorkCaseStudy = {
  id: "northstar",
  slug: "northstar-capital",
  index: "01",
  name: "Northstar Capital",
  industry: "FinTech",
  title: "A clearer operating layer for modern financial teams.",
  description:
    "A financial operations platform concept designed to bring reporting, portfolio visibility and internal workflows into one structured workspace.",
  tags: ["Product Design", "Web Application", "Dashboard"],
  mockup: "fintech",
  layout: "feature",
  conceptLabel: "Concept project",
  heroSupporting:
    "An exploration of how financial teams could monitor portfolios, coordinate reporting and act on operational signals in one calm interface.",
  overview: [
    "Northstar Capital is a concept product for investment and finance operations teams who juggle spreadsheets, legacy tools and disconnected reporting.",
    "The direction focuses on portfolio visibility, allocation context and activity trails — without implying live production data or client deployments.",
  ],
  challenge: {
    id: "challenge",
    title: "Challenge",
    body: [
      "Financial operators often work across fragmented dashboards, manual exports and ad-hoc reporting cycles.",
      "The concept asks: what would a single operating layer look like if clarity and auditability came first?",
    ],
  },
  approach: {
    id: "approach",
    title: "Approach",
    body: [
      "We mapped core jobs — portfolio summary, allocation review, activity monitoring and risk posture — into a modular dashboard architecture.",
      "Information hierarchy prioritises scannable KPIs, trend context and drill-down paths rather than dense tables on first load.",
    ],
    list: [
      "Role-oriented navigation for overview vs. detail workflows",
      "Composable cards for metrics, trends and allocation views",
      "Visual language tuned for trust, precision and low noise",
    ],
  },
  experienceAreas: [
    {
      title: "Portfolio overview",
      description:
        "High-level exposure, liquidity signals and performance trend placeholders designed for at-a-glance orientation.",
    },
    {
      title: "Allocation intelligence",
      description:
        "Structured views for asset mix, rebalancing context and comparative segments — concept UI only.",
    },
    {
      title: "Activity & reporting",
      description:
        "Timeline-style activity feed and export-oriented reporting panels to support operational review.",
    },
  ],
  thinking: {
    id: "thinking",
    title: "Design & engineering thinking",
    body: [
      "The interface is built as a system: repeatable panels, consistent spacing and tokenised colour for status — ready to extend into a real design system.",
      "Engineering direction assumes API-driven metrics, filterable time ranges and permission-aware views without baking in fake integrations.",
    ],
  },
  outcome: {
    id: "outcome",
    title: "Outcome direction",
    body: [
      "This concept demonstrates how CodeNCast approaches complex B2B dashboards: business-first IA, editorial typography and implementation-ready structure.",
      "Prototype direction — designed to show product architecture, UX patterns and visual identity for financial software.",
    ],
  },
  capabilities: [
    "Product UX",
    "Dashboard systems",
    "Design systems",
    "Web application architecture",
    "Data visualisation patterns",
  ],
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "REST / GraphQL-ready APIs",
    "Role-based access (concept)",
  ],
};

const medaxis: WorkCaseStudy = {
  id: "medaxis",
  slug: "medaxis-flow",
  index: "02",
  name: "MedAxis Flow",
  industry: "Healthcare Logistics",
  title: "Turning fragmented healthcare operations into one connected workflow.",
  description:
    "A logistics operations platform concept connecting scheduling, inventory visibility and operational coordination.",
  tags: ["UX/UI", "Operations Platform", "Web Application"],
  mockup: "healthcare",
  layout: "offset",
  conceptLabel: "Concept project",
  heroSupporting:
    "A workflow-centric concept for teams coordinating supplies, schedules and field operations across healthcare logistics.",
  overview: [
    "MedAxis Flow explores an operations hub where scheduling, inventory and task coordination share one timeline-aware workspace.",
    "All scenarios, locations and throughput figures in visuals are illustrative placeholders for UX exploration only.",
  ],
  challenge: {
    id: "challenge",
    title: "Challenge",
    body: [
      "Healthcare logistics teams often rely on phone chains, disconnected spreadsheets and siloed inventory tools.",
      "The concept targets operational clarity: who needs what, where, and by when — without claiming live hospital integrations.",
    ],
  },
  approach: {
    id: "approach",
    title: "Approach",
    body: [
      "We structured the product around daily operational loops: plan → dispatch → track → reconcile.",
      "Each loop gets dedicated surfaces with shared components so teams learn one interaction language.",
    ],
    list: [
      "Schedule board with status-rich rows",
      "Inventory snapshots tied to location context",
      "Exception handling and handoff notes",
    ],
  },
  experienceAreas: [
    {
      title: "Operations schedule",
      description:
        "Shift-aware scheduling with dependency hints and clear ownership per route or site.",
    },
    {
      title: "Inventory visibility",
      description:
        "Stock levels, replenishment cues and location tags — concept data for layout and hierarchy testing.",
    },
    {
      title: "Coordination workspace",
      description:
        "Unified feed for updates, approvals and task completion across roles.",
    },
  ],
  thinking: {
    id: "thinking",
    title: "Design & engineering thinking",
    body: [
      "Accessibility and legibility under pressure informed type scale, contrast and touch-friendly targets on tablet breakpoints.",
      "Backend direction assumes event-sourced updates, audit logs and integration hooks for ERP or warehouse systems in a future build.",
    ],
  },
  outcome: {
    id: "outcome",
    title: "Outcome direction",
    body: [
      "MedAxis Flow shows how CodeNCast connects operational UX with scalable web architecture for regulated, high-stakes environments.",
      "Concept exploration — not a deployed client system.",
    ],
  },
  capabilities: [
    "Workflow UX",
    "Operations dashboards",
    "Responsive web apps",
    "Integration planning",
    "Design systems",
  ],
  technologies: [
    "React",
    "TypeScript",
    "Node.js / Laravel-ready services",
    "Real-time updates (concept)",
    "PostgreSQL / MySQL",
  ],
};

const vanta: WorkCaseStudy = {
  id: "vanta",
  slug: "vanta-commerce",
  index: "03",
  name: "Vanta Commerce",
  industry: "E-commerce",
  title: "A commerce experience designed around discovery and conversion.",
  description:
    "A modern commerce platform concept combining editorial product discovery, structured navigation and a streamlined purchase journey.",
  tags: ["E-commerce", "UX/UI", "Web Development"],
  mockup: "commerce",
  layout: "horizontal",
  conceptLabel: "Concept project",
  heroSupporting:
    "An editorial storefront concept balancing discovery storytelling with a disciplined path to checkout.",
  overview: [
    "Vanta Commerce reimagines a DTC-style catalog where curated collections, product detail and cart flow feel like one continuous experience.",
    "Product imagery and sales metrics in mockups are synthetic — used purely to validate layout and interaction patterns.",
  ],
  challenge: {
    id: "challenge",
    title: "Challenge",
    body: [
      "Many storefronts either feel templated or bury products under generic grids.",
      "This concept asks how discovery, trust and conversion can coexist in a dark, premium visual environment.",
    ],
  },
  approach: {
    id: "approach",
    title: "Approach",
    body: [
      "We paired editorial listing pages with structured filters and a focused product detail template.",
      "Checkout steps were reduced to essentials while preserving reassurance cues — shipping, returns and payment clarity.",
    ],
    list: [
      "Collection-led merchandising zones",
      "PDP with spec clarity and sticky purchase actions",
      "Cart drawer pattern for uninterrupted browsing",
    ],
  },
  experienceAreas: [
    {
      title: "Discovery & collections",
      description:
        "Story-driven listing layouts with flexible media ratios and category cues.",
    },
    {
      title: "Product detail",
      description:
        "Variant selection, specification blocks and trust modules arranged for mobile-first scanning.",
    },
    {
      title: "Checkout journey",
      description:
        "Streamlined steps with progress indication — concept flow for UX validation.",
    },
  ],
  thinking: {
    id: "thinking",
    title: "Design & engineering thinking",
    body: [
      "Commerce performance and SEO foundations were considered alongside UI — semantic structure, image discipline and cart state patterns.",
      "Implementation path supports headless or Shopify-style backends without locking the UI to a single vendor.",
    ],
  },
  outcome: {
    id: "outcome",
    title: "Outcome direction",
    body: [
      "Vanta Commerce demonstrates CodeNCast's commerce UX and front-end engineering direction for brands that want a distinctive digital shelf.",
      "Product architecture concept — not tied to a live storefront.",
    ],
  },
  capabilities: [
    "Commerce UX",
    "Storefront engineering",
    "Conversion-focused UI",
    "Performance-aware front ends",
    "CMS / catalog integration planning",
  ],
  technologies: [
    "Next.js",
    "React",
    "Shopify or custom API (concept)",
    "Tailwind CSS",
    "Edge-friendly caching patterns",
  ],
};

export const workCaseStudies: WorkCaseStudy[] = [northstar, medaxis, vanta];

export const workSlugs = workCaseStudies.map((p) => p.slug);

export function getWorkBySlug(slug: string): WorkCaseStudy | undefined {
  return workCaseStudies.find((p) => p.slug === slug);
}

export function getWorkSummaries(): WorkProjectSummary[] {
  return workCaseStudies.map(
    ({
      id,
      slug,
      index,
      name,
      industry,
      title,
      description,
      tags,
      mockup,
      layout,
    }) => ({
      id,
      slug,
      index,
      name,
      industry,
      title,
      description,
      tags,
      mockup,
      layout,
    }),
  );
}

export const workPageContent = {
  eyebrow: "Concept work",
  title: "Selected work",
  description:
    "A selection of digital products, interfaces and systems designed around real business problems — presented as concept explorations.",
  label: "Concept work",
};
