"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

const CHECK_MARK = "\u2713";
const CROSS_MARK = "\u2715";

const rows = [
  {
    feature: "Professional Cover Design",
    diy: "cross",
    other: { type: "amber", value: "Extra Cost" },
    ink: { value: "Included" },
    shaded: false,
  },
  {
    feature: "40+ Platform Distribution",
    diy: "cross",
    other: { type: "amber", value: "Limited" },
    ink: { value: "All 40+" },
    shaded: true,
  },
  {
    feature: "Expert Editing & Proofreading",
    diy: "cross",
    other: { type: "amber", value: "Basic Only" },
    ink: { value: "Full Service" },
    shaded: false,
  },
  {
    feature: "100% Ownership Retained",
    diy: "check",
    other: { type: "plain", value: `${CROSS_MARK} Often Not` },
    ink: { value: "Always Yours" },
    shaded: true,
  },
  {
    feature: "Dedicated Publishing Expert",
    diy: "cross",
    other: { type: "amber", value: "Shared Only" },
    ink: { value: "Personal" },
    shaded: false,
  },
  {
    feature: "Author Branding & Marketing",
    diy: "cross",
    other: { type: "cross" },
    ink: { value: "Included" },
    shaded: true,
  },
  {
    feature: "Time To Publish",
    diy: "cross",
    other: { type: "plain", value: "4-8 Weeks" },
    ink: { value: "As Fast As 2-3 Weeks", yellow: true },
    shaded: false,
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function InkFoundersComparison() {
  const ROW_HEIGHT = 96;
  const HEADER_HEIGHT = 82;
  const DARK_OVERFLOW = 48;

  return (
    <motion.section
      className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={containerVariants}
    >
      <motion.div
        className="mx-auto flex w-full max-w-7xl items-center justify-center"
        variants={containerVariants}
      >
        <div className="w-full">
          <motion.div className="text-center" variants={containerVariants}>
            <motion.p
              className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-black sm:text-sm md:text-md"
              variants={fadeUpVariants}
            >
              Why Ink Founder
            </motion.p>
            <motion.h1
              className="mb-4 text-2xl font-black text-gray-900 sm:text-4xl lg:mb-5 lg:text-6xl"
              variants={fadeUpVariants}
            >
              DIY Publishing Vs.{" "}
              <span style={{ color: "#C8D400" }}>Ink Founders</span>
            </motion.h1>
            <motion.p
              className="mx-auto max-w-7xl text-sm leading-relaxed text-black sm:text-base lg:text-lg"
              style={{ marginBottom: "clamp(2rem, 6vw, 5rem)" }}
              variants={fadeUpVariants}
            >
              We are not here to do what everyone else does. Here's an honest look at what separates us from going it alone or settling for less.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative"
            style={{ paddingRight: "26%", marginTop: `${DARK_OVERFLOW}px` }}
            variants={fadeUpVariants}
          >
            <motion.div
              className="absolute right-0 flex flex-col overflow-hidden rounded-xl lg:rounded-2xl"
              style={{
                backgroundColor: "#1e1e1e",
                width: "26%",
                top: `-${DARK_OVERFLOW}px`,
                bottom: 0,
                zIndex: 10,
              }}
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="flex items-center justify-center px-3 sm:px-4"
                style={{ height: `${DARK_OVERFLOW + HEADER_HEIGHT}px`, flexShrink: 0 }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src="/landing-page/inkfounder logo-19 1.svg"
                  alt="Ink Founders logo"
                  width={192}
                  height={87}
                  className="h-auto w-full max-w-[192px]"
                />
              </motion.div>

              {rows.map((row, i) => (
                <motion.div
                  key={row.feature}
                  style={{ flexShrink: 0 }}
                  variants={rowVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.65 }}
                  whileHover={{ x: -2 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <div
                    style={{
                      height: "1px",
                      backgroundColor: "#333",
                      marginLeft: "20px",
                      marginRight: "20px",
                    }}
                  />
                  <div
                    className="flex items-center justify-center px-2 text-center sm:px-4"
                    style={{ height: `${ROW_HEIGHT}px` }}
                  >
                    {row.ink.yellow ? (
                      <span
                        className="font-black leading-tight"
                        style={{ color: "#C8D400", fontSize: "clamp(0.55rem, 1.4vw, 0.98rem)" }}
                      >
                        {row.ink.value}
                      </span>
                    ) : (
                      <span style={{ fontSize: "clamp(0.55rem, 1.4vw, 0.99rem)", lineHeight: 1.3 }}>
                        <span style={{ color: "#C8D400", fontWeight: 400 }}>{CHECK_MARK} </span>
                        <span className="font-bold text-[#DADD39]">{row.ink.value}</span>
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="flex flex-col" variants={containerVariants}>
              <motion.div
                className="grid overflow-hidden rounded-l-xl"
                style={{
                  gridTemplateColumns: "2fr 1fr 1fr",
                  backgroundColor: "#d4ed4a",
                  height: `${HEADER_HEIGHT}px`,
                }}
                variants={fadeUpVariants}
              >
                <div />
                <div
                  className="flex items-center justify-center px-1 sm:px-3"
                  style={{ borderLeft: "1px solid #bdd938" }}
                >
                  <span
                    style={{
                      fontSize: "clamp(0.4rem, 1.1vw, 0.88rem)",
                      letterSpacing: "0.12em",
                      fontWeight: 700,
                      color: "#000000",
                      textTransform: "uppercase",
                      textAlign: "center",
                    }}
                  >
                    DIY Publishing
                  </span>
                </div>
                <div
                  className="flex items-center justify-center px-1 sm:px-3"
                  style={{ borderLeft: "1px solid #bdd938" }}
                >
                  <span
                    style={{
                      fontSize: "clamp(0.4rem, 1.1vw, 0.88rem)",
                      letterSpacing: "0.12em",
                      fontWeight: 700,
                      color: "#000000",
                      textTransform: "uppercase",
                      textAlign: "center",
                    }}
                  >
                    Other Services
                  </span>
                </div>
              </motion.div>

              {rows.map((row, i) => (
                <motion.div
                  key={`${row.feature}-left`}
                  className="grid"
                  style={{
                    gridTemplateColumns: "2fr 1fr 1fr",
                    height: `${ROW_HEIGHT}px`,
                    backgroundColor: row.shaded ? "#f4f4f4" : "#ffffff",
                  }}
                  variants={rowVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.65 }}
                  whileHover={{ x: 4, backgroundColor: row.shaded ? "#efefef" : "#fafafa" }}
                  transition={{ delay: i * 0.03 }}
                >
                  <div className="flex items-center px-3 sm:px-5 lg:px-7">
                    <span
                      style={{
                        fontSize: "clamp(0.6rem, 1.4vw, 0.98rem)",
                        fontWeight: 600,
                        color: "#1a1a1a",
                      }}
                    >
                      {row.feature}
                    </span>
                  </div>

                  <div
                    className="flex items-center justify-center"
                    style={{ borderLeft: "1px solid #e5e5e5" }}
                  >
                    {row.diy === "cross" && (
                      <span style={{ color: "black", fontSize: "clamp(0.7rem, 1.4vw, 1rem)" }}>{CROSS_MARK}</span>
                    )}
                    {row.diy === "check" && (
                      <span style={{ color: "#DADD39", fontSize: "clamp(0.7rem, 1.4vw, 1rem)" }}>{CHECK_MARK}</span>
                    )}
                  </div>

                  <div
                    className="flex items-center justify-center px-1 text-center sm:px-3"
                    style={{ borderLeft: "1px solid #e5e5e5" }}
                  >
                    {row.other.type === "cross" && (
                      <span style={{ color: "black", fontSize: "clamp(0.7rem, 1.4vw, 1rem)" }}>{CROSS_MARK}</span>
                    )}
                    {row.other.type === "amber" && (
                      <span
                        style={{
                          color: "#C8D400",
                          fontSize: "clamp(0.5rem, 1.2vw, 0.96rem)",
                          fontWeight: 600,
                        }}
                      >
                        {row.other.value}
                      </span>
                    )}
                    {row.other.type === "plain" && (
                      <span
                        style={{
                          color: "black",
                          fontSize: "clamp(0.5rem, 1.2vw, 0.96rem)",
                          fontWeight: 500,
                        }}
                      >
                        {row.other.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
