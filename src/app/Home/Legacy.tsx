import Image from "next/image";
import { robotoMono } from "../fonts";

export default function Lagacy() {
  return (
    <section className="w-full bg-[#F6F5F3] px-4 py-10 sm:px-6 md:px-8 md:py-12 lg:px-10 lg:py-15">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 lg:flex-row lg:gap-0">
        {/* Content */}
        <div className="contents lg:block lg:w-full lg:max-w-2xl lg:text-left">
          <h2 className="order-1 mb-5 w-full max-w-3xl text-center text-[23px] font-semibold leading-[1] text-black sm:text-[25px] md:text-[27px] lg:order-none lg:max-w-none lg:text-left">
            Your Ideas, Unfiltered. Your Achievement, Untouched.
          </h2>
          <div
            className={`order-3 w-full max-w-3xl space-y-3 text-left font-mono text-[13px] leading-[1.32] text-gray-700 sm:text-[14px] md:text-[15px] lg:order-none lg:max-w-none lg:space-y-4 lg:text-[16px] lg:leading-tight ${robotoMono.className}`}
          >
            <h3 className="text-[18px] font-bold text-black sm:text-[20px]">
              Full creative freedom, professional results
            </h3>
            <p>At Ink Founders, we know your book is more than pages; it's your vision, your voice, and your achievement. We support you at every step, from that first spark of inspiration through to publication, without ever taking control of your creative freedom.</p>

            <p>Our editors are here to refine and clarify your story, not rewrite it. We sharpen the clarity while protecting the heart of what you wrote. Your story is your voice; our job is to amplify it, not dilute it. You stay in control of every element, from the cover design to the smallest final details. Your vision leads the way.</p>

            <p>After publishing with Ink Founders, your work remains entirely yours, ownership, rights, and rewards included. We're here to guide you through publishing and marketing, not to take anything away from you.</p>

            <p>With Ink Founders, you don't just get your words turned into a professional, engaging book; you get to see your vision become real. Your finished book will reflect exactly what you imagined.</p>

            {/* <p>We are committed to you.</p> */}
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
