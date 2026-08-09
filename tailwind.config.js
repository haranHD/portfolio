/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        bgElevated: "var(--color-bg-elevated)",
        bgElevated2: "var(--color-bg-elevated2)",
        border: "var(--color-border)",
        borderLight: "var(--color-border-light)",
        ink: "var(--color-ink)",
        dim: "var(--color-dim)",
        faint: "var(--color-faint)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        "accent-light": "var(--color-accent-light)",
        "accent-ink": "var(--color-accent-ink)",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)",
        card: "0 4px 12px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -2px rgba(15, 23, 42, 0.03)",
        cardHover: "0 12px 28px -4px rgba(15, 23, 42, 0.09), 0 4px 12px -2px rgba(15, 23, 42, 0.04)",
        glow: "0 0 25px -4px rgba(37, 99, 235, 0.25)",
      },
    },
  },
  plugins: [],
};
