import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import TechPill from "../components/TechPill.jsx";
import { SERVICES } from "../data/services.js";

export default function ServicesSection() {
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="w-full border-t border-border bg-bg py-14 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
          <Reveal>
            <Eyebrow>Services & Capabilities</Eyebrow>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-ink tracking-tight mb-2 sm:mb-3">
              What I Can Build For Your Business
            </h2>
            <p className="text-dim max-w-2xl text-sm sm:text-base leading-relaxed">
              Full-lifecycle engineering services designed to turn operational requirements into
              dependable, production-ready digital products.
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <button
              onClick={() => goTo("contact")}
              className="hidden md:inline-flex items-center gap-2 text-xs font-mono font-medium text-accent hover:underline transition-colors cursor-pointer"
            >
              Need a custom solution? Let's discuss <ArrowRight size={14} />
            </button>
          </Reveal>
        </div>

        {/* 7 Services in a Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.04}>
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgba(56, 189, 248, 0.45)" }}
                  transition={{ duration: 0.2 }}
                  className="p-5 sm:p-7 rounded-2xl h-full flex flex-col justify-between border border-border bg-bgElevated shadow-card hover:bg-bgElevated2 hover:border-borderLight transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5 sm:mb-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-accent/10 text-accent border border-accent/25 group-hover:scale-105 transition-transform">
                        <Icon size={18} className="sm:hidden" strokeWidth={1.8} />
                        <Icon size={22} className="hidden sm:block" strokeWidth={1.8} />
                      </div>
                      <span className="font-mono text-[0.65rem] sm:text-[0.68rem] text-faint tracking-wider">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base sm:text-lg text-ink mb-1.5 sm:mb-2.5 group-hover:text-accent transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-dim text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                      {s.desc}
                    </p>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-border">
                    <p className="font-mono text-[0.62rem] sm:text-[0.65rem] text-faint uppercase tracking-wider mb-1.5">
                      Key Competencies
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {s.tech.map((t) => (
                        <TechPill key={t}>{t}</TechPill>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
