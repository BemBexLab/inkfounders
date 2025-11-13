"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AOSProvider from "@/components/AOSProvider";

// Add "Fiction" to tags if you want them to show under Fiction filter.
export const BOOKS = [
 {
    title: "The Cinders we choose",
    author: "Claire Mahoney",
    cover: "/ourbook/new/01.png",
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
    title: "God carried me",
    author: "Joseph R J Baffi",
    cover: "/ourbook/new/02.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
  },
  {
    title: "Growing together",
    author: "Melissa B. Kruger",
    cover: "/ourbook/new/03.png",
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
    tags: ["Non Fiction"],
  },
  {
    title: "The Proverbial Spritual Message",
    author: "Claire Mahoney",
    cover: "/ourbook/new/04.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
  },
  {
    title: "Wound We Inherit",
    author: "Helena Cruz",
    cover: "/ourbook/book7.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
  },
  {
    title: "Children of Madness",
    author: "Jarrett Brandon Early",
    cover: "/ourbook/new/05.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
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
    title: "The Broken Souls",
    author: "Patricia Gibney",
    cover: "/ourbook/new/07.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "Poetry in Motion",
    author: "Julinda",
    cover: "/ourbook/new/08.png",
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
    title: "Whishes",
    author: "Jude Deveraux",
    cover: "/ourbook/new/wishes.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
  },
  {
    title: "Roots In the Dust",
    author: "Helena Cruz",
    cover: "/ourbook/book16.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "The Depth of Love",
    author: "Ramesh Kaliyan",
    cover: "/ourbook/new/thedepthoflove.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  
];

const FILTERS = ["All", "Fiction", "Non Fiction", "Biography", "Children Book"];

const BookGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    // Initialize AOS on first load
    AOS.init({
      duration: 1000, // Adjust the duration of the animation if necessary
    });

    // Force AOS to refresh and trigger animations
    AOS.refreshHard();
  }, [activeFilter]); // Runs every time activeFilter changes

  const filteredBooks =
    activeFilter === "All"
      ? BOOKS
      : BOOKS.filter((book) => book.tags?.includes(activeFilter));

  return (
    <AOSProvider>
      <section className="w-full py-12 bg-[#F6F5F3] flex flex-col items-center">
        {/* Filter Buttons */}
        <div className="mb-10 flex flex-wrap gap-2 mt-0 justify-center w-full">
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

        {/* Cards Grid */}
        <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-24 gap-x-0">
          {/* Force re-render of cards on filter change by passing activeFilter as key */}
          {filteredBooks.map((book, idx) => (
            <div
              data-aos="fade-down-right"
              key={`${activeFilter}-${idx}`} // Unique key to trigger re-render
              className="flex flex-col items-center text-center"
            >
              {/* Book Cover */}
              <div className="w-[225px] h-[350px] relative mb-4">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover rounded-sm shadow-md"
                />
              </div>
              {/* Book Title */}
              <h3 className="font-bold text-black text-[22px] mb-0.5 truncate w-[180px]">
                {book.title}
              </h3>
              {/* Author */}
              <span className="text-[15px] text-[#444] mb-2 block">{book.author}</span>
            </div>
          ))}
        </div>
      </section>
    </AOSProvider>
  );
};

export default BookGallery;
