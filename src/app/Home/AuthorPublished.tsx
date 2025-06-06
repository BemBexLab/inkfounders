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
        className=""
        priority
      />
    </div>
    {/* Content */}
    <div className="max-w-2xl">
      <h2 className="text-2xl md:text-[27px] font-semibold text-black mb-8">
        Over 1,300 Authors Published — Your Book Could
        <br className="hidden md:block" />
        Be Next With Ink Founders
      </h2>
      <div className={`${robotoMono.className} space-y-6 text-gray-700 text-[12px] md:text-[16px] leading-relaxed`}>
        <p>
          We’re proud to have helped hundreds of authors bring their books to life—and we’d be honored to help with yours.
        </p>
        <p>
          Wondering if you can self-publish a book? Whether you have a finished manuscript or just the dream to write one, Ink Founders is here to guide you. Our all-in-one digital services cover everything from editing and design to marketing and distribution.
        </p>
        <p>
          Let’s turn your vision into a professionally published book. Explore our services and start your journey with Ink Founders today.
        </p>
      </div>
    </div>
  </div>
</section>


  );
}
