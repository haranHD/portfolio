import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Radio,
  Wrench,
  Star,
} from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import { PRIMARY_SKILLS, SKILL_GROUPS } from "../data/skills.js";

const GROUP_ICONS = {
  Frontend: Code,
  Backend: Server,
  Database: Database,
  "API & Integration": Radio,
  "Tools & Deployment": Wrench,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full border-t border-border bg-bg py-14 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <Reveal>
            <Eyebrow>Technical Expertise</Eyebrow>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-ink tracking-tight mb-2 sm:mb-4">
              Core Technologies & Architecture Competencies
            </h2>
            <p className="text-dim text-sm sm:text-base leading-relaxed">
              Organized by engineering domain. Strongest primary technologies are highlighted
              first, reflecting production and commercial development experience.
            </p>
          </Reveal>
        </div>

        {/* Primary Strongest Technologies Showcase */}
        <Reveal delay={0.06}>
          <div className="mb-8 sm:mb-14">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Star size={15} className="text-amber-400 fill-amber-400" />
              <h3 className="font-mono text-xs font-bold text-accent uppercase tracking-widest">
                CORE PRODUCTION SPECIALTIES
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {PRIMARY_SKILLS.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ y: -3, borderColor: "rgba(56, 189, 248, 0.5)" }}
                  transition={{ duration: 0.18 }}
                  className="p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-border bg-bgElevated shadow-card hover:bg-bgElevated2 hover:border-borderLight transition-all relative overflow-hidden group"
                >
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <h4 className="font-display font-bold text-base sm:text-lg text-ink group-hover:text-accent transition-colors">
                      {tech.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded-full text-[0.62rem] sm:text-[0.68rem] font-mono font-medium text-accent bg-accent/10 border border-accent/20">
                      {tech.category}
                    </span>
                  </div>
                  <p className="text-dim text-xs leading-relaxed">
                    {tech.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Grouped Technologies: 5 Required Groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Object.entries(SKILL_GROUPS).map(([group, skills], idx) => {
            const Icon = GROUP_ICONS[group] || Code;
            return (
              <Reveal key={group} delay={idx * 0.04}>
                <div className="p-4.5 sm:p-6 rounded-2xl border border-border bg-bgElevated shadow-card h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3.5 sm:mb-5 pb-2.5 sm:pb-3 border-b border-border">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent/10 text-accent border border-accent/20 flex items-center justify-center">
                        <Icon size={15} />
                      </div>
                      <h4 className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                        {group}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {skills.map((s) => (
                        <span
                          key={s.name}
                          className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[0.72rem] sm:text-xs font-mono transition-colors ${
                            s.primary
                              ? "bg-accent/15 text-accent border border-accent/35 font-medium"
                              : "bg-bgElevated2 text-dim border border-border hover:text-ink hover:border-borderLight"
                          }`}
                        >
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
