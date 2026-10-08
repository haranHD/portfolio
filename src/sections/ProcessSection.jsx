import { motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import { PROCESS } from "../data/process.js";

export default function ProcessSection() {
  return (
    <section className="w-full border-t border-border bg-bg py-14 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
          <Reveal>
            <Eyebrow>Development Process</Eyebrow>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-ink tracking-tight mb-2 sm:mb-3">
              A Structured Roadmap From Problem to Production
            </h2>
            <p className="text-dim max-w-xl text-sm sm:text-base leading-relaxed">
              Every freelance engagement follows a clear 5-phase engineering methodology to
              ensure predictability, transparent communication, and high-quality deliverables.
            </p>
          </Reveal>
        </div>

        {/* 5-Phase Process Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(56, 189, 248, 0.45)" }}
                transition={{ duration: 0.18 }}
                className="p-4.5 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-border bg-bgElevated shadow-card hover:bg-bgElevated2 hover:border-borderLight transition-all h-full flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-border">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold text-accent bg-accent/10 border border-accent/20 group-hover:scale-105 transition-transform">
                      {p.n}
                    </span>
                    <span className="text-[0.62rem] sm:text-[0.65rem] font-mono text-faint uppercase tracking-widest">
                      PHASE {p.n}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-ink mb-1.5 group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-dim text-xs leading-relaxed mb-3">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-border">
                  <p className="font-mono text-[0.62rem] text-accent uppercase tracking-wider mb-0.5">
                    DELIVERABLE
                  </p>
                  <p className="text-[0.72rem] sm:text-xs text-dim">
                    {p.deliverable}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
