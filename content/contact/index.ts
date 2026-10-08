export const contactPageContent = {
  eyebrow: "Contact",
  title: "Let's build something worth using.",
  description:
    "Tell us what you're trying to build, improve or launch. We'll help turn the idea into a practical next step.",
  emailNote:
    "Prefer email? Share your project context at the address you use for business enquiries — we respond to every serious brief.",
  locationNote:
    "CodeNCast works with clients remotely. Share your timezone and preferred communication channels in the form.",
};

export const projectTypeOptions = [
  "Software Development",
  "Website",
  "Mobile App",
  "E-commerce",
  "UI/UX Design",
  "SEO & Digital Growth",
  "Graphic Design",
  "Other",
] as const;

export const budgetRangeOptions = [
  { value: "under-5k", label: "Under ₹5L (estimate)" },
  { value: "5k-15k", label: "₹5L – ₹15L (estimate)" },
  { value: "15k-40k", label: "₹15L – ₹40L (estimate)" },
  { value: "40k-plus", label: "₹40L+ (estimate)" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const timelineOptions = [
  "ASAP",
  "1–2 months",
  "2–4 months",
  "4+ months",
  "Exploring",
] as const;
