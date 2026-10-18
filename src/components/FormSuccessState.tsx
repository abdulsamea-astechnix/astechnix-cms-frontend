"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2, Mail, MessageSquare, Phone } from "lucide-react";
import { company } from "../config/company";

interface FormSuccessStateProps {
  onReset: () => void;
  title?: string;
  subtitle?: string;
}

export function FormSuccessState({
  onReset,
  title = "Request Received!",
  subtitle = "We're reviewing your requirements and will deliver your response within one business day.",
}: FormSuccessStateProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="py-2 text-center scroll-mt-20">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-success/20 bg-success/10 text-success">
        <CheckCircle2 className="h-5 w-5" />
      </div>

      <h3 className="mt-2 text-lg font-bold text-ink">{title}</h3>
      <p className="mt-0.5 text-xs text-ink-soft leading-tight">{subtitle}</p>

      <div className="mt-4 rounded-xl border border-border bg-surface p-3.5">
        <p className="text-xs font-semibold text-ink">
          Need an urgent response? Skip the wait:
        </p>

        <div className="mt-2.5 flex flex-col gap-1.5">
          <a
            href="https://wa.me/919004575425"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border border-success/30 bg-success/10 px-3 py-2 text-xs font-semibold text-success transition hover:bg-success/20"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Chat on WhatsApp
          </a>

          <a
            href={company.phoneHref}
            className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-semibold text-ink transition hover:bg-card-elevated"
          >
            <Phone className="h-3.5 w-3.5 text-ink-soft" />
            {company.phoneDisplay}
          </a>

          <a
            href={company.emailHref}
            className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-semibold text-ink transition hover:bg-card-elevated"
          >
            <Mail className="h-3.5 w-3.5 text-ink-soft" />
            {company.email}
          </a>
        </div>
      </div>

      <button
        onClick={onReset}
        className="mt-3 text-xs font-semibold text-primary hover:underline"
      >
        Request another estimate
      </button>
    </div>
  );
}
