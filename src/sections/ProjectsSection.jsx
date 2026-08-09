import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, ExternalLink, ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import TechPill from "../components/TechPill.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import { PROJECTS } from "../data/projects.js";

function ProjectVisual({ project, reverse }) {
  const Icon = project.icon;
  return (
    <div className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] flex items-center justify-center border border-border/80 bg-gradient-to-br from-bgElevated2 via-bgElevated to-bgElevated2 group transition-all duration-300">
      {/* Ambient glow in visual */}
      <div
        className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity"
        style={{
          background: `radial-gradient(circle at ${reverse ? "70% 30%" : "30% 30%"}, rgba(37,99,235,0.15), transparent 65%)`,
        }}
      />
      {/* Architectural decorative lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-bgElevated/90 border border-border shadow-card flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
        <Icon size={44} strokeWidth={1.4} />
      </div>

      <span className="absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-mono font-medium text-dim border border-border/80 bg-bgElevated/90 backdrop-blur-sm shadow-subtle">
        {project.category}
      </span>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const reverse = index % 2 === 1;
  return (
    <Reveal delay={0.05}>
      <div className="p-6 sm:p-8 lg:p-9 rounded-3xl border border-border bg-bgElevated shadow-card hover:shadow-cardHover hover:border-borderLight transition-all duration-300 mb-8 sm:mb-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
            <ProjectVisual project={project} reverse={reverse} />
          </div>

          <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
                {String(index + 1).padStart(2, "0")} / {project.category}
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mb-3 tracking-tight">
              {project.name}
            </h3>

            <p className="text-dim leading-relaxed mb-5 text-sm sm:text-base">
              {project.short}
            </p>

            <div className="mb-6">
              <p className="text-[0.72rem] font-mono text-faint uppercase tracking-wider mb-2">
                TECH STACK & TOOLS
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <TechPill key={t}>{t}</TechPill>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/70">
              <Link
                to={`/projects/${project.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-accent text-accent-ink hover:bg-accent-hover shadow-subtle transition-all"
              >
                View Case Study <ArrowRight size={14} />
              </Link>
              {project.github && (
                <a
                  href={project.github}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm text-dim hover:text-ink bg-bgElevated2 hover:bg-border border border-border transition-colors font-medium"
                >
                  <Github size={14} /> GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm text-dim hover:text-ink bg-bgElevated2 hover:bg-border border border-border transition-colors font-medium"
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

  const categories = ["All", "Business Management", "System Integration", "AI & Real-Time"];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Business Management") return p.category.includes("Business") || p.category.includes("E-Commerce");
    if (filter === "System Integration") return p.category.includes("Integration") || p.category.includes("Automation");
    if (filter === "AI & Real-Time") return p.category.includes("Biometric") || p.category.includes("Real-Time");
    return true;
  });

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <Reveal>
          <Eyebrow>Selected Work</Eyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight mb-3">
            Real-World Software Projects
          </h2>
          <p className="text-dim max-w-xl text-base leading-relaxed">
            Systems, APIs, and integrations engineered for operational reliability — from business
            management suites to hardware communication layers.
          </p>
        </Reveal>

        {/* Category Filters */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-bgElevated border border-border shadow-subtle">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-accent text-accent-ink shadow-sm"
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
