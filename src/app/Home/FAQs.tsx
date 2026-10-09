'use client';

import React, { useState, type ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";
import { robotoMono } from "../fonts";
import type { FAQItem } from "./faqData";

export type FAQsProps = {
  eyebrow: string;
  heading: string;
  description: ReactNode;
  items: FAQItem[];
};

const FAQs: React.FC<FAQsProps> = ({ eyebrow, heading, description, items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full flex justify-center items-center py-10 max-lg:px-5 ">
      <div className="w-full max-w-[1300px] flex flex-col items-center">
        {/* Headings */}
        <p className="text-center text-lg md:text-xl font-bold text-black mb-2">
          {eyebrow}
        </p>
        <h2 className="text-center text-2xl md:text-[2rem] font-bold">
          <span className="text-[#DADD39]">{heading}</span>
        </h2>
        <div className="text-lg text-[#626158] text-center max-w-4xl">
          {description}
        </div>
        {/* FAQ List */}
        <div className="mt-6 flex w-full flex-col gap-4">
          {items.map((faq, idx) => (
            <div
              key={`${faq.question}-${idx}`}
              className="rounded-lg border border-[#ece8d8] bg-[#F6F5F3] px-4 shadow-[0_10px_28px_rgba(65,60,35,0.08)] duration-200 sm:px-6"
            >
              <button
                className="flex w-full items-center justify-between py-5 text-left focus:outline-none sm:py-6"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                style={{ fontWeight: 400 }}
                type="button"
                aria-expanded={openIndex === idx}
                aria-controls={`faq-content-${idx}`}
              >
                <span className="text-base text-[16px] md:text-lg text-black font-normal flex-1">
                  {faq.question}
                </span>
                <span className="flex items-center justify-center min-w-[32px] min-h-[32px]">
                  <FiChevronDown
                    size={28}
                    className={`text-black font-bold transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </button>
              {openIndex === idx && (
                <div
                  className={`pb-6 pt-0 text-[12px] leading-tight md:text-[15px] ${robotoMono.className}`}
                  id={`faq-content-${idx}`}
                >
                  {faq.answerParagraphs.map((paragraph, paragraphIndex) => (
                    <div
                      key={`${faq.question}-${paragraphIndex}`}
                      className={`font-mono text-[15px] text-[#454545] ${
                        paragraphIndex < faq.answerParagraphs.length - 1 ? "mb-3" : ""
                      }`}
                    >
                      {paragraph}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
