import { FaBookOpen } from "react-icons/fa";
import { HiOutlineStar } from "react-icons/hi";

/* Combined book + star icon */
function BookStarIcon({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
    >
      <FaBookOpen className="h-7 w-7 text-[#1a1a1a] sm:h-8 sm:w-8" />

      <HiOutlineStar className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 text-[#1a1a1a] sm:h-3.5 sm:w-3.5" />
    </div>
  );
}

/* Card data */
type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Comic Book Story Development",
    description:
      "Develop your concept into a structured story with characters, scenes, dialogue, pacing, and a clear narrative direction.",
  },
  {
    title: "Comic Script Writing",
    description:
      "Turn your story idea into a comic script with page structure, scenes, dialogue, captions, and panel descriptions.",
  },
  {
    title: "Editing & Proofreading",
    description:
      "Review grammar, spelling, dialogue, consistency, story flow, character names, and other written elements before publication.",
  },
  {
    title: "Comic Book Formatting",
    description:
      "Prepare interior pages, panel layouts, typography, dialogue placement, margins, bleed, and other production requirements.",
  },
  {
    title: "Comic Book Cover Design",
    description:
      "Create a professional cover that communicates your comic's story, genre, characters, and visual identity.",
  },
  {
    title: "Artwork & Illustration Support",
    description:
      "Support the artwork and production process so your illustrations are properly prepared for the final publication.",
  },
  {
    title: "ISBN & Barcode Assistance",
    description:
      "Provide guidance related to ISBN and barcode requirements as part of the publishing preparation process.",
  },
  {
    title: "Print & Digital Publishing",
    description:
      "Prepare your comic for appropriate print and digital publishing formats.",
  },
  {
    title: "Print-On-Demand Setup",
    description:
      "Help prepare your comic files and publish information for print on demand production.",
  },
  {
    title: "Distribution Preparation",
    description:
      "Organize the files and publishing information required for your selected distribution channels.",
  },
  {
    title: "Comic Book Marketing",
    description:
      "Support your launch with promotional planning, creator branding, sales page optimization, keyword research, and other marketing activities.",
  },
];

/* Single card */
function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex min-w-0 flex-1 flex-col rounded-xl bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:p-6 xl:p-7">
      <BookStarIcon className="mb-4 self-center sm:mb-5" />

      <h3 className="mb-2 text-[15px] text-center font-bold leading-snug text-[#1a1a1a] sm:mb-3 sm:text-base">
        {service.title}
      </h3>

      <p className="font-mono text-center text-[13px] leading-[1.7] text-[#555] sm:text-sm">
        {service.description}
      </p>
    </article>
  );
}

/* Section */
export default function CompleteServices() {
  return (
    <section className="w-full min-w-0 bg-[#F4F3E1] px-4 pb-12 sm:px-6 sm:pb-16 md:px-8 lg:px-14 lg:pb-24 xl:pb-28">
      <div className="mx-auto w-full max-w-[1536px] [overflow-wrap:anywhere]">
        <header className="mb-8 text-center sm:mb-10 lg:mb-14">
          {/* Fluid heading with an underline that follows wrapped lines */}
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.4] tracking-tight text-gray-900">
            <span className="underline decoration-yellow-400 decoration-[4px] underline-offset-[6px] [text-decoration-skip-ink:none] sm:decoration-[6px] sm:underline-offset-8 lg:decoration-[8px]">
              Complete Comic Book Publishing Services
            </span>
          </h2>

          <p className="mt-5 w-full font-mono text-[13px] leading-[1.7] text-[#555] sm:mt-6 sm:text-sm">
            From the first draft to the finished publication, our team can support the creative and technical stages of your comic publishing project.
          </p>
        </header>

        {/* Responsive columns with a centered final row */}
        <div className="flex flex-wrap items-stretch justify-center gap-4 sm:gap-5 lg:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex w-full min-w-0 sm:w-[calc(50%_-_0.625rem)] lg:w-[calc(33.333333%_-_1rem)] xl:w-[calc(25%_-_1.125rem)]"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}