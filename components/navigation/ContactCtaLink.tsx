import Link from "next/link";
import { contactHref } from "@/lib/navigation/config";

type ContactCtaLinkProps = {
  className?: string;
  onClick?: () => void;
};

export function ContactCtaLink({ className = "", onClick }: ContactCtaLinkProps) {
  return (
    <Link
      href={contactHref}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-cn-md border border-brand-accent/35 bg-transparent px-5 py-2.5 cn-body-sm font-medium text-brand-text cn-interactive transition-[background-color,box-shadow,border-color] hover:border-brand-accent/60 hover:bg-brand-accent/[0.06] hover:shadow-cn-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent ${className}`}
    >
      Let&apos;s Talk
    </Link>
  );
}
