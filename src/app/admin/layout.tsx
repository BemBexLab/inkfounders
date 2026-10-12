import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createCanonicalMetadata("/admin"),
  title: "Admin | Ink Founders",
  description: "Ink Founders administration area.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
