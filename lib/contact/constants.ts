export const CONTACT_MAX_BODY_BYTES = 16_384;

export const CONTACT_FIELD_LIMITS = {
  name: 120,
  email: 254,
  company: 200,
  projectType: 80,
  budget: 32,
  timeline: 32,
  details: 5_000,
  website: 200,
} as const;
