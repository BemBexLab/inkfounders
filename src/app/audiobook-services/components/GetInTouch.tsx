"use client";

import { robotoMono } from "@/app/fonts";
import React, { useState } from "react";

interface FormDataType {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

interface GetInTouchData {
  title: string;
  description: string | React.ReactNode; // string will be split on newlines, ReactNode used directly
}

interface GetInTouchProps {
  data?: GetInTouchData;
}

const GetInTouch = ({ data }: GetInTouchProps) => {
  // fall back to a minimal object; we still hardcode the subheading below
  const content: GetInTouchData = data || {
    title: "Have Questions? Need Guidance?",
    description: "",
  };
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    if (!formData.consent) {
      setError("Please provide consent to communicate.");
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

      if (response.ok) {
        setSuccess("Thank you! Your message has been received.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          consent: false,
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
  return (
    <div className="w-full bg-white px-4 py-10 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 lg:flex-row lg:items-start lg:gap-16">
        {/* Left Section */}
        <div className="w-full max-w-2xl flex-1 text-center lg:max-w-none lg:text-left">
          <h2 className="mb-3 text-[22px] font-medium leading-[1.08] text-[#d4d946] sm:text-[25px] md:text-[27px] lg:leading-[1]">
            {content.title}
          </h2>
          {/* subheading left fixed as per request */}
          <h3 className="mb-3 text-[20px] font-semibold leading-tight text-[#1a1a1a] sm:text-[22px] md:text-[25px]">
            Let's Talk
          </h3>

          <div
            className={`site-global-copy mb-6 text-[#333333] md:mb-8 ${robotoMono.className}`}
          >
            {typeof content.description === "string" ? (
              content.description.split("\n").map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <div>{content.description}</div>
            )}
          </div>

          {/* Contact Options */}
          <div className="mx-auto mt-8 grid max-w-[420px] grid-cols-1 gap-4 text-left md:max-w-none md:grid-cols-2 lg:mx-0">
            {/* Phone */}
            <div className="flex min-w-0 items-center gap-3">
              <div className="shrink-0 rounded-xl bg-[#d4d946] p-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  className="h-5 w-5"
                >
                  <path
                    d="M20.2282 21.2883C18.1249 21.2883 16.0467 20.8299 13.9938 19.9132C11.941 18.9965 10.0732 17.6964 8.39048 16.0131C6.70778 14.3297 5.40807 12.4619 4.49134 10.4097C3.57461 8.35749 3.11591 6.27937 3.11523 4.17533C3.11523 3.87245 3.2162 3.62004 3.41812 3.41812C3.62004 3.2162 3.87245 3.11523 4.17533 3.11523H8.26427C8.49985 3.11523 8.71019 3.19533 8.89528 3.35552C9.08038 3.51572 9.18975 3.70485 9.22341 3.92293L9.87966 7.45658C9.91331 7.72581 9.9049 7.95297 9.85442 8.13807C9.80394 8.32317 9.71139 8.48302 9.57677 8.61764L7.12846 11.0912C7.46499 11.7138 7.86447 12.3152 8.32687 12.8954C8.78927 13.4756 9.29846 14.0352 9.85442 14.5744C10.3761 15.096 10.9229 15.5799 11.495 16.0262C12.0672 16.4724 12.6729 16.8803 13.3124 17.2499L15.6849 14.8773C15.8364 14.7258 16.0343 14.6124 16.2786 14.537C16.5229 14.4616 16.7625 14.4404 16.9974 14.4734L20.4806 15.1801C20.7162 15.2474 20.9097 15.3696 21.0611 15.5466C21.2126 15.7236 21.2883 15.9212 21.2883 16.1393V20.2282C21.2883 20.5311 21.1874 20.7835 20.9854 20.9854C20.7835 21.1874 20.5311 21.2883 20.2282 21.2883Z"
                    fill="white"
                  />
                </svg>
              </div>
              <a
                href="tel:+17866526864"
                className={`min-w-0 break-words font-mono text-[13px] font-medium leading-tight text-[#333333] hover:underline focus:outline-none sm:text-[14px] md:text-base ${robotoMono.className}`}
              >
                (786) 652-6864
              </a>
            </div>

            {/* Email */}
            <div className="flex min-w-0 items-center gap-3">
              <div className="shrink-0 rounded-xl bg-[#d4d946] p-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  className="h-5 w-5"
                >
                  <path
                    d="M20.1926 4.03809H4.03876C2.92818 4.03809 2.02963 4.94674 2.02963 6.05732L2.01953 18.1727C2.01953 19.2833 2.92818 20.1919 4.03876 20.1919H20.1926C21.3032 20.1919 22.2118 19.2833 22.2118 18.1727V6.05732C22.2118 4.94674 21.3032 4.03809 20.1926 4.03809ZM20.1926 8.07655L12.1157 13.1246L4.03876 8.07655V6.05732L12.1157 11.1054L20.1926 6.05732V8.07655Z"
                    fill="white"
                  />
                </svg>
              </div>
              <a
                href="mailto:info@inkfounders.com"
                className={`min-w-0 break-words font-mono text-[13px] font-medium leading-tight text-[#333333] hover:underline focus:outline-none sm:text-[14px] md:text-base ${robotoMono.className}`}
              >
                info@inkfounders.com
              </a>
            </div>

            {/* Location */}
            <div className="flex min-w-0 items-center gap-3">
              <div className="shrink-0 rounded-xl bg-[#d4d946] p-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  className="h-5 w-5"
                >
                  <path
                    d="M12.1152 11.6109C11.4457 11.6109 10.8037 11.345 10.3304 10.8716C9.85705 10.3983 9.59112 9.75626 9.59112 9.08684C9.59112 8.41742 9.85705 7.77542 10.3304 7.30207C10.8037 6.82872 11.4457 6.5628 12.1152 6.5628C12.7846 6.5628 13.4266 6.82872 13.8999 7.30207C14.3733 7.77542 14.6392 8.41742 14.6392 9.08684C14.6392 9.4183 14.5739 9.74652 14.4471 10.0527C14.3202 10.359 14.1343 10.6372 13.8999 10.8716C13.6655 11.106 13.3873 11.2919 13.0811 11.4187C12.7748 11.5456 12.4466 11.6109 12.1152 11.6109ZM12.1152 2.01953C10.2408 2.01953 8.44319 2.76412 7.11782 4.0895C5.79244 5.41487 5.04785 7.21247 5.04785 9.08684C5.04785 14.3873 12.1152 22.2118 12.1152 22.2118C12.1152 22.2118 19.1825 14.3873 19.1825 9.08684C19.1825 7.21247 18.4379 5.41487 17.1125 4.0895C15.7871 2.76412 13.9895 2.01953 12.1152 2.01953Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span
                className={`${robotoMono.className} min-w-0 break-words font-mono text-[13px] font-medium leading-tight text-[#333333] sm:text-[14px] md:text-base`}
              >
                1221 Brickell Ave, Miami, FL 33131, United States
              </span>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full max-w-2xl flex-1 rounded-lg bg-[#F4F3E1] px-4 py-6 sm:px-5 sm:py-7 md:px-6 md:py-8 lg:max-w-none lg:px-10 lg:py-10">
          <h3 className="mb-5 text-[20px] font-bold leading-tight text-black md:mb-6 md:text-2xl">
            Get In Touch Now!
          </h3>

          <form onSubmit={handleSubmit}>
            {/* First Name & Last Name */}
            <div className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="rounded-md border-0 bg-[#EDECDA] p-2.5 text-sm text-[#333333] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#d4d946] md:p-3 md:text-base"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="rounded-md border-0 bg-[#EDECDA] p-2.5 text-sm text-[#333333] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#d4d946] md:p-3 md:text-base"
                required
              />
            </div>

            {/* Email & Phone */}
            <div className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="rounded-md border-0 bg-[#EDECDA] p-2.5 text-sm text-[#333333] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#d4d946] md:p-3 md:text-base"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="rounded-md border-0 bg-[#EDECDA] p-2.5 text-sm text-[#333333] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#d4d946] md:p-3 md:text-base"
                required
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="mb-4 w-full resize-none rounded-md border-0 bg-[#EDECDA] p-2.5 text-sm text-[#333333] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#d4d946] md:p-3 md:text-base"
              required
            />

            {/* Checkbox */}
            <div className="mb-6 flex items-start gap-2">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleCheckboxChange}
                className="mt-1 h-5 w-5 cursor-pointer"
                required
              />
              <label
                htmlFor="consent"
                className={`${robotoMono.className} cursor-pointer text-[11px] leading-snug text-[#9D9F9D] sm:text-xs`}
              >
                Please check the box to communicate via SMS or Email (Terms &
                Conditions & Privacy Policy) - Carrier charges may apply for
                SMS. Reply STOP or UNSUBSCRIBE to STOP to unsubscribe anytime
              </label>
            </div>

            {/* Error Message */}
            {error && <div className="mt-4 text-red-600">{error}</div>}

            {/* Success Message */}
            {success && <div className="mt-4 text-green-600">{success}</div>}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`${robotoMono.className} rounded-md bg-[#d4d946] px-4 py-1.5 text-sm font-medium text-[#1a1a1a] transition-colors hover:bg-[#c5ca3e] disabled:cursor-not-allowed disabled:opacity-50 md:px-6 md:py-2 md:text-base`}
            >
              {loading ? "Sending..." : "Let's Get Started"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
