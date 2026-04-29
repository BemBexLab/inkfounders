import React from "react";
import LandingHero2 from "./components/LandingHero2";
import LandingNavbar2 from "./components/LandingNavbar2";
import NumericValues from "./components/NumericValues";
import ManuScript from "./components/ManuScript";
import WhatYouGet from "./components/WhatYouGet";
import Inkfounderscomparison from "./components/Inkfounderscomparison";
import BooksSection from "./components/Bookssection";
import CTABanner from "../bookpublishing/components/CTABanner";
import Testimonials from "../bookpublishing/components/TestimonialLanding";
import GetInTouch from "../bookpublishing/components/ContactForm";
import LandingFooter from "../bookpublishing/components/LandingFooter";
import QuotePopup from "../bookpublishing/components/QuotePopup";

const Page = () => {
  return (
    <main className="overflow-hidden bg-white">
      <LandingNavbar2 />
      <LandingHero2 />
      <NumericValues />
      <ManuScript />
      <WhatYouGet />
      <Inkfounderscomparison />
      <BooksSection />
      <CTABanner />
      <Testimonials />
      <GetInTouch />
      <LandingFooter />

      {/* Qoute Popup */}
      <QuotePopup />
    </main>
  );
};

export default Page;
