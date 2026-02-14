import { robotoMono } from "@/app/fonts";
import Link from "next/link";
import React from "react";
import { IoMdCall } from "react-icons/io";

interface NarrationOption {
  title: string;
  description: string;
  imgSrc: string;
}

interface NarrationData {
  header: string;
  intro: string;
  options: NarrationOption[];
  quote: string;
  button: {
    text: string;
    link: string;
  };
}

interface NarrationOptionsProps {
  data?: NarrationData;
}

const NarrationOptions = ({ data }: NarrationOptionsProps) => {
  const narrationData: NarrationData = data || {
    header: "Flexible Audiobook Narration Options",
    intro:
      "Every author has a different vision. That's why we offer multiple narration styles:",
    options: [
      {
        title: "Author-Read",
        description:
          "You narrate your own story with professional recording and production support.",
        imgSrc: "/audiobooks/book.webp",
      },
      {
        title: "Actor-Read",
        description:
          "A trained voice actor performs your book with character depth and emotional range.",
        imgSrc: "/audiobooks/headphones.webp",
      },
      {
        title: "Narration With Musical Scoring",
        description:
          "Subtle background music enhances the listening experience and adds atmosphere.",
        imgSrc: "/audiobooks/audiochat.webp",
      },
    ],
    quote:
      '"We\'ve generated the highest number of demo requests of all time. It was a 20-30% increase."',
    button: {
      text: "Request a Call",
      link: "/contactus",
    },
  };

  return (
    <section>
      {/* DESKTOP VERSION (above 720px) - Original Layout */}
      <div className="hidden min-[720px]:block bg-[#f5f5f5] min-h-screen py-16 px-5">
        <div className="max-w-7xl mx-auto text-center">
          {/* Header */}
          <h1 className="text-[32px] font-semibold text-[#333333] mb-3">
            {narrationData.header}
          </h1>
          <p className={`${robotoMono.className} text-[14px] text-[#666666] mb-16`}>
            {narrationData.intro}
          </p>

          {/* Options Grid - Original 3 Column Layout with Images on Top */}
          <div className="flex justify-center gap-20 mb-14">
            {narrationData.options.map((opt, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center max-w-[280px]"
              >
                <div className="w-13 h-13 flex justify-center mb-5">
                  <img src={opt.imgSrc} alt={opt.title} />
                </div>
                <h2 className="text-[18px] font-semibold text-[#444444] mb-3">
                  {opt.title}
                </h2>
                <p className={`${robotoMono.className} text-[14px] text-[#444444] leading-relaxed`}>
                  {opt.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <p className={`${robotoMono.className} text-[14px] text-[#444444] mb-7`}>
            {narrationData.quote}
          </p>

          {/* CTA Button */}
          <Link href={narrationData.button.link}>
            <button
              type="button"
              className="
                btn-slide-bg inline-flex items-center
                gap-2 
                border-[1px] border-[#DADD39] bg-[#DADD39] text-black font-normal 
                px-5 py-2 text-base rounded-md shadow 
                transition-all duration-300 hover:border-black
              "
            >
              <span className="slide-bg"></span>
              <span className="relative z-10 flex items-center gap-2">
                <IoMdCall size={20} />
                {narrationData.button.text}
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* MOBILE VERSION (720px and below) - Stacked Layout */}
      <div className="block min-[720px]:hidden bg-[#f5f5f5] min-h-screen py-10 px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#333333] mb-3 leading-tight px-2">
            {narrationData.header}
          </h1>
          <p className="text-sm sm:text-base text-[#666666] px-4">
            {narrationData.intro}
          </p>
        </div>

        {/* Options - Each card stacked vertically */}
        <div className="space-y-6 mb-10">
          {narrationData.options.map((opt, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm p-6 mx-auto max-w-md"
            >
              {/* Title */}
              <div className="mb-3">
                <h2 className="text-lg sm:text-xl font-semibold text-[#444444] text-center">
                  {opt.title}
                </h2>
              </div>

              {/* Description */}
              <div className="mb-5">
                <p className="text-sm sm:text-base text-[#444444] leading-relaxed text-center">
                  {opt.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={opt.imgSrc}
                  alt={opt.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center mb-8 px-6">
          <p className="text-sm sm:text-base text-[#444444] italic">
            {narrationData.quote}
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href={narrationData.button.link}>
            <button
              type="button"
              className="
                btn-slide-bg inline-flex items-center
                gap-2 
                border-[1px] border-[#DADD39] bg-[#DADD39] text-black font-normal 
                px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base rounded-md shadow 
                transition-all duration-300 hover:border-black
              "
            >
              <span className="slide-bg"></span>
              <span className="relative z-10 flex items-center gap-2">
                <IoMdCall size={18} className="sm:w-5 sm:h-5" />
                {narrationData.button.text}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NarrationOptions;