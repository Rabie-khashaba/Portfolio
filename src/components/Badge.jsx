export default function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary ${className}`}>
      {children}
    </span>
  );
}
