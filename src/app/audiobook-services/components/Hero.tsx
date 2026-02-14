import React from "react";
import { robotoMono } from "@/app/fonts";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";

interface HeroData {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface HeroProps {
  data?: HeroData;
}

const Hero = ({ data }: HeroProps) => {
  // data object containing text for the hero section
  const heroData: HeroData = data || {
    title: (
      <>
        Bring Your Story to Life with Professional
        Audiobook Narration
      </>
    ),
    description:
      "Turn your book into a powerful listening experience with Ink Founders. We convert your manuscript into professional, immersive audio that captures attention from the first word.",
    buttonText: "Request a Call",
    buttonLink: "/contactus",
  };

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-[#F4F3E1] rounded-bl-[40px] sm:rounded-bl-[60px] md:rounded-bl-[80px] lg:rounded-bl-[100px] py-10 pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-50">
      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1450px] mx-auto flex items-center justify-center px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Flex Container for All Layouts */}
        <div className="flex flex-col items-center justify-center w-full">
          {/* Text Content */}
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-[26px] leading-[1.3] sm:text-3xl sm:leading-tight md:text-2xl lg:text-[35px] xl:text-[45px] font-semibold text-black mb-5 sm:mb-6 text-center px-2">
              {heroData.title}
            </h1>
            <p
              className={`${robotoMono.className} text-gray-700 text-[13px] sm:text-sm md:text-[15px] mb-7 sm:mb-8 leading-relaxed sm:leading-loose text-center max-w-4xl px-2`}
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
                  px-5 py-2.5 text-sm rounded-md shadow 
                  transition-all duration-300
                  sm:px-6 sm:py-3 md:text-base hover:border-black
                "
              >
                {/* Sliding background */}
                <span className="slide-bg"></span>
                {/* Icon and text above the effect */}
                <span className="relative z-10 flex items-center gap-2">
                  <IoMdCall size={18} className="sm:w-5 sm:h-5" />
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