import { robotoMono } from "@/app/fonts";
import Image from "next/image";
export default function TheMind() {
  return (
    <section className="w-full bg-[#F6F5F3] py-20">
  <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6">
    {/* Book Cover */}
    <div className="flex-shrink-0">
      <Image
        src="/Service/image 28.png"
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
        What Makes Our Book Publishing Services Stand Out?
      </h2>
      <div className={`${robotoMono.className} space-y-6 text-gray-700 text-[12px] md:text-[16px] leading-relaxed mb-8`}>
        <p>
          From ghostwriting to editing and publishing, we offer end-to-end support tailored to your vision. Whether you need help shaping your story or perfecting your manuscript, our experienced team is here to guide you. At Ink Founders, we’re committed to quality, creativity, and client success—turning your ideas into a professionally published book.
        </p>
      </div>
      <h2 className="text-2xl md:text-[22px] font-normal text-black mb-8">
        Why Authors Choose Us:
      </h2>
      <ul className={`text-[#444444] ${robotoMono.className} list-disc md:text-15px`}>
        <li>Excellence in Every Detail</li>
        <li>On-Time Delivery, Every Time</li>
        <li>Client-Centered Experience</li>
        <li>100% Ownership & Rights</li>
      </ul>
    </div>
  </div>
</section>


  );
}
