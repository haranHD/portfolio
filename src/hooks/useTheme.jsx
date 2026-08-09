import React, { createContext, useContext, useState, useEffect, useLayoutEffect } from "react";

export const THEMES = {
  light: {
    "--color-bg": "#ffffff",
    "--color-bg-elevated": "#ffffff",
    "--color-bg-elevated2": "#f8fafc",
    "--color-border": "#e2e8f0",
    "--color-border-light": "#cbd5e1",
    "--color-ink": "#0f172a",
    "--color-ink-secondary": "#1e293b",
    "--color-dim": "#475569",
    "--color-faint": "#64748b",
    "--color-accent": "#2563eb",
    "--color-accent-hover": "#1d4ed8",
    "--color-accent-light": "#eff6ff",
    "--color-accent-ink": "#ffffff",
  },
  dark: {
    "--color-bg": "#0a0a0b",
    "--color-bg-elevated": "#131316",
    "--color-bg-elevated2": "#19191d",
    "--color-border": "#242428",
    "--color-border-light": "#2e2e33",
    "--color-ink": "#ededef",
    "--color-ink-secondary": "#d1d1d6",
    "--color-dim": "#96969e",
    "--color-faint": "#64748b",
    "--color-accent": "#3b82f6",
    "--color-accent-hover": "#2563eb",
    "--color-accent-light": "rgba(59, 130, 246, 0.15)",
    "--color-accent-ink": "#ffffff",
  },
};

export function applyTheme(themeName) {
  const root = document.documentElement;
  const themeVars = THEMES[themeName] || THEMES.light;

  // Set CSS variables directly on root element for guaranteed instant application
  Object.entries(themeVars).forEach(([prop, val]) => {
    root.style.setProperty(prop, val);
  });

  if (document.body) {
    document.body.style.backgroundColor = themeVars["--color-bg"];
    document.body.style.color = themeVars["--color-ink"];
  }

  if (themeName === "dark") {
    root.classList.add("dark");
    root.setAttribute("data-theme", "dark");
  } else {
    root.classList.remove("dark");
    root.setAttribute("data-theme", "light");
  }
}

const ThemeContext = createContext({
  theme: "light",
  isDark: false,
  toggleTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio_theme");
      if (saved === "dark" || saved === "light") return saved;
      localStorage.removeItem("theme");
      return "light";
    } catch {
      return "light";
    }
  });

  // Apply immediately on mount and on every theme change
  useLayoutEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem("portfolio_theme", theme);
    } catch (e) {
      console.warn(e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
