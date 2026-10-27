import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const bindings = [
  {
    title: "Saddle-stitch binding:",
    description:
      <>A practical option for thinner <b>coloring books</b> and activity booklets.</>,
  },
  {
    title: "Perfect binding:",
    description:
      <>Provides a <b>traditional paperback</b> appearance and can suit books with enough pages for a spine.</>,
  },
  {
    title: "Spiral binding:",
    description:
      "Allows the book to open more easily and lie flat, which can be useful for coloring at a desk.",
  },
  {
    title: "Wire-O binding:",
    description:
      <>Offers another lay flat option for activity books, <b>workbooks</b>, and premium projects.</>,
  },
  {
    title: "Hardcover binding:",
    description:
      "Can create a more durable, gift oriented product.",
  },
];

export default function WhichBindingShouldYouChoose() {
  return (
    <div className="bg-[#f5f3e8] px-6 py-16 font-mono">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-stretch gap-12 lg:flex-row">
          {/* Image */}
          <div className="flex-1 relative min-h-[300px]">
            <Image
              src="/coloring-book/Rectangle 14 (4).webp"
              alt="Book binding options"
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="mb-5 text-left text-4xl font-semibold text-gray-900 md:text-5xl">
              Which Binding Should You Choose?
            </h2>

            <p className="mb-8 text-sm leading-relaxed text-gray-700">
              The <b>best binding</b> depends on your page count, <b>budget</b>, and how the
              book will be used.
            </p>

            {/* Bullet Points */}
            <ul className="">
              {bindings.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c8d940]">
                    <FaCheck className="text-[10px] text-white" />
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    <span className="font-bold">{item.title}</span>{" "}
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>

            <p className="text-sm leading-relaxed text-gray-700">
              Confirm <b>page count</b> limits and available binding styles with your
              chosen printer before finalizing the layout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
