"use client";

import React from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import LandingHero2 from "./components/LandingHero2";
import LandingNavbar2 from "./components/LandingNavbar2";
import NumericValues from "./components/NumericValues";
import ManuScript from "./components/ManuScript";
import WhatYouGet from "./components/WhatYouGet";
import Inkfounderscomparison from "./components/Inkfounderscomparison";
import BooksSection from "./components/Bookssection";
import CTABanner from "../bookpublishing/components/CTABanner";
import Testimonials from "../bookpublishing/components/TestimonialLanding";
import GetInTouch from "../bookpublishing/components/ContactForm";
import LandingFooter from "../bookpublishing/components/LandingFooter";
import QuotePopup from "../bookpublishing/components/QuotePopup";

const pageVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const navbarVariants: Variants = {
  hidden: { opacity: 0, y: -18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const Page = () => {
  return (
    <motion.main
      className="overflow-hidden bg-white"
      initial="hidden"
      animate="show"
      variants={pageVariants}
    >
        <LandingNavbar2 />

      <motion.div variants={sectionVariants}>
        <LandingHero2 />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <NumericValues />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <ManuScript />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <WhatYouGet />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Inkfounderscomparison />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <BooksSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <CTABanner />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Testimonials />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <GetInTouch />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <LandingFooter />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <QuotePopup />
      </motion.div>
    </motion.main>
  );
};

export default Page;
