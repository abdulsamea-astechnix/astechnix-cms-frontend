"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { company } from "../config/company";
import {
  footerServices,
  footerEngagement,
  footerCompany,
  footerLegal,
  type NavItem,
} from "../config/navigation";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-content py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo variant="light" className="h-9 w-auto" />
            <p className="mt-5 text-sm text-white/50 leading-relaxed max-w-xs">
              {company.tagline}. Headquartered in {company.headquarters}.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href={company.emailHref}
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-brand-accent" />
                {company.email}
              </a>
              <a
                href={company.phoneHref}
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-brand-accent" />
                {company.phoneDisplay}
              </a>
              <p className="flex items-center gap-3 text-white/60">
                <MapPin className="h-4 w-4 text-brand-accent" />
                {company.headquarters}
              </p>
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
              <FooterColumn title="Services" items={footerServices} />
              <FooterColumn title="Engagement" items={footerEngagement} />
              <FooterColumn title="Company" items={footerCompany} />
              <FooterColumn title="Legal" items={footerLegal} />
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
            <button
              onClick={() =>
                window.dispatchEvent(new Event("opencookiepreferencecenter"))
              }
              className="text-sm text-white/40 transition-colors hover:text-white"
            >
              Cookie Settings
            </button>
          </div>
          <div className="flex items-center gap-3">
            <SocialLink href={company.social.linkedin} label="LinkedIn">
              {/* LinkedIn SVG */}
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </SocialLink>
            <SocialLink href={company.social.facebook} label="Facebook">
              {/* Facebook SVG */}
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-10 4.5-10 10 0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.79c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.98c4.78-.75 8.44-4.88 8.44-9.88 0-5.5-4.5-10-10-10z" />
              </svg>
            </SocialLink>
            <SocialLink href={company.social.instagram} label="Instagram">
              {/* Instagram SVG */}
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <div>
      <h3 className="text-sm font-heading font-semibold text-white mb-4">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/60 transition-all duration-300 hover:bg-brand-accent hover:text-white"
    >
      {children}
    </a>
  );
}
