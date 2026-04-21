import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer2";
import DynamicPageTitle from "@/components/DynamicPageTitle";
import { workSans } from "./fonts";

export const metadata: Metadata = {
  title: "Ink Founders",
  description:
    "Ink Founders is an independent self-publishing platform dedicated to empowering authors with a full suite of digital services.",
  verification: {
    google: [
      "chIy7we8dy-XbVv1lNa36kZNuZgH_HCtWnDiGBB-uFA",
      "anmOXVc7juhQFhYiYg0Tu3hI2tgTsHwdQY-ZXdHk6OA",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body
        className={`antialiased ${workSans.className}`}
        suppressHydrationWarning
      >
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

        <DynamicPageTitle />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
