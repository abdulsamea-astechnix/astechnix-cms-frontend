/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(222, 24%, 10%)",
        foreground: "hsl(210, 18%, 94%)",
        primary: {
          DEFAULT: "hsl(84, 78%, 56%)",
          foreground: "hsl(222, 26%, 8%)",
          dark: "hsl(84, 70%, 46%)",
          light: "hsl(84, 82%, 66%)",
        },
        card: {
          DEFAULT: "hsl(222, 22%, 13%)",
          elevated: "hsl(222, 20%, 17%)",
        },
        surface: "hsl(222, 20%, 16%)",
        border: {
          DEFAULT: "hsl(222, 18%, 20%)",
          light: "hsl(222, 16%, 24%)",
        },
        muted: {
          DEFAULT: "hsl(215, 10%, 56%)",
          foreground: "hsl(215, 10%, 56%)",
        },
        "brand-dark": "hsl(222, 24%, 10%)",
        "brand-accent": "hsl(84, 78%, 56%)",
        "brand-accent-light": "hsl(84, 82%, 66%)",
        "brand-accent-dark": "hsl(84, 70%, 46%)",
        canvas: "hsl(222, 24%, 10%)",
        ink: {
          DEFAULT: "hsl(210, 18%, 94%)",
          soft: "hsl(210, 12%, 70%)",
          muted: "hsl(215, 10%, 52%)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-jakarta)", "'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
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
        "display-lg": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },
      transitionTimingFunction: {
        enterprise: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.2)",
        "card-hover": "0 12px 28px -4px rgba(0, 0, 0, 0.3), 0 4px 10px -2px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
