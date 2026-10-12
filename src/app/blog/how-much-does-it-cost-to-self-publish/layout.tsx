import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/blog/how-much-does-it-cost-to-self-publish",
  "How Much Does It Cost to Self-Publish a Book? | Ink Founders",
  "A practical guide to the costs of self-publishing a book, including editing, cover design, formatting, printing, and distribution.",
);

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
