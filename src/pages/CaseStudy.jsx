import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ArrowRight,
  Check,
  Github,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { PROJECTS } from "../data/projects.js";

import Reveal from "../components/Reveal.jsx";
import TechPill from "../components/TechPill.jsx";
import SEO from "../components/SEO.jsx";
import { PrimaryButton, GhostButton } from "../components/Buttons.jsx";

export default function CaseStudy() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <Navigate to="/" replace />;

  const Icon = project.icon;
  const h2Class = "font-display font-bold text-lg sm:text-xl md:text-2xl text-ink mb-3 sm:mb-4 tracking-tight";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-16"
    >
      <SEO
        title={`${project.name} — Software Case Study | Hari Haran`}
        description={project.short || project.problem}
        canonical={`https://portfolio-bme3.vercel.app/projects/${project.id}`}
        ogImage="https://portfolio-bme3.vercel.app/hariharan-banner.png"
        ogType="article"
      />

      <Link
        to="/#projects"
        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-dim mb-6 sm:mb-8 hover:text-accent transition-colors cursor-pointer"
      >
        <ChevronLeft size={16} /> Back to all projects
      </Link>

      <Reveal>
        <div className="flex items-center gap-2 mb-2 sm:mb-3">
          <span className="font-mono text-[0.68rem] sm:text-xs font-bold text-accent tracking-widest uppercase">
            CONSULTING CASE STUDY / {project.category}
          </span>
        </div>
        <h1 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-ink tracking-tight mb-3 sm:mb-4">
          {project.name}
        </h1>
        <p className="text-dim text-sm sm:text-base lg:text-lg max-w-3xl mb-6 sm:mb-8 leading-relaxed">
          {project.short}
        </p>

        {/* Project Hero Visual Banner */}
        <div className="rounded-2xl sm:rounded-3xl aspect-[16/8] sm:aspect-[21/8] flex items-center justify-center mb-10 sm:mb-16 border border-border bg-gradient-to-br from-bgElevated via-bgElevated2 to-bg shadow-card relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(56,189,248,0.15),transparent_70%)]" />

          <div className="relative z-10 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl sm:rounded-2xl bg-bgElevated border border-border shadow-card flex items-center justify-center text-accent">
            <Icon size={36} className="sm:hidden" strokeWidth={1.3} />
            <Icon size={56} className="hidden sm:block" strokeWidth={1.3} />
          </div>
        </div>
      </Reveal>

      {/* 1. Problem & 2. Solution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 lg:gap-10 mb-8 sm:mb-14">
        {/* 1. Problem */}
        <Reveal>
          <div className="p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-border bg-bgElevated shadow-card h-full">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[0.68rem] sm:text-xs font-mono font-medium text-amber-500 bg-amber-500/10 border border-amber-500/20 mb-3 sm:mb-4">
              01 — THE PROBLEM
            </div>
            <h2 className={h2Class}>Business Challenge & Friction</h2>
            <p className="text-dim leading-relaxed text-xs sm:text-sm md:text-base">{project.problem}</p>
          </div>
        </Reveal>

        {/* 2. Solution */}
        <Reveal delay={0.06}>
          <div className="p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-border bg-bgElevated shadow-card h-full">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[0.68rem] sm:text-xs font-mono font-medium text-accent bg-accent/10 border border-accent/20 mb-3 sm:mb-4">
              02 — THE SOLUTION
            </div>
            <h2 className={h2Class}>Engineered Software Solution</h2>
            <p className="text-dim leading-relaxed text-xs sm:text-sm md:text-base">{project.solution}</p>
          </div>
        </Reveal>
      </div>

      {/* 3. Architecture */}
      <Reveal>
        <div className="p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-border bg-bgElevated shadow-card mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[0.68rem] sm:text-xs font-mono font-medium text-accent bg-accent/10 border border-accent/20 mb-3 sm:mb-4">
            03 — ARCHITECTURE
          </div>
          <h2 className={h2Class}>End-to-End System Architecture Flow</h2>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {project.architecture.map((stage, i) => (
              <span key={stage} className="flex items-center gap-2 sm:gap-3">
                <span className="px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl text-[0.7rem] sm:text-xs md:text-sm font-mono font-medium border border-border bg-bgElevated2 text-ink shadow-subtle">
                  {stage}
                </span>
                {i < project.architecture.length - 1 && (
                  <ArrowRight size={14} className="text-accent shrink-0" />
                )}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* 4. Key Features */}
      <Reveal>
        <div className="mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[0.68rem] sm:text-xs font-mono font-medium text-accent bg-accent/10 border border-accent/20 mb-3 sm:mb-4">
            04 — KEY FEATURES
          </div>
          <h2 className={h2Class}>Key Implementation Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
            {project.features.map((f) => (
              <div
                key={f}
                className="flex items-center gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl border border-border bg-bgElevated shadow-subtle"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-accent/10 text-accent border border-accent/20 flex items-center justify-center shrink-0">
                  <Check size={13} strokeWidth={2.5} />
                </div>
                <span className="text-dim text-xs sm:text-sm font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* 5. Technology */}
      <Reveal>
        <div className="p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-border bg-bgElevated shadow-card mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[0.68rem] sm:text-xs font-mono font-medium text-accent bg-accent/10 border border-accent/20 mb-3 sm:mb-4">
            05 — TECHNOLOGY
          </div>
          <h2 className={h2Class}>Technology Stack & Libraries</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechPill key={t} className="!text-xs sm:!text-sm !py-1 sm:!py-1.5 !px-2.5 sm:!px-3.5">
                {t}
              </TechPill>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Technical Challenges & Solutions */}
      {project.challenges && project.challenges.length > 0 && (
        <Reveal>
          <div className="mb-8 sm:mb-14">
            <h2 className={h2Class}>Engineering Challenges & Overcoming Them</h2>
            <div className="flex flex-col gap-3 sm:gap-4">
              {project.challenges.map((c) => (
                <div
                  key={c.t}
                  className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border bg-bgElevated shadow-subtle"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 size={16} className="text-accent" />
                    <p className="text-ink font-bold text-xs sm:text-sm md:text-base">{c.t}</p>
                  </div>
                  <p className="text-dim leading-relaxed text-xs sm:text-sm pl-6">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {/* 6. Result */}
      <Reveal>
        <div className="p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-emerald-500/30 bg-emerald-500/10 shadow-subtle mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck size={20} className="text-emerald-500 shrink-0" />
            <h2 className="font-display font-bold text-base sm:text-lg md:text-xl text-ink">06 — Measurable Result & Outcome</h2>
          </div>
          <p className="text-emerald-700 dark:text-emerald-200/90 leading-relaxed text-xs sm:text-sm md:text-base pl-7">
            {project.results}
          </p>
        </div>
      </Reveal>

      {/* Bottom Navigation CTA bar */}
      <Reveal>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
            {project.github && (
              <GhostButton href={project.github} target="_blank" rel="noreferrer" className="justify-center">
                <Github size={15} /> GitHub Repository
              </GhostButton>
            )}
            {project.demo && (
              <GhostButton href={project.demo} target="_blank" rel="noreferrer" className="justify-center">
                <ExternalLink size={15} /> Live Demonstration
              </GhostButton>
            )}
          </div>
          <PrimaryButton to="/#projects" className="justify-center">Back to All Projects</PrimaryButton>
        </div>
      </Reveal>
    </motion.div>
  );
}
