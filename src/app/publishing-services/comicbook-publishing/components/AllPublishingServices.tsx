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
    <section className="relative overflow-hidden bg-[#f6f4ea] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#e9e5bf]/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-7xl sm:mb-12">
          <p className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#8b922d]">
            <span className="h-px w-8 bg-[#c8d952]" />
            Our services
          </p>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#1a1a1a] sm:text-5xl">
            Everything you need to bring your story to life.
          </h2>
          <p className="mt-5 max-w-7xl text-base leading-7 text-[#626158] sm:text-lg">
            Explore our publishing services and find the right support for your
            project, from the first draft to a finished book in readers&apos;
            hands.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.href}
                href={service.href}
                aria-current={service.current ? "page" : undefined}
                className={`group flex min-h-[220px] flex-col rounded-2xl border p-6 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8d952] focus-visible:ring-offset-2 sm:p-7 ${
                  service.current
                    ? "border-[#c8d952] bg-[#1d1d1a] text-white shadow-[0_16px_35px_rgba(29,29,26,0.14)]"
                    : "border-[#e2dfd2] bg-white text-[#1a1a1a] hover:-translate-y-1 hover:border-[#c8d952] hover:shadow-[0_16px_35px_rgba(56,56,41,0.08)]"
                }`}
              >
                <div
                  className={`mb-6 flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                    service.current
                      ? "bg-[#c8d952] text-[#1a1a1a]"
                      : "bg-[#f0f1d7] text-[#707a1b] group-hover:bg-[#c8d952] group-hover:text-[#1a1a1a]"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold leading-tight">
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
                  className={`mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold ${
                    service.current ? "text-[#d8e86b]" : "text-[#737c1c]"
                  }`}
                >
                  Explore service
                  <FaArrowRight
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
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
