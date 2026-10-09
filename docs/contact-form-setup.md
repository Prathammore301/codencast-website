# Contact form — Resend setup (CodeNCast)

The contact form posts to `POST /api/contact`, validates input on the server, and sends enquiry emails through [Resend](https://resend.com). **Code in the repo is not enough by itself** — you must complete Resend and Vercel configuration, then run a real end-to-end test before treating lead capture as operational.

## What the app expects

| Variable | Scope | Purpose |
|----------|--------|---------|
| `RESEND_API_KEY` | Server only | Resend API authentication |
| `CONTACT_TO_EMAIL` | Server only | Inbox that receives enquiries |
| `CONTACT_FROM_EMAIL` | Server only | Verified sender (must use a domain verified in Resend) |
| `NEXT_PUBLIC_SITE_URL` | Build-time public | Production origin; used for SEO and production origin checks on contact POSTs |

Copy `.env.example` to `.env.local` for local development. **Do not commit `.env.local` or real API keys.**

## Owner setup checklist

1. **Create or sign in** to a [Resend](https://resend.com) account.
2. **Add and verify your sending domain** in Resend (DNS records as Resend instructs).
3. **Choose a sender address** on that verified domain, e.g. `CodeNCast Enquiries <enquiries@yourdomain.com>`, and set it as `CONTACT_FROM_EMAIL`.
4. **Set the company recipient** — the real inbox that should receive leads — as `CONTACT_TO_EMAIL`.
5. **Create an API key** in Resend and set `RESEND_API_KEY` (server-only, never `NEXT_PUBLIC_`).
6. **Local:** add all variables to `.env.local`, set `NEXT_PUBLIC_SITE_URL` to your dev URL (e.g. `http://localhost:3000`), restart `npm run dev`.
7. **Vercel:** Project → Settings → Environment Variables — add the same three contact variables plus `NEXT_PUBLIC_SITE_URL` for **Preview** and **Production** with appropriate values per environment.
8. **Redeploy** after changing production environment variables (Next.js inlines `NEXT_PUBLIC_*` at build time).
9. **Test:** submit a real enquiry on `/contact` and confirm the email arrives at `CONTACT_TO_EMAIL`.
10. If mail is missing, check **spam/junk** and **Resend delivery logs** before debugging application code.

## Security notes (implemented in code)

- Visitor email is used only as `replyTo`, never as the `from` address.
- Honeypot field (`website`) for basic bot traffic.
- Server-side validation, body size limit, JSON-only requests.
- Production origin check using `NEXT_PUBLIC_SITE_URL` and request host.
- No logging of API keys or full enquiry bodies.

## Distributed rate limiting

There is **no** in-memory rate limiter (it would not be reliable on Vercel’s serverless runtime). For strict abuse limits at scale, add a persistent store (e.g. Vercel KV / Upstash Redis) or edge middleware with a supported provider — that is optional follow-up work.

## When is it “fully operational”?

Only after **you** complete DNS/domain verification, set env vars on Vercel, redeploy, and **successfully receive** a test enquiry email. Until then, the API may return `503` (missing config) or `502` (provider failure) and the form will show an error state — not a false success.
