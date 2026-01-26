"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  FaHome,
  FaCog,
  FaBook,
  FaInfoCircle,
  FaUserCircle,
  FaTimes,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/service" },
  { label: "Our Book", href: "/ourbook" },
  { label: "Who we are", href: "/whoweare" },
  { label: "Contact Us", href: "/contactus" },
];

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
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  // Track scroll direction to show or hide the header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[#F4F3E1]  px-4 md:px-10 2xl:px-20 py-8 flex justify-between items-center transition-all duration-300 ${
        showHeader ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 🔰 Logo */}
<Link href="/">
  <div className="flex items-center gap-2 ml-2 md:ml-6">
    <video width="130" height="50" autoPlay loop muted>
      <source src="/logovideo/inkfounder_logo_animate.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</Link>


      {/* 🌐 Desktop Nav Links */}
      <div className="hidden lg:block">
        <nav className="relative rounded-full px-6 md:px-10 py-3 flex gap-4 2xl:gap-8 items-center z-50">
          {navItems.map((item) =>
            item.href === "/service" ? (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`text-[14px] 2xl:text-[16px] whitespace-nowrap ${
                    pathname === item.href
                      ? "text-[#DADD39] font-semibold underline underline-offset-[10px]"
                      : "text-black"
                  } hover:text-[#DADD39] transition`}
                >
                  {item.label}
                </Link>

                {/* Dropdown on hover (desktop) */}
                <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-100 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-1 transition-all">
                  <div className="py-2">
                    <Link
                      href="/service/ebook-writing"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {}}
                    >
                      E-Book Writing
                    </Link>
                    <Link
                      href="/service/ebook-publishing"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      E-Book Publishing
                    </Link>
                    <Link
                      href="/service/ebook-cover-design"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      E-Book Cover Design
                    </Link>
                    <Link
                      href="/service/editing-and-proofreading"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Editing & Proofreading
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[14px] 2xl:text-[16px] whitespace-nowrap ${
                  pathname === item.href
                    ? "text-[#DADD39] font-semibold underline underline-offset-[10px]"
                    : "text-black"
                } hover:text-[#DADD39] transition`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>

      <a href="tel:+17865244161" className=" items-center gap-3 group hidden lg:flex">
        <div className="rounded-full bg-primary border-primary w-8 h-8 2xl:w-14 2xl:h-14 flex items-center justify-center shake-pause group-hover:bg-primary/80 transition ">
          <div className="text-white flex items-center justify-center bg-[#DADD39] rounded-full px-3 py-3">
            <IoCall size={30} />
          </div>
        </div>
        <span className="text-[14px] 2xl:text-base text-black font-semibold text-primary group-hover:underline">
          +1 (786) 524-4161
        </span>
      </a>

      <Link href="/contactus">
        <div className="hidden lg:flex">
          <button
            type="button"
            className="btn-slide-bg text-black px-4 py-2 lg:px-2 lg:py-2  2xl:px-6 2xl:py-2 border border-[#DADD39] rounded-[10px] bg-[#DADD39] flex items-center gap-2 transition-all duration-300 hover:border-black"
          >
            <span className="slide-bg"></span>
            <span className="relative z-10">Request a Quote</span>
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
          <button
            className="absolute top-8 right-8 text-[#DADD39] text-3xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col gap-4 mt-8 w-full">
            {navItemsMobile.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-4 py-1 px-1 text-lg rounded-md transition
                    ${pathname === item.href ? "text-[#DADD39] font-semibold" : "text-gray-500"}`}
                >
                  <span
                    className={`${
                      pathname === item.href ? "text-[#DADD39]" : "text-gray-400"
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

          {/* Shaking Call Button */}
          <a href="tel:+17865244161" className=" items-center gap-5 group flex px-6 pt-5">
            <div className="rounded-full bg-primary border-primary w-8 h-8 2xl:w-14 2xl:h-14 flex items-center justify-center shake-pause group-hover:bg-primary/80 transition ">
              <div className="text-white flex items-center justify-center bg-[#DADD39] rounded-full px-3 py-3">
                <IoCall size={30} />
              </div>
            </div>
            <span className="text-base text-black font-semibold text-primary group-hover:underline">
              +1 (786) 524-4161
            </span>
          </a>

          {/* Mobile CTA */}
          <Link
            href="/contactus"
            onClick={() => setMenuOpen(false)}
            className="mt-8 rounded-full px-6 py-3 border border-[#DADD39] text-black bg-[#DADD39] transition hover:bg-transparent hover:border-black font-semibold block text-center"
          >
            Book a call →
          </Link>
        </div>
      )}
    </header>
  );
}
