export default function TechChip({ children }) {
  return (
    <li className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-xs font-medium text-[#E5E7EB] transition-colors duration-200 hover:border-primary/60 hover:text-white">
      {children}
    </li>
  );
}
