"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
};

export function NavLink({ href, label, className = "", onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-flex items-center px-1 py-2 cn-body-sm text-brand-text cn-interactive ${className}`}
      aria-current={isActive ? "page" : undefined}
    >
      <span className="relative">
        {label}
        <span
          aria-hidden
          className={`absolute -bottom-1 left-0 h-px bg-brand-accent transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100 group-focus-visible:w-full group-focus-visible:opacity-100"
          }`}
        />
        <span
          aria-hidden
          className={`absolute -bottom-2.5 left-0 size-1 rounded-full bg-brand-accent transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-70 group-focus-visible:opacity-70"
          }`}
        />
      </span>
    </Link>
  );
}
