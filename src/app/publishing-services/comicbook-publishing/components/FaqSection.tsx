"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiArrowUpRight, HiChevronDown } from "react-icons/hi2";

const faqData = [
  {
    question: "How much does it cost to publish a comic book?",
    answer:
      <>The cost depends on the services your project requires. Writing, editing, artwork, cover design, formatting, printing, publishing, and marketing can all affect the overall project cost. <br /> Contact Ink Founders with details about your comic to discuss your project and request a customized estimate.</>,
  },
  {
    question: "Can you publish a comic if I only have an idea?",
    answer:
      "Yes. If you have a concept but haven't written the full story yet, we can help with story development, character development, structure, and comic script development.",
  },
  {
    question: "Can you help publish my finished comic?",
    answer:
      "Yes. If your comic is already written and illustrated, we can help with editing, proofreading, formatting, cover design, publishing preparation, and related services.",
  },
  {
    question: "Can you help me self-publish a comic book?",
    answer:
      "Yes. We can provide support with publishing preparation, formatting, ISBN and barcode guidance, print-on-demand preparation, digital publishing preparation, distribution preparation, and marketing support.",
  },
  {
    question: "Do you work with graphic novels?",
    answer:
      "Yes. We can support graphic novel projects through story development, writing, editing, design, formatting, publishing preparation, and promotion.",
  },
  {
    question: "Do you provide comic book cover design?",
    answer:
      "Yes. We can create custom cover designs for comic books and graphic novels based on your story, genre, characters, and publishing format.",
  },
  {
    question: "Can you edit an existing comic script?",
    answer:
      "Yes. If you already have a script, our editing support can focus on grammar, dialogue, story consistency, pacing, clarity, and overall readability.",
  },
  {
    question: "Do I keep control of my comic?",
    answer:
      "Your ownership and publishing arrangements should be clearly defined before work begins. We can discuss the scope of services, responsibilities, deliverables, and relevant publishing arrangements for your project.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#f6f4ea]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#e7e3b6]/50 blur-[100px]" />

        <div className="absolute -bottom-52 -right-40 h-[550px] w-[550px] rounded-full bg-[#dedcca]/70 blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28 xl:px-16">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_650px] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_700px] xl:gap-20">
          {/* Left Side */}
          <div className="w-full lg:sticky lg:top-24">
            <div className="max-w-[520px]">
              <h2 className="text-[42px] font-bold leading-[1.02] tracking-[-0.035em] text-[#10213a] sm:text-[48px] lg:text-[54px]">
                Frequently Asked
                <span className="relative mt-1 block w-fit">
                  Questions
                  <span className="absolute -bottom-2 left-0 h-[7px] w-full bg-yellow-400" />
                </span>
              </h2>
            </div>

            {/* Contact Card */}
            <div className="mt-10 max-w-[520px] rounded-[28px] bg-[#1f201c] p-8 shadow-[0_28px_70px_rgba(24,24,19,0.14)] lg:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d6e94a] text-[#1e2018]">
                <HiArrowUpRight className="h-5 w-5" />
              </div>

              <div className="mt-7">
                <h3 className="text-[23px] font-bold leading-tight text-white">
                  Still have a question?
                </h3>

                <p className="mt-4 max-w-[390px] text-[15px] leading-7 text-white/65">
                  Tell us where you are in the process and we&apos;ll help you
                  find the right next step.
                </p>
              </div>

              <Link
                href="/contactus"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#d6e94a] px-6 py-3.5 text-sm font-bold text-[#1b1c17] transition-all duration-300 hover:bg-white"
              >
                Talk to our team
                <HiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="w-full min-w-0 space-y-3">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-[20px] border transition-all duration-300 ${
                    isOpen
                      ? "border-[#c8d952] bg-white shadow-[0_18px_45px_rgba(61,63,34,0.08)]"
                      : "border-[#e1ded0] bg-white/75 hover:border-[#c9c99e] hover:bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="group flex w-full items-center gap-3 px-4 py-4 text-left outline-none sm:gap-4 sm:px-6 sm:py-5 lg:px-7 lg:py-6"
                  >
                    {/* Number */}
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[11px] font-bold tracking-wider transition-all duration-300 sm:h-11 sm:w-11 ${
                        isOpen
                          ? "bg-[#d1e052] text-[#1e2018]"
                          : "bg-[#f0efe5] text-[#77766e] group-hover:bg-[#ebefc5] group-hover:text-[#6a721d]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span
                      id={`faq-question-${index}`}
                      className={`flex-1 text-[15px] font-bold leading-6 transition-colors duration-300 sm:text-[17px] lg:text-lg ${
                        isOpen ? "text-[#707b1d]" : "text-[#24251f]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Arrow */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10 ${
                        isOpen
                          ? "rotate-180 border-[#d1e052] bg-[#d1e052] text-[#222319]"
                          : "border-[#dddbce] bg-white text-[#858479] group-hover:border-[#c8d952] group-hover:text-[#707b1d]"
                      }`}
                    >
                      <HiChevronDown className="h-5 w-5" />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-[#efede4] px-4 pb-5 pt-4 sm:px-6 sm:pb-6 lg:px-7">
                        <div className="pl-0 sm:pl-[60px]">
                          <p className="text-sm leading-7 text-[#66665e] sm:text-[15px] lg:text-base lg:leading-7">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
