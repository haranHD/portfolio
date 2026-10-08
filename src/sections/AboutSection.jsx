import { motion } from "framer-motion";
import {
  Server,
  Layers,
  Database,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Terminal,
} from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import { PrimaryButton } from "../components/Buttons.jsx";

const PILLARS = [
  {
    icon: Server,
    title: "Backend & API Engineering",
    desc: "Architecting resilient RESTful APIs, business logic layers, and microservices using Java, Spring Boot, and Node.js with strict validation and security.",
  },
  {
    icon: Layers,
    title: "Web Application Development",
    desc: "Crafting modern, accessible, and high-performance React web interfaces built for complex workflows, business dashboards, and commercial platforms.",
  },
  {
    icon: Database,
    title: "Database Design & Integration",
    desc: "Designing optimized data schemas, ACID relational structures with MySQL/PostgreSQL, and scalable document databases with MongoDB.",
  },
  {
    icon: Cpu,
    title: "System Integration & Hardware",
    desc: "Connecting external services, third-party payment gateways, low-level TCP hardware sockets, and automated background jobs.",
  },
];

export default function AboutSection() {
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="w-full border-t border-border bg-bg py-14 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Positioning & Professional Bio */}
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>About Me</Eyebrow>
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-ink tracking-tight mb-4 sm:mb-5 leading-tight">
                Software Engineer & Freelance Developer Focused on Business Outcomes.
              </h2>
            </Reveal>

            <Reveal delay={0.04}>
              <div className="space-y-3 sm:space-y-4 text-dim text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                <p>
                  I am <strong className="text-ink font-semibold">Hari Haran</strong>, a Full-Stack
                  Software Developer and Freelance Software Professional. I partner with businesses,
                  startups, and organizations to design, engineer, and deploy reliable digital
                  solutions that solve concrete operational problems.
                </p>
                <p>
                  Rather than viewing software as isolated syntax, I treat every project as an
                  engineered business tool. My work spans complete product lifecycles — from backend
                  architecture and secure REST APIs to responsive React frontends, database modeling,
                  hardware communications, and automated pipelines.
                </p>
                <p>
                  Whether you need a custom business management platform, a high-throughput API layer,
                  or an integrated web application, my focus is always on clean architecture,
                  maintainable code, and predictable delivery.
                </p>
              </div>
            </Reveal>

            {/* Core Working Principles */}
            <Reveal delay={0.08}>
              <div className="p-4 sm:p-6 rounded-2xl border border-border bg-bgElevated shadow-card mb-6 sm:mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal size={16} className="text-accent" />
                  <p className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                    ENGINEERING PHILOSOPHY
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs text-dim">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent shrink-0" />
                    Clean modular codebases
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent shrink-0" />
                    Strict API contract design
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent shrink-0" />
                    Transparent milestones
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent shrink-0" />
                    Zero vendor lock-in
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div>
                <PrimaryButton onClick={() => goTo("contact")} className="w-full sm:w-auto justify-center !px-6 !py-3 text-sm">
                  Discuss a Project <ArrowRight size={15} />
                </PrimaryButton>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Key Engineering Pillars */}
          <div className="lg:col-span-6">
            <Reveal delay={0.06}>
              <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-5">
                {PILLARS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.18 }}
                      className="p-4.5 sm:p-6 rounded-2xl border border-border bg-bgElevated shadow-card hover:bg-bgElevated2 hover:border-borderLight transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent/10 text-accent border border-accent/20 flex items-center justify-center mb-3 sm:mb-4">
                          <Icon size={18} className="sm:hidden" />
                          <Icon size={20} className="hidden sm:block" />
                        </div>
                        <h3 className="font-display font-bold text-sm sm:text-base text-ink mb-1.5 sm:mb-2">
                          {item.title}
                        </h3>
                        <p className="text-dim text-xs sm:text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
