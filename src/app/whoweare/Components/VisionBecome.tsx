import { robotoMono } from "@/app/fonts";
import Image from "next/image";

export default function VisionBecome() {
  return (
    <section className="w-full bg-[#F6F5F3] py-12 sm:py-16 lg:py-20">
  <div className="mx-auto grid max-w-7xl grid-cols-1 items-center justify-center gap-8 px-4 sm:px-6 md:px-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-10">
    <h2 className="text-center text-2xl font-semibold text-black md:text-[27px] lg:col-start-2 lg:row-start-1 lg:mb-2 lg:text-left">
      Ink Founders: Where Vision Becomes Legacy
      <br className="hidden md:block" />
    </h2>

    {/* Book Cover */}
    <div className="flex w-full flex-shrink-0 justify-center lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:w-auto">
      <Image
        src="/whoweare/Group 33.webp"
        alt="Book Cover"
        width={540}
        height={540}
        className="h-auto w-full max-w-[360px] transform transition-transform hover:scale-105 hover:translate-x-2 hover:translate-y-2 hover:rotate-3 sm:max-w-[440px] lg:max-w-[540px]"
        priority
      />
    </div>
    {/* Content */}
    <div className="mx-auto max-w-2xl text-center lg:col-start-2 lg:row-start-2 lg:mx-0 lg:text-left">
      <div className={`${robotoMono.className} space-y-3 text-[12px] text-gray-700 md:text-[15px]`}>
        <p>
         At Ink Founders, we're more than writers, editors, and storytellers; we're the people who help turn your ideas into something real. We care about nurturing creativity and shaping your vision into a finished, well-crafted result, whether that's a book, a cover design, an audiobook, or all of the above.
        </p>
        <p>
         Trust and quality sit at the center of everything we do. We work selectively with authors who share our values of respect, excellence, and purpose, and we bring the same level of creativity and care to every project, protecting your voice while delivering results across writing, design, and narration.
        </p>
      </div>
    </div>
  </div>
</section>


  );
}
