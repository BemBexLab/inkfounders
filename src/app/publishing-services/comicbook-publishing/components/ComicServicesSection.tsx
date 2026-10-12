import React from "react";
import { BookOpenCheck, FileText, Lightbulb, Palette } from "lucide-react";
import { robotoMono } from "@/app/fonts";

// Data for the four columns
const services = [
  {
    title: "Have A Comic Idea?",
    icon: Lightbulb,
    description:
      "We can help develop your concept, characters, story structure, scenes, and dialogue into a workable comic project.",
  },
  {
    title: "Have A Finished Script?",
    icon: FileText,
    description:
      "We can review, edit, refine, and prepare your script for the next stage of production.",
  },
  {
    title: "Have Finished Artwork?",
    icon: Palette,
    description:
      "We can help with editing, lettering, page formatting, cover design, and publishing preparation.",
  },
  {
    title: "Have A Completed Comic?",
    icon: BookOpenCheck,
    description:
      "We can help prepare your finished project for professional publication, distribution, and promotion.",
  },
];

export default function ComicServicesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 w-full mx-auto">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold text-black mb-6 tracking-tight">
            From Comic Idea To Published Book
          </h2>
          <div>
            <p
              className={`${robotoMono.className} mx-auto text-gray-600 mb-4 leading-relaxed max-w-6xl text-center text-sm`}
            >
              A comic book involves much more than writing a story and creating
              artwork. The finished publication needs strong storytelling,
              careful editing, professional page design, properly prepared
              files, and a publishing plan.
            </p>
            <p
              className={`${robotoMono.className} text-gray-600 text-center text-sm`}
            >
              Ink Founders can support your project at different stages of its
              development.
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div
          role="region"
          aria-label="Comic publishing services"
          className="-mx-4 snap-x snap-mandatory overflow-x-auto overscroll-x-contain px-4 pb-4 md:mx-0 md:overflow-visible md:px-0 md:pb-0"
        >
          <div className="flex w-max gap-3 md:grid md:w-full md:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`
                  flex w-[82vw] max-w-[420px] shrink-0 snap-start flex-col items-center px-3 py-6 text-center
                  md:w-auto md:max-w-none md:shrink
                  ${index !== services.length - 1 ? "md:border-r border-gray-200" : ""}
                `}
              >
                <service.icon
                  aria-hidden="true"
                  className="mb-4 h-9 w-9 text-[#DADD39]"
                  strokeWidth={1.8}
                />

                <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] mb-4 font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
