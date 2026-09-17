"use client";

import { motion } from "motion/react";

const highlights = [
  {
    title: "Meet Your Dedicated Publishing Team:",
    description:
      "Start with a one-on-one consultation to align on your vision and goals. You'll then be paired with a dedicated team of editors, designers, translators, coordinators, and marketing experts to guide your entire publishing journey.",
  },
  {
    title: "Perfect, Translate & Publish Globally:",
    description:
      "Your manuscript is professionally edited, proofread, formatted, and translated into up to 6 languages, then prepared for global distribution across leading retailers and publishing platforms.",
  },
  {
    title: "Launch Your Book Worldwide:",
    description:
      "Launch with a strategic global marketing campaign, including personalized marketing support, a $2,000 digital advertising budget, and premium exposure such as a Times Square billboard to give your book the visibility it deserves.",
  },
];

export default function BeyondTheOrdinary() {
  return (
    <section
      aria-labelledby="beyond-the-ordinary-title"
      className="w-full overflow-hidden bg-[#fbfbfa] px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-16 lg:py-[76px] xl:px-[64px]"
    >
      <div className="mx-auto w-full max-w-[1400px] text-center">
        <motion.p
          className="mulish mx-auto inline-flex items-center rounded-[7px] bg-[#f0f2d8] px-3 py-1 text-sm font-semibold leading-none text-[#25271f] sm:px-4 sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          Beyond the Ordinary
        </motion.p>

        <motion.h2
          id="beyond-the-ordinary-title"
          className="plus-jakarta relative mx-auto mt-3 max-w-[1000px] text-2xl font-medium uppercase leading-[1.08] tracking-[-0.045em] text-[#111111] sm:mt-4 sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3rem]"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
        >
          Global Premium{" "}
          <span className="relative inline-block">
            Publishing Experience
            <svg
              aria-hidden="true"
              className="absolute left-0 top-[15%] w-[calc(100%+10px)] -rotate-3"
              height="28"
              viewBox="0 0 100 32"
              preserveAspectRatio="none"
            >
              <path
                d="M0 12 Q50 40 100 30"
                fill="none"
                stroke="#c8d400"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h2>

        <motion.p
          className="plus-jakarta mx-auto mt-3 max-w-[1320px] px-2 text-base leading-[1.6] text-[#171717] sm:mt-4 sm:text-lg md:leading-[1.65] lg:text-xl font-medium [word-spacing:2px]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        >
          Our premium publishing team transforms your manuscript into a
          professionally produced, globally positioned book available across
          multiple formats, languages, and international markets. Your story
          deserves global recognition <b>— INKFOUNDERS</b>
        </motion.p>

        <div className="mt-8 grid grid-cols-1 gap-5 text-left sm:mt-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:mt-12 lg:gap-7">
          {highlights.map((highlight, index) => (
            <motion.article
              key={highlight.title}
              className="relative origin-bottom-left rounded-[14px] border border-[#efefeb] bg-white px-5 pb-6 pt-6 shadow-[0_16px_34px_rgba(26,28,15,0.1)] sm:px-6 sm:pb-7 sm:pt-7 md:px-6 md:pb-7 md:pt-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ y: -4, rotate: -2 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C8D400] bg-[#fafbe8] text-sm font-bold text-[#C8D400] poppins sm:h-10 sm:w-10 sm:text-base">
                {index + 1}
              </span>
              <h3 className="plus-jakarta mt-4 text-lg font-semibold leading-[1.25] tracking-[-0.02em] text-[#171717] sm:mt-5 sm:text-xl md:text-2xl">
                {highlight.title}
              </h3>
              <p className="mulish mt-2 text-base leading-[1.5] text-[#292929] sm:mt-2.5 sm:text-lg">
                {highlight.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}