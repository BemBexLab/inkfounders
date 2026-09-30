import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import {
  FaPenNib,
  FaBolt,
  FaBullhorn,
  FaComments,
  FaRocket,
  FaImage,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa6";

const marketingServices = [
  {
    icon: FaPenNib,
    title: "Creator Branding",
    description:
      "Build a recognizable identity that resonates with your audience.",
  },
  {
    icon: FaSearch,
    title: "Keyword Research",
    description: "Get discovered by the right readers at the right time.",
  },
  {
    icon: FaBolt,
    title: "Book Page Optimization",
    description: "Turn browsers into buyers with compelling, optimized pages.",
  },
  {
    icon: FaBullhorn,
    title: "Online Promotion",
    description: "Reach new readers across the web with targeted campaigns.",
  },
  {
    icon: FaComments,
    title: "Social Media Content Planning",
    description: "Stay consistent and engaging on every platform.",
  },
  {
    icon: FaRocket,
    title: "Launch Support",
    description: "Make a splash on day one with a strategic launch plan.",
  },
  {
    icon: FaImage,
    title: "Promotional Materials",
    description: "Eye-catching assets that sell your story before page one.",
  },
  {
    icon: FaChartLine,
    title: "Audience-Building Strategies",
    description: "Grow a loyal fanbase that follows you from book to book.",
  },
];

export default function ComicMarketing() {
  return (
    <section className="relative w-full min-w-0 overflow-hidden bg-[#f5f1e8] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 xl:px-20 xl:py-24">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 opacity-30 sm:h-80 sm:w-80 lg:h-1/2 lg:w-1/2"
      >
        <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
          <path
            d="M400 400 C300 300, 200 350, 100 250 C50 200, 0 150, 0 100 L0 400 L400 400 Z"
            fill="#c8d06a"
          />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-7xl [overflow-wrap:anywhere]">
        {/* Header */}
        <header className="mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
          <div className="mb-8 text-center sm:mb-10 lg:mb-12">
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.4] tracking-tight text-gray-900">
              <span className="underline decoration-yellow-400 decoration-[4px] underline-offset-[6px] [text-decoration-skip-ink:none] sm:decoration-[6px] sm:underline-offset-8 lg:decoration-[8px]">
                Comic Book Marketing &amp; Promotion
              </span>
            </h2>
          </div>

          <h3 className="mb-3 text-[clamp(1.375rem,2.5vw,1.875rem)] font-bold leading-tight text-[#1a1a2e] sm:mb-4 xl:mb-5">
            Help More Readers Discover Your Comic
          </h3>

          <div className="max-w-3xl space-y-3 text-sm leading-6 text-[#3a3a4a] sm:text-base sm:leading-7 lg:text-lg">
            <p>
              Publishing your comic is only one part of building an audience.
            </p>

            <p>
              Once your book is ready, you need a way to introduce it to potential
              readers and establish your creator or book brand.
            </p>
          </div>
        </header>

        {/* Main content */}
        <div className="mb-8 grid grid-cols-1 items-start gap-8 sm:mb-10 sm:gap-10 lg:mb-12 lg:grid-cols-2 lg:gap-8 xl:gap-12 2xl:gap-16">
          {/* Image */}
          <div className="w-full min-w-0 rounded-xl border border-[#e8e4d8] bg-white p-3 shadow-sm sm:rounded-2xl sm:p-4">
            <div className="overflow-hidden rounded-lg sm:rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&q=80"
                alt="Comic Book Launch Flow: Comic Book to Website to Social Media to Readers"
                width={800}
                height={500}
                sizes="(min-width: 1536px) 574px, (min-width: 1440px) 582px, (min-width: 1280px) calc(50vw - 138px), (min-width: 1024px) calc(50vw - 98px), (min-width: 768px) calc(100vw - 98px), (min-width: 640px) calc(100vw - 82px), calc(100vw - 58px)"
                className="block h-auto w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Services */}
          <div className="w-full min-w-0">
            <h3 className="mb-4 text-xl font-bold leading-tight text-[#1a1a2e] sm:mb-5 sm:text-2xl">
              Our marketing support can include:
            </h3>

            <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 sm:gap-4">
              {marketingServices.map((service) => (
                <article
                  key={service.title}
                  className="group min-w-0 rounded-xl border border-[#e8e4d8] bg-white p-3 shadow-sm transition duration-300 hover:border-[#a8b83a] hover:shadow-md motion-reduce:transition-none sm:p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef2d8] text-[#6b7a2e] transition-colors duration-300 group-hover:bg-[#a8b83a] group-hover:text-white motion-reduce:transition-none sm:h-10 sm:w-10">
                      <service.icon
                        aria-hidden="true"
                        className="h-5 w-5"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-bold leading-snug text-[#1a1a2e] sm:text-base lg:text-sm xl:text-base">
                        {service.title}
                      </h4>

                      {/*
                      <p className="mt-1 text-sm leading-snug text-[#6a6a7a]">
                        {service.description}
                      </p>
                      */}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Info banner */}
        <div className="mb-8 rounded-xl border-l-4 border-[#a8b83a] bg-white p-5 shadow-sm sm:mb-10 sm:rounded-2xl sm:p-6 lg:mb-12 lg:p-8 xl:p-10">
          <p className="text-center text-base font-medium leading-relaxed text-[#1a1a2e] sm:text-lg md:text-left lg:text-xl">
            The right promotional approach depends on your{" "}
            <span className="font-bold">comic</span>,{" "}
            <span className="font-bold">genre</span>,{" "}
            <span className="font-bold">audience</span>,{" "}
            <span className="font-bold">publishing format</span>, and{" "}
            <span className="font-bold">goals</span>.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/plan-launch"
            className="group inline-flex min-h-[48px] w-full max-w-full items-center justify-center gap-2 rounded-full bg-[#a8b83a] px-5 py-3 text-center text-sm font-bold leading-6 text-white shadow-sm transition duration-300 hover:bg-[#8fa02e] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6b7a2e] focus-visible:ring-offset-2 motion-reduce:transition-none sm:w-auto sm:gap-3 sm:px-8 sm:py-4 sm:text-base lg:px-10 lg:py-5 lg:text-lg"
          >
            <span className="min-w-0">Plan My Comic Launch</span>

            <FaArrowRight
              aria-hidden="true"
              className="h-4 w-4 shrink-0 transition-transform motion-safe:group-hover:translate-x-1 motion-reduce:transition-none sm:h-5 sm:w-5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}