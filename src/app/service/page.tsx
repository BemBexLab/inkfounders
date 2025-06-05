import FAQs from "../Home/FAQs";
import GetInTouch from "../Home/GetInTouch";
import PartnersSection from "../Home/OurPartner";
import Testimonials from "../Home/Testimonials";
import ExportSelfBook from "./components/ExpertSelfBook";
import FiveStepProcess from "./components/FiveStepProcess";
import OurApproach from "./components/OurApproach";
import PricingAndPackage from "./components/PricingAndPackage";
import RangeOfPublishing from "./components/RangeOfPublishing";
import ServiceHero from "./components/ServiceHero";
import TheMind from "./components/TheMind";
import TrueStory from "./components/TrueStory";
import WhatYouGet from "./components/WhatYouGet";

export default function Home() {
  return (
    <>
    <ServiceHero />
    <PartnersSection />
    <RangeOfPublishing />
    <PricingAndPackage />
    <TrueStory />
    <OurApproach  />
    <ExportSelfBook />
    <FiveStepProcess  />
    <TheMind />
    <WhatYouGet />
    <Testimonials />
    <GetInTouch />
    <FAQs />
    </>
  );
}
