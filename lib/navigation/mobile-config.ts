import type { LucideIcon } from "lucide-react";
import { BookOpen, House, Layers3, Menu, MessageCircle } from "lucide-react";
import { contactHref } from "@/lib/navigation/config";

export type MobileBottomNavItem = {
  id: string;
  label: string;
  href?: string;
  icon: LucideIcon;
  action?: "menu";
  emphasis?: boolean;
};

export const mobileBottomNavItems: MobileBottomNavItem[] = [
  { id: "home", label: "Home", href: "/", icon: House },
  { id: "services", label: "Services", href: "/services", icon: Layers3 },
  {
    id: "talk",
    label: "Let's Talk",
    href: contactHref,
    icon: MessageCircle,
    emphasis: true,
  },
  { id: "insights", label: "Insights", href: "/insights", icon: BookOpen },
  { id: "menu", label: "Menu", icon: Menu, action: "menu" },
];

export const mobileMenuLinks = [
  { index: "01", label: "Capabilities", href: "/services" },
  { index: "02", label: "Services", href: "/services", expandable: true },
  { index: "03", label: "About", href: "/about" },
  { index: "04", label: "Process", href: "/process" },
  { index: "05", label: "Insights", href: "/insights" },
] as const;
