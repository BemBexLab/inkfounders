import Link from "next/link";
import { MdLocalPhone } from "react-icons/md";
import FeatureCards from "./FeatureCards";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="scroll-mt-6 overflow-hidden bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16 xl:px-16"
    >
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center justify-center gap-10 xl:grid-cols-[minmax(0,760px)_minmax(520px,560px)] xl:gap-16">
        <div className="min-w-0 text-center xl:text-left">
          <p
            className="mb-2 text-2xl font-semibold text-[#1F1F1F] sm:text-3xl"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            We've Helped
          </p>

          <h2
            className="mx-auto mb-5 max-w-[760px] break-words text-[28px] font-bold leading-[1.12] text-[#DADD39] min-[430px]:text-4xl sm:mb-6 md:text-[44px] xl:mx-0 xl:text-5xl"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Thousands Of Writers Become{" "}
            <br className="hidden sm:block" />
            Authors Of Published Books
          </h2>

          <p
            className="mx-auto mb-8 max-w-[720px] text-sm leading-[1.75] text-[#3a3a28] sm:text-base md:text-lg xl:mx-0 xl:mb-10 xl:text-lg xl:leading-[1.9]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            American Book Experts offers top-notch eBook publishing services to
            transform authors' dreams into a concrete reality. Whether you are a
            new author or an experienced one, our gamut of e-book publishing
            services will help your book thrive and reach the target readers.
            With the publishing done right, you can land amongst the
            best-sellers.
          </p>

          <div className="mx-auto flex w-full max-w-[430px] flex-col items-stretch gap-3 min-[430px]:flex-row min-[430px]:justify-center xl:mx-0 xl:max-w-none xl:flex-wrap xl:items-center xl:justify-start">
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
              className="btn-slide-bg flex h-10 items-center justify-center gap-x-3 rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-3 text-xs font-medium text-black transition-all duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm lg:h-[45px] lg:min-w-[182px] lg:px-6 lg:text-[15px]"
            >
              <span className="slide-bg"></span>
              <MdLocalPhone className="relative z-10 text-xl sm:text-[23px] lg:text-[19px]" />
              <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                +1 (786) 496-1231
              </span>
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[620px] xl:max-w-[560px]">
          <FeatureCards />
        </div>
      </div>
    </section>
  );
}
