import Image from "next/image";
import Link from "next/link";

/** Trimmed lockup (emblem + wordmark only) — no tagline or extra canvas */
const NAV_LOGO_WIDTH = 889;
const NAV_LOGO_HEIGHT = 619;

type NavLogoProps = {
  className?: string;
  priority?: boolean;
  /** Taller lockup for footer; compact height for navigation bars */
  variant?: "nav" | "footer";
};

export function NavLogo({
  className = "",
  priority = false,
  variant = "nav",
}: NavLogoProps) {
  const sizeClass =
    variant === "footer"
      ? "h-12 w-auto max-w-[min(100%,14rem)] sm:h-14 sm:max-w-[16rem]"
      : "h-8 w-auto max-w-[min(100%,11rem)] min-[375px]:h-9 min-[375px]:max-w-[12rem] lg:h-10 lg:max-w-[13rem]";

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center cn-interactive"
      aria-label="CodeNCast home"
    >
      <Image
        src="/brand/codencast-logo-nav.png"
        alt="CodeNCast"
        width={NAV_LOGO_WIDTH}
        height={NAV_LOGO_HEIGHT}
        className={`${sizeClass} ${className}`.trim()}
        sizes={
          variant === "footer"
            ? "(max-width: 640px) 180px, 220px"
            : "(max-width: 640px) 120px, 160px"
        }
        priority={priority}
      />
    </Link>
  );
}
