import Image from "next/image";
import React from "react";
import { robotoMono } from "@/app/fonts";

const HomeHero = () => {
  return (
     <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#F4F3E1] rounded-bl-[100px]">
  {/* Main Container */}
  <div className="relative z-10 w-full max-w-[1450px] mx-auto lg:mt-10 mt-40">
    {/* Flex Container for All Layouts */}
    <div className="
      flex 
      flex-col 
      lg:flex-row
      items-center 
      justify-between 
      min-h-screen
      gap-12 
      lg:gap-0
    ">
      {/* Left Column: Text Content */}
      <div className="
        flex-1 
        flex 
        flex-col 
        justify-center 
        items-center 
        lg:items-start
        px-4 
        md:px-1
        w-full
      ">
        <div className="max-w-xl relative w-full">
          {/* Rounded Text Image */}
          <div className="absolute -top-4 -right-8 md:-right-24 z-20">
            <div className="w-20 h-20 md:w-24 md:h-24 relative">
              <Image
                src="/Home/make your Life Easy.png"
                alt="Circular Make Your Mark"
                fill
                className="object-contain max-md:mr-5"
                priority
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-[55px] font-semibold leading-tight text-black mb-6 text-left  lg:text-left">
  <span className="whitespace-nowrap">Bring Your Story To Life</span>
  <br />
  With Ink Founders Publishing
</h1>
<p className={`text-gray-700 ${robotoMono.className} text-[15px] mb-8 leading-relaxed text-left md:text-center lg:text-left`}>
  Ink Founders is an independent self-publishing platform dedicated to empowering authors with a full suite of digital services. From idea to publication, we support you at every stage of your self-publishing journey. Let&apos;s bring your book to life—reach out to us today.
</p>
<button className="flex items-center gap-2 bg-[#DADD39] text-black font-normal px-5 py-2 rounded-md shadow self-start md:self-center lg:self-start transition hover:bg-transparent hover:border-[1px] hover:border-black">
  Request a Call
</button>

        </div>
      </div>

      {/* Right Column: Book Image */}
      <div className="
        flex-1 
        flex 
        items-center 
        justify-center 
        px-4 
        md:px-8
        w-full
        lg:ml-20
        lg:mt-10
      ">
        <div className="
          flex 
          items-center 
          justify-center 
          w-full
        ">
          <div className="
            relative
            w-[400px] h-[400px] 
            sm:w-[400px] sm:h-[400px]
            md:w-[420px] md:h-[530px]
            xl:w-[790px] xl:h-[790px]
            lg:w-[500px] lg:h-[590px]
            transition-all
          ">
            <Image
              src="/Home/Group 9.png"
              alt="Book Cover"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default HomeHero;