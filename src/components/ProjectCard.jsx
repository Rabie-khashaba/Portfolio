import { ArrowUpRight, Apple, CirclePlay } from 'lucide-react';
import ProjectPreview from './ProjectPreview';

export default function ProjectCard({ project, index = 1, onViewDetails, viewDetailsLabel = 'View Details' }) {
  return (
    <article className="portfolio-project-card group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft md:p-6">
      <div className="portfolio-project-image">
        <ProjectPreview project={project} />
        <span className="project-card-number">{String(index).padStart(2, '0')}</span>
        <div className="portfolio-project-category">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span>{project.category}</span>
        </div>
      </div>

      <div className="portfolio-project-body flex flex-1 flex-col">
        <h3 className="text-xl font-semibold text-white md:text-2xl">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted md:text-[15px]">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#E5E7EB]"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
            {project.platforms.includes('Google Play') ? <CirclePlay size={14} className="text-primary" /> : null}
            {project.platforms.includes('App Store') ? <Apple size={14} className="text-primary" /> : null}
            {project.platforms.includes('Web App') || project.platforms.includes('Web Platform') || project.platforms.includes('Web SaaS') ? (
              <span className="h-2.5 w-2.5 rounded-full border border-primary bg-primary/15" />
            ) : null}
            <span>{project.platforms.join(' / ')}</span>
          </div>

          <button
            type="button"
            onClick={() => onViewDetails(project)}
            className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors duration-200 hover:text-primary"
            aria-label={`View project details for ${project.title}`}
          >
            {viewDetailsLabel}
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
