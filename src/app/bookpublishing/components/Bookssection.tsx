"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";

const books = [
  { id: 1, alt: "Don't Cut the Grass on Sunday", tilt: "-6deg", zIndex: 1, src: "/landing-page/Frame 449 (1).png" },
  { id: 2, alt: "The Labyrinth", tilt: "-3deg", zIndex: 2, src: "/landing-page/Frame 450 (1).png" },
  { id: 3, alt: "God Carried Me", tilt: "-1deg", zIndex: 3, src: "/landing-page/Frame 451 (1).png" },
  { id: 4, alt: "Faith Over Feelings", tilt: "1deg", zIndex: 3, src: "/landing-page/Frame 452 (1).png" },
  { id: 5, alt: "Still I Rise", tilt: "3deg", zIndex: 2, src: "/landing-page/Frame 454 (1).png" },
  { id: 6, alt: "The Bounce Back", tilt: "6deg", zIndex: 1, src: "/landing-page/Frame 454.png" },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const bookVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.94, rotateZ: -2, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateZ: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function BooksSection() {
  const shouldReduceMotion = useReducedMotion();
  const carouselBooks = [...books, ...books];

  return (
    <motion.section
      className="flex w-full flex-col items-center bg-white px-4 py-12 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className="mb-10 text-center font-black text-gray-900 sm:mb-12 lg:mb-16"
        style={{ fontSize: "clamp(1.5rem, 6vw, 2.4rem)", letterSpacing: "-0.01em" }}
        variants={fadeUpVariants}
      >
        Book We've Helped Bring To Life
      </motion.h2>

      <motion.div
        className="w-full overflow-hidden"
        style={{ maxWidth: "1800px" }}
        variants={containerVariants}
      >
        <motion.div
          className="flex w-max items-end gap-3 sm:gap-4 md:gap-5"
          animate={
            shouldReduceMotion
              ? undefined
              : { x: ["0%", "-50%"] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 28,
                  ease: "linear",
                  repeat: Infinity,
                }
          }
        >
          {carouselBooks.map((book, index) => (
            <motion.div
              key={`${book.id}-${index}`}
              className="relative w-[42vw] min-w-[160px] max-w-[240px] sm:w-[30vw] sm:min-w-[190px] sm:max-w-[280px] md:w-[24vw] md:min-w-[220px] md:max-w-[320px] lg:w-[16vw] lg:min-w-[240px] lg:max-w-[340px]"
              style={{
                transform: `perspective(800px) rotateY(${book.tilt})`,
                transformOrigin: "center bottom",
                zIndex: book.zIndex,
                flexShrink: 0,
              }}
              variants={bookVariants}
              whileHover={{
                y: -12,
                transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
              }}
              aria-hidden={index >= books.length}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.img
                  src={book.src}
                  alt={book.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  initial={{ filter: "brightness(0.92)" }}
                  whileHover={{ filter: "brightness(1.02)" }}
                  transition={{ duration: 0.25 }}
                />
                <motion.div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "6%",
                    height: "100%",
                    background:
                      "linear-gradient(to left, rgba(255,255,255,0.12) 0%, transparent 100%)",
                    pointerEvents: "none",
                  }}
                  initial={{ opacity: 0.45 }}
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.25 }}
                />
                <motion.div
                  className="pointer-events-none absolute inset-x-[8%] bottom-[-10px] h-6 rounded-full bg-black/10 blur-xl"
                  initial={{ opacity: 0.22, scale: 0.84 }}
                  whileHover={{ opacity: 0.34, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                />
              </motion.div>
              <motion.div
                className="pointer-events-none absolute inset-x-0 top-0 h-full rounded-[8px] bg-gradient-to-t from-transparent via-transparent to-white/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
