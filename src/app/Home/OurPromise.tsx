import Image from "next/image";
import React from "react";
import { robotoMono } from "../fonts";
import AOSProvider from "@/components/AOSProvider";

const OurPromise = () => {
  return (
    <AOSProvider>
      <section className="w-full bg-[#F6F5F3] flex justify-center items-center md:py-20">
        <div className="w-full max-w-[1300px] flex flex-col items-center">
          {/* Headings */}
          <p className="text-center text-lg md:text-[25px] md:text-xl font-semibold text-black mb-2">
            We are committed with you
          </p>
          <h2 className="text-center text-[23px] md:text-[35px] font-semibold mb-14">
            <span className="text-[#DADD39]">
              How you turn your dreams with Ink Founders
            </span>
          </h2>
          {/* 3 columns */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4">
            {/* 1. Book Editing & Proofreading */}
            <div
              data-aos="fade-down-right"
              className="flex flex-col items-start text-left px-8"
            >
              <Image
                src="/Home/Mask group (1).png"
                alt="Holistic & Transparent Services"
                width={48}
                height={48}
                className="mb-3"
              />
              <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
                Professional editing and Proofreading
              </h3>
              <p
                className={` text-gray-700 text-[12px] md:text-[15px] leading-loose ${robotoMono.className}`}
              >
                Every author’s dream is to get the spotlight that its story
                deserves but it’s possible when your story is not only written
                well but structured well, so Ink founders fine-tunes your script
                with expert editors that focus on grammar and structure without
                changing its real tone of message. After that our proofreaders
                goes from a final process to examine the mistakes to ensure that
                book is published flawlessly and professionally.
              </p>
            </div>
            {/* 2. Book Cover Design */}
            <div
              data-aos="fade-down-right"
              className="flex flex-col items-start text-left px-8"
            >
              <Image
                src="/Home/Mask group (2).png"
                alt="Myriad Of Distribution Channels"
                width={48}
                height={48}
                className="mb-3"
              />
              <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
                Cover design – soul to the story
              </h3>
              <p
                className={`text-gray-700 text-[12px] md:text-[15px] leading-loose ${robotoMono.className}`}
              >
                It is always said the first impression is very impactful so is
                the book cover would be capturing it will add soul to your
                story. So, it needs to be shiny. Ink founders carefully create
                book cover that reflects the genre, mood and message of your
                story just by a glance. With thoughtful typograpghy and its
                outer visuals, Ink Founders make your book cover unforgettable.
              </p>
            </div>
            {/* 3. ISBN & Barcodes */}
            <div
              data-aos="fade-down-right"
              className="flex flex-col items-start text-left px-8"
            >
              <Image
                src="/Home/Mask group (3).png"
                alt="Book Marketing & Author Branding"
                width={48}
                height={48}
                className="mb-3"
              />
              <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
                Global identity of your book – ISBN and Barcodes
              </h3>
              <p
                className={` text-gray-700 text-[12px] md:text-[15px] leading-loose ${robotoMono.className}`}
              >
                To keep your book unique and searchable, Ink Founders help you
                to secure its ISBN and barcode. So that your book remains
                reachable, buyable and easily to be available.
              </p>
            </div>
            {/* 4. Comprehensive Book & Author Marketing */}
            <div
              data-aos="fade-down-right"
              className="flex flex-col items-start text-left px-8"
            >
              <Image
                src="/Home/Mask group (4).png"
                alt="Holistic & Transparent Services"
                width={48}
                height={48}
                className="mb-3"
              />
              <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
                Be an author – increase the reach
              </h3>
              <p
                className={` text-gray-700 text-[12px] md:text-[15px] leading-loose ${robotoMono.className}`}
              >
                Your book is not just for publication but it deserves to be seen
                and read, so Ink founders not only help you to publish it but
                also help you to get audience by supporting with marketing
                tools, social media campaigns and strategies. We are always
                first to be with you for turning your dreams, your passion into
                powerful and unforgettable brand.
              </p>
            </div>
            {/* 5. Complete Copyrights & 100% Ownership */}
            <div
              data-aos="fade-down-right"
              className="flex flex-col items-start text-left px-8"
            >
              <Image
                src="/Home/Mask group (5).png"
                alt="Holistic & Transparent Services"
                width={48}
                height={48}
                className="mb-3"
              />
              <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
                Your ideas – your control. Write it – Own it
              </h3>
              <p
                className={` text-gray-700 text-[12px] md:text-[15px] leading-loose ${robotoMono.className}`}
              >
                When an author writes a story its not only a story but it is a
                passion, a dream, a voice so when you share your dream with Ink
                founders you 100 own your story. Your words, your ownership, we
                just help you to turn your words into a book, your voice into an
                inspiration. So, you have the full right to your story.
              </p>
            </div>
            {/* 6. Always-Here Customer Support */}
            <div
              data-aos="fade-down-right"
              className="flex flex-col items-start text-left px-8"
            >
              <Image
                src="/Home/Mask group (6).png"
                alt="Holistic & Transparent Services"
                width={48}
                height={48}
                className="mb-3"
              />
              <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
                Our support, forever for you
              </h3>
              <p
                className={` text-gray-700 text-[12px] md:text-[15px] leading-loose ${robotoMono.className}`}
              >
                When you are working with Ink Founders, you are never left
                alone. You have questions, concerns, need any suggestion or
                confused about any step, Ink founders team is always available
                for you to provide you answers, assurance and any guidance from
                inception to suspension.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AOSProvider>
  );
};

export default OurPromise;
