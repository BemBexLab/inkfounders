import { NextRequest, NextResponse } from "next/server";

const BLOCKED_COUNTRIES = new Set(["AU"]);

function getCountryCode(request: NextRequest): string | null {
  return (
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("X-Vercel-IP-Country") ||
    null
  );
}

function createForbiddenResponse(request: NextRequest): NextResponse {
  const isApiRequest =
    request.nextUrl.pathname.startsWith("/api/") ||
    request.headers.get("accept")?.includes("application/json");

  if (isApiRequest) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return new NextResponse(
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>403 Forbidden</title>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 24px;
        background: #f5efe5;
        color: #1f2937;
        font-family: Arial, sans-serif;
      }
      main {
        max-width: 560px;
        text-align: center;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 20px;
        padding: 40px 32px;
        box-shadow: 0 20px 45px rgba(15, 23, 42, 0.08);
      }
      h1 {
        margin: 0 0 12px;
        font-size: clamp(2.5rem, 8vw, 4rem);
      }
      p {
        margin: 0;
        line-height: 1.6;
        font-size: 1rem;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>403</h1>
      <p>This website is not available in your region.</p>
    </main>
  </body>
</html>`,
    {
      status: 403,
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    },
  );
}

export function middleware(request: NextRequest) {
  const countryCode = getCountryCode(request)?.toUpperCase();

  if (countryCode && BLOCKED_COUNTRIES.has(countryCode)) {
    return createForbiddenResponse(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
