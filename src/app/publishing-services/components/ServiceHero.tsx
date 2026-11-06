import Link from "next/link";
import { robotoMono } from "@/app/fonts";
import ServiceHeroActions from "./ServiceHeroActions";

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

            <ServiceHeroActions />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
