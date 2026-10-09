import { Resend } from "resend";
import type { ContactMailConfig } from "@/lib/contact/env";
import { buildContactEmailContent } from "@/lib/contact/format-email";
import type { ContactFormFields } from "@/lib/contact/validation";

export type SendEnquiryResult =
  | { ok: true; messageId: string }
  | { ok: false; reason: "provider_rejected" | "missing_message_id" };

export type ResendSendFn = (payload: {
  from: string;
  to: string[];
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}) => Promise<{ data: { id: string } | null; error: { message: string } | null }>;

export async function sendContactEnquiry(
  fields: ContactFormFields,
  config: ContactMailConfig,
  sendFn?: ResendSendFn,
): Promise<SendEnquiryResult> {
  const { subject, text, html } = buildContactEmailContent(fields);

  const deliver =
    sendFn ??
    (async (payload) => {
      const resend = new Resend(config.resendApiKey);
      return resend.emails.send(payload);
    });

  const { data, error } = await deliver({
    from: config.fromEmail,
    to: [config.toEmail],
    replyTo: fields.email,
    subject,
    text,
    html,
  });

  if (error) {
    return { ok: false, reason: "provider_rejected" };
  }

  if (!data?.id) {
    return { ok: false, reason: "missing_message_id" };
  }

  return { ok: true, messageId: data.id };
}
