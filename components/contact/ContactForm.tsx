"use client";

import { useState } from "react";
import {
  budgetRangeOptions,
  projectTypeOptions,
  timelineOptions,
} from "@/content/contact";
import {
  validateContactFields,
  type ContactFieldErrors,
  type ContactFormFields,
} from "@/lib/contact/validation";

type FormState = ContactFormFields;

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  details: "",
};

type SubmitState = "idle" | "submitting" | "success" | "error";

type ContactApiResponse = {
  ok: boolean;
  message?: string;
  fieldErrors?: ContactFieldErrors;
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (submitState === "error") {
      setFormMessage(null);
      setSubmitState("idle");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitState === "submitting") return;

    const nextErrors = validateContactFields(values);
    setErrors(nextErrors);
    setFormMessage(null);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypot }),
      });

      let payload: ContactApiResponse | null = null;
      try {
        payload = (await response.json()) as ContactApiResponse;
      } catch {
        payload = null;
      }

      if (!response.ok || !payload?.ok) {
        if (payload?.fieldErrors) {
          setErrors((prev) => ({ ...prev, ...payload.fieldErrors }));
        }
        setFormMessage(
          payload?.message ??
            "We could not send your enquiry right now. Please try again or email us directly.",
        );
        setSubmitState("error");
        return;
      }

      setValues(initialState);
      setHoneypot("");
      setErrors({});
      setFormMessage(null);
      setSubmitState("success");
    } catch {
      setFormMessage(
        "We could not reach the server. Check your connection and try again, or email us directly.",
      );
      setSubmitState("error");
    }
  }

  if (submitState === "success") {
    return (
      <div
        role="status"
        className="rounded-[1rem] border border-brand-accent/30 bg-brand-surface-elevated p-8 lg:p-10"
      >
        <p className="cn-tech-label text-brand-accent-secondary">Enquiry received</p>
        <h2 className="cn-heading-lg mt-4 text-brand-text">
          Thanks. We&apos;ve received your project details.
        </h2>
        <p className="mt-4 cn-body-lg text-brand-muted">
          Our team will review your message and respond using the email you provided. If you
          don&apos;t hear back within a few business days, check your spam folder or reach out
          again.
        </p>
        <button
          type="button"
          className="mt-8 inline-flex min-h-11 items-center cn-body-sm text-brand-accent cn-interactive hover:underline"
          onClick={() => {
            setSubmitState("idle");
            setValues(initialState);
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full min-h-12 rounded-cn-md border border-brand-border bg-brand-bg/80 px-4 py-3 cn-body-md text-brand-text outline-none transition-colors focus-visible:border-brand-accent/60 focus-visible:ring-2 focus-visible:ring-brand-accent/20";

  const isSubmitting = submitState === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
      aria-label="Project enquiry form"
    >
      {formMessage ? (
        <div
          role="alert"
          className="rounded-cn-md border border-red-400/40 bg-red-400/10 px-4 py-3 cn-body-sm text-red-300"
        >
          {formMessage}
        </div>
      ) : null}

      <div className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="cn-body-sm text-brand-text">
            Name <span className="text-brand-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass}
            disabled={isSubmitting}
          />
          {errors.name ? (
            <p id="name-error" className="mt-2 cn-caption text-red-400">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="cn-body-sm text-brand-text">
            Work email <span className="text-brand-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass}
            disabled={isSubmitting}
          />
          {errors.email ? (
            <p id="email-error" className="mt-2 cn-caption text-red-400">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="cn-body-sm text-brand-text">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={values.company}
          onChange={handleChange}
          className={fieldClass}
          disabled={isSubmitting}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className="cn-body-sm text-brand-text">
            Project type <span className="text-brand-accent">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            value={values.projectType}
            onChange={handleChange}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? "projectType-error" : undefined}
            className={fieldClass}
            disabled={isSubmitting}
          >
            <option value="">Select…</option>
            {projectTypeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <p id="projectType-error" className="mt-2 cn-caption text-red-400">
              {errors.projectType}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="budget" className="cn-body-sm text-brand-text">
            Budget range <span className="cn-caption text-brand-muted">(estimates)</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={handleChange}
            className={fieldClass}
            disabled={isSubmitting}
          >
            <option value="">Select…</option>
            {budgetRangeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="timeline" className="cn-body-sm text-brand-text">
          Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          value={values.timeline}
          onChange={handleChange}
          className={fieldClass}
          disabled={isSubmitting}
        >
          <option value="">Select…</option>
          {timelineOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="details" className="cn-body-sm text-brand-text">
          Project details <span className="text-brand-accent">*</span>
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={6}
          value={values.details}
          onChange={handleChange}
          aria-invalid={Boolean(errors.details)}
          aria-describedby={errors.details ? "details-error" : undefined}
          className={`${fieldClass} min-h-[9rem] resize-y`}
          disabled={isSubmitting}
        />
        {errors.details ? (
          <p id="details-error" className="mt-2 cn-caption text-red-400">
            {errors.details}
          </p>
        ) : null}
      </div>

      <p className="cn-body-sm text-brand-muted-secondary">
        Fields marked with * are required. Your enquiry is sent securely to our team when you
        submit.
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-cn-md bg-brand-accent px-8 py-3.5 cn-body-sm font-medium text-brand-bg cn-interactive hover:shadow-cn-glow disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? "Sending…" : "Review & submit"}
      </button>
    </form>
  );
}
