import { robotoMono } from "../fonts";
import AOSProvider from "@/components/AOSProvider";

// components/AboutSection.tsx
export default function Publishing() {
  return (
    <AOSProvider>
    <section data-aos="fade-down-right" className="w-full bg-[#F6F5F3] pt-20 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between px-7">
        {/* Left: Headline */}
        <div className="md:w-2/5 w-full mb-8 md:mb-0">
          <h2 className="text-[23px] md:text-3xl font-semibold text-black leading-snug">
            We bring your imaginative thoughts into reality book – effortlessly 
          </h2>
        </div>
        {/* Right: Description */}
        <div className={`md:w-3/5 w-full text-[12px] md:text-[14px] text-gray-700 leading-loose ${robotoMono.className}`}>
          <p className="mb-6">
           Where dreams turn into reality – Ink Founders, we understand how exhausting and restless the self-publishing journey can be for the first time, as the author become curious and impatient to see their ideas, and imagination in print, but publishing a book should not be overwhelming instead a stress-free, so Ink Founders’ clear goal is to make a publication both fulfilling and exciting. Ink founders has developed a network of more than 100 qualified experts dedicated to turn author’s enthusiasm into publication.
          </p>
          <p className="mb-6">
           Our objective is clear and straightforward, to make self-publishing journey stress-free, accessible, supportive and eventually successful, even if you have just started to think or just a spark of inspiration, our team is here to assist you at every step of your journey, whether it is proofreading, editing, formatting, ghostwriting or guiding through amazon publish process. We just don’t help you to publish your book, but we help you to reach it right audience and have a strong impact, and with the help of ink founders your creative thoughts turn into powerful, authentic and impressive book.
          </p>
          <p>
            So, let’s turn your ideas into a masterpiece that world can witness. 
          </p>
        </div>
      </div>
    </section>
    </AOSProvider>
  );
}
