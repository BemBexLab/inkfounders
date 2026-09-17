"use client";

import { animate, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1000, suffix: "+", label: "Authors Published" },
  { value: 40, suffix: "+", label: "Global Platforms" },
  { value: 100, suffix: "%", label: "Ownership Retained" },
  { value: 100, suffix: "%", label: "Ownership Retained" },
];

type CounterProps = {
  value: number;
  suffix: string;
};

function Counter({ value, suffix }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        setCount(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="plus-jakarta bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-[28px] font-medium leading-[1] tracking-[-0.5px] text-transparent sm:text-[32px] md:text-[36px]"
    >
      {count.toLocaleString()}
      {suffix}
    </motion.p>
  );
}

// Helper to compute the correct right-border class based on index
// Mobile (2 cols): border on items 0, 2 (first column)
// md+ (4 cols): border on items 0, 1, 2 (all except last)
function getBorderClass(index: number, total: number) {
  const base = "border-[#eeeeee]";
  if (index === 1) return `${base} border-r-0 md:border-r`;
  if (index === total - 1) return `${base} border-r-0`;
  return `${base} border-r`;
}

export default function Stats() {
  return (
    <div className="flex w-full items-center bg-white py-6 md:py-0 md:h-[152px]">
      <div className="grid w-full grid-cols-2 md:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className={`flex min-h-[103px] flex-col items-center justify-center gap-1 px-2 py-4 md:gap-[4px] md:px-0 md:py-0 ${getBorderClass(
              index,
              stats.length
            )}`}
          >
            <Counter value={item.value} suffix={item.suffix} />

            <p className="plus-jakarta text-center text-[12px] font-medium leading-[18px] text-[#111111] sm:text-[13px] md:text-[14px]">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}