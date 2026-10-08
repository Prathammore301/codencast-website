/**
 * Motion constants for Framer Motion and CSS transitions.
 * Do not use for page animations in Step 2 — foundation only.
 */

export const easePremium = [0.22, 1, 0.36, 1] as const;

export const easePremiumCss = "cubic-bezier(0.22, 1, 0.36, 1)";

export const duration = {
  fast: 0.15,
  normal: 0.28,
  slow: 0.42,
} as const;

export const transition = {
  premium: {
    duration: duration.normal,
    ease: easePremium,
  },
  premiumFast: {
    duration: duration.fast,
    ease: easePremium,
  },
} as const;
