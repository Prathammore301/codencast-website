import type { ServiceDetail, ServiceSummary } from "@/types/content";

const sharedApproach = (focus: string): ServiceDetail["approach"] => ({
  id: "approach",
  title: "Our approach",
  body: [
    `We start with how your team works today, then shape ${focus} around maintainable architecture and clear UX.`,
    "Engagements stay transparent: scope, milestones and technical decisions documented as we go.",
  ],
  list: [
    "Discovery workshops and technical assessment",
    "Iterative design and build cycles",
    "Quality checks before launch and handover",
  ],
});

const services: ServiceDetail[] = [
  {
    slug: "software-development",
    index: "01",
    title: "Software Development",
    categoryLabel: "SOFTWARE",
    shortDescription:
      "Custom platforms, APIs and business systems built around how your organisation operates.",
    connection: "Foundation for web apps, mobile clients and long-lived internal operations.",
    keywords: ["APIs", "Internal tools", "Workflows", "Integrations"],
    heroSupporting:
      "Build software around the way your business actually operates.",
    whoNeedsIt:
      "Organisations outgrowing spreadsheets, coordinating teams across tools, or shipping a product that needs a reliable backend.",
    whatWeSolve: {
      id: "solve",
      title: "What we solve",
      body: [
        "Teams outgrow spreadsheets and disconnected tools. We help replace manual loops with structured software.",
        "Focus areas include operational visibility, automation and systems your team can evolve after launch.",
      ],
    },
    whatWeBuild: {
      id: "build",
      title: "What we build",
      body: ["Typical deliverables include:"],
      list: [
        "Custom business systems and admin platforms",
        "REST and integration APIs",
        "Internal tools and workflow automation",
        "Database-driven applications",
        "Maintenance and evolution support",
      ],
    },
    approach: sharedApproach("software"),
    capabilities: [
      "Requirements shaping",
      "System architecture",
      "Backend development",
      "API design",
      "QA and deployment support",
    ],
    technology: ["TypeScript", "Node.js", "Laravel", "PostgreSQL", "MySQL", "Redis"],
    engagement: [
      "Discovery and scoped roadmap",
      "Sprint-based delivery",
      "Launch support and documentation",
    ],
    relatedSlugs: ["web-development", "ui-ux-design", "mobile-app-development"],
  },
  {
    slug: "web-development",
    index: "02",
    title: "Web Development",
    categoryLabel: "WEB",
    shortDescription:
      "High-performance marketing sites, business websites and web applications with solid foundations.",
    connection: "Pairs with UI/UX, SEO foundations and software APIs when products grow beyond marketing pages.",
    keywords: ["Marketing sites", "Web apps", "CMS", "Performance"],
    heroSupporting:
      "Websites and web applications engineered for clarity, speed and long-term maintainability.",
    whoNeedsIt:
      "Businesses launching or rebuilding a public site, portal, or web app where performance and maintainability matter.",
    whatWeSolve: {
      id: "solve",
      title: "What we solve",
      body: [
        "Brands need web experiences that load fast, communicate clearly and integrate with the rest of the stack.",
        "We bridge design intent and production-quality front ends without unnecessary complexity.",
      ],
    },
    whatWeBuild: {
      id: "build",
      title: "What we build",
      body: ["Engagements often include:"],
      list: [
        "Marketing and business websites",
        "Web applications and authenticated portals",
        "CMS-driven platforms",
        "Performance and accessibility improvements",
        "SEO-ready technical foundations",
      ],
    },
    approach: sharedApproach("web products"),
    capabilities: [
      "Front-end engineering",
      "CMS integration",
      "Responsive systems",
      "Performance optimisation",
      "Deployment pipelines",
    ],
    technology: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WordPress", "Headless CMS"],
    engagement: ["Content and IA planning", "Design-to-build", "Launch and monitoring setup"],
    relatedSlugs: ["ui-ux-design", "seo-digital-growth", "software-development"],
  },
  {
    slug: "mobile-app-development",
    index: "03",
    title: "Mobile App Development",
    categoryLabel: "MOBILE",
    shortDescription:
      "Mobile product experiences for iOS and Android with thoughtful workflows and reliable integrations.",
    connection: "Extends software platforms and design systems into device-native workflows.",
    keywords: ["iOS", "Android", "Cross-platform", "APIs"],
    heroSupporting:
      "Mobile experiences shaped around real user journeys — not screen quotas.",
    whoNeedsIt:
      "Product teams who need field, customer, or staff workflows on phones and tablets with dependable API sync.",
    whatWeSolve: {
      id: "solve",
      title: "What we solve",
      body: [
        "Mobile products must feel native, stay performant and stay in sync with your backend truth.",
        "We help teams ship focused apps that match how people actually use devices in context.",
      ],
    },
    whatWeBuild: {
      id: "build",
      title: "What we build",
      body: ["We can help with:"],
      list: [
        "iOS and Android product experiences",
        "Cross-platform applications where appropriate",
        "API integration and offline-aware flows",
        "Authentication and role-based experiences",
      ],
    },
    approach: sharedApproach("mobile products"),
    capabilities: [
      "Product UX for mobile",
      "Cross-platform engineering",
      "API integration",
      "Release coordination",
    ],
    technology: ["React Native", "Expo", "REST APIs", "Push notifications", "App store release process"],
    engagement: ["Prototype or MVP scope", "Iterative releases", "Store submission support"],
    relatedSlugs: ["software-development", "ui-ux-design", "web-development"],
  },
  {
    slug: "ecommerce",
    index: "04",
    title: "E-commerce",
    categoryLabel: "COMMERCE",
    shortDescription:
      "Commerce experiences built around discovery, checkout clarity and sustainable catalog operations.",
    connection: "Links storefront UX with web engineering, design and SEO for full-funnel clarity.",
    keywords: ["Shopify", "Custom commerce", "Conversion", "Catalog"],
    heroSupporting:
      "Commerce systems that respect both the buyer journey and the team running the store.",
    whoNeedsIt:
      "Brands selling online who need clearer merchandising, checkout, platform choice, or custom storefront engineering.",
    whatWeSolve: {
      id: "solve",
      title: "What we solve",
      body: [
        "Stores need more than a theme — they need merchandising logic, performance and integrations that scale.",
        "We align UX, engineering and platform choice with how you sell and fulfil.",
      ],
    },
    whatWeBuild: {
      id: "build",
      title: "What we build",
      body: ["Common focus areas:"],
      list: [
        "Shopify storefronts and customisations",
        "Custom commerce front ends",
        "Product discovery and collection UX",
        "Checkout and conversion improvements",
        "Commerce integrations and ops tooling",
      ],
    },
    approach: sharedApproach("commerce experiences"),
    capabilities: [
      "Storefront UX",
      "Platform selection guidance",
      "Checkout optimisation",
      "Catalog structure",
      "Integration planning",
    ],
    technology: ["Shopify", "Next.js", "Hydrogen-ready patterns", "Payment gateways", "ERP / WMS hooks"],
    engagement: ["Platform assessment", "Design and build", "Launch and optimisation roadmap"],
    relatedSlugs: ["web-development", "ui-ux-design", "seo-digital-growth"],
  },
  {
    slug: "ui-ux-design",
    index: "05",
    title: "UI/UX Design",
    categoryLabel: "DESIGN",
    shortDescription:
      "Research-informed interfaces, design systems and prototypes that translate cleanly into development.",
    connection: "Upstream of development — keeps web, mobile and software builds aligned with real user flows.",
    keywords: ["Product UX", "Design systems", "Prototyping", "UI"],
    heroSupporting:
      "Interfaces designed around clarity, behaviour and systems your engineers can implement.",
    whoNeedsIt:
      "Teams shaping a new product, redesigning a complex tool, or needing a system engineers can implement without guesswork.",
    whatWeSolve: {
      id: "solve",
      title: "What we solve",
      body: [
        "Products fail when UX is treated as polish at the end. We embed design early so flows stay coherent.",
        "We help teams align stakeholders around tangible prototypes before heavy build investment.",
      ],
    },
    whatWeBuild: {
      id: "build",
      title: "What we build",
      body: ["Deliverables may include:"],
      list: [
        "Product UX and user flows",
        "Interface design and responsive layouts",
        "Design systems and component libraries",
        "Interactive prototypes",
        "Handoff documentation for engineering",
      ],
    },
    approach: sharedApproach("product design"),
    capabilities: [
      "UX research lite / stakeholder interviews",
      "Wireframing",
      "Visual design",
      "Design systems",
      "Developer collaboration",
    ],
    technology: ["Figma", "Design tokens", "Accessibility guidelines", "Component specs"],
    engagement: ["Discovery and UX mapping", "Design sprints", "Build-phase design support"],
    relatedSlugs: ["web-development", "software-development", "graphic-design"],
  },
  {
    slug: "seo-digital-growth",
    index: "06",
    title: "SEO & Digital Growth",
    categoryLabel: "GROWTH",
    shortDescription:
      "Technical SEO, content architecture and measurement foundations for sustainable organic visibility.",
    connection: "Extends web and commerce launches with indexability, structure and analytics discipline.",
    keywords: ["Technical SEO", "Content IA", "Analytics", "Local SEO"],
    heroSupporting:
      "Growth work grounded in crawlable architecture, useful content and measurable baselines.",
    whoNeedsIt:
      "Sites preparing for launch or replatforming who need technical SEO, content structure and measurement — not vague promises.",
    whatWeSolve: {
      id: "solve",
      title: "What we solve",
      body: [
        "Sites launch without indexability basics, structured content or analytics discipline.",
        "We establish foundations so future content and product work can compound — without promising unrealistic rankings.",
      ],
    },
    whatWeBuild: {
      id: "build",
      title: "What we build",
      body: ["Typical scope includes:"],
      list: [
        "Technical SEO audits and fixes",
        "On-page and metadata frameworks",
        "Content architecture and internal linking patterns",
        "Local SEO setup where relevant",
        "Analytics and search console foundations",
      ],
    },
    approach: sharedApproach("organic growth systems"),
    capabilities: [
      "Technical audits",
      "Site structure planning",
      "Content templates",
      "Performance-related SEO",
      "Reporting setup",
    ],
    technology: ["Google Search Console", "Analytics", "Structured data", "Next.js / CMS SEO patterns"],
    engagement: ["Baseline audit", "Implementation roadmap", "Ongoing optimisation cycles"],
    relatedSlugs: ["web-development", "ecommerce", "graphic-design"],
  },
  {
    slug: "graphic-design",
    index: "07",
    title: "Graphic Design",
    categoryLabel: "BRAND",
    shortDescription:
      "Visual systems and campaign assets that stay coherent across product and marketing touchpoints.",
    connection: "Supports marketing, product launches and campaigns alongside UI and web work.",
    keywords: ["Brand assets", "Campaigns", "Social", "Visual systems"],
    heroSupporting:
      "Graphic design that supports your product and marketing story — not generic template filler.",
    whoNeedsIt:
      "Teams needing campaign assets, social visuals, or document templates that match the quality of their digital product.",
    whatWeSolve: {
      id: "solve",
      title: "What we solve",
      body: [
        "Teams need assets that match the quality of their digital product — quickly, and on-brand.",
        "We create visual systems that designers and developers can reuse.",
      ],
    },
    whatWeBuild: {
      id: "build",
      title: "What we build",
      body: ["We produce:"],
      list: [
        "Brand and marketing graphics",
        "Digital campaign creative",
        "Social and content assets",
        "Presentation and document templates",
        "Visual guidelines for digital channels",
      ],
    },
    approach: sharedApproach("visual communication"),
    capabilities: [
      "Art direction",
      "Layout and typography",
      "Asset production",
      "Template systems",
    ],
    technology: ["Figma", "Adobe Creative Suite", "Export pipelines for web"],
    engagement: ["Creative brief", "Concept rounds", "Asset delivery and guidelines"],
    relatedSlugs: ["ui-ux-design", "web-development", "seo-digital-growth"],
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceSummaries(): ServiceSummary[] {
  return services.map(
    ({
      slug,
      index,
      title,
      categoryLabel,
      shortDescription,
      connection,
      keywords,
    }) => ({
      slug,
      index,
      title,
      categoryLabel,
      shortDescription,
      connection,
      keywords,
    }),
  );
}

export const servicesPageContent = {
  eyebrow: "Services",
  title: "What we build",
  description:
    "From software engineering to digital growth, we bring the disciplines behind a digital product into one connected workflow.",
};
