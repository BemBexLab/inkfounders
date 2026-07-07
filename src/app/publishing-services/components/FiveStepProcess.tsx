import { robotoMono } from "@/app/fonts";
import React from "react";
import AOSProvider from "@/components/AOSProvider";

const STEPS = [
  {
    id: "manuscript-review-and-editing",
    title: "Manuscript Review and Editing",
    desc: "We dive deep into your story, refining plot, characters, and language to bring out its true clarity and brilliance."
  },
  {
    id: "book-design",
    title: "Book Design",
    desc: "Your cover tells your story before a reader turns the first page. We design covers that visually capture your book's essence and draw readers in."
  },
  {
    id: "printing-and-binding",
    title: "Printing and Binding",
    desc: "We combine modern technology with careful craftsmanship to deliver crisp pages, vibrant colors, and premium binding for a refined reading experience, including print-on-demand publishing for authors who want to avoid bulk printing and inventory costs."
  },
  {
    id: "marketing-and-promotion",
    title: "Marketing and Promotion",
    desc: "We help your book reach readers who are ready for it, sparking the curiosity and excitement that puts your story at the center of literary conversation. Every publishing package includes marketing support, so your book doesn't just get published; it gets read."
  },
  {
    id: "global-distribution",
    title: "Global Distribution",
    desc: "We help your book reach readers worldwide, including distribution through Amazon's platform in both print and digital formats, as part of our book publishing service with global distribution."
  }
];

const FiveStepProcess = () => {
  return (
    <AOSProvider>
      <section className="flex w-full flex-col items-center bg-[#F4F3E1] px-4 py-10 sm:px-6 lg:px-8">
  <h2 className="mb-8 w-full max-w-4xl text-center text-[20px] font-semibold leading-tight text-black sm:text-2xl md:text-3xl lg:mb-10">
    Our Self-Book Publishing Company's 5-Step Process
  </h2>
  <div className="flex w-full max-w-5xl flex-col gap-5 sm:gap-6">
    {STEPS.map((step, idx) => (
      <div 
        data-aos="fade-down-right" 
        key={step.id}
        className="flex flex-col items-stretch overflow-hidden rounded-lg bg-[#DADD39] lg:flex-row"
      >
        {/* Number and Step */}
        <div className="
          flex flex-col justify-center items-start lg:items-center
          px-0 py-0 lg:px-7 lg:py-4 bg-[#DADD39]
          w-full lg:min-w-[110px] lg:w-[110px]
          border-none lg:border-r-[1px] lg:border-gray-600 
        ">
          <span className="pl-5 pt-5 text-[30px] leading-none text-black sm:text-[36px] lg:pl-0 lg:pt-0 lg:text-[45px]">
            {`0${idx + 1}`}
          </span>
          <span className="pl-5 font-mono text-[14px] text-black lg:pl-0">Step</span>
          {/* Horizontal line for mobile only */}
          <span className="my-3 ml-5 block h-[1.5px] w-24 bg-[#bec01d] lg:hidden" />
        </div>
        {/* Content */}
        <div className="flex flex-1 flex-col justify-center px-5 pb-5 sm:px-6 lg:px-6 lg:py-4">
          <h3 className="mb-1 text-[16px] font-bold leading-snug text-black sm:text-lg">{step.title}</h3>
          <p className={`font-mono text-[13px] leading-snug text-[#444444] sm:text-[14px] ${robotoMono.className}`}>
            {step.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
    </AOSProvider>

  );
};

export default FiveStepProcess;
