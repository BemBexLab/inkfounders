import React from "react";
import { robotoMono } from "@/app/fonts";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";

const ServiceHero = () => {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden rounded-bl-[44px] bg-[#F4F3E1] px-4 py-10 pt-28 sm:rounded-bl-[64px] sm:px-6 sm:pt-32 md:px-8 md:pt-40 lg:rounded-bl-[100px] lg:px-0 lg:pt-50">
  {/* Main Container */}
	  <div className="relative z-10 mx-auto flex w-full max-w-[1450px] items-center justify-center">
    {/* Flex Container for All Layouts */}
	    <div className="flex w-full flex-col items-center justify-center">
      {/* Text Content */}
	      <div className="flex w-full flex-col items-center justify-center px-0 lg:px-[60px]">
	        <h1 className="mb-3 max-w-4xl text-center text-[clamp(2rem,7vw,3rem)] font-semibold leading-[1.05] text-black lg:text-[42px] xl:text-[48px]">
	          <span className="lg:whitespace-nowrap">
	            Comprehensive Book Publishing Services
	          </span>
	        </h1>
	        <p className={`mb-7 max-w-5xl text-center text-[13px] leading-[1.35] text-gray-700 sm:text-[14px] md:text-[15px] lg:mb-8 lg:leading-tight ${robotoMono.className}`}>
          Step into excellence with Ink Founder&apos;s full-service publishing solutions. From manuscript evaluation and expert editing to custom design, marketing, and global distribution—we’re here to elevate your story. Whether you&apos;re a first-time author or a seasoned writer, we provide professional support and personalized attention to bring your literary vision to life.
        </p>
        <Link href="/contactus">
  <button
    type="button"
    className="
      btn-slide-bg
	      flex items-center justify-center gap-2 
      border-[1px] border-[#DADD39] bg-[#DADD39] text-black font-normal 
	      px-4 py-2 text-sm rounded-md shadow self-center 
      transition-all duration-300
      md:px-5 md:py-2 md:text-base hover:border-black
    "
  >
    {/* Sliding background */}
    <span className="slide-bg"></span>
    {/* Icon and text above the effect */}
    <span className="relative z-10 flex items-center gap-2">
      <IoMdCall size={18} className="md:w-5 md:h-5 w-4 h-4" />
      Request a Call
    </span>
  </button>
</Link>


      </div>
    </div>
  </div>
</section>

  );
};

export default ServiceHero;
