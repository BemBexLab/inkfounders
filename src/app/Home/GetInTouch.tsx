"use client";

import type React from "react";

import { useState } from "react";
import { Check } from "lucide-react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { robotoMono } from "../fonts";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="w-full  py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-16">
        {/* Left Column */}
        <div className="flex-1">
          <h2 className="text-[#DADD39] font-medium text-[23px] md:text-[35px] mb-1">
            Have Questions? Need Guidance?
          </h2>
          <h3 className="text-[23px] md:text-[35px] font-semibold mb-6 text-black">Let&#39;s Talk</h3>

          <p className={`text-gray-700 text-[12px] md:text-[15px] mb-8 ${robotoMono.className}`}>
            Ready to begin your self-publishing journey but still have
            questions? Looking for expert advice to bring your vision to life?
            Ink Founder is here to help.
          </p>

          <p className={`text-gray-700 text-[12px] md:text-[15px] mb-8 ${robotoMono.className}`}>
            We offer a free consultation where you can share your book concept,
            explore our services in detail, and discover how we can support you
            in turning your manuscript into a published masterpiece. Reach out
            today—we&apos;re ready when you are.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="flex items-center gap-3">
              <div className="bg-[#37B22A] rounded-xl p-2 text-white">
                <IoMdCall size={20} />
              </div>
              <span className="text-base text-gray-800 font-medium font-mono">
                +1 (234) 567-8900
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#37B22A] rounded-xl p-2 text-white">
                <MdEmail size={20} />
              </div>
              <span className="text-base text-gray-800 font-medium font-mono">
                info@inkfounder.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#37B22A] rounded-xl p-2 text-white">
                <FaLocationDot size={20} />
              </div>
              <span className="text-base text-gray-800 font-medium font-mono">
                123 Book Lane, NY, USA
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
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="bg-[#EDECDA] text-[#9D9F9D] p-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#d4d450]"
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
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="bg-[#EDECDA] text-[#9D9F9D] p-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#d4d450]"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="w-full bg-[#EDECDA] text-[#9D9F9D] p-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#d4d450] mb-4"
            />

            <div className="flex items-start gap-2 mb-6">
              <div className="mt-1">
                <div
                  className={`w-5 h-5 border ${
                    formData.consent
                      ? "bg-[#d4d450] border-[#d4d450]"
                      : "border-gray-300"
                  } rounded flex items-center justify-center`}
                >
                  {formData.consent && (
                    <Check size={16} className="text-white" />
                  )}
                </div>
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleCheckboxChange}
                  className="sr-only"
                />
              </div>
              <label className={`text-xs text-gray-600 ${robotoMono.className}`}>
                Please check the box to communicate via SMS or Email (Terms &
                Conditions & Privacy Policy) - Carrier charges may apply for
                SMS. Reply STOP or UNSUBSCRIBE to STOP to unsubscribe anytime
              </label>
            </div>

            <button
  type="submit"
  className="
    bg-[#DADD39] 
    text-gray-800 
    font-medium 
    py-1.5 px-4 text-sm
    md:py-2 md:px-6 md:text-base
    rounded-md 
    transition 
    hover:bg-transparent 
    hover:border-[1px] 
    hover:border-black 
    border-[1px] 
    border-[#DADD39]
  "
>
  Let&apos;s Get Started
</button>

          </form>
        </div>
      </div>
    </div>
  );
}
