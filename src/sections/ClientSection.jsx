import { ArrowRight, Laptop, Network, Cog } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import { PrimaryButton } from "../components/Buttons.jsx";

const SOLUTIONS = [
  {
    icon: Laptop,
    q: "Need a custom business application?",
    a: "I can design and engineer the complete system from front to back, tailored directly to your business workflows.",
    tags: ["Web Portals", "Admin Dashboards", "Role-Based Auth"],
  },
  {
    icon: Network,
    q: "Need to connect existing systems & APIs?",
    a: "I can build high-performance APIs, middleware, and integrations so disparate systems communicate seamlessly.",
    tags: ["REST & WebSocket", "Third-Party APIs", "Data Pipelines"],
  },
  {
    icon: Cog,
    q: "Need to automate manual workflows?",
    a: "I turn repetitive, error-prone manual operations into automated software that runs reliably in the background.",
    tags: ["Browser Automation", "Scheduled Jobs", "Data Extraction"],
  },
];

export default function ClientSection() {
  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="w-full border-t border-border bg-bgElevated/30 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <Reveal>
          <Eyebrow>Problem Solving</Eyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight mb-4 max-w-2xl">
            Have a Business Challenge? Let's Build the Solution.
          </h2>
          <p className="text-dim text-base leading-relaxed mb-12 max-w-xl">
            Direct collaboration, clear milestones, and production-tested engineering practices.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {SOLUTIONS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.q} delay={i * 0.08}>
                <div className="p-7 sm:p-8 rounded-3xl h-full border border-border bg-bgElevated shadow-card hover:shadow-cardHover hover:border-borderLight transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-accent-light/60 text-accent flex items-center justify-center mb-6 border border-accent/20">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-ink mb-3">{item.q}</h3>
                    <p className="text-dim text-sm leading-relaxed mb-6">{item.a}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/70">
                    {item.tags.map((t) => (
                      <span key={t} className="text-[0.72rem] font-mono text-faint bg-bgElevated2 px-2.5 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="flex justify-center">
            <PrimaryButton onClick={() => goTo("contact")} className="!px-8 !py-4 text-sm font-semibold">
              Start a Conversation <ArrowRight size={16} />
            </PrimaryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
