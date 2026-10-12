import type { Metadata } from "next";
import TermsAndConditions from "./components/terms";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/terms",
  "Terms and Conditions | Ink Founders",
  "Review the terms and conditions for using the Ink Founders website and publishing services.",
);

export default function Terms() {
  return (
    <>
    <TermsAndConditions />
    </>
  );
}
