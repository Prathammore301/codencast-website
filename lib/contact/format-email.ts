import { budgetRangeOptions } from "@/content/contact";
import type { ContactFormFields } from "@/lib/contact/validation";

function budgetLabel(value: string): string {
  if (!value) return "Not specified";
  return budgetRangeOptions.find((o) => o.value === value)?.label ?? value;
}

function line(label: string, value: string): string {
  return `${label}: ${value || "—"}`;
}

export function buildContactEmailContent(fields: ContactFormFields) {
  const subject = `CodeNCast enquiry — ${fields.name} (${fields.projectType})`;

  const text = [
    "New project enquiry from codencast.com",
    "",
    line("Name", fields.name),
    line("Email", fields.email),
    line("Company", fields.company || "Not provided"),
    line("Project type", fields.projectType),
    line("Budget range", budgetLabel(fields.budget)),
    line("Timeline", fields.timeline || "Not specified"),
    "",
    "Project details:",
    fields.details,
    "",
    `Reply directly to this thread using Reply — reply-to is set to ${fields.email}.`,
  ].join("\n");

  const html = `
    <h2>New project enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(fields.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(fields.email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(fields.company || "Not provided")}</p>
    <p><strong>Project type:</strong> ${escapeHtml(fields.projectType)}</p>
    <p><strong>Budget range:</strong> ${escapeHtml(budgetLabel(fields.budget))}</p>
    <p><strong>Timeline:</strong> ${escapeHtml(fields.timeline || "Not specified")}</p>
    <h3>Project details</h3>
    <p style="white-space:pre-wrap">${escapeHtml(fields.details)}</p>
  `.trim();

  return { subject, text, html };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
