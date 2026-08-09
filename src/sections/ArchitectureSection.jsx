import { CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import ArchitectureStack from "../components/ArchitectureStack.jsx";

const PILLARS = [
  {
    title: "Clean Separation of Concerns",
    desc: "Decoupled UI, API, and database layers allow independent scaling, testing, and maintenance.",
  },
  {
    title: "Contract-Driven APIs",
    desc: "Strictly typed REST and WebSocket endpoints ensure consistent communication across all services.",
  },
  {
    title: "Reliable Persistence & Caching",
    desc: "Structured relational and document databases designed around real application access patterns.",
  },
];

export default function ArchitectureSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-28 border-t border-border">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: Principles */}
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>How I Build Software</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight mb-4">
              Engineered Layer by Layer
            </h2>
            <p className="text-dim text-base leading-relaxed mb-8">
              Every production-grade application requires a solid foundation. From intuitive user interfaces
              to resilient backend APIs and performant databases, here is how each component connects.
            </p>
          </Reveal>

          <div className="flex flex-col gap-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.05}>
                <div className="p-4.5 rounded-xl border border-border bg-bgElevated shadow-subtle flex items-start gap-3.5">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-sm text-ink mb-1">{p.title}</h4>
                    <p className="text-dim text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right Side: Interactive Stack */}
        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            <div className="p-6 sm:p-8 rounded-3xl border border-border bg-bgElevated shadow-card">
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-border/70">
                <div>
                  <h3 className="font-display font-bold text-lg text-ink">Interactive Layer Inspector</h3>
                  <p className="text-dim text-xs">Hover over any layer to inspect technology choices and responsibilities.</p>
                </div>
              </div>
              <ArchitectureStack showDetails />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
