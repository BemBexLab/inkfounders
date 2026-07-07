import type { Metadata } from "next";
import FAQs from "../Home/FAQs";
import GetInTouch from "../Home/GetInTouch";
import PartnersSection from "../Home/OurPartner";
import { getInTouchContent } from "./getInTouchData";
import LetsCollaborate from "./Components/LetsCollaborate";
import OurMission from "./Components/OurMission";
import VisionBecome from "./Components/VisionBecome";
import WhatSet from "./Components/Whatset";
import WhoWeHero from "./Components/whowearehero";
import WhyChoosePanda from "./Components/WhyChoosePanda";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createCanonicalMetadata("/whoweare"),
  title: "Self-Publishing Company USA: Book Publishing Services for Authors",
  description:
    "Ink Founders is a self-publishing company USA authors trust for editing, ghostwriting, cover design, and marketing.",
};

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
      <FAQs />
    </>
  );
}
