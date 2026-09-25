import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";


export const metadata: Metadata = {
  ...createCanonicalMetadata("/publishing-services/book-cover-design"),
  title: "Book Cover Design Services: Custom Book Cover Design for Authors",
  description:
    "Ink Founders offers professional book cover design services and custom book cover design for authors, Amazon KDP-approved, genre-specific, with unlimited revisions.",
};

export default function BookCoverDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
