export type NavLinkItem = {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
};

export type ServiceMenuItem = {
  title: string;
  description: string;
  href: string;
};

export const mainNavLinks: NavLinkItem[] = [
  { label: "Capabilities", href: "/services" },
  { label: "Services", href: "/services", hasMegaMenu: true },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Insights", href: "/insights" },
];

export const serviceMenuItems: ServiceMenuItem[] = [
  {
    title: "Software Development",
    description: "Custom platforms, APIs and business systems.",
    href: "/services/software-development",
  },
  {
    title: "Web Development",
    description: "High-performance websites and web applications.",
    href: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    description: "Product experiences designed for modern devices.",
    href: "/services/mobile-app-development",
  },
  {
    title: "E-commerce",
    description: "Commerce systems built around usability and conversion.",
    href: "/services/ecommerce",
  },
  {
    title: "UI/UX Design",
    description: "Interfaces designed around clarity and user behavior.",
    href: "/services/ui-ux-design",
  },
  {
    title: "SEO & Digital Growth",
    description: "Technical foundations and organic growth strategy.",
    href: "/services/seo-digital-growth",
  },
  {
    title: "Graphic Design",
    description: "Visual systems and digital brand assets.",
    href: "/services/graphic-design",
  },
];

export const contactHref = "/contact";
