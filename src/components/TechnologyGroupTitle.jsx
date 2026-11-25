import { Code2 } from 'lucide-react';
import { technologyGroupIcons } from '../data/technologyIcons';

export default function TechnologyGroupTitle({ children, groupIndex }) {
  const Icon = technologyGroupIcons[groupIndex] ?? Code2;

  return (
    <h3 className="portfolio-skill-group-title">
      <span className="portfolio-skill-group-icon" aria-hidden="true">
        <Icon size={15} strokeWidth={1.8} />
      </span>
      {children}
    </h3>
  );
}
