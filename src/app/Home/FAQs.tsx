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
          Ink founders provide a variety of services from editing, proofreading, book formatting, book designing, cover designing, ISBN registration, to marketing services. And if you are looking for ghostwriting there is no need to go anywhere, we offer you that too. 
        </div>
        <div className="font-mono text-[15px] text-[#454545]">
          Oh yes, that is the best part of Ink Founders, that you can customize everything that works best for you, as we are aware that every author has different perspectives and they follow a different journey so Ink Founders also addresses this issue by providing personalized consultations to modify a package according to your interest and objectives. 
        </div>
      </>
    ),
  },
  {
    question: "How do you handle editing and proofreading? What are the qualifications of your editors?",
    answer: (
      <div className="font-mono text-[15px] text-[#454545]">
        Our editing and proofreading are handled by qualified and experienced experts having strong background in literature and creative writing. Each story or script is analyzed so that every grammatical error can be addressed, any style can be improved, overall, they ensure that everything goes according to the author’s interest. 
      </div>
    ),
  },
  {
    question: "What distribution channels do you offer for my book?",
    answer: (
      <div className="font-mono text-[15px] text-[#454545]">
        We distribute your book through major online platforms like Amazon, Barnes & Noble, and Ingra Spark, making it reachable globally. 
      </div>
    ),
  },
  {
    question: "Do you offer any marketing and publicity support?",
    answer: (
      <div className="font-mono text-[15px] text-[#454545]">
        Absolutely, we encourage your book through many social media platforms, campaigns, press release and targeted advertising to ensure maximum visibility of your book. 
      </div>
    ),
  },
  {
    question:
      "What are your royalty rates and payment structures? Are there any upfront costs or hidden fees?",
    answer: (
      <div className="font-mono text-[15px] text-[#454545]">
        No, we are fully clear and transformed, all rights and royalties belong to you, there is no any hidden fees. 
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
                  className={`pt-0 pb-7 text-[12px] md:text-[15px] leading-loose ${robotoMono.className}`}
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
