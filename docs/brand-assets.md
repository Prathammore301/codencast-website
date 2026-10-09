# CodeNCast brand assets

## Logo files

| File | Usage |
|------|--------|
| `public/brand/codencast-logo-full.png` | Master lockup (1024×682 source); Open Graph / social preview (`lib/seo/metadata.ts`) |
| `public/brand/codencast-logo-nav.png` | Trimmed emblem + **CODENCAST** wordmark only (889×619); navbar & footer via `NavLogo` |

**Source upload:**  
`assets/…/codencast-update-415fe281-4883-480b-b95c-9b4c0cb20c4a.png`

The nav asset is a content-aware trim of the master PNG (no tagline, no extra canvas). Do not stretch; scale with `h-* w-auto` only.

## App icon

| File | Usage |
|------|--------|
| `app/icon.png` | Favicon (512×512 emblem crop on `#080A0F`) |

## Deprecated

- `public/brand/codencast-logo.png` — legacy path; prefer `-full` / `-nav` explicitly.
