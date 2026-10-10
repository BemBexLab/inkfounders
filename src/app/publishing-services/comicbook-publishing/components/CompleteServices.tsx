import { FaBookOpen } from "react-icons/fa";
import { robotoMono } from "@/app/fonts";

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
      <FaBookOpen
        aria-hidden="true"
        className="mb-4 h-7 w-7 shrink-0 self-start text-[#1a1a1a] sm:h-8 sm:w-8"
      />

      <h3 className="mb-2 text-[clamp(1.125rem,2vw,1.5rem)] text-left font-bold leading-snug text-[#1a1a1a] sm:mb-3">
        {service.title}
      </h3>

      <p className="font-mono text-left text-[13px] leading-[1.7] text-[#555] sm:text-sm">
        {service.description}
      </p>
    </article>
  );
}

/* Section */
export default function CompleteServices() {
  return (
    <section className="w-full min-w-0 bg-[#F4F3E1] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-14 lg:py-24 xl:py-28">
      <div className="mx-auto w-full max-w-[1536px] [overflow-wrap:anywhere]">
        <header className="mb-8 text-center">
          {/* Fluid heading with an underline that follows wrapped lines */}
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.4] tracking-tight text-gray-900">
            Complete Comic Book Publishing Services
            {/* <span className="underline decoration-[#DADD39] decoration-[4px] underline-offset-[6px] [text-decoration-skip-ink:none] sm:decoration-[6px] sm:underline-offset-8 lg:decoration-[8px]">
            </span> */}
          </h2>

          <p className={`${robotoMono.className} mt-5 w-full font-mono text-[13px] leading-[1.7] text-[#555] sm:mt-2 sm:text-sm`}>
            From the first draft to the finished publication, our team can
            support the creative and technical stages of your comic publishing
            project.
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
