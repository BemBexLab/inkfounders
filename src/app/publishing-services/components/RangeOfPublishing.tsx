import { robotoMono } from "@/app/fonts";
import Image from "next/image";


export default function RangeOfPublishing() {
  return (
    <section className="w-full bg-[#F6F5F3] px-4 py-8 sm:px-6 md:px-8 md:py-10 lg:px-6 lg:py-5">
	  <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:gap-10">
    
    {/* Content */}
	    <div className="contents lg:block lg:max-w-2xl">
	      <h2 className="order-1 mb-0 w-full max-w-3xl text-center text-[24px] font-semibold leading-[1.05] text-black md:text-[27px] lg:order-none lg:mb-2 lg:text-left">
        A Range of Publishing Services
      </h2>
	      <div className={`order-3 w-full max-w-3xl space-y-4 text-center text-[13px] leading-[1.35] text-gray-700 sm:text-[14px] md:text-[15px] lg:order-none lg:space-y-6 lg:text-left lg:text-[15px] lg:leading-tight ${robotoMono.className}`}>
        <p>
          At Ink Founder, we offer a wide array of services—including editing, design, and marketing support—to prepare your book for publication. Every step of the way, we prioritize preserving your unique voice and creative vision.
        </p>
       
      </div>
    </div>
    {/* Book Cover */}
	    <div className="order-2 flex w-full flex-shrink-0 justify-center lg:order-none lg:w-auto">
      <Image
        src="/Service/image 95.webp"
        alt="Book Cover"
        width={440}
        height={740}
	        className="h-auto w-[min(82vw,340px)] lg:w-[440px]"
        priority
      />
    </div>
  </div>
</section>


  );
}
