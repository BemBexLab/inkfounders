import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";


export const metadata: Metadata = createPageMetadata(
  "/publishing-services/editing-and-proofreading",
  "Book Editing and Proofreading Services | Ink Founders",
  "Ink Founders offers professional book editing and proofreading services, from developmental editing to final proofreading.",
);

export default function EditingAndProofreadingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
