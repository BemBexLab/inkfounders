'use client'

import React, { useRef, useEffect } from "react";
import Image from "next/image";

const partners = [
  { src: "/Home/siliding/logo1.png", alt: "Lulu Logo", width: 54, height: 54 },
  { src: "/Home/siliding/logo2.png", alt: "Macmillan Logo", width: 134, height: 54 },
  { src: "/Home/siliding/logo3.png", alt: "Penguin Random House Logo", width: 100, height: 54 },
  { src: "/Home/siliding/logo4.png", alt: "Scribd Logo", width: 100, height: 54 },
  { src: "/Home/siliding/logo5.png", alt: "Smashwords Logo", width: 150, height: 54 },
  { src: "/Home/siliding/logo6.png", alt: "New York Times Logo", width: 50, height: 54 },
  { src: "/Home/siliding/logo7.png", alt: "D2D Logo", width: 54, height: 54 },
  { src: "/Home/siliding/logo8.png", alt: "AbeBooks Logo", width: 90, height: 64 },
  { src: "/Home/siliding/logo9.png", alt: "Alibris Logo", width: 164, height: 60 },
  { src: "/Home/siliding/logo10.png", alt: "Alibris Logo", width: 174, height: 60 },
  { src: "/Home/siliding/logo11.png", alt: "Alibris Logo", width: 84, height: 54 },
  { src: "/Home/siliding/logo12.png", alt: "Alibris Logo", width: 150, height: 64 },
  { src: "/Home/siliding/logo13.png", alt: "Alibris Logo", width: 190, height: 64 },
  { src: "/Home/siliding/logo14.png", alt: "Alibris Logo", width: 120, height: 54 },
  { src: "/Home/siliding/logo15.png", alt: "Alibris Logo", width: 150, height: 54 },
  { src: "/Home/siliding/logo16.png", alt: "Alibris Logo", width: 180, height: 54 },
];

export default function PartnersSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const posRef = useRef<number>(0);
  const contentWidthRef = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate width of one full set of logos (for seamless looping)
    const firstSet = Array.from(track.children).slice(0, partners.length) as HTMLDivElement[];
    let contentWidth = 0;
    for (const child of firstSet) {
      contentWidth += (child as HTMLDivElement).offsetWidth + 48; // gap-12 = 3rem = 48px
    }
    contentWidthRef.current = contentWidth;

    // Start the animation with pos = 0 (logos at normal position)
    posRef.current = 0;

    function animate() {
      // Decrement position (move to left)
      posRef.current -= 1; // px per frame (decrease this value for slower movement)
      if (Math.abs(posRef.current) >= contentWidthRef.current) {
        posRef.current = 0;
      }
      if (track) {
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="w-full bg-[#F6F5F3] pt-5 md:py-8 overflow-hidden">
      {/* Header with lines */}
      <div className="flex items-center justify-center mb-8 w-full">
        <div className="flex-1 border-t ml-5 md:ml-10 border-black"></div>
        <h2 className="mx-4 text-sm font-semibold text-[#DADD39] tracking-wide uppercase whitespace-nowrap">
          Our Partner
        </h2>
        <div className="flex-1 border-t mr-5 md:mr-10 border-black"></div>
      </div>

      {/* Infinite Slider */}
     <div className="relative w-full max-w-7xl mx-auto h-[36px] md:h-[70px] overflow-hidden">
  <div
    ref={trackRef}
    className="flex items-center gap-12"
    style={{
      willChange: "transform",
      width: "max-content",
    }}
  >
    {[...partners, ...partners].map((logo, idx) => (
      <div className="flex-shrink-0 h-[36px] md:h-[54px] flex items-center justify-center" key={idx}>
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="h-[36px] md:h-[54px] w-auto object-contain"
          priority
        />
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
