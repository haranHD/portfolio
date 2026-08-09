import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import TechPill from "../components/TechPill.jsx";
import { SKILLS } from "../data/skills.js";
import { Code, Server, Database, Wrench } from "lucide-react";

const GROUP_ICONS = {
  Frontend: Code,
  Backend: Server,
  Databases: Database,
  Tools: Wrench,
};

export default function AboutSection() {
  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-28 border-t border-border">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Bio */}
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>About Me</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight mb-5">
              More Than Just Code
            </h2>
            <p className="text-dim text-base leading-relaxed mb-4">
              I'm a Full-Stack Developer dedicated to building practical, high-impact software solutions for
              real-world business problems. My expertise covers modern frontend interfaces, backend services,
              databases, APIs, automation workflows, and hardware integration.
            </p>
            <p className="text-dim text-base leading-relaxed mb-8">
              I believe in understanding the business logic and operational workflow before writing a single line
              of code — software creates real value only when it aligns seamlessly with how organizations operate.
            </p>

            <div className="p-5 rounded-2xl border border-border bg-bgElevated shadow-subtle">
              <p className="font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                CORE PHILOSOPHY
              </p>
              <p className="text-xs text-dim leading-relaxed">
                Clean architectural boundaries, minimal complexity, predictable state management, and reliable deployment.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Skills Matrix */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-5">
              {Object.entries(SKILLS).map(([group, items]) => {
                const Icon = GROUP_ICONS[group] || Code;
                return (
                  <div
                    key={group}
                    className="p-6 rounded-2xl border border-border bg-bgElevated shadow-subtle hover:border-borderLight hover:shadow-card transition-all"
                  >
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-accent-light/50 text-accent flex items-center justify-center">
                        <Icon size={16} />
                      </div>
                      <h3 className="font-mono text-xs font-bold text-accent uppercase tracking-widest">
                        {group}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((s) => (
                        <TechPill key={s}>{s}</TechPill>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
