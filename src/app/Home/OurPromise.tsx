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
              How You Turn Your Dreams into Reality with Ink Founders
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
                Professional Editing and Proofreading
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
                Cover Design—The Soul of Your Story
              </h3>
              <p
                className={`text-gray-700 text-[12px] md:text-[15px] leading-loose ${robotoMono.className}`}
              >
                First impressions matter, and a book cover captures attention while adding soul to your story. Ink Founders carefully designs covers that reflect the genre, mood, and message of your story at a glance. With thoughtful typography and visuals, your book cover becomes unforgettable.
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
                Global Identity of Your Book—ISBN and Barcodes
              </h3>
              <p
                className={` text-gray-700 text-[12px] md:text-[15px] leading-loose ${robotoMono.className}`}
              >
                To keep your book unique and searchable, Ink Founders helps secure its ISBN and barcode, ensuring it is easily reachable, buyable, and available worldwide.
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
                Be an Author—Increase Your Reach
              </h3>
              <p
                className={` text-gray-700 text-[12px] md:text-[15px] leading-loose ${robotoMono.className}`}
              >
                Your book deserves to be read, not just published. Ink Founders supports you with marketing tools, social media campaigns, and strategies to reach your audience. We are with you every step of the way to turn your passion into a powerful and unforgettable brand.
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
                Your Ideas—Your Control. Write It, Own It.
              </h3>
              <p
                className={` text-gray-700 text-[12px] md:text-[15px] leading-loose ${robotoMono.className}`}
              >
                A story is more than words; it is your passion, your dream, your voice. When you share your dream with Ink Founders, you retain 100% ownership of your story. We help turn your words into a book and your voice into inspiration. You have full rights to your work.
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
                Our Support—Forever for You
              </h3>
              <p
                className={` text-gray-700 text-[12px] md:text-[15px] leading-loose ${robotoMono.className}`}
              >
                With Ink Founders, you are never alone. Whether you have questions, concerns, or need guidance at any step, our team is always available to provide answers, support, and assurance from inception to publication.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AOSProvider>
  );
};

export default OurPromise;
