import { motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import TechPill from "../components/TechPill.jsx";
import { SERVICES } from "../data/services.js";

export default function ServicesSection() {
  return (
    <section id="services" className="w-full border-t border-border bg-bgElevated/30 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <Reveal>
          <Eyebrow>Services & Capabilities</Eyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight mb-4">
            What I Can Build For You
          </h2>
          <p className="text-dim max-w-2xl text-base leading-relaxed mb-12">
            End-to-end engineering solutions built with business value, scalability, and maintainability in mind.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-7 sm:p-8 rounded-3xl h-full flex flex-col border border-border bg-bgElevated shadow-card hover:shadow-cardHover hover:border-borderLight transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-accent-light/50 text-accent border border-accent/20">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-ink mb-2.5">{s.title}</h3>
                  <p className="text-dim text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
                    {s.tech.map((t) => (
                      <TechPill key={t}>{t}</TechPill>
                    ))}
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
