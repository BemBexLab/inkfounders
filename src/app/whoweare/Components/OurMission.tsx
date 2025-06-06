import { robotoMono } from "@/app/fonts";
import Image from "next/image";

export default function OurMission() {
  return (
    <section className="w-full bg-[#F6F5F3] py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 px-6">
        {/* Left: Text and Stats */}
        <div className="w-full max-w-4xl">
          <h2 className="text-[27px] font-semibold text-black mb-7">
            Our Mission
          </h2>
          <div className={`space-y-5 text-[#444444] text-[15px] leading-relaxed mb-10 ${robotoMono.className}`}>
            <p>
              At Ink Founders, our mission is to empower individuals and businesses around the world to share their stories through expert writing, publishing, and marketing services.
            </p>
            <p>
              We’re dedicated to building lasting partnerships rooted in trust, transparency, and excellence—backed by a committed team and an unwavering focus on delivering high-quality results every step of the way.
            </p>
          </div>

          {/* Stats Box */}
          <div className="bg-[#FCFCE7] rounded-xl p-8 grid grid-cols-2 gap-y-8 gap-x-10 w-full max-w-lg max-h-lg shadow-sm py-15">
            <div className="flex flex-col items-start">
              <span className="text-[30px] md:text-[50px] font-bold text-[#18181B]">7+</span>
              <span className="text-[15px] text-[#888] mt-2">Years of experience</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[30px] md:text-[50px] text-3xl font-bold text-[#18181B]">130+</span>
              <span className="text-[15px] text-[#888] mt-2">Professional ghostwriters</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[30px] md:text-[50px] text-3xl font-bold text-[#18181B]">2000+</span>
              <span className="text-[15px] text-[#888] mt-2">Books Published</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[30px] md:text-[50px] text-3xl font-bold text-[#18181B]">5000+</span>
              <span className="text-[15px] text-[#888] mt-2">Happy Clients</span>
            </div>
          </div>
        </div>
        {/* Right: Single Book Covers Image */}
        <div className="w-full flex justify-center items-start mt-12 lg:mt-0">
          <Image
            src="/whoweare/Group 37.png" // <-- your single image path
            alt="Book Covers"
            width={450} // set this to your image’s actual width
            height={450} // set this to your image’s actual height
            className="rounded-lg object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
