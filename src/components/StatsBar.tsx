"use client";

import { motion } from "framer-motion";
import type { ProofPoint } from "../types";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface StatsBarProps {
  points: ProofPoint[];
  variant?: "light" | "dark" | "tainted";
}

export function StatsBar({ points, variant = "light" }: StatsBarProps) {
  const reducedMotion = useReducedMotion();
  const isDark = variant === "dark";
  const isTainted = variant === "tainted";

  return (
    <section
      className={`${isTainted ? "bg-surface" : isDark ? "bg-primary text-white" : "bg-white border-y border-border"}`}
    >
      <div className="container-content">
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:py-16">
          {points.map((point, i) => (
            <motion.div
              key={point.label}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center md:text-left"
            >
              <p
                className={`font-heading text-4xl font-extrabold tracking-tight tabular-nums md:text-5xl ${isDark ? "text-white" : "text-primary"}`}
              >
                {point.value}
                {point.suffix && (
                  <span className="text-accent">{point.suffix}</span>
                )}
              </p>
              <p
                className={`mt-2 text-sm ${isDark ? "text-[hsl(216,18%,88%)]" : "text-ink-muted"}`}
              >
                {point.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
