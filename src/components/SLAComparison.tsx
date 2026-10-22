"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useReducedMotion } from "../hooks/useReducedMotion";

export interface ComparisonRow {
  metric: string;
  internal: string;
  outsourced: string;
}

interface SLAComparisonProps {
  rows: ComparisonRow[];
  leftHeader?: string;
  rightHeader?: string;
}

export function SLAComparison({
  rows,
  leftHeader = "In-House Team",
  rightHeader = "AStechnix Managed",
}: SLAComparisonProps) {
  return (
    <>
      <div className="hidden overflow-hidden rounded-lg border border-border md:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-surface">
              <th className="px-6 py-4 text-left text-sm font-heading font-bold text-ink">
                Dimension
              </th>
              <th className="px-6 py-4 text-left text-sm font-heading font-bold text-ink-muted">
                {leftHeader}
              </th>
              <th className="px-6 py-4 text-left text-sm font-heading font-bold text-accent">
                {rightHeader}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.metric}
                className={i % 2 === 0 ? "bg-white" : "bg-surface/50"}
              >
                <td className="px-6 py-4 text-sm font-medium text-ink">
                  {row.metric}
                </td>
                <td className="px-6 py-4 text-sm text-ink-muted">
                  <span className="inline-flex items-center gap-2">
                    <X className="h-4 w-4 shrink-0 text-ink-muted/50" />
                    {row.internal}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-ink">
                  <span className="inline-flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-accent" />
                    {row.outsourced}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 md:hidden">
        {rows.map((row) => (
          <div
            key={row.metric}
            className="rounded-lg border border-border bg-white p-4"
          >
            <p className="text-sm font-heading font-bold text-ink">
              {row.metric}
            </p>
            <div className="mt-3 space-y-2">
              <div className="flex items-start gap-2">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted/50" />
                <div>
                  <p className="text-xs text-ink-muted">{leftHeader}</p>
                  <p className="text-sm text-ink-soft">{row.internal}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="text-xs text-accent">{rightHeader}</p>
                  <p className="text-sm font-medium text-ink">
                    {row.outsourced}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export interface SLAMetricTier {
  level: string;
  example: string;
  target: number;
  actual: number;
}

interface SLAMetricsProps {
  tiers: SLAMetricTier[];
}

export function SLAMetrics({ tiers }: SLAMetricsProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="rounded-xl border border-border bg-white p-6 md:p-8">
      <div className="grid grid-cols-12 items-center gap-4 border-b border-border pb-4 mb-2">
        <span className="col-span-2 eyebrow">Priority</span>
        <span className="col-span-4 eyebrow">Example</span>
        <span className="col-span-4 eyebrow">Response</span>
        <span className="col-span-2 eyebrow text-right">Actual</span>
      </div>
      {tiers.map((t, i) => (
        <div
          key={t.level}
          className="grid grid-cols-12 items-center gap-4 border-b border-border py-5 last:border-b-0"
        >
          <span className="col-span-2 font-mono text-xs uppercase tracking-wider text-accent">
            {t.level}
          </span>
          <span className="col-span-4 text-sm text-ink-soft">{t.example}</span>
          <div className="col-span-4">
            <div className="h-2 rounded-full bg-card-elevated overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={reducedMotion ? false : { width: 0 }}
                whileInView={{ width: `${(t.actual / t.target) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
          <span className="col-span-2 text-right font-bold tabular-nums text-ink text-sm">
            {t.actual}m
            <span className="text-ink-muted"> / {t.target}m</span>
          </span>
        </div>
      ))}
    </div>
  );
}
