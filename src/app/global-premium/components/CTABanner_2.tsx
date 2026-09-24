import { robotoMono } from "@/app/fonts";
import Link from "next/link";
import { MdLocalPhone } from "react-icons/md";
import QuoteTrigger from "../../book-publishing/components/QuoteTrigger";
import { PiArrowUpRightBold } from "react-icons/pi";

export default function CTABanner() {
  return (
    <section className="relative min-h-[420px] w-full overflow-hidden bg-[#1c1c1c]">
      <div className="absolute inset-0 h-full w-full lg:left-0 lg:w-1/2">
        <img
          src="/landing-page/Rectangle 17.webp"
          alt="desk with tablet and books"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65 lg:bg-gradient-to-r lg:from-transparent lg:from-50% lg:to-[#1c1c1c]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-4 py-10 text-center sm:px-6 sm:py-12 md:px-8 md:py-14 lg:max-w-none lg:flex-row lg:pl-12 lg:pr-6 lg:py-16 lg:text-left xl:pl-16 xl:pr-12">
        <div className="hidden lg:block lg:w-1/2 lg:flex-shrink-0" />

        <div className="flex w-full flex-col gap-4 lg:flex-1 lg:gap-5 lg:pl-8 xl:pl-12">
          <p className="plus-jakarta text-sm font-medium text-white/80 sm:text-base md:text-lg">
            Want To Have Your Ebook Published?
          </p>

          <h2 className="plus-jakarta max-w-[790px] text-2xl font-medium uppercase leading-[1.08] text-white sm:text-3xl md:text-4xl lg:max-w-[920px] lg:text-5xl xl:text-[52px]">
            Let's Share Your Work{" "}
            <span className="relative inline-block">
              With The World!
              <svg
                aria-hidden="true"
                className="absolute left-0 top-[25%] w-[calc(100%+10px)] -rotate-5"
                height="28"
                viewBox="0 0 100 32"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 8 Q50 30 100 30"
                  fill="none"
                  stroke="#c8d400"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="plus-jakarta mx-auto max-w-[720px] text-sm leading-[1.4] text-white/75 sm:text-base sm:leading-[1.45] md:text-lg md:leading-[1.5] lg:mx-0 lg:max-w-[760px] [word-spacing:3px]">
            Are you done with your book and looking for ways to have it published? Get in touch with us now to get your eBook published by experts! We help authors gain global exposure for their work.
          </p>

          <div className="mt-2 flex flex-col items-stretch gap-3 sm:mt-3 sm:flex-row sm:justify-center lg:mt-4 lg:flex-wrap lg:justify-start">
            <QuoteTrigger className="flex h-11 w-full items-center justify-center rounded-[8px] border border-[#DADD39] bg-gradient-to-r from-[#C8D400] to-[#F7FF77] px-4 text-sm font-medium text-black transition-all duration-300 hover:border-black sm:h-12 sm:w-auto sm:px-5 sm:text-base md:h-[48px] md:px-6 md:text-[15px] lg:h-[45px] lg:min-w-[182px] lg:px-6 lg:text-[15px]">
              <span className="slide-bg"></span>
              <span className="relative z-10 flex items-center gap-1 whitespace-nowrap font-medium tracking-[0.08em] poppins">
                Request a Quote <PiArrowUpRightBold size={19} />
              </span>
            </QuoteTrigger>

            <Link
              href="tel:+17864961231"
              className="flex h-11 w-full items-center justify-center gap-x-2 rounded-[8px] border border-[#DADD39] bg-gradient-to-r from-[#C8D400] to-[#F7FF77] px-4 text-sm font-medium text-black transition-all duration-300 hover:border-black sm:h-12 sm:w-auto sm:px-5 sm:text-base md:h-[48px] md:px-6 md:text-[15px] lg:h-[45px] lg:min-w-[182px] lg:px-6 lg:text-[15px]"
            >
              <span className="slide-bg"></span>
              <MdLocalPhone className="relative z-10 text-lg sm:text-xl md:text-[22px] lg:text-[19px]" />
              <span className="relative z-10 whitespace-nowrap font-medium tracking-[0.08em] poppins">
                +1 (786) 496-1231
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}