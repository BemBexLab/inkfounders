"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { robotoMono } from "@/app/fonts";
import { MdOutlineRequestQuote } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const unsplashImages = {
  artwork: "/Rectangle 15.svg",
};

/* ---------- Image panel ---------- */
function WorkspaceImage() {
  return (
    <div className="relative h-[min(86vw,520px)] min-h-[340px] w-full overflow-hidden rounded-2xl bg-[#e8e6c9] lg:h-full lg:min-h-0">
      <Image
        src={unsplashImages.artwork}
        alt="Professional comic publishing workspace"
        fill
        sizes="(max-width: 1023px) 100vw, 42vw"
        className="object-cover"
        priority
      />
    </div>
  );
}

/* ---------- Copy panel ---------- */
function HeroCopy() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  return (
    <div className="flex w-full min-w-0 flex-col items-start">
      {/* Accent bar */}
      {/* <div className="mb-7 h-1 w-14 rounded-full bg-[#DADD39]" /> */}

      {/* Headline — flows naturally, sits on one line when space allows */}
      <h1 className="w-full break-words text-left text-[clamp(2.45rem,5vw,4.5rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-[#050505]">
        Comic Book Publishing services
      </h1>

      {/* Services overview */}
      <p
        className={`${robotoMono.className} mt-6 w-full break-words text-left text-[13px] leading-[1.7] text-[#444] sm:text-[14px]`}
      >
        From a Simple Comic Idea to a Book People Can’t Stop Reading!
      </p>
      <p
        className={`${robotoMono.className} mt-2 w-full break-words text-left text-[13px] leading-[1.7] text-[#444] sm:text-[14px]`}
      >
        Got a comic idea?
      </p>
      <p
        className={`${robotoMono.className} mt-2 w-full break-words text-left text-[13px] leading-[1.7] text-[#444] sm:text-[14px]`}
      >
        Where could it go? If you have a simple idea, a finished script,
        original artwork, or a complete graphic novel, Ink Founders can help
        turn your work into a polished book ready to publish.
      </p>
      <p
        className={`${robotoMono.className} mt-2 w-full break-words text-left text-[13px] leading-[1.7] text-[#444] sm:text-[14px]`}
      >
        Our comic book publishing services cover the important stages of the
        publishing process, including story development, script writing,
        editing, proofreading, cover design, interior formatting, publishing
        preparation, print and digital publishing, and marketing support.
      </p>

      {/* CTA buttons */}
      <div className="mt-10 flex w-full flex-row flex-wrap justify-start gap-2 sm:gap-3">
        <a href="tel:+17866526864" className="min-w-0">
          <button
            type="button"
            className="btn-slide-bg flex h-full w-fit items-center justify-center rounded-md border border-transparent bg-[#DADD39] px-2 py-3 text-[12px] font-normal leading-tight text-black shadow transition-all duration-300 hover:border-black min-[390px]:px-3 min-[390px]:text-sm sm:px-5 sm:text-base"
          >
            <span className="slide-bg rounded-md"></span>
            <span className="relative z-10 flex items-center gap-2">
              <IoMdCall size={18} className="h-4 w-4 md:h-5 md:w-5" />
              Get a Free Comic Publishing Consultation
            </span>
          </button>
        </a>

        <button
          type="button"
          onClick={() => setIsConsultationOpen(true)}
          className="btn-slide-bg flex min-w-0 flex-none items-center justify-center rounded-md border border-black bg-transparent px-2 py-3 text-[12px] font-normal leading-tight text-black shadow transition-all duration-300 hover:border-[#DADD39] min-[390px]:px-3 min-[390px]:text-sm sm:px-5 sm:text-base"
        >
          <span className="slide-bg rounded-md bg-[#DADD39]"></span>
          <span className="relative z-10 flex items-center gap-2">
            <IoMdCall
              size={18}
              className="h-4 w-4 md:h-5 md:w-5"
            />
            Request a Publishing Quote
          </span>
        </button>
      </div>
    </div>
  );
}

/* ---------- Hero ---------- */
export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4.25rem)] w-full items-center justify-center bg-[#F4F3E1] px-4 py-16 sm:min-h-[calc(100svh-5rem)] sm:px-6 sm:py-20 md:px-10 lg:px-12 lg:py-10 xl:px-16 xl:py-12">
      <div className="relative mx-auto grid min-w-0 w-full max-w-[1536px] grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-stretch lg:gap-10">
        <div className="min-w-0 w-full">
          <HeroCopy />
        </div>
        <div className="min-w-0 w-full self-stretch">
          <WorkspaceImage />
        </div>
      </div>
    </section>
  );
}
