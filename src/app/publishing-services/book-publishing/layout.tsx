import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";


export const metadata: Metadata = {
  ...createCanonicalMetadata("/publishing-services/book-publishing"),
  title: "Book Publishing Service for Authors: Ink Founder",
  description:
    "Ink Founders is a book publishing service for authors, with formatting included. Start today.",
};

export default function BookPublishingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
