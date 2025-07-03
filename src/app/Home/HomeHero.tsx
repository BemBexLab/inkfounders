"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { robotoMono } from "@/app/fonts";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";

const bookImages = [
  "/Home/bookslidetest/ChatGPT Image Jul 3, 2025, 04_31_44 AM 1.png",
  "/Home/bookslidetest/image 73.png",
  "/Home/bookslidetest/image 75.png",
  "/Home/bookslidetest/ChatGPT Image Jul 3_ 2025_ 04_00_28 AM 4.png"

];

const HomeHero = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startTransition = () => {
      setIsTransitioning(true);
      animationRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % bookImages.length);
        setIsTransitioning(false);
      }, 500); // Matches animation duration
    };

    const interval = setInterval(() => {
      startTransition();
    }, 2200);

    return () => {
      clearInterval(interval);
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#F4F3E1] rounded-bl-[100px]">
      <style jsx global>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideOut {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        
        .slide-in {
          animation: slideIn 0.5s ease-in-out forwards;
        }
        
        .slide-out {
          animation: slideOut 0.5s ease-in-out forwards;
        }
      `}</style>

      <div className="relative z-10 w-full max-w-[1450px] mx-auto lg:mt-5 mt-40">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-12 lg:gap-0">
          {/* Left Side */}
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start px-4 md:px-1 w-full md:ml-20">
            <div className="max-w-xl relative w-full">
              <div className="absolute -top-2 -right-4 md:-top-6 md:-right-5 z-20">
                <div className="w-15 h-15 md:w-24 md:h-24 relative">
                  <Image
                    src="/Home/make your Life Easy.png"
                    alt="Circular Make Your Mark"
                    fill
                    className="object-cover max-md:mr-5"
                    priority
                  />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-[48px] font-semibold leading-tight text-black mb-6 text-left lg:text-left">
                <span className="whitespace-nowrap">
                  Bring Your Story To Life
                </span>
                <br />
                With Ink Founders Publishing
              </h1>
              <p
                className={`text-gray-700 ${robotoMono.className} text-[15px] mb-8 leading-loose text-left md:text-center lg:text-left`}
              >
                Ink Founders is an independent self-publishing platform
                dedicated to empowering authors with a full suite of digital
                services. From idea to publication, we support you at every
                stage of your self-publishing journey. Let&apos;s bring your
                book to life—reach out to us today.
              </p>
              <Link href="/contactus">
                <button
                  type="button"
                  className="btn-slide-bg flex items-center gap-2 bg-[#DADD39] text-black font-normal px-5 py-2 rounded-md shadow self-start md:self-center lg:self-start border border-transparent hover:border-black transition-all duration-300"
                >
                  <span className="slide-bg rounded-md"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    <IoMdCall size={18} className="md:w-5 md:h-5 w-4 h-4" />
                    Request a Call
                  </span>
                </button>
              </Link>
            </div>
          </div>
          {/* Right Side with responsive background and book */}
          <div className="flex-1 flex items-center justify-center px-4 md:px-8 w-full lg:ml-5 lg:mt-20 relative max-lg:mb-5">
            {/* Responsive background image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <Image
                src="/Home/bookslidetest/Ellipse 2.png"
                alt="Decorative background"
                width={200}
                height={200}
                className="object-contain w-[380px] h-[380px] xs:w-[420px] xs:h-[420px] sm:w-[480px] sm:h-[480px] md:w-[480px] md:h-[480px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] 2xl:w-[600px] 2xl:h-[600px]"
                priority={false}
                draggable={false}
              />
            </div>
            {/* Book slider on top */}
            <div className="flex items-center justify-center w-full relative z-10">
              <div
                className="relative w-[350px] h-[350px] sm:w-[440px] sm:h-[440px] md:w-[440px] md:h-[440px] lg:w-[330px] lg:h-[440px] xl:w-[500px] xl:h-[500px] 2xl:w-[570px] 2xl:h-[570px] transition-all flex items-center justify-center p-2 overflow-hidden"
              >
                {/* Current Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={bookImages[current]}
                    alt="Book Cover"
                    fill
                    className={`object-contain z-10 ${isTransitioning ? "slide-out" : ""}`}
                    priority
                    style={{
                      objectFit: "contain",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </div>

                {/* Next Image */}
                {isTransitioning && (
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={bookImages[(current + 1) % bookImages.length]}
                      alt="Book Cover"
                      fill
                      className="object-contain z-20 slide-in"
                      style={{
                        objectFit: "contain",
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;