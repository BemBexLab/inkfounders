import FAQs from "../Home/FAQs";
import GetInTouch from "../Home/GetInTouch";
import PartnersSection from "../Home/OurPartner";
import LetsCollaborate from "./Components/LetsCollaborate";
import OurMission from "./Components/OurMission";
import VisionBecome from "./Components/VisionBecome";
import WhatSet from "./Components/Whatset";
import WhoWeHero from "./Components/whowearehero";
import WhyChoosePanda from "./Components/WhyChoosePanda";


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
    <GetInTouch />
    <FAQs />
    </>
  );
}
