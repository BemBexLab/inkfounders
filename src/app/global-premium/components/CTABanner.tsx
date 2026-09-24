"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MdLocalPhone } from "react-icons/md";
import QuoteTrigger from "../../book-publishing/components/QuoteTrigger";
import { FaArrowRight } from "react-icons/fa6";

const portfolioSlides = [
  {
    src: "/landing-page/image 1.png",
    alt: "Social media management and paid marketing case study",
  },
  {
    src: "/landing-page/image 1 (1).png",
    alt: "Marketing performance statistics case study",
  },
  {
    src: "/landing-page/image 1 (2).png",
    alt: "Marketing performance statistics dashboard case study",
  },
  {
    src: "/landing-page/image 1 (3).png",
    alt: "Online marketing results case study",
  },
  {
    src: "/landing-page/image 1 (4).png",
    alt: "Online foundation campaign case study",
  },
  {
    src: "/landing-page/image 1 (5).png",
    alt: "Physical promotion campaign case study",
  },
];

function PortfolioSlideshow() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((slide) => (slide + 1) % portfolioSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = portfolioSlides[activeSlide];

  return (
    <div className="flex w-full flex-col items-center gap-2 sm:gap-3">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f7f6fc] shadow-[0_18px_55px_rgba(0,0,0,0.35)]">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide.src}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.015 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={currentSlide.src}
              alt={currentSlide.alt}
              fill
              priority={activeSlide === 0}
              sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 640px, (max-width: 1439px) 42vw, 580px"
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className="flex items-center gap-1"
        role="tablist"
        aria-label="Portfolio slides"
      >
        {portfolioSlides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-label={`Show portfolio slide ${index + 1}`}
            aria-selected={activeSlide === index}
            onClick={() => setActiveSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9e500] ${
              activeSlide === index
                ? "w-7 bg-[#d9e500]"
                : "w-3 bg-[#879000] hover:bg-[#b8c100]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function CTABanner2() {
  return (
    <section
      aria-label="Portfolio case studies"
      className="relative w-full overflow-hidden bg-[#1c1c1c] py-10 sm:py-12 lg:py-16"
    >
      <div className="absolute inset-0 h-full w-full lg:w-1/2">
        <img
          src="/landing-page/Rectangle 17.webp"
          alt="desk with tablet and books"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65 lg:bg-gradient-to-r lg:from-transparent lg:from-50% lg:to-[#1c1c1c]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-8 px-5 sm:gap-10 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 lg:px-12 xl:gap-16 xl:px-16">
        <div className="mx-auto w-full min-w-0 max-w-[640px] lg:max-w-none">
          <PortfolioSlideshow />
        </div>

        <div className="mx-auto flex w-full min-w-0 max-w-[680px] flex-col gap-4 text-center lg:max-w-none lg:text-left">
          <p className="plus-jakarta text-[clamp(15px,1.48vw,20px)] font-medium text-white/90 [word-spacing:2px]">
            We don’t talk, We drive results.
          </p>

          <h2 className="plus-jakarta max-w-full text-[clamp(1.625rem,3.2vw,2.8rem)] font-medium uppercase leading-[1.15] tracking-normal text-white">
            <span className="block">Secrets of Publishing</span>
            <span className="relative inline-block max-w-full">
              Success in 2026
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-[45%] w-full -rotate-3"
                height="28"
                viewBox="0 0 100 32"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 4 Q50 40 100 8"
                  fill="none"
                  stroke="#c8d400"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="plus-jakarta max-w-full text-[clamp(14px,1.18vw,16px)] leading-[1.7] text-white/80 md:leading-[1.9] [word-spacing:1px]">
            We are not here to hand you a marketing plan and disappear; we're
            the ones actually running the campaigns, tracking the numbers, and
            showing up when things need adjusting. Every book we have launched
            has real results behind it, and you can see them for yourself in the
            portfolio right next to this. That's the difference: we don't just
            promise visibility; we build it, launch by launch, until your book
            finds its readers.
          </p>

          <div className="mx-auto mt-1 grid w-full max-w-[520px] grid-cols-[repeat(auto-fit,minmax(min(100%,210px),1fr))] gap-3 lg:mx-0">
            <QuoteTrigger className="poppins relative flex min-h-12 min-w-0 items-center justify-center rounded-[8px] border border-[#DADD39] bg-gradient-to-r from-[#C8D400] to-[#F7FF77] px-4 py-3 text-sm text-black transition-colors duration-300 hover:border-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9e500]">
              <span className="slide-bg"></span>
              <span className="relative z-10 flex items-center gap-2 whitespace-nowrap font-semibold tracking-[0.02em]">
                Request a Quote <FaArrowRight className="shrink-0 -rotate-45" size={20} />
              </span>
            </QuoteTrigger>

            <Link
              href="tel:+17864961231"
              className="relative flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-[8px] border border-[#DADD39] bg-gradient-to-r from-[#C8D400] to-[#F7FF77] px-4 py-3 text-sm font-medium text-black transition-colors duration-300 hover:border-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9e500]"
            >
              <span className="slide-bg"></span>
              <MdLocalPhone className="relative z-10 shrink-0 text-xl" />
              <span className="relative z-10 whitespace-nowrap font-semibold tracking-[0.02em]">
                +1 (786) 496-1231
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
