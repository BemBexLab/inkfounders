import Image from "next/image";
import { robotoMono } from "../fonts";

export default function Lagacy() {
  return (
    <section className="w-full bg-[#F6F5F3] px-4 py-10 sm:px-6 md:px-8 md:py-12 lg:px-10 lg:py-15">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 lg:flex-row lg:gap-0">
        {/* Content */}
        <div className="contents lg:block lg:w-full lg:max-w-2xl lg:text-left">
          <h2 className="order-1 mb-5 w-full max-w-3xl text-center text-[23px] font-semibold leading-[1] text-black sm:text-[25px] md:text-[27px] lg:order-none lg:max-w-none lg:text-left">
            Your Ideas—Unfiltered, Your Achievement—Untouched. With Full
            Creative Freedom, Let’s Achieve Professional Supremacy
          </h2>
          <div
            className={`order-3 w-full max-w-3xl space-y-3 text-left font-mono text-[13px] leading-[1.32] text-gray-700 sm:text-[14px] md:text-[15px] lg:order-none lg:max-w-none lg:space-y-4 lg:text-[16px] lg:leading-tight ${robotoMono.className}`}
          >
            <p>Ink Founders values your creativity. We know it’s not just your
            story or pages, it’s your vision, your imagination, your emotions,
            your voice, and an achievement in the making. We encourage you at
            every step of your journey, from inspiration to turning it into
            reality, without controlling your creative freedom.</p>

            <p>Ink Founders’ editors are here to refine or clarify your story, not
            rewrite it. We improve clarity while preserving the real essence of
            your story. Your story is your voice, and our responsibility is to
            amplify it, not dilute it. Every page will reflect your voice. You
            have full control over all elements, from the cover that reflects
            your story to the final details that bring it to life. Your vision
            guides everything.</p>

            <p>After publication with Ink Founders, your work remains entirely
            yours, from ownership to rights and rewards. We are here to guide
            you through the publishing process and marketing strategies.</p>

            <p>With Ink Founders, you don’t just have your words converted into a
            professional and engaging book; you see your vision become reality.
            Your book will reflect exactly what you imagined, a true reflection
            of your thoughts.</p>

            <p>We are committed to you.</p>
          </div>
        </div>
        {/* Book Cover */}
        <div className="order-2 flex w-full flex-shrink-0 justify-center lg:order-none lg:w-auto">
          <Image
            src="/Home/updatedImages/Leonard - 2 1.webp"
            alt="Book Cover"
            width={540}
            height={740}
            className="h-auto w-[min(78vw,340px)] transform transition-transform duration-300 hover:scale-105 lg:w-[540px] lg:hover:translate-x-2 lg:hover:translate-y-2 lg:hover:rotate-3"
            priority
          />
        </div>
      </div>
    </section>
  );
}
