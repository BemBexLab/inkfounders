import { robotoMono } from '@/app/fonts';
import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const supportItems = [
  'Editing',
  'Proofreading',
  'The Final Project',
  'Interior Formatting',
  'Publishing preparation',
  'Cover Design',
];

export default function ManuscriptToComicSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header with underline */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold text-gray-900 tracking-tight inline-block relative">
            From Manuscript To Finished Comic
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[#DADD39] rounded-full"></span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-stretch">

          {/* Left Column - Text Content */}
          <div className="flex-1 space-y-4">

            {/* Project Label */}
            <p className="text-[#DADD39] text-md font-medium tracking-wider uppercase">
              Project 01
            </p>

            {/* The Project */}
            <div>
              <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold text-gray-900 mb-3">
                The Project
              </h3>
              <p className={`${robotoMono.className} text-gray-600 text-md leading-relaxed`}>
                A creator had a completed comic story and artwork but needed professional support preparing the project for publication.
              </p>
            </div>

            {/* The Challenge - with left border */}
            <div className="border-l-4 border-[#DADD39] pl-4">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                The Challenge
              </h4>
              <p className={`${robotoMono.className} text-gray-600 text-md leading-relaxed`}>
                The project required editing, interior formatting, cover preparation, and publishing-ready files.
              </p>
            </div>

            {/* Our Support */}
            <div>
              <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold text-gray-900 mb-4">
                Our Support
              </h3>
              <div className="flex flex-wrap gap-3">
                {supportItems.map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md text-md text-gray-700"
                  >
                    <BsCheckCircleFill className="text-[#DADD39] text-md" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="mt-4 px-8 py-3 bg-[#DADD39] text-gray-900 text-md font-medium rounded-md hover:bg-yellow-400 transition-colors duration-200">
              Start Your Own Comic Project
            </button>

          </div>

          {/* Right Column - Image */}
          <div className="flex-1 w-full">
            <div className="h-80 w-full overflow-hidden rounded-lg shadow-md md:h-full">
              <img
                src="/Rectangle 14 (1).svg"
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
