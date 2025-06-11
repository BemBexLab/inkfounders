import { robotoMono } from "@/app/fonts";
import Image from "next/image";

export default function VisionBecome() {
  return (
    <section className="w-full bg-[#F6F5F3] py-20">
  <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6">
    {/* Book Cover */}
    <div className="flex-shrink-0">
      <Image
        src="/whoweare/Group 36.png"
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
        Ink Founders: Where Vision Becomes Legacy
        <br className="hidden md:block" />
        
      </h2>
      <div className={`${robotoMono.className} space-y-6 text-gray-700 text-[12px] md:text-[14px] leading-loose`}>
        <p>
         At Ink Founders, we’re more than writers, editors, and storytellers—we’re dreamers who bring your ideas to life. We’re passionate about nurturing creativity and transforming your vision into a beautifully crafted reality—whether it&apos;s a book, cover design, audiobook, or beyond.
        </p>
        <p>
         Trust and quality are at the heart of everything we do. We selectively collaborate with authors who share our values of respect, excellence, and purpose. With every project, we pour in creativity, care, and craft—honoring your voice while delivering standout results in literature, design, and narration.
        </p>
      </div>
    </div>
  </div>
</section>


  );
}
