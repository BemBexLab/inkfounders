'use client';

import React, { useState, ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";
import { robotoMono } from "../fonts";

type FAQ = {
  question: string;
  answer: ReactNode;
};

const faqs: FAQ[] = [
  {
    question: "What Services Are Included in Your Packages—And Can I Customize Them?",
    answer: (
      <>
        <div className="font-mono text-[15px] text-[#454545] mb-2">
          At Ink Founder, our packages include a wide range of services such as editing, proofreading, cover design, formatting, ISBN acquisition, distribution support, and even ghostwriting.
        </div>
        <div className="font-mono text-[15px] text-[#454545]">
          Absolutely–you can customize everything. We know every author’s journey is different, so we offer personalized consultations to tailor a package that aligns perfectly with your needs and goals.
        </div>
      </>
    ),
  },
  {
    question: "How do you handle editing and proofreading? What are the qualifications of your editors?",
    answer: (
      <div className="font-mono text-[15px] text-[#454545]">
        Our editors are experienced professionals with backgrounds in publishing and literature. Each manuscript is thoroughly reviewed for grammar, style, and formatting to ensure it meets industry standards.
      </div>
    ),
  },
  {
    question: "What distribution channels do you offer for my book?",
    answer: (
      <div className="font-mono text-[15px] text-[#454545]">
        We offer distribution through major online retailers such as Amazon, Barnes & Noble, and IngramSpark, reaching readers globally in both print and digital formats.
      </div>
    ),
  },
  {
    question: "Do you offer any marketing and publicity support?",
    answer: (
      <div className="font-mono text-[15px] text-[#454545]">
        Yes! We provide a variety of marketing and publicity services including social media promotion, press release creation, and targeted advertising to help maximize your book’s visibility.
      </div>
    ),
  },
  {
    question:
      "What are your royalty rates and payment structures? Are there any upfront costs or hidden fees?",
    answer: (
      <div className="font-mono text-[15px] text-[#454545]">
        We maintain transparent pricing. You retain full rights and receive royalties directly from distributors. There are no hidden fees, and all costs are discussed upfront before starting your project.
      </div>
    ),
  },
];

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full flex justify-center items-center py-20 max-lg:px-5 ">
      <div className="w-full max-w-[1300px] flex flex-col items-center">
        {/* Headings */}
        <p className="text-center text-lg md:text-xl font-bold text-black mb-2">
          FAQs
        </p>
        <h2 className="text-center text-2xl md:text-[2rem] font-bold mb-14">
          <span className="text-[#DADD39]">Frequently Asked Questions</span>
        </h2>
        {/* FAQ List */}
        <div className="w-full flex flex-col">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`border border-[#f3f3f3]  duration-200 ${
                idx < faqs.length - 1 ? "mb-0" : ""
              }`}
            >
              <button
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
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
                  className={`pt-0 pb-7 text-[12px] md:text-[15px] ${robotoMono.className}`}
                  id={`faq-content-${idx}`}
                >
                  {faq.answer}
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
