import type { PrivacySection } from "@/types/content";

export const privacyPageContent = {
  title: "Privacy Policy",
  description:
    "How CodeNCast may collect, use and protect information when you interact with this website.",
  lastUpdated: "2026-04-08",
};

export const privacySections: PrivacySection[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      "This Privacy Policy describes how CodeNCast (“we”, “us”) may handle information when you visit our website or submit an enquiry.",
      "If you do not agree with this policy, please refrain from using the site or submitting personal data through our forms.",
    ],
  },
  {
    id: "collect",
    title: "Information we may collect",
    paragraphs: ["Depending on how you interact with the site, we may collect:"],
    list: [
      "Contact details you provide (such as name, email address and company name)",
      "Project-related information you choose to share in enquiry forms",
      "Technical data such as browser type, device information and approximate location derived from IP address",
      "Usage data such as pages visited and referral sources, via analytics tools",
    ],
  },
  {
    id: "use",
    title: "How information is used",
    paragraphs: ["We may use collected information to:"],
    list: [
      "Respond to enquiries and communicate about potential projects",
      "Operate, maintain and improve the website",
      "Understand aggregate usage patterns and fix technical issues",
      "Comply with applicable legal obligations",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    paragraphs: [
      "We may use cookies and similar technologies for essential site functionality, preferences and analytics.",
      "You can control cookies through your browser settings. Disabling cookies may affect certain features.",
    ],
  },
  {
    id: "third-party",
    title: "Third-party services",
    paragraphs: [
      "We may rely on third-party providers for hosting, analytics, fonts or form processing. Those providers process data according to their own policies.",
      "We do not sell personal information. We share data only as needed to operate the site or respond to your requests.",
    ],
  },
  {
    id: "retention",
    title: "Data retention",
    paragraphs: [
      "We retain enquiry information for as long as needed to respond, maintain business records or meet legal requirements, then delete or anonymise it where appropriate.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "For privacy-related questions, contact us using the enquiry form on this website and mark your message as a privacy request.",
      "We will update this policy when practices change. The “last updated” date at the top reflects the latest revision.",
    ],
  },
];
