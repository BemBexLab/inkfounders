import React from "react";

const books = [
  { id: 1, alt: "Don't Cut the Grass on Sunday", tilt: "-6deg", zIndex: 1, src: "/landing-page/Frame 449 (1).png" },
  { id: 2, alt: "The Labyrinth", tilt: "-3deg", zIndex: 2, src: "/landing-page/Frame 450 (1).png" },
  { id: 3, alt: "God Carried Me", tilt: "-1deg", zIndex: 3, src: "/landing-page/Frame 451 (1).png" },
  { id: 4, alt: "Faith Over Feelings", tilt: "1deg", zIndex: 3, src: "/landing-page/Frame 452 (1).png" },
  { id: 5, alt: "Still I Rise", tilt: "3deg", zIndex: 2, src: "/landing-page/Frame 454 (1).png" },
  { id: 6, alt: "The Bounce Back", tilt: "6deg", zIndex: 1, src: "/landing-page/Frame 454.png" },
];

export default function BooksSection() {
  return (
    <section className="flex w-full flex-col items-center bg-white px-4 py-12 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2
        className="mb-10 text-center font-black text-gray-900 sm:mb-12 lg:mb-16"
        style={{ fontSize: "clamp(1.5rem, 6vw, 2.4rem)", letterSpacing: "-0.01em" }}
      >
        Book We've Helped Bring To Life
      </h2>

      {/* Books row */}
      <div
        className="flex w-full flex-wrap items-end justify-center gap-x-1 gap-y-6 sm:gap-x-2 md:gap-y-8 lg:flex-nowrap lg:gap-x-3"
        style={{ maxWidth: "1400px" }}
      >
        {books.map((book) => (
          <div
            key={book.id}
            className="w-[32%] min-w-[108px] max-w-[180px] sm:w-[24%] sm:min-w-[130px] sm:max-w-[210px] md:w-[16.5%] md:min-w-[145px] md:max-w-[230px] lg:w-1/6 lg:min-w-0 lg:max-w-none"
            style={{
              transform: `perspective(800px) rotateY(${book.tilt})`,
              transformOrigin: "center bottom",
              zIndex: book.zIndex,
              flexShrink: 0,
            }}
          >
            {/* Book with spine shadow */}
            <div className="relative">
              {/* Book cover image */}
              <img
                src={book.src}
                alt={book.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Right edge gloss */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "6%",
                  height: "100%",
                  background:
                    "linear-gradient(to left, rgba(255,255,255,0.12) 0%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
