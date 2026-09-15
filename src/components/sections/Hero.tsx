"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { HERO, QUALITY } from "@/lib/site-config";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="top" aria-label="Hero" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-raised px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <Zap className="h-3.5 w-3.5" aria-hidden="true" />
            {HERO.eyebrow}
          </motion.p>

          <motion.h1
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold leading-tight text-fg sm:text-6xl"
          >
            {HERO.heading}
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-fg-muted sm:text-lg"
          >
            {QUALITY.body}
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="/our-products"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              {HERO.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3 text-sm font-semibold text-fg transition-colors hover:border-primary hover:text-primary"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="card-glow rounded-3xl border border-line bg-bg-raised p-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
                Charge Level
              </span>
              <Zap className="h-4 w-4 text-primary" aria-hidden="true" />
            </div>

            <div className="mt-4 flex h-16 items-center rounded-xl border-2 border-line p-1.5">
              <div className="relative h-full flex-1 overflow-hidden rounded-lg bg-bg-raised-2">
                <div className="motion-safe:animate-[charge-fill_2.8s_ease-in-out_infinite] h-full rounded-lg bg-gradient-to-r from-primary-dim to-primary" />
              </div>
              <div className="ml-1.5 h-6 w-2 rounded-r-sm bg-line" />
            </div>

            <p className="mt-4 text-sm text-fg-muted">
              Engineered BMS, high-performance cells, and pure nickel strips — for reliability
              that lasts.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
