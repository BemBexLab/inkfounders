import { robotoMono } from "../fonts";
import AOSProvider from "@/components/AOSProvider";

// components/AboutSection.tsx
export default function Publishing() {
  return (
    <AOSProvider>
      <section
        data-aos="fade-down-right"
        className="mt-6 w-full bg-[#F6F5F3] pt-4 md:mt-8 md:pb-4 lg:mt-0"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between px-7">
          {/* Left: Headline */}
          <div className="mb-3 w-full md:mb-0 md:w-2/5">
            <h2 className="text-[23px] font-semibold leading-[1.08] text-black md:text-3xl lg:leading-snug">
              We Help Your Imaginative Thoughts Become A Book Effortlessly.
            </h2>
          </div>
          {/* Right: Description */}
          <div
            className={`w-full space-y-2 text-[12px] leading-[1.25] text-gray-700 md:w-3/5 md:text-[16px] lg:space-y-4 lg:leading-tight ${robotoMono.className}`}
          >
            <p>At Ink Founders, we understand how demanding the self-publishing journey can feel for a first-time author. It's natural to feel eager and impatient to see your ideas in print, but publishing a book shouldn't be overwhelming; it should be exciting. That's our goal: to make publishing fulfilling rather than stressful. Ink Founders has built a network of more than 100 qualified experts dedicated to turning an author's enthusiasm into a finished book. It's part of why so many consider us the best self-publishing company for first-time authors.</p>

            <p className="mt-1 lg:mt-2">Our mission is simple: to make self-publishing stress-free, accessible, supportive, and successful. Whether you're just starting to think about your book or already have a spark of inspiration, our team is with you at every step, proofreading, editing, formatting, ghostwriting, or guiding you through the Amazon publishing process as your Amazon self-publishing company partner. As a full-service book publishing company USA authors rely on, we don't just help you publish your book; we help you reach the right readers and make a lasting impact. With Ink Founders, your ideas can become a powerful, authentic, professionally published book. Let's turn your story into a masterpiece the world can read.</p>

            {/* <p className="mt-1 lg:mt-2">Let your words inspire the world.</p> */}
          </div>
        </div>
      </section>
    </AOSProvider>
  );
}
