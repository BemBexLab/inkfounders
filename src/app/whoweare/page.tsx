import type { Metadata } from "next";
import FAQs from "../Home/FAQs";
import { faqContent } from "../Home/faqData";
import GetInTouch from "../Home/GetInTouch";
import PartnersSection from "../Home/OurPartner";
import { getInTouchContent } from "./getInTouchData";
import LetsCollaborate from "./Components/LetsCollaborate";
import OurMission from "./Components/OurMission";
import VisionBecome from "./Components/VisionBecome";
import WhatSet from "./Components/Whatset";
import WhoWeHero from "./Components/whowearehero";
import WhyChoosePanda from "./Components/WhyChoosePanda";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/whoweare",
  "About Ink Founders | Publishing Support for Authors",
  "Meet Ink Founders, a publishing partner helping authors with editing, ghostwriting, cover design, book production, and marketing.",
);

export default function Home() {
  return (
    <>
      <WhoWeHero />
      <PartnersSection />
      <VisionBecome />
      <WhatSet />
      <LetsCollaborate />
      <OurMission />
      <WhyChoosePanda />
      {/* <GetInTouch data={getInTouchContent} /> */}
      <GetInTouch />
      <FAQs {...faqContent} />
    </>
  );
}
