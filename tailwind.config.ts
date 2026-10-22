/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(0 0% 100%)",
        foreground: "hsl(220 25% 12%)",
        primary: {
          DEFAULT: "hsl(218 68% 22%)",
          foreground: "hsl(0 0% 100%)",
          dark: "hsl(218 68% 18%)",
          light: "hsl(218 68% 28%)",
        },
        accent: {
          DEFAULT: "hsl(34 72% 50%)",
          foreground: "hsl(0 0% 100%)",
          dark: "hsl(34 72% 42%)",
          light: "hsl(34 72% 58%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 100%)",
          elevated: "hsl(216 20% 96%)",
        },
        surface: {
          DEFAULT: "hsl(216 20% 96%)",
          dark: "hsl(218 68% 22%)",
        },
        border: {
          DEFAULT: "hsl(216 18% 88%)",
          light: "hsl(216 18% 90%)",
        },
        muted: {
          DEFAULT: "hsl(220 12% 52%)",
          foreground: "hsl(220 12% 52%)",
        },
        "brand-dark": "hsl(218 68% 22%)",
        "brand-accent": "hsl(34 72% 50%)",
        "brand-accent-light": "hsl(34 72% 58%)",
        "brand-accent-dark": "hsl(34 72% 42%)",
        canvas: "hsl(0 0% 100%)",
        ink: {
          DEFAULT: "hsl(220 25% 12%)",
          soft: "hsl(220 12% 52%)",
          muted: "hsl(220 12% 52%)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: [
          "var(--font-jakarta)",
          "'Plus Jakarta Sans'",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "JetBrains Mono",
          "ui-monospace",
          "monospace",
        ],
      },
      maxWidth: {
        content: "1200px",
        prose: "720px",
        wide: "1440px",
      },
      borderRadius: {
        DEFAULT: "8px",
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
      },
      spacing: {
        section: "6rem",
        "section-sm": "3.5rem",
        "section-lg": "8rem",
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": [
          "4.5rem",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
      },
      transitionTimingFunction: {
        enterprise: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 0 20px hsla(34, 72%, 50%, 0.1), 0 4px 10px -2px rgba(0, 0, 0, 0.06)",
        "card-navy":
          "0 0 25px hsla(218, 68%, 22%, 0.15)",
      },
    },
  },
  plugins: [],
};
