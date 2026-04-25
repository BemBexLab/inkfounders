import Link from "next/link";
import React from "react";
import { MdLocalPhone } from "react-icons/md";

const LandingNavBar = () => {
  return (
    <section className="relative z-30 flex min-h-[76px] items-center bg-[#F4F3E1] px-3 py-2 sm:min-h-[88px] sm:px-6 lg:h-[128px] lg:px-[70px] lg:py-0">
      <video
        width="3300"
        height="1500"
        autoPlay
        loop
        muted
        playsInline
        className="h-auto w-[76px] shrink-0 sm:w-[120px] lg:w-[178px] lg:-ml-7"
      >
        <source src="/logovideo/inkfounder_logo_animate.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="ml-auto flex min-w-0 items-center gap-2 sm:gap-3 lg:absolute lg:right-10 lg:top-[46px] lg:ml-0 lg:translate-y-0 2xl:right-[38px]">
        <Link
          href="/contactus"
          aria-label="Call Ink Founders"
          className="btn-slide-bg flex h-10 min-w-10 shrink-0 items-center justify-center rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-2 text-sm text-black transition-all duration-300 hover:border-black sm:h-11 sm:gap-2 sm:px-3 lg:h-[51px] lg:min-w-[214px] lg:px-6 lg:text-[15px]"
        >
          <span className="slide-bg"></span>
          <MdLocalPhone className="relative z-10 text-xl sm:text-[23px] lg:text-[19px]" />
          <span className="relative z-10 hidden whitespace-nowrap tracking-[0.08em] md:inline">
            +1 (786) 496-1231
          </span>
        </Link>

        <Link
          href="/contactus"
          className="btn-slide-bg flex h-10 min-w-0 max-w-[86px] items-center justify-center rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-3 text-xs font-medium text-black transition-all duration-300 hover:border-black sm:h-11 sm:max-w-none sm:px-4 sm:text-sm lg:h-[51px] lg:min-w-[182px] lg:px-6 lg:text-[15px]"
        >
          <span className="slide-bg"></span>
          <span className="relative z-10 truncate font-normal tracking-[0.04em] sm:tracking-[0.08em]">
            Request a Quote
          </span>
        </Link>
      </div>
    </section>
  );
};

export default LandingNavBar;
