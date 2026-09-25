import type { Metadata } from "next";
import FAQs from "../Home/FAQs";
import GetInTouch from "../Home/GetInTouch";
import PartnersSection from "../Home/OurPartner";
import Publishers from "../publishing-partners/components/Publishers";
import BookGallery from "./components/BookGallery";
import OurBookHero from "./components/OurBookHero";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/ourbook");

export default function Home() {
  return (
    <>
    <OurBookHero />
    <PartnersSection />
    <BookGallery />
    <Publishers />  
    <GetInTouch />
    <FAQs />
    </>
  );
}
