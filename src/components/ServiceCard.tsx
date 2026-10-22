"use client";

import Link from "next/link";
import {
  ArrowRight,
  Laptop,
  ShieldCheck,
  CloudCog,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import type { ServiceSummary } from "../types";
import { useReducedMotion } from "../hooks/useReducedMotion";

const iconMap: Record<string, typeof Laptop> = {
  Laptop,
  ShieldCheck,
  CloudCog,
  Headphones,
};

interface ServiceCardProps {
  service: ServiceSummary;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const reducedMotion = useReducedMotion();
  const IconComponent = iconMap[service.icon] || Laptop;
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="card-glow group h-full"
      >
        <Link
          href={service.path}
          className="card card-hover group block h-full rounded-xl border-border bg-white p-6"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white group-hover:scale-110">
            <IconComponent className="h-6 w-6" />
          </div>
          <h3 className="mt-5 text-lg font-heading font-bold text-ink">
            {service.title}
          </h3>
          <p className="mt-3 text-sm text-ink-soft leading-[1.7]">
            {service.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
