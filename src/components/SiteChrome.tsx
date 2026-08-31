"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer2";
import SmoothScroll from "@/components/SmoothScroll";

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
    pathname.startsWith("/book-publishing/");

  if (hideChrome) {
    return <SmoothScroll>{children}</SmoothScroll>;
  }

  return (
    <>
      <Header />
      <SmoothScroll withHeader>
        {children}
        <Footer />
      </SmoothScroll>
    </>
  );
}
