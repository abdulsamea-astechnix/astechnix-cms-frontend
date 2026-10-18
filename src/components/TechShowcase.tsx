"use client";

import type { TechCategory } from "../types";

interface TechShowcaseProps {
  categories: TechCategory[];
  variant?: "light" | "dark";
}

export function TechShowcase({
  categories,
  variant = "light",
}: TechShowcaseProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`rounded-lg border p-8 md:p-10 ${isDark ? "border-border bg-card-elevated" : "border-border bg-card"}`}
    >
      <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-14">
        {categories.map((cat) => (
          <div key={cat.category} className="text-center">
            <h4
              className={`text-sm font-heading font-bold mb-4 text-ink`}
            >
              {cat.category}
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors border border-border bg-surface text-ink-soft hover:border-primary/30 hover:text-ink`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
