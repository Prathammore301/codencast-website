/**
 * Design token keys for programmatic use (e.g. charts, motion, CMS).
 * Visual values live in styles/design-tokens.css.
 */

export const brandColors = {
  bg: "brand-bg",
  text: "brand-text",
  accent: "brand-accent",
  accentSecondary: "brand-accent-secondary",
  accentDark: "brand-accent-dark",
  surface: "brand-surface",
  surfaceElevated: "brand-surface-elevated",
  border: "brand-border",
  borderLight: "brand-border-light",
  muted: "brand-muted",
  mutedSecondary: "brand-muted-secondary",
} as const;

export const containerMaxWidthPx = 1440;

export const gridSizePx = 40;

export const spacingScalePx = [
  4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120, 160,
] as const;
