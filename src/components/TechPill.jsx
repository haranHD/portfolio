export default function TechPill({ children, className = "" }) {
  return (
    <span className={`px-2.5 py-1 rounded-md text-[0.75rem] font-mono text-dim border border-border bg-bgElevated2 hover:border-borderLight transition-colors ${className}`}>
      {children}
    </span>
  );
}
