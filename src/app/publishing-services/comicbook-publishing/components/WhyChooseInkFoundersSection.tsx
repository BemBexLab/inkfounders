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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Top Section - Two Column Layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-stretch md:items-center mb-20">

          {/* Left Column - Text Content */}
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-gray-900 tracking-tight mb-4">
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
                src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&q=80"
                alt="Person holding a comic book"
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
          </div>

        </div>

        {/* Our Support Section */}
        <div>
          <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold text-gray-900 text-center mb-8">
            Our Support
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportCards.map((card, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
              >
                <GiOpenBook className="text-gray-900 text-3xl mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {card.title}
                </h4>
                <p className={`${robotoMono.className} text-gray-600 text-base leading-relaxed`}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
