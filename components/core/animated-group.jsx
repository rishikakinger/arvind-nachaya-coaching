"use client";

import { Children } from "react";
import { motion } from "motion/react";

const DEFAULT_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, type: "spring", bounce: 0.25 },
    },
  },
};

export function AnimatedGroup({ children, className, variants }) {
  const containerVariants = variants?.container ?? DEFAULT_VARIANTS.container;
  const itemVariants = variants?.item ?? DEFAULT_VARIANTS.item;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
      className={className}
    >
      {Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
