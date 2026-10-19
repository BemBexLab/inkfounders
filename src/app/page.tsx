import type { Metadata } from "next";
import HomeHero from "./Home/HomeHero";
import PartnerLogos from "./Home/OurPartner";
import Publishing from "./Home/Publishing";
import QuoteBanner from "./Home/QuoteBanner";
import WhatMake from "./Home/WhatMake";
import AuthorsPublishedSection from "./Home/AuthorPublished";
import HowItWork from "./Home/HowItWork";
import OurPromise from "./Home/OurPromise";
import Testimonials from "./Home/Testimonials";
import GetInTouch from "./Home/GetInTouch";
import FAQs from "./Home/FAQs";
import { faqContent } from "./Home/faqData";
import Lagacy from "./Home/Legacy";
import OurWork from "./Home/OurWork";
import { createPageMetadata } from "@/lib/seo";
import VideoTestimonials from "@/components/VideoTestimonials";

export const metadata: Metadata = createPageMetadata(
  "/",
  "Self-Publishing Company USA: Book Publishing Services for Authors",
  "Ink Founders is a self-publishing company USA authors trust for full-service book publishing, editing, design, and marketing. Book Free Consultation",
);

export default function Home() {
  return (
    <div>
      <HomeHero />
      <PartnerLogos />
      <Publishing />
      <QuoteBanner />
      <WhatMake />
      <AuthorsPublishedSection />
      <HowItWork />
      <Lagacy />
      <OurWork />
      <OurPromise />
      <Testimonials />
      <VideoTestimonials />
      <GetInTouch />
      <FAQs {...faqContent} />
    </div>
  );
}
