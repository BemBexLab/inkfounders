"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { MdLocalPhone } from "react-icons/md";
import QuoteTrigger from "./QuoteTrigger";

const fanTransition = {
  duration: 0.9,
  ease: [0.2, 0.85, 0.2, 1] as const,
};

const liftTransition = {
  duration: 0.32,
  ease: [0.22, 1, 0.36, 1] as const,
};

const rearBook: Variants = {
  hidden: {
    opacity: 0.2,
    x: "-70%",
    y: "-50%",
    scale: 0.86,
    filter: "blur(1px)",
  },
  show: {
    opacity: 1,
    x: "0%",
    y: "-50%",
    scale: 1,
    filter: "blur(0px)",
    transition: { ...fanTransition, delay: 0.12 },
  },
};

const middleBook: Variants = {
  hidden: {
    opacity: 0.35,
    x: "-25%",
    y: "-50%",
    scale: 0.9,
    filter: "blur(1px)",
  },
  show: {
    opacity: 1,
    x: "0%",
    y: "-50%",
    scale: 1,
    filter: "blur(0px)",
    transition: { ...fanTransition, delay: 0.06 },
  },
};

const frontBook: Variants = {
  hidden: {
    opacity: 0.4,
    x: "72%",
    y: "-52%",
    scale: 0.88,
    filter: "blur(1px)",
  },
  show: {
    opacity: 1,
    x: "0%",
    y: "-52%",
    scale: 1,
    filter: "blur(0px)",
    transition: fanTransition,
  },
};

const liftHover = {
  y: -14,
  scale: 1.03,
  filter: "drop-shadow(0 22px 22px rgba(0, 0, 0, .22))",
  transition: liftTransition,
};

export default function BookPublishingSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="book-publishing"
      className="w-full overflow-hidden bg-[#f0ead6] px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[435px] lg:px-8 lg:py-8"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-20 lg:grid-cols-[minmax(0,620px)_minmax(500px,1fr)] lg:gap-14 xl:grid-cols-[minmax(0,825px)_minmax(520px,1fr)] xl:gap-20">
        <div className="mx-auto flex w-full max-w-[825px] flex-col gap-5 text-center lg:mx-0 lg:gap-4 lg:text-left">
          <h2 className="max-w-[825px] text-3xl font-extrabold leading-tight text-[#1a1a00] [font-family:'DM_Sans',sans-serif] min-[430px]:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
            <span className="whitespace-nowrap">Your Complete Book Publishing</span>
            <br className="hidden lg:block" /> Partner In The USA
          </h2>

          <p className="mx-auto max-w-[825px] text-sm leading-[1.85] text-[#3a3a28] [font-family:'DM_Mono',monospace] sm:text-base lg:mx-0 lg:text-sm lg:leading-[1.85] xl:text-lg xl:leading-[1.75]">
            At Ink Founders, we work with authors at every step, no matter if
            you're still writing or ready to publish. As a USA-based self
            publishing company, our team provides complete guidance throughout
            the publishing journey. We keep the process personal and focused,
            with a dedicated team that stays with you from the first draft to a
            professionally published book across 40+ global platforms.
          </p>

          <div className="mx-auto mt-3 flex w-full max-w-[520px] flex-col items-stretch gap-4 min-[430px]:flex-row min-[430px]:justify-center lg:mx-0 lg:max-w-none lg:flex-wrap lg:items-center lg:justify-start lg:gap-5">
            <QuoteTrigger
              className="btn-slide-bg flex h-11 items-center justify-center rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-5 text-sm font-medium text-black transition-all duration-300 hover:border-black sm:h-12 sm:px-6 sm:text-[15px] lg:h-[44px] lg:min-w-[156px] lg:px-6 lg:text-[13px] xl:h-[48px] xl:min-w-[176px] xl:text-sm"
            >
              <span className="slide-bg"></span>
              <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                Request a Quote
              </span>
            </QuoteTrigger>

            <Link
              href="/contactus"
              className="btn-slide-bg flex h-11 items-center justify-center gap-x-3 rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-5 text-sm font-medium text-black transition-all duration-300 hover:border-black sm:h-12 sm:px-6 sm:text-[15px] lg:h-[44px] lg:min-w-[190px] lg:px-6 lg:text-[13px] xl:h-[48px] xl:min-w-[214px] xl:text-sm"
            >
              <span className="slide-bg"></span>
              <MdLocalPhone className="relative z-10 text-xl sm:text-[23px] lg:text-[18px] xl:text-xl" />
              <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                +1 (786) 496-1231
              </span>
            </Link>
          </div>
        </div>

        <div className="relative mx-auto flex h-[280px] w-full max-w-[520px] items-center justify-center min-[430px]:h-[330px] sm:h-[380px] lg:h-[430px] lg:max-w-[600px] xl:h-[480px] xl:max-w-[680px]">
          <motion.div
            className="relative aspect-[520/330] w-[min(100%,520px)] lg:w-[min(100%,600px)] xl:w-[min(100%,680px)]"
            initial={reduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.45 }}
            style={{ perspective: 1200 }}
          >
            <motion.div
              variants={rearBook}
              className="absolute left-[65%] top-[50%] z-10 w-[33%] origin-bottom will-change-transform"
            >
              <motion.img
                src="/landing-page/FpAHhfZ_TjWNBkXgQgFtnQ 1.png"
                alt="Published book cover"
                whileHover={reduceMotion ? undefined : liftHover}
                className="block w-full cursor-pointer rounded-[4px] object-cover will-change-transform"
              />
            </motion.div>
            <motion.div
              variants={middleBook}
              className="absolute left-[45%] top-[50%] z-20 w-[36%] origin-bottom will-change-transform"
            >
              <motion.img
                src="/landing-page/image 21.png"
                alt="Published book cover"
                whileHover={reduceMotion ? undefined : liftHover}
                className="block w-full cursor-pointer rounded-[4px] object-cover will-change-transform"
              />
            </motion.div>
            <motion.div
              variants={frontBook}
              className="absolute left-[13%] top-[50%] z-30 w-[44%] origin-bottom will-change-transform"
            >
              <motion.img
                src="/landing-page/image 20.png"
                alt="Published book cover"
                whileHover={reduceMotion ? undefined : liftHover}
                className="block w-full cursor-pointer rounded-[4px] object-cover will-change-transform"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
