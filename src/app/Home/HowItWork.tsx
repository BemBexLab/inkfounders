import React from "react";
import { robotoMono } from "../fonts";
import AOSProvider from "@/components/AOSProvider";

const steps = [
  {
    id: "01",
    title: "Start with an introduction to get to know each other",
    description:
      "We begin with a discussion to know each other: who you are as an author, what your ideas are, where you want them to go, and what you expect from us. This is the time to ask questions, share your ideas, and allow us to make a publishing path for you.",
  },
  {
    id: "02",
    title: "We gather the information that best describes your vision",
    description:
      "We start organizing a plan once we get the details about your story's genre, audience, and message, whether it is non-fiction, fiction, historical, or poetry.",
  },
  {
    id: "03",
    title: "Experts take over the script, page by page, page perfection",
    description:
      "We send your story to our qualified design team, which revives your story and rearranges it according to standards, ensuring a professional look in all formats.",
  },
  {
    id: "04",
    title: "We put the soul in your story with formatting",
    description:
      "Now it's time to give a fantastic structure to your story by professionally formatting the script and designing a book cover that captures the audience's attention and reflects the spirit of your story.",
  },
  {
    id: "05",
    title: "Quality check is a priority",
    description:
      "Before launch, your book undergoes a final review by our quality assurance team to ensure every step, from editing to publishing, meets our standards.",
  },
  {
    id: "06",
    title: "Let's make your story unforgettable, time to publish it",
    description:
      "After finalization, your book is published on globally trending platforms. We also guide you through ISBN registration and sales setup to make your book more accessible.",
  },
  {
    id: "07",
    title: "Finally, you are an author, own your success",
    description:
      "Now it's time to celebrate! You are officially a published author. We continue to support you post-launch with strategies to grow your author brand.",
  },
];

const leftColumnSteps = steps.slice(0, 4);
const rightColumnSteps = steps.slice(4);

type Step = (typeof steps)[number];

const StepItem = ({ step, isLast }: { step: Step; isLast: boolean }) => {
  return (
    <div className="relative flex items-start gap-3 sm:gap-4 lg:gap-5">
      {!isLast && (
        <div className="absolute left-[17px] top-11 h-[calc(100%-1.5rem)] w-px bg-[#DADD39]/40 sm:left-5 sm:top-12 lg:h-[calc(100%-2rem)]" />
      )}

      <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DADD39] font-mono text-[13px] text-[#222] sm:h-10 sm:w-10 sm:text-sm lg:h-11 lg:w-11 lg:text-base">
        {step.id}
      </div>

      <div className="min-w-0 flex-1 pb-7 sm:pb-8 lg:pb-10">
        <h3 className="mb-2 text-[15px] font-semibold leading-[1.15] text-black sm:text-[17px] md:text-[18px] lg:text-[20px] lg:leading-snug">
          {step.title}
        </h3>
        <p
          className={`${robotoMono.className} text-[12px] leading-[1.35] text-[#444] sm:text-[13px] md:text-[14px] lg:text-[15px] lg:leading-7`}
        >
          {step.description}
        </p>
      </div>
    </div>
  );
};

const StepColumn = ({ steps }: { steps: Step[] }) => {
  return (
    <div className="w-full max-w-full space-y-0">
      {steps.map((step, index) => (
        <div key={step.id} data-aos="fade-down-right">
          <StepItem step={step} isLast={index === steps.length - 1} />
        </div>
      ))}
    </div>
  );
};

const HowItWork = () => {
  return (
    <AOSProvider>
      <section className="w-full bg-[#F4F3E1] px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-8 lg:py-7">
        <div className="mx-auto flex w-full max-w-[1250px] flex-col items-center">
          <p className="mb-2 text-center text-[17px] font-semibold text-[#DADD39] sm:text-[20px] md:text-[23px] lg:mb-3 lg:text-[25px]">
            Let's find a way
          </p>
          <h2 className="mb-8 max-w-5xl text-center text-[23px] font-semibold leading-[1] text-black sm:text-[27px] md:mb-8 md:text-[31px] lg:mb-8 lg:text-[35px]">
            A pathway to turn your dreams into reality, with a publishing
            process with Ink Founders
          </h2>

          <div className="grid w-full max-w-3xl grid-cols-1 gap-0 lg:max-w-none lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <StepColumn steps={leftColumnSteps} />
            <StepColumn steps={rightColumnSteps} />
          </div>
        </div>
      </section>
    </AOSProvider>
  );
};

export default HowItWork;
