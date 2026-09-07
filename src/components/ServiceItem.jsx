export default function ServiceItem({ item }) {
  const Icon = item.icon;

  return (
    <article className="group rounded-2xl border border-white/10 bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">{item.number}</span>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-primary">
            <Icon size={18} />
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted md:text-[15px]">{item.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {item.tech.map((tag) => (
          <li key={tag} className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-[10px] uppercase tracking-[0.14em] text-[#E5E7EB]">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
