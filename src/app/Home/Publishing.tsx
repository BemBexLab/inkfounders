import { robotoMono } from "../fonts";
import AOSProvider from "@/components/AOSProvider";

// components/AboutSection.tsx
export default function Publishing() {
  return (
    <AOSProvider>
      <section
        data-aos="fade-down-right"
        className="w-full bg-[#F6F5F3] pt-4 md:pb-4"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between px-7">
          {/* Left: Headline */}
          <div className="md:w-2/5 w-full mb-8 md:mb-0">
            <h2 className="text-[23px] md:text-3xl font-semibold text-black leading-snug">
              We bring your imaginative thoughts into reality and book
              effortlessly.
            </h2>
          </div>
          {/* Right: Description */}
          <div
            className={`md:w-3/5 w-full leading-tight space-y-4 text-[12px] md:text-[16px] text-gray-700 ${robotoMono.className}`}
          >
            <p>Where dreams turn into reality, Ink Founders, we understand how
            exhausting and restless the self-publishing journey can be for the
            first time, as the author become curious and impatient to see their
            ideas, and imagination in print, but publishing a book should not be
            overwhelming instead a stress-free, so Ink Founders’ clear goal is
            to make a publication both fulfilling and exciting. Ink Founders has
            developed a network of more than 100 qualified experts dedicated to
            turning an author’s enthusiasm into a publication.</p>

            <p className="mt-2">Our objective is clear and straightforward: to make the
            self-publishing journey stress-free, accessible, supportive, and
            eventually successful, even if you have just started to think or
            have just had a spark of inspiration, our team is here to assist you
            at every step of your journey, whether it is proofreading, editing,
            formatting, ghostwriting or guiding through the Amazon publishing
            process. We don’t just help you publish your book; we help you reach
            the right audience and make a strong impact. With the help of Ink
            Founders, your creative thoughts can be transformed into a powerful,
            authentic, and impressive book. Let’s turn your ideas into a
            masterpiece for the world to witness.</p>

            <p className="mt-2">Let your words inspire the world.</p>
          </div>
        </div>
      </section>
    </AOSProvider>
  );
}
