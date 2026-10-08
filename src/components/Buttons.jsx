import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function PrimaryButton({ children, onClick, to, href, className = "", ...props }) {
  const Comp = to ? motion(Link) : href ? motion.a : motion.button;
  return (
    <Comp
      to={to}
      href={href}
      onClick={onClick}
      whileHover={{ y: -2, boxShadow: "0 8px 24px -4px rgba(56, 189, 248, 0.3)" }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.18 }}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-accent text-accent-ink shadow-sm transition-all hover:bg-accent-hover cursor-pointer font-body border border-cyan-400/30 ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function GhostButton({ children, onClick, to, href, className = "", ...props }) {
  const Comp = to ? motion(Link) : href ? motion.a : motion.button;
  return (
    <Comp
      to={to}
      href={href}
      onClick={onClick}
      whileHover={{ y: -2, borderColor: "rgba(56, 189, 248, 0.4)", boxShadow: "0 6px 20px -4px rgba(6, 11, 20, 0.6)" }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.18 }}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-ink bg-bgElevated/90 hover:bg-bgElevated2 border border-border transition-all cursor-pointer font-body backdrop-blur-sm ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
