import type { Metadata } from "next";
import GetInTouch from "../Home/GetInTouch";
import PartnersSection from "../Home/OurPartner";
import ContactUsHero from "./components/ContactUsHero";
import Portfolio from "./components/portfolio";
import { getInTouchContent } from "./getInTouchData";
import { createPageMetadata } from "@/lib/seo";
import Map from "@/components/Map";

export const metadata: Metadata = createPageMetadata(
  "/contactus",
  "Contact Ink Founders | Book Publishing Support",
  "Contact Ink Founders to discuss book publishing, editing, ghostwriting, cover design, and marketing services for your project.",
);

export default function Home() {
  const location = (getInTouchContent.left.contacts ?? []).find(
    (contact) => contact.type === "location",
  );

  return (
    <>
    <ContactUsHero />
    <PartnersSection />
    {/* <GetInTouch data={getInTouchContent} /> */}
    <GetInTouch />
    {/* <Portfolio /> */}
    <Map
      googleMapsLink={location?.href}
      locationQuery={location?.label || "5055 BAYWOOD LN WOODSTOCK GA 30188"}
    />
    </>
  );
}
