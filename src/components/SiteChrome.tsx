"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer2";
import { robotoMono } from "@/app/fonts";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideChrome =
    pathname === "/bookpublishing" ||
    pathname.startsWith("/bookpublishing/") ||
    pathname === "/book-publishing" ||
    pathname.startsWith("/book-publishing/") ||
    pathname === "/global-premium" ||
    pathname.startsWith("/global-premium/") ||
    pathname === "/test" ||
    pathname.startsWith("/test/");

  if (hideChrome) {
    return children;
  }

  return (
    <div className={`site-copy-scope ${robotoMono.variable}`}>
      <Header />
      <div className="site-content-copy pt-[4.25rem] xl:pt-20">{children}</div>
      <Footer />
    </div>
  );
}
