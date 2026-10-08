import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Check,
  ArrowRight,
  Clock,
  MapPin,
  Copy,
  CheckCheck,
  Loader2,
  AlertCircle,
} from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import { PrimaryButton } from "../components/Buttons.jsx";

const PROJECT_TYPES = [
  "Custom Website",
  "Full-Stack Web App",
  "REST API / Backend",
  "Business ERP / Dashboard",
  "Database Integration",
  "Automation / Crawler",
];

const BUDGET_RANGES = [
  "<$1,000",
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000+",
  "Flexible / Discussion",
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", type: "", budget: "", message: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
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
          _subject: `🚀 New Project Inquiry from ${form.name} [${form.type || "Freelance"}]`,
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
      console.warn("FormSubmit notice:", err);
      setStatus("error");
    }
  };

  const resetForm = () => {
    setForm({ name: "", email: "", type: "", budget: "", message: "" });
    setStatus("idle");
  };

  return (
    <section id="contact" className="w-full border-t border-border bg-bg py-14 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-80 h-80 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline, Copy, Contact Info */}
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Start a Conversation</Eyebrow>
              <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-[2.75rem] text-ink tracking-tight mb-3 sm:mb-4 leading-tight">
                Have an idea? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
                  Let's build it.
                </span>
              </h2>

              <p className="text-dim text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                Have a website, application or business software idea? Let's discuss how I can
                turn it into a practical solution.
              </p>
            </Reveal>

            {/* Quick Contact Info Cards */}
            <Reveal delay={0.06}>
              <div className="space-y-3 mb-6 sm:mb-8">
                {/* Email Card with Copy button */}
                <div className="p-3.5 sm:p-4.5 rounded-xl sm:rounded-2xl border border-border bg-bgElevated shadow-subtle flex items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent/10 text-accent border border-accent/20 flex items-center justify-center shrink-0">
                      <Mail size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[0.62rem] sm:text-[0.68rem] font-mono text-faint uppercase tracking-wider">
                        EMAIL DIRECTLY
                      </p>
                      <a
                        href="mailto:haricode04@gmail.com"
                        className="text-ink font-semibold text-xs sm:text-sm hover:text-accent transition-colors truncate block"
                      >
                        haricode04@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-bgElevated2 border border-border text-dim hover:text-ink hover:border-accent/40 transition-all cursor-pointer shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <CheckCheck size={15} className="text-emerald-400" />
                    ) : (
                      <Copy size={15} />
                    )}
                  </button>
                </div>

                {/* Response Time & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="p-3 sm:p-4 rounded-xl border border-border bg-bgElevated shadow-subtle flex items-center gap-2.5">
                    <Clock size={16} className="text-accent shrink-0" />
                    <div>
                      <p className="text-[0.62rem] font-mono text-faint uppercase">RESPONSE TIME</p>
                      <p className="text-ink text-xs font-semibold">&lt; 24 Hours</p>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 rounded-xl border border-border bg-bgElevated shadow-subtle flex items-center gap-2.5">
                    <MapPin size={16} className="text-accent shrink-0" />
                    <div>
                      <p className="text-[0.62rem] font-mono text-faint uppercase">AVAILABILITY</p>
                      <p className="text-ink text-xs font-semibold">Worldwide / Remote</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Social Links */}
            <Reveal delay={0.1}>
              <div className="pt-4 sm:pt-6 border-t border-border flex flex-wrap items-center gap-2.5 sm:gap-3">
                <a
                  href="https://github.com/haranHD"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-border bg-bgElevated text-dim hover:text-ink hover:border-accent/40 transition-all text-xs font-medium cursor-pointer"
                >
                  <Github size={14} /> GitHub Profile
                </a>
                <a
                  href="https://www.linkedin.com/in/hari-haran-ad140/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-border bg-bgElevated text-dim hover:text-accent hover:border-accent/40 transition-all text-xs font-medium cursor-pointer"
                >
                  <Linkedin size={14} /> LinkedIn Profile
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.06}>
              <div className="p-4.5 sm:p-7 lg:p-9 rounded-2xl sm:rounded-3xl border border-border bg-bgElevated shadow-card relative">
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-8 sm:py-12 px-2 sm:px-4"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-400/30 flex items-center justify-center mx-auto mb-4 sm:mb-5">
                        <Check size={28} />
                      </div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-ink mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-dim text-xs sm:text-sm max-w-md mx-auto mb-6 sm:mb-8 leading-relaxed">
                        Thank you for reaching out. I've received your project details and will review
                        them and respond within 24 hours.
                      </p>
                      <button
                        onClick={resetForm}
                        className="px-5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-bgElevated2 text-ink hover:bg-bgElevated border border-border transition-all cursor-pointer"
                      >
                        Send Another Inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={submit} className="space-y-4 sm:space-y-6">
                      {status === "error" && (
                        <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs flex items-start gap-2.5">
                          <AlertCircle size={16} className="shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold mb-0.5">Direct Network Notice</p>
                            <p>
                              You can also send your brief directly to{" "}
                              <a
                                href="mailto:haricode04@gmail.com"
                                className="underline font-bold text-accent"
                              >
                                haricode04@gmail.com
                              </a>
                              .
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Project Type Selector */}
                      <div>
                        <label className="block font-mono text-[0.68rem] sm:text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                          Project Type
                        </label>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {PROJECT_TYPES.map((t) => (
                            <button
                              type="button"
                              key={t}
                              onClick={() => handleTypeSelect(t)}
                              className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl text-[0.7rem] sm:text-xs font-mono transition-all cursor-pointer ${form.type === t
                                ? "bg-accent text-accent-ink font-semibold shadow-sm border border-cyan-300/40"
                                : "bg-bgElevated2 text-dim hover:text-ink hover:bg-bgElevated border border-border"
                                }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Name & Email Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block font-mono text-[0.68rem] sm:text-xs font-semibold text-ink uppercase tracking-wider mb-1.5 sm:mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Alex Morgan"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-inputBg border border-border text-ink text-sm focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block font-mono text-[0.68rem] sm:text-xs font-semibold text-ink uppercase tracking-wider mb-1.5 sm:mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="e.g. alex@company.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-inputBg border border-border text-ink text-sm focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>
                      </div>

                      {/* Budget / Timeline Range */}
                      <div>
                        <label className="block font-mono text-[0.68rem] sm:text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                          Estimated Budget or Scope
                        </label>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {BUDGET_RANGES.map((b) => (
                            <button
                              type="button"
                              key={b}
                              onClick={() => handleBudgetSelect(b)}
                              className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl text-[0.7rem] sm:text-xs font-mono transition-all cursor-pointer ${form.budget === b
                                ? "bg-accent/20 text-accent font-semibold border border-accent/40"
                                : "bg-bgElevated2 text-dim hover:text-ink hover:bg-bgElevated border border-border"
                                }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Message Field */}
                      <div>
                        <label className="block font-mono text-[0.68rem] sm:text-xs font-semibold text-ink uppercase tracking-wider mb-1.5 sm:mb-2">
                          Project Details & Goals *
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Tell me about your project, target audience, timeline, or key technical challenges..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-inputBg border border-border text-ink text-sm focus:outline-none focus:border-accent transition-colors resize-none leading-relaxed"
                        />
                      </div>

                      {/* Submit Button */}
                      <div>
                        <PrimaryButton
                          type="submit"
                          disabled={status === "loading"}
                          className="w-full justify-center !py-3 sm:!py-3.5 text-sm font-semibold"
                        >
                          {status === "loading" ? (
                            <>
                              <Loader2 size={16} className="animate-spin" /> Submitting...
                            </>
                          ) : (
                            <>
                              Let's Work Together <ArrowRight size={16} />
                            </>
                          )}
                        </PrimaryButton>
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
