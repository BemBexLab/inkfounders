'use client';

import { robotoMono } from "@/app/fonts";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { nl2br } from "@/utils/textUtils";

interface NarrationOption {
  id?: string;
  title: string;
  description: string | React.ReactNode;
  imgSrc: string;
}

interface NarrationData {
  header: string;
  intro: string;
  options: NarrationOption[];
  quote: string | React.ReactNode;
  button: {
    text: string;
    link: string;
  };
}

interface NarrationOptionsProps {
  data?: NarrationData;
}

const NarrationOptions = ({ data }: NarrationOptionsProps) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const renderRichText = (value: string | React.ReactNode) =>
    typeof value === "string" ? nl2br(value) : value;

  const getWordCount = (value: string | React.ReactNode) =>
    typeof value === "string" ? value.trim().split(/\s+/).length : 0;

  const getDisplayText = (
    value: string | React.ReactNode,
    isExpanded: boolean
  ) => {
    if (typeof value !== "string") {
      return value;
    }

    const words = value.trim().split(/\s+/);

    if (isExpanded || words.length <= 17) {
      return value;
    }

    return `${words.slice(0, 17).join(" ")}...`;
  };

  const narrationData: NarrationData = data || {
    header: "Flexible Audiobook Narration Options",
    intro:
      "Every author has a different vision. That's why we offer multiple narration styles:",
    options: [
      {
        id: "author-read",
        title: "Author-Read",
        description:
          "You narrate your own story with professional recording and production support.",
        imgSrc: "/audiobooks/book.webp",
      },
      {
        id: "actor-read",
        title: "Actor-Read",
        description:
          "A trained voice actor performs your book with character depth and emotional range.",
        imgSrc: "/audiobooks/headphones.webp",
      },
      {
        id: "narration-with-musical-scoring",
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
      {/* DESKTOP VERSION */}
      <div className="hidden bg-[#f5f5f5] px-5 pb-14 pt-8 lg:block">
        <div className="max-w-7xl mx-auto text-center">
          {/* Header */}
          <h1 className="text-[32px] font-semibold text-[#333333] mb-3">
            {narrationData.header}
          </h1>
          <p className={`${robotoMono.className} text-[14px] text-[#666666] mb-6`}>
            {narrationData.intro}
          </p>

          {/* Options Grid - Original 3 Column Layout with Images on Top */}
          <div className="flex justify-center gap-20 mb-10">
            {narrationData.options.map((opt, idx) => (
              <div
                key={opt.id ?? opt.title}
                className="flex flex-col items-center max-w-[280px]"
              >
                <div className="w-13 h-13 flex justify-center mb-5">
                  <img src={opt.imgSrc} alt={opt.title} />
                </div>
                <h2 className="text-[18px] font-semibold text-[#444444] mb-3">
                  {opt.title}
                </h2>
                <p className={`${robotoMono.className} text-[14px] text-[#444444] leading-relaxed`}>
                  {renderRichText(
                    getDisplayText(opt.description, expandedItems[opt.title] ?? false)
                  )}
                </p>
                {typeof opt.description === "string" && getWordCount(opt.description) > 17 && (
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedItems((prev) => ({
                        ...prev,
                        [opt.title]: !prev[opt.title],
                      }))
                    }
                    className="mt-3 text-sm font-semibold text-black underline underline-offset-4"
                  >
                    {expandedItems[opt.title] ? "Read less" : "Read more"}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Quote */}
          <p className={`${robotoMono.className} text-[14px] text-[#444444] mb-7 whitespace-pre-line`}>
            {renderRichText(narrationData.quote)}
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

      {/* RESPONSIVE VERSION: h -> Image -> p */}
      <div className="block bg-[#f5f5f5] px-4 py-10 sm:px-6 md:px-8 lg:hidden">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h1 className="mb-3 px-2 text-2xl font-semibold leading-tight text-[#333333] sm:text-3xl">
            {narrationData.header}
          </h1>
          <p className={`${robotoMono.className} px-2 text-sm text-[#666666] sm:text-base`}>
            {narrationData.intro}
          </p>
        </div>

        <div className="mx-auto mb-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {narrationData.options.map((opt, idx) => (
            <div
              key={opt.id ?? opt.title}
              className={`mx-auto flex h-full w-full max-w-md flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm ${
                idx === narrationData.options.length - 1
                  ? "sm:col-span-2 sm:max-w-md"
                  : ""
              }`}
            >
              <h2 className="mb-5 text-lg font-semibold text-[#444444] sm:text-xl">
                {opt.title}
              </h2>

              <div className="mb-5 flex h-20 w-20 items-center justify-center">
                <img
                  src={opt.imgSrc}
                  alt={opt.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <p className={`${robotoMono.className} text-sm text-[#444444] sm:text-base`}>
                  {renderRichText(
                    getDisplayText(opt.description, expandedItems[opt.title] ?? false)
                  )}
                </p>
                {typeof opt.description === "string" && getWordCount(opt.description) > 17 && (
                  <div className="mt-3 text-center">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedItems((prev) => ({
                          ...prev,
                          [opt.title]: !prev[opt.title],
                        }))
                      }
                      className="text-sm font-semibold text-black underline underline-offset-4"
                    >
                      {expandedItems[opt.title] ? "Read less" : "Read more"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mx-auto max-w-3xl px-2 text-center">
          <p className={`${robotoMono.className} whitespace-pre-line text-sm italic text-[#444444] sm:text-base`}>
            {renderRichText(narrationData.quote)}
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
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
