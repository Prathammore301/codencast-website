"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef } from "react";
import { serviceMenuItems } from "@/lib/navigation/config";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";
import { easePremiumCss } from "@/lib/design/motion";

type ServicesMegaMenuProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ServicesMegaMenu({ isOpen, onOpenChange }: ServicesMegaMenuProps) {
  const menuId = useId();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [featured, ...rest] = serviceMenuItems;

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => onOpenChange(false), 120);
  }, [clearCloseTimer, onOpenChange]);

  const open = useCallback(() => {
    clearCloseTimer();
    onOpenChange(true);
  }, [clearCloseTimer, onOpenChange]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, [clearCloseTimer]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onOpenChange]);

  const panelMotion = reducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 6 },
      };

  const itemMotion = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <div
      className="relative"
      onMouseEnter={open}
      onMouseLeave={scheduleClose}
      onFocusCapture={open}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          scheduleClose();
        }
      }}
    >
      <button
        type="button"
        id={`${menuId}-trigger`}
        aria-expanded={isOpen}
        aria-controls={`${menuId}-panel`}
        aria-haspopup="true"
        className={`group relative inline-flex items-center px-1 py-2 cn-body-sm text-brand-text cn-interactive ${
          isOpen ? "text-brand-text" : ""
        }`}
        onClick={() => onOpenChange(!isOpen)}
      >
        <span className="relative">
          Services
          <span
            aria-hidden
            className={`absolute -bottom-1 left-0 h-px bg-brand-accent transition-all duration-300 ${
              isOpen ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100 group-focus-visible:w-full group-focus-visible:opacity-100"
            }`}
            style={{ transitionTimingFunction: easePremiumCss }}
          />
        </span>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id={`${menuId}-panel`}
            role="region"
            aria-labelledby={`${menuId}-trigger`}
            className="absolute left-1/2 top-[calc(100%+0.75rem)] z-50 w-[min(100vw-2rem,56rem)] -translate-x-1/2"
            {...panelMotion}
            transition={{ duration: reducedMotion ? 0.01 : 0.22, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={open}
            onMouseLeave={scheduleClose}
          >
            <div className="cn-surface-glass overflow-hidden rounded-cn-lg border border-brand-border shadow-cn-lg">
              <div className="grid grid-cols-12 gap-0">
                <div className="col-span-12 border-b border-brand-border bg-brand-surface-elevated/40 p-6 md:col-span-4 md:border-b-0 md:border-r md:p-8">
                  <p className="cn-tech-label text-brand-accent-secondary/80">Capabilities</p>
                  <p className="mt-4 cn-heading-sm text-brand-text">
                    End-to-end digital engineering
                  </p>
                  <p className="mt-3 cn-body-sm text-brand-muted">
                    Structured delivery across product, experience, and growth.
                  </p>
                  {featured ? (
                    <Link
                      href={featured.href}
                      className="group mt-8 block rounded-cn-md border border-brand-border bg-brand-bg/40 p-4 cn-interactive hover:border-brand-border-light hover:bg-brand-surface"
                      onClick={() => onOpenChange(false)}
                    >
                      <p className="cn-tech-label text-brand-muted-secondary">
                        Featured
                      </p>
                      <p className="mt-2 cn-body-sm font-medium text-brand-text group-hover:text-brand-accent">
                        {featured.title}
                      </p>
                      <p className="mt-1 cn-body-sm text-brand-muted">
                        {featured.description}
                      </p>
                      <span
                        aria-hidden
                        className="mt-3 inline-flex cn-tech-label text-brand-accent-secondary"
                      >
                        Open →
                      </span>
                    </Link>
                  ) : null}
                </div>

                <div className="col-span-12 p-4 md:col-span-8 md:p-6 lg:p-8">
                  <ul className="grid gap-1 sm:grid-cols-2">
                    {rest.map((service, index) => (
                      <motion.li
                        key={service.href}
                        {...itemMotion}
                        transition={{
                          delay: reducedMotion ? 0 : index * 0.03,
                          duration: 0.2,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Link
                          href={service.href}
                          className="group flex items-start justify-between gap-4 rounded-cn-md border border-transparent px-3 py-3 cn-interactive hover:border-brand-border hover:bg-brand-surface/80"
                          onClick={() => onOpenChange(false)}
                        >
                          <span>
                            <span className="flex items-center gap-2">
                              <span
                                aria-hidden
                                className="size-1 shrink-0 rounded-full bg-brand-accent/70"
                              />
                              <span className="cn-body-sm font-medium text-brand-text group-hover:text-brand-text">
                                {service.title}
                              </span>
                            </span>
                            <span className="mt-1 block cn-body-sm text-brand-muted">
                              {service.description}
                            </span>
                          </span>
                          <span
                            aria-hidden
                            className="cn-tech-label shrink-0 text-brand-muted-secondary transition-colors group-hover:text-brand-accent"
                          >
                            →
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
