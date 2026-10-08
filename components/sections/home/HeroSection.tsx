"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { heroContent } from "@/content/home";
import { HeroEditorialSystem } from "@/components/sections/home/HeroEditorialSystem";
import { easePremium } from "@/lib/design/motion";

export function HeroSection() {
  const reduced = useReducedMotion();
  const fade = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, delay, ease: easePremium },
        };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative cn-bg-radial-glow border-b border-brand-border/60 pb-12 pt-6 max-lg:pb-16 lg:pb-16 lg:pt-12 xl:pt-14"
    >
      <div className="cn-container relative flex flex-col">
        <motion.p className="cn-tech-label tracking-[0.18em] text-brand-accent" {...fade(0)}>
          {heroContent.eyebrow}
        </motion.p>

        <motion.h1
          id="hero-heading"
          className="cn-display-lg mt-6 max-w-[14ch] text-brand-text sm:max-w-none sm:cn-display-xl lg:cn-display-2xl lg:max-w-[18ch] xl:max-w-[20ch]"
          {...fade(0.06)}
        >
          <span className="block">{heroContent.headlineLines[0]}</span>
          <span className="mt-1 block text-brand-muted/95">{heroContent.headlineLines[1]}</span>
          {heroContent.headlineLines[2] ? (
            <span className="mt-1 block text-brand-text">{heroContent.headlineLines[2]}</span>
          ) : null}
        </motion.h1>

        <motion.p
          className="mt-8 max-w-xl cn-body-lg text-brand-muted lg:mt-10 lg:max-w-2xl lg:text-[1.125rem] lg:leading-[1.75]"
          {...fade(0.12)}
        >
          {heroContent.supporting}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          {...fade(0.18)}
        >
          <Link
            href={heroContent.primaryCta.href}
            className="inline-flex min-h-12 items-center justify-center rounded-cn-md bg-brand-accent px-7 py-3.5 cn-body-sm font-medium text-brand-bg cn-interactive hover:shadow-cn-glow"
          >
            {heroContent.primaryCta.label}
          </Link>
          <Link
            href={heroContent.secondaryCta.href}
            className="inline-flex min-h-12 items-center justify-center rounded-cn-md border border-brand-border-light px-7 py-3.5 cn-body-sm text-brand-text cn-interactive hover:border-brand-accent/40 hover:text-brand-accent"
          >
            {heroContent.secondaryCta.label}
          </Link>
        </motion.div>

        <motion.div className="order-4 lg:order-5" {...fade(0.28)}>
          <HeroEditorialSystem />
        </motion.div>

        <motion.div
          className="order-5 mt-8 flex flex-wrap gap-x-6 gap-y-3 lg:order-4 lg:mt-12"
          {...fade(0.24)}
        >
          {heroContent.metaLabels.map((label) => (
            <div key={label} className="flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-brand-accent" aria-hidden />
              <span className="cn-tech-label text-brand-muted">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
