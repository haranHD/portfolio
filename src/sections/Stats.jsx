import Reveal from "../components/Reveal.jsx";
import { STATS } from "../data/stats.js";
import { Code2, Cpu, Database, CheckCheck } from "lucide-react";

const STAT_ICONS = [Code2, Cpu, Database, CheckCheck];

export default function Stats() {
  return (
    <section className="w-full border-b border-border bg-bgElevated/40 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {STATS.map((s, i) => {
            const Icon = STAT_ICONS[i % STAT_ICONS.length];
            return (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="p-5 sm:p-6 rounded-2xl border border-border/80 bg-bgElevated shadow-subtle hover:border-borderLight hover:shadow-card transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-display font-bold text-2xl sm:text-3xl text-ink tracking-tight">
                      {s.value}
                    </p>
                    <div className="w-8 h-8 rounded-lg bg-accent-light/50 text-accent flex items-center justify-center">
                      <Icon size={16} />
                    </div>
                  </div>
                  <p className="text-dim text-xs sm:text-sm font-medium leading-snug">{s.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
