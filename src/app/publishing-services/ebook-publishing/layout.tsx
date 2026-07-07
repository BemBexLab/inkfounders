import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";


export const metadata: Metadata = {
  ...createCanonicalMetadata("/publishing-services/ebook-publishing"),
  title: "Ebook Publishing Service for Authors: Ink Founder",
  description:
    "Ink Founders is an ebook publishing service for authors, with formatting included. Start today.",
};

export default function EbookPublishingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
