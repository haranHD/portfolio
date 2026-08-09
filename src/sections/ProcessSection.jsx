import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import { PROCESS } from "../data/process.js";

export default function ProcessSection() {
  return (
    <section className="w-full border-t border-border bg-bgElevated/30 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal>
            <Eyebrow>Development Workflow</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight mb-3">
              A Clear Process, Start to Finish
            </h2>
            <p className="text-dim max-w-xl text-base leading-relaxed">
              Every project follows a structured engineering roadmap to ensure predictability, code quality, and timely delivery.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <div className="p-6 rounded-2xl border border-border bg-bgElevated shadow-subtle hover:border-borderLight hover:shadow-card transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-mono font-bold text-accent bg-accent-light/60 border border-accent/20 group-hover:scale-105 transition-transform">
                      {p.n}
                    </span>
                    <span className="text-[0.65rem] font-mono text-faint uppercase tracking-wider">
                      PHASE {p.n}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-ink mb-2">{p.title}</h3>
                  <p className="text-dim text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
