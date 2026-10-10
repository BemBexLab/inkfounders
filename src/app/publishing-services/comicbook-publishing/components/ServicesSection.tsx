import { robotoMono } from "@/app/fonts";
import React from "react";
import { GiOpenBook } from "react-icons/gi";

const services = [
  {
    title: "Book Writing & Ghostwriting",
    description:
      "Turn your ideas, expertise, or outline into a polished, publish-ready manuscript.",
  },
  {
    title: "Book Publishing",
    description:
      "Get professional support with formatting, distribution, ISBN guidance, and publishing preparation.",
  },
  {
    title: "Book Cover Design",
    description:
      "Create a memorable, genre-appropriate cover that helps your book stand out.",
  },
  {
    title: "Editing & Proofreading",
    description:
      "Improve your manuscript's structure, clarity, consistency, grammar, and final polish.",
  },
  {
    title: "Comic Book Publishing",
    description:
      "Bring your comic book or graphic novel from idea to professionally prepared publication.",
  },
];

export default function ServicesSection() {
  return (
    <section className="pb-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="relative mx-auto w-fit max-w-full pb-2 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.4] tracking-tight text-gray-900 after:absolute after:bottom-0 after:left-1/2 after:h-[4px] after:w-[80%] after:-translate-x-1/2 after:bg-[#DADD39] after:content-['']">
            Everything You Need To Bring Your Story To Life.
          </h2>
          {/* <div className="w-2/3 h-1 bg-[#d1d646] mx-auto mt-4 rounded-full"></div> */}
          <p className={`${robotoMono.className} text-gray-600 text-sm md:text-base mt-6 max-w-4xl mx-auto leading-relaxed`}>
            Explore our publishing services and find the right support for your
            project, from the first draft to a finished book in readers' hands.
          </p>
        </div>

        {/* Cards Grid - 3 on top, 2 centered on bottom */}
        <div className="space-y-6">
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow duration-200"
              >
                <GiOpenBook className="text-gray-900 text-4xl mb-4" />
                <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className={`${robotoMono.className} text-gray-600 text-base leading-relaxed mb-4`}>
                  {service.description}
                </p>
                <a
                  href="#"
                  className={`${robotoMono.className} text-[#d1d646] text-sm font-medium hover:underline`}
                >
                  Explore service
                </a>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 Cards Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.slice(3).map((service, index) => (
              <div
                key={index + 3}
                className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow duration-200"
              >
                <GiOpenBook className="text-gray-900 text-4xl mb-4" />
                <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className={`${robotoMono.className} text-gray-600 text-sm leading-relaxed mb-4`}>
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-[#d1d646] text-sm font-medium hover:underline"
                >
                  Explore service
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
