"use client";

import { type ReactNode } from "react";
import { Check } from "lucide-react";

interface SLAFeatureProps {
  title: string;
  description: string;
  icon?: ReactNode;
  variant?: "light" | "dark";
}

export function SLAFeature({
  title,
  description,
  icon,
  variant = "light",
}: SLAFeatureProps) {
  const isDark = variant === "dark";
  return (
    <div className="flex gap-4">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border ${isDark ? "border-primary/30 bg-primary/15 text-primary-light" : "border-primary/20 bg-primary/10 text-primary"}`}
      >
        {icon ?? <Check className="h-5 w-5" />}
      </div>
      <div>
        <h3
          className={`text-base font-heading font-semibold text-ink`}
        >
          {title}
        </h3>
        <p
          className={`mt-1.5 text-sm leading-[1.7] text-ink-soft`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
