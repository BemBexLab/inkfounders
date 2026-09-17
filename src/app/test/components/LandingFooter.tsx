"use client"

import { robotoMono } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import QuoteTrigger from "../../book-publishing/components/QuoteTrigger";

const LandingFooter = () => {
  return (
    <footer className="w-full bg-[#f5f4df] pt-[42px] sm:pt-[50px] md:pt-[64px] lg:pt-[50px]">
      <div className="relative overflow-visible rounded-tr-[58px] bg-[#DADD39] sm:rounded-tr-[72px] md:rounded-tr-[88px] lg:min-h-[648px] lg:rounded-tr-[92px]">
        <div className="grid w-full grid-cols-1 items-stretch lg:min-h-[648px] lg:grid-cols-2">
          <div className="footer-image-frame relative order-2 z-20 min-h-[315px] overflow-visible sm:min-h-[420px] md:min-h-[500px] lg:col-start-1 lg:row-start-1 lg:order-1 lg:min-h-[648px]">
            <Image
              src="/landing-page/Background.webp"
              width={1768}
              height={1597}
              alt="Ink Founders publishing team"
              className="absolute bottom-0 left-1/2 h-auto w-[112vw] max-w-[560px] -translate-x-1/2 object-contain sm:max-w-[700px] md:max-w-[820px] lg:left-0 lg:w-[57vw] lg:max-w-[870px] lg:translate-x-0"
            />
          </div>

          <div className="relative order-1 z-30 px-5 pb-10 pt-14 text-center sm:px-8 sm:pb-12 sm:pt-16 md:pb-14 md:pt-20 lg:col-start-2 lg:row-start-1 lg:order-2 lg:flex lg:min-h-[648px] lg:flex-col lg:items-start lg:justify-start lg:px-0 lg:pb-0 lg:pl-[10px] lg:pr-[28px] lg:pt-[133px] lg:text-left xl:pr-[36px]">
            {/* <p
              className={`mx-auto mt-[18px] max-w-[620px] text-[15px] leading-[1.85] tracking-[0.08em] text-[#191919] sm:text-[17px] md:max-w-[720px] font-semibold md:text-[18px] lg:mx-0 lg:mt-[15px] lg:max-w-[750px] lg:text-[20px] lg:leading-[1.8] ${robotoMono.className}`}
            >
              Any Query?
            </p> */}

            <h2 className="mx-auto max-w-[660px] mt-1 text-[32px] font-medium leading-[1.18] tracking-[0.02em] uppercase text-[#191919] sm:text-[42px] md:text-[50px] lg:mx-0 lg:max-w-[775px] lg:text-[31px] xl:text-[46px] plus-jakarta">
              Take the First Real Step Toward Seeing Your Book Published and In Readers’ Hands
            </h2>

            <p
              className={`mx-auto mt-[18px] max-w-[620px] text-[15px] text-[#191919] sm:text-[17px] md:max-w-[720px] md:text-[18px] lg:mx-0 lg:mt-[15px] lg:max-w-[750px] lg:text-[20px] poppins`}
            >
              Stop second-guessing and start moving your book forward. We will reach out within 24 hours for a real conversation about your goals and how to bring your book to life.
            </p>

            <div className="mt-[32px] flex justify-center sm:mt-[38px] lg:mt-[40px] lg:justify-start">
              <QuoteTrigger
                className="btn-slide-bg bg-gradient-to-r from-[#1F1F1F] to-[#333333] flex h-[48px] min-w-[190px] items-center justify-center rounded-[8px] border border-black bg-black px-5 text-[15px] font-medium text-white transition-all duration-300 hover:border-black hover:text-black sm:h-[52px] sm:min-w-[202px] sm:text-base lg:h-13 lg:text-md"
              >
                <span className="slide-bg" />
                <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                  Request a Quote
                </span>
              </QuoteTrigger>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 1024px) {
          .footer-image-frame {
            clip-path: inset(-160px 0 0 0);
          }
        }
      `}</style>
    </footer>
  );
};

export default LandingFooter;
