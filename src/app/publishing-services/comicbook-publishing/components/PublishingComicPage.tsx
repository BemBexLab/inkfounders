"use client";

import React, { useState } from "react";
import Image from "next/image";

interface StepData {
  stepNumber: number;
  title: string;
  description: string[];
  imageUrl: string;
}

const tabs = ["Idea", "Script", "Artwork", "Editing", "Formatting", "Cover", "Publishing", "Readers"];

const stepsData: Record<string, StepData> = {
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
  const [activeTab, setActiveTab] = useState("Idea");
  const currentStep = stepsData[activeTab];

  return (
    <div className="min-h-screen bg-[#f0ede3] px-6 py-12 md:px-16 lg:px-24 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 tracking-tight">
            How to Publish a Comic Book
          </h2>
          <p className="font-mono text-md md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
            You're searching for how to publish a comic book, the process can seem complicated at first. Breaking the project into clear stages makes it easier to understand what needs to happen next.
          </p>
        </header>

        {/* Navigation Tabs */}
        <nav className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-md text-md font-semibold border-2 transition-all duration-200 ${
                activeTab === tab
                  ? "bg-[#c8d94e] border-[#c8d94e] text-[#1a1a1a]"
                  : "bg-transparent border-gray-400 text-gray-600 hover:bg-[#e8e5db]"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Main Content Grid */}
        {/* Changed items-start to items-center to vertically align the columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div>
            <p className="text-xl font-bold tracking-widest text-[#1a1a1a] mb-2 uppercase">
              Step {currentStep.stepNumber}
            </p>
            <h3 className="text-3xl md:text-5xl font-semibold text-[#1a1a1a] mb-6 tracking-tight">
              {currentStep.title}
            </h3>
            <div className="font-mono text-md text-gray-600 space-y-4 leading-relaxed">
              {currentStep.description.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Right Column: Full Image Card */}
          <div className="w-full">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={currentStep.imageUrl}
                alt={currentStep.title}
                fill
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