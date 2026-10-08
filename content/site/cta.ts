import type { CtaLink } from "@/types/content";

export const defaultPageCta = {
  eyebrow: "Have a product in mind?",
  headlineLines: ["Let's build something", "worth using."] as const,
  supporting:
    "Tell us what you're trying to build, improve or launch. We'll help turn the idea into a practical next step.",
  primaryCta: { label: "Start a project", href: "/contact" } satisfies CtaLink,
  secondaryCta: { label: "View our process", href: "/process" } satisfies CtaLink,
};
