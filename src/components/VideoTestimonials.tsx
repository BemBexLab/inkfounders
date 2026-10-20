"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const testimonials = [
    { id: 0, src: "/Inkfounder videos034.webm" },
    { id: 1, src: "/INK Client Review Video Edit11.webm" },
    { id: 2, src: "/Inkfounder videos031.webm" },
    { id: 3, src: "/Inkfounder videos03.webm" },
  ];

  // Keep the active testimonial in the middle, with its neighbors wrapping around.
  const visibleTestimonials = [-1, 0, 1].map((offset) => {
    const index =
      (activeIndex + offset + testimonials.length) % testimonials.length;
    return { ...testimonials[index], testimonialIndex: index };
  });

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === 1) {
        video.currentTime = 0;
        void video.play().catch(() => {
          // Browsers may block autoplay; the muted video can still be started manually.
        });
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  useEffect(() => {
    const carousel = carouselRef.current;
    const activeCard = cardRefs.current[1];
    if (!carousel || !activeCard) return;

    const cardLeft =
      activeCard.getBoundingClientRect().left -
      carousel.getBoundingClientRect().left +
      carousel.scrollLeft;
    carousel.scrollTo({
      left: cardLeft - (carousel.clientWidth - activeCard.clientWidth) / 2,
      behavior: "smooth",
    });
  }, [activeIndex]);

  return (
    <section className="flex flex-col items-center justify-center overflow-hidden bg-[#f5f5f5] px-4 py-16">
      {/* Header */}
      <h2 className="mb-3 text-center text-4xl font-semibold text-black md:text-5xl">
        Spotlighted Testimonials
      </h2>
      <p className="mb-14 text-center font-mono text-sm text-gray-500">
        Let's take a look at what our clients have to say about Ink founders:
      </p>

      {/* Video Cards */}
      <div
        ref={carouselRef}
        className="[--active-width:320px] md:[--active-width:480px] flex w-full max-w-7xl snap-x snap-mandatory items-center gap-4 overflow-x-auto scroll-smooth px-0 md:gap-6"
        style={{
          paddingInline: "max(0px, calc((100% - var(--active-width)) / 2))",
          scrollbarWidth: "none",
        }}
      >
        {visibleTestimonials.map((testimonial, slot) => {
          const isActive = slot === 1;
          return (
            <div
              key={testimonial.id}
              ref={(card) => {
                cardRefs.current[slot] = card;
              }}
              onClick={() => setActiveIndex(testimonial.testimonialIndex)}
              className={`relative h-[380px] w-[320px] shrink-0 snap-center cursor-pointer overflow-hidden rounded-lg transition-all duration-500 ease-in-out md:h-[460px] md:w-[480px] ${
                isActive
                  ? "z-10 scale-100"
                  : "scale-[0.82] opacity-75 blur-[2px]"
              }`}
            >
              {/* Video Element */}
              <video
                ref={(video) => {
                  videoRefs.current[slot] = video;
                }}
                src={testimonial.src}
                className="w-full h-full object-cover"
                muted={isMuted}
                playsInline
                onEnded={() =>
                  setActiveIndex((index) => (index + 1) % testimonials.length)
                }
              />

              {isActive && (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsMuted((muted) => !muted);
                  }}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="absolute bottom-3 right-3 z-20 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
                >
                  {isMuted ? (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-5 w-5"
                    >
                      <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                      <path d="m22 9-6 6m0-6 6 6" />
                    </svg>
                  ) : (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-5 w-5"
                    >
                      <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                      <path d="M15.5 8.5a5 5 0 0 1 0 7m3-10a9 9 0 0 1 0 13" />
                    </svg>
                  )}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2.5 mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-4 h-4 bg-[#d4e157]"
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
