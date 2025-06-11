import { robotoMono } from "@/app/fonts";
import React from "react";


const WhoWeHero = () => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-[#F4F3E1] rounded-bl-[100px] py-10 pt-40 md:pb-40 md:pt-50">
  {/* Main Container */}
  <div className="relative z-10 w-full max-w-[1450px] mx-auto flex items-center justify-center">
    {/* Flex Container for All Layouts */}
    <div className="flex flex-col items-center justify-center w-full">
      {/* Text Content */}
      <div className="px-[60px] w-full flex flex-col items-center justify-center max-md:px-[15px]">
        <h1 className="text-[28px] md:text-[35px] xl:text-[48px] font-semibold leading-tight text-black mb-6 text-center">
          <span className="whitespace-nowrap">
            Begin Your Literary<br className="block md:hidden"/> Journey with Ink<br className="block md:hidden"/>  Founders
          </span>
          
        </h1>
        <p className={`text-gray-700 ${robotoMono.className} text-[12px] md:text-[15px] mb-8 leading-loose text-center md:mx-30`}>
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
