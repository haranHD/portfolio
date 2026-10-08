import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Github, Linkedin, Mail, Code2 } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { PrimaryButton, GhostButton } from "../components/Buttons.jsx";
import portraitImg from "../assets/anime_hari.png";

const CORE_TECH = ["Java", "Spring Boot", "React", "Node.js", "MongoDB", "MySQL", "PostgreSQL"];

export default function Hero() {
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative w-full overflow-hidden border-b border-border bg-bg">
      {/* Background ambient lighting and subtle navy gradients */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-[28rem] h-[28rem] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-[24rem] h-[24rem] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-6 sm:pt-12 md:pt-16 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Positioning & CTAs */}
          <div className="lg:col-span-7">
            <Reveal>
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[0.68rem] sm:text-xs mb-4 sm:mb-6 border border-sky-400/30 bg-sky-500/10 text-sky-300 font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>AVAILABLE FOR FREELANCE PROJECTS</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-2xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.65rem] font-bold font-display text-ink tracking-tight leading-[1.2] sm:leading-[1.12] mb-3 sm:mb-6">
                Building Software That Solves{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
                  Real Business Problems.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-sm sm:text-base lg:text-lg max-w-2xl mb-6 sm:mb-8 text-dim leading-relaxed font-body">
                I build modern websites, web applications, REST APIs and business-focused software
                solutions using reliable technologies and clean engineering practices.
              </p>
            </Reveal>

            {/* CTAs & Socials - Responsive Stack on Mobile */}
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 mb-6 sm:mb-8">
                <PrimaryButton onClick={() => goTo("projects")} className="w-full sm:w-auto justify-center !py-3 sm:!py-3.5 !px-6 sm:!px-7 text-sm font-semibold">
                  View My Work <ArrowRight size={16} />
                </PrimaryButton>
                <GhostButton onClick={() => goTo("contact")} className="w-full sm:w-auto justify-center !py-3 sm:!py-3.5 !px-6 sm:!px-7 text-sm font-medium">
                  Let's Work Together
                </GhostButton>

                {/* Direct quick contact links */}
                <div className="flex items-center justify-center sm:justify-start gap-2 pt-1 sm:pt-0">
                  <a
                    href="https://github.com/haranHD"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 sm:p-3 rounded-xl border border-border/80 bg-bgElevated text-dim hover:text-ink hover:border-accent/50 hover:bg-bgElevated2 transition-all cursor-pointer"
                    title="GitHub Profile"
                    aria-label="GitHub Profile"
                  >
                    <Github size={17} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hari-haran-ad140/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 sm:p-3 rounded-xl border border-border/80 bg-bgElevated text-dim hover:text-sky-400 hover:border-accent/50 hover:bg-bgElevated2 transition-all cursor-pointer"
                    title="LinkedIn Profile"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={17} />
                  </a>
                  <a
                    href="mailto:haricode04@gmail.com"
                    className="p-2.5 sm:p-3 rounded-xl border border-border/80 bg-bgElevated text-dim hover:text-cyan-300 hover:border-accent/50 hover:bg-bgElevated2 transition-all cursor-pointer"
                    title="Send Email"
                    aria-label="Email Hari Haran"
                  >
                    <Mail size={17} />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Value Highlights */}
            <Reveal delay={0.18}>
              <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-6 sm:mb-8 text-xs text-dim">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-sky-400 shrink-0" /> Clean Architecture
                </span>
                <span className="text-border hidden sm:inline">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-sky-400 shrink-0" /> API & DB Integration
                </span>
                <span className="text-border hidden sm:inline">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-sky-400 shrink-0" /> Direct Communication
                </span>
              </div>
            </Reveal>

            {/* Core Technologies Row */}
            <Reveal delay={0.22}>
              <div className="pt-4 sm:pt-6 border-t border-border/60">
                <p className="font-mono text-[0.68rem] uppercase tracking-widest text-faint mb-2.5">
                  PRIMARY FOCUS & TECHNOLOGIES
                </p>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  {CORE_TECH.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono text-dim border border-border bg-bgElevated/90 hover:border-accent/40 hover:text-ink transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Professional Developer Portrait Container */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal delay={0.12}>
              <div className="relative group max-w-[270px] sm:max-w-sm lg:max-w-md w-full">
                {/* Tasteful gradient glow behind image */}
                <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-tr from-sky-500/20 via-blue-600/10 to-cyan-400/15 blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Clean Image Container */}
                <div className="relative rounded-2xl sm:rounded-[1.75rem] overflow-hidden border border-border bg-bgElevated shadow-portraitGlow">
                  {/* Subtle top glare line */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent z-20 pointer-events-none" />

                  {/* Portrait Image */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={portraitImg}
                      alt="Hari Haran — Full-Stack Developer & Freelance Software Professional"
                      className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-500"
                      loading="eager"
                    />

                    {/* Subtle bottom vignette gradient to integrate with container */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bgElevated via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>

                  {/* Integrated Info Bar inside container */}
                  <div className="p-3.5 sm:p-4.5 bg-bgElevated2 border-t border-border backdrop-blur-sm">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="font-display font-bold text-xs sm:text-sm text-ink">Hari Haran</p>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                        </div>
                        <p className="font-mono text-[0.62rem] sm:text-[0.68rem] text-accent tracking-wide uppercase">
                          Full-Stack Developer
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[0.62rem] sm:text-[0.68rem] font-mono text-dim bg-bgElevated border border-border">
                          <Code2 size={11} className="text-accent" /> Production-Ready
                        </span>
                      </div>
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
