'use client';

import { robotoMono } from "@/app/fonts";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
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

interface ScrollMetrics {
  thumbHeight: number;
  thumbOffset: number;
  showThumb: boolean;
}

interface ScrollableDescriptionProps {
  children: React.ReactNode;
  maxHeight: number;
  className: string;
}

const ScrollableDescription = ({
  children,
  maxHeight,
  className,
}: ScrollableDescriptionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [metrics, setMetrics] = useState<ScrollMetrics>({
    thumbHeight: 0,
    thumbOffset: 0,
    showThumb: false,
  });

  useEffect(() => {
    const updateMetrics = () => {
      const element = scrollRef.current;

      if (!element) {
        return;
      }

      const { clientHeight, scrollHeight, scrollTop } = element;
      const hasOverflow = scrollHeight > clientHeight + 1;

      if (!hasOverflow) {
        setMetrics({
          thumbHeight: 0,
          thumbOffset: 0,
          showThumb: false,
        });
        return;
      }

      const nextThumbHeight = Math.max(
        (clientHeight / scrollHeight) * clientHeight,
        26
      );
      const maxThumbOffset = clientHeight - nextThumbHeight;
      const scrollProgress = scrollTop / (scrollHeight - clientHeight);

      setMetrics({
        thumbHeight: nextThumbHeight,
        thumbOffset: maxThumbOffset * scrollProgress,
        showThumb: true,
      });
    };

    updateMetrics();

    const element = scrollRef.current;
    if (!element) {
      return;
    }

    element.addEventListener("scroll", updateMetrics);
    window.addEventListener("resize", updateMetrics);

    return () => {
      element.removeEventListener("scroll", updateMetrics);
      window.removeEventListener("resize", updateMetrics);
    };
  }, [children, maxHeight]);

  return (
    <div className="relative flex-1 overflow-hidden" style={{ maxHeight }}>
      <div
        ref={scrollRef}
        className={`h-full overflow-y-auto pr-6 ${className}`}
        style={{ maxHeight, marginRight: -18, paddingRight: 24, scrollbarWidth: "none" }}
      >
        {children}
      </div>

      {metrics.showThumb && (
        <div className="pointer-events-none absolute bottom-0 right-1 top-0 w-[4px] rounded-full bg-black/5">
          <span
            className="absolute left-0 w-full rounded-full bg-[#DADD39] shadow-[0_0_0_1px_rgba(218,221,57,0.12)] transition-transform duration-150"
            style={{
              height: metrics.thumbHeight,
              transform: `translateY(${metrics.thumbOffset}px)`,
            }}
          />
        </div>
      )}
    </div>
  );
};

const NarrationOptions = ({ data }: NarrationOptionsProps) => {
  const renderRichText = (value: string | React.ReactNode) =>
    typeof value === "string" ? nl2br(value) : value;

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
      <div className="hidden bg-[#f5f5f5] px-5 pb-16 pt-10 lg:block">
        <div className="mx-auto max-w-7xl text-center">
          {/* Header */}
          <h1 className="mb-4 text-[32px] font-semibold leading-tight text-[#333333] xl:text-[38px]">
            {narrationData.header}
          </h1>
          <p
            className={`${robotoMono.className} mx-auto mb-10 max-w-5xl text-[14px] leading-7 text-[#666666]`}
          >
            {narrationData.intro}
          </p>

          <div className="mb-12 grid grid-cols-3 gap-7 xl:gap-8">
            {narrationData.options.map((opt) => (
              <div
                key={opt.id ?? opt.title}
                className="flex h-full flex-col rounded-[24px] border border-black/8 bg-white px-8 py-9 text-center shadow-[0_14px_32px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-6 flex justify-center">
                  <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[#DADD39]/10 ring-1 ring-[#DADD39]/30">
                    <img
                      src={opt.imgSrc}
                      alt={opt.title}
                      className="max-h-[42px] w-auto object-contain"
                    />
                  </div>
                </div>
                <h2 className="mb-2 text-[18px] font-semibold leading-snug text-[#444444]">
                  {opt.title}
                </h2>
                <ScrollableDescription
                  maxHeight={150}
                  className="text-left"
                >
                  <p
                    className={`${robotoMono.className} text-center text-[14px] leading-7 text-[#444444]`}
                  >
                    {renderRichText(opt.description)}
                  </p>
                </ScrollableDescription>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mx-auto mb-8 max-w-5xl rounded-[24px] border border-black/6 bg-white/70 px-8 py-6 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
            <p
              className={`${robotoMono.className} whitespace-pre-line text-[14px] leading-7 text-[#444444]`}
            >
              {renderRichText(narrationData.quote)}
            </p>
          </div>

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
          <p
            className={`${robotoMono.className} px-2 text-sm leading-7 text-[#666666] sm:text-base`}
          >
            {narrationData.intro}
          </p>
        </div>

        <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {narrationData.options.map((opt, idx) => (
            <div
              key={opt.id ?? opt.title}
              className={`mx-auto flex h-full w-full max-w-md flex-col rounded-[22px] border border-black/8 bg-white px-6 py-7 text-center shadow-[0_14px_32px_rgba(0,0,0,0.05)] ${
                idx === narrationData.options.length - 1
                  ? "sm:col-span-2 sm:max-w-md"
                  : ""
              }`}
            >
              <div className="mb-5 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#DADD39]/10 ring-1 ring-[#DADD39]/30">
                  <img
                    src={opt.imgSrc}
                    alt={opt.title}
                    className="max-h-11 w-auto object-contain"
                  />
                </div>
              </div>
              <h2 className="mb-2 text-lg font-semibold leading-snug text-[#444444] sm:text-xl">
                {opt.title}
              </h2>

              <div className="flex flex-1 flex-col">
                <ScrollableDescription
                  maxHeight={168}
                  className="text-left"
                >
                  <p
                    className={`${robotoMono.className} text-sm leading-7 text-[#444444] sm:text-base`}
                  >
                    {renderRichText(opt.description)}
                  </p>
                </ScrollableDescription>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mx-auto max-w-3xl px-2 text-center">
          <div className="rounded-[22px] border border-black/6 bg-white/80 px-5 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
            <p
              className={`${robotoMono.className} whitespace-pre-line text-sm italic leading-7 text-[#444444] sm:text-base`}
            >
              {renderRichText(narrationData.quote)}
            </p>
          </div>
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
