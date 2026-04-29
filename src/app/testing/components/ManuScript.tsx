"use client";

import React from "react";

const steps = [
  {
    number: "1",
    title: "Apply & Consult Free",
    text: "Fill the form. Our publishing experts reach out within 24 hours to understand your book, goals and timeline. Zero pressure, completely free.",
  },
  {
    number: "2",
    title: "We Handle Everything",
    text: "Editing, cover design, interior formatting, ISBN registration and platform setup. Your dedicated team does it all while keeping you informed.",
  },
  {
    number: "3",
    title: "Go Live on 40+ Platforms",
    text: "Your book launches on Amazon, Apple Books, Kobo and 37 more simultaneously. We guide marketing and author branding post-launch too.",
  },
];

const ManuScript = () => {
  return (
    <section className="bg-[#F8F8F6] px-4 py-16 sm:px-6 md:px-8 lg:px-10 lg:py-20">
      <p className="text-center text-[#AAAAAA] mb-3 font-semibold tracking-[0.1]">
        SIMPLE PROCESS
      </p>
      <h2 className="text-center text-4xl font-black text-black sm:text-5xl lg:text-6xl">
        From Manuscript to{" "}
        <span className="text-yellow-500">Published Author</span>
      </h2>

      <div className="mt-8 flex flex-wrap justify-center gap-4 sm:mt-8 md:mt-8 md:gap-5">
        {steps.map((step) => (
          <div
            key={step.number}
            className="group flex w-full max-w-[440px] flex-col items-start justify-start rounded-[20px] border border-1 border-black bg-transparent p-6 shadow-xl transition-all duration-300 ease-in-out hover:border-[#E8E8E6] hover:bg-white sm:w-[calc(50%-0.5rem)] sm:p-7 lg:w-[3460px] lg:p-8"
          >
            {/* Icon Circle */}
            <div className="group-hover:bg-yellow-500 flex items-center justify-center w-[50px] h-[50px] rounded-full bg-white text-black text-2xl font-bold shadow-lg shadow-yellow-500/50 transition-all duration-300 ease-in-out">
              {step.number}
            </div>

            {/* Card Content */}
            <h3 className="mt-5 text-[20px] font-semibold text-[#333] text-left">
              {step.title}
            </h3>
            <p className="mt-4 text-left font-medium text-[14px] text-[#777777]">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManuScript;
