"use client";

import { robotoMono } from "@/app/fonts";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

const services = [
  "Comic story development",
  "Comic script writing",
  "Character development",
  "Dialogue development",
  "Story structure",
  "Scene development",
  "Panel and page planning",
  "Graphic novel writing",
  "Script review and refinement",
];

export default function StoryDevelopmentSection() {
  return (
    <section className="min-h-screen w-full min-w-0 bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 xl:px-24 xl:py-24">
      <div className="mx-auto w-full max-w-7xl [overflow-wrap:anywhere]">
        {/* Responsive heading with a wrapping underline */}
        <header className="mb-8 text-center sm:mb-10 lg:mb-14 xl:mb-16">
          <h2 className="relative mx-auto w-fit max-w-full pb-2 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.4] tracking-tight text-gray-900 after:absolute after:bottom-0 after:left-1/2 after:h-[4px] after:w-[80%] after:-translate-x-1/2 after:bg-[#DADD39] after:content-['']">
            Comic Book Writing & Story Development
          </h2>
        </header>

        <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Proportional on mobile; stretches to content height on desktop */}
          <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-xl sm:rounded-2xl lg:aspect-auto lg:min-h-[400px]">
            <Image
              src="/comic-book/Rectangle 14 (4).svg"
              alt="Comic book story development and script writing process"
              fill
              sizes="(min-width: 1472px) 608px, (min-width: 1280px) calc(50vw - 128px), (min-width: 1024px) calc(50vw - 72px), (min-width: 768px) calc(100vw - 64px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full min-w-0 space-y-5 sm:space-y-6">
            <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-tight text-gray-900">
              Build a Strong Story Before Production Begins
            </h3>

            <div
              className={` ${robotoMono.className} space-y-3 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7 `}
            >
              <p>Every comic starts with a story.</p>

              <p>
                Whether you have a detailed concept or only a basic idea,
                developing the story before production can help create a
                stronger foundation for the finished book.
              </p>

              <p>
                Our comic book writing and story development support can
                include:
              </p>
            </div>

            {/* Bullets align with the first line when text wraps */}
            <ul className="space-y-1.5 text-sm leading-6 text-gray-700 sm:space-y-1 sm:text-base sm:leading-7">
              {services.map((service) => (
                <li key={service} className="flex items-start gap-2.5 sm:gap-3">
                  <FaCircleCheck
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[18px] text-[#DADD39]"
                  />

                  <span className={` ${robotoMono.className} min-w-0 flex-1 `}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>

            <p
              className={` ${robotoMono.className} text-sm leading-6 text-gray-700 sm:text-base sm:leading-7 `}
            >
              If you already have a story, we can work with your existing
              material while maintaining the creative direction and voice of
              your project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
