export default function Eyebrow({ children, className = "" }) {
  return (
    <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[0.72rem] uppercase tracking-widest mb-3.5 font-mono font-medium text-accent bg-accent-light/60 border border-accent/20 ${className}`}>
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
      {children}
    </div>
  );
}
