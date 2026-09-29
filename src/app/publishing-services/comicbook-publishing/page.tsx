import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";
import CaseStudyComic from "./components/CaseStudyComic";
import ComicCoverDesign from "./components/ComicCoverDesign";
import ComicMarketing from "./components/ComicMarketing";
import ComicPublishing from "./components/ComicPublishing";
import CompleteServices from "./components/CompleteServices";
import CreativeProjectControl from "./components/CreativeProjectControl";
import FaqSection from "./components/FaqSection";
import GraphicNovelPublishing from "./components/GraphicNovelPublishing";
import Hero from "./components/Hero";
import AllPublishingServices from "./components/AllPublishingServices";
import PublishComicPage from "./components/PublishingComicPage";
import RecentBlogs from "./components/RecentBlogs";
import StoryDevelopmentSection from "./components/StoryDevelopmentSection";
import StoryDevelopmentSection2 from "./components/StoryDevelopmentSection2";
import VisualCards from "./components/VisualCards";
import WhereAreYou from "./components/WhereAreYou";
import WhyChooseInkFounders from "./components/WhyChooseInkFounders";

export const metadata: Metadata = {
  ...createCanonicalMetadata("/publishing-services/comicbook-publishing"),
  title: "Comic Book Publishing Services | Ink Founders",
  description:
    "Bring your comic book or graphic novel to life with Ink Founders' professional publishing services, including story development, editing, design, formatting, publishing, and marketing.",
};

export default function Page() {
  return (
    <>
      <Hero />
      <VisualCards />
      <CompleteServices />
      <WhereAreYou />
      <PublishComicPage />
      <StoryDevelopmentSection />
      <StoryDevelopmentSection2 />
      <ComicCoverDesign />
      <CreativeProjectControl />
      <ComicPublishing />
      <GraphicNovelPublishing />
      <CaseStudyComic />
      <ComicMarketing />
      <WhyChooseInkFounders />
      <AllPublishingServices />
      <RecentBlogs />
      <FaqSection />
    </>
  );
}
