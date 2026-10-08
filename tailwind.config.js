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
        inputBg: "var(--color-input-bg)",
        navBg: "var(--color-nav-bg)",
        border: "var(--color-border)",
        borderLight: "var(--color-border-light)",
        ink: "var(--color-ink)",
        inkSecondary: "var(--color-ink-secondary)",
        dim: "var(--color-dim)",
        faint: "var(--color-faint)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        "accent-light": "var(--color-accent-light)",
        "accent-ink": "var(--color-accent-ink)",
        navy: {
          950: "#060b14",
          900: "#0a1222",
          850: "#0c1527",
          800: "#111d35",
          700: "#1b2a47",
          600: "#283e67",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(2, 6, 23, 0.3), 0 1px 2px -1px rgba(2, 6, 23, 0.2)",
        card: "0 4px 20px -2px rgba(2, 6, 23, 0.5), 0 2px 6px -2px rgba(2, 6, 23, 0.3)",
        cardHover: "0 16px 36px -4px rgba(2, 6, 23, 0.7), 0 4px 12px -2px rgba(14, 165, 233, 0.12)",
        glow: "0 0 30px -4px rgba(14, 165, 233, 0.25)",
        portraitGlow: "0 10px 40px -10px rgba(14, 165, 233, 0.2), 0 20px 50px -15px rgba(2, 6, 23, 0.8)",
      },
    },
  },
  plugins: [],
};
