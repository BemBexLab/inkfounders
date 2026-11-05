import { robotoMono } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import {
  FaBook,
  FaBookOpen,
  FaBookOpenReader,
  FaPaintbrush,
  FaPalette,
  FaPenNib,
} from "react-icons/fa6";

const services = [
  {
    title: "Book Writing",
    href: "/publishing-services/book-writing",
    Icon: FaPenNib,
  },
  {
    title: "Book Publishing",
    href: "/publishing-services/book-publishing",
    Icon: FaBookOpen,
  },
  {
    title: "Book Cover Design",
    href: "/publishing-services/book-cover-design",
    Icon: FaPalette,
  },
  {
    title: "Editing & Proofreading",
    href: "/publishing-services/editing-and-proofreading",
    Icon: FaBookOpenReader,
  },
  {
    title: "Comic Book Publishing",
    href: "/publishing-services/comicbook-publishing",
    Icon: FaBook,
  },
  {
    title: "Coloring Book Printing Services",
    href: "/publishing-services/coloring-book-printing-services",
    Icon: FaPaintbrush,
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
          <div className="mx-auto mt-7 grid max-w-xl grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:mx-0">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative flex min-h-[124px] items-center justify-between overflow-hidden rounded-2xl border border-black/[0.07] border-l-[3px] border-l-[#c8d400] bg-white px-4 py-5 text-[#424b60] shadow-[0_5px_18px_rgba(23,23,23,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c8d400] hover:shadow-[0_14px_30px_rgba(23,23,23,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8d400] focus-visible:ring-offset-2 sm:px-5"
              >
                <span className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#f4f3e1] transition-transform duration-500 group-hover:scale-150" />
                <span className="relative z-10 flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#c8d400]/30 bg-[#f4f3e1] text-[#9ca600] transition-colors duration-300 group-hover:bg-[#c8d400] group-hover:text-[#171717]">
                    <service.Icon
                      aria-hidden="true"
                      className="h-5 w-5 transition-transform duration-300"
                    />
                  </span>
                  <span className="max-w-[150px] text-[13px] font-medium leading-[1.35] tracking-[-0.01em] text-[#30394d] sm:text-[14px]">
                    {service.title}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="relative z-10 ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/[0.08] text-base text-[#9ca600] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#c8d400] group-hover:bg-[#c8d400] group-hover:text-[#171717]"
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
