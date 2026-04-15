import { robotoMono } from "@/app/fonts";
import Image from "next/image";

export default function TheMind() {
  return (
    <section className="w-full bg-[#F6F5F3] px-4 py-8 sm:px-6 md:px-8 md:py-10 lg:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 lg:flex-row lg:gap-10">
        {/* Book Cover */}
        <div className="order-2 flex w-full flex-shrink-0 justify-center lg:order-none lg:w-auto">
          <Image
            src="/Service/Keith Cuvo 1.webp"
            alt="Book Cover"
            width={280}
            height={540}
            className="h-auto w-[min(64vw,260px)] transform transition-transform duration-300 hover:scale-105 lg:w-[280px] lg:hover:translate-x-2 lg:hover:translate-y-2 lg:hover:rotate-3"
            priority
          />
        </div>

        {/* Content */}
        <div className="contents lg:block lg:max-w-2xl">
          <h2 className="order-1 mb-2 w-full max-w-3xl text-center text-[24px] font-semibold leading-[1.05] text-black md:text-[27px] lg:order-none lg:mb-3 lg:text-left">
            What Makes Our Book Publishing Services Stand Out?
          </h2>

          <div className="order-3 w-full max-w-3xl text-center lg:order-none lg:max-w-none lg:text-left">
            <div
              className={`${robotoMono.className} mb-4 space-y-4 text-[13px] leading-[1.35] text-gray-700 sm:text-[14px] md:text-[15px] lg:space-y-6 lg:text-[16px] lg:leading-loose`}
            >
              <p>
                From ghostwriting to editing and publishing, we offer end-to-end
                support tailored to your vision. Whether you need help shaping
                your story or perfecting your manuscript, our experienced team
                is here to guide you. At Ink Founders, we're committed to
                quality, creativity, and client success, turning your ideas into
                a professionally published book.
              </p>
            </div>

            <h3 className="mb-1 text-center text-xl font-normal text-black lg:mb-2 lg:text-left">
              Why Authors Choose Us:
            </h3>

            <ul
              className={`${robotoMono.className} mx-auto w-fit max-w-full list-outside list-disc pl-5 text-left text-[13px] leading-[1.45] text-[#444444] sm:text-[14px] md:text-[15px] lg:mx-0 lg:w-full lg:max-w-none lg:list-inside lg:pl-0 lg:leading-loose`}
            >
              <li>Excellence in Every Detail</li>
              <li>On-Time Delivery, Every Time</li>
              <li>Client-Centered Experience</li>
              <li>100% Ownership & Rights</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
