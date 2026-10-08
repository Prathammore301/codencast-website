import Image from "next/image";
import Link from "next/link";

type NavLogoProps = {
  className?: string;
  priority?: boolean;
};

export function NavLogo({ className = "", priority = false }: NavLogoProps) {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center cn-interactive"
      aria-label="CodeNCast home"
    >
      <Image
        src="/brand/codencast-logo.png"
        alt="CodeNCast"
        width={148}
        height={40}
        className={`h-9 w-auto ${className}`}
        priority={priority}
      />
    </Link>
  );
}
