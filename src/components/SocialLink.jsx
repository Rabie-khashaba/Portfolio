export default function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={label}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:border-primary/50 hover:text-primary"
    >
      {children}
      <span>{label}</span>
    </a>
  );
}
