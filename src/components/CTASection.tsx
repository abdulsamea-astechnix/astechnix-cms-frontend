import { type ReactNode } from "react";
import { Button } from "./Button";
import { ctaConfig } from "@/config/cta";

interface CTASectionProps {
  title?: ReactNode;
  description?: string;
  children?: ReactNode;
}

export function CTASection({
  title = "Let's build something extraordinary together",
  description = "From first call to delivery in weeks. Tell us what you need. We'll show you how we'd approach it.",
  children,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container-content relative py-14 md:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-2 text-white">{title}</h2>
          <p className="mt-5 text-lg text-[hsl(216,18%,88%)] leading-relaxed max-w-xl mx-auto">
            {description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center">
            {children ?? (
              <Button
                href={ctaConfig.primary.path}
                variant="primary"
                size="lg"
              >
                {ctaConfig.primary.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
