"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type PublishingStep = {
  id: number;
  tabLabel: string;
  heading: string;
  points: string[] | ReactNode[];
  button: {
    label: string;
    href: string;
  };
  imageSrc: string;
  imageAlt: string;
};

const publishingData = {
  badge: "Bring your book to life",

  title: {
    firstLine: "HOW TO PUBLISH WITH INK FOUNDERS",
    secondLine: "IN JUST",
    highlightedText: "FOUR SIMPLE STEPS",
  },

  description:
    "Ink founders proofreads, cover designs, formats, publishes, and starts distributing your book in just a couple of weeks.",

  steps: [
    {
      id: 1,
      tabLabel: "Step 1: Upload Your Manuscript",
      heading: "Upload Your Manuscript With A Few Clicks",
      points: [
        "Easily upload your manuscript using Ink Founders' user-friendly dashboard. Just fill in a few simple details, like the book title, author's name, and category.",
        "Instantly receive a copyright certificate for your book.",
      ],
      button: {
        label: "Get Started",
        href: "/contactus",
      },
      imageSrc: "/landing-page/image 2.png",
      imageAlt: "Upload your manuscript dashboard",
    },
    {
      id: 2,
      tabLabel: "Step 2: Edit & Perfect Your Book",
      heading: "AI-Powered Manuscript Scans for Smarter Editing",
      points: [
        "Ink Founders scans your manuscript using built-in AI to understand your audience, genre, and writing style. It then automatically identifies grammar mistakes and areas for improvement—making the editing process faster and smarter.",
        "If needed, you can also connect with professional editors for an added layer of refinement.",
      ],
      button: {
        label: "Get Started",
        href: "/contactus",
      },
      imageSrc: "/landing-page/image 2 (1).png",
      imageAlt: "Book editing dashboard",
    },
    {
      id: 3,
      tabLabel: "Step 3: Design Your Cover & Layout",
      heading: "Custom Covers Tailored to Your Book & Style",
      points: [
        "Choose from a wide range of custom-made cover designs, tailored to your book and personal style preferences. If you already have a cover, we can enhance it with our cover tool - or simply upload and use your own.",
        "Customize your book's interior formatting in real time to match your style and genre.",
      ],
      button: {
        label: "Get Started",
        href: "/contactus",
      },
      imageSrc: "/landing-page/image 2 (2).png",
      imageAlt: "Book cover design dashboard",
    },
    {
      id: 4,
      tabLabel: "Step 4: Publish & Distribute",
      heading: "Publish Easily & Reach Readers Worldwide",
      points: [
        "Hit publish, and Ink Founders takes care of the rest. Your book will be distributed across major platforms, reaching readers worldwide.",
        "Set up automatic ad campaigns on Amazon, Facebook, and Instagram, while having your own personalized author platform to showcase and sell your book.",
      ],
      button: {
        label: "Get Started",
        href: "/contactus",
      },
      imageSrc: "/landing-page/image 2 (3).png",
      imageAlt: "Book publishing and distribution dashboard",
    },
  ] satisfies PublishingStep[],
};

