import { useNavigate, useLocation } from "react-router-dom";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { NAV } from "../data/nav.js";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (id) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-border bg-bgElevated py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-8 border-b border-border/70">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center font-display font-bold text-accent-ink text-xs">
                H
              </div>
              <p className="font-display font-bold text-ink tracking-tight">HARI HARAN</p>
            </div>
            <p className="text-dim text-xs leading-relaxed max-w-sm">
              Full-Stack Developer • Building practical, reliable software for real-world business problems.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <a
                href="https://github.com/haranHD"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-bgElevated2 border border-border text-dim hover:text-ink hover:border-accent/40 transition-all"
                title="GitHub: haranHD"
              >
                <Github size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/hari-haran-ad140/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-bgElevated2 border border-border text-dim hover:text-[#0077b5] hover:border-accent/40 transition-all"
                title="LinkedIn: hari-haran-ad140"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="mailto:haricode04@gmail.com"
                className="p-2 rounded-lg bg-bgElevated2 border border-border text-dim hover:text-accent hover:border-accent/40 transition-all"
                title="Email: haricode04@gmail.com"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => goTo(n.id)}
                className="text-xs font-medium text-dim hover:text-ink transition-colors cursor-pointer"
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-bgElevated2 border border-border text-dim hover:text-ink hover:border-borderLight transition-all cursor-pointer"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-faint font-mono">
          <p>© {new Date().getFullYear()} Hari Haran. All rights reserved.</p>
          <p className="text-[0.72rem]">Designed & Engineered with React + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
