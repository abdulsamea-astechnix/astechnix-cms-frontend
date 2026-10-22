"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "outline-white";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-light active:bg-primary-dark shadow-sm hover:shadow-md",
  secondary:
    "bg-white text-ink border border-border hover:border-accent hover:text-accent",
  ghost: "text-ink-soft hover:bg-surface",
  dark: "bg-primary text-white border border-primary hover:bg-primary-light",
  "outline-white":
    "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/60",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-lg",
  lg: "px-7 py-3.5 text-base rounded-lg",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: never;
    to?: never;
    externalHref?: never;
  };

type ButtonAsLink = CommonProps & {
  href?: string;
  to?: string;
  externalHref?: never;
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, "href">;

type ButtonAsAnchor = CommonProps & {
  externalHref: string;
  href?: never;
  to?: never;
} & Omit<React.ComponentPropsWithoutRef<"a">, "href">;

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

function getClasses(variant: Variant, size: Size, className: string): string {
  return `btn ${variants[variant]} ${sizes[size]} ${className}`.trim();
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = getClasses(variant, size, className);

  if ("to" in props && props.to) {
    const { to, ...rest } = props as ButtonAsLink;
    return (
      <Link href={to as string} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href as string} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if ("externalHref" in props && props.externalHref) {
    const { externalHref, ...rest } = props as ButtonAsAnchor;
    return (
      <a href={externalHref} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

export function SecondaryButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="secondary" {...(props as ButtonProps)} />;
}
