"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "Superhero",
  "Fantasy",
  "Horror",
  "Science Fiction",
  "Graphic Novel",
  "Manga-Style",
];

// Reliable Picsum Photos URLs - each seed produces a consistent, unique image
const categoryImages: Record<string, string> = {
  Superhero: "https://picsum.photos/seed/superhero-comic/600/800",
  Fantasy: "https://picsum.photos/seed/fantasy-art/600/800",
  Horror: "https://picsum.photos/seed/horror-dark/600/800",
  "Science Fiction": "https://picsum.photos/seed/scifi-space/600/800",
  "Graphic Novel": "https://picsum.photos/seed/graphic-novel/600/800",
  "Manga-Style": "https://picsum.photos/seed/manga-anime/600/800",
};

const services = [
  "Custom comic book cover design",
  "Graphic novel cover design",
  "Character-focused covers",
  "Series branding",
  "Interior page formatting",
  "Panel layout",
  "Dialogue and caption placement",
  "Print-ready files",
  "Digital-ready files",
  "Paperback formatting",
  "Hardcover formatting",
];

export default function ComicCoverDesign() {
  const [activeCategory, setActiveCategory] = React.useState("Superhero");

  return (
    <div className="min-h-screen bg-[#f5f2e8] font-sans">
      {/* Header */}
      <header className="pt-12 pb-8 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight">
          Professional Comic Book Cover Design
        </h2>
      </header>

      {/* Category Tabs */}
      <nav className="flex flex-wrap justify-center gap-3 px-4 pb-12 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-md text-md font-medium border transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? "bg-[#c8d952] border-[#c8d952] text-[#1a1a1a]"
                : "bg-transparent border-[#b0a890] text-[#4a4a4a] hover:border-[#8a8070]"
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-stretch">
          {/* Left - Image */}
          <div className="flex-1 w-full relative min-h-[300px] lg:min-h-0">
            <Image
              key={activeCategory}
              src={categoryImages[activeCategory]}
              alt={`${activeCategory} Comic Book Cover Design Example`}
              fill
              className="rounded-lg object-cover transition-opacity duration-300"
              priority={activeCategory === "Superhero"}
            />
          </div>

          {/* Right - Text Content */}
          <div className="flex-1 max-w-lg flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-6">
              Create A Cover That Makes Your Story Stand Out
            </h2>

            <p className="text-[#4a4a4a] text-md leading-relaxed mb-4">
              Your cover is often the first part of your comic a potential
              reader sees.
            </p>

            <p className="text-[#4a4a4a] text-md leading-relaxed mb-4">
              A professional cover should communicate the story, genre,
              characters, tone, and visual identity of the book while working
              correctly with the selected publishing format.
            </p>

            <p className="text-[#4a4a4a] text-md leading-relaxed mb-4">
              Our cover and book design services can include:
            </p>

            <ul className="space-y-1.5">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-[#4a4a4a] text-md flex items-start gap-2"
                >
                  <span className="text-[#4a4a4a] mt-0.5">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <Link href={"/contactus"}>
            <button className="bg-[#c8d952] hover:bg-[#b8c942] text-[#1a1a1a] font-medium text-md px-8 py-3 rounded-md transition-colors duration-200 cursor-pointer">
              View Our Comic Design Work
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
