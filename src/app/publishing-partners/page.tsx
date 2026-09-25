import type { Metadata } from "next";
import FAQs from "../Home/FAQs";
import GetInTouch from "../Home/GetInTouch";
import PartnersSection from "../Home/OurPartner";
import OurPublishingHero from "./components/OurPublishingHero";
import Publishers from "./components/Publishers";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/ourpublishing");

export default function Home() {
  return (
    <>
    <OurPublishingHero />
    <PartnersSection />
    <Publishers />  
    <GetInTouch />
    <FAQs />
    </>
  );
}
