import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";


export const metadata: Metadata = {
  ...createCanonicalMetadata("/publishing-services/editing-and-proofreading"),
  title: "Book Editing and Proofreading Services: Manuscript Editing for Authors",
  description:
    "Ink Founders offers professional book editing and proofreading services, from developmental editing to final proofreading.",
};

export default function EditingAndProofreadingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
