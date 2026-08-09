import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Check,
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
  Copy,
  CheckCheck,
  Loader2,
  ExternalLink,
  RotateCcw,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import { PrimaryButton } from "../components/Buttons.jsx";

const PROJECT_TYPES = [
  "Web Application",
  "REST API / Backend",
  "Business ERP / Dashboard",
  "System Integration",
  "Automation / Workflow",
];

const BUDGET_RANGES = ["<$1,000", "$1,000 - $3,000", "$3,000 - $5,000", "Enterprise / Flexible"];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", type: "", budget: "", message: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("haricode04@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleTypeSelect = (type) => {
    setForm((prev) => ({ ...prev, type }));
  };

  const handleBudgetSelect = (budget) => {
    setForm((prev) => ({ ...prev, budget }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/haricode04@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          project_type: form.type || "General Inquiry",
          budget_or_timeline: form.budget || "Flexible",
          message: form.message,
          _subject: `🚀 Portfolio Inquiry from ${form.name} [${form.type || "New Project"}]`,
          _replyto: form.email,
          _template: "table",
        }),
      });

      const data = await response.json();

      if (response.ok || data.success === "true" || data.success === true) {
        setStatus("success");
      } else {
        throw new Error(data.message || "Failed to deliver message");
      }
    } catch (err) {
      console.warn("Direct submission notice:", err);
      // Even if network blocks formsubmit, we provide fallback + success option
      setStatus("error");
      setErrorMessage(
        "Could not deliver automatically via network. You can send directly via Gmail or your email app below."
      );
    }
  };

  const resetForm = () => {
    setForm({ name: "", email: "", type: "", budget: "", message: "" });
    setStatus("idle");
    setErrorMessage("");
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=haricode04@gmail.com&su=${encodeURIComponent(
    `Portfolio Inquiry: ${form.name || "New Project"}`
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.type}\nBudget: ${form.budget}\n\nRequirements:\n${form.message}`
  )}`;

  const inputClass =
    "w-full bg-bgElevated border border-border rounded-xl px-4 py-3 text-ink font-body text-sm outline-none focus:border-accent transition-all shadow-subtle placeholder:text-faint/60";
  const labelClass = "block text-dim text-xs font-mono font-medium mb-1.5 uppercase tracking-wider";

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-28 border-t border-border">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Contact & Info */}
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>Start a Project</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight mb-4">
              Let's Build Something Useful.
            </h2>
            <p className="text-dim text-base leading-relaxed mb-8">
              Have an idea, a business requirement, an integration challenge, or an application to build?
              Fill out the form or reach out directly — all submissions are delivered straight to my email.
            </p>

            <div className="flex flex-col gap-3.5 mb-8">
              {/* Direct Email Card with Copy & Compose */}
              <div className="p-4 rounded-2xl border border-border bg-bgElevated shadow-subtle hover:border-accent/40 transition-all flex items-center justify-between gap-3">
                <a
                  href="mailto:haricode04@gmail.com"
                  className="flex items-center gap-3.5 min-w-0 group cursor-pointer flex-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-light/60 text-accent flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.68rem] font-mono text-faint uppercase tracking-wider">DIRECT EMAIL</p>
                    <p className="text-sm font-semibold text-ink group-hover:text-accent transition-colors truncate">
                      haricode04@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-bgElevated2 hover:bg-border text-dim hover:text-ink transition-colors cursor-pointer"
                    title="Copy Email Address"
                    type="button"
                  >
                    {copied ? <CheckCheck size={16} className="text-emerald-500" /> : <Copy size={16} />}
                  </button>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=haricode04@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-bgElevated2 hover:bg-border text-dim hover:text-accent transition-colors cursor-pointer"
                    title="Compose in Gmail"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                <a
                  href="https://github.com/haranHD"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl border border-border bg-bgElevated hover:border-accent/40 hover:shadow-card transition-all text-ink group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-xl bg-bgElevated2 text-dim group-hover:text-accent group-hover:bg-accent-light/50 flex items-center justify-center shrink-0 transition-colors">
                    <Github size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.65rem] font-mono text-faint uppercase">GITHUB</p>
                    <p className="text-xs sm:text-sm font-semibold truncate group-hover:text-accent transition-colors">
                      @haranHD
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/hari-haran-ad140/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl border border-border bg-bgElevated hover:border-accent/40 hover:shadow-card transition-all text-ink group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-xl bg-bgElevated2 text-dim group-hover:text-[#0077b5] group-hover:bg-[#0077b5]/10 flex items-center justify-center shrink-0 transition-colors">
                    <Linkedin size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.65rem] font-mono text-faint uppercase">LINKEDIN</p>
                    <p className="text-xs sm:text-sm font-semibold truncate group-hover:text-accent transition-colors">
                      Hari Haran
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-border bg-bgElevated2/60 space-y-2.5 text-xs text-dim">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-accent" />
                <span>Typical response time: Within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-accent" />
                <span>Direct developer communication & strict confidentiality</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-accent" />
                <span>Available for freelance contracts & remote work</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="p-7 sm:p-9 rounded-3xl border border-border bg-bgElevated shadow-card relative">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 px-6 rounded-2xl flex flex-col items-center text-center gap-4 bg-emerald-500/10 border border-emerald-500/30"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg">
                      <Check size={28} strokeWidth={2.5} />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-ink">Inquiry Sent Successfully!</h3>
                    <p className="text-dim text-sm max-w-md leading-relaxed">
                      Your message has been delivered directly to <span className="font-semibold text-ink">haricode04@gmail.com</span>. I'll review your project requirements and respond within 24 hours.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={resetForm}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-bgElevated2 hover:bg-border text-ink border border-border transition-colors cursor-pointer"
                      >
                        <RotateCcw size={14} /> Send Another Message
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={submit}
                    className="grid sm:grid-cols-2 gap-5"
                  >
                    <div>
                      <label className={labelClass}>Your Name *</label>
                      <input
                        required
                        className={inputClass}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Alex Smith"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input
                        required
                        type="email"
                        className={inputClass}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="alex@company.com"
                      />
                    </div>

                    {/* Project Type with Quick Chips */}
                    <div className="sm:col-span-2">
                      <div className="flex items-center justify-between mb-1.5">
                        <label className={labelClass}>Project Type</label>
                        <span className="text-[0.68rem] font-mono text-faint">Click to select</span>
                      </div>
                      <input
                        className={`${inputClass} mb-2.5`}
                        value={form.type}
                        onChange={(e) => setForm({ ...form, type: e.target.value })}
                        placeholder="e.g. Web App, REST API, ERP, Integration"
                      />
                      <div className="flex flex-wrap gap-1.5">
                        {PROJECT_TYPES.map((pt) => (
                          <button
                            key={pt}
                            type="button"
                            onClick={() => handleTypeSelect(pt)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                              form.type === pt
                                ? "bg-accent text-accent-ink font-semibold shadow-sm"
                                : "bg-bgElevated2 text-dim hover:text-ink hover:bg-border border border-border/80"
                            }`}
                          >
                            {pt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget / Timeline */}
                    <div className="sm:col-span-2">
                      <div className="flex items-center justify-between mb-1.5">
                        <label className={labelClass}>Estimated Budget / Timeline</label>
                        <span className="text-[0.68rem] font-mono text-faint">Optional</span>
                      </div>
                      <input
                        className={`${inputClass} mb-2.5`}
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        placeholder="e.g. $2,500 / 4 weeks"
                      />
                      <div className="flex flex-wrap gap-1.5">
                        {BUDGET_RANGES.map((br) => (
                          <button
                            key={br}
                            type="button"
                            onClick={() => handleBudgetSelect(br)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                              form.budget === br
                                ? "bg-accent text-accent-ink font-semibold shadow-sm"
                                : "bg-bgElevated2 text-dim hover:text-ink hover:bg-border border border-border/80"
                            }`}
                          >
                            {br}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Project Requirements Message */}
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Project Scope & Requirements *</label>
                      <textarea
                        required
                        rows={4}
                        className={`${inputClass} resize-y`}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Describe the software you need built, key features, target timeline, or technical challenges..."
                      />
                    </div>

                    {/* Error fallback alert */}
                    {status === "error" && (
                      <div className="sm:col-span-2 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-dim flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <AlertCircle size={16} className="text-amber-500 shrink-0" />
                          <span>{errorMessage}</span>
                        </div>
                        <a
                          href={gmailComposeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent text-accent-ink font-semibold shrink-0 hover:bg-accent-hover transition-colors"
                        >
                          Send via Gmail <ExternalLink size={13} />
                        </a>
                      </div>
                    )}

                    <div className="sm:col-span-2 pt-2 flex flex-wrap items-center gap-4">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold bg-accent text-accent-ink hover:bg-accent-hover shadow-subtle transition-all cursor-pointer disabled:opacity-70"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 size={16} className="animate-spin" /> Delivering Message...
                          </>
                        ) : (
                          <>
                            Send Project Inquiry <ArrowRight size={16} />
                          </>
                        )}
                      </button>

                      <a
                        href={gmailComposeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-dim hover:text-ink font-mono transition-colors"
                      >
                        <Sparkles size={13} className="text-accent" /> or open directly in Gmail
                      </a>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
