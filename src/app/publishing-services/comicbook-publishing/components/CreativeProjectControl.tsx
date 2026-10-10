import { robotoMono } from "@/app/fonts";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

const services = [
  "Publishing preparation",
  "ISBN and barcode guidance",
  "Comic book formatting",
  "Cover design",
  "Print-on-demand preparation",
  "Digital publishing preparation",
  "Distribution preparation",
  "Marketing support",
];

export default function CreativeProjectControl() {
  return (
    <section className="w-full min-w-0 bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 xl:px-24 xl:py-24">
      <div className="mx-auto w-full max-w-7xl [overflow-wrap:anywhere]">
        {/* Responsive heading with a wrapping underline */}
        <header className="mb-8 text-center sm:mb-10 lg:mb-14 xl:mb-16">
          <h2 className="relative mx-auto w-fit max-w-full pb-2 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.4] tracking-tight text-gray-900 after:absolute after:bottom-0 after:left-1/2 after:h-[4px] after:w-[80%] after:-translate-x-1/2 after:bg-[#DADD39] after:content-['']">
              Self-Publish Your Comic Book
          </h2>
        </header>

        <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Mobile: proportional image. Desktop: match content height. */}
          <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-xl shadow-sm sm:rounded-2xl lg:aspect-auto lg:min-h-[400px]">
            <Image
              src="/comic-book/Rectangle 14 (6).svg"
              alt="Person browsing books in a bookstore"
              fill
              sizes="(min-width: 1472px) 608px, (min-width: 1280px) calc(50vw - 128px), (min-width: 1024px) calc(50vw - 72px), (min-width: 768px) calc(100vw - 64px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex w-full min-w-0 flex-col justify-center space-y-4 text-sm leading-6 text-gray-600 sm:space-y-5 sm:text-base sm:leading-7">
            <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-tight tracking-tight text-gray-900">
              Keep Control of Your Creative Project
            </h3>

            <div className={`${robotoMono.className} space-y-3 sm:space-y-4`}>
              <p>
                Many independent creators choose to self publish because they want
                greater control over their story, artwork, branding, and publishing
                decisions.
              </p>

              <p>
                But self-publishing doesn&apos;t mean you have to manage every
                technical step yourself.
              </p>
            </div>

            <div>
              <p className={`${robotoMono.className} mb-3 font-medium text-gray-800`}>
                Ink Founders can provide professional support with:
              </p>

              <ul className="space-y-1.5 sm:space-y-2 lg:space-y-2.5">
                {services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <FaCircleCheck
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-[18px] text-[#DADD39]"
                    />

                    <span className={`${robotoMono.className} min-w-0 flex-1`}>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className={`${robotoMono.className}`}>
              You maintain control of your creative project while our team helps
              with the professional and technical side of preparing it for
              publication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
