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
    <section className="w-full overflow-hidden bg-[#f5f3e8] py-10 sm:py-12 md:py-14">
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="mb-5 px-4 text-center sm:px-6">
        <p
          className="text-[18px] font-semibold tracking-widest sm:text-[22px] md:text-2xl"
          style={{ color: "#DADD39" }}
        >
          Our Work
        </p>
        <h2 className="mx-auto max-w-3xl text-[25px] font-bold leading-[1.05] text-gray-900 sm:text-[32px] md:text-4xl lg:leading-[1]">
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
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 bg-gradient-to-r from-[#f5f3e8] to-transparent sm:w-16 lg:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-5 bg-gradient-to-l from-[#f5f3e8] to-transparent sm:w-16 lg:w-28" />

        {/* Scrolling track */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-3 will-change-transform sm:gap-4"
            style={{ width: "max-content" }}
          >
            {loopSlides.map((slide, i) => (
              <SlideCard key={`${slide.id}-${i}`} slide={slide} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA Button ──────────────────────────────────────────────────────── */}
      <div className="mt-8 flex justify-center sm:mt-10">
        <a
          href="/Home/Portfolio%20PDF.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-slide-bg flex items-center gap-2 self-start rounded-md border border-transparent bg-[#DADD39] px-5 py-2 text-sm font-normal text-black shadow transition-all duration-300 hover:border-black md:self-center md:text-base lg:self-start"
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
    <div className="group relative h-[145px] w-[78vw] max-w-[330px] flex-shrink-0 cursor-pointer overflow-hidden rounded-lg shadow-md sm:h-[190px] sm:w-[55vw] sm:max-w-[410px] md:h-[220px] md:w-[44vw] lg:h-[clamp(140px,20vw,240px)] lg:w-[450px] lg:max-w-none">
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
        sizes="(max-width: 640px) 78vw, (max-width: 768px) 55vw, (max-width: 1024px) 44vw, 450px"
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
