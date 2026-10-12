import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";


export const metadata: Metadata = createPageMetadata(
  "/publishing-services/book-publishing",
  "Book Publishing Service for Authors | Ink Founders",
  "Ink Founders is a book publishing service for authors, with formatting included. Start today.",
);

export default function BookPublishingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
