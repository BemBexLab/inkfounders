"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AOSProvider from "@/components/AOSProvider";

// Add "Fiction" to tags if you want them to show under Fiction filter.
const BOOKS = [
  {
    title: "Hollow Places",
    author: "Claire Mahoney",
    cover: "/ourbook/book1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "Day and Dream",
    author: "Claire Mahoney",
    cover: "/ourbook/book2.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
  },
  {
    title: "The Unseen Threads",
    author: "Dr. Avi Malik",
    cover: "/ourbook/book3.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "The Shape of Grief",
    author: "Dr. Alice Thorne",
    cover: "/ourbook/book4.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
  },
  {
    title: "The Sound of my father breathing",
    author: "Claire Mahoney",
    cover: "/ourbook/book5.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
  },
  {
    title: "Let the Earth Hold You",
    author: "Claire Mahoney",
    cover: "/ourbook/book6.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
  },
  {
    title: "Wound We Inherit",
    author: "Helena Cruz",
    cover: "/ourbook/book7.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
  },
  {
    title: "The Slow Becoming",
    author: "D. Hassan Tariq",
    cover: "/ourbook/book8.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
  },
  {
    title: "The Fire You Carry",
    author: "Claire Mahoney",
    cover: "/ourbook/book9.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
  },
  {
    title: "The Walk Home",
    author: "Claire Mahoney",
    cover: "/ourbook/book10.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
  },
  {
    title: "My Grandmother’s Field",
    author: "Dr. Avi Malik",
    cover: "/ourbook/book11.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
  },
  {
    title: "A life without Apologies",
    author: "Dr. Alice Thorne",
    cover: "/ourbook/book12.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
  },
  {
    title: "When Boys Don’t Cry",
    author: "Claire Mahoney",
    cover: "/ourbook/book13.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
  },
  {
    title: "Echoes Of her Hands",
    author: "Claire Mahoney",
    cover: "/ourbook/book14.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
  },
  {
    title: "Dust in the Spine",
    author: "Helena Cruz",
    cover: "/ourbook/book15.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "Roots In the Dust",
    author: "Helena Cruz",
    cover: "/ourbook/book16.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  }
];

const FILTERS = ["Fiction", "Non Fiction", "Biography", "Children Book"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("Fiction");

  // Reinitialize AOS when the filter changes
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the duration of the animation if necessary
    });
    AOS.refreshHard(); // Refresh animations to re-trigger them
  }, [activeFilter]); // Runs every time activeFilter changes

  const filteredBooks =
    activeFilter === "All"
      ? BOOKS
      : BOOKS.filter((book) => book.tags?.includes(activeFilter));

  return (
    <AOSProvider>
      <section className="w-full py-12 bg-[#F6F5F3] flex flex-col items-center">
        {/* Title and Filter Buttons */}
        <div className="mb-10 flex flex-col items-center">
          <div className="text-center mb-2">
            <span className="text-[#DADD39] font-semibold text-[25px]">
              What We&apos;ve Done So Far.
            </span>
          </div>
          <h2 className="text-black font-bold text-2xl md:text-[2rem] mb-6">
            Our Portfolio
          </h2>
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mt-0 justify-center w-full">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  background:
                    activeFilter === filter
                      ? "#DADD39"
                      : "rgba(218,221,57,0.30)",
                  color: activeFilter === filter ? "#000" : "#888",
                }}
                className="font-medium px-2 py-1 text-[12px] rounded-md transition shadow-none
                  sm:px-3 sm:py-1.5 sm:text-[13px]
                  md:px-6 md:py-2 md:text-[16px]"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="w-full max-w-[1280px] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-y-14 gap-x-0">
          {filteredBooks.map((book, idx) => (
            <div
              data-aos="fade-down-right"
              key={`${activeFilter}-${idx}`} // Unique key to force re-render
              className="flex flex-col items-center text-center"
            >
              {/* Book Cover */}
              <div
                className="w-[170px] h-[240px] sm:w-[150px] sm:h-[220px] md:w-[225px] md:h-[350px] relative mb-4"
              >
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover rounded-sm shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </AOSProvider>
  );
};

export default Portfolio;
