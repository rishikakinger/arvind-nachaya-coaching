"use client";

import { motion } from "motion/react";

export function HeroSplash() {
  return (
    <section className="hero-full" id="home">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Executive Coaching for Leaders Navigating Growth, Transition, and
          Complexity
        </motion.h1>
      </div>

      <motion.a
        href="#intro"
        className="hero-scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <span>Scroll</span>
        <motion.span
          className="hero-scroll-cue-line"
          animate={{ scaleY: [1, 0.55, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.a>
    </section>
  );
}
