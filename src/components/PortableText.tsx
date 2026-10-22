"use client";

import { PortableText as BasePortableText } from "@portabletext/react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import type { TypedObject } from "sanity";

interface PortableTextProps {
  value: TypedObject[] | unknown[];
}

const components = {
  types: {
    image: ({
      value,
    }: {
      value: { asset?: { _ref: string }; alt?: string };
    }) => {
      const imageUrl = value?.asset?._ref
        ? urlFor(value).width(1200).url()
        : "";
      return (
        <div className="my-8 overflow-hidden rounded-xl">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={value?.alt ?? ""}
              className="w-full rounded-xl"
            />
          )}
        </div>
      );
    },
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children?: React.ReactNode;
      value?: { href?: string };
    }) => {
      const href = value?.href ?? "#";
      if (href.startsWith("/")) {
        return (
          <Link
            href={href}
            className="text-accent underline underline-offset-2 hover:text-accent-light"
          >
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-2 hover:text-accent-light"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-2xl font-heading font-extrabold text-ink mt-10 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-xl font-heading font-bold text-ink mt-8 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-lg font-heading font-bold text-ink mt-6 mb-2">
        {children}
      </h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-base font-heading font-semibold text-ink mt-5 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-[3px] border-accent pl-5 my-6 italic text-ink-soft">
        {children}
      </blockquote>
    ),
  },
};

export function PortableText({ value }: PortableTextProps) {
  return (
    <div className="prose-content">
      <BasePortableText
        value={value as TypedObject[]}
        components={components}
      />
    </div>
  );
}
