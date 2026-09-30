import type { FC } from "react";
import Image from "next/image";

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
    <section className="w-full min-w-0 bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 xl:px-20 xl:py-24">
      <div className="mx-auto w-full max-w-7xl [overflow-wrap:anywhere]">
        {/* Responsive heading and underline */}
        <header className="mb-8 text-center sm:mb-10 lg:mb-14 xl:mb-16">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.4] tracking-tight text-gray-900">
            <span className="underline decoration-yellow-400 decoration-[4px] underline-offset-[6px] [text-decoration-skip-ink:none] sm:decoration-[6px] sm:underline-offset-8 lg:decoration-[8px]">
              Comic Book Editing &amp; Proofreading
            </span>
          </h2>
        </header>

        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Illustration */}
          <div className="w-full min-w-0">
            <Image
              src="/comic-book/Rectangle 14 (5).svg"
              alt="Comic script and story development notes"
              width={600}
              height={750}
              sizes="(min-width: 1440px) 608px, (min-width: 1280px) calc(50vw - 112px), (min-width: 1024px) calc(50vw - 72px), (min-width: 768px) calc(100vw - 64px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
              className="h-auto max-h-[600px] w-full rounded-xl object-cover shadow-sm sm:rounded-2xl"
              priority
            />
          </div>

          {/* Content */}
          <div className="w-full min-w-0 space-y-4 text-sm leading-6 sm:space-y-5 sm:text-base sm:leading-7">
            <h3 className="text-[clamp(1.5rem,2.8vw,2.25rem)] font-bold leading-tight text-gray-900">
              Make Sure Your Story Reads as Clearly as It Looks
            </h3>

            <p className="italic text-gray-500">
              Before your comic is published, the written content should be
              reviewed carefully.
            </p>

            <p className="text-gray-600">
              Comic book editing requires more than checking spelling and grammar.
              Dialogue, captions, character names, story consistency, pacing, and
              the relationship between text and artwork all need to work together.
            </p>

            <div>
              <p className="mb-3 font-medium text-gray-800">
                Our editing support can include:
              </p>

              {/* Bullets align with the first line when text wraps */}
              <ul className="space-y-1.5 sm:space-y-2">
                {services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-2.5 text-gray-700 sm:gap-3"
                  >
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xl leading-6 text-yellow-500 sm:leading-7"
                    >
                      •
                    </span>

                    <span className="min-w-0 flex-1">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-600">
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