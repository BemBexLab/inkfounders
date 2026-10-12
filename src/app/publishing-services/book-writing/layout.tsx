import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/publishing-services/book-writing",
  "Book Ghostwriting Services: Hire a Ghostwriter | Ink Founders",
  "Ink Founders offers professional book ghostwriting services for first-time authors, entrepreneurs, and coaches. Hire a ghostwriter for your book now.",
);

export default function BookWritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
