import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
import { workSans } from "./fonts";
import { GLOBAL_SCHEMA, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ink Founders",
  description:
    "Ink Founders is an independent self-publishing platform dedicated to empowering authors with a full suite of digital services.",
  alternates: {
    canonical: "/",
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
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MWZNX2J8');`,
          }}
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
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWZNX2J8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Meta Pixel Script */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)n=f.fbq;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}
              (window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1969070570295864');
              fbq('track', 'PageView');
            `,
          }}
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
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
