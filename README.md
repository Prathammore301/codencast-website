# CodeNCast

Official marketing website for **CodeNCast** — digital products, software, web, mobile, e-commerce, design, and growth systems for modern businesses.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for local preview.

## Validation

```bash
npm run lint
npm run build
```

## Environment

Set the public site URL in production:

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

Production deployments **must** set `NEXT_PUBLIC_SITE_URL` so canonical URLs, the sitemap, `robots.txt`, and JSON-LD structured data use the live domain. If unset, the app falls back to `http://localhost:3000` for development.

## Notes

- The public site is capability- and service-led; the homepage does not surface a portfolio section.
- `/work` and case-study routes remain in the codebase but are **unreleased** and **noindex** until explicitly launched.
- Do not present concept or unreleased work as published client engagements.
