"use client";

import { useState } from "react";
import {
  budgetRangeOptions,
  projectTypeOptions,
  timelineOptions,
} from "@/content/contact";

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  details: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  details: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your work email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.projectType) errors.projectType = "Please select a project type.";
  if (!values.details.trim()) errors.details = "Please share a few details about your project.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-[1rem] border border-brand-accent/30 bg-brand-surface-elevated p-8 lg:p-10"
      >
        <p className="cn-tech-label text-brand-accent">Form validated</p>
        <h2 className="cn-heading-lg mt-4 text-brand-text">
          Thanks. Your project details are ready for submission.
        </h2>
        <p className="mt-4 cn-body-lg text-brand-muted">
          Nothing has been sent to CodeNCast yet — there is no backend connected. When enquiry
          delivery is integrated, this form will submit the same fields to our project inbox.
        </p>
        <button
          type="button"
          className="mt-8 inline-flex min-h-11 items-center cn-body-sm text-brand-accent cn-interactive hover:underline"
          onClick={() => {
            setSubmitted(false);
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

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
      aria-label="Project enquiry form"
    >
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
        />
        {errors.details ? (
          <p id="details-error" className="mt-2 cn-caption text-red-400">
            {errors.details}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-cn-md bg-brand-accent px-8 py-3.5 cn-body-sm font-medium text-brand-bg cn-interactive hover:shadow-cn-glow sm:w-auto"
      >
        Send enquiry
      </button>
    </form>
  );
}
