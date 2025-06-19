"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaHome,
  FaCog,
  FaBook,
  FaUpload,
  FaInfoCircle,
  FaUserCircle,
  FaTimes,
} from "react-icons/fa";

// Desktop labels & links must match mobile navItems!
const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/service" },
  { label: "Our Book", href: "/ourbook" },
  { label: "Our Publishing", href: "/ourpublishing" },
  { label: "Who we are", href: "/whoweare" },
  { label: "Contact Us", href: "/contactus" },
];

// Mobile icons in order, matching screenshot
const navItemsMobile = [
  {
    label: "Home",
    href: "/",
    icon: <FaHome size={22} />,
  },
  {
    label: "Services",
    href: "/service",
    icon: <FaCog size={20} />,
  },
  {
    label: "Our Book",
    href: "/ourbook",
    icon: <FaBook size={22} />,
  },
  {
    label: "Our Publishing",
    href: "/ourpublishing",
    icon: <FaUpload size={20} />,
  },
  {
    label: "Who we are",
    href: "/whoweare",
    icon: <FaInfoCircle size={20} />,
  },
  {
    label: "Contact Us",
    href: "/contactus",
    icon: <FaUserCircle size={20} />,
  },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent px-4 md:px-20 py-8 flex justify-between items-center">
      {/* 🔰 Logo */}
      <Link href='/'>
        <div className="flex items-center gap-2 ml-2 md:ml-6">
          <Image
            src="/Header/inkfounder.png"
            alt="Ink Founders Logo"
            width={130}
            height={50}
          />
        </div>
      </Link>

      {/* 🌐 Desktop Nav Links */}
      <div className="hidden lg:block">
        <nav className="relative rounded-full px-6 md:px-10 py-3 flex gap-4 md:gap-8 items-center  z-50">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[16px] whitespace-nowrap ${
                pathname === item.href
                  ? "text-[#DADD39] font-semibold underline underline-offset-[10px]"
                  : "text-black"
              } hover:text-[#DADD39] transition`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* 🚀 CTA Button (hidden on xs) */}
      <Link href="/contactus">
        <div className="hidden lg:flex">
          <button className="text-black px-6 py-2 border-[#DADD39] rounded-[10px] bg-[#DADD39] flex items-center gap-2 transition hover:bg-transparent hover:border-[1px] hover:border-black">
            Request a Quote
          </button>
        </div>
      </Link>

      {/* 📱 Mobile Menu Button */}
      <div className="block lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#DADD39] px-4 py-2 text-3xl"
          aria-label="Open menu"
        >
          {menuOpen ? <FaTimes /> : <span>☰</span>}
        </button>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-start px-8 py-8 gap-3 lg:hidden transition-all">
          {/* Close button (top right) */}
          <button
            className="absolute top-8 right-8 text-[#DADD39] text-3xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          {/* Nav */}
          <ul className="flex flex-col gap-4 mt-8 w-full">
            {navItemsMobile.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-4 py-1 px-1 text-lg rounded-md transition
                    ${
                      pathname === item.href
                        ? "text-[#DADD39] font-semibold"
                        : "text-gray-500"
                    }`}
                >
                  <span
                    className={`${
                      pathname === item.href
                        ? "text-[#DADD39]"
                        : "text-gray-400"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={`tracking-wide ${
                      pathname === item.href
                        ? "text-[#DADD39] font-semibold"
                        : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <button className="mt-8 rounded-full px-6 py-3 border border-[#DADD39] text-black bg-[#DADD39] transition hover:bg-transparent hover:border-black font-semibold">
            Book a call →
          </button>
        </div>
      )}
    </header>
  );
}
