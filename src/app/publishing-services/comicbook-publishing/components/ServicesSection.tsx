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
        <div>
          {/* Single horizontal row on small screens */}
          <div
            role="region"
            aria-label="All publishing services"
            className="-mx-4 snap-x snap-mandatory overflow-x-auto overscroll-x-contain px-4 pb-4 md:hidden"
          >
            <div className="flex w-max gap-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="w-[82vw] max-w-[320px] shrink-0 snap-start rounded-lg border border-gray-200 p-8 transition-shadow duration-200 hover:shadow-md"
                >
                  <GiOpenBook className="mb-4 text-4xl text-gray-900" />
                  <h3 className="mb-3 text-[clamp(1.125rem,2vw,1.5rem)] font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className={`${robotoMono.className} mb-4 text-sm leading-relaxed text-gray-600`}>
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className={`${robotoMono.className} text-sm font-medium text-[#d1d646] hover:underline`}
                  >
                    Explore service
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Two-row layout on medium and larger screens */}
          <div className="hidden space-y-6 md:block">
          {/* Top Row - 3 Cards */}
          <div
            role="region"
            aria-label="Featured publishing services"
            className="-mx-4 snap-x snap-mandatory overflow-x-auto overscroll-x-contain px-4 pb-4 md:mx-0 md:snap-none md:overflow-visible md:px-0 md:pb-0"
          >
            <div className="flex w-max gap-4 md:grid md:w-full md:grid-cols-3 md:gap-6">
              {services.slice(0, 3).map((service, index) => (
                <div
                  key={index}
                  className="w-[82vw] max-w-[320px] shrink-0 snap-start rounded-lg border border-gray-200 p-8 transition-shadow duration-200 hover:shadow-md md:w-auto md:max-w-none md:shrink"
                >
                  <GiOpenBook className="mb-4 text-4xl text-gray-900" />
                  <h3 className="mb-3 text-[clamp(1.125rem,2vw,1.5rem)] font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className={`${robotoMono.className} mb-4 text-base leading-relaxed text-gray-600`}>
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className={`${robotoMono.className} text-sm font-medium text-[#d1d646] hover:underline`}
                  >
                    Explore service
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - 2 Cards Centered */}
          <div
            role="region"
            aria-label="More publishing services"
            className="-mx-4 snap-x snap-mandatory overflow-x-auto overscroll-x-contain px-4 pb-4 md:mx-auto md:max-w-4xl md:snap-none md:overflow-visible md:px-0 md:pb-0"
          >
            <div className="flex w-max gap-4 md:grid md:w-full md:grid-cols-2 md:gap-6">
              {services.slice(3).map((service, index) => (
                <div
                  key={index + 3}
                  className="w-[82vw] max-w-[320px] shrink-0 snap-start rounded-lg border border-gray-200 p-8 transition-shadow duration-200 hover:shadow-md md:w-auto md:max-w-none md:shrink"
                >
                  <GiOpenBook className="mb-4 text-4xl text-gray-900" />
                  <h3 className="mb-3 text-[clamp(1.125rem,2vw,1.5rem)] font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className={`${robotoMono.className} mb-4 text-sm leading-relaxed text-gray-600`}>
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium text-[#d1d646] hover:underline"
                  >
                    Explore service
                  </a>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
