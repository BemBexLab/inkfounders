import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createCanonicalMetadata("/publishing-services/ebook-writing"),
  title: "Ebook Ghostwriting Services: Hire a Ghostwriter for Your Ebook",
  description:
    "Ink Founders offers professional ebook ghostwriting services for first-time authors, entrepreneurs, and coaches. Hire a ghostwriter for your ebook now.",
};

export default function EbookWritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
