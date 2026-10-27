"use client";

import React, { useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Choose Your Coloring Book Theme",
    description:
      <>Start by deciding who will use your book. You might create a <b>children's animal coloring book</b>, an <b>adult mandala coloring book</b>, an educational activity book, or a <b>custom book for a business</b>.<br/>A focused theme makes it easier to <b>plan illustrations</b>, select a suitable format, and create a cover that matches the content.</>,
  },
  {
    number: "02",
    title: "Prepare Your Artwork",
    description:
      <>Create your own <b>illustrations</b> or work with an illustrator. Make sure you have permission to reproduce every image, font, and other asset used in your book.<br />Use clean, <b>high resolution artwork</b> with clear outlines. Follow your printer's file requirements for <b>image resolution, margins, bleed</b>, and page dimensions.</>,
  },
  {
    number: "03",
    title: "Format The Interior Pages",
    description:
      <>Arrange the <b>coloring pages</b> in the intended reading order. Add title pages, instructions, activity pages, or other supporting content where appropriate.<br />Leave sufficient space around important artwork and check that no illustrations are cut off near the binding. If you want <b>single sided coloring pages, plan</b> the page sequence and blank backs before exporting the final file.</>,
  },
  {
    number: "04",
    title: "Design The Cover",
    description:
      <>Your cover should communicate the <b>book's theme</b> and appeal to its intended audience. For a <b>children's coloring book</b>, clear imagery and readable lettering may work well. For an adult coloring book, detailed artwork and a design can help establish the style.</>,
  },
  {
    number: "05",
    title: "Review The Print-Ready Files",
    description:
      <>Check the complete interior and cover before sending the files to print. Review page order, spelling, image quality, margins, and any required bleed.<br/>Request a digital or physical proof when available. This gives you an opportunity to identify layout problems before approving production.</>,
  },
  {
    number: "06",
    title: "Select A Printing Method",
    description:
      <>Digital printing can be useful for smaller quantities and test copies, while offset printing may be more economical for some larger orders. The best option depends on the quantity, paper, binding, turnaround time, and total project cost.<br/>Compare the complete quotes rather than looking only at the price per book.</>,
  },
  {
    number: "07",
    title: "Prepare For Publishing And Sales",
    description:
      <>If you plan to sell your <b>coloring book</b>, consider your target market, <b>retail price, distribution</b> options, and <b>promotional strategy</b>.<br/>Your publishing plan should match how and where you intend to reach readers.</>,
  },
];

const PREVIEW_CHAR_LIMIT = 80;
type Step = (typeof steps)[number];

function getTextContent(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getTextContent).join("");
  }

  if (!React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return "";
  }

  if (node.type === "br") {
    return " ";
  }

  return getTextContent(node.props.children);
}

function StepCard({
  step,
  onSelect,
}: {
  step: Step;
  onSelect: (step: Step) => void;
}) {
  const fullText = getTextContent(step.description).replace(/\s+/g, " ").trim();
  const preview = fullText.slice(0, PREVIEW_CHAR_LIMIT).trimEnd();
  const hasMore = fullText.length > PREVIEW_CHAR_LIMIT;

  return (
    <button
      type="button"
      onClick={() => onSelect(step)}
      aria-label={`Read full details for step ${step.number}: ${step.title}`}
      className="w-full cursor-pointer rounded-lg bg-[#f0f0e0] p-8 text-left transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-md bg-[#DADD39]">
        <span className="text-sm font-bold text-black">{step.number}</span>
      </div>
      <h3 className="mb-4 text-base font-bold text-gray-900">{step.title}</h3>
      <p className="whitespace-pre-line text-sm leading-relaxed text-gray-700">
        {preview}{hasMore ? "…" : ""}
        {hasMore && <span className="mt-2 block font-semibold">Read more</span>}
      </p>
    </button>
  );
}

export default function HowToPrintYourOwnColoringBook() {
  const firstRow = steps.slice(0, 4);
  const secondRow = steps.slice(4);
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);

  useEffect(() => {
    if (!selectedStep) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedStep(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedStep]);

  return (
    <div className="bg-white px-6 py-16 font-mono">
      <div className="mx-auto max-w-7xl">
        {/* Main Heading */}
        <h2 className="mb-2 text-center text-4xl font-semibold text-gray-900 md:text-5xl">
          How To Print Your Own Coloring Book
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-14 max-w-5xl text-center text-sm leading-relaxed text-gray-600">
          If you want to print your own <b>coloring book</b>, following a clear process
          can help prevent costly mistakes.
        </p>

        {/* First Row - 4 Cards */}
        <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {firstRow.map((step) => (
            <StepCard key={step.number} step={step} onSelect={setSelectedStep} />
          ))}
        </div>

        {/* Second Row - 3 Cards Centered */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {secondRow.map((step) => (
            <StepCard key={step.number} step={step} onSelect={setSelectedStep} />
          ))}
        </div>
      </div>

      {selectedStep && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedStep(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="coloring-step-dialog-title"
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#DADD39] text-sm font-bold text-black">
                  {selectedStep.number}
                </span>
                <h3
                  id="coloring-step-dialog-title"
                  className="text-xl font-bold text-gray-900 sm:text-2xl"
                >
                  {selectedStep.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedStep(null)}
                aria-label="Close details"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-2xl text-gray-600 hover:bg-gray-100 hover:text-black focus-visible:outline-2 focus-visible:outline-black"
              >
                ×
              </button>
            </div>
            <p className="whitespace-pre-line text-sm leading-relaxed text-gray-700 sm:text-base">
              {selectedStep.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
