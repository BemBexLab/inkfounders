import { NextRequest, NextResponse } from "next/server";

const AU_COUNTRY_CODE = "AU";
const AU_TARGET_HOST = "inkfounders.com.au";

function getCountryCode(request: NextRequest): string | null {
  return (
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("x-country-code") ||
    request.headers.get("cf-ipcountry") ||
    null
  );
}

function getRequestHost(request: NextRequest): string {
  return (request.headers.get("host") || request.nextUrl.host).toLowerCase();
}

function shouldRedirectToAustralianSite(
  request: NextRequest,
  countryCode: string | null,
): boolean {
  if (countryCode !== AU_COUNTRY_CODE) {
    return false;
  }

  const host = getRequestHost(request);
  const hostname = host.split(":")[0];

  if (
    hostname === AU_TARGET_HOST ||
    hostname.endsWith(`.${AU_TARGET_HOST}`) ||
    hostname === "localhost" ||
    hostname === "127.0.0.1"
  ) {
    return false;
  }

  return hostname === "inkfounders.com" || hostname === "www.inkfounders.com";
}

function createAustralianRedirect(request: NextRequest): NextResponse {
  const destination = new URL(request.nextUrl.pathname, `https://${AU_TARGET_HOST}`);
  destination.search = request.nextUrl.search;

  return NextResponse.redirect(destination, 307);
}

export function middleware(request: NextRequest) {
  const countryCode = getCountryCode(request)?.toUpperCase() ?? null;

  if (shouldRedirectToAustralianSite(request, countryCode)) {
    return createAustralianRedirect(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
