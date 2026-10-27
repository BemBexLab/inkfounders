import Link from "next/link";
import React from "react";

const leftCards = [
  {
    title: "Custom Book Formatting:",
    description:
      "Organize your coloring pages, instructions, title pages, and other content into a consistent layout.",
    rotation: "-rotate-3",
  },
  {
    title: "Book Cover Design:",
    description:
      "Create a cover that reflects your theme and attracts your intended readers.",
    rotation: "rotate-0",
  },
  {
    title: "Artwork Preparation:",
    description:
      "Prepare supplied illustrations for the intended print format.",
    rotation: "rotate-2",
  },
];

const rightCards = [
  {
    title: "Publishing Assistance:",
    description:
      <>Understand the steps involved in preparing your <b>coloring book for publication</b>.</>,
    rotation: "rotate-2",
  },
  {
    title: "Printing Guidance:",
    description:
      <>Choose suitable paper, <b>binding, size</b>, and printing specifications for your project.</>,
    rotation: "rotate-0",
  },
  {
    title: "Book Marketing Support:",
    description:
      <>Explore ways to present your <b>coloring book</b> to readers and potential buyers.</>,
    rotation: "-rotate-2",
  },
];

export default function RelatedColoringBookPrinting() {
  return (
    <div className="min-h-screen bg-[#f5f3e8] px-6 py-16 font-mono">
      <div className="mx-auto max-w-7xl">
        {/* Main Heading */}
        <h2 className="mb-10 text-center text-4xl font-semibold text-gray-900 md:text-5xl">
          Related To Coloring Book Printing:
        </h2>

        {/* Content Area */}
        <div className="relative flex flex-col items-center lg:flex-row lg:justify-between lg:gap-4">
          {/* Left Cards */}
          <div className="flex w-full flex-col gap-8 lg:w-[30%]">
            {leftCards.map((card, index) => (
              <div
                key={index}
                className={`rounded-lg border border-[#d4d0a8] bg-white p-3 shadow-sm transition-transform hover:scale-105 ${card.rotation}`}
              >
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="my-12 flex items-center justify-center lg:my-0 lg:w-[38%]">
            <div className="relative">
              <img
                src="/coloring-book/Group 48.webp"
                alt="Coloring Books"
                className="h-96 w-96 rounded-lg object-contain md:h-[28rem] md:w-[28rem]"
              />
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex w-full flex-col gap-8 lg:w-[29%]">
            {rightCards.map((card, index) => (
              <div
                key={index}
                className={`rounded-lg border border-[#d4d0a8] bg-white p-6 shadow-sm transition-transform hover:scale-105 ${card.rotation}`}
              >
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-20 text-center">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-600">
            We have a list of all{" "}
            <Link className="text-blue-500 hover:underline" href="/">printing services</Link> that depend on
            your project. Printing specifications should be decided prior to the
            order placement.
          </p>
        </div>
      </div>
    </div>
  );
}
