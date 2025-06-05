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
    <OurPromise />
    <Testimonials />
    <GetInTouch />
    <FAQs />
    </>
  );
}
