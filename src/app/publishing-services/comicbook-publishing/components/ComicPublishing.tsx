import { robotoMono } from "@/app/fonts";
import { BsSoundwave } from "react-icons/bs";

const cards = [
  {
    title: "Independent Comic Books",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "Creator-Owned Comics",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "Comic Book Series",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "Graphic Novels",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "Illustrated Stories",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "Manga-Style Projects",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "Short Comic Books",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "Long-Form Graphic Novels",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
];

export default function ComicPublishing() {
  return (
    <section className="min-h-screen w-full min-w-0 bg-white px-4 pb-12 font-sans sm:px-6 sm:pb-16 md:px-8 lg:px-12 lg:pb-20 xl:px-16 xl:pb-24">
      <div className="mx-auto w-full max-w-6xl [overflow-wrap:anywhere]">
        {/* Responsive heading with a wrapping underline */}
        <header className="mb-8 text-center sm:mb-10 lg:mb-14 xl:mb-16">
          <h2 className="relative mx-auto w-fit max-w-full pb-2 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.4] tracking-tight text-gray-900 after:absolute after:bottom-0 after:left-1/2 after:h-[4px] after:w-[80%] after:-translate-x-1/2 after:bg-[#DADD39] after:content-['']">
              Independent Comic Book Publishing
          </h2>
        </header>

        {/* Introduction */}
        <div className="mb-10 grid grid-cols-1 items-center gap-6 sm:mb-12 sm:gap-8 lg:mb-16 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="w-full min-w-0">
            <h3 className="mb-4 text-[clamp(1.125rem,2vw,1.5rem)] font-semibold leading-tight text-gray-900 sm:mb-5">
              Professional Support for Creator Owned Projects
            </h3>

            <div className={`${robotoMono.className} space-y-3 font-mono text-sm leading-6 text-gray-600 sm:space-y-4 sm:text-base sm:leading-7`}>
              <p>
                Independent comic creators often have their own characters,
                stories, artwork, and publishing goals.
              </p>

              <p>
                Our services are designed to help creators prepare those projects
                for professional publication while keeping their creative
                direction at the center of the process.
              </p>
            </div>
          </div>

          {/* Image keeps its natural proportions */}
          <div className="w-full min-w-0 overflow-hidden rounded-xl">
            <img
              src="/comic-book/Rectangle 14 (7).svg"
              alt="Woman browsing books in a bookstore"
              loading="lazy"
              decoding="async"
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>

        <h3 className="mb-5 text-center text-[clamp(1.125rem,2vw,1.5rem)] font-semibold leading-tight text-gray-900 sm:mb-6 lg:mb-8">
          We Can Support Projects Such As:
        </h3>

        {/* Responsive cards */}
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex min-w-0 flex-col items-center rounded-lg bg-[#f0f0e0] px-5 py-6 text-center sm:px-6 sm:py-8"
            >
              <BsSoundwave
                aria-hidden="true"
                className="mb-3 h-10 w-10 shrink-0 text-[#DADD39] sm:mb-4 sm:h-[53px] sm:w-[53px]"
              />

              <h4 className="w-full text-base font-semibold leading-snug text-gray-900 sm:text-lg">
                {card.title}
              </h4>

              {/*
              <p className="mt-2 font-mono text-sm leading-6 text-gray-600">
                {card.description}
              </p>
              */}
            </article>
          ))}
        </div>

        <p className={`${robotoMono.className} mt-6 font-mono text-sm leading-6 text-black sm:mt-8 sm:text-base sm:leading-7 text-center`}>
          <i>Whether you&apos;re publishing your first comic or developing a continuing
          series, we can help you identify the next steps required for your project.</i>
        </p>
      </div>
    </section>
  );
}
