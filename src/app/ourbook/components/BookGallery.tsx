"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from "aos";
import { Search, X } from "lucide-react";
// import "aos/dist/aos.css";
import AOSProvider from "@/components/AOSProvider";

// Add "Fiction" to tags if you want them to show under Fiction filter.
export const BOOKS = [
 {
    title: "DON'T CUT the GRASS on Sunday",
    author: "K.Stephen Jumper",
    cover: "/ourbook/New folder/Stephen 2.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    link: "https://a.co/d/0ee4hTIt",
  },
  {
    title: "The Bee's Colony, The Rise of the New Queen",
    author: "Joel B.Gindo",
    cover: "/ourbook/New folder/Bee 2.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    link: "https://a.co/d/03dFgTaS",
  },
  {
    title: "Growing together",
    author: "Allison Sullins",
    cover: "/ourbook/New folder/Allison 4.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    link: "https://a.co/d/0h1r5jAM",
  },
  {
    title: "Tales of the Hippie Dippie Gardener",
    author: "Jim Fritz",
    cover: "/ourbook/New folder/Jim Fritz 2.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
    link: "https://a.co/d/01RL87Q4",
  },
  {
    title: "God carried me",
    author: "Bertha Stumon",
    cover: "/ourbook/New folder/Bertha 1.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/084ustJB",
  },
  {
    title: "THE LABYRINTH",
    author: "Keith Cuvo",
    cover: "/ourbook/New folder/Keith Cuvo 1.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    link: "https://a.co/d/0fpe2YQe",
  },
  {
    title: "El Color del Renacer",
    author: "Luz Diaz",
    cover: "/ourbook/New folder/Luis Diaz 1.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/080ryfQM",
  },
  {
    title: "THE TIME CAPSULE MYSTERY",
    author: "Jenny Lynn",
    cover: "/ourbook/New folder/Jenny Lynn 1.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    link: "https://a.co/d/0eaNfhXz",
  },
  {
    title: "LAFLAPS: Living A Fruitful Life After Prison System",
    author: "Gary Alan Early",
    cover: "/ourbook/New folder/Laflaps 2.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"], 
    link: "https://a.co/d/0gZbtRPp",
  },
  {
    title: "THROUGH THE EYE OF THE STORM",
    author: "Andre Goldson",
    cover: "/ourbook/New folder/The Storm 2.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0ciIvs0L",
  },
  {
    title: "FRESH PATHS UNFOLDING",
    author: "Sara Tessier",
    cover: "/ourbook/New folder/Sara 3.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
    link: "https://a.co/d/0h3gl6A6",
  },
  {
    title: "FORGED IN THE MOUNTAINS",
    author: "Wilma Gibson Smith",
    cover: "/ourbook/New folder/Wilma 2.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/02fR7S9m",
  },
  {
    title: "DISCOVERING THE ROOT CAUSE OF CANCER",
    author: "Valerie B. Irons",
    cover: "/ourbook/New folder/Laflaps 1.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/02fR7S9m",
  },
  {
    title: "DREAMS FROM MY GRANDFATHER",
    author: "A. D. Bradley",
    cover: "/ourbook/New folder/The Storm 1.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0ie4oXLR",
  },
  {
    title: "THE BOOK OF UNFOLDING INTEGRATION",
    author: "Anthony Deans",
    cover: "/ourbook/New folder/Sara 2.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    link: "https://a.co/d/01TnBqeA",
  },
  {
    title: "Broken Dreams",
    author: "Bobby Bee",
    cover: "/ourbook/New folder/Wilma 1.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
    link: "https://a.co/d/07omlcAE",
  },
  {
    title: "THE BOUNCE BACK",
    author: "Craig Powell",
    cover: "/ourbook/New folder/Craig 1.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/077L9M4Y",
  },
  {
    title: "IT WAS NEVER YOUR FAULT",
    author: "Jerry L. Morgan",
    cover: "/ourbook/New folder/Jerry 1.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    link: "https://a.co/d/00INdTu4",
  },
  {
    title: "The Adventure of Scott And Lenny",
    author: "Leonard Serratore",
    cover: "/ourbook/New folder/Leonard 1.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    link: "https://a.co/d/04i1QzPC",
  },
  {
    title: "PROVERBIAL SPIRITUAL MESSAGES",
    author: "Ray Kaczar",
    cover: "/ourbook/New folder/Ray 1.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0eTrzJDj",
  },
  {
    title: "LEADING WITH PURPOSE",
    author: "Dr. Ralph M. Watkins Ph.D.",
    cover: "/ourbook/New folder/Ralph 1.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    link: "https://a.co/d/02Ghlu41",
  },
  {
    title: "JETHRO & KASHU & FRIENDS PLANT A FOREST",
    author: "Sara Tessier",
    cover: "/ourbook/New folder/Sara Tessier 1.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    link: "https://a.co/d/0dowUcE8",
  },
  {
    title: "Kael and the Whale with the Polka-Dot Tail",
    author: "Scott Frank",
    cover: "/ourbook/New folder/Kael 1.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    link: "https://a.co/d/0aj4vVbz",
  },
  {
    title: "THE ARCHIVE OF A. D. BRADLEY",
    author: "A. D. BRADLEY",
    cover: "/ourbook/New folder/AD Bradley 2.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0iMWfNUy",
  },
  {
    title: "Mr. Mogley Muck The House Mouse",
    author: "Janice Balo",
    cover: "/ourbook/New folder/Mr Mogley 1.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    link: "https://a.co/d/0aF4lnuo",
  },
  {
    title: "IMPULSE",
    author: "Dr. Sandra Dennis",
    cover: "/ourbook/New folder/Sandra 3.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    link: "https://a.co/d/0d9v0ECL",
  },
  {
    title: "MY BUG BOOK",
    author: "Wanda Jenkins Smith",
    cover: "/ourbook/New folder/My Bug Book 1.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    link: "https://a.co/d/09kbk7rw",
  },
  {
    title: "IF I HAD A COW",
    author: "Wanda Jenkins Smith",
    cover: "/ourbook/New folder/Had a Cow 2.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    link: "https://a.co/d/05OKpCCe",
  },
  {
    title: "THE MAN OF LIGHT AND THE MAN OF DARK",
    author: "Mike The Voice",
    cover: "/ourbook/New folder/Mike The Voice 1.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    link: "https://a.co/d/014CkQCA",
  },
  {
    title: "FAITH OVER FEELINGS",
    author: "Peter E. Martins",
    cover: "/ourbook/New folder/Peter 1.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0iz5TW4E",
  },
  {
    title: "STILL I RISE",
    author: "Rachel Anderson",
    cover: "/ourbook/New folder/Rachael 1.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/09xqIhbN",
  },
  {
    title: "BE POSITIVE!",
    author: "VERONICA NASH “Pooh”",
    cover: "https://m.media-amazon.com/images/I/51T8JE34b4L._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0eMh9NpH",
  },
  {
    title: "THE BURIED TRUTH",
    author: "SCOTT J. MILLER",
    cover: "https://m.media-amazon.com/images/I/710RLphkgrL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/08rleSkd",
  },
  {
    title: "THE VSO PLAYBOOK: Volume 1",
    author: " Pamela K. Robertson",
    cover: "https://m.media-amazon.com/images/I/51RdielPYYL._SY385_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/020nlti6",
  },
  {
    title: "THE VSO PLAYBOOK: Volume 2",
    author: " Pamela K. Robertson",
    cover: "https://m.media-amazon.com/images/I/61LS5RFstNL._SY385_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/05ws6l7C",
  },
  {
    title: "THE VSO PLAYBOOK: Volume 3",
    author: "Pamela K. Robertson",
    cover: "https://m.media-amazon.com/images/I/61HXJmvohaL._SY385_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0jkmTgSl",
  },
  {
    title: "Returning to the Prayer",
    author: " Benjamin Harrison Bennett Jr",
    cover: "https://m.media-amazon.com/images/I/71vn8t9NJPL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0iNubjwn",
  },
  {
    title: "RHYME WITH REASON",
    author: " Gene Van Alstyne",
    cover: "https://m.media-amazon.com/images/I/61XNBRiq1DL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0bVw3K7a",
  },
  {
    title: "The Adventures of Jenny",
    author: " John H Lake",
    cover: "https://m.media-amazon.com/images/I/71NrTA8TnrL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/025Z9puW",
  },
  {
    title: "ASHES OF THE OBSIDIAN SHORE",
    author: "Roger Dale Faubush II",
    cover: "https://m.media-amazon.com/images/I/71scCT35IyL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/06XrCqUG",
  },
  {
    title: "SCORCHING WINGS OF AN EMPTY NESTER: An empty nester adventure that I wasn't ready for",
    author: "KEN NOBLE",
    cover: "https://m.media-amazon.com/images/I/71lfsR4AbhL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0jdoebVy",
  },
  {
    title: "The Keeper of Tears: A Tale of Lost Rain, Brave Hearts, and the Power of Tears",
    author: "John C Blackford",
    cover: "https://m.media-amazon.com/images/I/71KObra5lZL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/098t5Wdp",
  },
  {
    title: "Talon: The Great Dragonfly",
    author: " John C Blackford",
    cover: "https://m.media-amazon.com/images/I/71RQJxojWjL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/02RD5Tsi",
  },
  {
    title: "Drawn 2 Danger: A Memoir of Duty, Danger, and Discovery",
    author: "J P Sexton",
    cover: "https://m.media-amazon.com/images/I/71EjxGKCmEL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/01Bs2kl9",
  },
  {
    title: "THE PUBLICAN",
    author: "David Nava Monreal",
    cover: "https://m.media-amazon.com/images/I/61xM8pwkQkL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/01SaWxIa",
  },
  {
    title: "OLD LORE & BONES: Poems, Ballads & Adventures of the Sea",
    author: " UNCLE SCOTTY",
    cover: "https://m.media-amazon.com/images/I/717h0aKKWJL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0hEL6zyk",
  },
  {
    title: "The Table: Conversations Across Time",
    author: " Dr. Carl L. Young PhD",
    cover: "https://m.media-amazon.com/images/I/61ANOQzt8vL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0hvI02XW",
  },
  {
    title: "Healing Your Heart: Understanding the Root Causes of Breast Cancer",
    author: " Valerie B. Irons",
    cover: "https://m.media-amazon.com/images/I/71uF6YRwfhL._SY385_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0iPpg8TL",
  },
  {
    title: "JAMIE, HATTIE & JACKIE and the Otherworldly Friends",
    author: "Ankit Arora",
    cover: "https://m.media-amazon.com/images/I/71iHOyp46zL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/08g4V2iB",
  },
  {
    title: "HIP HOP HERMENEUTICS: A TOOL TO HELP THE BLACK CHURCH RECAPTURE AFRICAN AMERICAN YOUTH",
    author: " DR. BURTON LEROY MACK",
    cover: "https://m.media-amazon.com/images/I/61PX0O8kpCL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0gR8fCxy",
  },
  {
    title: "A SNOWY DAY",
    author: " Wanda Jenkins-smith",
    cover: "https://m.media-amazon.com/images/I/61nGY2mBArL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/07RInouK",
  },
  {
    title: "THE STORMY NIGHT",
    author: "Wanda Jenkins-Smith",
    cover: "https://m.media-amazon.com/images/I/61tou7wZZJL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/01HxUOni",
  },
  {
    title: "Monkey Feet",
    author: "Wanda Jenkins-Smith",
    cover: "https://m.media-amazon.com/images/I/61jaDj6bQAL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/03HzI9Bp",
  },
  {
    title: "On Lightness and Being: Love, Loss, and Letting Go",
    author: "Carron Hairabedian",
    cover: "https://m.media-amazon.com/images/I/71pNKStRVhL._SY425_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/01p7ZBw8",
  },
  {
    title: "On Lightness and Being: Becoming Whole: Healing, Wisdom, and Peace",
    author: "Carron Hairabedian",
    cover: "https://m.media-amazon.com/images/I/61IQQ3DHzxL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/01eDTdbD",
  },
  {
    title: "IMPULSE: A Story About Loss, Love, and Life Lessons",
    author: " Dr. Sandra Dennis",
    cover: "https://m.media-amazon.com/images/I/61VoKsdSsnL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0eDuDm9p",
  },
  {
    title: "The Messages of Faith and The Love of God: From Our Blessed Mother",
    author: " J. Bernard Reyes",
    cover: "https://m.media-amazon.com/images/I/61frnxUrH6L._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0cSyfyU1",
  },
  {
    title: "On Lightness and Being: Becoming Human: Learning to See",
    author: "Carron Hairabedian",
    cover: "https://m.media-amazon.com/images/I/61bey9pTYEL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0eVNdG2M",
  },
  {
    title: "A View from the Palace",
    author: " Robbie Munn Bayler",
    cover: "https://m.media-amazon.com/images/I/81t9ZodeQ-L._SY385_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/05xtglqn",
  },
  {
    title: "DECEIVED WOMAN",
    author: "LUZ ARDELYS DÍAZ PERALTA",
    cover: "https://m.media-amazon.com/images/I/61cdChR7i2L._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/00S0v12I",
  },
  {
    title: "MUJER ENGAÑADA (Spanish Edition)",
    author: "LUZ ARDELYS DÍAZ PERALTA",
    cover: "https://m.media-amazon.com/images/I/61cdChR7i2L._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/02b8lhUI",
  },
  {
    title: "A LIFERAFT for The SUDDENLY SINGLE PARENT",
    author: "SHARON YODER",
    cover: "https://m.media-amazon.com/images/I/810D2faZOoL._SY385_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0hPrYFXh",
  },
  {
    title: "CROWNED in SILENCE",
    author: " Toya Bounds",
    cover: "https://m.media-amazon.com/images/I/61u5a1G4OrL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/02a32XsM",
  },
  {
    title: "THE COLOR OF REBIRTH: Memoirs of Faith, Land, and Renewal",
    author: "Luz Diaz",
    cover: "https://m.media-amazon.com/images/I/51EBMyMqVsL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0427EwRh",
  },
  {
    title: "Can I Survive Widowhood: The struggle With Grief, Shock, and Reestablishing a New Life",
    author: " Robbie Munn Bayler",
    cover: "https://m.media-amazon.com/images/I/81FAqqLB3YL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/00AOB2Hr",
  },
  {
    title: "LAFLAPS: THE BON VOYAGE",
    author: "Gary Alan Early",
    cover: "https://m.media-amazon.com/images/I/61Kd4YLH0CL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/01vp7Adj",
  },
  {
    title: "Preston",
    author: "David Bales",
    cover: "https://m.media-amazon.com/images/I/81GQhuLY7RL._SY466_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0eR3izAk",
  },
  {
    title: "The Little Butterfly Girl: Revised Tenth Anniversary Edition",
    author: "Brooke Brown",
    cover: "https://m.media-amazon.com/images/I/61ZmECNYshL._SY522_.jpg",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/0j3UkTFL",
  },
];

