"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { FaLock, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { GoArrowDown, GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { IoFlameSharp } from "react-icons/io5";
import { RiPhoneFill } from "react-icons/ri";
import { BOOKS } from "@/app/ourbook/components/BookGallery";

const benefits = [
  "Your book published in 6 languages for global reach.",
  "Worldwide distribution to Amazon & 99 marketplaces",
  "Print-on-demand, eBook and audiobook",
  "Marketing Assistance, led by book marketing Professionals",
  "Your book featured on Times Square billboard",
];

const budgetOptions = [
  "$500 - $1,500",
  "$1,500 - $3,000",
  "$3,000 - $5,000",
  "$5,000+",
];

const timelineOptions = [
  "Immediately",
  "Within 30 days",
  "1 - 3 months",
  "Just exploring",
];

const genreOptions = [
  "Fiction",
  "Non-fiction",
  "Memoir",
  "Business",
  "Self-help",
  "Children's book",
  "Other",
];

const avatarColors = ["#ed795c", "#5e94e8", "#7fc789", "#dfc25a", "#ce84ad"];
const progressFieldNames = [
  "fullName",
  "email",
  "phone",
  "budget",
  "timeline",
  "genre",
];
const publishedAuthorsTarget = 1000;
const platformsTarget = 40;
const animatedBooks = BOOKS;

const animatedBookRows = Array.from(
  { length: Math.ceil(animatedBooks.length / 2) },
  (_, rowIndex) => animatedBooks.slice(rowIndex * 2, rowIndex * 2 + 2),
);

type FormStatus = "idle" | "submitting" | "success" | "error";

type SubmitApiResponse = {
  success?: boolean;
  error?: string;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.09,
    },
  },
};

const riseVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
};

const formVariants: Variants = {
  hidden: { opacity: 0, x: 34, scale: 0.98, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
  },
};

