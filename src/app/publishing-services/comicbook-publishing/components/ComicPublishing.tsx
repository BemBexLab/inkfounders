import React from "react";
import { BsSoundwave } from "react-icons/bs";

const soundWaveIcon = (
  <BsSoundwave size={53} color="#DADD39" />
);

const cards = [
  {
    title: "Independent Comic Books",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "Creator-Owned Comics",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "Comic Book Series",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "Graphic Novels",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "Illustrated Stories",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "Manga-Style Projects",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "Short Comic Books",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "Long-Form Graphic Novels",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
];

export default function ComicPublishing() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 font-sans">
      <div className="mx-auto max-w-6xl">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight inline-block">
            <span className="border-b-8 border-yellow-400 pb-2">
              Independent Comic Book Publishing
            </span>
          </h2>
        </div>

        {/* Two Column Section */}
        <div className="mb-12 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Left Text */}
          <div>
            <h3 className="mb-4 text-4xl font-semibold leading-tight text-gray-900">
              Professional Support for Creator Owned Projects
            </h3>
            <p className="mb-4 font-mono text-md leading-relaxed text-gray-600">
              Independent comic creators often have their own characters, stories, artwork, and publishing goals.
            </p>
            <p className="mb-4 font-mono text-md leading-relaxed text-gray-600">
              Our services are designed to help creators prepare those projects for professional publication while keeping their creative direction at the center of the process.
            </p>
          </div>

          {/* Right Image */}
          <div className="overflow-hidden rounded-xl">
            <img
              src="/comic-book/Rectangle 14 (7).svg"
              alt="Woman browsing books in a bookstore"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Section Heading */}
        <h3 className="mb-8 text-center text-2xl font-semibold text-gray-900">
          We Can Support Projects Such As:
        </h3>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-[#f0f0e0] px-6 py-8 text-center"
            >
              <div className="mb-4">{soundWaveIcon}</div>
              <h4 className="mb-2 text-lg font-semibold leading-tight text-gray-900">
                {card.title}
              </h4>
              {/* <p className="font-mono text-md text-gray-600">
                {card.description}
              </p> */}
            </div>
          ))}
        </div>
        <p className="font-mono text-black italic mt-6">Whether you're publishing your first comic or developing a continuing series, we can help you identify the next steps required for your project.</p>
      </div>
    </div>
  );
}
