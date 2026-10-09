import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";
import CaseStudyComic from "./components/CaseStudyComic";
import ComicCoverDesign from "./components/ComicCoverDesign";
import ComicPublishing from "./components/ComicPublishing";
import CompleteServices from "./components/CompleteServices";
import CreativeProjectControl from "./components/CreativeProjectControl";
import GraphicNovelPublishing from "./components/GraphicNovelPublishing";
import Hero from "./components/Hero";
import PublishComicPage from "./components/PublishingComicPage";
import RecentBlogs from "./components/RecentBlogs";
import StoryDevelopmentSection from "./components/StoryDevelopmentSection";
import StoryDevelopmentSection2 from "./components/StoryDevelopmentSection2";
import VisualCards from "./components/VisualCards";
import WhereAreYou from "./components/WhereAreYou";
import FAQs from "@/app/Home/FAQs";
import ComicServicesSection from "./components/ComicServicesSection";
import ManuscriptToComicSection from "./components/ManuscriptToComicSection";
import ManuscriptToComicSection2 from "./components/ManuscriptToComicSection2";
import WhyChooseInkFoundersSection from "./components/WhyChooseInkFoundersSection";
import ServicesSection from "./components/ServicesSection";

export const metadata: Metadata = {
  ...createCanonicalMetadata("/publishing-services/comicbook-publishing"),
  title: "Comic Book Publishing Services | Ink Founders",
  description:
    "Bring your comic book or graphic novel to life with Ink Founders' professional publishing services, including story development, editing, design, formatting, publishing, and marketing.",
};

export default function Page() {
  return (
    <div className="[&_p]:text-sm sm:[&_p]:text-base">
      <Hero />
      <ComicServicesSection />
      <CompleteServices />
      <WhereAreYou />
      <PublishComicPage />
      <StoryDevelopmentSection />
      <StoryDevelopmentSection2 />
      <ComicCoverDesign />
      <CreativeProjectControl />
      <ComicPublishing />
      <GraphicNovelPublishing />
      <ManuscriptToComicSection />
      <ManuscriptToComicSection2 />
      <WhyChooseInkFoundersSection />
      <ServicesSection />
      <RecentBlogs />
      <FAQs
        eyebrow=""
        heading="Frequently Asked Questions"
        description={
          <>
            <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-semibold">Still have a question?</h3>{" "}
            <p>
              Tell us where you are in the process and we'll help you find the right next step.
            </p>
          </>
        }
        items={[
          {
            question: "How much does it cost to publish a comic book?",
            answerParagraphs: [
              "The cost depends on the services your project requires. Writing, editing, artwork, cover design, formatting, printing, publishing, and marketing can all affect the overall project cost.",
              "Contact Ink Founders with details about your comic to discuss your project and request a customized estimate.",
            ],
          },
          {
            question: "Can you publish a comic if I only have an idea?",
            answerParagraphs: [
              "Yes. If you have a concept but haven't written the full story yet, we can help with story development, character development, structure, and comic script development.",
            ],
          },
          {
            question: "Can you help publish my finished comic?",
            answerParagraphs: [
              "Yes. If your comic is already written and illustrated, we can help with editing, proofreading, formatting, cover design, publishing preparation, and related services.",
            ],
          },
          {
            question: "Can you help me self-publish a comic book?",
            answerParagraphs: [
              "Yes. We can provide support with publishing preparation, formatting, ISBN and barcode guidance, print-on-demand preparation, digital publishing preparation, distribution preparation, and marketing support.",
            ],
          },
          {
            question: "Do you work with graphic novels?",
            answerParagraphs: [
              "Yes. We can support graphic novel projects through story development, writing, editing, design, formatting, publishing preparation, and promotion.",
            ],
          },
          {
            question: "Do you provide comic book cover design?",
            answerParagraphs: [
              "Yes. We can create custom cover designs for comic books and graphic novels based on your story, genre, characters, and publishing format.",
            ],
          },
          {
            question: "Can you edit an existing comic script?",
            answerParagraphs: [
              "Yes. If you already have a script, our editing support can focus on grammar, dialogue, story consistency, pacing, clarity, and overall readability.",
            ],
          },
          {
            question: "Do I keep control of my comic",
            answerParagraphs: [
              "Your ownership and publishing arrangements should be clearly defined before work begins. We can discuss the scope of services, responsibilities, deliverables, and relevant publishing arrangements for your project.",
            ],
          },
        ]}
      />
    </div>
  );
}
