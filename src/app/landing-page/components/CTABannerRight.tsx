import { robotoMono } from "@/app/fonts";
import Link from "next/link";
import { MdLocalPhone } from "react-icons/md";

export default function CTABannerRight() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1c1c1c]">
      <div className="absolute right-0 top-0 h-full w-1/2">
        <img
          src="/landing-page/Rectangle 21.png"
          alt="Two women collaborating"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent from-50% to-[#1c1c1c]" />
      </div>

      <div className="relative z-10 left-35 py-55 flex w-full max-w-[1200px] flex-col items-center px-6 py-16 md:flex-row md:px-14 lg:px-16">
        <div className="flex w-full flex-col justify-center gap-5 md:w-1/2 md:max-w-[545px] md:pr-10 lg:max-w-[620px] lg:pr-14">
          <h2 className="max-w-[620px] text-[34px] font-extrabold leading-[1.1] text-[#DADD39] [font-family:'DM_Sans',sans-serif] sm:text-[42px] md:text-[46px] lg:text-[54px] xl:text-[59px]">
            <span className="whitespace-nowrap">Let us handle your book</span>{" "}
            <span className="whitespace-nowrap">publishing journey</span>   
          </h2>

          <p className={`min-w-[690px] text-xl ${robotoMono.className}`}>
            and watch your masterpiece gain the recognition and attention it
            truly deserves - all at a price that fits your budget.
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-4">
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
              className="btn-slide-bg flex h-10 items-center justify-center rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-3 text-xs font-medium text-black transition-all gap-x-2 duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm lg:h-[45px] lg:min-w-[182px] lg:px-6 lg:text-[15px]"
            >
              <span className="slide-bg"></span>
              <MdLocalPhone className="relative z-10 text-xl sm:text-[23px] lg:text-[19px]" />
              <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                +1 (786) 496-1231
              </span>
            </Link>
          </div>
        </div>

        <div className="hidden flex-shrink-0 md:block md:w-1/2" />
      </div>
    </section>
  );
}
