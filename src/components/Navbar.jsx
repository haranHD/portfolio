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
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navBg backdrop-blur-md border-b border-border shadow-card"
          : "bg-navBg backdrop-blur-sm border-b border-border/40"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-12 py-2.5 sm:py-3.5">
        {/* Brand Mark */}
        <button
          onClick={() => goTo("home")}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center font-display font-bold text-navy-950 text-xs sm:text-sm shadow-sm group-hover:scale-105 transition-transform border border-cyan-300/40">
              HH
            </div>
            <div>
              <p className="font-display font-bold text-sm sm:text-[1.05rem] text-ink tracking-tight group-hover:text-accent transition-colors leading-none mb-0.5 sm:mb-1">
                HARI HARAN
              </p>
              <p className="font-mono text-[0.58rem] sm:text-[0.62rem] text-accent/80 tracking-[0.18em] uppercase leading-none">
                FULL-STACK DEVELOPER
              </p>
            </div>
          </div>
        </button>

        {/* Center / Right Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV.map((n) => (
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
            aria-label="Toggle color theme"
            className="p-2 rounded-xl text-dim hover:text-ink hover:bg-bgElevated border border-border/60 hover:border-accent/40 transition-all cursor-pointer flex items-center justify-center"
            title={isDark ? "Switch to light mode" : "Switch to dark navy mode"}
          >
            {isDark ? (
              <Sun size={17} className="text-amber-400" />
            ) : (
              <Moon size={17} className="text-accent" />
            )}
          </motion.button>

          {/* Right-side CTA */}
          <PrimaryButton
            onClick={() => goTo("contact")}
            className="text-xs !py-2.5 !px-5 font-semibold"
          >
            Let's Talk <ArrowRight size={14} />
          </PrimaryButton>
        </nav>

        {/* Mobile Hamburger & Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle theme"
            className="p-2 rounded-xl text-dim hover:text-ink bg-bgElevated border border-border/60 cursor-pointer flex items-center justify-center"
          >
            {isDark ? (
              <Sun size={16} className="text-amber-400" />
            ) : (
              <Moon size={16} className="text-accent" />
            )}
          </motion.button>
          <button
            className="p-2 text-ink rounded-xl bg-bgElevated border border-border/80 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-bgElevated border-b border-border shadow-card backdrop-blur-xl"
          >
            <div className="flex flex-col gap-1 px-4 sm:px-6 py-4 sm:py-5">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => goTo(n.id)}
                  className="text-left py-2.5 text-sm font-medium text-dim hover:text-ink transition-colors border-b border-border/30 last:border-0 cursor-pointer"
                >
                  {n.label}
                </button>
              ))}
              <div className="pt-3">
                <PrimaryButton
                  onClick={() => goTo("contact")}
                  className="w-full justify-center !py-3 font-semibold text-sm"
                >
                  Let's Talk <ArrowRight size={14} />
                </PrimaryButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
