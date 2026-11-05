import Image from "next/image";
import Link from "next/link";
import { robotoMono } from "@/app/fonts";
import { IoMdCall } from "react-icons/io";
import { MdOutlineRequestQuote } from "react-icons/md";

const trustBadges = [
  {
    id: "trustpilot-review",
    title: "Trustpilot Review",
    src: "/optimized/Home/responsive/trustpilot-logo.webp",
  },
  {
    id: "top-digital-agency",
    title: "Top Digital Agency",
    src: "/Home/Mask group.webp",
  },
];

const ServiceHero = () => {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden rounded-bl-[44px] bg-[#F4F3E1] px-4 py-12 sm:rounded-bl-[64px] sm:px-6 sm:py-14 md:px-8 lg:rounded-bl-[100px] lg:px-0 lg:py-16">
      <div className="relative z-10 mx-auto flex w-full max-w-[1450px] items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center px-0 lg:px-[60px]">
            <h1 className="mb-3 max-w-4xl text-center text-[clamp(2rem,7vw,3rem)] font-semibold leading-[1.05] text-black lg:text-[42px] xl:text-[48px]">
              Professional, Expert &amp; Affordable Book Publishing Services
              USA For Perfect Authors
            </h1>

            <p
              className={`mb-7 max-w-5xl text-center text-[13px] leading-[1.35] text-gray-700 sm:text-[14px] md:text-[15px] lg:mb-8 lg:leading-tight ${robotoMono.className}`}
            >
              Step into excellence with Ink Founders&apos;{" "}
              <Link href="/" className="text-blue-500 hover:underline">
                full-service publishing solutions
              </Link>
              . From manuscript evaluation and expert editing to custom design,
              marketing, and global distribution, we&apos;re here to elevate
              your story. Whether you&apos;re a first-time author or a seasoned
              writer, our book publishing packages for authors are built around
              professional support and personalized attention, so your literary
              vision comes through exactly as you imagined it.
            </p>

            <div className="flex w-full flex-col items-stretch justify-center gap-3 min-[420px]:flex-row min-[420px]:items-center">
              <a
                href="tel:+17866526864"
                className="btn-slide-bg flex items-center justify-center gap-2 rounded-md border border-transparent bg-[#DADD39] px-4 py-3 text-sm font-normal text-black shadow transition-all duration-300 hover:border-black min-[420px]:px-5 md:text-base"
              >
                <span className="slide-bg rounded-md" />
                <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                  <IoMdCall size={18} />
                  Request a Call
                </span>
              </a>

              <Link
                href="/contactus"
                className="btn-slide-bg flex items-center justify-center gap-2 rounded-md border border-black bg-transparent px-4 py-3 text-sm font-normal text-black shadow transition-all duration-300 hover:border-[#DADD39] min-[420px]:px-5 md:text-base"
              >
                <span className="slide-bg rounded-md bg-[#DADD39]" />
                <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                  <MdOutlineRequestQuote size={19} />
                  Get Free Consultation
                </span>
              </Link>
            </div>

            <div className="mt-4 flex w-full flex-wrap items-center justify-center gap-4 sm:gap-7">
              {trustBadges.map((badge) => (
                <a
                  key={badge.id}
                  href="https://www.trustpilot.com/review/inkfounders.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={badge.title}
                  className="group flex h-[66px] w-[142px] items-center justify-center rounded-lg px-2 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] sm:h-[76px] sm:w-[170px]"
                >
                  <Image
                    src={badge.src}
                    alt={badge.title}
                    width={170}
                    height={76}
                    className="h-auto max-h-[62px] w-auto max-w-[155px] object-contain transition duration-300 group-hover:brightness-105"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
