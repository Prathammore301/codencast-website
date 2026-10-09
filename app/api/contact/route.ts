import { CONTACT_MAX_BODY_BYTES } from "@/lib/contact/constants";
import { getContactMailConfig } from "@/lib/contact/env";
import { isAllowedContactRequestOrigin } from "@/lib/contact/origin";
import { sendContactEnquiry } from "@/lib/contact/send-enquiry";
import { parseContactRequestBody } from "@/lib/contact/validation";

function jsonResponse(body: unknown, status: number) {
  return Response.json(body, { status });
}

export async function POST(request: Request) {
  if (!isAllowedContactRequestOrigin(request)) {
    return jsonResponse({ ok: false, message: "Request could not be accepted." }, 403);
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return jsonResponse({ ok: false, message: "Invalid request. Please try again." }, 415);
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return jsonResponse({ ok: false, message: "Invalid request. Please try again." }, 400);
  }

  if (rawBody.length === 0 || rawBody.length > CONTACT_MAX_BODY_BYTES) {
    return jsonResponse({ ok: false, message: "Invalid request. Please try again." }, 413);
  }

  let parsedJson: unknown;
  try {
    parsedJson = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ ok: false, message: "Invalid request. Please try again." }, 400);
  }

  const parsed = parseContactRequestBody(parsedJson);
  if (!parsed.ok) {
    return jsonResponse(
      {
        ok: false,
        message: parsed.message,
        ...(parsed.fieldErrors ? { fieldErrors: parsed.fieldErrors } : {}),
      },
      parsed.status,
    );
  }

  if (parsed.isHoneypot) {
    return jsonResponse({ ok: true }, 200);
  }

  const mailConfig = getContactMailConfig();
  if (!mailConfig) {
    return jsonResponse(
      {
        ok: false,
        message:
          "The contact form is temporarily unavailable. Please try again later or reach us by email.",
      },
      503,
    );
  }

  const sendResult = await sendContactEnquiry(parsed.data, mailConfig);
  if (!sendResult.ok) {
    return jsonResponse(
      {
        ok: false,
        message:
          "We could not send your enquiry right now. Please try again in a few minutes or email us directly.",
      },
      502,
    );
  }

  return jsonResponse({ ok: true }, 200);
}

export function GET() {
  return jsonResponse({ ok: false, message: "Method not allowed." }, 405);
}
