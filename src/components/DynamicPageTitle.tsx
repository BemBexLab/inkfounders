"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const toTitleCase = (value: string): string =>
  value
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const getPageTitleFromPathname = (pathname: string): string => {
  if (!pathname || pathname === "/") return "Home";

  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1];

  return toTitleCase(lastSegment);
};

export default function DynamicPageTitle() {
  const pathname = usePathname();

  useEffect(() => {
    const activePage = getPageTitleFromPathname(pathname);
    document.title = `Ink Founders - ${activePage}`;
  }, [pathname]);

  return null;
}