const FILTERS = ["All", "Fiction", "Non Fiction", "Biography", "Children Book"];
const INITIAL_VISIBLE_COUNT = 12;
const LOAD_MORE_COUNT = 4;

const BookGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  useEffect(() => {
    // Initialize AOS on first load
    AOS.init({
      duration: 1000, // Adjust the duration of the animation if necessary
    });

    // Force AOS to refresh and trigger animations
    AOS.refreshHard();
  }, [activeFilter, searchQuery]); // Refresh animations when the results change

  const searchTerms = searchQuery
    .trim()
    .toLocaleLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  const filteredBooks = BOOKS.filter((book) => {
    const matchesCategory =
      activeFilter === "All" || book.tags?.includes(activeFilter);
    const searchableText = `${book.title} ${book.author}`.toLocaleLowerCase();
    const matchesSearch = searchTerms.every((term) => searchableText.includes(term));

    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [activeFilter, searchQuery]);

  const visibleBooks = filteredBooks.slice(0, visibleCount);
  const hasMoreBooks = visibleCount < filteredBooks.length;
  const showSeeLess = filteredBooks.length > INITIAL_VISIBLE_COUNT && !hasMoreBooks;

  return (
    <AOSProvider>
      <section className="flex w-full flex-col items-center bg-[#F6F5F3] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        {/* Category filters and search */}
        <div className="mb-8 flex w-full max-w-[1280px] items-center justify-between gap-3 sm:mb-10 lg:gap-6">
          <div className="flex min-w-0 flex-1 flex-nowrap gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                style={{
                  background:
                    activeFilter === filter
                      ? "#DADD39"
                      : "rgba(218,221,57,0.30)",
                  color: activeFilter === filter ? "#000" : "#888",
                }}
                className="shrink-0 rounded-md px-2 py-2 text-[12px] font-medium shadow-none transition sm:px-3 sm:text-[13px] md:px-5 md:text-[15px]"
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-[42%] min-w-[150px] max-w-[360px] shrink-0 sm:min-w-[230px]">
            <label htmlFor="book-search" className="sr-only">
              Search books by title or author
            </label>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#777] sm:left-4 sm:size-5"
            />
            <input
              id="book-search"
              type="text"
              role="searchbox"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search title or author"
              autoComplete="off"
              className="w-full rounded-xl border border-black/10 bg-white py-2.5 pl-9 pr-9 text-[12px] text-black shadow-sm outline-none transition placeholder:text-[#888] focus:border-[#BFC225] focus:ring-4 focus:ring-[#DADD39]/20 sm:py-3 sm:pl-11 sm:pr-11 sm:text-[15px]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear book search"
                className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-[#777] transition hover:bg-black/5 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BFC225] sm:right-3 sm:size-8"
              >
                <X aria-hidden="true" className="size-4" />
              </button>
            )}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          {filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"} found
        </p>

        {/* Cards Grid */}
        {visibleBooks.length > 0 ? (
          <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 justify-items-center gap-x-6 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-24">
            {/* Force re-render of cards on filter change by passing activeFilter as key */}
            {visibleBooks.map((book) => (
              <Link
                href={book.link}
                data-aos="fade-up"
                key={`${book.title}-${book.author}`}
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
                <h3 className="mb-0.5 w-full max-w-[230px] uppercase truncate text-[18px] font-bold text-black sm:text-[20px] lg:w-[180px] lg:text-[22px]">
                  {book.title}
                </h3>
                {/* Author */}
                <span className="mb-2 block text-[14px] text-[#444] sm:text-[15px]">
                  {book.author}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex min-h-56 w-full max-w-xl flex-col items-center justify-center text-center">
            <Search
              aria-hidden="true"
              className="mb-4 size-9 text-[#AEB124]"
            />
            <h3 className="text-xl font-bold text-black">No books found</h3>
            <p className="mt-2 text-sm text-[#666] sm:text-base">
              Try another title, author, or category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("All");
              }}
              className="mt-5 rounded-md bg-[#DADD39] px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Clear filters
            </button>
          </div>
        )}

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
