import React from "react";
import { BsSoundwave } from "react-icons/bs";
import { robotoMono } from "@/app/fonts";

// Data for the four columns
const services = [
  {
    title: "Have A Comic Idea?",
    description:
      "We can help develop your concept, characters, story structure, scenes, and dialogue into a workable comic project.",
  },
  {
    title: "Have A Finished Script?",
    description:
      "We can review, edit, refine, and prepare your script for the next stage of production.",
  },
  {
    title: "Have Finished Artwork?",
    description:
      "We can help with editing, lettering, page formatting, cover design, and publishing preparation.",
  },
  {
    title: "Have A Completed Comic?",
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
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold text-gray-900 mb-6 tracking-tight">
            From Comic Idea To Published Book
          </h2>
          <div>
            <p
              className={`${robotoMono.className} mx-auto text-gray-600 mb-4 leading-relaxed max-w-5xl text-center text-sm`}
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
          <div className="flex w-max gap-4 md:grid md:w-full md:grid-cols-4 md:gap-0">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`
                  flex w-[82vw] max-w-[320px] shrink-0 snap-start flex-col items-center px-3 py-6 text-center
                  md:w-auto md:max-w-none md:shrink
                  ${index !== services.length - 1 ? "md:border-r border-gray-200" : ""}
                `}
              >
                {/* React Icon */}
                <BsSoundwave className="mb-4 text-4xl text-[#DADD39]" />

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
