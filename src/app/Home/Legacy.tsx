import Image from "next/image";
import { robotoMono } from "../fonts";

export default function Lagacy() {
  return (
    <section className="w-full bg-[#F6F5F3] py-20 max-xl:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center  ">
        {/* Content */}
        <div className="max-w-2xl">
          <h2 className="text-[23px] md:text-[27px] font-semibold text-black mb-8">
            Your Ideas—Unfiltered, Your Achievement—Untouched. With Full
            Creative Freedom, Let’s Achieve Professional Supremacy
          </h2>
          <div
            className={`space-y-6 font-mono text-gray-700 text-[15px] leading-loose ${robotoMono.className}`}
          >
            Ink Founders values your creativity. We know it’s not just your
            story or pages, it’s your vision, your imagination, your emotions,
            your voice, and an achievement in the making. We encourage you at
            every step of your journey, from inspiration to turning it into
            reality, without controlling your creative freedom.
            <br />
            <br />
            Ink Founders’ editors are here to refine or clarify your story, not
            rewrite it. We improve clarity while preserving the real essence of
            your story. Your story is your voice, and our responsibility is to
            amplify it, not dilute it. Every page will reflect your voice. You
            have full control over all elements, from the cover that reflects
            your story to the final details that bring it to life. Your vision
            guides everything.
            <br />
            <br />
            After publication with Ink Founders, your work remains entirely
            yours, from ownership to rights and rewards. We are here to guide
            you through the publishing process and marketing strategies.
            <br />
            <br />
            With Ink Founders, you don’t just have your words converted into a
            professional and engaging book; you see your vision become reality.
            Your book will reflect exactly what you imagined, a true reflection
            of your thoughts.
            <br />
            <br />
            We are committed to you.
          </div>
        </div>
        {/* Book Cover */}
        <div className="flex-shrink-0">
          <Image
            src="/Home/updatedImages/Leonard - 2 1.webp"
            alt="Book Cover"
            width={740}
            height={740}
            className="transition-transform transform hover:scale-105 hover:translate-x-2 hover:translate-y-2 hover:rotate-3"
            priority
          />
        </div>
      </div>
    </section>
  );
}
