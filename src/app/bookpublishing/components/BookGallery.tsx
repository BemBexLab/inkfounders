"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from "aos";
import AOSProvider from "@/components/AOSProvider";
import { link } from "fs";

// Add "Fiction" to tags if you want them to show under Fiction filter.
export const BOOKS = [
 {
    title: "DON'T CUT the GRASS on Sunday",
    author: "K.Stephen Jumper",
    cover: "/ourbook/New folder/Stephen 2.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    link: "https://a.co/d/0ee4hTIt",
  },
  {
    title: "The Bee's Colony, The Rise of the New Queen",
    author: "Joel B.Gindo",
    cover: "/ourbook/New folder/Bee 2.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    link: "https://a.co/d/03dFgTaS",
  },
  {
    title: "Growing together",
    author: "Allison Sullins",
    cover: "/ourbook/New folder/Allison 4.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    link: "https://a.co/d/0h1r5jAM",
  },
  {
    title: "Tales of the Hippie Dippie Gardener",
    author: "Jim Fritz",
    cover: "/ourbook/New folder/Jim Fritz 2.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
    link: "https://a.co/d/01RL87Q4",
  },
  {
    title: "God carried me",
    author: "Bertha Stumon",
    cover: "/ourbook/New folder/Bertha 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/084ustJB",
  },
  {
    title: "THE LABYRINTH",
    author: "Keith Cuvo",
    cover: "/ourbook/New folder/Keith Cuvo 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    link: "https://a.co/d/0fpe2YQe",
  },
  {
    title: "El Color del Renacer",
    author: "Luz Diaz",
    cover: "/ourbook/New folder/Luis Diaz 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/080ryfQM",
  },
  {
    title: "DREAMS FROM MY GRANDFATHER",
    author: "A. D. Bradley",
    cover: "/ourbook/New folder/The Storm 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0ie4oXLR",
  },
  {
    title: "THE BOOK OF UNFOLDING INTEGRATION",
    author: "Anthony Deans",
    cover: "/ourbook/New folder/Sara 2.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    link: "https://a.co/d/01TnBqeA",
  },
  {
    title: "Broken Dreams",
    author: "Bobby Bee",
    cover: "/ourbook/New folder/Wilma 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
    link: "https://a.co/d/07omlcAE",
  },
  {
    title: "THE MAN OF LIGHT AND THE MAN OF DARK",
    author: "Mike The Voice",
    cover: "/ourbook/New folder/Mike The Voice 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    link: "https://a.co/d/014CkQCA",
  },
  {
    title: "STILL I RISE",
    author: "Rachel Anderson",
    cover: "/ourbook/New folder/Rachael 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/09xqIhbN",
  },
];

const FILTERS = ["All", "Fiction", "Non Fiction", "Biography", "Children Book"];
const INITIAL_VISIBLE_COUNT = 12;
const LOAD_MORE_COUNT = 4;

const BookGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

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

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [activeFilter]);

  const visibleBooks = filteredBooks.slice(0, visibleCount);
  const hasMoreBooks = visibleCount < filteredBooks.length;
  const showSeeLess = filteredBooks.length > INITIAL_VISIBLE_COUNT && !hasMoreBooks;

  return (
    <AOSProvider>
      <section className="flex w-full flex-col items-center px-4 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        {/* Eyebrow Part */}
        <p className="font-semibold text-[#DADD39] text-xl">Bring Your Book To Life</p>
        {/* Heading Part */}
        <h2 className="font-semibold text-5xl text-black mb-5 mt-3">Our Portfolio</h2>
        {/* Filter Buttons */}
        <div className="mb-8 mt-0 flex w-full max-w-5xl flex-wrap justify-center gap-2 sm:mb-10">
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
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 justify-items-center gap-x-6 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-24">
          {/* Force re-render of cards on filter change by passing activeFilter as key */}
          {visibleBooks.map((book, idx) => (
            <Link
              href={book.link}
              data-aos="fade-up"
              key={`${activeFilter}-${idx}`} // Unique key to trigger re-render
              className="group flex w-full max-w-[260px] flex-col items-center text-center"
            >
              {/* Book Cover */}
              <div className="relative mb-4 h-[300px] w-[190px] overflow-hidden rounded-[18px] sm:h-[330px] sm:w-[210px] lg:h-[350px] lg:w-[225px]">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover shadow-md transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end justify-center rounded-[18px] bg-white/10 px-5 pb-6 opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                  <span className="rounded-full border border-white/50 bg-white/20 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
                    VIEW BOOK
                  </span>
                </div>
              </div>
              {/* Book Title */}
              {/* <h3 className="mb-0.5 w-full max-w-[230px] truncate text-[18px] font-bold text-black sm:text-[20px] lg:w-[180px] lg:text-[22px]">
                {book.title}
              </h3> */}
              {/* Author */}
              {/* <span className="mb-2 block text-[14px] text-[#444] sm:text-[15px]">{book.author}</span> */}
            </Link>
          ))}
        </div>

        {(hasMoreBooks || showSeeLess) && (
          <div className="mt-12 flex justify-center">
            {hasMoreBooks ? (
              <button
                onClick={() =>
                  setVisibleCount((currentCount) =>
                    Math.min(currentCount + LOAD_MORE_COUNT, filteredBooks.length)
                  )
                }
                className="rounded-md bg-[#DADD39] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Load more
              </button>
            ) : (
              <button
                onClick={() => setVisibleCount(INITIAL_VISIBLE_COUNT)}
                className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                See less
              </button>
            )}
          </div>
        )}
      </section>
    </AOSProvider>
  );
};

export default BookGallery;
