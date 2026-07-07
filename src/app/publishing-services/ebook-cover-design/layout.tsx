import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";


export const metadata: Metadata = {
  ...createCanonicalMetadata("/publishing-services/ebook-cover-design"),
  title: "eBook Cover Design Services: Custom Book Cover Design for Authors",
  description:
    "Ink Founders offers professional ebook cover design services and custom book cover design for authors, Amazon KDP-approved, genre-specific, with unlimited revisions.",
};

export default function EbookCoverDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
