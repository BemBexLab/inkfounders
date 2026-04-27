"use client";

import React from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import type { Variants } from "motion/react";
import LandingNavBar from "./components/LandingNavBar";
import LandingHero from "./components/LandingHero";
import FeaturesSection from "./components/FeaturesSection";
import CTABanner from "./components/CTABanner";
import BookPublishingSection from "./components/BookPublishingSection";
import BookGallery from "./components/BookGallery";
import CTABannerRight from "./components/CTABannerRight";
import PublishingPartner from "./components/PublishingPartner";
import LogoMarquee from "./components/LogoMarquee";
import Packages from "./components/Packages";
import BringYourBookSection from "./components/BringYourBookSection";
import StepCard from "./components/PublishingSteps";
import PublishYourStory from "./components/PublishYourStory";
import TestimonialLanding from "./components/TestimonialLanding";
import GetInTouch from "./components/ContactForm";
import LandingFooter from "./components/LandingFooter";

const sectionVariants: Variants = {
  hidden: (direction: number = 1) => ({
    opacity: 0,
    y: 52,
    x: direction * 18,
    scale: 0.985,
    filter: "blur(10px)",
  }),
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: [0.2, 0.85, 0.2, 1],
    },
  },
};

const heroVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.99,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.2, 0.85, 0.2, 1],
    },
  },
};

function MotionBlock({
  children,
  direction = 1,
  className,
  reducedMotion,
}: {
  children: React.ReactNode;
  direction?: number;
  className?: string;
  reducedMotion: boolean | null;
}) {
  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      custom={direction}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -90px" }}
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
}

const Page = () => {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scrollScaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section className="overflow-hidden bg-white">
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="fixed left-0 top-0 z-[9999] h-1 w-full origin-left bg-[#DADD39]"
          style={{ scaleX: scrollScaleX }}
        />
      )}

      <LandingNavBar />

      <motion.div
        initial={reduceMotion ? "show" : "hidden"}
        animate="show"
        variants={heroVariants}
      >
        <LandingHero />
      </motion.div>

      <MotionBlock reducedMotion={reduceMotion} direction={-1}>
        <FeaturesSection />
      </MotionBlock>
      <MotionBlock reducedMotion={reduceMotion} direction={1}>
        <CTABanner />
      </MotionBlock>
      <MotionBlock reducedMotion={reduceMotion} direction={-1}>
        <PublishingPartner />
      </MotionBlock>
      {/* <BookPublishingSection /> */}
      <MotionBlock reducedMotion={reduceMotion} direction={1}>
        <BookGallery />
      </MotionBlock>
      <MotionBlock reducedMotion={reduceMotion} direction={-1}>
        <LogoMarquee />
      </MotionBlock>
      <MotionBlock reducedMotion={reduceMotion} direction={1}>
        <CTABannerRight />
      </MotionBlock>
      <MotionBlock reducedMotion={reduceMotion} direction={-1}>
        <Packages />
      </MotionBlock>
      <MotionBlock reducedMotion={reduceMotion} direction={1}>
        <BringYourBookSection />
      </MotionBlock>
      <MotionBlock reducedMotion={reduceMotion} direction={-1}>
        <StepCard />
      </MotionBlock>
      <MotionBlock reducedMotion={reduceMotion} direction={1}>
        <PublishYourStory />
      </MotionBlock>
      <MotionBlock reducedMotion={reduceMotion} direction={-1}>
        <TestimonialLanding />
      </MotionBlock>
      <MotionBlock reducedMotion={reduceMotion} direction={1}>
        <GetInTouch />
      </MotionBlock>
      <MotionBlock reducedMotion={reduceMotion} direction={-1}>
        <LandingFooter />
      </MotionBlock>
    </section>
  );
};

export default Page;
