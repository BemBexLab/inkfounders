import Link from "next/link";
import type { IconType } from "react-icons";
import { FaBookOpen, FaFileLines, FaLightbulb, FaPalette } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

const stages: { icon: IconType; title: string; description: string }[] = [
  {
    icon: FaLightbulb,
    title: "Have a Comic Idea?",
    description:
      "We can help develop your concept, characters, story structure, scenes, and dialogue into a workable comic project.",
  },
  {
    icon: FaFileLines,
    title: "Have a Finished Script?",
    description:
      "We can review, edit, refine, and prepare your script for the next stage of production.",
  },
  {
    icon: FaPalette,
    title: "Have Finished Artwork?",
    description:
      "We can help with editing, lettering, page formatting, cover design, and publishing preparation.",
  },
  {
    icon: FaBookOpen,
    title: "Have a Completed Comic?",
    description:
      "We can help prepare your finished project for professional publication, distribution, and promotion.",
  },
];

export default function VisualCards() {
  return (
    <section className="relative w-full bg-[#F4F3E1] px-6 pb-16 sm:px-10 sm:pb-20 lg:px-14 lg:pb-24">
      {/* Subtle dot pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #050505 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1536px]">
        {/* Header */}
        <div className="mb-6 h-1 w-14 rounded-full bg-[#DADD39]" />
        
        {/* Headline - full width */}
        <h2 className="w-full text-5xl font-bold leading-[1] tracking-[-0.045em] text-[#050505]">
          From Comic Idea to Published Book
        </h2>
        
        {/* Paragraphs - constrained for readability */}
        <div className="max-w-full">
          <p className="mt-6 text-md leading-7 text-[#444]">
            A comic book involves much more than writing a story and creating artwork. The finished publication needs strong storytelling, careful editing, professional page design, properly prepared files, and a publishing plan.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-[#444] sm:text-base">
            Ink Founders can support your project at different stages of its development.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {stages.map((stage, index) => (
            <article
              key={stage.title}
              className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl border border-[#d8d4be] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"
            >
              {/* Stage number */}
              <div className="absolute right-6 top-6 text-[11px] font-semibold uppercase tracking-wider text-[#999] sm:right-8 sm:top-8">
                0{index + 1}
              </div>

              {/* Icon container */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#DADD39]/10 transition-colors duration-300 group-hover:bg-[#DADD39]/20">
                <stage.icon
                  aria-hidden="true"
                  className="h-7 w-7 text-[#DADD39]"
                />
              </div>

              {/* Title */}
              <h3 className="text-[clamp(1.35rem,2.4vw,2rem)] font-semibold leading-tight tracking-[-0.025em] text-[#050505]">
                {stage.title}
              </h3>

              {/* Description */}
              <p className="mt-4 flex-1 text-md leading-7 text-[#666]">
                {stage.description}
              </p>

              {/* CTA link */}
              <Link
                href="/contactus"
                className="group/link mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#050505] transition-colors hover:text-[#DADD39]"
              >
                <span className="border-b-2 border-[#DADD39] pb-0.5 transition-colors group-hover/link:border-[#050505]">
                  Get Started
                </span>
                <GoArrowUpRight
                  size={18}
                  className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                />
              </Link>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#DADD39] transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}