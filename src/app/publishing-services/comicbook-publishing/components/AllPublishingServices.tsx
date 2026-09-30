import Link from "next/link";
import {
  FaArrowRight,
  FaBookOpen,
  FaFeatherPointed,
  FaFilePen,
  FaMasksTheater,
  FaPalette,
} from "react-icons/fa6";

const services = [
  {
    title: "Book Writing & Ghostwriting",
    description:
      "Turn your ideas, expertise, or outline into a polished, publish-ready manuscript.",
    href: "/publishing-services/book-writing",
    icon: FaFeatherPointed,
  },
  {
    title: "Book Publishing",
    description:
      "Get professional support with formatting, distribution, ISBN guidance, and publishing preparation.",
    href: "/publishing-services/book-publishing",
    icon: FaBookOpen,
  },
  {
    title: "Book Cover Design",
    description:
      "Create a memorable, genre-appropriate cover that helps your book stand out.",
    href: "/publishing-services/book-cover-design",
    icon: FaPalette,
  },
  {
    title: "Editing & Proofreading",
    description:
      "Improve your manuscript’s structure, clarity, consistency, grammar, and final polish.",
    href: "/publishing-services/editing-and-proofreading",
    icon: FaFilePen,
  },
  {
    title: "Comic Book Publishing",
    description:
      "Bring your comic book or graphic novel from idea to professionally prepared publication.",
    href: "/publishing-services/comicbook-publishing",
    icon: FaMasksTheater,
    current: true,
  },
];

export default function AllPublishingServices() {
  return (
    <section className="relative w-full min-w-0 overflow-hidden bg-[#f6f4ea] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 xl:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-48 w-48 rounded-full bg-[#e9e5bf]/60 blur-3xl sm:h-64 sm:w-64 lg:-left-32 lg:h-80 lg:w-80"
      />

      <div className="relative mx-auto w-full max-w-7xl [overflow-wrap:anywhere]">
        {/* Header */}
        <header className="mb-8 sm:mb-10 lg:mb-12">
          <p className="mb-3 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#8b922d] sm:mb-4 sm:gap-3 sm:text-sm sm:tracking-[0.2em]">
            <span
              aria-hidden="true"
              className="h-px w-6 shrink-0 bg-[#c8d952] sm:w-8"
            />
            Our services
          </p>

          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight text-[#1a1a1a]">
            Everything you need to bring your story to life.
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#626158] sm:mt-5 sm:text-base sm:leading-7 lg:text-lg">
            Explore our publishing services and find the right support for your
            project, from the first draft to a finished book in readers&apos;
            hands.
          </p>
        </header>

        {/* Responsive cards */}
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.href}
                href={service.href}
                aria-current={service.current ? "page" : undefined}
                className={`group flex h-full min-w-0 flex-col rounded-xl border p-5 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8d952] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f4ea] motion-reduce:transition-none sm:rounded-2xl sm:p-6 xl:p-7 ${
                  service.current
                    ? "border-[#c8d952] bg-[#1d1d1a] text-white shadow-[0_16px_35px_rgba(29,29,26,0.14)]"
                    : "border-[#e2dfd2] bg-white text-[#1a1a1a] hover:border-[#c8d952] hover:shadow-[0_16px_35px_rgba(56,56,41,0.08)] motion-safe:hover:-translate-y-1"
                }`}
              >
                <div
                  className={`mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors motion-reduce:transition-none sm:mb-5 sm:h-11 sm:w-11 lg:mb-6 ${
                    service.current
                      ? "bg-[#c8d952] text-[#1a1a1a]"
                      : "bg-[#f0f1d7] text-[#707a1b] group-hover:bg-[#c8d952] group-hover:text-[#1a1a1a]"
                  }`}
                >
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-bold leading-snug sm:text-xl">
                  {service.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-6 ${
                    service.current ? "text-white/70" : "text-[#626158]"
                  }`}
                >
                  {service.description}
                </p>

                <span
                  className={`mt-auto inline-flex max-w-full items-center gap-2 pt-5 text-sm font-bold leading-6 sm:pt-6 ${
                    service.current ? "text-[#d8e86b]" : "text-[#737c1c]"
                  }`}
                >
                  <span className="min-w-0">Explore service</span>

                  <FaArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 transition-transform duration-200 motion-safe:group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}