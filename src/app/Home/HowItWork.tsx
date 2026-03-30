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
    <div className="relative flex items-start gap-4 sm:gap-5">
      {!isLast && (
        <div className="absolute left-5 top-12 h-[calc(100%-2rem)] w-px bg-[#DADD39]/40" />
      )}

      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DADD39] font-mono text-sm text-[#222] sm:h-11 sm:w-11 sm:text-base">
        {step.id}
      </div>

      <div className="min-w-0 flex-1 pb-8 sm:pb-10">
        <h3 className="mb-2 text-[16px] font-semibold leading-snug text-black sm:text-[18px] lg:text-[20px]">
          {step.title}
        </h3>
        <p
          className={`${robotoMono.className} text-[12px] leading-6 text-[#444] sm:text-[13px] md:text-[14px] lg:text-[15px] lg:leading-7`}
        >
          {step.description}
        </p>
      </div>
    </div>
  );
};

const StepColumn = ({ steps }: { steps: Step[] }) => {
  return (
    <div className="w-full max-w-full space-y-1">
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
      <section className="w-full bg-[#F4F3E1] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto flex w-full max-w-[1250px] flex-col items-center">
          <p className="mb-3 text-center text-[18px] font-semibold text-[#DADD39] sm:text-[21px] md:text-[25px]">
            Let's find a way
          </p>
          <h2 className="mb-10 max-w-5xl text-center text-[24px] font-semibold leading-tight text-black sm:text-[28px] md:mb-12 md:text-[32px] lg:mb-14 lg:text-[35px]">
            A pathway to turn your dreams into reality, with a publishing
            process with Ink Founders
          </h2>

          <div className="grid w-full grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <StepColumn steps={leftColumnSteps} />
            <StepColumn steps={rightColumnSteps} />
          </div>
        </div>
      </section>
    </AOSProvider>
  );
};

export default HowItWork;
