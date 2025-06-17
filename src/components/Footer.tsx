import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { robotoMono } from "@/app/fonts";
import Link from "next/link";

export default function Footer() {
  return (
    <>
  <footer className="bg-[#F4F3E1] px-6 py-12 rounded-tr-[100px]">
    <div className="max-w-7xl mx-auto">
      <div
        className="
          grid grid-cols-1
          lg:[grid-template-columns:3fr_1fr_1fr_1fr]
          gap-0
        "
      >
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-center lg:items-start text-center md:text-center lg:text-left mb-8 lg:mb-0">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image
              src="/Header/inkfounder.png"
              alt="Ink Founders Logo"
              width={180}
              height={90}
              className="mb-4"
              priority
            />
          </div>
          <p className={`text-[12px] text-[#444444] ${robotoMono.className} leading-relaxed max-w-[450px]`}>
            Ink Founder is an independent publishing partner offering a
            comprehensive suite of digital services—including book publishing,
            children’s books, ghostwriting, illustration, book marketing,
            cover design, author websites, and more. We help bring your story
            to life with creative, professional support every step of the way.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-center lg:items-start text-center md:text-center lg:text-left mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold text-[#DADD39] mb-4">
            Quick Links
          </h3>
          

<ul className="space-y-2">
  <li><Link href="/"><span className="text-black hover:text-[#DADD39] text-sm">Home</span></Link></li>
  <li><Link href="/service"><span className="text-black hover:text-[#DADD39] text-sm">Services</span></Link></li>
  <li><Link href="/ourbook"><span className="text-black hover:text-[#DADD39] text-sm">Our Books</span></Link></li>
  <li><Link href="/ourpublishing"><span className="text-black hover:text-[#DADD39] text-sm">Our Publishing</span></Link></li>
  <li><Link href="/whoweare"><span className="text-black hover:text-[#DADD39] text-sm">Who we are</span></Link></li>
  <li><Link href="/contactus"><span className="text-black hover:text-[#DADD39] text-sm">Contact Us</span></Link></li>
  <li><Link href="/terms"><span className="text-black hover:text-[#DADD39] text-sm">Terms</span></Link></li>
  <li><Link href="/privacy"><span className="text-black hover:text-[#DADD39] text-sm">Privacy</span></Link></li>
</ul>

        </div>

        {/* Our Services */}
        <div className="flex flex-col items-center md:items-center lg:items-start text-center md:text-center lg:text-left mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold text-[#DADD39] mb-4">
            Our Services
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-black hover:text-gray-900 text-sm">Book Publishing</a></li>
            <li><a href="#" className="text-black hover:text-gray-900 text-sm">Ebook Formatting</a></li>
            <li><a href="#" className="text-black hover:text-gray-900 text-sm">Childrens Book</a></li>
            <li><a href="#" className="text-black hover:text-gray-900 text-sm">Book Marketing</a></li>
            <li><a href="#" className="text-black hover:text-gray-900 text-sm">Barnes Noble Publishing</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-center md:items-center lg:items-start text-center md:text-center lg:text-left">
          <h3 className="text-lg font-semibold text-[#DADD39] mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-center lg:justify-start gap-3">
              <FaLocationDot className="w-5 h-5 text-black" />
              <span className="text-sm text-black">
                123 Main Street, City, Country
              </span>
            </li>
            <li className="flex items-center justify-center md:justify-center lg:justify-start gap-3">
  <IoMdCall className="w-5 h-5 text-black" />
  <a
    href="tel:+12292314003"
    className="text-sm text-gray-700 hover:underline focus:outline-none"
  >
    +1 (229)-231-4003
  </a>
</li>
<li className="flex items-center justify-center md:justify-center lg:justify-start gap-3">
  <MdEmail className="w-5 h-5 text-black" />
  <a
    href="mailto:info@inkfounders.com"
    className="text-sm text-black hover:underline focus:outline-none"
  >
    info@inkfounders.com
  </a>
</li>

          </ul>
        </div>
      </div>
    </div>
  </footer>
  {/* Copyright */}
  <div className="bg-[#EEEEEE]">
    <p className="text-center text-sm text-black py-5">
      © 2025 Ink Founders All rights reserved.
    </p>
  </div>
</>

  );
}
