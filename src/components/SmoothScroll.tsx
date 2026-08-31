"use client";

import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const pathname = usePathname();
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const content = document.getElementById("smooth-content");
    const wrapper = document.getElementById("smooth-wrapper");

    if (!content || !wrapper) return;

    // Transform-based smoothing can fight the browser's native touch scrolling,
    // especially on hybrid tablets and while the mobile browser chrome resizes
    // the viewport. Keep the native scroll path for phones, tablets, and coarse
    // pointers, while preserving the smoother on desktop.
    const responsiveQuery = window.matchMedia(
      "(max-width: 1279px), (pointer: coarse)",
    );
    const getSmoothDuration = () =>
      responsiveQuery.matches || ScrollTrigger.isTouch > 0 ? 0 : 1;
    let smoothDuration = getSmoothDuration();

    const smoother = ScrollSmoother.create({
      wrapper,
      content,
      smooth: smoothDuration,
      effects: true,
      smoothTouch: false,
      ignoreMobileResize: true,
    });

    smootherRef.current = smoother;

    let refreshFrame = 0;
    const refresh = () => {
      if (refreshFrame) return;

      refreshFrame = window.requestAnimationFrame(() => {
        refreshFrame = 0;
        ScrollTrigger.refresh();
      });
    };

    const updateResponsiveSmoothing = () => {
      const nextSmoothDuration = getSmoothDuration();
      if (nextSmoothDuration === smoothDuration) return;

      smoothDuration = nextSmoothDuration;
      smoother.smooth(smoothDuration);
      refresh();
    };

    responsiveQuery.addEventListener("change", updateResponsiveSmoothing);

    const resizeObserver = new ResizeObserver(refresh);
    resizeObserver.observe(content);

    const frame = window.requestAnimationFrame(refresh);

    return () => {
      window.cancelAnimationFrame(frame);
      window.cancelAnimationFrame(refreshFrame);
      responsiveQuery.removeEventListener("change", updateResponsiveSmoothing);
      resizeObserver.disconnect();
      smoother.kill();
      smootherRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!smootherRef.current) return;

    const frame = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}