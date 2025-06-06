import React from "react";
import { robotoMono } from "@/app/fonts";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";

const ServiceHero = () => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-[#F4F3E1] rounded-bl-[100px] py-10 pt-40 md:pt-50">
  {/* Main Container */}
  <div className="relative z-10 w-full max-w-[1450px] mx-auto flex items-center justify-center">
    {/* Flex Container for All Layouts */}
    <div className="flex flex-col items-center justify-center w-full">
      {/* Text Content */}
      <div className="px-[60px] w-full flex flex-col items-center justify-center max-md:px-[15px]">
        <h1 className="text-[28px] md:text-[35px] xl:text-[48px] font-semibold leading-tight text-black mb-6 text-center">
          <span className="whitespace-nowrap">
            Comprehensive Book <br className="block md:hidden" /> Publishing Services
          </span>
        </h1>
        <p className={`text-gray-700 ${robotoMono.className} text-[12px] md:text-[15px] mb-8 leading-relaxed text-center`}>
          Step into excellence with Ink Founder&apos;s full-service publishing solutions. From manuscript evaluation and expert editing to custom design, marketing, and global distribution—we’re here to elevate your story. Whether you&apos;re a first-time author or a seasoned writer, we provide professional support and personalized attention to bring your literary vision to life.
        </p>
        <Link href="/contactus">
  <button
    className="
      flex items-center gap-2 
      border-[1px] border-[#DADD39] bg-[#DADD39] text-black font-normal 
      px-3 py-1 text-sm rounded-md shadow self-center 
      transition hover:bg-transparent hover:border-black
      md:px-5 md:py-2 md:text-base
    "
    type="button"
  >
    <IoMdCall size={18} className="md:w-5 md:h-5 w-4 h-4" />
    Request a Call
  </button>
</Link>

      </div>
    </div>
  </div>
</section>

  );
};

export default ServiceHero;
