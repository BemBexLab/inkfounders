'use client';

import Image from "next/image";
import React, { useState } from "react";
import AOSProvider from "@/components/AOSProvider";
import { robotoMono } from "../fonts";

const promiseItems = [
  {
    id: "professional-editing-and-proofreading",
    image: "/Home/Mask group (1).png",
    alt: "Professional Editing and Proofreading",
    title: "Professional Editing and Proofreading",
    description:
      "Every author's dream is to get the spotlight that its story deserves but it's possible when your story is not only written well but structured well, so Ink Founders fine-tunes your script with expert editors that focus on grammar and structure without changing its real tone of message. After that our proofreaders goes from a final process to examine the mistakes to ensure that book is published flawlessly and professionally.",
  },
  {
    id: "cover-design-the-soul-of-your-story",
    image: "/Home/Mask group (2).png",
    alt: "Cover Design The Soul of Your Story",
    title: "Cover Design-The Soul of Your Story",
    description:
      "First impressions matter, and a book cover captures attention while adding soul to your story. Ink Founders carefully designs covers that reflect the genre, mood, and message of your story at a glance. With thoughtful typography and visuals, your book cover becomes unforgettable.",
  },
  {
    id: "global-identity-isbn-and-barcodes",
    image: "/Home/Mask group (3).png",
    alt: "Global Identity of Your Book ISBN and Barcodes",
    title: "Global Identity of Your Book-ISBN and Barcodes",
    description:
      "To keep your book unique and searchable, Ink Founders helps secure its ISBN and barcode, ensuring it is easily reachable, buyable, and available worldwide.",
  },
  {
    id: "be-an-author-increase-your-reach",
    image: "/Home/Mask group (4).png",
    alt: "Be an Author Increase Your Reach",
    title: "Be an Author-Increase Your Reach",
    description:
      "Your book deserves to be read, not just published. Ink Founders supports you with marketing tools, social media campaigns, and strategies to reach your audience. We are with you every step of the way to turn your passion into a powerful and unforgettable brand.",
  },
  {
    id: "your-ideas-your-control",
    image: "/Home/Mask group (5).png",
    alt: "Your Ideas Your Control Write It Own It",
    title: "Your Ideas-Your Control. Write It, Own It.",
    description:
      "A story is more than words; it is your passion, your dream, your voice. When you share your dream with Ink Founders, you retain 100% ownership of your story. We help turn your words into a book and your voice into inspiration. You have full rights to your work.",
  },
  {
    id: "our-support-forever-for-you",
    image: "/Home/Mask group (6).png",
    alt: "Our Support Forever for You",
    title: "Our Support-Forever for You",
    description:
      "With Ink Founders, you are never alone. Whether you have questions, concerns, or need guidance at any step, our team is always available to provide answers, support, and assurance from inception to publication.",
  },
];

const OurPromise = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const getDisplayText = (description: string, isExpanded: boolean) => {
    const words = description.trim().split(/\s+/);

    if (isExpanded || words.length <= 43) {
      return description;
    }

    return `${words.slice(0, 43).join(" ")}...`;
  };

  return (
    <AOSProvider>
      <section className="w-full bg-[#F6F5F3] flex justify-center items-center md:py-10">
        <div className="w-full max-w-[1300px] flex flex-col items-center">
          {/* Headings */}
          <p className="text-center text-lg md:text-[25px] md:text-xl font-semibold text-black">
            We are committed with you
          </p>
          <h2 className="text-center text-[23px] md:text-[35px] font-semibold mb-5">
            <span className="text-[#DADD39]">
              How You Turn Your Dreams into Reality with Ink Founders
            </span>
          </h2>

          <div className="w-full grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-4">
            {promiseItems.map((item) => (
              <div
                key={item.id}
                data-aos="fade-down-right"
                className="flex flex-col items-start px-8 text-left"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="mb-3"
                />
                <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
                  {item.title}
                </h3>
                <p
                  className={`text-gray-700 text-[12px] md:text-[15px] leading-loose ${robotoMono.className}`}
                >
                  {getDisplayText(item.description, expandedItems[item.title] ?? false)}
                </p>
                {item.description.trim().split(/\s+/).length > 43 && (
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedItems((prev) => ({
                        ...prev,
                        [item.title]: !prev[item.title],
                      }))
                    }
                    className="mt-3 text-sm font-semibold text-black underline underline-offset-4"
                  >
                    {expandedItems[item.title] ? "Read less" : "Read more"}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </AOSProvider>
  );
};

export default OurPromise;
