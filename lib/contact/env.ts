export type ContactMailConfig = {
  resendApiKey: string;
  toEmail: string;
  fromEmail: string;
};

export function getContactMailConfig(): ContactMailConfig | null {
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();

  if (!resendApiKey || !toEmail || !fromEmail) {
    return null;
  }

  return { resendApiKey, toEmail, fromEmail };
}
