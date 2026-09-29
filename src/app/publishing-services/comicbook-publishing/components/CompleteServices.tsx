import type { IconType } from "react-icons";
import { FaBookOpen } from "react-icons/fa";
import { HiOutlineStar } from "react-icons/hi";

/* ---------- Combined book + star icon ---------- */
function BookStarIcon({ className }: { className?: string }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className ?? ""}`}
    >
      <FaBookOpen className="h-7 w-7 text-[#1a1a1a]" />
      <HiOutlineStar className="absolute -top-1.5 h-3 w-3 text-[#1a1a1a]" />
    </div>
  );
}

/* ---------- Card data ---------- */
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

/* ---------- Single card ---------- */
function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex h-full flex-col rounded-xl bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <BookStarIcon className="mb-5" />
      <h3 className="mb-3 text-[15px] font-bold leading-snug text-[#1a1a1a]">
        {service.title}
      </h3>
      <p className="font-mono text-[12.5px] leading-[1.7] text-[#555]">
        {service.description}
      </p>
    </div>
  );
}

/* ---------- Section ---------- */
export default function CompleteServices() {
  return (
    <section className="w-full bg-[#F4F3E1] px-6 pb-20 sm:px-10 sm:pb-24 lg:px-14 lg:pb-28">
      <div className="mx-auto w-full max-w-[1536px]">
        {/* Header - Full Width */}
        <div className="mb-14 text-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight inline-block">
              <span className="border-b-8 border-yellow-400 pb-2">
                Complete Comic Book Publishing Services
              </span>
            </h2>
          </div>
          <p className="mt-5 w-full font-mono text-[13px] leading-[1.7] text-[#555] sm:text-[14px]">
            From the first draft to the finished publication, our team can
            support the creative and technical stages of your comic publishing
            project.
          </p>
        </div>

        {/* Cards container - Flexbox for true centering of the last row */}
        <div className="flex flex-wrap justify-center gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
            >
              <ServiceCard service={s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
