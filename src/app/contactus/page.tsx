import type { Metadata } from "next";
import GetInTouch from "../Home/GetInTouch";
import PartnersSection from "../Home/OurPartner";
import ContactUsHero from "./components/ContactUsHero";
import Portfolio from "./components/portfolio";
import { getInTouchContent } from "./getInTouchData";
import { createCanonicalMetadata } from "@/lib/seo";
import Map from "@/components/Map";

export const metadata: Metadata = createCanonicalMetadata("/contactus");

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
    <Portfolio />
    <Map
      googleMapsLink={location?.href}
      locationQuery={location?.label || "1221 Brickell Ave, Miami, FL 33131, United States"}
    />
    </>
  );
}
