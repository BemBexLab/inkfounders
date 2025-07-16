"use client";

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { robotoMono } from '../fonts';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Ink Founder didn’t just publish my book — they helped me promote it too. Their team gave me great advice on building my marketing from the ground up, including social media...",
      name: "Noel Jensen",
      role: "Great Writer",
      image: "/Home/Frame 66 (1).png"
    },
    {
      id: 2,
      quote: "Ink Founder made the whole process easy for me. They not only published my book but also showed me how to market it, build my brand, and reach the right readers for real results",
      name: "Sarita Espiricueta",
      role: "Great Writer",
      image: "/Home/Frame 66 (2).png"
    },
    {
      id: 3,
      quote: "Thanks to Ink Founder, my book launch was a smooth experience. They helped me every step of the way—from publishing and promotion to building my author brand and connecting with new fans",
      name: "Michael Gordon",
      role: "Great Writer",
      image: "/Home/Frame 66.png"
    },
    {
      id: 4,
      quote: "The publishing process was seamless with Ink Founder. Their team provided excellent guidance throughout, making my author journey truly rewarding and stress-free.",
      name: "Nick john",
      role: "Bestselling Author",
      image: "/Home/review.png"
    },
    {
      id: 5,
      quote: "Ink Founder guided me through every stage of publishing my book. They made the entire process simple and stress-free—from editing and design to launching, promoting.",
      name: "Edward grey",
      role: "Professional Writer",
      image: "/Home/review2.png"
    },
    {
      id: 6,
      quote: "Partnering with Ink Founder turned my draft into a polished, professionally published work. Their care for details and help for authors is truly outstanding.",
      name: "Tom peter",
      role: "Award-winning Author",
      image: "/Home/review3.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Fix: Correct typing for intervalRef
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Responsive: update visibleCards on resize
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Infinite auto-rotation
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [testimonials.length, visibleCards]);

  // Get visible cards in a looped way
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="w-full bg-[#F6F5F3] flex justify-center items-center py-20 max-md:px-5 overflow-hidden">
      <div className="w-full max-w-[1300px] flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-center text-[35px] font-semibold mb-14">
          <span className="text-[#DADD39]">Read Testimonials From Our Happy Customers</span>
        </h2>

        {/* Cards container */}
        <div className="w-full flex justify-center mb-8 relative">
          <div className="w-full max-w-[1300px] flex justify-center transition-all duration-500 ease-in-out">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-4 w-full">
              {getVisibleTestimonials().map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-card bg-[#F6F5F3] rounded-xl shadow-none border border-gray-200 flex flex-col px-8 pt-8 pb-6 min-h-[350px] relative transition-all duration-300 hover:shadow-lg`}
                >
                  {/* Yellow Circle with Image */}
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#DADD39] absolute -top-6 left-8">
                    <Image
                      src="/Home/“.png"
                      alt="Quote Icon"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </span>

                  {/* Testimonial */}
                  <p className={`text-gray-700 font-mono text-[12px] md:text-[15px] mb-7 mt-8 leading-loose ${robotoMono.className}`}>
                    {testimonial.quote}
                  </p>
                  <div className="border-b border-gray-200 mb-4" />

                  {/* Profile */}
                  <div className="flex items-center gap-3">
                    <div className="border-2 border-dashed rounded-full w-16 h-16 overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name}'s profile`}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-black text-[15px] leading-tight">{testimonial.name}</p>
                      <p className="text-gray-500 text-[13px] leading-tight font-mono">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
