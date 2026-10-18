"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface HeroSectionProps {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
  variant?: "light" | "dark";
  backgroundImage?: string;
}

export function HeroSection({
  eyebrow,
  title,
  description,
  children,
  variant = "light",
  backgroundImage,
}: HeroSectionProps) {
  const reducedMotion = useReducedMotion();
  const isDark = variant === "dark";
  const hasImage = !!backgroundImage;

  return (
    <section
      className={`relative overflow-hidden ${isDark ? "bg-brand-dark text-ink" : "bg-card text-ink"}`}
    >
      {hasImage && (
        <>
          <div className="absolute inset-0">
            <img
              src={backgroundImage}
              alt=""
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-dark/88 to-brand-dark/72" />
          <div className="absolute inset-0 grid-pattern-lime opacity-40" />
        </>
      )}
      {!hasImage && (
        <>
          <div className="absolute inset-0 grid-pattern-lime opacity-30" />
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
        </>
      )}
      <div className="container-content relative">
        <div
          className={`py-16 md:py-24 lg:py-32 ${hasImage ? "max-w-3xl" : "max-w-4xl"}`}
        >
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {eyebrow && (
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-5"
              >
                <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
                  {eyebrow}
                </span>
              </motion.div>
            )}
            <motion.h1
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={`heading-display ${isDark ? "text-ink" : "text-ink"}`}
            >
              {title}
            </motion.h1>
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className={`text-lead mt-6 max-w-2xl ${isDark ? "text-ink-soft" : "text-ink-soft"}`}
            >
              {description}
            </motion.p>
            {children && (
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-10 flex flex-col gap-3 sm:flex-row"
              >
                {children}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
