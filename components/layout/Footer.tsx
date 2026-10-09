import Link from "next/link";
import { NavLogo } from "@/components/navigation/NavLogo";
import { contactHref, mainNavLinks, serviceMenuItems } from "@/lib/navigation/config";

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-bg max-lg:pb-2">
      <div className="cn-container py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="lg:col-span-4 xl:col-span-5">
            <NavLogo variant="footer" />
            <p className="mt-6 max-w-md cn-body-lg text-brand-muted">
              Digital products, software and growth systems for businesses ready
              to build better.
            </p>
            <p className="mt-8 cn-tech-label leading-relaxed text-brand-muted-secondary">
              BUILDING SOLUTIONS,
              <br />
              EMPOWERING FUTURES.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-2 lg:gap-10">
            <div>
              <p className="cn-tech-label text-brand-accent-secondary">Navigation</p>
              <ul className="mt-5 space-y-3.5">
                {mainNavLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-11 items-center cn-body-md text-brand-muted cn-interactive hover:text-brand-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={contactHref}
                    className="inline-flex min-h-11 items-center cn-body-md text-brand-muted cn-interactive hover:text-brand-text"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="cn-tech-label text-brand-accent-secondary">Services</p>
              <ul className="mt-5 space-y-3.5">
                {serviceMenuItems.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="inline-flex min-h-11 items-center cn-body-md text-brand-muted cn-interactive hover:text-brand-text"
                    >
                      {service.title === "Mobile App Development"
                        ? "Mobile Apps"
                        : service.title === "UI/UX Design"
                          ? "UI/UX"
                          : service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="cn-tech-label text-brand-accent-secondary">Connect</p>
            <p className="mt-5 cn-body-md text-brand-muted">
              Social profiles will be linked here when published. For now, use the{" "}
              <Link href={contactHref} className="text-brand-text cn-interactive hover:text-brand-accent">
                contact form
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-brand-border pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-14">
          <p className="cn-caption text-brand-muted-secondary">
            © 2026 CodeNCast Pvt Ltd. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="inline-flex min-h-11 items-center cn-caption text-brand-muted cn-interactive hover:text-brand-text"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
