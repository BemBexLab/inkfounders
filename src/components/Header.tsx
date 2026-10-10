"use client";

import CustomScrollbar from "@/components/CustomScrollbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

type NavChild = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  desktopOnlyMenu?: boolean;
  nativeNavigation?: boolean;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Publishing Services",
    href: "/publishing-services",
    children: [
      {
        label: "Book Writing",
        href: "/publishing-services/book-writing",
      },
      {
        label: "Book Publishing",
        href: "/publishing-services/book-publishing",
      },
      {
        label: "Book Cover Design",
        href: "/publishing-services/book-cover-design",
      },
      {
        label: "Editing & Proofreading",
        href: "/publishing-services/editing-and-proofreading",
      },
      {
        label: "Comic Book Publishing",
        href: "/publishing-services/comicbook-publishing",
      },
    ],
  },
  {
    label: "Audiobook Services",
    href: "/audiobook-services",
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
    label: "Published Books",
    href: "/published-books",
  },
  {
    label: "Who we are",
    href: "/whoweare",
  },
  {
    label: "Blog",
    href: "/blog",
    nativeNavigation: true,
  },
  {
    label: "Contact Us",
    href: "/contactus",
  },
];

const isActivePath = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(
    null,
  );
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDrawer = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setMenuMounted(true);
    requestAnimationFrame(() => setMenuOpen(true));
  }, []);

  const closeDrawer = useCallback(() => {
    setMenuOpen(false);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    closeTimerRef.current = setTimeout(
      () => setMenuMounted(false),
      prefersReducedMotion ? 0 : 400,
    );
  }, []);

  useEffect(() => {
    closeDrawer();
    setOpenMobileSection(null);
  }, [pathname, closeDrawer]);

  useEffect(
    () => () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    },
    [],
  );

  useEffect(() => {
    if (!menuOpen) return;

    const activeParent = navItems.find(
      (item) =>
        item.children?.length && isActivePath(pathname, item.href),
    );

    setOpenMobileSection(activeParent?.href ?? null);
  }, [menuOpen, pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const desktopMediaQuery = window.matchMedia("(min-width: 1280px)");

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDrawer();
    };

    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) closeDrawer();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    desktopMediaQuery.addEventListener("change", handleDesktopChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      desktopMediaQuery.removeEventListener("change", handleDesktopChange);
    };
  }, [menuOpen, closeDrawer]);

  return (
    <>
      <header
        className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-[#F4F3E1]/95 px-4 py-3 shadow-[0_6px_24px_rgba(0,0,0,0.04)] backdrop-blur-md sm:px-6 md:px-8 lg:px-10 xl:py-3.5"
      >
        <div className="mx-auto flex w-full max-w-[1536px] items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Ink Founders home"
            className="shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            <video
              width="130"
              height="50"
              autoPlay
              loop
              muted
              playsInline
              className="h-auto w-[98px] sm:w-[112px] xl:w-[120px] 2xl:w-[130px]"
            >
              <source
                src="/logovideo/inkfounder_logo_animate.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="relative z-50 hidden min-w-0 items-center gap-5 xl:flex 2xl:gap-8"
          >
            {navItems.map((item) => {
              const isActive = isActivePath(pathname, item.href);
              const desktopLinkClass = `flex items-center gap-1.5 whitespace-nowrap rounded-md px-1 py-2 text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-black 2xl:text-[15px] ${
                isActive
                  ? "text-[#b8ba16]"
                  : "text-black hover:text-[#b8ba16]"
              }`;

              if (item.children?.length) {
                return (
                  <div key={item.href} className="group relative">
                    {item.desktopOnlyMenu ? (
                      <button
                        type="button"
                        className={desktopLinkClass}
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>
                        <FaChevronDown className="h-2.5 w-2.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={desktopLinkClass}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span>{item.label}</span>
                        <FaChevronDown className="h-2.5 w-2.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                      </Link>
                    )}

                    <div className="invisible absolute left-0 top-full w-64 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="overflow-hidden rounded-2xl border border-black/5 bg-white p-2 shadow-[0_18px_50px_rgba(0,0,0,0.14)]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            aria-current={
                              isActivePath(pathname, child.href)
                                ? "page"
                                : undefined
                            }
                            className={`block rounded-xl px-4 py-3 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-black ${
                              isActivePath(pathname, child.href)
                                ? "bg-[#f4f5c9] font-semibold text-black"
                                : "text-gray-700 hover:bg-[#F4F3E1] hover:text-black"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return item.nativeNavigation ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={desktopLinkClass}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={desktopLinkClass}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contactus"
            className="btn-slide-bg hidden shrink-0 items-center justify-center rounded-xl border border-[#DADD39] bg-[#DADD39] px-4 py-2.5 text-[13px] font-semibold text-black transition-all duration-300 hover:border-black focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-black xl:flex 2xl:px-6 2xl:text-sm"
          >
            <span className="slide-bg" />
            <span className="relative z-10">Request a Quote</span>
          </Link>

          <button
            type="button"
            onClick={menuOpen ? closeDrawer : openDrawer}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-xl text-black transition-colors hover:text-[#a3a718] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-black xl:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative h-5 w-5" aria-hidden="true">
              <FaBars
                className={`absolute inset-0 m-auto transition-[opacity,transform] duration-200 motion-reduce:transition-none ${
                  menuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <FaTimes
                className={`absolute inset-0 m-auto transition-[opacity,transform] duration-200 motion-reduce:transition-none ${
                  menuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {menuMounted && (
        <div
          id="mobile-menu"
          aria-hidden={!menuOpen}
          className="fixed inset-0 z-[100] flex justify-end xl:hidden"
        >
          <button
            type="button"
            tabIndex={menuOpen ? 0 : -1}
            className={`absolute inset-0 bg-black/35 backdrop-blur-[2px] transition-opacity duration-[400ms] motion-reduce:transition-none ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeDrawer}
            aria-label="Close navigation menu"
          />

          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            inert={!menuOpen}
            className={`relative z-10 flex h-dvh w-[min(90vw,26rem)] flex-col bg-[#F8F7F1] shadow-[-20px_0_60px_rgba(0,0,0,0.18)] transition-transform duration-[400ms] ease-out motion-reduce:transition-none ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 sm:px-6">
              <Link
                href="/"
                onClick={closeDrawer}
                aria-label="Ink Founders home"
                tabIndex={menuOpen ? 0 : -1}
                className="focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-black"
              >
                <video
                  width="112"
                  height="44"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-auto w-[106px] sm:w-[116px]"
                >
                  <source
                    src="/logovideo/inkfounder_logo_animate.mp4"
                    type="video/mp4"
                  />
                </video>
              </Link>

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center text-xl text-black transition-colors hover:text-[#a3a718] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-black"
                onClick={closeDrawer}
                tabIndex={menuOpen ? 0 : -1}
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            <CustomScrollbar
              containerClassName="min-h-0 flex-1"
              className="h-full px-5 py-4 sm:px-6"
              trackClassName="bg-black/5"
              thumbClassName="bg-[#DADD39]"
            >
              <nav aria-label="Mobile navigation">
                <ul className="flex w-full flex-col">
                {navItems.map((item, index) => {
                  const isActive = isActivePath(pathname, item.href);
                  const hasChildren = Boolean(item.children?.length);
                  const isExpanded = openMobileSection === item.href;

                  return (
                    <li
                      key={item.href}
                      className={`w-full border-b border-black/[0.07] py-1.5 transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
                        menuOpen
                          ? "translate-x-0 opacity-100"
                          : "translate-x-4 opacity-0"
                      }`}
                      style={{
                        transitionDelay: menuOpen ? `${index * 35}ms` : "0ms",
                      }}
                    >
                      <div className="flex items-center gap-2">
                        {hasChildren ? (
                          <button
                            type="button"
                            onClick={() =>
                              setOpenMobileSection((prev) =>
                                prev === item.href ? null : item.href,
                              )
                            }
                            className={`flex min-h-12 flex-1 items-center px-0 py-2.5 text-left text-[0.98rem] transition-colors ${
                              isActive
                                ? "font-semibold text-black"
                                : "text-gray-800 hover:text-[#a3a718]"
                            }`}
                            tabIndex={menuOpen ? 0 : -1}
                            aria-expanded={isExpanded}
                            aria-controls={`mobile-submenu-${item.href.replaceAll("/", "-")}`}
                          >
                            <span>{item.label}</span>
                          </button>
                        ) : item.nativeNavigation ? (
                          <a
                            href={item.href}
                            onClick={closeDrawer}
                            tabIndex={menuOpen ? 0 : -1}
                            aria-current={isActive ? "page" : undefined}
                            className={`flex min-h-12 flex-1 items-center px-0 py-2.5 text-[0.98rem] transition-colors ${
                              isActive
                                ? "font-semibold text-black"
                                : "text-gray-800 hover:text-[#a3a718]"
                            }`}
                          >
                            <span>{item.label}</span>
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={closeDrawer}
                            tabIndex={menuOpen ? 0 : -1}
                            aria-current={isActive ? "page" : undefined}
                            className={`flex min-h-12 flex-1 items-center px-0 py-2.5 text-[0.98rem] transition-colors ${
                              isActive
                                ? "font-semibold text-black"
                                : "text-gray-800 hover:text-[#a3a718]"
                            }`}
                          >
                            <span>{item.label}</span>
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
                            className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-gray-500 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-black"
                            tabIndex={menuOpen ? 0 : -1}
                            aria-label={`Toggle ${item.label} submenu`}
                            aria-expanded={isExpanded}
                            aria-controls={`mobile-submenu-${item.href.replaceAll("/", "-")}`}
                          >
                            <FaChevronDown
                              className={`transition-transform duration-200 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {hasChildren && (
                        <div
                          id={`mobile-submenu-${item.href.replaceAll("/", "-")}`}
                          aria-hidden={!isExpanded}
                          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                            isExpanded
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="min-h-0 overflow-hidden">
                            <div className={`mb-2 ml-3 mt-1 flex flex-col border-l border-[#DADD39] pl-4 transition-transform duration-300 motion-reduce:transition-none ${isExpanded ? "translate-y-0" : "-translate-y-2"}`}>
                              {!item.desktopOnlyMenu && (
                                <Link
                                  href={item.href}
                                  onClick={closeDrawer}
                                  tabIndex={menuOpen && isExpanded ? 0 : -1}
                                  aria-current={
                                    pathname === item.href ? "page" : undefined
                                  }
                                  className={`py-2.5 text-sm transition-colors ${
                                    pathname === item.href
                                      ? "font-semibold text-black"
                                      : "text-gray-600 hover:text-black"
                                  }`}
                                >
                                  All {item.label}
                                </Link>
                              )}
                              {item.children?.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={closeDrawer}
                                  tabIndex={menuOpen && isExpanded ? 0 : -1}
                                  aria-current={
                                    isActivePath(pathname, child.href)
                                      ? "page"
                                      : undefined
                                  }
                                  className={`py-2.5 text-sm transition-colors ${
                                    isActivePath(pathname, child.href)
                                      ? "font-semibold text-black"
                                      : "text-gray-600 hover:text-black"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
              </nav>
            </CustomScrollbar>

            <div className={`border-t border-black/10 px-5 py-5 transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none sm:px-6 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
              <a
                href="tel:+17866526864"
                tabIndex={menuOpen ? 0 : -1}
                className="group flex items-center gap-3 text-black focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-black"
              >
                <IoCall size={18} className="text-[#a3a718]" aria-hidden="true" />
                <span className="text-sm font-semibold transition-colors group-hover:text-[#a3a718] sm:text-base">
                  (786) 652-6864
                </span>
              </a>

              <Link
                href="/contactus"
                onClick={closeDrawer}
                tabIndex={menuOpen ? 0 : -1}
                className="mt-4 inline-flex border-b border-[#DADD39] py-2 text-sm font-semibold text-black transition-colors hover:text-[#a3a718] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-black"
              >
                Request a Quote
              </Link>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
