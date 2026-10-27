import React from "react";

const services = [
  { id: "01", title: "Book Publishing Services" },
  { id: "02", title: "Book Writing & Ghostwriting Services" },
  { id: "03", title: "Book Publishing Services" },
  { id: "04", title: "Book Cover Design" },
  { id: "05", title: "Editing & Proofreading Services" },
  { id: "06", title: "Comic Book Publishing Services" },
];

export default function ColoringBookServices() {
  return (
    <div className="min-h-screen bg-white px-8 py-24 font-mono">
      <div className="mx-auto max-w-7xl">
        {/* Main Heading */}
        <h2 className="mb-10 text-center text-4xl font-semibold text-gray-900 md:text-5xl">
          25+ Years Of Professional Coloring Book Printing Services
        </h2>

        {/* Description Paragraphs */}
        <p className="mx-auto mb-6 max-w-7xl text-center text-lg leading-relaxed text-gray-600">
          It is necessary that a <b>coloring book</b> has good graphics. Just like any other book, a <b>coloring book</b> must also have clear artwork, <b>good quality paper</b>, good binding, and a cover that protects the drawings.
        </p>
        <p className="mx-auto mb-14 max-w-7xl text-center text-lg leading-relaxed text-gray-600">
          Our services for <b>publishing coloring books</b> can help you design your <b>coloring book</b>. Depending on your needs, number of pages, and book size, there will be various requirements for your project.
        </p>

        {/* Subheading */}
        <h2 className="mb-14 text-center text-2xl font-bold text-gray-900">
          Our Service Options Can Include:
        </h2>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center rounded-lg bg-[#f0f0e0] px-10 py-16 transition-shadow hover:shadow-lg"
            >
              {/* Number Badge */}
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-md bg-[#c8d940]">
                <span className="text-xl font-bold text-black">
                  {service.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-center text-xl font-bold leading-snug text-gray-900">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}