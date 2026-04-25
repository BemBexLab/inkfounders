"use client";

import { robotoMono } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role?: string;
  image?: string;
};

const TRUSTPILOT_URL =
  "https://www.trustpilot.com/review/inkfounders.com/";

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
  const handleTestimonialClick = () => {
    window.location.href = TRUSTPILOT_URL;
  };

  return (
    <section className="w-full overflow-hidden bg-white py-8">
      <div className="mx-auto flex w-full flex-col items-center px-4 sm:px-6 lg:px-5">
        <p className="mb-2 text-base font-semibold text-black sm:text-lg lg:text-xl">Testimonials</p>
        <h2 className="mb-6 max-w-4xl text-center text-[28px] font-semibold leading-tight text-[#DADD39] sm:text-[34px] lg:mb-4 lg:text-[35px] lg:leading-[0.9]">
            Read Testimonials From Our Happy Customers
        </h2>

        <div className="testimonial-landing-marquee relative w-screen overflow-hidden">
          <div className="testimonial-landing-track flex w-max will-change-transform [backface-visibility:hidden] [perspective:1000px] [transform:translate3d(0,0,0)]">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="flex shrink-0 gap-5 pr-5 lg:gap-4 lg:pr-4"
                aria-hidden={groupIndex === 1}
              >
                {TESTIMONIALS.map((testimonial) => (
                  <article
                    key={`${groupIndex}-${testimonial.id}`}
                    className="flex min-h-[300px] w-[350px] shrink-0 cursor-pointer flex-col rounded-xl border border-[#ece9df] bg-[#F4F3E1] px-5 pb-5 pt-5 leading-tight shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] focus:outline-none focus:ring-2 focus:ring-[#d9dc2d] focus:ring-offset-2 sm:min-h-[320px] sm:w-[390px] sm:px-6 sm:pb-6 md:min-h-[300px] md:w-[400px] md:px-7 md:pb-7 md:pt-6 lg:min-h-[340px] lg:w-[440px]"
                    onClick={handleTestimonialClick}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        handleTestimonialClick();
                      }
                    }}
                    role="link"
                    tabIndex={0}
                    aria-label={`Read ${testimonial.name}'s full review on Trustpilot`}
                  >
                    <div className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e1df2d] text-[34px] font-semibold leading-none text-[#1f1d1b] sm:mb-6 sm:h-16 sm:w-16 sm:text-[38px]">
                      <ImQuotesLeft size={30} />
                    </div>

                    <p
                      className={`${robotoMono.className} mb-6 text-[13px] leading-relaxed text-[#2c2a28] sm:text-[14px] md:text-[15px] lg:mb-7 lg:leading-loose`}
                    >
                      {testimonial.quote}{" "}
                      <span className="font-semibold underline underline-offset-2">
                        Read More
                      </span>
                    </p>

                    <div className="mb-5 border-b border-[#ece9df] sm:mb-6" />

                    <div className="mt-auto flex items-center gap-4">
                      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#ffc24a] text-[18px] font-medium uppercase text-[#1f1d1b] sm:h-16 sm:w-16 sm:text-[20px]">
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
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes testimonial-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .testimonial-landing-track {
          animation: testimonial-marquee 38s linear infinite;
        }

        .testimonial-landing-marquee:hover .testimonial-landing-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-landing-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
