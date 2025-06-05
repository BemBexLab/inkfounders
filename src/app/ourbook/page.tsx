import FAQs from "../Home/FAQs";
import GetInTouch from "../Home/GetInTouch";
import PartnersSection from "../Home/OurPartner";
import BookGallery from "./components/BookGallery";
import OurBookHero from "./components/OurBookHero";

export default function Home() {
  return (
    <>
    <OurBookHero />
    <PartnersSection />
    <BookGallery />
    <GetInTouch />
    <FAQs />
    </>
  );
}
