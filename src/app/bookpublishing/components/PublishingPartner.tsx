import React from "react";
import Image from "next/image";
import { robotoMono } from "@/app/fonts";
import Link from "next/link";
import { MdLocalPhone } from "react-icons/md";

const PublishingPartner = () => {
  return (
    <section className="bg-[#F4F3E1] text-black flex items-center">
      <div className="w-1/2 pl-20 pr-8">
        <h2 className="text-5xl font-semibold">
          Your Complete Book Publishing Partner in the USA
        </h2>
        <p className={`mt-3 text-lg !leading-[1.7] ${robotoMono.className}`}>
          At Ink Founders, we work with authors at every step, no matter if you're still writing or ready to publish. As a USA-based self publishing company, our team provides complete guidance throughout the publishing journey. We keep the process personal and focused, with a dedicated team that stays with you from the first draft to a professionally published book across 40+ global platforms.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-1">
            <Link
              href="/contactus"
              className="btn-slide-bg flex h-10 items-center justify-center rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-3 text-xs font-medium text-black transition-all duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm lg:h-[45px] lg:min-w-[182px] lg:px-6 lg:text-[15px]"
            >
              <span className="slide-bg"></span>
              <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                Request a Quote
              </span>
            </Link>

            <Link
              href="/contactus"
              className="btn-slide-bg flex h-10 items-center justify-center rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-3 text-xs font-medium text-black transition-all gap-x-2 duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm lg:h-[45px] lg:min-w-[182px] lg:px-6 lg:text-[15px]"
            >
              <span className="slide-bg"></span>
              <MdLocalPhone className="relative z-10 text-xl sm:text-[23px] lg:text-[19px]" />
              <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                +1 (786) 496-1231
              </span>
            </Link>
          </div>
        
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <img
          src="/landing-page/Rectangle 25.png"
          className="w-full h-auto object-contain"
          alt=""
        />
      </div>
    </section>
  );
};

export default PublishingPartner;
