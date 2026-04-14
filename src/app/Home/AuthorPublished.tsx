import Image from "next/image";
import { robotoMono } from "../fonts";

export default function AuthorsPublishedSection() {
  return (
    <section className="w-full bg-[#F6F5F3] pb-8 pt-8 md:pt-12 lg:pt-15">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-5 text-center lg:hidden">
        <h2 className="mb-6 max-w-3xl text-[24px] font-semibold leading-[1.05] text-black sm:text-[28px] md:text-[32px]">
          Your Story, Your Dream - Our Commitment, let's make your story into a
          reality too, along with 1000 authors
        </h2>

        <Image
          src="/ourbook/New folder/Peter 1.png"
          alt="Book Cover"
          width={330}
          height={540}
          className="mb-7 h-auto w-[min(72vw,300px)] transition-transform duration-300 hover:scale-105"
          priority
        />

        <div
          className={`${robotoMono.className} mx-auto max-w-3xl space-y-3 text-left text-[13px] leading-[1.35] text-gray-700 sm:text-[14px] md:text-[15px]`}
        >
          <p>Let's convert your story into a reality, alongside over 1,000
          authors.</p>

          <p>Every author begins with an idea or a dream. Fulfill yours with Ink
          Founders. You have the words; we have the tools to transform them
          into a book, not just any book, but a masterpiece. We have amplified
          the voices of many authors; now it could be your turn. At Ink
          Founders, over 1,000 authors have turned their ideas into books that
          have powerfully engaged millions of readers.</p>

          <p>Whether you have a manuscript or just an idea, if you have passion,
          dedication, and a willingness to act, start today with Ink Founders.
          We support you at every step with a full suite of services, from
          editing and formatting to publishing and marketing.</p>

          <p>Take the first step and turn your dream into reality. The Ink
          Founders team is here to guide you every step of the way.</p>
        </div>
      </div>

      <div className="mx-auto hidden max-w-7xl items-center justify-center gap-10 px-6 lg:flex">
        {/* Book Cover */}
        <div className="flex-shrink-0">
          <Image
            src="/ourbook/New folder/Peter 1.png"
            alt="Book Cover"
            width={330}
            height={540}
            className="transition-transform transform hover:scale-105 hover:translate-x-2 hover:translate-y-2 hover:rotate-3"
            priority
          />
        </div>
        {/* Content */}
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-[27px] leading-[0.9] font-semibold text-black mb-4">
            Your Story, Your Dream - Our Commitment, let's make your story into a
            reality too, along with 1000 authors
          </h2>
          <div
            className={`${robotoMono.className} leading-tight space-y-4 text-gray-700 text-[12px] md:text-[16px]`}
          >
            <p>Let's convert your story into a reality, alongside over 1,000
            authors.</p>
            
            <p className="mt-2">Every author begins with an idea or a dream. Fulfill yours with Ink
            Founders. You have the words; we have the tools to transform them
            into a book, not just any book, but a masterpiece. We have amplified
            the voices of many authors; now it could be your turn. At Ink
            Founders, over 1,000 authors have turned their ideas into books that
            have powerfully engaged millions of readers.</p>
            
            <p className="mt-2">Whether you have a manuscript or just an idea, if you have passion,
            dedication, and a willingness to act, start today with Ink Founders.
            We support you at every step with a full suite of services, from
            editing and formatting to publishing and marketing.</p>
            
            <p className="mt-2">Take the first step and turn your dream into reality. The Ink
            Founders team is here to guide you every step of the way.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
