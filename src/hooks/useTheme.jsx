import React, { createContext, useContext, useState, useEffect, useLayoutEffect } from "react";

export const THEMES = {
  dark: {
    "--color-bg": "#060b14",
    "--color-bg-elevated": "#0c1527",
    "--color-bg-elevated2": "#111d35",
    "--color-input-bg": "#091120",
    "--color-nav-bg": "rgba(6, 11, 20, 0.92)",
    "--color-border": "#1b2a47",
    "--color-border-light": "#283e67",
    "--color-ink": "#f8fafc",
    "--color-ink-secondary": "#e2e8f0",
    "--color-dim": "#94a3b8",
    "--color-faint": "#64748b",
    "--color-accent": "#38bdf8",
    "--color-accent-hover": "#0ea5e9",
    "--color-accent-light": "rgba(56, 189, 248, 0.12)",
    "--color-accent-ink": "#060b14",
  },
  light: {
    "--color-bg": "#f8fafc",
    "--color-bg-elevated": "#ffffff",
    "--color-bg-elevated2": "#f1f5f9",
    "--color-input-bg": "#ffffff",
    "--color-nav-bg": "rgba(248, 250, 252, 0.94)",
    "--color-border": "#e2e8f0",
    "--color-border-light": "#cbd5e1",
    "--color-ink": "#0f172a",
    "--color-ink-secondary": "#1e293b",
    "--color-dim": "#475569",
    "--color-faint": "#64748b",
    "--color-accent": "#0284c7",
    "--color-accent-hover": "#0369a1",
    "--color-accent-light": "rgba(2, 132, 199, 0.1)",
    "--color-accent-ink": "#ffffff",
  },
};

export function applyTheme(themeName) {
  const root = document.documentElement;
  const themeVars = THEMES[themeName] || THEMES.dark;

  // Set CSS variables directly on root element for guaranteed instant application
  Object.entries(themeVars).forEach(([prop, val]) => {
    root.style.setProperty(prop, val);
  });

  if (document.body) {
    document.body.style.backgroundColor = themeVars["--color-bg"];
    document.body.style.color = themeVars["--color-ink"];
  }

  if (themeName === "light") {
    root.classList.remove("dark");
    root.classList.add("light");
    root.setAttribute("data-theme", "light");
  } else {
    root.classList.remove("light");
    root.classList.add("dark");
    root.setAttribute("data-theme", "dark");
  }
}

const ThemeContext = createContext({
  theme: "dark",
  isDark: true,
  toggleTheme: () => { },
  setTheme: () => { },
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio_theme");
      if (saved === "dark" || saved === "light") return saved;
      return "dark";
    } catch {
      return "dark";
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
