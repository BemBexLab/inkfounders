import Link from "next/link";
import React from "react";
import { IoMdCall } from "react-icons/io";

const NarrationOptions = () => {
  const narrationData = {
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
      <div className="bg-[#f5f5f5] min-h-screen py-16 px-5">
        <div className="max-w-7xl mx-auto text-center">
          {/* Header */}
          <h1 className="text-[32px] font-semibold text-[#333333] mb-3">
            {narrationData.header}
          </h1>
          <p className="text-[14px] text-[#666666] mb-16">
            {narrationData.intro}
          </p>

          {/* Options Grid */}
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
                <p className="text-[14px] text-[#444444] leading-relaxed">
                  {opt.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <p className="text-[14px] text-[#444444] mb-7">
            {narrationData.quote}
          </p>

          {/* CTA Button */}
          <Link href={narrationData.button.link}>
            <button
              type="button"
              className="
      btn-slide-bg inline-flex items-center
      flex items-center gap-2 
      border-[1px] border-[#DADD39] bg-[#DADD39] text-black font-normal 
      px-3 py-1 text-sm rounded-md shadow self-center 
      transition-all duration-300
      md:px-5 md:py-2 md:text-base hover:border-black
    "
            >
              {/* Sliding background */}
              <span className="slide-bg"></span>
              {/* Icon and text above the effect */}
              <span className="relative z-10 flex items-center gap-2">
                <IoMdCall size={18} className="md:w-5 md:h-5 w-4 h-4" />
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
