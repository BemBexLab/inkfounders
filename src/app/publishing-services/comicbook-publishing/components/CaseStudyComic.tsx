import Image from "next/image";
import Link from "next/link";
import { AiFillProject } from "react-icons/ai";
import {
  FiFileText,
  FiCheckCircle,
  FiLayout,
  FiPenTool,
  FiUploadCloud,
  FiArrowRight,
  FiStar,
} from "react-icons/fi";

const supportServices = [
  { icon: FiFileText, label: "Editing" },
  { icon: FiCheckCircle, label: "Proofreading" },
  { icon: FiLayout, label: "Interior Formatting" },
  { icon: FiPenTool, label: "Cover Design" },
  { icon: FiUploadCloud, label: "Publishing preparation" },
  { icon: AiFillProject, label: "The Final Project" },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80&w=1000",
    alt: "Comic Book Shelf",
  },
  {
    src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&q=80&w=1000",
    alt: "Comic Art Mural",
  },
];

export default function CaseStudyComic() {
  return (
    <section className="relative w-full min-w-0 overflow-hidden bg-[#F5F5E8] px-4 py-12 text-zinc-900 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 xl:px-20 xl:py-24 2xl:px-32">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[260px] w-[140%] max-w-[1400px] -translate-x-1/2 rounded-t-full bg-[#E8E8C8] sm:h-[400px] sm:w-full lg:h-[600px] lg:w-[80%]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#E8E8C8]/50 blur-3xl sm:h-96 sm:w-96 lg:right-0 lg:h-[600px] lg:w-[600px]"
      />

      <div className="relative mx-auto w-full max-w-[1600px] [overflow-wrap:anywhere]">
        {/* Header */}
        <header className="mb-8 max-w-4xl sm:mb-10 lg:mb-12 xl:mb-16">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.15] tracking-tight text-zinc-900">
            From Manuscript to{" "}
            <span className="bg-[linear-gradient(transparent_60%,rgba(212,225,87,0.6)_60%,rgba(212,225,87,0.6)_90%,transparent_90%)] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
              Finished Comic
            </span>
          </h2>
        </header>

        {/* Two flexible columns with 5:7 desktop proportions */}
        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] xl:gap-16">
          {/* Project details */}
          <div className="w-full min-w-0 space-y-6 sm:space-y-8 xl:space-y-10">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-lime-700 sm:mb-3 sm:text-sm">
                Project 01
              </p>

              <h3 className="mb-3 text-[clamp(1.125rem,2vw,1.5rem)] font-bold text-zinc-900 sm:mb-4">
                The Project
              </h3>

              <p className="text-base leading-7 text-zinc-700 sm:text-lg sm:leading-8 xl:text-xl">
                A creator had a completed comic story and artwork but needed professional support preparing the project for publication.
              </p>
            </div>

            <div className="border-l-4 border-[#DADD39] pl-4 sm:pl-5 xl:pl-6">
              <h3 className="mb-3 text-[clamp(1.125rem,2vw,1.5rem)] font-semibold text-zinc-900">
                The Challenge
              </h3>

              <p className="text-sm leading-6 text-zinc-700 sm:text-base sm:leading-7 xl:text-lg">
                The project required editing, interior formatting, cover preparation, and publishing-ready files.
              </p>
            </div>

            <div>
              <h3 className="mb-4 flex items-center gap-2 text-[clamp(1.125rem,2vw,1.5rem)] font-semibold text-zinc-900 sm:mb-5 xl:mb-6">
                <FiStar
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-[#DADD39] sm:h-6 sm:w-6"
                />
                Our Support
              </h3>

              {/* Avoid squeezing cards inside a narrow desktop column */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1 xl:grid-cols-2">
                {supportServices.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex min-w-0 items-center gap-3 rounded-xl border border-zinc-200 bg-white p-3 transition duration-300 hover:border-[#D4E157] hover:shadow-lg motion-reduce:transition-none sm:p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D4E157]/30 sm:h-10 sm:w-10">
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5 text-[#D4E157] sm:h-6 sm:w-6"
                      />
                    </div>

                    <span className="min-w-0 flex-1 text-sm font-semibold leading-snug text-zinc-800 sm:text-base">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Images and CTA */}
          <div className="w-full min-w-0 space-y-4 sm:space-y-6">
            <div className="group relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2 rounded-3xl bg-[#D4E157]/40 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none sm:-inset-3"
              />

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border-2 border-zinc-900 bg-white shadow-lg sm:rounded-2xl sm:shadow-xl lg:shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=1600"
                  alt="Comic Book Collection - Project 01"
                  fill
                  sizes="(min-width: 1856px) 896px, (min-width: 1536px) calc(58.333vw - 186.667px), (min-width: 1280px) calc(58.333vw - 130.667px), (min-width: 1024px) calc(58.333vw - 79.333px), (min-width: 768px) calc(100vw - 64px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105 motion-reduce:transition-none"
                  priority
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              {galleryImages.map((image) => (
                <div
                  key={image.src}
                  className="group/img relative aspect-[4/3] min-w-0 overflow-hidden rounded-xl border-2 border-zinc-900 bg-white shadow-lg"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1856px) 436px, (min-width: 1536px) calc(29.167vw - 105.333px), (min-width: 1280px) calc(29.167vw - 77.333px), (min-width: 1024px) calc(29.167vw - 51.667px), (min-width: 768px) calc(50vw - 44px), (min-width: 640px) calc(50vw - 36px), calc(100vw - 32px)"
                    className="object-cover transition-transform duration-500 motion-safe:group-hover/img:scale-105 motion-reduce:transition-none"
                  />
                </div>
              ))}
            </div>

            <div className="pt-2 sm:pt-4">
              <Link
                href="/contactus"
                className="group/btn inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border-2 border-zinc-900 bg-[#DADD39] px-4 py-3 text-center text-sm font-bold leading-6 text-zinc-900 shadow-lg transition duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 motion-safe:hover:scale-[1.01] motion-safe:active:scale-[0.99] motion-reduce:transition-none sm:gap-3 sm:px-6 sm:py-4 sm:text-base xl:px-8 xl:py-5 xl:text-lg"
              >
                <span className="min-w-0">
                  Start Your Own Comic Project
                </span>

                <FiArrowRight
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 transition-transform duration-300 motion-safe:group-hover/btn:translate-x-1 motion-reduce:transition-none sm:h-6 sm:w-6"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
