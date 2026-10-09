"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import { ContactCtaLink } from "@/components/navigation/ContactCtaLink";
import { serviceMenuItems } from "@/lib/navigation/config";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";
import {
  mobileBottomNavItems,
  mobileMenuLinks,
} from "@/lib/navigation/mobile-config";

type MobileNavProps = {
  menuOpen: boolean;
  onMenuOpenChange: (open: boolean) => void;
};

export function MobileNav({ menuOpen, onMenuOpenChange }: MobileNavProps) {
  const pathname = usePathname();
  const menuId = useId();
  const panelRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [servicesExpanded, setServicesExpanded] = useState(false);

  const closeMenu = useCallback(() => {
    setServicesExpanded(false);
    onMenuOpenChange(false);
  }, [onMenuOpenChange]);

  const toggleMenu = useCallback(() => {
    if (menuOpen) {
      closeMenu();
      return;
    }
    onMenuOpenChange(true);
  }, [closeMenu, menuOpen, onMenuOpenChange]);

  useEffect(() => {
    if (!menuOpen || !panelRef.current) {
      return;
    }

    const focusable = panelRef.current.querySelector<HTMLElement>(
      'button, a, [tabindex]:not([tabindex="-1"])',
    );
    focusable?.focus();
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isContactRoute = isActiveRoute("/contact");

  const tabLabelClass =
    "text-[0.625rem] font-medium leading-[1.15] tracking-[0.01em] min-[375px]:text-xs";

  const panelMotion = reducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: 12, scale: 0.985 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 8, scale: 0.99 },
      };

  const itemMotion = reducedMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } };

  const menuPanel = mounted
    ? createPortal(
        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              key="mobile-menu-layer"
              className="fixed inset-0 z-[70] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reducedMotion ? 0.01 : 0.2 }}
            >
              <button
                type="button"
                aria-label="Close navigation menu"
                className="absolute inset-0 bg-brand-bg/55 backdrop-blur-[2px]"
                onClick={closeMenu}
              />

              <motion.nav
                ref={panelRef}
                id={`${menuId}-panel`}
                aria-label="Mobile navigation menu"
                className="absolute inset-x-3 top-[calc(3.75rem+env(safe-area-inset-top,0px))] bottom-[calc(4.75rem+env(safe-area-inset-bottom,0px)+0.75rem)] overflow-y-auto overscroll-contain rounded-cn-lg border border-brand-border bg-brand-surface-elevated shadow-cn-lg"
                {...panelMotion}
                transition={{ duration: reducedMotion ? 0.01 : 0.26, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center justify-between border-b border-brand-border px-5 py-4">
                  <p className="cn-tech-label text-brand-accent-secondary">Navigation</p>
                  <button
                    type="button"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-cn-md border border-brand-border bg-brand-bg/60 cn-interactive"
                    aria-label="Close menu"
                    onClick={closeMenu}
                  >
                    <span aria-hidden className="cn-body-md text-brand-muted">
                      ×
                    </span>
                  </button>
                </div>

                <ul className="px-5 py-4">
                  {mobileMenuLinks.map((item, index) => (
                    <motion.li
                      key={item.label}
                      {...itemMotion}
                      transition={{
                        delay: reducedMotion ? 0 : index * 0.05,
                        duration: 0.22,
                      }}
                      className="border-b border-brand-border/80 last:border-b-0"
                    >
                      {"expandable" in item && item.expandable ? (
                        <>
                          <button
                            type="button"
                            className="flex w-full min-h-11 items-center justify-between gap-4 py-4 text-left"
                            aria-expanded={servicesExpanded}
                            aria-controls={`${menuId}-services-list`}
                            onClick={() => setServicesExpanded((value) => !value)}
                          >
                            <span className="flex items-baseline gap-4">
                              <span className="cn-tech-label text-brand-muted-secondary">
                                {item.index}
                              </span>
                              <span className="cn-heading-md text-brand-text">
                                {item.label}
                              </span>
                            </span>
                            <span
                              aria-hidden
                              className={`cn-tech-label text-brand-accent-secondary transition-transform ${
                                servicesExpanded ? "rotate-180" : ""
                              }`}
                            >
                              ↓
                            </span>
                          </button>

                          <AnimatePresence initial={false}>
                            {servicesExpanded ? (
                              <motion.ul
                                id={`${menuId}-services-list`}
                                initial={
                                  reducedMotion ? false : { height: 0, opacity: 0 }
                                }
                                animate={{ height: "auto", opacity: 1 }}
                                exit={
                                  reducedMotion ? undefined : { height: 0, opacity: 0 }
                                }
                                transition={{
                                  duration: reducedMotion ? 0.01 : 0.24,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                                className="overflow-hidden pb-2"
                              >
                                {serviceMenuItems.map((service, subIndex) => (
                                  <motion.li
                                    key={service.href}
                                    {...itemMotion}
                                    transition={{
                                      delay: reducedMotion ? 0 : subIndex * 0.03,
                                      duration: 0.2,
                                    }}
                                  >
                                    <Link
                                      href={service.href}
                                      className="block min-h-11 border-t border-brand-border/60 py-3 pl-10 cn-body-sm text-brand-muted cn-interactive hover:text-brand-text"
                                      onClick={closeMenu}
                                    >
                                      {service.title}
                                    </Link>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            ) : null}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex min-h-11 items-center gap-4 py-4 cn-interactive"
                          onClick={closeMenu}
                        >
                          <span className="cn-tech-label text-brand-muted-secondary">
                            {item.index}
                          </span>
                          <span className="cn-heading-md text-brand-text hover:text-brand-accent">
                            {item.label}
                          </span>
                        </Link>
                      )}
                    </motion.li>
                  ))}

                  <motion.li
                    {...itemMotion}
                    transition={{ delay: reducedMotion ? 0 : 0.28, duration: 0.22 }}
                    className="pt-6"
                  >
                    <ContactCtaLink className="w-full" onClick={closeMenu} />
                  </motion.li>
                </ul>
              </motion.nav>
            </motion.div>
          ) : null}
        </AnimatePresence>,
        document.body,
      )
    : null;

  return (
    <>
      <nav
        aria-label="Mobile bottom navigation"
        className="fixed inset-x-0 bottom-0 z-[60] lg:hidden"
        style={{
          paddingBottom: "max(env(safe-area-inset-bottom, 0px), 0.625rem)",
        }}
      >
        <div className="cn-container px-3 pb-1 min-[375px]:px-4">
          <div className="relative mx-auto max-w-[26rem] rounded-[1.125rem] border border-brand-border bg-brand-surface/92 px-1.5 pb-2 pt-2.5 shadow-cn-lg backdrop-blur-lg min-[375px]:rounded-cn-xl min-[375px]:px-2 min-[375px]:pb-2.5 min-[375px]:pt-3">
            <ul className="grid grid-cols-5 items-end">
              {mobileBottomNavItems.map((item) => {
                const Icon = item.icon;
                const isMenu = item.action === "menu";
                const isTabActive =
                  !item.emphasis &&
                  (isMenu
                    ? menuOpen
                    : item.href
                      ? isActiveRoute(item.href)
                      : false);

                if (item.emphasis && item.href) {
                  return (
                    <li key={item.id} className="relative flex justify-center pb-0.5">
                      <Link
                        href={item.href}
                        aria-label="Let's Talk"
                        aria-current={isContactRoute ? "page" : undefined}
                        className="group relative -mt-6 flex min-w-0 flex-col items-center justify-end min-[375px]:-mt-7"
                        onClick={() => onMenuOpenChange(false)}
                      >
                        <span
                          className={`flex size-[3.25rem] items-center justify-center rounded-full border bg-brand-accent text-brand-bg shadow-cn-md cn-interactive min-[375px]:size-14 ${
                            isContactRoute
                              ? "border-brand-accent ring-2 ring-brand-accent/35"
                              : "border-brand-accent/45 group-hover:border-brand-accent/70 group-hover:shadow-cn-glow"
                          }`}
                        >
                          <Icon
                            className="size-[1.125rem] min-[375px]:size-5"
                            strokeWidth={1.85}
                            aria-hidden
                          />
                        </span>
                        <span
                          className={`mt-1.5 px-0.5 text-center ${tabLabelClass} ${
                            isContactRoute ? "text-brand-accent" : "text-brand-text"
                          }`}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  );
                }

                if (isMenu) {
                  return (
                    <li key={item.id} className="flex justify-center pb-1">
                      <button
                        type="button"
                        aria-expanded={menuOpen}
                        aria-controls={`${menuId}-panel`}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        className="flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 px-0.5 cn-interactive"
                        onClick={toggleMenu}
                      >
                        <Icon
                          className={`size-[1.125rem] min-[375px]:size-5 ${isTabActive ? "text-brand-accent" : "text-brand-muted"}`}
                          strokeWidth={1.75}
                          aria-hidden
                        />
                        <span
                          className={`${tabLabelClass} ${isTabActive ? "text-brand-accent" : "text-brand-muted"}`}
                        >
                          {item.label}
                        </span>
                      </button>
                    </li>
                  );
                }

                return (
                  <li key={item.id} className="flex justify-center pb-1">
                    <Link
                      href={item.href ?? "/"}
                      aria-current={isTabActive ? "page" : undefined}
                      className="flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 px-0.5 cn-interactive"
                      onClick={() => onMenuOpenChange(false)}
                    >
                      <Icon
                        className={`size-[1.125rem] min-[375px]:size-5 ${isTabActive ? "text-brand-accent" : "text-brand-muted"}`}
                        strokeWidth={1.75}
                        aria-hidden
                      />
                      <span
                        className={`${tabLabelClass} ${isTabActive ? "text-brand-accent" : "text-brand-muted"}`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {menuPanel}
    </>
  );
}
