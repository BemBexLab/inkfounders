import type { Metadata } from "next";
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
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createCanonicalMetadata("/publishing-services"),
  title:
    "Book Publishing Packages for Authors: Professional Book Publishing Services",
  description:
    "Ink Founders offers professional book publishing services and self-publishing packages with an ISBN included, editing, design, global distribution, and marketing.",
};

export default function Home() {
  return (
    <>
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
      <GetInTouch
        data={{
          left: {
            heading: "Let Us Know If You Need Guidance",
            subheading: "Looking for an expert? Let's talk.",
            paragraphs: [
              <div>
                <p>
                  You've already taken the first step toward self-publishing success, but you may still have questions. If you're looking for expert guidance to bring your ideas and your voice to life, you're in the right place. Ink Founders is here to help.
                </p>
                <p className="mt-3">
                  We offer a free consultation where you can ask questions, share your story ideas, and explore our self-publishing services. Searching for self-publishing services near me? Ink Founders serves authors across the USA, including our self-publishing agency in Miami, Florida, and is proud to be an affordable self-publishing company for authors at every budget.
                </p>
                <p className="mt-3">
                  Take the next step. Connect with us today.
                </p>
              </div>,
            ],
            contacts: [
              {
                type: "phone",
                label: "+1 (786) 496-1231",
                href: "tel:+17864961231",
              },
              {
                type: "email",
                label: "info@inkfounders.com",
                href: "mailto:info@inkfounders.com",
              },
              {
                type: "location",
                label: "1221 Brickell Ave, Miami, FL 33131, United States",
                href: "https://maps.app.goo.gl/mibAgwMcMGF8A8ig7",
              },
            ],
          },
          form: {
            title: "Get In Touch Now!",
            fields: [
              [
                { name: "firstName", type: "text", placeholder: "First name" },
                { name: "lastName", type: "text", placeholder: "Last Name" },
              ],
              [
                { name: "email", type: "email", placeholder: "Email" },
                { name: "phone", type: "tel", placeholder: "Phone number" },
              ],
            ],
            messagePlaceholder: "Message",
            consentText:
              "Please check the box to communicate via SMS or Email (Terms & Conditions & Privacy Policy) - Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to STOP to unsubscribe anytime",
            submitText: "Let's Get Started",
            sendingText: "Sending...",
            consentError: "Please provide consent to communicate.",
            successMessage: "Thank you! Your message has been received.",
            genericError: "Something went wrong. Please try again.",
            networkError: "Network error. Please try again later.",
          },
        }}
      />
      <FAQs />
    </>
  );
}
