import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Layout } from "@/layouts/Layout";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AStechnix — Managed IT Outsourcing & Technology Delivery",
  description:
    "Managed IT support, endpoint security, and proactive IT outsourcing for growing businesses, SMBs and Startups. 24/7 patching, data backup, and DPDP compliance.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    images: ["https://bolt.new/static/og_default.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://bolt.new/static/og_default.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${jetBrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Decodes URL parameters and restores browser history for SPAs */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (l) {
                if (l.search[1] === "/") {
                  var decoded = l.search
                    .slice(1)
                    .split("&")
                    .map(function (s) {
                      return s.replace(/~and~/g, "&");
                    })
                    .join("?");
                  window.history.replaceState(
                    null,
                    null,
                    l.pathname.slice(0, -1) + decoded + l.hash,
                  );
                }
              })(window.location);
            `,
          }}
        />

        {/* ========================================================== */}
        {/* Google Consent Mode v2 — MUST run before any GTM/gtag scripts */}
        {/* ========================================================== */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }

              (function () {
                var defaultConsent = {
                  ad_storage: "denied",
                  ad_user_data: "denied",
                  ad_personalization: "denied",
                  analytics_storage: "denied",
                  functionality_storage: "denied",
                  security_storage: "granted",
                  wait_for_update: 500,
                };

                try {
                  var raw = localStorage.getItem("user_cookie_preferences");
                  if (raw) {
                    var saved = JSON.parse(raw);
                    if (saved && typeof saved.analytics === "boolean") {
                      defaultConsent.analytics_storage = saved.analytics ? "granted" : "denied";
                      defaultConsent.ad_storage = saved.marketing ? "granted" : "denied";
                      defaultConsent.ad_user_data = saved.marketing ? "granted" : "denied";
                      defaultConsent.ad_personalization = saved.marketing ? "granted" : "denied";
                      defaultConsent.functionality_storage = saved.functional ? "granted" : "denied";
                    }
                  }
                } catch (e) {
                  /* localStorage unavailable — keep all denied */
                }

                gtag("consent", "default", defaultConsent);
              })();
            `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != "dataLayer" ? "&l=" + l : "";
                j.async = true;
                j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                f.parentNode.insertBefore(j, f);
              })(window, document, "script", "dataLayer", "GTM-N422H5NK");
            `,
          }}
        />

        {/* Google Tag Manager / Analytics (gtag.js) & Google Ads */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId || "AW-18247449976"}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag("js", new Date());

              /* Google Analytics 4 (Entire Website & Blog Tracking) */
              ${gaId ? `gtag("config", "${gaId}");` : ""}

              /* Google Ads & Phone Call Conversion */
              gtag("config", "AW-18247449976");
              gtag("config", "AW-18247449976/YBIuCIeayuMcEPj6h_1D", {
                phone_conversion_number: "+91 90045 75425"
              });
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N422H5NK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ErrorBoundary>
          <Layout>{children}</Layout>
        </ErrorBoundary>
      </body>
    </html>
  );
}
