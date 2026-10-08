import Reveal from "../components/Reveal.jsx";
import { STATS } from "../data/stats.js";
import { Code2, Cpu, Database, CheckCircle2 } from "lucide-react";

const STAT_ICONS = [Code2, Cpu, Database, CheckCircle2];

export default function Stats() {
  return (
    <section className="w-full border-b border-border bg-bg py-6 sm:py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
          {STATS.map((s, i) => {
            const Icon = STAT_ICONS[i % STAT_ICONS.length];
            return (
              <Reveal key={s.label} delay={i * 0.04}>
                <div className="p-3 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-border bg-bgElevated shadow-subtle hover:border-borderLight transition-all flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <p className="font-display font-bold text-lg sm:text-2xl lg:text-3xl text-ink tracking-tight">
                      {s.value}
                    </p>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent/10 text-accent border border-accent/20 flex items-center justify-center shrink-0">
                      <Icon size={14} className="sm:hidden" />
                      <Icon size={16} className="hidden sm:block" />
                    </div>
                  </div>
                  <div>
                    <p className="text-ink font-semibold text-xs sm:text-sm leading-snug mb-0.5">
                      {s.label}
                    </p>
                    <p className="text-dim text-[0.68rem] sm:text-xs font-mono leading-tight">
                      {s.sub}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
