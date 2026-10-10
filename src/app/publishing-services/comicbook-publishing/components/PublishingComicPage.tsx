"use client";

import { useState } from "react";
import Image from "next/image";
import { robotoMono } from "@/app/fonts";

interface StepData {
  stepNumber: number;
  title: string;
  description: string[];
  imageUrl: string;
}

const tabs = [
  "Idea",
  "Script",
  "Artwork",
  "Editing",
  "Formatting",
  "Cover",
  "Publishing",
  "Readers",
] as const;

type Tab = (typeof tabs)[number];

const stepsData: Record<Tab, StepData> = {
  Idea: {
    stepNumber: 1,
    title: "Develop Your Story",
    description: [
      "Start with your concept, characters, story structure, script, artwork plans, target audience, and publishing goals.",
      "A strong foundation makes the later stages of comic production easier to manage.",
    ],
    imageUrl: "/comic-book/image 28.svg",
  },
  Script: {
    stepNumber: 2,
    title: "Write and Refine the Script",
    description: [
      "Develop the story into a comic script with dialogue, captions, scenes, panel descriptions, and page structure.",
      "If you already have a script, professional editing can help improve clarity, consistency, pacing, and readability.",
    ],
    imageUrl: "/comic-book/image 28 (1).svg",
  },
  Artwork: {
    stepNumber: 3,
    title: "Create the Artwork",
    description: [
      "Develop the visual elements of the comic, including illustrations, panels, characters, backgrounds, colors, and other artwork.",
    ],
    imageUrl: "/comic-book/image 29.svg",
  },
  Editing: {
    stepNumber: 4,
    title: "Edit the Comic",
    description: [
      "Review the written content and make sure the story, dialogue, captions, character names, and visual storytelling work together.",
    ],
    imageUrl: "/comic-book/image 30.svg",
  },
  Formatting: {
    stepNumber: 5,
    title: "Design and Format the Book",
    description: [
      "Prepare the interior pages and cover according to the requirements of the selected publishing format.",
      "This can include panel placement, lettering, typography, margins, bleed, page dimensions, and print specifications.",
    ],
    imageUrl: "/comic-book/image 31.svg",
  },
  Cover: {
    stepNumber: 6,
    title: "Prepare Publishing Files",
    description: [
      "Create the final print-ready and digital files required for your chosen publishing and distribution channels.",
    ],
    imageUrl: "/comic-book/image 32.svg",
  },
  Publishing: {
    stepNumber: 7,
    title: "Publish Your Comic",
    description: [
      "Once the project is professionally prepared, it can move into the publishing and distribution stage.",
    ],
    imageUrl: "/comic-book/image 33.svg",
  },
  Readers: {
    stepNumber: 8,
    title: "Promote Your Book",
    description: [
      "After publication, marketing can help introduce your comic to potential readers and build awareness around your creator brand.",
    ],
    imageUrl: "/comic-book/image 28 (1).svg",
  },
};

export default function PublishComicPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Idea");
  const currentStep = stepsData[activeTab];

  return (
    <div className="min-h-screen w-full min-w-0 bg-[#f0ede3] px-4 py-10 font-sans sm:px-6 sm:py-12 md:px-8 lg:px-14 lg:py-16 xl:py-20">
      <div className="mx-auto w-full max-w-6xl [overflow-wrap:anywhere]">
        {/* Header */}
        <header className="mb-8 text-center sm:mb-10 lg:mb-12">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.15] tracking-tight text-[#1a1a1a]">
            How to Publish a Comic Book
          </h2>

          <p className={` ${robotoMono.className} mx-auto mt-4 max-w-4xl text-sm text-gray-600 sm:text-sm`}>
            You're searching for how to publish a comic book, the process can seem complicated at first. Breaking the project into clear stages makes it easier to understand what needs to happen next.
          </p>
        </header>

        {/* Responsive navigation */}
        <div className="-mx-4 mb-8 snap-x snap-mandatory overflow-x-auto overscroll-x-contain px-4 pb-3 sm:mx-0 sm:mb-10 sm:snap-none sm:overflow-visible sm:px-0 sm:pb-0 lg:mb-12 xl:mb-16">
          <nav
            aria-label="Comic publishing stages"
            className="flex w-max gap-2 sm:grid sm:w-full sm:grid-cols-4 sm:gap-3 xl:grid-cols-8"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                aria-pressed={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`min-h-[44px] w-28 shrink-0 snap-start rounded-md border-2 px-3 py-2.5 text-center text-sm font-semibold leading-snug transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2 motion-reduce:transition-none sm:w-auto sm:min-w-0 sm:px-4 sm:text-base ${
                  activeTab === tab
                    ? "border-[#DADD39] bg-[#DADD39] text-[#1a1a1a]"
                    : "border-gray-400 bg-transparent text-gray-600 hover:bg-[#e8e5db]"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* One column below lg; two columns on desktop */}
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Text */}
          <div className="w-full min-w-0">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#1a1a1a] sm:text-base lg:text-lg">
              Step {currentStep.stepNumber}
            </p>

            <h3 className="mb-4 text-[clamp(1.125rem,2vw,1.5rem)] font-semibold leading-[1.15] tracking-tight text-[#1a1a1a] sm:mb-5 lg:mb-6">
              {currentStep.title}
            </h3>

            <div className={` ${robotoMono.className} space-y-3 font-mono text-sm leading-relaxed text-gray-600 sm:space-y-4 sm:text-base`}>
              {currentStep.description.map((paragraph, index) => (
                <p key={`${activeTab}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-full min-w-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg sm:rounded-2xl">
              <Image
                src={currentStep.imageUrl}
                alt={currentStep.title}
                fill
                sizes="(min-width: 1280px) 544px, (min-width: 1264px) 552px, (min-width: 1024px) calc(50vw - 80px), (min-width: 768px) calc(100vw - 64px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
                className="object-cover"
                priority={activeTab === "Idea"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
