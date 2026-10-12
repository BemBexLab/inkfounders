import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";


export const metadata: Metadata = createPageMetadata(
  "/publishing-services/book-cover-design",
  "Book Cover Design Services | Ink Founders",
  "Ink Founders offers professional book cover design services and custom book cover design for authors, Amazon KDP-approved, genre-specific, with unlimited revisions.",
);

export default function BookCoverDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
