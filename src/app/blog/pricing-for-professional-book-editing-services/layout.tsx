import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/blog/pricing-for-professional-book-editing-services",
  "Book Editing Service Pricing: What Authors Can Expect | Ink Founders",
  "Compare professional book editing service costs and learn what affects developmental editing, copyediting, and proofreading prices.",
);

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
