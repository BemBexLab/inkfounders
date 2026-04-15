"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AOSProvider from "@/components/AOSProvider";
import { BOOKS } from "@/app/ourbook/components/BookGallery";

// Add "Fiction" to tags if you want them to show under Fiction filter.
// const BOOKS = [
//   {
//     title: "Hollow Places",
//     author: "Claire Mahoney",
//     cover: "/ourbook/book1.png",
//     date: "6-July-2023",
//     genre: "Novel",
//     tags: ["Fiction"],
//   },
//   {
//     title: "Day and Dream",
//     author: "Claire Mahoney",
//     cover: "/ourbook/book2.png",
//     date: "6-July-2023",
//     genre: "Novel",
//     tags: ["Non Fiction"],
//   },
//   {
//     title: "The Unseen Threads",
//     author: "Dr. Avi Malik",
//     cover: "/ourbook/book3.png",
//     date: "6-July-2023",
//     genre: "Novel",
//     tags: ["Fiction"],
//   },
//   {
//     title: "The Shape of Grief",
//     author: "Dr. Alice Thorne",
//     cover: "/ourbook/book4.png",
//     date: "6-July-2023",
//     genre: "Novel",
//     tags: ["Biography"],
//   },
//   {
//     title: "The Sound of my father breathing",
//     author: "Claire Mahoney",
//     cover: "/ourbook/book5.png",
//     date: "6-July-2023",
//     genre: "Novel",
//     tags: ["Children Book"],
//   },
//   {
//     title: "Let the Earth Hold You",
//     author: "Claire Mahoney",
//     cover: "/ourbook/book6.png",
//     date: "6-July-2023",
//     genre: "Novel",
//     tags: ["Children Book"],
//   },
//   {
//     title: "Wound We Inherit",
//     author: "Helena Cruz",
//     cover: "/ourbook/book7.png",
//     date: "6-July-2023",
//     genre: "Novel",
//     tags: ["Biography"],
//   },
//   {
//     title: "The Slow Becoming",
//     author: "D. Hassan Tariq",
//     cover: "/ourbook/book8.png",
//     date: "6-July-2023",
//     genre: "Novel",
//     tags: ["Non Fiction"],
//   },
//   {
//     title: "The Fire You Carry",
//     author: "Claire Mahoney",
//     cover: "/ourbook/book9.png",
//     date: "6-July-2023",
//     genre: "Novel",
//     tags: ["Non Fiction"],
//   },
//   {
//     title: "The Walk Home",
//     author: "Claire Mahoney",
//     cover: "/ourbook/book10.png",
//     date: "6-July-2023",
//     genre: "Novel",
//     tags: ["Children Book"],
//   },
//   {
//     title: "My Grandmother’s Field",
//     author: "Dr. Avi Malik",
//     cover: "/ourbook/book11.png",
//     date: "6-July-2023",
//     genre: "Novel",
//     tags: ["Children Book"],
//   },
//   {
//     title: "A life without Apologies",
//     author: "Dr. Alice Thorne",
//     cover: "/ourbook/book12.png",
//     date: "6-July-2023",
//     genre: "Novel",
//     tags: ["Non Fiction"],
//   },
//   {
//     title: "When Boys Don’t Cry",
//     author: "Claire Mahoney",
//     cover: "/ourbook/book13.png",
//     date: "6-July-2023",
//     genre: "Novel",
//     tags: ["Children Book"],
//   },
//   {
//     title: "Echoes Of her Hands",
//     author: "Claire Mahoney",
//     cover: "/ourbook/book14.png",
//     date: "6-July-2023",
//     genre: "Novel",
//     tags: ["Biography"],
//   },
//   {
//     title: "Dust in the Spine",
//     author: "Helena Cruz",
//     cover: "/ourbook/book15.png",
//     date: "6-July-2023",
//     genre: "Novel",
//     tags: ["Fiction"],
//   },
//   {
//     title: "Roots In the Dust",
//     author: "Helena Cruz",
//     cover: "/ourbook/book16.png",
//     date: "6-July-2023",
//     genre: "Novel",
//     tags: ["Fiction"],
//   }
// ];

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
      <section className="flex w-full flex-col items-center bg-[#F6F5F3] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        {/* Title and Filter Buttons */}
        <div className="mb-8 flex w-full max-w-5xl flex-col items-center sm:mb-10">
          <div className="mb-2 text-center">
            <span className="text-[20px] font-semibold text-[#DADD39] sm:text-[23px] md:text-[25px]">
              What We&apos;ve Done So Far.
            </span>
          </div>
          <h2 className="mb-6 text-2xl font-bold text-black md:text-[2rem]">
            Our Portfolio
          </h2>
          {/* Filter Buttons */}
          <div className="mt-0 flex w-full flex-wrap justify-center gap-2">
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
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 justify-items-center gap-x-6 gap-y-10 min-[430px]:grid-cols-2 min-[823px]:grid-cols-3 min-[823px]:gap-x-4 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-14">
          {filteredBooks.map((book, idx) => (
            <div
              data-aos="fade-up"
              key={`${activeFilter}-${idx}`} // Unique key to force re-render
              className="flex w-full max-w-[240px] flex-col items-center text-center min-[823px]:max-w-[210px] lg:max-w-[240px]"
            >
              {/* Book Cover */}
              <div
                className="relative mb-4 h-[260px] w-[165px] min-[430px]:h-[250px] min-[430px]:w-[160px] sm:h-[300px] sm:w-[190px] min-[823px]:h-[280px] min-[823px]:w-[180px] lg:h-[350px] lg:w-[225px]"
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
