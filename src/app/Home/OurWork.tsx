"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// ── Placeholder image slots ──────────────────────────────────────────────────
// Replace each `src` with your actual image path / URL.
// The `label` is shown as an overlay caption (optional – remove if unwanted).
const SLIDES = [
  { id: 1, src: "/ourbook/portfolio-03 1.png", label: "" },
  { id: 2, src: "/ourbook/portfolio-04 1.png", label: "" },
  { id: 3, src: "/ourbook/portfolio-05 1.png", label: "" },
  { id: 4, src: "/ourbook/portfolio-06 1.png", label: "" },
  { id: 5, src: "/ourbook/portfolio-07 1.png", label: "" },
  { id: 6, src: "/ourbook/portfolio-08 1.png", label: "" },
  { id: 7, src: "/ourbook/portfolio-09 1.png", label: "" },
  { id: 8, src: "/ourbook/portfolio-10 1.png", label: "" },
  { id: 9, src: "/ourbook/portfolio-11 1.png", label: "" },
  { id: 10, src: "/ourbook/portfolio-11 2.png", label: "" },
  { id: 11, src: "/ourbook/portfolio-12 1.png", label: "" },
  { id: 12, src: "/ourbook/portfolio-12 2.png", label: "" },
];

// ── How many px to scroll per animation frame ────────────────────────────────
const SPEED = 0.6; // lower = slower, higher = faster

export default function OurWork() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);

  // Duplicate slides for seamless infinite loop
  const loopSlides = [...SLIDES, ...SLIDES, ...SLIDES];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        // Reset when first copy scrolled fully out of view
        const singleWidth = track.scrollWidth / 3;
        if (posRef.current >= singleWidth) {
          posRef.current -= singleWidth;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section className="w-full bg-[#f5f3e8] py-14 overflow-hidden">
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="text-center mb-5 px-4">
        <p
          className="font-semibold text-2xl tracking-widest mb-2"
          style={{ color: "#DADD39" }}
        >
          Our Work
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Illustrations That Bring Stories To Life
        </h2>
      </div>

      {/* ── Infinite Slider ─────────────────────────────────────────────────── */}
      <div
        className="relative w-full"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        onTouchStart={() => (pausedRef.current = true)}
        onTouchEnd={() => (pausedRef.current = false)}
      >
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-6 sm:w-28 z-10 pointer-events-none bg-gradient-to-r from-[#f5f3e8] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 z-10 pointer-events-none bg-gradient-to-l from-[#f5f3e8] to-transparent" />

        {/* Scrolling track */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 will-change-transform"
            style={{ width: "max-content" }}
          >
            {loopSlides.map((slide, i) => (
              <SlideCard key={`${slide.id}-${i}`} slide={slide} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA Button ──────────────────────────────────────────────────────── */}
      <div className="flex justify-center mt-10">
        <a
          href="/Home/Portfolio%20PDF.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-slide-bg flex items-center gap-2 bg-[#DADD39] text-black font-normal px-5 py-2 rounded-md shadow self-start md:self-center lg:self-start border border-transparent hover:border-black transition-all duration-300"
        >
          <span className="slide-bg rounded-md"></span>
          <span className="relative z-10 flex items-center gap-2">
            View More
          </span>
        </a>
      </div>
    </section>
  );
}

// ── Individual slide card ────────────────────────────────────────────────────
function SlideCard({ slide }: { slide: (typeof SLIDES)[0] }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 rounded-lg overflow-hidden shadow-md group cursor-pointer"
      style={{
        width: "450px",
        height: "clamp(140px, 20vw, 240px)",
      }}
    >
      {/* Placeholder shown while image loads */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-yellow-200 animate-pulse flex items-center justify-center">
          <svg
            className="w-10 h-10 text-amber-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}

      {/* Actual image – swap src with your real images */}
      <Image
        src={slide.src}
        alt={slide.label}
        fill
        sizes="(max-width: 640px) 80vw, 450px"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)} // hide shimmer even if image 404s
        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Hover overlay label */}
      {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
        <span
          className="w-full text-center text-white text-xs font-semibold px-2 py-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {slide.label}
        </span>
      </div> */}
    </div>
  );
}
