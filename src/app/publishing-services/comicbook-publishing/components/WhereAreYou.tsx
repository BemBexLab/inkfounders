import { robotoMono } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

type Stage = {
  title: string;
  description: string;
  helpText: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
};

const stages: Stage[] = [
  {
    title: "I Have an Idea",
    description:
      "You have a concept, characters, or a story idea but aren't sure how to turn it into a comic.",
    helpText:
      "We can help with: Story development, characters, structure, and script development.",
    buttonText: "Develop My Idea",
    buttonHref: "/contactus",
    imageSrc: "/comic-book/Rectangle 14.svg",
  },
  {
    title: "I Have a Script",
    description:
      "Your story is written, but it needs professional editing or preparation for production.",
    helpText:
      "We can help with: Editing, proofreading, dialogue, story consistency, and script refinement.",
    buttonText: "Review My Script",
    buttonHref: "/contactus",
    imageSrc: "/comic-book/Rectangle 14 (1).svg",
  },
  {
    title: "I Have Artwork",
    description:
      "Your comic artwork is ready and you need help turning it into a finished book.",
    helpText:
      "We can help with: Formatting, lettering, cover design, publishing preparation, and production files.",
    buttonText: "Prepare My Comic",
    buttonHref: "/contactus",
    imageSrc: "/comic-book/Rectangle 14 (2).svg",
  },
  {
    title: "I Have a Completed Comic",
    description:
      "Your book is finished and you're ready to move toward publication.",
    helpText:
      "We can help with: Final review, formatting, cover preparation, publishing, distribution, and promotion.",
    buttonText: "Prepare My Comic",
    buttonHref: "/contactus",
    imageSrc: "/comic-book/Rectangle 14 (3).svg",
  },
];

function StageRow({ stage, index }: { stage: Stage; index: number }) {
  const isReversed = index % 2 !== 0;

  return (
    <article className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
      {/* Text comes first on every mobile row */}
      <div className="w-full min-w-0">
        <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-tight text-[#1a1a1a]">
          {stage.title}
        </h3>

        <div className="mt-3 space-y-3 font-mono text-sm leading-[1.7] text-[#444] sm:mt-4 sm:space-y-4 sm:text-[15px] lg:mt-5">
          <p className={`${robotoMono.className}`}>{stage.description}</p>
          <p className={`${robotoMono.className}`}>{stage.helpText}</p>
        </div>

        <Link
          href={stage.buttonHref}
          className={` ${robotoMono.className} mt-5 inline-flex min-h-[44px] w-full max-w-full items-center justify-center rounded-md bg-[#DADD39] px-5 py-3 text-center text-sm font-semibold leading-6 text-[#1a1a1a] transition duration-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2 motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none sm:mt-6 sm:w-auto sm:px-6 lg:mt-7`}
        >
          {stage.buttonText}
        </Link>
      </div>

      {/* Alternate the image position only on desktop */}
      <div
        className={`w-full min-w-0 ${isReversed ? "lg:order-first" : ""}`}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#e8e6c9]">
          <Image
            src={stage.imageSrc}
            alt={stage.title}
            fill
            sizes="(min-width: 1392px) 608px, (min-width: 1280px) calc(50vw - 88px), (min-width: 1024px) calc(50vw - 80px), (min-width: 768px) calc(100vw - 64px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
            className="object-cover"
          />
        </div>
      </div>
    </article>
  );
}

export default function WhereAreYou() {
  return (
    <section className="w-full min-w-0 bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-14 lg:py-24 xl:py-28">
      <div className="mx-auto w-full max-w-[1280px] [overflow-wrap:anywhere]">
        {/* Header */}
        <header className="mb-10 text-center sm:mb-12 lg:mb-16">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.2] tracking-tight text-[#1a1a1a]">
            Where Are You With Your Comic?
          </h2>

          <p className={`${robotoMono.className} mx-auto mt-4 max-w-[640px] text-[14px] leading-[1.7] text-[#555]`}>
            You don't have to have everything finished before contacting us.
          </p>
        </header>

        {/* Stages */}
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-24 xl:gap-28">
          {stages.map((stage, index) => (
            <StageRow key={stage.title} stage={stage} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
