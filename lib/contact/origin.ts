function normalizeOrigin(url: string): string | null {
  try {
    return new URL(url).origin;
  } catch {
    return null;
  }
}

export function getAllowedContactOrigins(request: Request): Set<string> {
  const allowed = new Set<string>();

  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    const origin = normalizeOrigin(configured);
    if (origin) allowed.add(origin);
  }

  const host = request.headers.get("host");
  if (host) {
    allowed.add(`https://${host}`);
    allowed.add(`http://${host}`);
  }

  const requestOrigin = normalizeOrigin(request.url);
  if (requestOrigin) allowed.add(requestOrigin);

  return allowed;
}

export function isAllowedContactRequestOrigin(request: Request): boolean {
  if (process.env.NODE_ENV === "development") {
    return true;
  }

  const allowed = getAllowedContactOrigins(request);
  if (allowed.size === 0) {
    return false;
  }

  const origin = request.headers.get("origin");
  if (origin && allowed.has(origin)) {
    return true;
  }

  const referer = request.headers.get("referer");
  if (referer) {
    const refererOrigin = normalizeOrigin(referer);
    if (refererOrigin && allowed.has(refererOrigin)) {
      return true;
    }
  }

  return false;
}
