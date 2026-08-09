import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function PrimaryButton({ children, onClick, to, className = "" }) {
  const Comp = to ? motion(Link) : motion.button;
  return (
    <Comp
      to={to}
      onClick={onClick}
      whileHover={{ y: -2, boxShadow: "0 10px 24px -6px rgba(37, 99, 235, 0.35)" }}
      whileTap={{ y: 0 }}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium bg-accent text-accent-ink shadow-sm transition-colors hover:bg-accent-hover font-body cursor-pointer ${className}`}
    >
      {children}
    </Comp>
  );
}

export function GhostButton({ children, onClick, to, href, className = "" }) {
  const Comp = to ? motion(Link) : href ? motion.a : motion.button;
  return (
    <Comp
      to={to}
      href={href}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-ink bg-bgElevated hover:bg-bgElevated2 border border-border hover:border-borderLight shadow-subtle transition-all font-body cursor-pointer ${className}`}
    >
      {children}
    </Comp>
  );
}
