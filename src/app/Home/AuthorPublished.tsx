import Image from "next/image";
import { robotoMono } from "../fonts";

export default function AuthorsPublishedSection() {
  return (
    <section className="w-full bg-[#F6F5F3] max-md:mt-10 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6">
        {/* Book Cover */}
        <div className="flex-shrink-0">
          <Image
            src="/Home/image 15 (Flattened).png"
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
            Your Story, Your Dream – Our Commitment, let’s make your story into a reality too along with 1000 authors 
          </h2>
          <div className={`${robotoMono.className} space-y-6 text-gray-700 text-[12px] md:text-[16px] leading-loose`}>
            <p>
              Every author begins with an idea or a dream, so fulfill your dream with Ink Founders. You have words, we have tools to turn your words into a book, not only a book but a masterpiece. We have risen the voice of many maybe now it’s your turn. At Ink Founders over 1000 authors have turn their ideas in to a book that has powerfully engaged millions of readers.
            </p>
            <p>
              It doesn’t matter whether you have a manuscript or you have just got an idea if you have passion, dedication and willingness to do, just start today with Ink Founders, we are here to support you at every step and with full package of services covering everything from editing and formatting to publishing and marketing. 
            </p>
            <p>
              Just take a step and turn your dream into a reality, with the first step Ink Founders’ team is here to guide you with their services. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
