import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
import { workSans } from "./fonts";
import { GLOBAL_SCHEMA, SITE_URL, SOCIAL_IMAGE_URL } from "@/lib/seo";

const tawkPropertyId = process.env.PROPERTY_ID?.trim();
const tawkWidgetId = process.env.WIDGET_ID?.trim();
const tawkWidgetUrl =
  tawkPropertyId && tawkWidgetId
    ? `https://embed.tawk.to/${tawkPropertyId}/${tawkWidgetId}`
    : undefined;

// Keep the project statically rendered by default. The WordPress post detail
// route opts out of this in src/app/blog/[slug]/page.tsx.
export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ink Founders",
  description:
    "Ink Founders is an independent self-publishing platform dedicated to empowering authors with a full suite of digital services.",
  openGraph: {
    type: "website",
    siteName: "Ink Founders",
    locale: "en_US",
    title: "Ink Founders",
    description:
      "Ink Founders is an independent self-publishing platform dedicated to empowering authors with a full suite of digital services.",
    images: [
      {
        url: SOCIAL_IMAGE_URL,
        width: 192,
        height: 87,
        alt: "Ink Founders logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ink Founders",
    description:
      "Ink Founders is an independent self-publishing platform dedicated to empowering authors with a full suite of digital services.",
    images: [SOCIAL_IMAGE_URL],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  verification: {
    google: ["chIy7we8dy-XbVv1lNa36kZNuZgH_HCtWnDiGBB-uFA"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-tag-manager-data-layer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'gtm.start': new Date().getTime(),
  event: 'gtm.js'
});`,
          }}
        />
        <Script
          id="google-tag-manager"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-T78X9KSV"
          strategy="afterInteractive"
        />
        <Script
          id="global-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(GLOBAL_SCHEMA),
          }}
        />
      </head>
      <body
        className={`antialiased ${workSans.className}`}
        suppressHydrationWarning
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T78X9KSV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Meta Pixel Script */}
        <Script
          id="facebook-pixel-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n){
                if(f.fbq)return;
                n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;
                n.push=n;
                n.loaded=!0;
                n.version='2.0';
                n.queue=[];
              }(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1969070570295864');
              fbq('track', 'PageView');
            `,
          }}
        />
        <Script
          id="facebook-pixel"
          src="https://connect.facebook.net/en_US/fbevents.js"
          strategy="afterInteractive"
        />

        {/* Meta Pixel Noscript Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1969070570295864&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {tawkWidgetUrl && (
          <Script
            id="tawk-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.Tawk_API = window.Tawk_API || {};
                window.Tawk_LoadStart = new Date();
              `,
            }}
          />
        )}
        {tawkWidgetUrl && (
          <Script
            id="tawk-to"
            src={tawkWidgetUrl}
            strategy="afterInteractive"
            crossOrigin="anonymous"
          />
        )}

        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
