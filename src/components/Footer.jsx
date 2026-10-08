import { useNavigate, useLocation } from "react-router-dom";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { NAV } from "../data/nav.js";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (id) => {
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-border bg-bg py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 pb-6 sm:pb-8 border-b border-border">
          <div>
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center font-display font-bold text-navy-950 text-xs shadow-sm border border-cyan-300/40">
                HH
              </div>
              <p className="font-display font-bold text-ink text-sm sm:text-base tracking-tight">HARI HARAN</p>
              <span className="text-border text-xs">•</span>
              <p className="font-mono text-xs text-accent">Full-Stack Developer</p>
            </div>

            <p className="text-dim text-xs leading-relaxed max-w-md">
              Building modern websites, web applications, REST APIs and business-focused software
              solutions using clean engineering practices.
            </p>

            <div className="flex items-center gap-2 mt-3 sm:mt-4">
              <a
                href="https://github.com/haranHD"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-bgElevated border border-border text-dim hover:text-ink hover:border-accent/40 transition-all cursor-pointer"
                title="GitHub: haranHD"
                aria-label="GitHub Profile"
              >
                <Github size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/hari-haran-ad140/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-bgElevated border border-border text-dim hover:text-accent hover:border-accent/40 transition-all cursor-pointer"
                title="LinkedIn: hari-haran-ad140"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="mailto:haricode04@gmail.com"
                className="p-2 rounded-lg bg-bgElevated border border-border text-dim hover:text-accent hover:border-accent/40 transition-all cursor-pointer"
                title="Email: haricode04@gmail.com"
                aria-label="Send Email"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 sm:pt-0">
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
              className="p-2 rounded-lg bg-bgElevated border border-border text-dim hover:text-ink hover:border-accent/40 transition-all cursor-pointer"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 sm:pt-6 text-xs text-faint font-mono text-center sm:text-left">
          <p>© {new Date().getFullYear()} Hari Haran. All rights reserved.</p>
          <p className="text-[0.68rem] sm:text-[0.72rem] text-dim">
            Freelance Software Developer • Global & Remote
          </p>
        </div>
      </div>
    </footer>
  );
}
