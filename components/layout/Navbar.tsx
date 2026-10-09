"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ContactCtaLink } from "@/components/navigation/ContactCtaLink";
import { DesktopNav } from "@/components/navigation/DesktopNav";
import { MobileNav } from "@/components/navigation/MobileNav";
import { NavLogo } from "@/components/navigation/NavLogo";
import { useScrollLock } from "@/lib/hooks/useScrollLock";

const SCROLL_THRESHOLD = 12;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useScrollLock(mobileMenuOpen);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- close mobile menu after client navigation
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] max-lg:border-b max-lg:border-brand-border max-lg:bg-brand-bg/92 max-lg:backdrop-blur-md max-lg:shadow-cn-sm ${
          scrolled
            ? "lg:border-b lg:border-brand-border lg:bg-brand-bg/75 lg:shadow-cn-sm lg:backdrop-blur-md"
            : "lg:border-b lg:border-transparent lg:bg-transparent"
        }`}
      >
        <div
          className={`cn-container transition-[height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] max-lg:h-14 ${
            scrolled ? "lg:h-[4.25rem]" : "lg:h-20"
          }`}
        >
          <div className="hidden h-full items-center lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-8">
            <div className="flex items-center">
              <NavLogo priority />
            </div>
            <DesktopNav />
            <div className="flex items-center justify-end">
              <ContactCtaLink />
            </div>
          </div>

          <div className="flex h-full items-center justify-center lg:hidden">
            <NavLogo priority />
          </div>
        </div>
      </header>

      <MobileNav menuOpen={mobileMenuOpen} onMenuOpenChange={setMobileMenuOpen} />
    </>
  );
}
