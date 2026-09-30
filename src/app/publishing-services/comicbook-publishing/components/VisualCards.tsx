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
    <section className="relative w-full min-w-0 bg-[#F4F3E1] px-4 pb-12 sm:px-6 sm:pb-16 md:px-8 lg:px-14 lg:pb-24">
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

      <div className="relative mx-auto w-full max-w-[1536px] [overflow-wrap:anywhere]">
        <div
          aria-hidden="true"
          className="mb-4 h-1 w-12 rounded-full bg-[#DADD39] sm:mb-6 sm:w-14"
        />

        {/* Fluid heading: 30px to 48px at the default root font size */}
        <h2 className="text-[clamp(1.875rem,5vw,3rem)] font-bold leading-[1.1] tracking-[-0.045em] text-[#050505]">
          From Comic Idea to Published Book
        </h2>

        <div className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
          <p className="text-sm leading-6 text-[#444] sm:text-base sm:leading-7">
            A comic book involves much more than writing a story and creating artwork. The finished publication needs strong storytelling, careful editing, professional page design, properly prepared files, and a publishing plan.
          </p>
          <p className="text-sm leading-6 text-[#444] sm:text-base sm:leading-7">
            Ink Founders can support your project at different stages of its development.
          </p>
        </div>

        {/* One column on mobile; two columns from the md breakpoint */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:mt-14 lg:gap-8">
          {stages.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#d8d4be] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none sm:p-6 lg:p-8 xl:p-10"
            >
              {/* Keep the icon and number in flow to prevent overlap */}
              <div className="mb-5 flex items-start justify-between gap-4 sm:mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#DADD39]/10 transition-colors duration-300 group-hover:bg-[#DADD39]/20 sm:h-14 sm:w-14">
                  <Icon
                    aria-hidden="true"
                    className="h-6 w-6 text-[#DADD39] sm:h-7 sm:w-7"
                  />
                </div>

                <span className="shrink-0 text-[11px] font-semibold tracking-wider text-[#999]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-[clamp(1.25rem,2.4vw,2rem)] font-semibold leading-tight tracking-[-0.025em] text-[#050505]">
                {title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-[#666] sm:mt-4 sm:text-base sm:leading-7">
                {description}
              </p>

              <Link
                href="/contactus"
                className="group/link mt-5 inline-flex min-h-[44px] w-fit max-w-full items-center gap-2 rounded-sm py-1 text-sm font-semibold text-[#050505] transition-colors hover:text-[#DADD39] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#050505] focus-visible:ring-offset-4 sm:mt-6 lg:mt-8"
              >
                <span className="border-b-2 border-[#DADD39] pb-0.5 transition-colors group-hover/link:border-[#050505]">
                  Get Started
                </span>
                <GoArrowUpRight
                  aria-hidden="true"
                  size={18}
                  className="shrink-0 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                />
              </Link>

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-1 w-0 bg-[#DADD39] transition-all duration-300 group-hover:w-full motion-reduce:transition-none"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
