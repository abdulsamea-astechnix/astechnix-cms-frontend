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
import type { ServiceSummary } from "../types";
import { useReducedMotion } from "../hooks/useReducedMotion";

// Map string identifiers to actual icon components
const iconMap: Record<string, any> = {
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

  // Safely resolve the icon component on the client side
  const IconComponent = iconMap[service.icon] || Laptop;

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
      <Link
        href={service.path}
        className="group block h-full rounded-lg border border-ink/10 bg-white p-7 shadow-card transition-all duration-300 hover:shadow-card-hover hover:border-ink/15"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent transition-colors duration-300 group-hover:bg-brand-accent group-hover:text-white">
          <IconComponent className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-lg font-heading font-bold text-ink">
          {service.title}
        </h3>
        <p className="mt-3 text-sm text-ink-soft leading-[1.7]">
          {service.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  );
}
