"use client";

import React from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

const steps = [
  {
    number: "1",
    title: "Apply & Consult Free",
    text: "Fill the form. Our publishing experts reach out within 24 hours to understand your book, goals and timeline. Zero pressure, completely free.",
  },
  {
    number: "2",
    title: "We Handle Everything",
    text: "Editing, cover design, interior formatting, ISBN registration and platform setup. Your dedicated team does it all while keeping you informed.",
  },
  {
    number: "3",
    title: "Go Live on 40+ Platforms",
    text: "Your book launches on Amazon, Apple Books, Kobo and 37 more simultaneously. We guide marketing and author branding post-launch too.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 34, rotateX: 10, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const ManuScript = () => {
  return (
    <motion.section
      className="overflow-hidden bg-[#F8F8F6] px-4 py-16 sm:px-6 md:px-8 lg:px-10 lg:py-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
    >
      <motion.div
        className="mx-auto max-w-full"
        variants={containerVariants}
      >
        <motion.p
          className="mb-3 text-center font-semibold tracking-[0.18em] text-[#AAAAAA]"
          variants={fadeUpVariants}
        >
          SIMPLE PROCESS
        </motion.p>
        <motion.h2
          className="w-full text-center flex items-center justify-center text-5xl font-black text-black sm:text-5xl lg:text-6xl"
          variants={fadeUpVariants}
        >
          <span className="max-w-full">
            From Manuscript to <span className="text-yellow-500">Published Author</span>
          </span>
        </motion.h2>
      </motion.div>

      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-4 sm:mt-8 md:mt-8 md:gap-5"
        variants={containerVariants}
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="group relative flex w-full max-w-[520px] flex-col items-start justify-start overflow-hidden rounded-[20px] border border-black bg-transparent p-6 shadow-[0_16px_42px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out hover:border-[#E8E8E6] hover:bg-white sm:w-[calc(50%-0.5rem)] sm:p-7 lg:w-[420px] lg:p-8"
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.015 }}
          >
            <motion.div
              className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[#d0df00]"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            <motion.div
              className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#d0df00]/12 blur-2xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1, scale: 1.12 }}
            />

            <motion.div
              className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-2xl font-bold text-black shadow-lg shadow-yellow-500/30 transition-all duration-300 ease-in-out group-hover:bg-yellow-500"
              initial={{ scale: 0.7, rotate: -12, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                duration: 0.55,
                delay: 0.18 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ rotate: 8, scale: 1.08 }}
            >
              {step.number}
            </motion.div>

            <motion.h3
              className="mt-5 text-left text-[20px] font-semibold text-[#333]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5, delay: 0.24 + index * 0.08 }}
            >
              {step.title}
            </motion.h3>
            <motion.p
              className="mt-4 text-left text-[14px] font-medium text-[#777777]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.56, delay: 0.3 + index * 0.08 }}
            >
              {step.text}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ManuScript;
