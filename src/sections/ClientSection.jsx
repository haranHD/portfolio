import { ArrowRight, Laptop, Network, Cog } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import { PrimaryButton } from "../components/Buttons.jsx";

const SOLUTIONS = [
  {
    icon: Laptop,
    q: "Need a custom web or business application?",
    a: "I architect and build turnkey web applications, client portals, and administrative dashboards tailored directly to your operational workflows.",
    tags: ["Custom Web Apps", "Admin Portals", "Role-Based Auth", "React & Node"],
  },
  {
    icon: Network,
    q: "Need high-performance REST APIs & integrations?",
    a: "I engineer secure, documented APIs and connect disparate third-party services, payment processors, and legacy systems into a unified pipeline.",
    tags: ["RESTful APIs", "Spring Boot", "Database Sync", "Payment Gateways"],
  },
  {
    icon: Cog,
    q: "Need to automate manual operations?",
    a: "I replace tedious, error-prone manual spreadsheets and browser workflows with automated background scripts that run reliably 24/7.",
    tags: ["Browser Automation", "Scheduled Crawlers", "Data Pipelines"],
  },
];

export default function ClientSection() {
  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="w-full border-t border-border bg-bg py-14 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-14">
          <Reveal>
            <Eyebrow>Freelance Consulting & Solutions</Eyebrow>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-ink tracking-tight mb-3 sm:mb-4">
              Have a Business Problem? Let's Engineer the Solution.
            </h2>
            <p className="text-dim text-sm sm:text-base leading-relaxed">
              Whether you are an early-stage startup founder, an established business owner, or an
              engineering team seeking dedicated freelance talent, I deliver dependable results with
              direct communication and clean code.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {SOLUTIONS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.q} delay={i * 0.06}>
                <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl h-full border border-border bg-bgElevated shadow-card hover:bg-bgElevated2 hover:border-borderLight transition-all flex flex-col justify-between group">
                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 sm:mb-6 border border-accent/25 group-hover:scale-105 transition-transform">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-ink mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                      {item.q}
                    </h3>
                    <p className="text-dim text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                      {item.a}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-3 sm:pt-4 border-t border-border">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[0.68rem] sm:text-[0.72rem] font-mono text-dim bg-bgElevated2 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-border"
                      >
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
            <PrimaryButton onClick={() => goTo("contact")} className="w-full sm:w-auto justify-center !px-8 !py-3.5 sm:!py-4 text-sm font-semibold">
              Discuss Your Project With Me <ArrowRight size={16} />
            </PrimaryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
