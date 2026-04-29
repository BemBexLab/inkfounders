"use client";

import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const fieldClass =
  "w-full rounded-[9px] bg-[#dfdecc] px-8 py-4 text-[16px] text-[#3f3f3f] outline-none placeholder:text-[#70777a] focus:ring-2 focus:ring-[#DADD39] sm:py-[18px]";

const popupImages = [
  "/landing-page/Group 26.png",
  "/landing-page/Group 26 (1).png",
  "/landing-page/Stephen 1.png",
];

type QuoteFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const splitFullName = (name: string) => {
  const [firstName = "", ...lastNameParts] = name.trim().split(/\s+/);

  return {
    firstName,
    lastName: lastNameParts.join(" ") || "Not provided",
  };
};

export default function QuotePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(popupImages[0]);
  const [form, setForm] = useState<QuoteFormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest("a, button");

      const href = trigger?.getAttribute("href");
      const buttonText = trigger?.textContent?.toLowerCase() || "";
      const shouldOpen =
        href === "#quote-popup" || buttonText.includes("request a quote");

      if (!shouldOpen) {
        return;
      }

      event.preventDefault();
      setActiveImage(
        popupImages[Math.floor(Math.random() * popupImages.length)],
      );
      setIsOpen(true);
    };

    const handleHashOpen = () => {
      if (window.location.hash !== "#quote-popup") {
        return;
      }

      setActiveImage(
        popupImages[Math.floor(Math.random() * popupImages.length)],
      );
      setIsOpen(true);
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("hashchange", handleHashOpen);
    handleHashOpen();

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("hashchange", handleHashOpen);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const { firstName, lastName } = splitFullName(form.name);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSuccess("Thank you! Your message has been received.");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        const result = await response.json();
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  const isStephenPopup = activeImage === "/landing-page/Stephen 1.png";

  const formFields = (
    <>
      <p
        id="quote-popup-title"
        className="mb-7 pr-8 text-center font-mono text-[18px] leading-[1.45] tracking-[0.05em] text-[#9a9a9a]"
      >
        Fill out this brief form to get your
        <br />
        <span className="font-bold uppercase text-[#3f3f3f]">
          Discount Reserved
        </span>
      </p>

      <div className="space-y-3">
        <input
          className={fieldClass}
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className={fieldClass}
          type="tel"
          name="phone"
          placeholder="Enter Phone number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          className={fieldClass}
          type={isStephenPopup ? "text" : "email"}
          name="email"
          placeholder={isStephenPopup ? "Message" : "Enter Email"}
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className={`${fieldClass} min-h-[106px] resize-none`}
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-[18px] rounded-[9px] bg-[#DADD39] px-6 py-[13px] text-[16px] font-medium text-black transition hover:bg-[#cbd022] disabled:opacity-70"
      >
        {loading ? "Sending..." : "Let\u2019s Get Started"}
      </button>

      {success && (
        <div className="mt-4 text-center text-sm text-green-600">
          {success}
        </div>
      )}
      {error && (
        <div className="mt-4 text-center text-sm text-red-600">{error}</div>
      )}
    </>
  );

  if (isStephenPopup) {
    return (
      <div
        className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 px-3 py-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-popup-title"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            setIsOpen(false);
          }
        }}
      >
        <div className="relative flex w-full max-w-[970px] flex-col items-center justify-center md:min-h-[620px]">
          <img
            src={activeImage}
            alt="Don't Cut the Grass on Sunday book cover"
            className="relative z-20 h-auto w-full max-w-[417px] rounded-[3px] object-contain shadow-[0_18px_45px_rgba(0,0,0,0.45)] md:absolute md:left-0 md:top-0 md:h-[612px] md:w-[417px] md:max-w-none"
          />

          <form
            className="relative z-10 mt-[-14px] flex w-full max-w-[528px] flex-col justify-center rounded-[18px] bg-white px-6 py-10 shadow-2xl sm:px-10 md:absolute md:right-[22px] md:top-[54px] md:mt-0 md:min-h-[513px] md:w-[527px] md:max-w-none md:px-[49px] md:py-9 md:pl-[48px] md:pr-[38px]"
            onSubmit={handleSubmit}
          >
            <button
              type="button"
              aria-label="Close popup"
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-4 z-20 flex h-9 w-9 items-center justify-center text-[42px] font-light leading-none text-black transition hover:opacity-65"
            >
              &times;
            </button>

            {formFields}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 px-3 py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-popup-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div className="relative grid w-full max-w-[946px] overflow-hidden rounded-[18px] bg-white shadow-2xl md:min-h-[513px] md:grid-cols-[45%_55%]">
        <button
          type="button"
          aria-label="Close popup"
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-4 z-20 flex h-9 w-9 items-center justify-center text-[42px] font-light leading-none text-black transition hover:opacity-65"
        >
          &times;
        </button>

        <div className="flex min-h-[280px] items-center justify-center bg-[#F4F3E1] px-6 py-8 md:min-h-full md:px-10">
          <img
            src={activeImage}
            alt="Book fair discount"
            className="h-auto w-full max-w-[360px] object-contain md:max-w-[390px]"
          />
        </div>

        <form
          className="flex flex-col justify-center px-6 py-10 sm:px-10 md:px-10 md:py-9"
          onSubmit={handleSubmit}
        >
          {formFields}
        </form>
      </div>
    </div>
  );
}
