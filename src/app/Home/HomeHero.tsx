"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { robotoMono } from "@/app/fonts";
import { IoMdCall } from "react-icons/io";
import { MdOutlineRequestQuote } from "react-icons/md";
import { Check, X } from "lucide-react";
import { SiTrustpilot } from "react-icons/si";

type ConsultationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
};

type TrustBadge = {
  title: string;
  subtitle: string;
  src: string | React.ReactNode;
  link?: string;
};

const bookImages = [
  "/Home/updatedImages/Stephen 1.webp",
  "/Home/updatedImages/Jim Fritz 1.webp",
  "/Home/updatedImages/Allison 1.webp",
  "/Home/updatedImages/Bee 1.webp",
];

const trustBadges: TrustBadge[] = [
  {
    title: "Trustpilot",
    subtitle: "Review",
    src: "/Home/trustpilot-logo-1024x443.png.webp",
    link: "https://www.trustpilot.com/review/inkfounders.com",
  },
  {
    title: "Top Digital",
    subtitle: "Agency",
    src: "/Home/Mask%20group.png",
    link: "#",
  },
];

const HomeHero = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<ConsultationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startTransition = () => {
      setIsTransitioning(true);
      animationRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % bookImages.length);
        setIsTransitioning(false);
      }, 500);
    };

    const interval = setInterval(() => {
      startTransition();
    }, 2200);

    return () => {
      clearInterval(interval);
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isConsultationOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isConsultationOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsConsultationOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: event.target.checked }));
  };

  const closeConsultation = () => {
    setIsConsultationOpen(false);
    setError(null);
    setSuccess(null);
  };

  const handleConsultationSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!formData.email.trim() && !formData.phone.trim()) {
      setError("Please provide at least an email or a phone number.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(
          result.error || "Something went wrong. Please try again.",
        );
      }

      setSuccess("Thank you! Your consultation request has been received.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
      });
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Network error. Please try again later.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden rounded-bl-[36px] bg-[#F4F3E1] sm:rounded-bl-[56px] lg:rounded-bl-[100px]">
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

      <div className="relative z-10 mx-auto mt-24 w-full max-w-[1450px] px-4 sm:mt-28 sm:px-6 md:mt-32 md:px-8 lg:mt-5 lg:px-0 lg:pb-0">
        <div className="flex min-h-[auto] flex-col items-center justify-between gap-10 sm:gap-12 lg:min-h-screen lg:flex-row lg:gap-0">
          <div className="flex flex-1 flex-col items-center justify-center px-0 md:ml-0 md:px-1 lg:items-start xl:ml-20">
            <div className="relative w-full max-w-xl">
              <h1 className="mb-5 text-center text-[clamp(1.5rem,5vw,3rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-black sm:mb-6 md:text-left">
                <span className="inline-flex justify-center whitespace-nowrap">
                  <span>Bring Your Story To&nbsp;</span>
                  <span className="relative inline-block pr-4 sm:pr-8 md:pr-10">
                    Life
                    <span className="pointer-events-none absolute right-0 -top-4 h-10 w-10 sm:right-0 sm:-top-6 sm:h-16 sm:w-16 md:-right-2 md:-top-10 md:h-24 md:w-24">
                      <Image
                        src="/Home/make your Life Easy.png"
                        alt="Circular Make Your Mark"
                        fill
                        sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 96px"
                        className="object-contain object-center"
                        priority
                      />
                    </span>
                  </span>
                </span>
                <span className="mx-auto block max-w-[12ch] pr-0 sm:max-w-[15ch] sm:pr-10 md:mx-0 md:max-w-none md:pr-0">
                  <span className="inline-flex flex-wrap justify-center md:justify-start">
                    <span className="whitespace-nowrap">With Ink Founders</span>
                    <span className="whitespace-nowrap">Publishing</span>
                  </span>
                </span>
              </h1>

              <p
                className={`mb-8 max-w-[62ch] text-center text-[clamp(0.92rem,3.2vw,0.95rem)] leading-tight text-gray-700 md:text-left lg:text-left ${robotoMono.className}`}
              >
                Ink Founders is an independent self-publishing platform
                dedicated to empowering authors with a full suite of digital
                services. From idea to publication, we support you at every
                stage of your self-publishing journey. Let&apos;s bring your
                book to life. Reach out to us today.
              </p>

              <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                <a href="tel:+17864961231">
                  <button
                    type="button"
                    className="btn-slide-bg flex w-full items-center justify-center rounded-md border border-transparent bg-[#DADD39] px-5 py-3 font-normal text-black shadow transition-all duration-300 hover:border-black sm:w-auto"
                  >
                    <span className="slide-bg rounded-md"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      <IoMdCall size={18} className="h-4 w-4 md:h-5 md:w-5" />
                      Request a Call
                    </span>
                  </button>
                </a>

                <button
                  type="button"
                  onClick={() => setIsConsultationOpen(true)}
                  className="btn-slide-bg flex w-full items-center justify-center rounded-md border border-black bg-transparent px-5 py-3 font-normal text-black shadow transition-all duration-300 hover:border-[#DADD39] sm:w-auto"
                >
                  <span className="slide-bg rounded-md bg-[#DADD39]"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    <MdOutlineRequestQuote
                      size={18}
                      className="h-4 w-4 md:h-5 md:w-5"
                    />
                    Get Free Consultation
                  </span>
                </button>
              </div>

              <div className="py-5 text-black">
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-start">
                  {trustBadges.map((badge) => {
                    const isExternal = badge.link?.startsWith("http");

                    return (
                      <a
                        key={`${badge.title}-${badge.subtitle}`}
                        href={badge.link || "#"}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="group flex h-[84px] w-[160px] shrink-0 items-center justify-center rounded-[22px] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] sm:h-[96px] sm:w-[200px]"
                        aria-label={`${badge.title} ${badge.subtitle}`}
                      >
                        {typeof badge.src === "string" ? (
                          <Image
                            src={badge.src}
                            alt={`${badge.title} ${badge.subtitle}`}
                            width={150}
                            height={64}
                            className="h-auto max-h-[52px] w-auto max-w-[120px] object-contain object-center transition duration-300 group-hover:brightness-105 sm:max-h-[64px] sm:max-w-[150px]"
                          />
                        ) : (
                          <div className="flex h-[84px] w-[160px] items-center justify-center rounded-[22px] border border-[#d8d4be] bg-[#f1eedf] px-4 py-3 text-[28px] text-[#1f1f1f] shadow-[0_8px_18px_rgba(77,70,40,0.05)] transition duration-300 group-hover:border-[#c9c29f] group-hover:shadow-[0_12px_24px_rgba(77,70,40,0.08)] sm:h-[96px] sm:w-[200px] sm:px-5 sm:py-4 sm:text-[34px]">
                            {badge.src}
                          </div>
                        )}
                      </a>
                    );
                  })}
                </div>

                {/* <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-[#d8d4be] pt-4 text-left">
                  <span className="text-[16px] font-semibold text-[#1f1f1f] sm:text-[18px]">
                    Rated 9 out of 10
                  </span>
                  <span className="whitespace-nowrap text-[18px] tracking-[0.2em] text-[#DADD39] sm:text-[20px]">
                    ★★★★★
                  </span>
                  <span className="text-[15px] text-[#3d3a2c] sm:text-[17px]">
                    based on 3,543 satisfied customers.
                  </span>
                </div> */}
              </div>
            </div>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-2 sm:px-4 md:px-8 lg:ml-5 lg:mt-20 max-lg:mb-5">
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
              <Image
                src="/Home/bookslidetest/Ellipse 2.png"
                alt="Decorative background"
                width={200}
                height={200}
                className="h-[280px] w-[280px] object-contain xs:h-[320px] xs:w-[320px] sm:h-[420px] sm:w-[420px] md:h-[480px] md:w-[480px] lg:h-[450px] lg:w-[450px] xl:h-[550px] xl:w-[550px] 2xl:h-[600px] 2xl:w-[600px]"
                priority={false}
                draggable={false}
              />
            </div>

            <div className="relative z-10 flex w-full items-center justify-center">
              <div className="relative flex h-[260px] w-[260px] items-center justify-center overflow-hidden p-2 transition-all xs:h-[320px] xs:w-[320px] sm:h-[400px] sm:w-[400px] md:h-[440px] md:w-[440px] lg:h-[440px] lg:w-[330px] xl:h-[500px] xl:w-[500px] 2xl:h-[570px] 2xl:w-[570px]">
                <div className="absolute inset-0 h-full w-full">
                  <Image
                    src={bookImages[current]}
                    alt="Book Cover"
                    fill
                    className={`object-contain ${isTransitioning ? "slide-out" : ""} z-10`}
                    priority
                    style={{
                      objectFit: "contain",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </div>

                {isTransitioning && (
                  <div className="absolute inset-0 h-full w-full">
                    <Image
                      src={bookImages[(current + 1) % bookImages.length]}
                      alt="Book Cover"
                      fill
                      className="slide-in z-20 object-contain"
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

      <div
        className={`fixed inset-0 z-[70] flex items-center justify-center bg-black/45 px-4 transition-all duration-300 ${
          isConsultationOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeConsultation}
      >
        <div
          className={`w-full max-w-2xl rounded-[28px] border border-[#ece9df] bg-[#F6F5F3] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.2)] transition-all duration-300 sm:p-7 ${
            isConsultationOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-6 scale-95 opacity-0"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#8a7a2e]">
                Free Consultation
              </p>
              <h2 className="text-2xl font-semibold text-black sm:text-3xl">
                Tell us about your book
              </h2>
              <p
                className={`${robotoMono.className} mt-3 max-w-xl text-[13px] leading-6 text-[#5b5b52] sm:text-[14px]`}
              >
                Share your project details and we&apos;ll reach out with the
                right guidance for your publishing journey.
              </p>
            </div>

            <button
              type="button"
              onClick={closeConsultation}
              className="rounded-full border border-[#ddd9c6] p-2 text-[#333] transition hover:border-black hover:bg-white"
              aria-label="Close consultation form"
            >
              <X size={18} />
            </button>
          </div>

          <form onSubmit={handleConsultationSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="rounded-xl border border-[#e5e1d2] bg-[#eeeddc] px-4 py-3 text-sm text-black outline-none transition focus:border-[#DADD39]"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="rounded-xl border border-[#e5e1d2] bg-[#eeeddc] px-4 py-3 text-sm text-black outline-none transition focus:border-[#DADD39]"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="rounded-xl border border-[#e5e1d2] bg-[#eeeddc] px-4 py-3 text-sm text-black outline-none transition focus:border-[#DADD39]"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="rounded-xl border border-[#e5e1d2] bg-[#eeeddc] px-4 py-3 text-sm text-black outline-none transition focus:border-[#DADD39]"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your book, goals, or questions"
              rows={5}
              className="w-full rounded-xl border border-[#e5e1d2] bg-[#eeeddc] px-4 py-3 text-sm text-black outline-none transition focus:border-[#DADD39]"
            />

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={loading}
                className="btn-slide-bg flex items-center justify-center gap-2 rounded-md border border-[#DADD39] bg-[#DADD39] px-5 py-3 font-medium text-black transition-all duration-300 hover:border-black disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span className="slide-bg rounded-md"></span>
                <span className="relative z-10">
                  {loading ? "Sending..." : "Submit Consultation Request"}
                </span>
              </button>

              {(success || error) && (
                <p
                  className={`text-sm ${
                    success ? "text-green-700" : "text-red-600"
                  }`}
                >
                  {success || error}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
