import React from "react";
import { robotoMono } from "@/app/fonts";
import Link from "next/link";
import { MdLocalPhone } from "react-icons/md";

const PublishingPartner = () => {
  return (
    <section className="bg-[#F4F3E1] text-black">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 py-12 sm:px-8 sm:py-14 md:px-12 lg:flex-row lg:gap-12 lg:px-16 lg:py-16">
        <div className="w-full text-center lg:w-1/2 lg:pr-4 lg:text-left">
          <h2 className="text-[32px] font-semibold leading-[1.08] sm:text-[40px] md:text-[46px] lg:text-5xl">
            Your Complete Book Publishing Partner in the USA
          </h2>
          <p
            className={`mt-4 text-sm leading-[1.8] sm:text-base md:text-lg lg:mt-3 lg:leading-[1.7] ${robotoMono.className}`}
          >
            At Ink Founders, we work with authors at every step, no matter if
            you're still writing or ready to publish. As a USA-based self
            publishing company, our team provides complete guidance throughout
            the publishing journey. We keep the process personal and focused,
            with a dedicated team that stays with you from the first draft to a
            professionally published book across 40+ global platforms.
          </p>

          <div className="mt-4 flex flex-col items-stretch gap-3 min-[430px]:flex-row min-[430px]:justify-center lg:mt-5 lg:flex-wrap lg:justify-start">
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
              className="btn-slide-bg flex h-10 items-center justify-center gap-x-2 rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-3 text-xs font-medium text-black transition-all duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm lg:h-[45px] lg:min-w-[182px] lg:px-6 lg:text-[15px]"
            >
              <span className="slide-bg"></span>
              <MdLocalPhone className="relative z-10 text-xl sm:text-[23px] lg:text-[19px]" />
              <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                +1 (786) 496-1231
              </span>
            </Link>
          </div>
        </div>

        <div className="flex w-full items-center justify-center lg:w-1/2">
          <img
            src="/landing-page/Rectangle 25.png"
            className="h-auto w-full max-w-[620px] rounded-xl object-contain"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default PublishingPartner;
