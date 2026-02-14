import React from "react";
import { robotoMono } from "@/app/fonts";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";

const Hero = () => {
  // data object containing text for the hero section
  const heroData = {
    title: (
      <>
        Bring Your Story to Life with Professional<br></br>Audiobook Narration
      </>
    ),
    description:
      "Turn your book into a powerful listening experience with Ink Founders. We convert your manuscript into professional, immersive audio that captures attention from the first word.",
    buttonText: "Request a Call",
    buttonLink: "/contactus",
  };

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-[#F4F3E1] rounded-bl-[100px] py-10 pt-40 md:pt-50">
      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1450px] mx-auto flex items-center justify-center">
        {/* Flex Container for All Layouts */}
        <div className="flex flex-col items-center justify-center w-full">
          {/* Text Content */}
          <div className="px-[60px] w-full flex flex-col items-center justify-center max-md:px-[15px]">
            <h1 className="text-[28px] md:text-[35px] xl:text-[48px] font-semibold leading-tight text-black mb-6 text-center">
              <span className="whitespace-nowrap">{heroData.title}</span>
            </h1>
            <p
              className={`text-gray-700 ${robotoMono.className} text-[12px] md:text-[15px] mb-8 leading-loose text-center`}
            >
              {heroData.description}
            </p>
            <Link href={heroData.buttonLink}>
              <button
                type="button"
                className="
      btn-slide-bg
      flex items-center gap-2 
      border-[1px] border-[#DADD39] bg-[#DADD39] text-black font-normal 
      px-3 py-1 text-sm rounded-md shadow self-center 
      transition-all duration-300
      md:px-5 md:py-2 md:text-base hover:border-black
    "
              >
                {/* Sliding background */}
                <span className="slide-bg"></span>
                {/* Icon and text above the effect */}
                <span className="relative z-10 flex items-center gap-2">
                  <IoMdCall size={18} className="md:w-5 md:h-5 w-4 h-4" />
                  {heroData.buttonText}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
