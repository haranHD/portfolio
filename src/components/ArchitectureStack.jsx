import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LAYERS } from "../data/layers.js";
import TechPill from "./TechPill.jsx";

export default function ArchitectureStack({ showDetails = false, compact = false }) {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (hovering) return;
    const id = setInterval(() => setActive((a) => (a + 1) % LAYERS.length), 2600);
    return () => clearInterval(id);
  }, [hovering]);

  return (
    <div>
      <div className="relative flex flex-col gap-2.5" onMouseLeave={() => setHovering(false)}>
        {LAYERS.map((layer, i) => {
          const isActive = active === i;
          const Icon = layer.icon;
          return (
            <motion.div
              key={layer.id}
              onMouseEnter={() => {
                setHovering(true);
                setActive(i);
              }}
              animate={{
                scale: isActive ? 1.01 : 1,
              }}
              transition={{ duration: 0.25 }}
              className={`relative rounded-xl flex items-center gap-3 cursor-pointer transition-all duration-300 border ${
                compact ? "px-3.5 py-2.5" : "px-4.5 py-3.5"
              } ${
                isActive
                  ? "bg-accent-light/40 border-accent/40 shadow-sm"
                  : "bg-bgElevated hover:bg-bgElevated2 border-border"
              }`}
            >
              <div
                className={`flex items-center justify-center rounded-lg shrink-0 transition-colors duration-300 ${
                  isActive ? "bg-accent text-accent-ink shadow-sm" : "bg-bgElevated2 text-dim"
                }`}
                style={{ width: compact ? 30 : 36, height: compact ? 30 : 36 }}
              >
                <Icon size={compact ? 14 : 16} />
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={`font-display font-semibold transition-colors duration-300 ${
                    compact ? "text-xs sm:text-sm" : "text-sm sm:text-base"
                  } ${isActive ? "text-ink font-bold" : "text-dim"}`}
                >
                  {layer.label}
                </p>
              </div>
              <span
                className={`text-[0.7rem] font-mono shrink-0 px-2 py-0.5 rounded ${
                  isActive
                    ? "bg-accent/15 text-accent font-semibold"
                    : "text-faint bg-bgElevated2"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {i < LAYERS.length - 1 && (
                <div className="absolute left-1/2 -bottom-2.5 w-px h-2.5 bg-border pointer-events-none" />
              )}
            </motion.div>
          );
        })}
      </div>

      {showDetails && (
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 p-5 sm:p-6 rounded-2xl border border-border bg-bgElevated shadow-subtle min-h-[110px]"
        >
          <div className="flex items-center justify-between gap-3 mb-2">
            <p className="font-display font-bold text-base text-ink">{LAYERS[active].label}</p>
            <span className="text-xs font-mono text-accent font-medium uppercase tracking-wider">
              Layer {String(active + 1).padStart(2, "0")} of 05
            </span>
          </div>
          <p className="text-dim leading-relaxed text-sm mb-4">{LAYERS[active].desc}</p>
          <div className="flex flex-wrap gap-2">
            {LAYERS[active].tech.map((t) => (
              <TechPill key={t}>{t}</TechPill>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
