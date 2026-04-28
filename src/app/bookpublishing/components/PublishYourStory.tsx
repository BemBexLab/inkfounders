import { robotoMono } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import { MdLocalPhone } from "react-icons/md";

const PublishYourStory = () => {
  return (
    <section
      id="publish-your-story"
      className="relative mt-14 flex w-full justify-center overflow-visible bg-[#DADD39] px-5 pb-0 pt-14 text-black sm:px-8 sm:pt-16 lg:mt-[94px] lg:min-h-[418px] lg:px-0 lg:py-0"
    >
      <div className="relative mx-auto flex w-full max-w-[1032px] flex-col items-center gap-8 lg:min-h-[418px] lg:flex-row lg:items-start lg:gap-10">
        <div className="relative z-20 flex w-full max-w-[620px] flex-col justify-center text-center lg:max-w-[545px] lg:pt-[73px] lg:text-left">
          <h2 className="mx-auto max-w-[570px] text-[32px] font-extrabold leading-[1.12] tracking-normal sm:text-[40px] md:text-[46px] lg:mx-0 lg:text-[40px] lg:leading-[1.18]">
            Publish Your Story With Confidence
          </h2>

          <p
            className={`mx-auto mt-4 max-w-[520px] text-sm leading-[1.7] tracking-[0.05em] sm:text-base md:text-lg lg:mx-0 lg:mt-[18px] lg:max-w-[545px] lg:text-[14px] lg:leading-[1.95] lg:tracking-[0.07em] ${robotoMono.className}`}
          >
            Your story deserves to be heard-let us help you share it with the
            world. Our book publishing services provide everything you need to
            transform your manuscript into a professionally published work,
            ready to reach readers.
          </p>

          <div className="mt-6 flex flex-col items-stretch gap-3 py-2 min-[430px]:flex-row min-[430px]:justify-center lg:mt-[14px] lg:justify-start lg:gap-[17px] lg:py-0">
            <Link
              href="#quote-popup"
              className="btn-slide-bg flex h-10 items-center justify-center rounded-[8px] border border-black bg-black px-3 text-xs font-medium text-white transition-all duration-300 hover:border-black hover:text-black sm:h-11 sm:px-4 sm:text-sm lg:h-[42px] lg:min-w-[151px] lg:px-5 lg:text-[14px]"
            >
              <span className="slide-bg"></span>
              <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                Request a Quote
              </span>
            </Link>

            <Link
              href="tel:+17864961231"
              className="btn-slide-bg flex h-10 items-center justify-center gap-x-2 rounded-[8px] border border-black bg-black px-3 text-xs font-medium text-white transition-all duration-300 hover:border-black hover:text-black sm:h-11 sm:px-4 sm:text-sm lg:h-[42px] lg:min-w-[182px] lg:px-5 lg:text-[14px]"
            >
              <span className="slide-bg"></span>
              <MdLocalPhone className="relative z-10 text-xl sm:text-[23px] lg:text-[19px]" />
              <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                +1 (786) 496-1231
              </span>
            </Link>
          </div>
        </div>

        <div className="relative z-30 flex w-full translate-y-0 justify-center self-end lg:absolute lg:bottom-0 lg:right-[18px] lg:w-auto">
          <Image
            src="/landing-page/image 52.png"
            width={623}
            height={559}
            className="h-auto w-full max-w-[320px] object-contain sm:max-w-[420px] md:max-w-[500px] lg:w-[520px] lg:max-w-none"
            alt="Picture of the author"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
};

export default PublishYourStory;
