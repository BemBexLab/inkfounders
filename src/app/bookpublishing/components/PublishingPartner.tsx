import React from "react";
import { robotoMono } from "@/app/fonts";
import Link from "next/link";
import { MdLocalPhone } from "react-icons/md";

const PublishingPartner = () => {
  return (
    <section className="overflow-hidden bg-[#F4F3E1] text-black">
      <div className="flex w-full flex-col items-center gap-10 px-5 py-12 sm:px-8 sm:py-14 md:px-12 lg:min-h-[560px] lg:flex-row lg:items-stretch lg:gap-10 lg:px-0 lg:py-0 xl:gap-12">
        <div className="flex w-full max-w-[760px] flex-col justify-center text-center lg:w-[50%] lg:max-w-none lg:py-14 lg:pl-8 lg:pr-0 lg:text-left xl:py-16 xl:pl-[max(4rem,calc((100vw-1440px)/2+4rem))]">
          <h2 className="text-[clamp(2rem,9vw,2.875rem)] font-semibold leading-[1.08] sm:text-[40px] md:text-[46px] lg:text-[42px] xl:text-5xl">
            Your Complete Book Publishing Partner in the USA
          </h2>
          <p
            className={`mx-auto mt-4 max-w-[720px] text-sm leading-[1.8] sm:text-base md:text-lg lg:mx-0 lg:mt-3 lg:max-w-[660px] lg:text-base lg:leading-[1.7] xl:text-lg ${robotoMono.className}`}
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
              href="#quote-popup"
              className="btn-slide-bg flex h-10 items-center justify-center rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-3 text-xs font-medium text-black transition-all duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm lg:h-[45px] lg:min-w-[182px] lg:px-6 lg:text-[15px]"
            >
              <span className="slide-bg"></span>
              <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                Request a Quote
              </span>
            </Link>

            <Link
              href="tel:+17864961231"
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

        <div className="flex w-full max-w-[760px] items-stretch justify-center lg:max-w-none lg:flex-1">
          <img
            src="/landing-page/Rectangle 25.png"
            className="aspect-[16/11] h-auto w-full rounded-xl object-cover sm:aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[560px] lg:rounded-none"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default PublishingPartner;
