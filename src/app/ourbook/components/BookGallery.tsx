"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AOSProvider from "@/components/AOSProvider";

// Add "Fiction" to tags if you want them to show under Fiction filter.
export const BOOKS = [
 {
    title: "DON'T CUT the GRASS on Sunday",
    author: "K.Stephen Jumper",
    cover: "/ourbook/New folder/Stephen 2.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "The Bee's Colony, The Rise of the New Queen",
    author: "Joel B.Gindo",
    cover: "/ourbook/New folder/Bee 2.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
  },
  {
    title: "Growing together",
    author: "Allison Sullins",
    cover: "/ourbook/New folder/Allison 4.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
  },
  {
    title: "Tales of the Hippie Dippie Gardener",
    author: "Jim Fritz",
    cover: "/ourbook/New folder/Jim Fritz 2.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
  },
  {
    title: "God carried me",
    author: "Bertha Stumon",
    cover: "/ourbook/New folder/Bertha 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
  },
  {
    title: "THE LABYRINTH",
    author: "Keith Cuvo",
    cover: "/ourbook/New folder/Keith Cuvo 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
  },
  {
    title: "El Color del Renacer",
    author: "Luz Diaz",
    cover: "/ourbook/New folder/Luis Diaz 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
  },
  {
    title: "THE TIME CAPSULE MYSTERY",
    author: "Jenny Lynn",
    cover: "/ourbook/New folder/Jenny Lynn 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
  },
  {
    title: "LAFLAPS: Living A Fruitful Life After Prison System",
    author: "Gary Alan Early",
    cover: "/ourbook/New folder/Laflaps 2.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
  },
  {
    title: "THROUGH THE EYE OF THE STORM",
    author: "Andre Goldson",
    cover: "/ourbook/New folder/The Storm 2.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "FRESH PATHS UNFOLDING",
    author: "Sara Tessier",
    cover: "/ourbook/New folder/Sara 3.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
  },
  {
    title: "FORGED IN THE MOUNTAINS",
    author: "Wilma Gibson Smith",
    cover: "/ourbook/New folder/Wilma 2.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
  },
  {
    title: "DISCOVERING THE ROOT CAUSE OF CANCER",
    author: "Valerie B. Irons",
    cover: "/ourbook/New folder/Laflaps 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
  },
  {
    title: "DREAMS FROM MY GRANDFATHER",
    author: "A. D. Bradley",
    cover: "/ourbook/New folder/The Storm 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
  },
  {
    title: "THE BOOK OF UNFOLDING INTEGRATION",
    author: "Anthony Deans",
    cover: "/ourbook/New folder/Sara 2.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "The Depth of Love",
    author: "Bobby Bee",
    cover: "/ourbook/New folder/Wilma 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "THE BOUNCE BACK",
    author: "Craig Powell",
    cover: "/ourbook/New folder/Craig 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "IT WAS NEVER YOUR FAULT",
    author: "Jerry L. Morgan",
    cover: "/ourbook/New folder/Jerry 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "The Adventure of Scott And Lenny",
    author: "Leonard Serratore",
    cover: "/ourbook/New folder/Leonard 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "PROVERBIAL SPIRITUAL MESSAGES",
    author: "Ray Kaczar",
    cover: "/ourbook/New folder/Ray 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "LEADING WITH PURPOSE",
    author: "Dr. Ralph M. Watkins Ph.D.",
    cover: "/ourbook/New folder/Ralph 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "JETHRO & KASHU & FRIENDS PLANT A FOREST",
    author: "Sara Tessier",
    cover: "/ourbook/New folder/Sara Tessier 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "Kael and the Whale with the Polka-Dot Tail",
    author: "Scott Frank",
    cover: "/ourbook/New folder/Kael 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "THE ARCHIVE OF A. D. BRADLEY",
    author: "A. D. BRADLEY",
    cover: "/ourbook/New folder/AD Bradley 2.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "Mr. Mogley Muck The House Mouse",
    author: "Janice Balo",
    cover: "/ourbook/New folder/Mr Mogley 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "IMPULSE",
    author: "Dr. Sandra Dennis",
    cover: "/ourbook/New folder/Sandra 3.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "MY BUG BOOK",
    author: "Wanda Jenkins Smith",
    cover: "/ourbook/New folder/My Bug Book 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "IF I HAD A COW",
    author: "Wanda Jenkins Smith",
    cover: "/ourbook/New folder/Had a Cow 2.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "THE MAN OF LIGHT AND THE MAN OF DARK",
    author: "Mike The Voice",
    cover: "/ourbook/New folder/Mike The Voice 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "FAITH OVER FEELINGS",
    author: "Peter E. Martins",
    cover: "/ourbook/New folder/Peter 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
  },
  {
    title: "STILL I RISE",
    author: "Rachel Anderson",
    cover: "/ourbook/New folder/Rachael 1.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
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
          {visibleBooks.map((book, idx) => (
            <Link
              href="#"
              data-aos="fade-down-right"
              key={`${activeFilter}-${idx}`} // Unique key to trigger re-render
              className="group flex flex-col items-center text-center"
            >
              {/* Book Cover */}
              <div className="relative mb-4 h-[350px] w-[225px] overflow-hidden rounded-[18px]">
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
              <h3 className="font-bold text-black text-[22px] mb-0.5 truncate w-[180px]">
                {book.title}
              </h3>
              {/* Author */}
              <span className="text-[15px] text-[#444] mb-2 block">{book.author}</span>
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
