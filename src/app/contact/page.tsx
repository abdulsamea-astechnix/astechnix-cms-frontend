"use client";

import { useEffect, useRef } from "react";
import { Seo } from "@/components/Seo";
import { PageHeader, type Crumb } from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/config/company";
import { Mail, Phone, MapPin } from "lucide-react";

const crumbs: Crumb[] = [{ label: "Home", path: "/" }, { label: "Contact" }];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <>
      <Seo
        meta={{
          title: "Contact AStechnix | Request IT Support",
          description:
            "Get in touch with AStechnix to discuss endpoint management, security monitoring, vulnerability checks, and IT helpdesk support. Email, phone, and inquiry form.",
        }}
      />
      <PageHeader
        breadcrumbs={crumbs}
        title="Get in Touch"
        description="Tell us about your IT support requirements. We will respond within one business day to discuss how we can help keep your operations running smoothly."
      />

      <section className="section-padding bg-card">
        <div className="container-content">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div ref={sectionRef} className="scroll-mt-24 lg:col-span-7">
              <SectionHeader
                eyebrow="Inquiry"
                title="Send us a message"
                className="mb-8"
              />
              <div className="card p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Direct Contact"
                title="Other ways to reach us"
                className="mb-6"
              />
              <div className="space-y-4">
                <a
                  href={company.emailHref}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">Email</p>
                    <p className="text-sm text-ink-soft">{company.email}</p>
                  </div>
                </a>
                <a
                  href={company.phoneHref}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">Phone</p>
                    <p className="text-sm text-ink-soft">
                      {company.phoneDisplay}
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">Headquarters</p>
                    <p className="text-sm text-ink-soft">
                      {company.headquarters}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-sm font-heading font-semibold text-ink mb-3">
                  Connect on social
                </h3>
                <div className="flex gap-3">
                  <a
                    href={company.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink-soft transition-colors hover:border-primary hover:text-primary"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                  <a
                    href={company.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink-soft transition-colors hover:border-primary hover:text-primary"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.04c-5.5 0-10 4.5-10 10 0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.79c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.98c4.78-.75 8.44-4.88 8.44-9.88 0-5.5-4.5-10-10-10z" />
                    </svg>
                  </a>
                  <a
                    href={company.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink-soft transition-colors hover:border-primary hover:text-primary"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
