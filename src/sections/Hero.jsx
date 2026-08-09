import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import ArchitectureStack from "../components/ArchitectureStack.jsx";
import { PrimaryButton, GhostButton } from "../components/Buttons.jsx";
import { TECH_ROW } from "../data/stats.js";
import { INTEGRATIONS } from "../data/layers.js";

export default function Hero() {
  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative w-full overflow-hidden border-b border-border/40">
      {/* Background ambient lighting and pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pt-12 md:pt-20 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-6 border border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-mono">
                <motion.span
                  className="w-2 h-2 rounded-full bg-emerald-500"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                AVAILABLE FOR FREELANCE PROJECTS
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.8rem] leading-[1.12] mb-6 font-display font-bold text-ink tracking-tight">
                Building Software That Solves{" "}
                <span className="text-accent relative inline-block">
                  Real Business Problems.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-base sm:text-lg max-w-2xl mb-8 text-dim leading-relaxed">
                Full-Stack Developer specializing in modern web applications, REST APIs,
                business management systems, database solutions, automation and system integration.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="flex flex-wrap items-center gap-3.5 mb-10">
                <PrimaryButton onClick={() => goTo("projects")} className="!px-7 !py-3.5 text-sm">
                  View My Work <ArrowRight size={16} />
                </PrimaryButton>
                <GhostButton onClick={() => goTo("contact")} className="!px-7 !py-3.5 text-sm">
                  Let's Work Together
                </GhostButton>

                <div className="flex items-center gap-2 pl-2">
                  <a
                    href="https://github.com/haranHD"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-border bg-bgElevated text-dim hover:text-ink hover:border-accent/40 hover:shadow-subtle transition-all cursor-pointer"
                    title="GitHub: haranHD"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hari-haran-ad140/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-border bg-bgElevated text-dim hover:text-[#0077b5] hover:border-accent/40 hover:shadow-subtle transition-all cursor-pointer"
                    title="LinkedIn: hari-haran-ad140"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="mailto:haricode04@gmail.com"
                    className="p-3 rounded-xl border border-border bg-bgElevated text-dim hover:text-accent hover:border-accent/40 hover:shadow-subtle transition-all cursor-pointer"
                    title="Email: haricode04@gmail.com"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="flex flex-wrap items-center gap-4 mb-8 text-xs text-dim">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-accent" /> Clean Architecture
                </span>
                <span className="text-border">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-accent" /> API & DB Integration
                </span>
                <span className="text-border">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-accent" /> Direct Communication
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="pt-6 border-t border-border/80">
                <p className="font-mono text-[0.7rem] uppercase tracking-widest text-faint mb-3">
                  CORE TECHNOLOGIES
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {TECH_ROW.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-dim border border-border bg-bgElevated shadow-subtle hover:border-borderLight transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive System Architecture Card */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="relative">
                {/* Soft ambient backdrop glow */}
                <div className="absolute -inset-4 rounded-3xl opacity-30 pointer-events-none bg-[radial-gradient(circle_at_40%_30%,rgba(217,119,6,0.15),transparent_70%)]" />

                <div className="relative p-6 sm:p-7 rounded-2xl border border-border bg-bgElevated shadow-card">
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-border/70">
                    <p className="font-mono text-[0.72rem] font-semibold text-accent tracking-widest uppercase">
                      END-TO-END ARCHITECTURE
                    </p>
                    <span className="inline-flex items-center gap-1 text-[0.65rem] font-mono text-faint bg-bgElevated2 px-2 py-0.5 rounded">
                      <Sparkles size={10} className="text-accent" /> INTERACTIVE
                    </span>
                  </div>

                  <ArchitectureStack compact />

                  <div className="mt-5 pt-4 border-t border-border">
                    <p className="font-mono text-[0.68rem] text-faint mb-2.5 uppercase tracking-wider">
                      CAPABILITIES & INTEGRATIONS
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {INTEGRATIONS.map((it) => {
                        const Icon = it.icon;
                        return (
                          <span
                            key={it.label}
                            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border bg-bgElevated2 font-mono text-[0.72rem] text-dim hover:border-borderLight transition-colors"
                          >
                            <Icon size={12} className="text-accent" />
                            {it.label}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
