import type { FC } from "react";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import { robotoMono } from "@/app/fonts";

const services = [
  "Developmental editing",
  "Copyediting",
  "Proofreading",
  "Dialogue review",
  "Grammar and spelling checks",
  "Character and terminology consistency",
  "Story flow review",
  "Final manuscript review",
];

const StoryDevelopmentSection: FC = () => {
  return (
    <section className="w-full min-w-0 bg-white px-4 pb-12 sm:px-6 sm:pb-16 md:px-8 lg:px-12 lg:pb-20 xl:px-20 xl:pb-24">
      <div className="mx-auto w-full max-w-7xl [overflow-wrap:anywhere]">
        {/* Responsive heading and underline */}
        <header className="mb-8 text-center sm:mb-10 lg:mb-14 xl:mb-16">
          <h2 className="relative mx-auto w-fit max-w-full pb-2 text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.4] tracking-tight text-gray-900 after:absolute after:bottom-0 after:left-1/2 after:h-[4px] after:w-[80%] after:-translate-x-1/2 after:bg-[#DADD39] after:content-['']">
            Comic Book Editing &amp; Proofreading
          </h2>
        </header>

        <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Illustration */}
          <div className="relative order-1 aspect-[4/3] w-full min-w-0 overflow-hidden rounded-xl sm:rounded-2xl lg:order-2 lg:aspect-auto lg:min-h-[400px]">
            <Image
              src="/comic-book/Rectangle 14 (5).svg"
              alt="Comic script and story development notes"
              fill
              sizes="(min-width: 1440px) 608px, (min-width: 1280px) calc(50vw - 112px), (min-width: 1024px) calc(50vw - 72px), (min-width: 768px) calc(100vw - 64px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
              className="object-cover shadow-sm"
              priority
            />
          </div>

          {/* Content */}
          <div className="order-2 w-full min-w-0 space-y-4 text-sm leading-6 sm:space-y-5 sm:text-base sm:leading-7 lg:order-1">
            <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-tight text-gray-900">
              Make Sure Your Story Reads as Clearly as It Looks
            </h3>

            <p className={`${robotoMono.className} italic text-gray-500`}>
              Before your comic is published, the written content should be
              reviewed carefully.
            </p>

            <p className={`${robotoMono.className} text-gray-500`}>
              Comic book editing requires more than checking spelling and
              grammar. Dialogue, captions, character names, story consistency,
              pacing, and the relationship between text and artwork all need to
              work together.
            </p>

            <div>
              <p className={`${robotoMono.className} mb-3 font-medium text-gray-800`}>
                Our editing support can include:
              </p>

              {/* Bullets align with the first line when text wraps */}
              <ul className="space-y-1.5 sm:space-y-2">
                {services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-2.5 text-gray-700 sm:gap-3"
                  >
                    <FaCircleCheck
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-[18px] text-[#DADD39]"
                    />

                    <span className={`${robotoMono.className} min-w-0 flex-1`}>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className={`${robotoMono.className} text-gray-600`}>
              The goal is to improve the clarity and quality of your comic while
              preserving the creative style that makes your story yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryDevelopmentSection;
