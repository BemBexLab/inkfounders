import { robotoMono } from "@/app/fonts";
import Image from "next/image";

export default function OurMission() {
  return (
    <section className="w-full bg-[#F6F5F3] px-4 py-10 sm:px-6 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row lg:items-start lg:gap-12">
        {/* Left: Text and Stats */}
        <div className="w-full max-w-4xl text-center lg:text-left">
          <h2 className="mb-3 text-[25px] font-semibold text-black sm:text-[27px]">
            Our Mission
          </h2>
          <div className={`mb-8 space-y-3 text-[13px] text-[#444444] sm:text-[14px] md:text-[15px] lg:mb-10 ${robotoMono.className}`}>
            <p>
              At Ink Founders, our mission is to empower individuals and businesses around the world to share their stories through expert writing, publishing, and marketing services.
            </p>
            <p>
              We’re dedicated to building lasting partnerships rooted in trust, transparency, and excellence—backed by a committed team and an unwavering focus on delivering high-quality results every step of the way.
            </p>
          </div>

          {/* Stats Box */}
          <div className="mx-auto grid w-full max-w-lg grid-cols-1 gap-6 rounded-xl bg-[#FCFCE7] p-6 text-center shadow-sm min-[520px]:grid-cols-2 min-[520px]:gap-x-8 min-[520px]:gap-y-8 sm:p-8 lg:mx-0 lg:text-left">
            <div className="flex flex-col items-center min-[520px]:items-start">
              <span className="text-[30px] md:text-[50px] font-bold text-[#18181B]">7+</span>
              <span className="text-[15px] text-[#888] mt-2">Years of experience</span>
            </div>
            <div className="flex flex-col items-center min-[520px]:items-start">
              <span className="text-[30px] md:text-[50px] text-3xl font-bold text-[#18181B]">130+</span>
              <span className="text-[15px] text-[#888] mt-2">Professional ghostwriters</span>
            </div>
            <div className="flex flex-col items-center min-[520px]:items-start">
              <span className="text-[30px] md:text-[50px] text-3xl font-bold text-[#18181B]">2000+</span>
              <span className="text-[15px] text-[#888] mt-2">Books Published</span>
            </div>
            <div className="flex flex-col items-center min-[520px]:items-start">
              <span className="text-[30px] md:text-[50px] text-3xl font-bold text-[#18181B]">5000+</span>
              <span className="text-[15px] text-[#888] mt-2">Happy Clients</span>
            </div>
          </div>
        </div>
        {/* Right: Single Book Covers Image */}
        <div className="mt-4 flex w-full items-start justify-center lg:mt-0">
          <Image
            src="/whoweare/Group37 1.png" // <-- your single image path
            alt="Book Covers"
            width={450} // set this to your image’s actual width
            height={450} // set this to your image’s actual height
            className="h-auto w-full max-w-[340px] rounded-lg object-contain sm:max-w-[420px] lg:max-w-[450px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
