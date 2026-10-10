"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";
import { robotoMono } from "@/app/fonts";

const categories = [
  "Superhero",
  "Fantasy",
  "Horror",
  "Science Fiction",
  "Graphic Novel",
  "Manga-Style",
] as const;

type Category = (typeof categories)[number];

const categoryImages: Record<Category, string> = {
  Superhero: "/comic-book/Group 41.svg",
  Fantasy: "/comic-book/Group 42.svg",
  Horror: "/comic-book/Group 43.svg",
  "Science Fiction": "/comic-book/Group 44.svg",
  "Graphic Novel": "/comic-book/Group 45.svg",
  "Manga-Style": "/comic-book/Group 41.svg",
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
  const [activeCategory, setActiveCategory] = useState<Category>("Superhero");

  return (
    <section className="min-h-screen w-full min-w-0 bg-[#f5f2e8] px-4 py-12 font-sans sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 xl:px-16 xl:py-24">
      <div className="mx-auto w-full max-w-6xl [overflow-wrap:anywhere]">
        {/* Header */}
        <header className="mb-6 text-center sm:mb-8 lg:mb-10">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.15] tracking-tight text-[#1a1a1a]">
            Professional Comic Book Cover Design
          </h2>
        </header>

        {/* Responsive category buttons */}
        <nav
          aria-label="Comic cover categories"
          className="mx-auto mb-8 grid w-full max-w-5xl grid-cols-2 gap-2 sm:mb-10 sm:grid-cols-3 sm:gap-3 lg:mb-12 lg:grid-cols-6"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`min-h-[44px] min-w-0 cursor-pointer rounded-md border px-3 py-2.5 text-center text-sm font-medium leading-snug transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2 motion-reduce:transition-none sm:px-4 sm:text-base ${
                activeCategory === category
                  ? "border-[#DADD39] bg-[#DADD39] text-[#1a1a1a]"
                  : "border-[#b0a890] bg-transparent text-[#4a4a4a] hover:border-[#8a8070]"
              }`}
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Main content */}
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Image */}
          <div className="relative mx-auto aspect-[672/546] w-full min-w-0 max-w-[672px] overflow-hidden rounded-lg lg:max-w-none">
            <Image
              src={categoryImages[activeCategory]}
              alt={`${activeCategory} Comic Book Cover Design Example`}
              fill
              sizes="(min-width: 1280px) 544px, (min-width: 1248px) 552px, (min-width: 1024px) calc(50vw - 72px), (min-width: 720px) 672px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
              className="object-contain"
              priority={activeCategory === "Superhero"}
            />
          </div>

          {/* Text */}
          <div className="w-full min-w-0 space-y-4 text-sm leading-6 text-[#4a4a4a] sm:space-y-5 sm:text-base sm:leading-7">
            <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-tight text-[#1a1a1a]">
              Create A Cover That Makes Your Story Stand Out
            </h3>

            <p className={` ${robotoMono.className} `}>
              Your cover is often the first part of your comic a potential reader
              sees.
            </p>

            <p className={` ${robotoMono.className} `}>
              A professional cover should communicate the story, genre, characters,
              tone, and visual identity of the book while working correctly with
              the selected publishing format.
            </p>

            <div>
              <p className={`${robotoMono.className} mb-3 font-medium`}>
                Our cover and book design services can include:
              </p>

              <ul className="space-y-1.5 sm:space-y-2">
                {services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <FaCircleCheck
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-[18px] text-[#DADD39]"
                    />

                    <span className={` ${robotoMono.className} min-w-0 flex-1 `}>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center sm:mt-10 lg:mt-14 xl:mt-16">
          <Link
            href="/contactus"
            className="inline-flex min-h-[44px] w-full max-w-full items-center justify-center rounded-md bg-[#c8d952] px-5 py-3 text-center text-sm font-medium leading-6 text-[#1a1a1a] transition-colors duration-200 hover:bg-[#b8c942] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2 motion-reduce:transition-none sm:w-auto sm:px-8 sm:text-base"
          >
            View Our Comic Design Work
          </Link>
        </div>
      </div>
    </section>
  );
}
