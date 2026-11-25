import { Code2 } from 'lucide-react';
import { technologyIcons } from '../data/technologyIcons';

export default function TechChip({ children }) {
  const Icon = technologyIcons[children] ?? Code2;

  return (
    <li className="portfolio-tech-chip rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-xs font-medium text-text transition-colors duration-200 hover:border-primary/60 hover:text-white">
      <Icon className="portfolio-tech-chip-icon" size={14} strokeWidth={1.8} aria-hidden="true" />
      {children}
    </li>
  );
}
