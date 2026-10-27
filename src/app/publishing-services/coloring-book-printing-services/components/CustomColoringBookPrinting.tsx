import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CustomColoringBookPrinting() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 font-mono">
      <div className="mx-auto max-w-7xl">
        {/* Main Heading */}
        <h2 className="mb-10 text-center text-4xl font-semibold text-gray-900 md:text-5xl">
          Custom Coloring Book Printing For Every Project
        </h2>

        {/* Intro Paragraphs */}
        <p className="mx-auto mb-4 max-w-7xl text-center text-sm leading-relaxed text-gray-600">
          Every coloring book has a different purpose. A children's activity book
          may need simple illustrations and a durable cover, while an adult
          coloring book may require detailed line art and pages that provide
          enough space for creative work.
        </p>
        <p className="mx-auto mb-16 max-w-7xl text-center text-sm leading-relaxed text-gray-600">
          Custom <b>coloring book printing</b> allows you to choose the features that
          suit your audience and <b>budget</b>.
        </p>

        {/* Section 1: Children's Coloring Books */}
        <div className="mb-16 pt-10 flex flex-col items-stretch gap-10 lg:flex-row">
          <div className="flex-1">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Children's Coloring Books
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              <b>Children's coloring books</b> can combine pictures, simple activities,
              letters, numbers, and educational themes. Popular subjects include{" "}
              <Link className="text-blue-500 hover:underline" href="https://en.wikipedia.org/wiki/Animal">animals</Link>, <Link className="text-blue-500 hover:underline" href={"https://en.wikipedia.org/wiki/Nature"}>nature</Link>, <Link className="text-blue-500 hover:underline" href={""}>vehicles</Link>, <Link className="text-blue-500 hover:underline" href={"https://en.wikipedia.org/wiki/Fairy_tale"}>fairy tales</Link>, and everyday objects.
            </p>
            <p className="mb-3 text-sm font-semibold text-gray-700">
              When planning a <b>children's coloring book</b>, consider:
            </p>
            <ul className="mb-4 list-disc space-y-1 pl-6 text-sm text-gray-600">
              <li>Age appropriate illustrations and activities.</li>
              <li>Clear outlines that are easy to color.</li>
              <li>A convenient book size for small hands.</li>
              <li>Paper suitable for crayons and colored pencils.</li>
              <li>A colorful, engaging cover.</li>
            </ul>
            <p className="text-sm leading-relaxed text-gray-600">
              For books intended for younger children, also consider age
              appropriate materials, product safety requirements, and the
              suitability of any included accessories.
            </p>
          </div>
          <div className="flex-1 relative min-h-[300px]">
            <Image
              src="/coloring-book/Rectangle 14.webp"
              alt="Children's Coloring Books"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="mb-16 border-gray-200" />

        {/* Section 2: Adult Coloring Books */}
        <div className="mb-16 flex flex-col items-stretch gap-10 lg:flex-row-reverse">
          <div className="flex-1">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Adult Coloring Books
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              <b>Adult coloring books</b> often feature intricate patterns, <b>flowers,
              mandalas, landscapes, animals</b>, and relaxing designs. These books
              may be created for personal enjoyment, <b>gifts</b>, or retail sales.
            </p>
            <p className="text-sm leading-relaxed text-gray-600">
              For an <b>adult coloring book</b>, pay attention to line quality,
              illustration detail, page layout, and paper performance. <b>Single
              sided printing</b> may be useful for designs intended for markers or
              for readers who want to remove and display finished artwork.
            </p>
          </div>
          <div className="flex-1 relative min-h-[300px]">
            <Image
              src="/coloring-book/Rectangle 14 (1).webp"
              alt="Adult Coloring Books"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="mb-16 border-gray-200" />

        {/* Section 3: Custom Printed Coloring Books For Businesses */}
        <div className="flex flex-col items-stretch gap-10 lg:flex-row">
          <div className="flex-1">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Custom Printed Coloring Books For Businesses
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              <b>Businesses, schools, nonprofits, museums</b>, and <b>event organizers</b> can
              use <b>custom printed coloring books</b> to engage their audiences.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              For example, a business might create a <b>branded coloring book</b>
              featuring its <b>products, mascot</b>, or <b>industry</b>. A school may use
              activity pages for classroom learning, while a <b>nonprofit</b> may create
              a <b>themed book</b> for an <b>educational campaign</b>.
            </p>
            <p className="mb-3 text-sm font-semibold text-gray-700">
              Custom projects can include:
            </p>
            <ul className="mb-4 list-disc space-y-1 pl-6 text-sm text-gray-600">
              <li>Branded <b>illustrations</b> and <b>logos</b>.</li>
              <li>Educational coloring pages.</li>
              <li>Event and <b>promotional booklets</b>.</li>
              <li>Activity books for schools and community programs.</li>
              <li>Personalized coloring books for gifts.</li>
            </ul>
            <p className="text-sm leading-relaxed text-gray-600">
              Choose a theme that connects with your audience and gives readers a
              reason to keep the book.
            </p>
          </div>
          <div className="flex-1 relative min-h-[300px]">
            <Image
              src="/coloring-book/Rectangle 14 (2).webp"
              alt="Custom Printed Coloring Books For Businesses"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
