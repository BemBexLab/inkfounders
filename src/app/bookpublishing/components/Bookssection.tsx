"use client";

import React from "react";
import { motion } from "motion/react";
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
        className="flex w-full flex-wrap items-end justify-center gap-x-1 gap-y-6 sm:gap-x-2 md:gap-y-8 lg:flex-nowrap lg:gap-x-3"
        style={{ maxWidth: "1560px" }}
        variants={containerVariants}
      >
        {books.map((book) => (
          <motion.div
            key={book.id}
            className="relative w-[35%] min-w-[128px] max-w-[210px] sm:w-[26%] sm:min-w-[150px] sm:max-w-[250px] md:w-[17.5%] md:min-w-[175px] md:max-w-[280px] lg:w-1/6 lg:min-w-0 lg:max-w-none"
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
    </motion.section>
  );
}
