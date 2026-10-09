import {
  budgetRangeOptions,
  projectTypeOptions,
  timelineOptions,
} from "@/content/contact";
import { CONTACT_FIELD_LIMITS } from "@/lib/contact/constants";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PROJECT_TYPES = new Set<string>(projectTypeOptions);
const BUDGET_VALUES = new Set<string>(budgetRangeOptions.map((o) => o.value));
const TIMELINE_VALUES = new Set<string>(timelineOptions);

export type ContactFormFields = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  details: string;
};

export type ContactFieldErrors = Partial<Record<keyof ContactFormFields, string>>;

export type ParsedContactRequest =
  | { ok: true; data: ContactFormFields; isHoneypot: boolean }
  | { ok: false; status: 400; message: string; fieldErrors?: ContactFieldErrors };

function trimField(value: unknown, maxLen: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLen);
}

export function isValidEmailFormat(email: string): boolean {
  return email.length > 0 && email.length <= CONTACT_FIELD_LIMITS.email && EMAIL_PATTERN.test(email);
}

export function validateContactFields(fields: ContactFormFields): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (!fields.name) {
    errors.name = "Please enter your name.";
  }
  if (!fields.email) {
    errors.email = "Please enter your work email.";
  } else if (!isValidEmailFormat(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.projectType) {
    errors.projectType = "Please select a project type.";
  } else if (!PROJECT_TYPES.has(fields.projectType)) {
    errors.projectType = "Please select a valid project type.";
  }
  if (!fields.details) {
    errors.details = "Please share a few details about your project.";
  }

  if (fields.company && fields.company.length > CONTACT_FIELD_LIMITS.company) {
    errors.company = "Company name is too long.";
  }
  if (fields.budget && !BUDGET_VALUES.has(fields.budget)) {
    errors.budget = "Please select a valid budget range.";
  }
  if (fields.timeline && !TIMELINE_VALUES.has(fields.timeline)) {
    errors.timeline = "Please select a valid timeline.";
  }
  if (fields.details.length > CONTACT_FIELD_LIMITS.details) {
    errors.details = "Project details are too long.";
  }

  return errors;
}

export function parseContactRequestBody(body: unknown): ParsedContactRequest {
  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, status: 400, message: "Invalid request. Please try again." };
  }

  const record = body as Record<string, unknown>;
  const honeypot = trimField(record.website, CONTACT_FIELD_LIMITS.website);

  const fields: ContactFormFields = {
    name: trimField(record.name, CONTACT_FIELD_LIMITS.name),
    email: trimField(record.email, CONTACT_FIELD_LIMITS.email).toLowerCase(),
    company: trimField(record.company, CONTACT_FIELD_LIMITS.company),
    projectType: trimField(record.projectType, CONTACT_FIELD_LIMITS.projectType),
    budget: trimField(record.budget, CONTACT_FIELD_LIMITS.budget),
    timeline: trimField(record.timeline, CONTACT_FIELD_LIMITS.timeline),
    details: trimField(record.details, CONTACT_FIELD_LIMITS.details),
  };

  if (honeypot) {
    return { ok: true, data: fields, isHoneypot: true };
  }

  const fieldErrors = validateContactFields(fields);
  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      status: 400,
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
    };
  }

  return { ok: true, data: fields, isHoneypot: false };
}
