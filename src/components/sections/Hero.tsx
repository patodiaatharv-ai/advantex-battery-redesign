"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HERO, QUALITY, TWO_WHEELER } from "@/lib/site-config";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="top" aria-label="Hero" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="kicker"
          >
            {HERO.eyebrow}
          </motion.p>

          <motion.h1
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] text-fg sm:text-6xl"
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
            className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <Link
              href="/our-products"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dim"
            >
              {HERO.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-fg"
            >
              Get in Touch
              <ArrowRight
                className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="corner-frame relative mx-auto w-full max-w-md"
        >
          <div className="overflow-hidden rounded-lg border border-line bg-white">
            <Image
              src={TWO_WHEELER.heroImage!}
              alt="A lineup of real Advantex lithium-ion battery packs, showing printed spec labels"
              width={2048}
              height={1365}
              priority
              className="h-auto w-full"
            />
          </div>

          <div className="spec-tag absolute -left-4 top-8 sm:-left-8">
            <span className="spec-tag-value">48V – 72V</span>
            <span className="spec-tag-label">Voltage Range</span>
          </div>
          <div className="spec-tag absolute -right-4 bottom-8 sm:-right-8">
            <span className="spec-tag-value">21Ah – 43Ah</span>
            <span className="spec-tag-label">Capacity Range</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
