import Link from "next/link";
import { robotoMono } from "../fonts";

// components/QuoteBanner.tsx
export default function QuoteBanner() {
  return (
    <section className="flex w-full items-center justify-center bg-[#F6F5F3] px-4 py-7 sm:px-6 md:py-8 lg:px-0 lg:py-10">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center rounded-lg bg-[#F4F3E1] px-4 py-7 shadow-none sm:px-6 sm:py-8 md:px-8 lg:mx-8 lg:rounded-3xl lg:px-4 lg:py-10">
        <p className="mb-2 text-center text-md font-semibold leading-snug text-[#DADD39] sm:text-[17px] md:text-xl">
          Let your words inspire the world
        </p>
        <h2 className="mb-3 max-w-[22rem] text-center text-[21px] font-semibold leading-[1] text-[#222] sm:max-w-[34rem] sm:text-[24px] md:max-w-[44rem] md:text-[28px] lg:mb-3 lg:max-w-none lg:text-[30px] lg:leading-[1]">
          Let the Ink founders take the hassle out by simplifying the
          <br className="hidden lg:block" /> publishing process for you
        </h2>
        <p
          className={`mx-auto mb-5 max-w-[28rem] text-center text-[12px] leading-[1.35] text-gray-700 sm:text-[13px] md:max-w-[42rem] md:text-[15px] lg:mb-4 ${robotoMono.className}`}
        >
          With the partnership of Ink Founders, focus on your story and let them
          handle the editing. Witness our Uniqueness
        </p>
        <div className="flex w-full flex-row items-center justify-center gap-3 sm:w-auto sm:gap-4">
          {/* Get a Quote */}
          <Link href="/contactus" className="w-full max-w-[180px] sm:w-auto sm:max-w-none">
            <button
              type="button"
              className="
	      btn-slide-bg
	      w-full
	      bg-[#DADD39] 
	      text-black 
	      font-medium 
	      rounded-md
	      px-4 py-2 text-sm
	      md:px-8 md:py-1 md:text-lg
	      border border-[#DADD39]
	      transition-all duration-300
	      shadow-none
	      overflow-hidden
	      hover:border-black
	    "
            >
              {/* Sliding background */}
              <span className="slide-bg"></span>
              {/* Button content */}
              <span className="relative z-10">Get a Quote</span>
            </button>
          </Link>
	
	
          {/* Live Chat */}
          {/* <Link href="/contactus">
	  <button
	    className="
	      border border-black 
      text-black 
      font-medium 
      rounded-[10px] 
      px-5 py-2 text-base
      md:px-8 md:py-3 md:text-lg
      transition hover:bg-[#DADD39] hover:border-[#DADD39]
      shadow-none
    "
    type="button"
	  >
	    Live Chat
	  </button>
	</Link> */}
        </div>

      </div>
    </section>
  );
}