function AnimatedBookCovers() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 hidden min-h-screen overflow-hidden lg:block"
      aria-hidden="true"
    >
      <div className="absolute bottom-0 left-[calc(50%+0px)] top-0 w-[760px] origin-top-left rotate-[-10deg]">
        <motion.div
          className="relative top-6 flex flex-col"
          animate={{ y: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              className="grid shrink-0 grid-cols-[185px_185px] grid-rows-[repeat(4,278px)] gap-x-10 gap-y-[56px]"
            >
              {animatedBookRows.flat().map((book) => (
                <div
                  key={`${copyIndex}-${book.title}`}
                  className="relative h-[278px] w-[185px] overflow-hidden rounded-[6px]"
                >
                  <Image
                    src={book.cover}
                    alt=""
                    fill
                    sizes="190px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-white/15" />
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  onValueChange,
  type = "text",
  wide = false,
  required = true,
}: {
  label: string;
  name: string;
  placeholder: string;
  onValueChange: (name: string, value: string) => void;
  type?: string;
  wide?: boolean;
  required?: boolean;
}) {
  return (
    <motion.label
      className={wide ? "md:col-span-2" : ""}
      variants={riseVariants}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18 }}
    >
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#777777] lg:mb-[6px] lg:text-sm">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        onChange={(event) => onValueChange(name, event.currentTarget.value)}
        className="h-12 w-full rounded-[10px] border border-[#8e8e8e] bg-[#fdfdfb] px-4 text-sm text-[#222] outline-none transition placeholder:text-[#b8b8b3] hover:border-[#bfc300] focus:border-[#bfc300] [word-spacing:0.3em] focus:bg-white focus:ring-4 focus:ring-[#d9e35a]/20 lg:h-[48px] lg:px-[12px] lg:text-[13px]"
      />
    </motion.label>
  );
}

function SelectField({
  label,
  name,
  placeholder,
  options,
  resetKey,
  idPrefix,
  onValueChange,
  wide = false,
  required = true,
}: {
  label: string;
  name: string;
  placeholder: string;
  options: string[];
  resetKey: number;
  idPrefix: string;
  onValueChange: (name: string, value: string) => void;
  wide?: boolean;
  required?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const inputId = `${idPrefix}-${name}-dropdown`;

  useEffect(() => {
    setSelected("");
    setOpen(false);
  }, [resetKey]);

  return (
    <motion.div
      className={`relative ${open ? "z-50" : "z-0"} ${wide ? "md:col-span-2" : ""}`}
      variants={riseVariants}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
    >
      <span className="mb-2 block text-xs font-black font-semibold uppercase tracking-[0.16em] text-[#777777] lg:mb-[6px] lg:text-sm">
        {label}
      </span>
      <input
        id={inputId}
        type="hidden"
        name={name}
        value={selected}
        required={required}
      />
      <motion.button
        type="button"
        aria-controls={`${inputId}-menu`}
        aria-expanded={open}
        className="flex h-12 w-full items-center justify-between rounded-[10px] border border-[#8e8e8e] bg-[#fdfdfb] px-4 text-left text-sm text-black outline-none transition duration-200 hover:border-[#bfc300] hover:bg-white focus:border-[#bfc300] focus:bg-white focus:ring-4 focus:ring-[#d9e35a]/20 lg:h-[48px] lg:px-[12px] lg:text-[13px]"
        onClick={() => setOpen((current) => !current)}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.99 }}
      >
        <span>{selected || placeholder}</span>
        <GoArrowDown
          className={`shrink-0 text-lg transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={`${inputId}-menu`}
          className="absolute left-0 right-0 top-[calc(100%+8px)] z-[999] overflow-hidden rounded-[12px] border border-[#e5e5e5] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.14)]"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {options.map((option, index) => (
              <motion.button
                key={option}
                type="button"
                className="block w-full px-4 py-3 text-left text-sm text-black transition hover:bg-[#f5f5f3] focus:bg-[#f5f5f3] focus:outline-none"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.025, duration: 0.18 }}
                onMouseDown={(event) => {
                  event.preventDefault();
                }}
                onClick={() => {
                  setSelected(option);
                  onValueChange(name, option);
                  setOpen(false);
                }}
              >
                {option}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

async function submitApplication(formData: FormData) {
  const fullName = String(formData.get("fullName") || "").trim();
  const [firstName = "", ...lastNameParts] = fullName.split(/\s+/);
  const lastName = lastNameParts.join(" ") || "Not provided";
  const budget = String(formData.get("budget") || "").trim();
  const timeline = String(formData.get("timeline") || "").trim();
  const genre = String(formData.get("genre") || "").trim();

  const response = await fetch("/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName,
      lastName,
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      message: [
        "Book publishing consultation request",
        `Budget: ${budget || "Not provided"}`,
        `Timeline: ${timeline || "Not provided"}`,
        `Book genre: ${genre || "Not provided"}`,
      ].join("\n"),
    }),
  });

  const result = (await response.json().catch(() => ({}))) as SubmitApiResponse;

  if (!response.ok) {
    throw new Error(result.error || "Something went wrong. Please try again.");
  }
}

function ApplicationForm({
  buttonLabel,
  onSuccess,
}: {
  buttonLabel: string;
  onSuccess?: () => void;
}) {
  const idPrefix = useId().replace(/:/g, "");
  const [submitStatus, setSubmitStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [dropdownResetKey, setDropdownResetKey] = useState(0);
  const [progressValues, setProgressValues] = useState<Record<string, string>>(
    {},
  );

  function handleProgressChange(name: string, value: string) {
    setProgressValues((current) => ({
      ...current,
      [name]: value.trim(),
    }));
  }

  const completedFields = progressFieldNames.filter(
    (fieldName) => progressValues[fieldName],
  ).length;
  const progressUnits = (completedFields / progressFieldNames.length) * 3;
  const getSegmentFill = (index: number) =>
    Math.max(0, Math.min(1, progressUnits - index));

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitStatus("submitting");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await submitApplication(formData);
      setSubmitStatus("success");
      setStatusMessage("Thanks. Your request has been sent.");
      form.reset();
      setProgressValues({});
      setDropdownResetKey((key) => key + 1);
      onSuccess?.();
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <>
      <motion.div
          className="mt-[24px]"
        variants={riseVariants}
        role="progressbar"
        aria-label="Application progress"
        aria-valuemin={0}
        aria-valuemax={progressFieldNames.length}
        aria-valuenow={completedFields}
      >
        <div className="grid grid-cols-3 gap-[4px]">
          {[0, 1, 2].map((segment) => (
            <span
              key={segment}
                className="h-[4px] overflow-hidden rounded-full bg-[#ecece7]"
            >
              <motion.span
                className="block h-full origin-left rounded-full bg-[#c8d400]"
                initial={false}
                animate={{ scaleX: getSegmentFill(segment) }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </span>
          ))}
        </div>
      </motion.div>

      <motion.form
        className="plus-jakarta mt-[22px] grid grid-cols-1 gap-x-[14px] gap-y-[12px] md:grid-cols-2"
        onSubmit={handleSubmit}
        variants={containerVariants}
      >
        <Field
          wide
          label="Full Name"
          name="fullName"
          placeholder="Your full name"
          onValueChange={handleProgressChange}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@email.com"
          onValueChange={handleProgressChange}
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+1 (000) 000-0000"
          onValueChange={handleProgressChange}
        />
        {/* <SelectField
          label="Budget"
          name="budget"
          placeholder="Select range"
          resetKey={dropdownResetKey}
          idPrefix={idPrefix}
          onValueChange={handleProgressChange}
          required={false}
          options={budgetOptions}
        /> */}
        {/* <SelectField
          label="Timeline"
          name="timeline"
          placeholder="When?"
          resetKey={dropdownResetKey}
          idPrefix={idPrefix}
          onValueChange={handleProgressChange}
          required={false}
          options={timelineOptions}
        /> */}
        <SelectField
          wide
          label="Book Genre"
          name="genre"
          placeholder="Select genre"
          resetKey={dropdownResetKey}
          idPrefix={idPrefix}
          onValueChange={handleProgressChange}
          required={false}
          options={genreOptions}
        />

        <motion.button
          type="submit"
          disabled={submitStatus === "submitting"}
          className="mt-[3px] flex h-12 items-center justify-center gap-2 rounded-[9px] bg-gradient-to-r from-[#c8d400] to-[#eff66a] text-[11px] font-semibold uppercase tracking-[0.08em] text-black shadow-[0_8px_18px_rgba(190,204,0,0.18)] transition hover:brightness-[0.98] disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2 lg:h-[54px] lg:text-[15px] lg:tracking-[0.1em] poppins"
          variants={riseVariants}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {submitStatus === "submitting" ? (
            "Sending..."
          ) : (
            <>
              {buttonLabel}
              <GoArrowUpRight size={25} />
            </>
          )}
        </motion.button>

        {statusMessage && (
          <p
            className={`text-center text-[12px] font-bold md:col-span-2 ${
              submitStatus === "success" ? "text-[#149044]" : "text-red-600"
            }`}
          >
            {statusMessage}
          </p>
        )}
      </motion.form>
    </>
  );
}

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [publishedAuthorsCount, setPublishedAuthorsCount] = useState(0);
  const [platformsCount, setPlatformsCount] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      setPublishedAuthorsCount(publishedAuthorsTarget);
      setPlatformsCount(platformsTarget);
      return;
    }

    let animationFrame = 0;
    const duration = 1600;
    const startTime = performance.now();

    const animateCount = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setPublishedAuthorsCount(
        Math.round(publishedAuthorsTarget * easedProgress),
      );
      setPlatformsCount(Math.round(platformsTarget * easedProgress));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animateCount);
      }
    };

    animationFrame = window.requestAnimationFrame(animateCount);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [reduceMotion]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function closePopup() {
    setIsPopupOpen(false);
    if (
      typeof window !== "undefined" &&
      window.location.hash === "#quote-popup"
    ) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
  }

  const initialState = reduceMotion ? "show" : "hidden";

  return (
    <motion.section
      className="relative isolate min-h-screen overflow-x-clip bg-[#f8f8f6] text-[#17171a]"
      initial={initialState}
      animate="show"
      variants={containerVariants}
    >
      <motion.div
        className="pointer-events-none absolute right-0 top-0 z-0 hidden h-full w-[50%] rounded-bl-[32px] bg-[#f8f8f6] lg:block"
        initial={reduceMotion ? false : { opacity: 0, x: 80 }}
        animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      />

      <AnimatedBookCovers />

      <div className="relative z-10 grid min-h-screen w-full grid-cols-1 gap-10 px-4 pb-12 pt-[118px] min-[380px]:px-5 sm:px-8 sm:pt-[145px] lg:grid-cols-2 lg:items-start lg:gap-0 lg:px-0 lg:pb-[62px]">
        <motion.div
          className="mx-auto mt-10 flex w-full min-w-0 max-w-[660px] flex-col justify-start text-center lg:mx-0 lg:mt-[23px] lg:max-w-none lg:pl-[75px] lg:pr-0 lg:pt-[18px] lg:text-left xl:pr-0 2xl:pl-[75px] 2xl:pr-16"
          variants={containerVariants}
        >
          <motion.div
            className="mulish mx-auto mb-3 inline-flex h-[42px] w-fit max-w-full items-center rounded-[9px] bg-[#eef1d2] px-7 text-[20px] font-semibold leading-none tracking-normal text-[#282828] lg:mx-0 lg:py-0"
            variants={riseVariants}
            whileHover={{ y: -2, scale: 1.02 }}
          >
            Publishing Globally is a Legacy
          </motion.div>

          <motion.h1
            className="mx-auto plus-jakarta max-w-[650px] text-[clamp(2rem,9vw,3.25rem)] leading-[1.08] tracking-[-0.04em] font-medium uppercase text-[#151519] md:text-6xl lg:mx-0 lg:text-5xl lg:leading-[1.12] xl:text-[54px] xl:leading-[1.08] 2xl:text-[54px]"
            variants={riseVariants}
          >
            WE&apos;LL GET YOU INTO
            <br className="hidden lg:block" />
            <span className="relative inline-block">
              EVERY MARKET
              <span
                aria-hidden="true"
                className="absolute left-0 right-[-10px] top-[58%] h-[3px] -rotate-[3deg] bg-[#c8d400]"
              />
            </span>
            {/* <span className="text-[#bdd700]">{platformsCount}+ Platforms</span> */}
          </motion.h1>

          <motion.p
            className="plus-jakarta mx-auto mt-[15px] max-w-[855px] text-sm leading-[1.58] text-black sm:text-base lg:mx-0 lg:leading-[1.9] xl:text-lg [word-spacing:0.1em]"
            variants={riseVariants}
          >
            “A decade ago, taking a book global meant 6 figures and a 3 year wait.
            <br className="hidden lg:block" /> We rebuilt that process from the
            ground up every market” - INK CEO
          </motion.p>

          <motion.ul
            className="mx-auto mt-6 max-w-[560px] space-y-[16px] text-left lg:mx-0 lg:max-w-none"
            variants={containerVariants}
          >
            {benefits.map((benefit) => (
              <motion.li
                key={benefit}
                className="plus-jakarta flex items-start gap-[9px] text-sm font-medium leading-snug text-black sm:text-base xl:text-[17px]"
                variants={riseVariants}
                whileHover={{ x: 4 }}
              >
                <span className="mt-[-1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] bg-[#cfe000] text-[11px] text-black lg:h-5 lg:w-5 lg:text-[11px]">
                  <GiCheckMark />
                </span>
                {benefit}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-[26px] flex flex-col items-stretch gap-[13px] min-[460px]:flex-row min-[460px]:justify-center lg:justify-start"
            variants={riseVariants}
          >
            <button
              type="button"
              onClick={() => setIsPopupOpen(true)}
              className="poppins inline-flex h-[45px] min-w-0 items-center justify-center rounded-[6px] bg-gradient-to-r from-[#C8D400] to-[#F7FF77] px-[14px] text-xs font-medium uppercase text-black transition hover:bg-[#c3d300] min-[380px]:text-sm min-[460px]:min-w-[210px] min-[460px]:px-[18px] gap-1 lg:h-[53px] lg:min-w-[234px]"
            >
              APPLY NOW - FREE <GoArrowUpRight size={22} />
            </button>
            <Link
              href="tel:+17864961231"
              className="poppins inline-flex h-[45px] min-w-0 items-center justify-center rounded-[6px] border border-[#e5e5e5] bg-white px-[13px] text-sm font-medium text-[#222] transition hover:border-[#cbd600] min-[460px]:min-w-[180px] sm:text-base"
            >
              {/* <FaPhoneAlt className="mr-[10px] text-[14px]" /> */}
              <RiPhoneFill className="mr-[5px] text-[20px]" />
              +1 (786) 496-1231
            </Link>
          </motion.div>

          {/* <motion.div
            className="mx-auto mt-[29px] h-px w-2/3 origin-left bg-[#e7e7e7] lg:mx-0"
            variants={riseVariants}
          /> */}

          <motion.div
            className="mt-[34px] flex flex-col items-center gap-3 min-[460px]:flex-row min-[460px]:justify-center lg:justify-start"
            variants={riseVariants}
          >
            {/* <div className="flex -space-x-[5px]">
              {["G", "W", "J", "A", "R"].map((initial, index) => (
                <motion.span
                  key={initial}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white text-sm font-semibold text-white lg:h-[35px] lg:w-[35px] lg:text-[18px]"
                  style={{ backgroundColor: avatarColors[index] }}
                  whileHover={{ y: -3, scale: 1.08 }}
                >
                  {initial}
                </motion.span>
              ))}
            </div>
            <div className="text-center text-sm leading-[1.25] sm:text-base lg:text-left lg:text-[17px]">
              <div className="font-bold text-black">
                {new Intl.NumberFormat("en-US").format(publishedAuthorsCount)}+ Authors Published
              </div>
              <div className="text-[#777]">Real authors. Real results.</div>
            </div> */}

            <div className="flex items-center gap-6">
              <div className="flex flex-col items-start">
              <Image
                src="/Home/trustpilot-logo-1024x443.webp"
                width={180}
                height={78}
                className="h-auto w-[145px] object-contain"
                alt="Trustpilot"
              />
              </div>

              <div className="flex flex-col items-start">
              <Image
                src="/landing-page/pngwing.com (3) 1.png"
                width={154}
                height={45}
                className="h-auto w-[154px] object-contain"
                alt="Reviews.io"
              />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex w-full min-w-0 items-start justify-start bg-transparent lg:self-stretch lg:justify-start lg:px-8 lg:pt-[3px] xl:pl-3 xl:pr-0 2xl:px-[70px]"
          variants={containerVariants}
        >
          <motion.div
            className="relative z-10 w-full min-w-0 max-w-[720px] rounded-[20px] border border-[#e8e8e3] border-t-[3px] border-t-[#cddf00] bg-white px-4 pb-6 pt-5 shadow-[0_22px_55px_rgba(0,0,0,0.09)] min-[380px]:px-5 sm:px-6 sm:pb-8 sm:pt-7 lg:max-w-[620px] lg:px-5 lg:pb-7 lg:pt-6 xl:max-w-[632px] xl:px-6 xl:pb-8 xl:pt-7 2xl:max-w-[870px] 2xl:px-[34px] 2xl:pb-[36px] 2xl:pt-[30px]"
            variants={formVariants}
          >
            <motion.div
              className="flex min-h-[39px] flex-wrap items-center rounded-[7px] border border-[#ead28a] bg-[#fffdf5] px-3 py-2 text-[11px] font-semibold leading-tight text-[#8d6800] sm:px-4 sm:text-sm lg:px-3 xl:flex-nowrap xl:px-[16px] xl:py-0 2xl:h-[44px]"
              variants={riseVariants}
            >
              <span className="mr-[10px] text-[18px] text-[#7A5A00]">🔥</span>
              <span className="text-[#E53935]">7</span>
              <span className="ml-[3px] text-[#7A5A00]">
                free consultation spots left this week
              </span>
            </motion.div>

            <motion.div className="mt-5 lg:mt-[22px] xl:mt-[32px]" variants={riseVariants}>
              <h2 className="plus-jakarta text-3xl font-semibold leading-none tracking-[-0.04em] text-[#151515] sm:text-4xl lg:text-3xl xl:text-[34px]">
                APPLY NOW
              </h2>
              <p className="mt-[10px] text-sm text-[#777777] sm:text-base lg:text-sm xl:text-base [word-spacing:-0.2em]">
                Takes 60 seconds - Free - No obligation
              </p>
            </motion.div>

            <ApplicationForm buttonLabel="Apply Now - It's Free" />

            <motion.div
              className="my-[19px] flex items-center gap-[10px]"
              variants={riseVariants}
            >
              <span className="h-px flex-1 bg-[#787878]" />
              <span className="text-[11px] text-[#787878]">or</span>
              <span className="h-px flex-1 bg-[#787878]" />
            </motion.div>

            <motion.div
              variants={riseVariants}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="https://wa.me/17864961231"
              className="flex h-12 items-center justify-center rounded-[9px] border border-[#a9e5c3] bg-[#fcfffd] px-3 text-sm font-semibold text-[#00a13a] transition hover:bg-[#f2fff7] sm:text-base"
              >
                <FaWhatsapp className="mr-[7px] text-xl sm:text-2xl" />
                Chat on WhatsApp Now
              </Link>
            </motion.div>

            <motion.div
              className="mt-[21px] flex items-center justify-center text-center text-xs text-black sm:text-sm"
              variants={riseVariants}
            >
              <FaLock className="mr-[5px] text-sm text-[#787878]" />
              100% confidential · No spam · No obligation
            </motion.div>
          </motion.div>
         


        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[64px] bg-gradient-to-t from-white via-white/70 to-transparent"
      />

      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/65 px-4 py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closePopup();
              }
            }}
          >
            <motion.div
              className="relative w-full max-w-[860px] rounded-[24px] border border-[#ececec] border-t-[4px] border-t-[#cddf00] bg-white px-4 pb-6 pt-5 shadow-[0_24px_70px_rgba(0,0,0,0.25)] min-[380px]:px-5 sm:px-6 sm:pb-8 sm:pt-7 lg:px-8 lg:pb-9 lg:pt-7"
              initial={reduceMotion ? "show" : "hidden"}
              animate="show"
              exit={
                reduceMotion ? undefined : { opacity: 0, y: 16, scale: 0.98 }
              }
              variants={containerVariants}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="application-popup-title"
            >
              <button
                type="button"
                aria-label="Close application popup"
                onClick={closePopup}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full text-3xl leading-none text-[#4b4b4b] transition hover:bg-[#f5f5f3] hover:text-black"
              >
                &times;
              </button>

              {/* <motion.div
                className="flex min-h-[44px] flex-wrap items-center rounded-[7px] border border-[#e8c45a] bg-[#fffdf5] px-3 py-2 pr-12 text-[11px] font-semibold leading-tight text-[#a57100] sm:px-4 sm:text-sm lg:px-3 xl:flex-nowrap xl:px-[16px] xl:pr-[56px] 2xl:h-[44px] 2xl:py-0"
                variants={riseVariants}
              >
                <IoFlameSharp className="mr-[10px] text-[18px] text-[#7A5A00]" />
                <span className="text-[#E53935]">7</span>
                <span className="ml-[3px] text-[#7A5A00]">
                  free consultation spots left this week
                </span>
              </motion.div> */}

              <motion.div className="mt-5 lg:mt-[22px]" variants={riseVariants}>
                <h2
                  id="application-popup-title"
                  className="text-3xl font-black leading-none tracking-[-0.04em] text-[#151515] sm:text-4xl"
                >
                  Apply <span className="text-[#bfd700]">Now</span>
                </h2>
                <p className="mt-[10px] max-w-[540px] text-sm text-black sm:text-base">
                  Takes 60 seconds - Free - No obligation
                </p>
              </motion.div>

              <ApplicationForm
                buttonLabel="Apply Now - It's Free"
                onSuccess={() => {
                  window.setTimeout(() => {
                    closePopup();
                  }, 1200);
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Hero;
