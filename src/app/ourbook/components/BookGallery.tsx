"use client"
import Image from "next/image";
import { useState } from "react";

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
    tags: ["Fiction", "Non Fiction", "Biography", "Children Book"],
  },
  {
    title: "Hollow Places",
    author: "Dr. Avi Malik",
    cover: "/ourbook/book3.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
  },
  {
    title: "The Shape of Grief",
    author: "Dr. Alice Thorne",
    cover: "/ourbook/book4.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction", "Non Fiction"],
  },
  {
    title: "The Sound of my father...",
    author: "Claire Mahoney",
    cover: "/ourbook/book5.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography", "Children Book"],
  },
  {
    title: "Let the Earth Hold You",
    author: "Claire Mahoney",
    cover: "/ourbook/book6.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction", "Non Fiction"],
  },
  {
    title: "Wound We Inherit",
    author: "Helena Cruz",
    cover: "/ourbook/book7.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction", "Biography", "Children Book"],
  },
  {
    title: "The Slow Becoming",
    author: "D. Hassan Tariq",
    cover: "/ourbook/book8.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
  },
  {
    title: "The Fire You Carry",
    author: "Claire Mahoney",
    cover: "/ourbook/book9.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction", "Non Fiction", "Biography"],
  },
  {
    title: "The Walk Home",
    author: "Claire Mahoney",
    cover: "/ourbook/book10.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction", "Non Fiction", "Biography", "Children Book"],
  },
  {
    title: "My Grandmother’s Field",
    author: "Dr. Avi Malik",
    cover: "/ourbook/book11.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction", "Non Fiction", "Biography"],
  },
  {
    title: "A life without Apologies",
    author: "Dr. Alice Thorne",
    cover: "/ourbook/book12.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction", "Non Fiction", "Biography", "Children Book"],
  },
  {
    title: "When Boys Don’t Cry",
    author: "Claire Mahoney",
    cover: "/ourbook/book13.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction", "Non Fiction"],
  },
  {
    title: "Echoes Of her Hands",
    author: "Claire Mahoney",
    cover: "/ourbook/book14.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction", "Biography"],
  },
  {
    title: "Dust in the Spine",
    author: "Helena Cruz",
    cover: "/ourbook/book15.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction", "Non Fiction", "Biography", "Children Book"],
  },
  {
    title: "Roots In the Dust",
    author: "Helena Cruz",
    cover: "/ourbook/book16.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction", "Biography", "Children Book"],
  }
];

const FILTERS = ["All", "Fiction", "Non Fiction", "Biography", "Children Book"];

const BookGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredBooks =
    activeFilter === "All"
      ? BOOKS
      : BOOKS.filter((book) => book.tags?.includes(activeFilter));

  return (
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
        {filteredBooks.map((book, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
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
  );
};

export default BookGallery;
