import { CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import ArchitectureStack from "../components/ArchitectureStack.jsx";

const PILLARS = [
  {
    title: "Clean Separation of Concerns",
    desc: "Decoupled frontend interfaces, REST API controllers, and database layers allow independent scaling, isolated testing, and long-term maintainability.",
  },
  {
    title: "Contract-Driven APIs & Validation",
    desc: "Strictly validated endpoints (DTOs, Swagger, JWT tokens) protect business logic and guarantee predictable communication across all clients.",
  },
  {
    title: "Reliable Persistence & Schema Design",
    desc: "ACID-compliant relational tables (MySQL, PostgreSQL) paired with fast document structures (MongoDB) tailored specifically to query access patterns.",
  },
];

export default function ArchitectureSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-24 lg:py-28 border-t border-border">
      <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
        {/* Left Side: Principles */}
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>How I Build Software</Eyebrow>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-ink tracking-tight mb-3 sm:mb-4">
              Engineered Layer by Layer for Maximum Reliability
            </h2>
            <p className="text-dim text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Every production-grade application requires a solid foundation. From responsive user
              interfaces to resilient backend services and optimized data storage, here is how each
              architectural layer connects.
            </p>
          </Reveal>

          <div className="flex flex-col gap-3 sm:gap-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={0.05 + i * 0.04}>
                <div className="p-4 sm:p-4.5 rounded-xl sm:rounded-2xl border border-border bg-bgElevated shadow-subtle flex items-start gap-3 sm:gap-3.5">
                  <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-xs sm:text-sm text-ink mb-0.5 sm:mb-1">{p.title}</h4>
                    <p className="text-dim text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right Side: Interactive Stack */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="p-4 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl border border-border bg-bgElevated shadow-card">
              <div className="flex items-center justify-between gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-border">
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-ink">Interactive Layer Inspector</h3>
                  <p className="text-dim text-xs">Inspect how each layer handles responsibilities and tooling.</p>
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
