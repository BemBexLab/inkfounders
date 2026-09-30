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
    <div
      className={`flex flex-col items-center gap-10 lg:gap-16 ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Text column */}
      <div className="flex-1">
        <h3 className="mb-5 text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-[#1a1a1a]">
          {stage.title}
        </h3>
        <p className="mb-4 font-mono text-[14px] leading-[1.7] text-[#444]">
          {stage.description}
        </p>
        <p className="mb-7 font-mono text-[14px] leading-[1.7] text-[#444]">
          {stage.helpText}
        </p>
        <Link
          href={stage.buttonHref}
          className="inline-block rounded-md bg-[#DADD39] px-6 py-3 text-[13px] font-semibold text-[#1a1a1a] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
        >
          {stage.buttonText}
        </Link>
      </div>

      {/* Image column */}
      <div className="flex-1">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#e8e6c9]">
          <Image
            src={stage.imageSrc}
            alt={stage.title}
            fill
            sizes="(max-width: 1023px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function WhereAreYou() {
  return (
    <section className="w-full bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-tight tracking-tight text-[#1a1a1a]">
            Where Are You With Your Comic?
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] font-mono text-[13px] leading-[1.7] text-[#555] sm:text-[14px]">
            You don't have to have everything finished before contacting us.
          </p>
        </div>

        {/* Stages */}
        <div className="flex flex-col gap-20 lg:gap-28">
          {stages.map((stage, index) => (
            <StageRow key={stage.title} stage={stage} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
