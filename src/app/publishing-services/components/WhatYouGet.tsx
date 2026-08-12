"use client";

import { robotoMono } from "@/app/fonts";
import AOSProvider from "@/components/AOSProvider";
import CustomScrollbar from "@/components/CustomScrollbar";
import Image from "next/image";

const cards = [
  {
    image: "/Home/Mask group (1).webp",
    alt: "Conventional Publishing",
    title: "Conventional Publishing",
    description:
      "For authors seeking the credibility of traditional publishing, we offer end-to-end support, from manuscript assessment to professional editing, design, and distribution. Our team delivers a polished, high-standard final product built for wide release. Not sure which route is right for you? Our team can walk you through a traditional vs. self-publishing service comparison based on your goals.",
  },
  {
    image: "/Home/Mask group (2).webp",
    alt: "Self-Publishing",
    title: "Self-Publishing",
    description:
      "Break away from the constraints of traditional publishing and take full control of your book's journey. As a self-publishing platform for first-time authors and experienced writers alike, our editors, designers, and support team help you turn your manuscript into a professionally crafted, self-published work on your terms, including self-publishing packages with an ISBN included, so your book is ready to sell from day one.",
  },
  {
    image: "/Home/Mask group (3).webp",
    alt: "Hybrid Publishing",
    title: "Hybrid Publishing",
    description:
      "Get the best of both worlds. Our hybrid publishing services for authors combine traditional publishing quality with the freedom and ownership of self-publishing. Our team collaborates with you to produce a professional book while you keep creative control.",
  },
  {
    image: "/Home/Mask group (4).webp",
    alt: "E-Book Publishing",
    title: "E-Book Publishing",
    description:
      "Embrace the digital era and expand your reach with professionally formatted e-books, built for compatibility across devices, so your book is accessible to readers anytime, anywhere.",
  },
  {
    image: "/Home/Mask group (5).webp",
    alt: "Print-On-Demand Publishing",
    title: "Print-On-Demand Publishing",
    description:
      "Skip the bulk printing and inventory stress. With our print-on-demand publishing service, you print only what you need, when you need it. We handle the logistics so you can focus on writing and promotion.",
  },
  {
    image: "/Home/Mask group (6).webp",
    alt: "Specialized Publishing",
    title: "Specialized Publishing",
    description:
      "Customize your publishing journey with services built around your goals and budget, including publishing packages for nonfiction authors, Christian book publishing packages, and publishing services for children's book authors. From editing to marketing, our expert team provides focused support to give your book the attention it deserves.",
  },
];

const WhatYouGet = () => {
  return (
    <AOSProvider>
      <section className="flex w-full items-center justify-center overflow-hidden bg-[#F6F5F3] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10 lg:py-16 xl:px-12">
        <div className="flex w-full max-w-[1300px] min-w-0 flex-col items-center">
          <h2 className="mb-8 max-w-4xl text-balance text-center text-[clamp(1.65rem,5vw,2.5rem)] font-semibold leading-[1.08] text-black sm:mb-10 lg:mb-12">
            What You Get With Ink Founders
          </h2>

          <CustomScrollbar
            orientation="horizontal"
            role="list"
            aria-label="Publishing options from Ink Founders"
            tabIndex={0}
            data-aos="fade-down-right"
            containerClassName="w-full min-w-0"
            className="flex w-full min-w-0 snap-x snap-mandatory scroll-px-1 items-stretch gap-4 overflow-x-auto overscroll-x-contain px-1 pb-5 touch-pan-x sm:gap-5 sm:scroll-px-2 sm:px-2 md:gap-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10 lg:overflow-visible lg:px-0 lg:pb-0 xl:gap-x-12 xl:gap-y-12"
            trackClassName="bg-[#ececcf]"
            thumbClassName="bg-[#c7c934]"
          >
            {cards.map((card) => (
              <article
                key={card.title}
                role="listitem"
                className="flex w-[90%] max-w-[25rem] shrink-0 snap-start flex-col items-start rounded-2xl border border-black/[0.06] bg-white/70 px-5 py-6 text-left shadow-[0_10px_30px_rgba(0,0,0,0.05)] sm:w-[72%] sm:px-6 md:w-[47%] lg:w-full lg:max-w-none lg:shrink lg:snap-none lg:px-6 lg:py-7 xl:px-8"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={48}
                  height={48}
                  sizes="(max-width: 639px) 40px, 48px"
                  className="mb-4 h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
                />
                <h3 className="mb-3 text-lg font-semibold leading-tight text-black sm:text-xl lg:min-h-[3.25rem] lg:text-[1.3rem]">
                  {card.title}
                </h3>

                <div
                  tabIndex={0}
                  role="region"
                  aria-label={`${card.title} description`}
                  className="custom-scrollbar-viewport w-full overflow-y-auto overscroll-y-contain pr-2 outline-none touch-pan-y focus-visible:ring-2 focus-visible:ring-black/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F5F3]"
                  style={{ height: "clamp(9rem, 24vh, 12rem)" }}
                >
                  <p
                    className={`${robotoMono.className} text-[0.78rem] leading-relaxed text-[#444444] sm:text-[0.84rem] md:text-sm lg:text-[0.95rem]`}
                  >
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </CustomScrollbar>
        </div>
      </section>
    </AOSProvider>
  );
};

export default WhatYouGet;
