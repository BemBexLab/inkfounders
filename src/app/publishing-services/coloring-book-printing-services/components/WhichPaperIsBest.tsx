import React from "react";
import Image from "next/image";

export default function WhichPaperIsBest() {
  return (
    <div className="bg-white px-6 pt-4 pb-16 font-mono">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="mb-5 text-left text-4xl font-semibold text-gray-900 md:text-5xl">
              Which Paper Is Best For Coloring Books?
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-gray-700">
              <b>Paper selection</b> is important because different <b>coloring materials</b>
              behave differently on paper.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-gray-700">
              White, uncoated paper is commonly used for coloring pages because
              it provides a suitable surface for <b>colored pencils</b> and <b>crayons</b>. If
              readers will use markers, ask your printer about heavier paper and
              <b>single sided printing</b> to help reduce show through or bleed through.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              Always request paper samples or a printed proof when possible. Test
              the actual coloring materials your intended readers are likely to
              use before approving a large print run.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1">
            <Image
              src="/coloring-book/Rectangle 14 (3).webp"
              alt="Child coloring with pencil"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
