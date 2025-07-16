"use client";

import type React from "react";
import { useState } from "react";
import { Check } from "lucide-react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { robotoMono } from "../fonts";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
};

export default function GetInTouch() {
  const [formData, setFormData] = useState<FormData>({
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    <div className="w-full md:py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 max-md:mt-14">
        {/* Left Column */}
        <div className="flex-1">
          <h2 className="text-[#DADD39] font-medium text-[23px] md:text-[27px] mb-1">
            Let us know if anything needed.
            Searching of any guidance from  an
            expert?
          </h2>
          <h3 className="text-[21px] md:text-[25px] font-semibold mb-6 text-black">
            Have a conversation
          </h3>

          <p
            className={`text-gray-700 text-[12px] md:text-[15px] mb-8 leading-loose ${robotoMono.className}`}
          >
            You have taken a step towards the journey of success in
            self-publishing but still have a lot to ask? And searching for an
            expert’s guidance who can help you in bring your ideas, and voice to
            the reality, but haven’t found anyone, then you are at the right
            place Ink Founders is for you.
          </p>

          <p
            className={`text-gray-700 text-[12px] md:text-[15px] mb-8 leading-loose ${robotoMono.className}`}
          >
            Ink Founders provide a free discussion opportunity where you can
            clear your doubts, share your story ideas or concepts, and get the
            exploration trip to examine our services clearly and can find out
            how we can provide you with the best by turning your words into a
            book form. So, let’s take a step and join us today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="flex items-center gap-3">
              <div className="bg-[#DADD39] rounded-xl p-2 text-white">
                <IoMdCall size={20} />
              </div>
              <a
                href="tel:+17862899498"
                className="text-base text-gray-800 font-medium font-mono hover:underline focus:outline-none"
              >
                +1 (786) 289-9498
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#DADD39] rounded-xl p-2 text-white">
                <MdEmail size={20} />
              </div>
              <a
                href="mailto:info@inkfounders.com"
                className="text-base text-gray-800 font-medium font-mono hover:underline focus:outline-none"
              >
                info@inkfounders.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#DADD39] rounded-xl p-2 text-white">
                <FaLocationDot size={20} />
              </div>
              <span className="text-base text-gray-800 font-medium font-mono">
                1680 Michigan Ave 700 326 Miami Beach, FL 33139, USA
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex-1 bg-[#F4F3E1] px-10 py-10 rounded-2xl">
          <form onSubmit={handleSubmit}>
            <h2 className="text-[15px] md:text-2xl font-bold mb-6 text-black">
              Get In Touch Now!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="bg-[#EDECDA] text-[#9D9F9D] p-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#d4d450]"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="bg-[#EDECDA] text-[#9D9F9D] p-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#d4d450]"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="bg-[#EDECDA] text-[#9D9F9D] p-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#d4d450]"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="bg-[#EDECDA] text-[#9D9F9D] p-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#d4d450]"
                required
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="w-full bg-[#EDECDA] text-[#9D9F9D] p-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#d4d450] mb-4"
              required
            />

            {/* Custom Checkbox with Label */}
            <div className="flex items-start gap-2 mb-6">
              <label className="flex items-start gap-2 cursor-pointer select-none">
                <span className="mt-1">
                  <span
                    className={`w-5 h-5 border ${
                      formData.consent
                        ? "bg-[#d4d450] border-[#d4d450]"
                        : "border-gray-300"
                    } rounded flex items-center justify-center transition-colors duration-150`}
                  >
                    {formData.consent && (
                      <Check size={16} className="text-white" />
                    )}
                  </span>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleCheckboxChange}
                    className="sr-only"
                    required
                  />
                </span>
                <span
                  className={`text-xs text-gray-600 ${robotoMono.className}`}
                >
                  Please check the box to communicate via SMS or Email (Terms &
                  Conditions & Privacy Policy) - Carrier charges may apply for
                  SMS. Reply STOP or UNSUBSCRIBE to STOP to unsubscribe anytime
                </span>
              </label>
            </div>

            <button
              type="submit"
              className={`
    btn-slide-bg
    bg-[#DADD39] 
    text-gray-800 
    font-medium 
    py-1.5 px-4 text-sm
    md:py-2 md:px-6 md:text-base
    rounded-md 
    border-[1px] border-[#DADD39]
    transition-all duration-300
    overflow-hidden
    hover:border-black
  `}
              disabled={loading}
            >
              {/* Sliding background */}
              <span className="slide-bg"></span>
              {/* Text content stays above the background */}
              <span className="relative z-10">
                {loading ? "Sending..." : "Let's Get Started"}
              </span>
            </button>

            {/* Success/Error messages */}
            {success && <div className="text-green-600 mt-4">{success}</div>}
            {error && <div className="text-red-600 mt-4">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
