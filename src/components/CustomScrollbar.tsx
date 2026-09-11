"use client";

import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

type ScrollMetrics = {
  hasOverflow: boolean;
  thumbSize: number;
  thumbOffset: number;
};

type CustomScrollbarProps = {
  children?: ReactNode;
  containerClassName?: string;
  trackClassName?: string;
  thumbClassName?: string;
} & HTMLAttributes<HTMLDivElement>;

function cn(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(" ");
}

function createMetrics(
  viewportSize: number,
  scrollSize: number,
  scrollOffset: number,
): ScrollMetrics {
  const hasOverflow = scrollSize > viewportSize + 1;

  if (!hasOverflow) {
    return {
      hasOverflow: false,
      thumbSize: 0,
      thumbOffset: 0,
    };
  }

  const thumbSize = Math.max(28, (viewportSize / scrollSize) * viewportSize);
  const maxThumbOffset = viewportSize - thumbSize;
  const maxScrollOffset = scrollSize - viewportSize;
  const thumbOffset =
    maxScrollOffset > 0 ? (scrollOffset / maxScrollOffset) * maxThumbOffset : 0;

  return {
    hasOverflow: true,
    thumbSize,
    thumbOffset,
  };
}

const CustomScrollbar = forwardRef<HTMLDivElement, CustomScrollbarProps>(
  (
    {
      children,
      className,
      containerClassName,
      trackClassName,
      thumbClassName,
      style,
      ...props
    },
    forwardedRef,
  ) => {
    const viewportRef = useRef<HTMLDivElement | null>(null);
    const [metrics, setMetrics] = useState<ScrollMetrics>({
      hasOverflow: false,
      thumbSize: 0,
      thumbOffset: 0,
    });

    useImperativeHandle(forwardedRef, () => viewportRef.current as HTMLDivElement);

    useEffect(() => {
      const element = viewportRef.current;

      if (!element) {
        return;
      }

      const updateMetrics = () => {
        const viewportSize = element.clientHeight;
        const scrollSize = element.scrollHeight;
        const scrollOffset = element.scrollTop;

        setMetrics(createMetrics(viewportSize, scrollSize, scrollOffset));
      };

      updateMetrics();

      const resizeObserver = new ResizeObserver(() => {
        updateMetrics();
      });

      resizeObserver.observe(element);

      if (element.firstElementChild instanceof HTMLElement) {
        resizeObserver.observe(element.firstElementChild);
      }

      element.addEventListener("scroll", updateMetrics);
      window.addEventListener("resize", updateMetrics);

      return () => {
        resizeObserver.disconnect();
        element.removeEventListener("scroll", updateMetrics);
        window.removeEventListener("resize", updateMetrics);
      };
    }, [children]);

    return (
      <div className={cn("relative overflow-hidden", containerClassName)}>
        <div
          {...props}
          ref={viewportRef}
          className={cn("custom-scrollbar-viewport -mr-5 overflow-y-auto pr-5", className)}
          style={{
            ...style,
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {children}
        </div>

        {metrics.hasOverflow ? (
          <div
            className={cn(
              "pointer-events-none absolute rounded-full bg-[#f1edd4]",
              "bottom-0 right-0 top-0 w-[6px]",
              trackClassName,
            )}
          >
            <div
              className={cn(
                "absolute rounded-full bg-[#d6d09b]",
                "left-0 right-0",
                thumbClassName,
              )}
              style={
                {
                  height: `${metrics.thumbSize}px`,
                  transform: `translateY(${metrics.thumbOffset}px)`,
                }
              }
            />
          </div>
        ) : null}
      </div>
    );
  },
);

CustomScrollbar.displayName = "CustomScrollbar";

export default CustomScrollbar;
