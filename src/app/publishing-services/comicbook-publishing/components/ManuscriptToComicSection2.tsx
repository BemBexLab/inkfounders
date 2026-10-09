import { robotoMono } from "@/app/fonts";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const supportItems = [
  "Creator Branding",
  "Keyword Research",
  "Online Promotion",
  "Launch Support",
  "Promotional Materials",
  "Book Page Optimization",
  "Audience-Building Strategies",
  "Social Media Content Planning",
];

export default function ManuscriptToComicSection2() {
  return (
    <section className="pb-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header with underline */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-gray-900 tracking-tight inline-block relative">
            Comic Book Marketing & Promotion
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[#DADD39] rounded-full"></span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-stretch">
          {/* Left Column - Text Content */}
          <div className="flex-1 space-y-4 md:order-2">
            {/* Project Label */}
            {/* <p className="text-[#DADD39] text-md font-medium tracking-wider uppercase">
              Project 01
            </p> */}

            {/* The Project */}
            <div>
              <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold text-gray-900 mb-3">
                Help More Readers Discover Your Comic
              </h3>
              <p className={`${robotoMono.className} text-gray-600 text-md leading-relaxed mb-1`}>
                Publishing your comic is only one part of building an audience.
              </p>
              <p className={`${robotoMono.className} text-gray-600 text-md leading-relaxed`}>
                Once your book is ready, you need a way to introduce it to
                potential readers and establish your creator or book brand.
              </p>
            </div>

            <hr />

            {/* Our Support */}
            <div>
              <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold text-gray-900 mb-4">
                Our marketing support can include:
              </h3>
              <div className="flex flex-wrap gap-3">
                {supportItems.map((item, index) => (
                  <span
                    key={index}
                    className={`${robotoMono.className} inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md text-md text-gray-700`}
                  >
                    <BsCheckCircleFill className="text-[#DADD39] text-md" />
                    {item}
                  </span>
                ))}
              </div>
              <p
                className={`${robotoMono.className} text-gray-600 text-md mt-5`}
              >
                The right promotional approach depends on your comic, genre,
                audience, publishing format, and goals.
              </p>
            </div>

            {/* CTA Button */}
            <button className="mt-4 px-8 py-3 bg-[#DADD39] text-gray-900 text-md font-medium rounded-md hover:bg-yellow-400 transition-colors duration-200">
              Plan My Comic Launch
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 w-full md:order-1">
            <div className="h-80 w-full overflow-hidden rounded-lg shadow-md md:h-full">
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80"
                alt="Person drawing in a sketchbook"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
