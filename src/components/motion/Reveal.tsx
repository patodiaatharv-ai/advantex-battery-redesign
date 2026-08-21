"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  as?: "div" | "li";
}

const OFFSET = 28;

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const offset =
    direction === "up"
      ? { y: OFFSET }
      : direction === "left"
        ? { x: OFFSET }
        : direction === "right"
          ? { x: -OFFSET }
          : {};

  const variants: Variants = {
    hidden: { opacity: 0, ...(prefersReducedMotion ? {} : offset) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" },
    },
  };

  const MotionTag = as === "li" ? motion.li : motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
