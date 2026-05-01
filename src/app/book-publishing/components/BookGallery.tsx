"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from "aos";
import AOSProvider from "@/components/AOSProvider";

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

const galleryStyles = `
  .book-gallery-scroller {
    scrollbar-width: thin;
    scrollbar-color: #DADD39 transparent;
  }

  .book-gallery-scroller::-webkit-scrollbar {
    height: 8px;
  }

  .book-gallery-scroller::-webkit-scrollbar-track {
    background: transparent;
  }

  .book-gallery-scroller::-webkit-scrollbar-thumb {
    background: #DADD39;
    background-clip: content-box;
    border: 3px solid transparent;
    border-radius: 999px;
  }
`;

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
      <style>{galleryStyles}</style>
      <section className="flex w-full flex-col items-center px-4 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        {/* Eyebrow Part */}
        <p className="text-lg font-semibold text-[#DADD39] sm:text-xl">Bring Your Book To Life</p>
        <h2 className="mb-5 mt-3 text-center text-[32px] font-semibold text-black sm:text-[40px] md:text-[46px] lg:text-5xl">Our Portfolio</h2>
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

        {/* Horizontal book scroller */}
        <div className="mx-10 w-[calc(100vw-5rem)] overflow-hidden">
          <div className="book-gallery-scroller flex w-full snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-6 pt-2 sm:gap-7 md:gap-9">
          {filteredBooks.map((book, idx) => (
            <Link
              href={book.link}
              data-aos="fade-up"
              key={`${activeFilter}-${idx}`}
              className="group flex w-[210px] flex-none snap-center flex-col items-center text-center sm:w-[240px] lg:w-[260px]"
            >
              <div className="relative mb-4 h-[300px] w-[190px] overflow-hidden rounded-[18px] sm:h-[330px] sm:w-[210px] lg:h-[350px] lg:w-[225px]">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  sizes="(min-width: 1024px) 225px, (min-width: 640px) 210px, 190px"
                  className="object-cover shadow-md transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end justify-center rounded-[18px] bg-white/10 px-5 pb-6 opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                  <span className="rounded-full border border-white/50 bg-white/20 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
                    VIEW BOOK
                  </span>
                </div>
              </div>
            </Link>
          ))}
          </div>
        </div>
      </section>
    </AOSProvider>
  );
};

export default BookGallery;
