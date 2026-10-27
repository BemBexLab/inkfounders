"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How do I print a coloring book?",
    answer:
      "Create your illustrations, format the interior pages, design the cover, and export print-ready files that meet your printer's specifications. Then select the paper, binding, quantity, and printing method. Review a proof before approving the final order.",
  },
  {
    question: "Where can I find coloring book printing services?",
    answer: "Look for a printing provider that offers the size, paper, binding, quantity, and finishing options your project requires. Ask about print proofs, delivery costs, production times, and file requirements before placing your order.",
  },
  {
    question: "Can I print my own coloring book?",
    answer: "Yes. You can create your own illustrations, arrange the pages, prepare the cover, and submit the files to a suitable printer. You can also explore professional formatting and cover design services if you need help preparing your files.",
  },
  {
    question: "What is the best paper for coloring books?",
    answer: "White uncoated paper is a common choice for colored pencils and crayons. If your audience will use markers, ask the printer about heavier stock and single-sided printing to reduce show-through. Test samples with the intended coloring materials before ordering.",
  },
  {
    question: "Is custom coloring book printing expensive?",
    answer: "The cost depends on the page count, size, paper, binding, quantity, artwork, and finishing. Request itemized quotes for your specifications so you can compare the total cost and price per copy.",
  },
  {
    question: "What is the difference between custom printing and print-on-demand?",
    answer: "Custom printing usually involves ordering a chosen quantity in one production run. Print-on-demand produces copies as customers order them, reducing the need to hold inventory. The best option depends on your sales volume, budget, and distribution plan.",
  },
  {
    question: "Can I create a coloring book for my business?",
    answer: "Yes. Businesses can create branded coloring books for events, educational campaigns, promotions, or customer gifts. Make sure you have permission to use all illustrations, logos, and other branded materials.",
  },
  {
    question: "Can I print a coloring book with single-sided pages?",
    answer: "Single-sided printing is available with some printing formats and binding methods. It can be useful when readers will use markers or want to remove finished pages. Confirm the available options and any additional paper or cost requirements with your printer.",
  },
  {
    question: "Can I sell my own printed coloring book?",
    answer: "Yes. You can explore selling through online marketplaces, your own website, bookstores, or suitable distributors. Before choosing a route, consider production costs, platform requirements, distribution fees, and your expected profit margin.",
  },
  {
    question: "What files do I need for coloring book printing?",
    answer: "Printers commonly request a print-ready PDF for the interior and a separate cover file or cover template. Artwork resolution, color settings, margins, bleed, and page dimensions must follow the printer's specifications.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white px-6 py-16 font-mono">
      <div className="mx-auto max-w-7xl">
        {/* Main Heading */}
        <h2 className="mb-10 text-center text-4xl font-semibold text-gray-900 md:text-5xl">
          Frequently Asked Questions
        </h2>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-[#f4f5f7]"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-[#ebebeb]"
              >
                <span className="text-sm font-medium text-gray-800 md:text-base">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`ml-4 text-gray-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer Content */}
              {openIndex === index && faq.answer && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}