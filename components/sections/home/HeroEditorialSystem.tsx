"use client";

import { motion, useReducedMotion } from "framer-motion";

const systemLabels = [
  "SOFTWARE",
  "WEB",
  "MOBILE",
  "COMMERCE",
  "DESIGN",
  "GROWTH",
  "AUTOMATION",
];

export function HeroEditorialSystem() {
  const reduced = useReducedMotion();

  return (
    <div
      aria-hidden
      className="relative mt-10 min-h-[200px] w-full overflow-hidden border-t border-brand-border/50 py-8 sm:min-h-[220px] lg:mt-14 lg:min-h-[240px] lg:py-10"
    >
      <div className="pointer-events-none absolute inset-0 cn-bg-grid-teal opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(11,15,23,0.85))]" />

      <div className="relative cn-container">
        <div className="flex items-center gap-4">
          <p className="cn-tech-label text-brand-accent-secondary">Digital system</p>
          <span className="h-px flex-1 max-w-xs bg-brand-border/80" aria-hidden />
        </div>

        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-3 sm:gap-x-6 lg:mt-8 lg:gap-x-8">
          {systemLabels.map((label, index) => (
            <motion.span
              key={label}
              className="cn-tech-label text-brand-muted-secondary"
              animate={reduced ? undefined : { opacity: [0.55, 1, 0.55] }}
              transition={
                reduced
                  ? undefined
                  : {
                      duration: 4 + index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }
              }
            >
              {label}
            </motion.span>
          ))}
        </div>

        <svg
          viewBox="0 0 800 80"
          className="mt-8 h-16 w-full max-w-4xl opacity-70 lg:h-20"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M0 40 H120 M120 40 L200 20 M200 20 H360 M360 20 L440 40 M440 40 H560 M560 40 L640 60 M640 60 H800"
            fill="none"
            stroke="rgba(0,240,255,0.22)"
            strokeWidth="1"
          />
          {[0, 120, 200, 360, 440, 560, 640, 800].map((x, i) => (
            <circle
              key={x}
              cx={x}
              cy={i === 2 ? 20 : i === 6 ? 60 : 40}
              r="3"
              fill="#080a0f"
              stroke="rgba(0,240,255,0.45)"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
