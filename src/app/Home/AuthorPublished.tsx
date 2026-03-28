import Image from "next/image";
import { robotoMono } from "../fonts";

export default function AuthorsPublishedSection() {
  return (
    <section className="w-full bg-[#F6F5F3] max-md:mt-10 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6">
        {/* Book Cover */}
        <div className="flex-shrink-0">
          <Image
            src="/ourbook/New folder/Peter 1.png"
            alt="Book Cover"
            width={540}
            height={540}
            className="transition-transform transform hover:scale-105 hover:translate-x-2 hover:translate-y-2 hover:rotate-3"
            priority
          />
        </div>
        {/* Content */}
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-[27px] font-semibold text-black mb-8">
            Your Story, Your Dream—Our Commitment, let’s make your story into a
            reality too, along with 1000 authors
          </h2>
          <div
            className={`${robotoMono.className} text-gray-700 text-[12px] md:text-[16px] leading-loose`}
          >
            Let’s convert your story into a reality, alongside over 1,000
            authors.
            <br />
            <br />
            Every author begins with an idea or a dream. Fulfill yours with Ink
            Founders. You have the words; we have the tools to transform them
            into a book, not just any book, but a masterpiece. We have amplified
            the voices of many authors; now it could be your turn. At Ink
            Founders, over 1,000 authors have turned their ideas into books that
            have powerfully engaged millions of readers.
            <br />
            <br />
            Whether you have a manuscript or just an idea, if you have passion,
            dedication, and a willingness to act, start today with Ink Founders.
            We support you at every step with a full suite of services, from
            editing and formatting to publishing and marketing.
            <br />
            <br />
            Take the first step and turn your dream into reality. The Ink
            Founders team is here to guide you every step of the way.
          </div>
        </div>
      </div>
    </section>
  );
}
