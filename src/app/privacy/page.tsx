import type { Metadata } from "next";
import PrivacyPolicy from "./components/privacy";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/privacy",
  "Privacy Policy | Ink Founders",
  "Read the Ink Founders privacy policy to learn how we collect, use, and protect information submitted through our website.",
);

export default function Privacy() {
  return (
    <>
    <PrivacyPolicy />
    </>
  );
}
