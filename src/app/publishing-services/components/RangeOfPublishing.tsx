import { robotoMono } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Book Writing",
    href: "/publishing-services/book-writing",
  },
  {
    title: "Book Publishing",
    href: "/publishing-services/book-publishing",
  },
  {
    title: "Book Cover Design",
    href: "/publishing-services/book-cover-design",
  },
  {
    title: "Editing & Proofreading",
    href: "/publishing-services/editing-and-proofreading",
  },
  {
    title: "Comic Book Publishing",
    href: "/publishing-services/comicbook-publishing",
  },
  {
    title: "Coloring Book Printing Services",
    href: "/publishing-services/coloring-book-printing-services",
  },
];

export default function RangeOfPublishing() {
  return (
    <section className="w-full border-y border-black/[0.06] bg-[#F6F5F3] px-4 py-14 sm:px-6 sm:py-10 md:px-8 lg:px-6">
      <div className="mx-auto grid min-h-[500px] w-full max-w-7xl items-center gap-12 lg:min-h-[600px] lg:grid-cols-[minmax(0,1fr)_minmax(380px,460px)] lg:gap-16 xl:gap-24">
        {/* Content */}
        <div className="max-w-3xl text-center lg:pl-8 lg:text-left xl:pl-12">
          <div className="mx-auto mb-7 h-px w-14 bg-[#c8d400] lg:mx-0" />
          <h2 className="max-w-[1620px] text-[clamp(1.8rem,3.2vw,3rem)] font-medium leading-[1.02] tracking-[-0.045em] text-[#171717]">
            A Range of Publishing Services
          </h2>
          <div
            className={`mx-auto mt-8 max-w-xl border-l border-[#c8d400] pl-5 text-left text-[13px] leading-[1.7] text-[#555] sm:pl-6 sm:text-[14px] md:text-[15px] lg:mx-0 lg:leading-[1.75] ${robotoMono.className}`}
          >
            <p>
              At Ink Founders, we offer professional book publishing services covering editing, design, and marketing support to get your book ready for publication. At every step, we prioritize preserving your unique voice and creative vision.
            </p>
          </div>
          <div className="mx-auto mt-6 grid max-w-xl grid-cols-1 gap-3 text-left sm:grid-cols-2 lg:mx-0">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={`group flex min-h-[88px] items-center justify-between border border-black/[0.08] border-l-2 border-l-[#c8d400] bg-white/60 px-4 py-4 text-[13px] leading-[1.35] text-[#424b60] transition-all duration-300 hover:-translate-y-1 hover:border-[#c8d400] hover:bg-white hover:shadow-[0_10px_24px_rgba(23,23,23,0.08)] sm:px-5 sm:text-[14px] ${robotoMono.className}`}
              >
                <span>{service.title}</span>
                <span
                  aria-hidden="true"
                  className="ml-3 shrink-0 text-lg text-[#c8d400] transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Book Cover */}
        <div className="flex items-center justify-center lg:justify-end lg:pr-4">
          <Image
            src="/Service/image 99.webp"
            alt="The Buried Truth book cover"
            width={330}
            height={469}
            sizes="(max-width: 639px) 68vw, (max-width: 1023px) 330px, 330px"
            className="h-auto w-[min(68vw,330px)] drop-shadow-[0_24px_20px_rgba(0,0,0,0.16)] transition-transform duration-500 hover:-translate-y-2"
          />
        </div>
      </div>
    </section>
  );
}
