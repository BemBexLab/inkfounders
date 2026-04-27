import { robotoMono } from "@/app/fonts";
import Link from "next/link";
import { MdLocalPhone } from "react-icons/md";

export default function CTABannerRight() {
  return (
    <section className="relative min-h-[320px] w-full overflow-hidden bg-[#1c1c1c]">
      <div className="absolute inset-0 h-full w-full lg:right-0 lg:left-auto lg:w-1/2">
        <img
          src="/landing-page/Rectangle 21.png"
          alt="Two women collaborating"
          className="h-full w-full object-cover object-center lg:hidden"
        />
        <div
          aria-hidden="true"
          className="hidden h-full w-full bg-fixed lg:block lg:[background-position:right_center] lg:[background-repeat:repeat-y] lg:[background-size:50vw_auto]"
          style={{
            backgroundImage: "url('/landing-page/Rectangle 21.png')",
            backgroundRepeat: "repeat-y",
          }}
        />
        <div className="absolute inset-0 bg-black/65 lg:bg-gradient-to-l lg:from-transparent lg:from-50% lg:to-[#1c1c1c]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 py-12 text-center sm:px-8 sm:py-14 md:px-12 lg:max-w-none lg:flex-row lg:pl-8 lg:pr-16 lg:py-16 lg:text-left xl:pl-12">
        <div className="flex w-full flex-col gap-5 lg:flex-1 lg:translate-x-[50px] lg:pr-8">
          <h2 className="max-w-[790px] text-[32px] font-extrabold leading-[1.08] text-[#DADD39] sm:text-[42px] md:text-[50px] lg:max-w-[920px] lg:text-[59px] [font-family:'DM_Sans',sans-serif]">
            Let us handle your book publishing journey
          </h2>

          <p
            className={`mx-auto max-w-[720px] text-sm leading-[1.8] text-white/75 sm:text-base md:text-lg lg:mx-0 lg:max-w-[760px] lg:leading-[1.9] ${robotoMono.className}`}
          >
            and watch your masterpiece gain the recognition and attention it
            truly deserves - all at a price that fits your budget.
          </p>

          <div className="mt-1 flex flex-col items-stretch gap-3 min-[430px]:flex-row min-[430px]:justify-center lg:flex-wrap lg:justify-start">
            <Link
              href="/contactus"
              className="btn-slide-bg flex h-10 items-center justify-center rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-3 text-xs font-medium text-black transition-all duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm lg:h-[45px] lg:min-w-[182px] lg:px-6 lg:text-[15px]"
            >
              <span className="slide-bg"></span>
              <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                Request a Quote
              </span>
            </Link>

            <Link
              href="/contactus"
              className="btn-slide-bg flex h-10 items-center justify-center gap-x-2 rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-3 text-xs font-medium text-black transition-all duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm lg:h-[45px] lg:min-w-[182px] lg:px-6 lg:text-[15px]"
            >
              <span className="slide-bg"></span>
              <MdLocalPhone className="relative z-10 text-xl sm:text-[23px] lg:text-[19px]" />
              <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                +1 (786) 496-1231
              </span>
            </Link>
          </div>
        </div>

        <div className="hidden lg:block lg:w-1/2 lg:flex-shrink-0" />
      </div>
    </section>
  );
}
