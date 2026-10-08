import type { InsightArticle } from "@/types/content";

export const insightArticles: InsightArticle[] = [
  {
    slug: "plan-business-website-before-development",
    category: "Insight",
    title: "How to plan a business website before development starts",
    excerpt:
      "Structure, content and technical decisions made early reduce rework and help your site support sales and operations from day one.",
    readTimeMinutes: 7,
    publishedAt: "2026-02-10",
    introduction: [
      "A business website is rarely “just pages.” It carries positioning, lead capture, support content and often integrations with CRM or booking tools.",
      "Planning before development means aligning stakeholders on what the site must do — not only how it should look.",
    ],
    sections: [
      {
        heading: "Start with outcomes, not page count",
        paragraphs: [
          "List the jobs the site must perform: explain the offer, build trust, capture enquiries, support SEO, or host product documentation.",
          "Those jobs drive information architecture more reliably than copying a competitor sitemap.",
        ],
      },
      {
        heading: "Map content early",
        paragraphs: [
          "Draft real headings and key messages for core pages, even if copy is rough. Design and development both depend on content hierarchy.",
          "Identify gaps — case studies, FAQs, policies — before build so launch is not blocked by missing assets.",
        ],
      },
      {
        heading: "Choose the right technical foundation",
        paragraphs: [
          "Marketing sites may suit a CMS; authenticated portals need application architecture. Match the stack to editability, performance and future features.",
          "Document non-functional needs: accessibility, analytics, forms, localisation and hosting constraints.",
        ],
      },
      {
        heading: "Define success before launch",
        paragraphs: [
          "Agree on baseline metrics: form submissions, key page engagement, search impressions or support deflection.",
          "A short post-launch review plan keeps the site evolving instead of freezing on day one.",
        ],
      },
      {
        heading: "Takeaway",
        paragraphs: [
          "A week spent on outcomes, content and technical constraints before design saves multiple weeks of rework during development.",
          "Bring a sitemap sketch and real copy outlines to your first studio conversation — not a blank brief.",
        ],
      },
    ],
  },
  {
    slug: "website-vs-web-application",
    category: "Insight",
    title: "Website vs web application: what does your business actually need?",
    excerpt:
      "The line between marketing site and web app blurs — here is a practical way to decide scope, stack and budget.",
    readTimeMinutes: 6,
    publishedAt: "2026-02-18",
    introduction: [
      "Teams often ask for a “website” when they need logged-in workflows, or request a “platform” when a focused marketing site would suffice.",
      "Clarifying the distinction early protects timeline and architecture choices.",
    ],
    sections: [
      {
        heading: "Websites: communication and conversion",
        paragraphs: [
          "Websites prioritise public content, fast delivery and editorial updates. Authentication, if any, is light — client portals or member areas are exceptions, not the core.",
        ],
      },
      {
        heading: "Web applications: stateful workflows",
        paragraphs: [
          "Web apps manage data, roles and multi-step processes. They need robust backends, testing and ongoing evolution — budget accordingly.",
        ],
      },
      {
        heading: "Hybrid patterns",
        paragraphs: [
          "Many businesses start with a marketing site plus a separate admin or customer app. Shared design systems keep the experience coherent.",
        ],
      },
      {
        heading: "Questions to ask",
        paragraphs: [
          "Do users need accounts? Will data change per user? Are there compliance or audit requirements? Affirmative answers push toward application architecture.",
        ],
      },
      {
        heading: "Takeaway",
        paragraphs: [
          "Name the product type honestly early — website, app, or hybrid — so scope, stack and budget stay aligned.",
          "If workflows are multi-step and data-heavy, plan for application architecture from the start.",
        ],
      },
    ],
  },
  {
    slug: "product-design-before-development",
    category: "Insight",
    title: "Why product design should happen before development",
    excerpt:
      "Design upfront aligns teams on flows, edge cases and implementation scope — saving costlier changes later in the build.",
    readTimeMinutes: 5,
    publishedAt: "2026-03-01",
    introduction: [
      "Shipping faster is not the same as skipping design. Without shared UX artefacts, engineering still makes product decisions — just less visibly.",
    ],
    sections: [
      {
        heading: "Shared language",
        paragraphs: [
          "Wireframes and prototypes give stakeholders something concrete to react to before code is sunk.",
        ],
      },
      {
        heading: "Edge cases surface early",
        paragraphs: [
          "Empty states, errors, permissions and mobile breakpoints are cheaper to resolve in design tools than in production refactors.",
        ],
      },
      {
        heading: "Better estimates",
        paragraphs: [
          "Developers estimate against defined screens and states, reducing scope creep from “we assumed it would work like…”",
        ],
      },
      {
        heading: "Takeaway",
        paragraphs: [
          "Design is how you de-risk build cost — not a cosmetic layer added after estimates are signed.",
          "Even a focused prototype of critical flows improves build quality and team alignment.",
        ],
      },
    ],
  },
  {
    slug: "technical-seo-foundations-new-website",
    category: "Insight",
    title: "Technical SEO foundations for a new website",
    excerpt:
      "Indexability, structure and performance basics that belong in the first release — not a later audit.",
    readTimeMinutes: 8,
    publishedAt: "2026-03-12",
    introduction: [
      "Technical SEO is infrastructure. Treat it like accessibility or security: easier to embed at launch than to retrofit under pressure.",
    ],
    sections: [
      {
        heading: "Crawlability and metadata",
        paragraphs: [
          "Unique titles and descriptions, sensible heading hierarchy, canonical URLs and a clean robots strategy prevent common launch issues.",
        ],
      },
      {
        heading: "Site structure",
        paragraphs: [
          "Logical URL patterns, internal linking and breadcrumb-style hierarchy help users and search engines understand priority pages.",
        ],
      },
      {
        heading: "Performance and media",
        paragraphs: [
          "Optimised images, stable layout and fast core paths support both UX and crawl budget on larger sites.",
        ],
      },
      {
        heading: "Measurement",
        paragraphs: [
          "Search Console and analytics should be configured pre-launch so you can compare against a real baseline.",
        ],
      },
      {
        heading: "Takeaway",
        paragraphs: [
          "Technical SEO belongs in the launch checklist — metadata, structure, performance and measurement — not a post-launch patch list.",
          "Fix indexability before you invest heavily in new content pages.",
        ],
      },
    ],
  },
  {
    slug: "shopify-vs-custom-ecommerce",
    category: "Insight",
    title: "Choosing Shopify vs custom e-commerce development",
    excerpt:
      "Platform fit depends on catalog complexity, integrations, team skills and how custom the buyer experience must be.",
    readTimeMinutes: 7,
    publishedAt: "2026-03-22",
    introduction: [
      "Shopify excels at speed-to-market and operations; custom builds shine when UX, integrations or catalog logic are highly specific.",
    ],
    sections: [
      {
        heading: "When Shopify fits",
        paragraphs: [
          "Standard catalog, established payment and fulfilment flows, and a team that will manage merchandising in admin — Shopify is often the pragmatic choice.",
        ],
      },
      {
        heading: "When custom makes sense",
        paragraphs: [
          "Unique discovery models, heavy B2B pricing, deep ERP coupling or a brand experience that breaks template constraints may justify a custom front end with a commerce API.",
        ],
      },
      {
        heading: "Hybrid approaches",
        paragraphs: [
          "Headless Shopify or composable APIs can balance flexibility with operational tooling — at the cost of more engineering ownership.",
        ],
      },
      {
        heading: "Takeaway",
        paragraphs: [
          "Choose Shopify when operations and speed matter most; choose custom when the buying experience or integrations are the differentiator.",
          "Decide based on catalog complexity and who will run the store day to day — not platform hype.",
        ],
      },
    ],
  },
  {
    slug: "manual-workflow-into-software",
    category: "Insight",
    title: "How to turn a manual business workflow into software",
    excerpt:
      "A practical path from spreadsheets and inbox loops to a system your team will actually adopt.",
    readTimeMinutes: 9,
    publishedAt: "2026-04-02",
    introduction: [
      "Software projects fail when they digitise chaos instead of simplifying the workflow. Start by observing how work really moves today.",
    ],
    sections: [
      {
        heading: "Document the current state",
        paragraphs: [
          "Map steps, handoffs, exceptions and data sources. Name owners and artefacts — forms, sheets, messages — without judging tools yet.",
        ],
      },
      {
        heading: "Find the smallest valuable system",
        paragraphs: [
          "Replace the highest-friction loop first. A narrow internal tool that saves daily time builds trust for phase two.",
        ],
      },
      {
        heading: "Design for adoption",
        paragraphs: [
          "Match UI to mental models teams already use. Training burden drops when software mirrors familiar statuses and vocabulary.",
        ],
      },
      {
        heading: "Plan for evolution",
        paragraphs: [
          "Leave hooks for reporting, integrations and permissions so the first release is a foundation — not a dead end.",
        ],
      },
      {
        heading: "Takeaway",
        paragraphs: [
          "Software adoption follows simplified workflows — map the real process first, then automate the highest-friction loop.",
          "Ship a narrow internal tool that teams use daily before expanding scope.",
        ],
      },
    ],
  },
];

export function getAllInsightSlugs(): string[] {
  return insightArticles.map((a) => a.slug);
}

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insightArticles.find((a) => a.slug === slug);
}

export const insightCategories = [
  "Websites",
  "Software",
  "Product design",
  "SEO",
  "Commerce",
  "Operations",
] as const;

export const insightsPageContent = {
  eyebrow: "Insights",
  title: "Perspectives on building digital products",
  description:
    "Evergreen notes on websites, software, design and growth — written for teams planning their next build.",
};
