import React from "react";
import FAQs from "../Home/FAQs";
import GetInTouch from "../Home/GetInTouch";
import PartnersSection from "../Home/OurPartner";
import Testimonials from "../Home/Testimonials";
import ExportSelfBook from "../service/components/ExpertSelfBook";
import FiveStepProcess from "../service/components/FiveStepProcess";
import OurApproach from "../service/components/OurApproach";
import PricingAndPackage from "../service/components/PricingAndPackage";
import RangeOfPublishing from "../service/components/RangeOfPublishing";
import ServiceHero from "../service/components/ServiceHero";
import TheMind from "../service/components/TheMind";
import TrueStory from "../service/components/TrueStory";
import WhatYouGet from "../service/components/WhatYouGet";

const page = () => {
  return (
    <section>
      <ServiceHero />
      <PartnersSection />
      <RangeOfPublishing />
      <PricingAndPackage />
      <TrueStory />
      <OurApproach />
      <ExportSelfBook />
      <FiveStepProcess />
      <TheMind />
      <WhatYouGet />
      <Testimonials />
      <GetInTouch />
      <FAQs />
    </section>
  );
};

export default page;
