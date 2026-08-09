import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ArrowRight, Check, Github, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "../data/projects.js";
import { CASE_STUDY_PROCESS } from "../data/process.js";
import Reveal from "../components/Reveal.jsx";
import TechPill from "../components/TechPill.jsx";
import { PrimaryButton, GhostButton } from "../components/Buttons.jsx";

export default function CaseStudy() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <Navigate to="/" replace />;

  const Icon = project.icon;
  const h2Class = "font-display font-bold text-xl sm:text-2xl text-ink mb-4 tracking-tight";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-dim mb-8 hover:text-ink transition-colors"
      >
        <ChevronLeft size={16} /> Back to all projects
      </Link>

      <Reveal>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
            {project.category}
          </span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-5xl text-ink tracking-tight mb-6">
          {project.name}
        </h1>

        {/* Project Hero Visual Banner */}
        <div className="rounded-3xl aspect-[16/7] sm:aspect-[21/8] flex items-center justify-center mb-16 border border-border bg-gradient-to-br from-bgElevated2 via-bgElevated to-bgElevated2 shadow-card relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-bgElevated border border-border shadow-card flex items-center justify-center text-accent">
            <Icon size={56} strokeWidth={1.3} />
          </div>
        </div>
      </Reveal>

      {/* Problem & Solution Grid */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
        <Reveal>
          <div className="p-7 sm:p-8 rounded-3xl border border-border bg-bgElevated shadow-card h-full">
            <h2 className={h2Class}>The Business Problem</h2>
            <p className="text-dim leading-relaxed text-sm sm:text-base">{project.problem}</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="p-7 sm:p-8 rounded-3xl border border-border bg-bgElevated shadow-card h-full">
            <h2 className={h2Class}>The Engineered Solution</h2>
            <p className="text-dim leading-relaxed text-sm sm:text-base">{project.solution}</p>
          </div>
        </Reveal>
      </div>

      {/* Architecture Flow */}
      <Reveal>
        <div className="p-7 sm:p-8 rounded-3xl border border-border bg-bgElevated shadow-card mb-16">
          <h2 className={h2Class}>System Architecture Flow</h2>
          <div className="flex flex-wrap items-center gap-3">
            {project.architecture.map((stage, i) => (
              <span key={stage} className="flex items-center gap-3">
                <span className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium border border-border bg-bgElevated2 text-ink shadow-subtle">
                  {stage}
                </span>
                {i < project.architecture.length - 1 && (
                  <ArrowRight size={15} className="text-accent shrink-0" />
                )}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Key Features */}
      <Reveal>
        <div className="mb-16">
          <h2 className={h2Class}>Key Platform Features</h2>
          <div className="grid sm:grid-cols-2 gap-3.5">
            {project.features.map((f) => (
              <div
                key={f}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-bgElevated shadow-subtle"
              >
                <div className="w-6 h-6 rounded-md bg-accent-light/50 text-accent flex items-center justify-center shrink-0">
                  <Check size={14} strokeWidth={2.5} />
                </div>
                <span className="text-dim text-sm font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Tech Stack */}
      <Reveal>
        <div className="p-7 sm:p-8 rounded-3xl border border-border bg-bgElevated shadow-card mb-16">
          <h2 className={h2Class}>Technology Stack</h2>
          <div className="flex flex-wrap gap-2.5">
            {project.tech.map((t) => (
              <TechPill key={t} className="!text-sm !py-1.5 !px-3">
                {t}
              </TechPill>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Development Process */}
      <Reveal>
        <div className="mb-16">
          <h2 className={h2Class}>Development Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CASE_STUDY_PROCESS.map((p) => (
              <div
                key={p.n}
                className="p-5 rounded-2xl border border-border bg-bgElevated shadow-subtle flex items-start gap-3"
              >
                <span className="font-mono text-accent text-xs font-bold px-2 py-0.5 rounded bg-accent-light/60 border border-accent/20 shrink-0">
                  {p.n}
                </span>
                <div>
                  <p className="text-ink font-semibold text-sm mb-0.5">{p.title}</p>
                  <p className="text-dim text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Challenges & Solutions */}
      <Reveal>
        <div className="mb-16">
          <h2 className={h2Class}>Technical Challenges & Solutions</h2>
          <div className="flex flex-col gap-4">
            {project.challenges.map((c) => (
              <div
                key={c.t}
                className="p-6 rounded-2xl border border-border bg-bgElevated shadow-subtle"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={16} className="text-accent" />
                  <p className="text-ink font-bold text-sm sm:text-base">{c.t}</p>
                </div>
                <p className="text-dim leading-relaxed text-xs sm:text-sm pl-6">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Results */}
      <Reveal>
        <div className="p-7 sm:p-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 shadow-subtle mb-16">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck size={20} className="text-emerald-600 dark:text-emerald-400" />
            <h2 className="font-display font-bold text-xl text-ink">Project Outcome & Results</h2>
          </div>
          <p className="text-dim leading-relaxed text-sm sm:text-base">{project.results}</p>
        </div>
      </Reveal>

      {/* Bottom CTA bar */}
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="flex flex-wrap items-center gap-3">
            {project.github && (
              <GhostButton href={project.github}>
                <Github size={15} /> GitHub Repo
              </GhostButton>
            )}
            {project.demo && (
              <GhostButton href={project.demo}>
                <ExternalLink size={15} /> Live Demo
              </GhostButton>
            )}
          </div>
          <PrimaryButton to="/">Back to All Work</PrimaryButton>
        </div>
      </Reveal>
    </motion.div>
  );
}
