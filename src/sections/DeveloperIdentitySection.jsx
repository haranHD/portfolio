import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Layers,
  Database,
  Cpu,
  Terminal,
  Sparkles,
} from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import bannerImg from "../assets/hariharan-banner.png";

const TECH_BADGES = [
  { name: "Java", role: "Backend Core", icon: Terminal, primary: true },
  { name: "Spring Boot", role: "API & Enterprise", icon: Server, primary: true },
  { name: "React", role: "Frontend SPAs", icon: Code2, primary: true },
  { name: "Node.js", role: "Runtime & Services", icon: Cpu, primary: true },
  { name: "MongoDB", role: "Document Store", icon: Database, primary: true },
  { name: "MySQL", role: "Relational DB", icon: Database, primary: true },
];

export default function DeveloperIdentitySection() {
  return (
    <section className="relative w-full border-t border-border bg-bg py-12 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[20rem] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <Reveal>
            <Eyebrow>Developer Identity & Stack</Eyebrow>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-ink tracking-tight mb-3 sm:mb-4">
              Full-Stack Engineering & Problem Solving
            </h2>
            <p className="text-dim text-sm sm:text-base leading-relaxed">
              Bridging the gap between real business requirements and scalable software
              implementation across frontend, backend, APIs and database architectures.
            </p>
          </Reveal>
        </div>

        {/* Provided Developer Banner Asset - Strategically Integrated */}
        <Reveal delay={0.05}>
          <div className="relative group max-w-5xl mx-auto mb-8 sm:mb-14">
            {/* Subtle blue accent glow behind banner */}
            <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-sky-500/20 via-blue-600/10 to-indigo-500/20 blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Banner Frame */}
            <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-border bg-bgElevated shadow-card">
              {/* Subtle top glare highlight line */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none z-10" />

              <img
                src={bannerImg}
                alt="Hari Haran — Full-Stack Developer: Java, Spring Boot, React, Node.js, MongoDB, MySQL"
                className="w-full h-auto object-cover object-center transform group-hover:scale-[1.008] transition-transform duration-500"
                loading="lazy"
              />

              {/* Bottom Caption Bar */}
              <div className="px-3.5 py-2.5 sm:px-6 sm:py-3.5 bg-bgElevated2 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-3 text-xs">
                <div className="flex items-center gap-2 text-dim">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="font-mono text-[0.68rem] sm:text-[0.72rem] tracking-wide text-ink font-semibold">
                    HARI HARAN • OFFICIAL DEVELOPER IDENTITY
                  </span>
                </div>
                <div className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-[0.65rem] sm:text-[0.7rem] font-mono text-faint">
                  <span>Websites</span>
                  <span>•</span>
                  <span>Web Apps</span>
                  <span>•</span>
                  <span>REST APIs</span>
                  <span>•</span>
                  <span>System Integrations</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Clean Technology Stack Presentation */}
        <div className="max-w-5xl mx-auto">
          <Reveal delay={0.08}>
            <div className="mb-4 sm:mb-6 flex items-center justify-between gap-3 pb-2.5 border-b border-border">
              <h3 className="font-mono text-[0.72rem] sm:text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles size={13} className="text-accent" /> PRIMARY TECHNOLOGY STACK
              </h3>
              <span className="text-[0.68rem] sm:text-xs font-mono text-faint">Production-Tested</span>
            </div>
          </Reveal>

          {/* Primary 6 Technologies in an elegant responsive grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5">
            {TECH_BADGES.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <Reveal key={tech.name} delay={0.08 + i * 0.03}>
                  <motion.div
                    whileHover={{ y: -3, borderColor: "rgba(56, 189, 248, 0.4)" }}
                    transition={{ duration: 0.18 }}
                    className="p-3 sm:p-4 rounded-xl border border-border bg-bgElevated shadow-subtle hover:bg-bgElevated2 hover:border-borderLight transition-all flex flex-col items-center text-center group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent/10 text-accent border border-accent/20 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                      <Icon size={16} className="sm:hidden" />
                      <Icon size={18} className="hidden sm:block" />
                    </div>
                    <p className="font-display font-bold text-xs sm:text-sm text-ink mb-0.5">{tech.name}</p>
                    <p className="font-mono text-[0.62rem] sm:text-[0.65rem] text-dim">{tech.role}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
