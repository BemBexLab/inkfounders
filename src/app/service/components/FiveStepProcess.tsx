import { robotoMono } from "@/app/fonts";
import React from "react";

const STEPS = [
  {
    title: "Manuscript Review and Editing",
    desc: "We dive deep into your story—refining plot, characters, and language to capture its true essence with clarity and brilliance."
  },
  {
    title: "Book Design",
    desc: "Design covers that tell your story before the first page—visually capturing your book's essence and drawing readers in."
  },
  {
    title: "Printing and Binding",
    desc: "Combining modern tech with artisan craftsmanship, we deliver crisp pages, vibrant colors, and premium binding for a truly refined reading experience."
  },
  {
    title: "Marketing and Promotion",
    desc: "Ensure your book reaches eager readers. Spark curiosity and excitement that propels your story to the forefront of literary conversations."
  },
  {
    title: "Manuscript Review and Editing",
    desc: "Reach readers worldwide with Amazon's powerful platform—available in both print and digital formats."
  }
];

const FiveStepProcess = () => {
  return (
    <section className="w-full bg-[#F4F3E1] py-10 flex flex-col items-center">
  <h2 className="text-[20px] md:text-3xl font-semibold text-black text-center mb-10">
    Our Self Book Publishing Company&apos;s 5-Step Process!
  </h2>
  <div className="flex flex-col gap-6 w-full max-w-4xl px-4">
    {STEPS.map((step, idx) => (
      <div
        key={idx}
        className="flex flex-col md:flex-row items-stretch bg-[#DADD39] rounded-2xl overflow-hidden"
      >
        {/* Number and Step */}
        <div className="
          flex flex-col justify-center items-start md:items-center
          px-0 py-0 md:px-7 md:py-4 bg-[#DADD39]
          w-full md:min-w-[110px] md:w-[110px]
          border-none md:border-r-[1px] md:border-gray-600 
        ">
          <span className="text-[30px] md:text-[45px] leading-none text-black pl-5 pt-5 md:pl-0 md:pt-0 ">
            {`0${idx + 1}`}
          </span>
          <span className="font-mono text-[14px] text-black pl-5 md:pl-0">Step</span>
          {/* Horizontal line for mobile only */}
          <span className="block h-[1.5px] w-24 bg-[#bec01d] my-3 md:hidden ml-5" />
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col justify-center pl-5 pr-4 pb-5 md:pl-6 md:pr-4 md:pb-0">
          <h3 className="font-bold text-[16px] md:text-lg text-black mb-1">{step.title}</h3>
          <p className={`font-mono text-[13px] md:text-[14px] text-[#444444] leading-snug ${robotoMono.className}`}>
            {step.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default FiveStepProcess;
