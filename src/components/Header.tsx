"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import {
  FaBook,
  FaChevronDown,
  FaCog,
  FaHome,
  FaInfoCircle,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

type NavChild = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  icon: ReactNode;
  desktopOnlyMenu?: boolean;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: <FaHome size={22} />,
  },
  {
    label: "Publishing Services",
    href: "/publishing-services",
    icon: <FaCog size={20} />,
    children: [
      {
        label: "E-Book Writing",
        href: "/publishing-services/ebook-writing",
      },
      {
        label: "E-Book Publishing",
        href: "/publishing-services/ebook-publishing",
      },
      {
        label: "E-Book Cover Design",
        href: "/publishing-services/ebook-cover-design",
      },
      {
        label: "Editing & Proofreading",
        href: "/publishing-services/editing-and-proofreading",
      },
    ],
  },
  {
    label: "Audiobook Services",
    href: "/audiobook-services",
    icon: <FaBook size={20} />,
    desktopOnlyMenu: true,
    children: [
      {
        label: "Audiobook Narration",
        href: "/audiobook-services/audiobook-narration",
      },
      {
        label: "Audiobook Editing",
        href: "/audiobook-services/audiobook-editing",
      },
      {
        label: "Audiobook Publishing",
        href: "/audiobook-services/audiobook-publishing",
      },
    ],
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
    label: "Blog",
    href: "/blog",
    icon: <FaInfoCircle size={20} />,
  },
  {
    label: "Contact Us",
    href: "/contactus",
    icon: <FaUserCircle size={20} />,
  },
];

const isActivePath = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (menuOpen || currentScrollY < 12) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setOpenMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky left-0 top-0 z-50 w-full bg-[#F4F3E1] px-4 py-4 transition-all duration-300 md:px-8 lg:px-10 xl:py-5 2xl:px-10 ${
        showHeader
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <video
              width="130"
              height="50"
              autoPlay
              loop
              muted
              playsInline
              className="h-auto w-[110px] sm:w-[120px] xl:w-[130px]"
            >
              <source
                src="/logovideo/inkfounder_logo_animate.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </Link>

        <div className="hidden xl:block">
          <nav className="relative z-50 flex items-center gap-10 rounded-full px-4 py-3 2xl:gap-15 2xl:px-10">
            {navItems.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              if (item.children?.length) {
                return (
                  <div key={item.href} className="group relative">
                    {item.desktopOnlyMenu ? (
                      <span
                        className={`cursor-default whitespace-nowrap text-[13px] transition hover:text-[#DADD39] 2xl:text-[16px] ${
                          isActive
                            ? "font-semibold text-[#DADD39] underline underline-offset-[10px]"
                            : "text-black"
                        }`}
                      >
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className={`whitespace-nowrap text-[13px] transition hover:text-[#DADD39] 2xl:text-[16px] ${
                          isActive
                            ? "font-semibold text-[#DADD39] underline underline-offset-[10px]"
                            : "text-black"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}

                    <div className="invisible absolute left-0 top-full mt-2 w-56 translate-y-1 rounded-md border border-gray-100 bg-white opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap text-[13px] transition hover:text-[#DADD39] 2xl:text-[16px] ${
                    isActive
                      ? "font-semibold text-[#DADD39] underline underline-offset-[10px]"
                      : "text-black"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <Link href="/contactus" className="hidden xl:flex">
          <button
            type="button"
            className="btn-slide-bg flex items-center gap-2 rounded-[10px] border border-[#DADD39] bg-[#DADD39] px-3 py-2 text-[13px] text-black transition-all duration-300 hover:border-black 2xl:px-6 2xl:text-base"
          >
            <span className="slide-bg"></span>
            <span className="relative z-10">Request a Quote</span>
          </button>
        </Link>

        <div className="block xl:hidden">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="px-4 py-2 text-3xl text-[#DADD39]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <FaTimes /> : <span>&#9776;</span>}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[60] flex min-h-screen flex-col items-start gap-3 overflow-y-auto bg-white px-6 py-8 xl:hidden"
        >
          <button
            className="absolute right-6 top-6 text-3xl text-[#DADD39]"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          <ul className="mt-10 flex w-full flex-col gap-2">
            {navItems.map((item) => {
              const isActive = isActivePath(pathname, item.href);
              const hasChildren = Boolean(item.children?.length);
              const isExpanded = openMobileSection === item.href;

              return (
                <li key={item.href} className="w-full border-b border-[#ece9df] pb-2">
                  <div className="flex items-center justify-between gap-3">
                    {item.desktopOnlyMenu ? (
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileSection((prev) =>
                            prev === item.href ? null : item.href,
                          )
                        }
                        className={`flex flex-1 items-center gap-4 rounded-md px-1 py-3 text-left text-lg transition ${
                          isActive ? "font-semibold text-[#DADD39]" : "text-gray-700"
                        }`}
                        aria-expanded={isExpanded}
                      >
                        <span className={isActive ? "text-[#DADD39]" : "text-gray-400"}>
                          {item.icon}
                        </span>
                        <span className="tracking-wide">{item.label}</span>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex flex-1 items-center gap-4 rounded-md px-1 py-3 text-lg transition ${
                          isActive ? "font-semibold text-[#DADD39]" : "text-gray-700"
                        }`}
                      >
                        <span className={isActive ? "text-[#DADD39]" : "text-gray-400"}>
                          {item.icon}
                        </span>
                        <span className="tracking-wide">{item.label}</span>
                      </Link>
                    )}

                    {hasChildren && (
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileSection((prev) =>
                            prev === item.href ? null : item.href,
                          )
                        }
                        className="rounded-md p-3 text-gray-500"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={isExpanded}
                      >
                        <FaChevronDown
                          className={`transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {hasChildren && isExpanded && (
                    <div className="ml-11 mt-1 flex flex-col pb-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className={`rounded-md px-2 py-2 text-sm transition ${
                            isActivePath(pathname, child.href)
                              ? "font-semibold text-[#DADD39]"
                              : "text-gray-600"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <a
            href="tel:+17864961231"
            className="group flex items-center gap-5 px-2 pt-5"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-primary bg-primary transition group-hover:bg-primary/80 2xl:h-14 2xl:w-14">
              <div className="flex items-center justify-center rounded-full bg-[#DADD39] px-3 py-3 text-white">
                <IoCall size={30} />
              </div>
            </div>
            <span className="text-base font-semibold text-black group-hover:underline">
              +1 (786) 496-1231
            </span>
          </a>

          <Link
            href="/contactus"
            onClick={() => setMenuOpen(false)}
            className="mt-6 block rounded-full border border-[#DADD39] bg-[#DADD39] px-6 py-3 text-center font-semibold text-black transition hover:border-black hover:bg-transparent"
          >
            Book a call
          </Link>
        </div>
      )}
    </header>
  );
}
