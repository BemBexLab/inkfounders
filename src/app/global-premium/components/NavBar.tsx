"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { MdLocalPhone } from "react-icons/md";

const Navbar = () => {
  const handleQuoteClick = () => {
    window.dispatchEvent(new Event("open-quote-popup"));
  };

  return (
    <section className="absolute left-0 top-0 z-30 flex min-h-[96px] w-full items-start gap-3 overflow-x-hidden overflow-y-visible bg-transparent px-4 py-4 sm:px-6 sm:py-5 lg:min-h-[140px] lg:px-[clamp(24px,5vw,75px)] lg:py-[9px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[64px] bg-gradient-to-b from-white via-white/70 to-transparent"
      />
      {/* <video
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
      </video> */}

      <div className="relative z-10 flex min-w-0 flex-1 flex-col lg:flex-none lg:pt-5">
        <Image
          src="/logovideo/0429 1.gif"
          alt="Ink Founders Logo"
          width="3300"
          height="1500"
          className="h-auto w-[clamp(80px,24vw,140px)] max-w-[140px] shrink-0 brightness-110 sm:w-[clamp(100px,16vw,130px)] lg:ml-0 lg:w-[140px]"
        />
        <p className="mt-1 block w-full max-w-[230px] break-words text-[clamp(0.5rem,1.5vw,0.75rem)] font-semibold uppercase leading-tight text-black lg:w-[230px]">
          your trusted publishing partner
        </p>
      </div>

      <div className="relative z-10 ml-auto flex shrink-0 items-center gap-2 min-[560px]:gap-3 lg:absolute lg:right-[clamp(24px,5vw,76px)] lg:top-9 lg:ml-0 lg:gap-8 lg:translate-y-0">
        <Link
          href="tel:+14043905698"
          aria-label="Call Ink Founders"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-gradient-to-r from-[#C8D400] to-[#F7FF77] px-0 text-sm text-[#1f1f1f] transition-all duration-300 hover:border-black min-[560px]:w-auto min-[560px]:gap-2 min-[560px]:px-3 lg:h-[53px] lg:min-w-[212px] lg:px-5 lg:text-[14px]"
        >
          <MdLocalPhone className="relative z-10 shrink-0 text-xl lg:text-[18px]" />
          <span className="relative z-10 hidden whitespace-nowrap font-medium tracking-[0.02em] min-[560px]:inline poppins">
            +1 (404) 390-5698
          </span>
        </Link>

        <Link
          href="#quote-popup"
          onClick={(event) => {
            event.preventDefault();
            handleQuoteClick();
          }}
          aria-label="Request a quote"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-gradient-to-r from-[#C8D400] to-[#F7FF77] px-0 text-[12px] font-medium text-black transition-all duration-300 hover:border-black min-[560px]:w-auto min-[560px]:gap-2 min-[560px]:px-3 lg:h-[53px] lg:min-w-[224px] lg:px-6 lg:text-[14px]"
        >
          <span className="relative z-10 flex items-center gap-1 whitespace-nowrap font-medium uppercase tracking-[0.02em] poppins">
            <span className="hidden min-[560px]:inline">Request a Quote</span>
            <GoArrowUpRight className="shrink-0" size={20} />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
