import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { NAV } from "../data/nav.js";
import { PrimaryButton } from "./Buttons.jsx";
import { useTheme } from "../hooks/useTheme.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-border shadow-subtle"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 lg:px-12 py-4">
        <button onClick={() => goTo("home")} className="text-left group cursor-pointer">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center font-display font-bold text-accent-ink text-sm shadow-sm group-hover:scale-105 transition-transform">
              H
            </div>
            <div>
              <p className="font-display font-bold text-[1.05rem] text-ink tracking-tight group-hover:text-accent transition-colors">
                HARI HARAN
              </p>
              <p className="font-mono text-[0.62rem] text-faint tracking-[0.18em]">
                FULL-STACK DEVELOPER
              </p>
            </div>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.slice(0, -1).map((n) => (
            <button
              key={n.id}
              onClick={() => goTo(n.id)}
              className="nav-link text-sm font-medium text-dim hover:text-ink transition-colors cursor-pointer"
            >
              {n.label}
            </button>
          ))}

          {/* Theme Switcher */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle theme"
            className="p-2.5 rounded-xl text-dim hover:text-ink hover:bg-bgElevated border border-border hover:border-accent/40 shadow-subtle transition-all cursor-pointer flex items-center justify-center"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun size={18} className="text-amber-400 animate-spin-slow" /> : <Moon size={18} className="text-accent" />}
          </motion.button>

          <PrimaryButton onClick={() => goTo("contact")} className="text-xs !py-2.5 !px-5">
            Let's Work Together <ArrowRight size={14} />
          </PrimaryButton>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle theme"
            className="p-2 rounded-xl text-dim hover:text-ink bg-bgElevated border border-border cursor-pointer flex items-center justify-center"
          >
            {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-accent" />}
          </motion.button>
          <button
            className="p-2 text-ink rounded-lg bg-bgElevated border border-border"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-bgElevated border-b border-border shadow-card"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => goTo(n.id)}
                  className="text-left py-2.5 text-sm font-medium text-dim hover:text-ink transition-colors border-b border-border/40 last:border-0"
                >
                  {n.label}
                </button>
              ))}
              <div className="pt-3">
                <PrimaryButton onClick={() => goTo("contact")} className="w-full justify-center">
                  Let's Work Together <ArrowRight size={14} />
                </PrimaryButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
