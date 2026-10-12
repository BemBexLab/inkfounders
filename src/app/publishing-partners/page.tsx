import type { Metadata } from "next";
import FAQs from "../Home/FAQs";
import { faqContent } from "../Home/faqData";
import GetInTouch from "../Home/GetInTouch";
import PartnersSection from "../Home/OurPartner";
import OurPublishingHero from "./components/OurPublishingHero";
import Publishers from "./components/Publishers";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/publishing-partners",
  "Publishing Partners | Ink Founders",
  "Meet the publishing partners and platforms that help Ink Founders authors prepare and distribute their books.",
);

export default function Home() {
  return (
    <>
    <OurPublishingHero />
    <PartnersSection />
    <Publishers />  
    <GetInTouch />
    <FAQs {...faqContent} />
    </>
  );
}
