import { robotoMono } from '@/app/fonts';
import React from 'react';
import { GiOpenBook } from 'react-icons/gi';

const supportCards = [
  {
    title: "End To End Publishing Support",
    description: "Get support across writing, editing, design, formatting, publishing, and promotion.",
  },
  {
    title: "Our Approach",
    description: "Your story, characters, artwork, and creative direction remain central to the project.",
  },
  {
    title: "Support At Different Stages",
    description: "Whether you have an idea, script, artwork, or completed comic, we can help identify the next step.",
  },
  {
    title: "Professional Production Support",
    description: "Prepare your comic with professional editing, design, formatting, and publishing preparation.",
  },
  {
    title: "Clear Communication",
    description: "Understand what stage your project is in and what needs to happen next.",
  },
];

export default function WhyChooseInkFoundersSection() {
  return (
    <section className="pb-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Top Section - Two Column Layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-stretch md:items-center mb-10">

          {/* Left Column - Text Content */}
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold text-gray-900 tracking-tight mb-4">
                Why Choose Ink Founders?
              </h2>
              <div className="w-2/3 h-1 bg-[#DADD39] rounded-full"></div>
            </div>

            <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold text-gray-900">
              One Team For Your Comic Publishing Journey!
            </h3>

            <p className={`${robotoMono.className} text-gray-600 text-base leading-relaxed`}>
              Publishing a comic can involve writers, editors, designers, artists, formatters, publishers, and marketing professionals.
            </p>

            <p className={`${robotoMono.className} text-gray-600 text-base leading-relaxed`}>
              Working with one publishing team can make it easier to coordinate these different stages.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 w-full">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/Rectangle 14 (3).svg"
                alt="Person holding a comic book"
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
          </div>

        </div>

        {/* Our Support Section */}
        <div>
          <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold text-gray-900 text-center mb-4">
            Our Support
          </h3>

          <div
            role="region"
            aria-label="Our publishing support"
            className="-mx-4 snap-x snap-mandatory overflow-x-auto overscroll-x-contain px-4 pb-4 sm:mx-0 sm:snap-none sm:overflow-visible sm:px-0 sm:pb-0"
          >
            <div className="flex w-max gap-4 sm:grid sm:w-full sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {supportCards.map((card, index) => (
                <div
                  key={index}
                  className="w-[82vw] max-w-[320px] shrink-0 snap-start rounded-lg border border-gray-200 p-6 transition-shadow duration-200 hover:shadow-md sm:w-auto sm:max-w-none sm:min-w-0"
                >
                  <GiOpenBook className="mb-4 text-3xl text-gray-900" />
                  <h4 className="mb-3 text-lg font-bold text-gray-900">
                    {card.title}
                  </h4>
                  <p className={`${robotoMono.className} text-base leading-relaxed text-gray-600`}>
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
