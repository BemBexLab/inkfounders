"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/service" },
  { label: "Our Book", href: "/ourbook" },
  { label: "Our Publishing", href: "/ourpublishing" },
  { label: "Who we are", href: "/whoweare" },
  { label: "Contact Us", href: "/ContactUs" },
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
            alt="Bembex Logo"
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
      <Link href="/ContactUs">
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
          className="text-black px-4 py-2 text-3xl"
        >
          {menuOpen ? "✕ " : "☰ "}
        </button>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-#F4F3E1/95 backdrop-blur-md px-4 py-6 flex flex-col gap-4 z-40 lg:hidden shadow-lg border-t border-[[#DADD39]]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)} // close menu on click
              className={`text-base ${
                pathname === item.href
                  ? "text-[#DADD39] font-semibold underline underline-offset-4"
                  : "text-black"
              } hover:text-red-400 transition`}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile CTA */}
          <button className="mt-4 rounded-full px-6 py-3 border border-[#DADD39] text-black bg-[#DADD39] transition hover:bg-transparent hover:border-[1px] hover:border-black">
            Book a call →
          </button>
        </div>
      )}
    </header>
  );
}