export default function PublishingSteps() {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = publishingData.steps[activeStep];

  return (
    <section className="w-full bg-[#F4F3E1] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-[68px]">
      <div className="mx-auto max-w-[1400px]">
        {/* Badge */}
        <div className="mb-3 flex justify-center sm:mb-4">
          <span className="mulish rounded-[10px] bg-[#C8D400]/13 px-4 py-1.5 text-sm font-bold leading-[22px] text-[#282828] sm:px-5 sm:py-2 sm:text-base lg:text-lg">
            {publishingData.badge}
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center">
          <h1 className="plus-jakarta text-2xl font-medium uppercase leading-[1.12] text-black sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="block">
              {publishingData.title.firstLine}
            </span>

            <span className="block">
              {publishingData.title.secondLine}{" "}
              <span className="relative inline-block">
                <span className="relative z-10">
                  {publishingData.title.highlightedText}
                </span>

                {/* Green line through text */}
                <svg
                  aria-hidden="true"
                  className="absolute left-0 top-[5%] w-[calc(100%+10px)] -rotate-2"
                  height="28"
                  viewBox="0 0 100 32"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 20 Q50 35 100 30"
                    fill="none"
                    stroke="#c8d400"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p className="plus-jakarta mx-auto mt-3 max-w-[1230px] text-sm font-medium leading-[1.4] text-[#181818] sm:mt-4 sm:text-base sm:leading-[1.5] md:text-lg [word-spacing:2px]">
            {publishingData.description}
          </p>
        </div>

        {/* Main Card */}
        <div className="mt-6 w-full rounded-[20px] border border-[#efeedf] bg-[#faf9ed] px-4 pb-6 pt-6 shadow-[0_7px_25px_rgba(0,0,0,0.07)] sm:mt-8 sm:px-6 sm:pb-7 sm:pt-7 lg:mt-[24px] lg:px-[24px] lg:pb-[31px] lg:pt-[31px]">
          {/* Step Tabs */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-[16px]">
            {publishingData.steps.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`plus-jakarta flex min-h-[44px] items-center justify-center rounded-[5px] px-3 text-center text-sm leading-[18px] transition-all duration-200 sm:min-h-[48px] sm:px-4 sm:text-base lg:text-md ${
                    isActive
                      ? "bg-gradient-to-r from-[#C8D400] to-[#F7FF77] font-semibold text-black"
                      : "bg-[#C8D400]/30 font-medium text-[#464646] hover:bg-[#e7e78e]"
                  }`}
                >
                  {step.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Dynamic Step Content */}
          <div
            key={currentStep.id}
            className="grid items-stretch gap-6 pt-8 sm:gap-8 sm:pt-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-[55px] lg:pt-[45px]"
          >
            {/* Left Content */}
            <div className="flex h-full flex-col justify-center">
              <h3 className="plus-jakarta max-w-full text-2xl font-normal uppercase leading-[1.18] tracking-[-1px] text-[#282828] sm:text-3xl md:text-4xl lg:tracking-[-2px] [word-spacing:8px]">
                {currentStep.heading}
              </h3>

              <ul className="mt-6 space-y-5 plus-jakarta sm:mt-8 sm:space-y-6 lg:mt-[38px] lg:space-y-[25px]">
                {currentStep.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm leading-[1.4] text-[#111111] sm:gap-[8px] sm:text-base sm:leading-[20px] lg:text-md"
                  >
                    {/* Tick Icon */}
                    <span className="mt-0.5 flex h-5 min-h-[20px] min-w-[20px] items-center justify-center rounded-[4px] bg-[#cce400] text-sm font-bold text-[#000000] sm:h-[18px] sm:min-h-[24px] sm:min-w-[24px] sm:text-lg">
                      ✓
                    </span>

                    <span className="w-full text-black text-base leading-[1.4] [word-spacing:2px] sm:text-lg sm:leading-[1.2]">{point}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 sm:mt-7 lg:mt-[25px]">
                <Link
                  href={currentStep.button.href}
                  className="plus-jakarta inline-flex min-h-[44px] min-w-[130px] items-center justify-center rounded-[10px] bg-gradient-to-r from-[#C8D400] to-[#F7FF77] px-5 text-base font-medium text-black transition-transform duration-200 hover:scale-[1.02] sm:min-h-[48px] sm:min-w-[144px] sm:px-6 sm:text-lg"
                >
                  {currentStep.button.label}
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-full min-h-[250px] w-full overflow-hidden rounded-[8px] bg-[#f1f0e7] sm:min-h-[300px] md:min-h-[340px] lg:min-h-0">
              {currentStep.imageSrc ? (
                <Image
                  src={currentStep.imageSrc}
                  alt={currentStep.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-fill"
                  priority={activeStep === 0}
                />
              ) : (
                /*
                 * Add your image path to `imageSrc`
                 * in the publishingData object.
                 *
                 * The final Image component will be:
                 *
                 * <Image
                 *   src={currentStep.imageSrc}
                 *   alt={currentStep.imageAlt}
                 *   fill
                 *   className="object-cover"
                 * />
                 */
                <div className="absolute inset-0 flex items-center justify-center text-base text-[#999] plus-jakarta font-medium sm:text-lg">
                  Add imageSrc
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}