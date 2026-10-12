import type { Metadata } from "next";
import FAQs from "../Home/FAQs";
import { faqContent } from "../Home/faqData";
import GetInTouch from "../Home/GetInTouch";
import PartnersSection from "../Home/OurPartner";
import Publishers from "../publishing-partners/components/Publishers";
import BookGallery from "./components/BookGallery";
import OurBookHero from "./components/OurBookHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/published-books",
  "Published Books | Ink Founders",
  "Explore books published with support from Ink Founders and discover what our authors have created.",
);

export default function Home() {
  return (
    <>
    <OurBookHero />
    <PartnersSection />
    <BookGallery />
    <Publishers />  
    <GetInTouch />
    <FAQs {...faqContent} />
    </>
  );
}
