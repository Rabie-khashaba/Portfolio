import { ArrowUpRight, Apple, CirclePlay } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
      <div className="relative overflow-hidden bg-[#20232B]">
        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span>{project.category}</span>
        </div>

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

          <a
            href={project.link}
            className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors duration-200 hover:text-primary"
            aria-label={`Read case study for ${project.title}`}
          >
            Read Case Study
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}
