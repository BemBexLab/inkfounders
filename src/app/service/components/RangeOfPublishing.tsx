import { robotoMono } from "@/app/fonts";
import Image from "next/image";


export default function RangeOfPublishing() {
  return (
    <section className="w-full bg-[#F6F5F3] py-20">
  <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 px-6">
    
    {/* Content */}
    <div className="max-w-2xl md:pl-20">
      <h2 className="text-2xl md:text-[27px] font-semibold text-black mb-8">
        A Range of Publishing Services
      </h2>
      <div className={`${robotoMono.className} space-y-6 text-gray-700 text-[12px] md:text-[13px] leading-relaxed`}>
        <p>
          At Ink Founder, we offer a wide array of services—including editing, design, and marketing support—to prepare your book for publication. Every step of the way, we prioritize preserving your unique voice and creative vision.
        </p>
       
      </div>
    </div>
    {/* Book Cover */}
    <div className="flex-shrink-0">
      <Image
        src="/Service/Group 35.png"
        alt="Book Cover"
        width={740}
        height={740}
        className=""
        priority
      />
    </div>
  </div>
</section>


  );
}