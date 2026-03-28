"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { robotoMono } from "../fonts";
import { ImQuotesLeft } from "react-icons/im";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role?: string;
  image?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "Actually getting my children's books published was the culmination of many years of writing the stories down and never finding the opportunity to get it done...",
    name: "Wanda",
    role: "Writer",
  },
  {
    id: 2,
    quote:
      "I have nothing but positive thoughts about Ink Founders. From my first conversation with Zack Martin, I knew that I had chosen the right people to help me create more than...",
    name: "Gary Early",
    role: "Writer",
  },
  {
    id: 3,
    quote:
      "Each member of the team paid close attention to my need for accuracy of editing, flow of the story content, and true to content illustrations...",
    name: "Janet Paskins",
    role: "Great Writer",
    image: "/testimonials/Frame 66.png",
  },
  {
    id: 4,
    quote:
      "I recently had the pleasure of working with Franklin Jones from Ink Founders Publishing Services on the publication of my first book, and I cannot recommend...",
    name: "Ralph Watkins",
    role: "Bestselling Author",
    // image: "/Home/review.png",
  },
  {
    id: 5,
    quote:
      "Hannah Collins was an absolute professional. She was a dream to work with and her team really brought my book to life. This was my first try at getting published...",
    name: "Keith Cuvo",
    role: "Great Writer",
    image: "/testimonials/Frame 68.png",
  },
  {
    id: 6,
    quote:
      "Much to my surprise, Lara found me on a weekend as I was in the midst of considering publishers. She was thoughtful and supportive offered great ideas considerate...",
    name: "Scott JT Frank",
    role: "Professional Writer",
    image: "/testimonials/Frame 66.png",
  },
  {
    id: 7,
    quote:
      "As a new author I am very pleased with the services provided to me by Ink Founder. I was recommended by my god granddaughter Rachel Anderson to do this project...",
    name: "Bertha Stumon",
    role: "Award-winning Author",
    // image: "/Home/review3.png",
  },
  {
    id: 8,
    quote:
      "I like how they took my book and made it easier for the audience to understand. Being a first time author Ink Founders publishing company made my experience easier...",
    name: "Rachel Anderson",
    role: "Award-winning Author",
    // image: "/Home/review3.png",
  },
  {
    id: 9,
    quote:
      "What a journey this experience has been. Hannah and her team at Ink Founders have worked diligently with this first-time author. I'd been writing stories...",
    name: "Carron H",
    role: "Award-winning Author",
    image: "/testimonials/Frame 66 (1).png",
  },
];

const getAvatarLetters = (name: string) =>
  name
    .replace(/[^a-zA-Z]/g, "")
    .slice(0, 2)
    .toUpperCase();

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [visibleCards]);

  const getVisibleTestimonials = () => {
    const visible: Testimonial[] = [];
    for (let i = 0; i < visibleCards; i += 1) {
      visible.push(TESTIMONIALS[(currentIndex + i) % TESTIMONIALS.length]);
    }
    return visible;
  };

  return (
    <section className="w-full overflow-hidden bg-[#F6F5F3] px-5 py-20">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col items-center">
        <h2 className="mb-14 text-center text-[35px] font-semibold">
          <span className="text-[#DADD39]">
            Read Testimonials From Our Happy Customers
          </span>
        </h2>

        <div className="w-full">
          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {getVisibleTestimonials().map((testimonial) => (
              <article
                key={testimonial.id}
                className="flex min-h-[340px] flex-col rounded-[22px] border border-[#ece9df] bg-[#fcfbf7] px-6 pb-6 pt-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:px-7 md:pb-7 md:pt-6"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#e1df2d] text-[38px] font-semibold leading-none text-[#1f1d1b]">
                  {/* &ldquo; */}
                  <ImQuotesLeft size={30} />
                </div>

                <p
                  className={`${robotoMono.className} mb-7 text-[15px] leading-[2] text-[#2c2a28]`}
                >
                  {testimonial.quote}{" "}
                  <span className="font-semibold underline underline-offset-2">
                    Read More
                  </span>
                </p>

                <div className="mb-6 border-b border-[#ece9df]" />

                <div className="mt-auto flex items-center gap-4">
                  <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-[#ffc24a] text-[20px] font-medium uppercase text-[#1f1d1b]">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name}'s profile`}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    ) : (
                      getAvatarLetters(testimonial.name)
                    )}
                  </div>

                  <div>
                    <p className="text-[15px] font-semibold leading-tight text-[#1f1d1b]">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {TESTIMONIALS.map((testimonial, index) => {
              const isActive = index === currentIndex;

              return (
                <button
                  key={testimonial.id}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? "h-5 w-5 bg-[#d9dc2d]"
                      : "h-3 w-3 bg-[#d9d9d9] hover:bg-[#cfcfcf]"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
