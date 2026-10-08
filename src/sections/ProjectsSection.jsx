import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, ExternalLink, ArrowRight, ShieldCheck } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import TechPill from "../components/TechPill.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import { PROJECTS } from "../data/projects.js";

function ProjectVisual({ project }) {
  const Icon = project.icon;
  return (
    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] flex items-center justify-center border border-border bg-gradient-to-br from-bgElevated via-bgElevated2 to-bg group transition-all duration-300">
      {/* Ambient glow in visual */}
      <div className="absolute inset-0 opacity-40 group-hover:opacity-75 transition-opacity bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.18),transparent_70%)]" />
      {/* Architectural decorative lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      <div className="relative z-10 w-16 h-16 sm:w-24 sm:h-24 rounded-2xl bg-bgElevated border border-border shadow-card flex items-center justify-center text-accent group-hover:scale-110 group-hover:border-accent/50 transition-all duration-300">
        <Icon size={36} className="sm:hidden" strokeWidth={1.4} />
        <Icon size={44} className="hidden sm:block" strokeWidth={1.4} />
      </div>

      <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg text-[0.68rem] sm:text-xs font-mono font-medium text-accent border border-accent/20 bg-bgElevated/90 backdrop-blur-sm shadow-subtle">
        {project.category}
      </span>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const reverse = index % 2 === 1;

  return (
    <Reveal delay={0.04}>
      <div className="p-4.5 sm:p-7 lg:p-9 rounded-2xl sm:rounded-3xl border border-border bg-bgElevated shadow-card hover:border-borderLight hover:shadow-cardHover transition-all duration-300 mb-6 sm:mb-10 group">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Visual Side */}
          <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
            <ProjectVisual project={project} />
          </div>

          {/* Details Side: Project, Problem, Solution, Technology, Result */}
          <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <span className="font-mono text-[0.68rem] sm:text-xs font-bold text-accent tracking-widest uppercase">
                {String(index + 1).padStart(2, "0")} / {project.category}
              </span>
            </div>

            <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-ink mb-2.5 sm:mb-3 tracking-tight group-hover:text-accent transition-colors">
              {project.name}
            </h3>

            {/* PROBLEM Statement */}
            <div className="mb-2.5 sm:mb-3.5">
              <p className="text-[0.68rem] font-mono font-semibold text-accent uppercase tracking-wider mb-1">
                PROBLEM
              </p>
              <p className="text-dim text-xs sm:text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* SOLUTION Description */}
            <div className="mb-3 sm:mb-4">
              <p className="text-[0.68rem] font-mono font-semibold text-emerald-400/90 uppercase tracking-wider mb-1">
                SOLUTION
              </p>
              <p className="text-dim text-xs sm:text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* RESULT */}
            {project.results && (
              <div className="mb-4 sm:mb-5 p-3 sm:px-4 sm:py-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-xs text-emerald-300/90 flex items-start gap-2">
                <ShieldCheck size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-emerald-200 uppercase font-mono text-[0.62rem] sm:text-[0.65rem] tracking-wider block">
                    BUSINESS RESULT
                  </strong>
                  <span className="text-[0.72rem] sm:text-xs leading-relaxed">{project.results}</span>
                </div>
              </div>
            )}

            {/* TECHNOLOGY Tags */}
            <div className="mb-5 sm:mb-6">
              <p className="text-[0.68rem] font-mono text-faint uppercase tracking-wider mb-1.5 sm:mb-2">
                TECHNOLOGY
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tech.map((t) => (
                  <TechPill key={t}>{t}</TechPill>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-3.5 sm:pt-4 border-t border-border">
              <Link
                to={`/projects/${project.id}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-accent text-accent-ink hover:bg-accent-hover shadow-subtle transition-all cursor-pointer"
              >
                View Case Study <ArrowRight size={14} />
              </Link>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-dim hover:text-ink bg-bgElevated2 hover:bg-bgElevated border border-border transition-colors font-medium cursor-pointer"
                >
                  <Github size={14} /> GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-dim hover:text-ink bg-bgElevated2 hover:bg-bgElevated border border-border transition-colors font-medium cursor-pointer"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Automation & Backend",
    "Business Applications",
    "Web Applications",
    "System Integration",
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Automation & Backend")
      return p.category.includes("Automation") || p.category.includes("Backend");
    if (filter === "Business Applications")
      return p.category.includes("Business") || p.category.includes("Commerce");
    if (filter === "Web Applications")
      return p.category.includes("Web") || p.category.includes("AI");
    if (filter === "System Integration")
      return p.category.includes("Integration") || p.category.includes("Real-Time");
    return true;
  });

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-24 lg:py-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-14">
        <Reveal>
          <Eyebrow>Selected Work</Eyebrow>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-ink tracking-tight mb-2 sm:mb-3">
            Real-World Software Engineering Projects
          </h2>
          <p className="text-dim max-w-xl text-sm sm:text-base leading-relaxed">
            Production-grade systems, automated monitoring pipelines, and hardware integration
            layers built to solve actual commercial and technical challenges.
          </p>
        </Reveal>

        {/* Category Filters with horizontal scroll on mobile */}
        <Reveal delay={0.06}>
          <div className="flex overflow-x-auto no-scrollbar gap-1.5 p-1.5 rounded-2xl bg-bgElevated border border-border shadow-subtle max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${filter === cat
                  ? "bg-accent text-accent-ink shadow-sm font-semibold"
                  : "text-dim hover:text-ink hover:bg-bgElevated2"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <div>
        {filteredProjects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
