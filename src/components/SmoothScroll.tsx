"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({
  children,
  header,
}: {
  children: React.ReactNode;
  header?: React.ReactNode;
}) {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    if (!wrapper || !content) return;

    const existingSmoother = ScrollSmoother.get();
    existingSmoother?.kill();

    const smoother = ScrollSmoother.create({
      wrapper,
      content,
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    smootherRef.current = smoother;
    const refreshId = window.requestAnimationFrame(() => {
      smoother.refresh();
    });

    return () => {
      window.cancelAnimationFrame(refreshId);
      smoother.kill();
      smootherRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    if (!smootherRef.current) return;

    const refreshId = window.requestAnimationFrame(() => {
      smootherRef.current?.refresh();
    });

    return () => window.cancelAnimationFrame(refreshId);
  }, [pathname]);

  return (
    <div ref={wrapperRef} id="smooth-wrapper">
      {header}
      <div
        ref={contentRef}
        id="smooth-content"
        className={header ? "smooth-content-with-header" : undefined}
      >
        {children}
      </div>
    </div>
  );
}
