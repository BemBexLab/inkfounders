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
import Lagacy from "./Home/Legacy";
import OurWork from "./Home/OurWork";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createCanonicalMetadata("/"),
  title: "Self-Publishing Company USA: Book Publishing Services for Authors",
  description:
    "Ink Founders is a self-publishing company USA authors trust for full-service book publishing, editing, design, and marketing. Book Free Consultation",
};

export default function Home() {
  return (
    <>
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
      <GetInTouch />
      <FAQs />
    </>
  );
}
