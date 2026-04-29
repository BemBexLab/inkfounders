"use client";

import Link from "next/link";
import React from "react";
import { MdLocalPhone } from "react-icons/md";

const LandingNavbar2 = () => {
  const handleQuoteClick = () => {
    window.dispatchEvent(new Event("open-quote-popup"));
  };

  return (
    <section className="absolute left-0 top-0 z-30 flex w-full min-h-[76px] items-start bg-transparent px-5 py-5 sm:px-8 lg:h-[120px] lg:px-[70px] lg:py-[9px]">
      <video
        width="3300"
        height="1500"
        autoPlay
        loop
        muted
        playsInline
        className="h-auto w-[96px] shrink-0 sm:w-[130px] lg:w-[166px] lg:-ml-4"
      >
        <source src="/logovideo/01-Picsart-BackgroundRemover.webm" />
        Your browser does not support the video tag.
      </video>

      <div className="ml-auto flex min-w-0 items-center gap-2 sm:gap-3 lg:absolute lg:right-[50px] lg:top-[37px] lg:ml-0 lg:translate-y-0">
        <Link
          href="tel:+17864961231"
          aria-label="Call Ink Founders"
          className="btn-slide-bg flex h-10 min-w-10 shrink-0 items-center justify-center rounded-[8px] border border-[#C9D700] bg-white px-3 text-sm text-[#1f1f1f] transition-all duration-300 hover:border-black sm:gap-2 sm:px-4 lg:h-[42px] lg:min-w-[182px] lg:px-5 lg:text-[14px]"
        >
          <span className="slide-bg"></span>
          <MdLocalPhone className="relative z-10 text-xl lg:text-[18px]" />
          <span className="relative z-10 hidden whitespace-nowrap font-medium tracking-[0.02em] md:inline">
            +1 (786) 496-1231
          </span>
        </Link>

        <button
          type="button"
          onClick={handleQuoteClick}
          className="btn-slide-bg flex h-10 min-w-0 max-w-[150px] items-center justify-center rounded-[8px] border border-[#D4DE17] bg-[#D4DE17] px-4 text-[12px] font-medium text-black transition-all duration-300 hover:border-black sm:max-w-none sm:px-5 lg:h-[42px] lg:min-w-[156px] lg:px-6 lg:text-[14px]"
        >
          <span className="slide-bg"></span>
          <span className="relative z-10 truncate font-medium tracking-[0.02em]">
            Request a Quote
          </span>
        </button>
      </div>
    </section>
  );
};

export default LandingNavbar2;
