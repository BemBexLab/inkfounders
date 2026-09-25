import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createCanonicalMetadata("/publishing-services/book-writing"),
  title: "Book Ghostwriting Services: Hire a Ghostwriter for Your Book",
  description:
    "Ink Founders offers professional book ghostwriting services for first-time authors, entrepreneurs, and coaches. Hire a ghostwriter for your book now.",
};

export default function BookWritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
