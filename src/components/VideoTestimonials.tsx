"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoTestimonials() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const testimonials = [
      { id: 0, src: "/Inkfounder videos034.webm" },
      { id: 1, src: "/Inkfounder videos031.webm" },
      { id: 2, src: "/Inkfounder videos03.webm" },
  ];

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
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

  return (
    <section className="bg-[#f5f5f5] flex flex-col items-center justify-center py-16 px-4">
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-semibold text-black mb-3 text-center">
        Spotlighted Testimonials
      </h2>
      <p className="text-gray-500 text-sm font-mono mb-14 text-center">
        Let's take a look at what our clients have to say about Ink founders:
      </p>

      {/* Video Cards */}
      <div className="flex items-center justify-start md:justify-center gap-4 md:gap-6 w-full max-w-7xl overflow-x-auto">
        {testimonials.map((testimonial, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                isActive
                  ? "w-[380px] md:w-[480px] h-[400px] md:h-[460px] shrink-0 z-10"
                  : "w-[280px] md:w-[360px] h-[320px] md:h-[380px] shrink-0 blur-[2px] opacity-75 scale-95"
              }`}
            >
              {/* Video Element */}
              <video
                ref={(video) => {
                  videoRefs.current[index] = video;
                }}
                src={testimonial.src}
                className="w-full h-full object-cover"
                muted={isMuted}
                playsInline
                onEnded={() => setActiveIndex((index) => (index + 1) % testimonials.length)}
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
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                      <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                      <path d="m22 9-6 6m0-6 6 6" />
                    </svg>
                  ) : (
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
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
