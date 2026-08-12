"use client";

import Image from "next/image";
import AOSProvider from "@/components/AOSProvider";
import CustomScrollbar from "@/components/CustomScrollbar";
import { robotoMono } from "../fonts";

const promiseItems = [
  {
    id: "professional-editing-and-proofreading",
    image: "/Home/Mask group (1).webp",
    alt: "Professional editing and proofreading",
    title: "Professional editing and proofreading",
    description:
      "Every author deserves the spotlight their story has earned, and that only happens when a book is both well written and well structured. As part of our self-publishing package with editing and cover design, our expert editors fine-tune your manuscript, sharpening grammar and structure without changing your voice. Our proofreaders then complete a final review to catch every mistake, so your book is published flawlessly.",
  },
  {
    id: "cover-design-the-soul-of-your-story",
    image: "/Home/Mask group (2).webp",
    alt: "Cover design, the soul of your story",
    title: "Cover design, the soul of your story",
    description:
      "First impressions matter, and your book cover is often a reader's first one. Ink Founders offers custom book cover design services for self-published authors, designing covers that reflect your genre, mood, and message at a glance. With thoughtful typography and visuals, your cover becomes something readers remember.",
  },
  {
    id: "isbn-and-barcodes-your-book-global-identity",
    image: "/Home/Mask group (3).webp",
    alt: "ISBN and barcodes: your book's global identity",
    title: "ISBN and barcodes: your book's global identity",
    description:
      "To keep your book unique, searchable, and easy to buy anywhere in the world, Ink Founders helps you secure an ISBN and barcode as part of our book publishing services for authors.",
  },
  {
    id: "be-an-author-increase-your-reach",
    image: "/Home/Mask group (4).webp",
    alt: "Be an author, increase your reach",
    title: "Be an author, increase your reach",
    description:
      "Your book deserves to be read, not just published. As one of the top rated self publishing companies for author support, Ink Founders offers book marketing and promotion services for self-published authors, including social media campaigns and publicity strategies, so you can turn your passion into a lasting, recognized brand.",
  },
  {
    id: "your-ideas-your-control",
    image: "/Home/Mask group (5).webp",
    alt: "Your ideas, your control, write it, own it",
    title: "Your ideas, your control, write it, own it",
    description:
      "A story is more than words; it's your passion, your dream, your voice. When you publish with Ink Founders, you keep 100% ownership of your work. We help turn your words into a book, and your voice into inspiration, while you hold full rights, always.",
  },
  {
    id: "our-support-forever-for-you",
    image: "/Home/Mask group (6).webp",
    alt: "Our support, forever for you",
    title: "Our support, forever for you",
    description:
      "With Ink Founders, you're never on your own. Whether you have a question, a concern, or just need guidance, our team is available at every step, from your very first idea through publication and beyond.",
  },
];

const OurPromise = () => {
  return (
    <AOSProvider>
      <section className="flex w-full items-center justify-center overflow-hidden bg-[#F6F5F3] px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 lg:py-12 xl:px-12">
        <div className="flex w-full max-w-[1300px] min-w-0 flex-col items-center">
          {/* Headings */}
          <p className="mb-2 text-center text-sm font-semibold text-black sm:text-base md:text-lg lg:text-xl">
            We're committed to you
          </p>
          <h2 className="mb-8 max-w-4xl text-balance text-center text-[clamp(1.65rem,5vw,2.5rem)] font-semibold leading-[1.08] sm:mb-10 lg:mb-12">
            <span className="text-[#DADD39]">
              How You Turn Your Dreams Into Reality With Ink Founders
            </span>
          </h2>

          <CustomScrollbar
            orientation="horizontal"
            role="list"
            aria-label="Our promises to authors"
            tabIndex={0}
            containerClassName="w-full min-w-0"
            className="flex w-full min-w-0 snap-x snap-mandatory scroll-px-1 items-stretch gap-4 overflow-x-auto overscroll-x-contain px-1 pb-4 touch-pan-x sm:gap-5 sm:scroll-px-2 sm:px-2 md:gap-6 lg:grid lg:grid-cols-3 lg:items-stretch lg:gap-x-8 lg:gap-y-12 lg:overflow-visible lg:px-0 lg:pb-0 xl:gap-x-12"
            trackClassName="bg-[#ececcf]"
            thumbClassName="bg-[#c7c934]"
          >
            {promiseItems.map((item) => (
              <article
                key={item.id}
                role="listitem"
                data-aos="fade-down-right"
                className="flex w-[88%] max-w-[25rem] shrink-0 snap-start flex-col items-start px-1 text-left sm:w-[70%] sm:px-3 md:w-[46%] lg:w-full lg:max-w-none lg:shrink lg:snap-none lg:px-2 xl:px-4"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 639px) 40px, 48px"
                  className="mb-3 h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12 lg:mb-4"
                />
                <h3 className="mb-3 text-lg font-semibold leading-tight text-black sm:text-xl lg:min-h-[3.25rem] lg:text-[1.3rem]">
                  {item.title}
                </h3>
                <div
                  tabIndex={0}
                  role="region"
                  aria-label={`${item.title} description`}
                  className="custom-scrollbar-viewport w-full overflow-y-auto overscroll-y-contain pr-2 outline-none touch-pan-y focus-visible:ring-2 focus-visible:ring-black/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F5F3]"
                  style={{ height: "clamp(8.5rem, 24vh, 12rem)" }}
                >
                  <p
                    className={`text-[0.78rem] leading-relaxed text-gray-700 sm:text-[0.84rem] md:text-sm lg:text-[0.95rem] ${robotoMono.className}`}
                  >
                    {item.description}
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

export default OurPromise;
