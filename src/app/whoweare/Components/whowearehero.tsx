import { robotoMono } from "@/app/fonts";
import React from "react";


const WhoWeHero = () => {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden rounded-bl-[44px] bg-[#F4F3E1] px-4 py-12 sm:rounded-bl-[64px] sm:py-14 md:px-8 lg:rounded-bl-[100px] lg:py-16">
  {/* Main Container */}
  <div className="relative z-10 w-full max-w-[1450px] mx-auto flex items-center justify-center">
    {/* Flex Container for All Layouts */}
    <div className="flex flex-col items-center justify-center w-full">
      {/* Text Content */}
      <div className="flex w-full flex-col items-center justify-center px-0 md:px-[60px]">
        <h1 className="text-[28px] md:text-[35px] xl:text-[48px] font-semibold leading-tight text-black mb-3 text-center">
          <span className="whitespace-nowrap">
            Begin Your Literary<br className="block md:hidden"/> Journey with Ink<br className="block md:hidden"/>  Founders
          </span>
          
        </h1>
        <p className={`text-gray-700 ${robotoMono.className} text-[12px] md:text-[15px] leading-loose text-center md:mx-30`}>
         Dreaming of a bestseller but not quite satisfied with your manuscript? At Ink Founders, we specialize in turning potential into polished perfection. Our expert team is here to refine your work and prepare it for the world.<br/>
         From memoirs to business books and everything in between, we handle every genre with skill and care. With Ink Founders by your side, you&apos;re not just publishing a book—you&apos;re launching a legacy.
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default WhoWeHero;
