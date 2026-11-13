import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Github, Layers3 } from 'lucide-react';
import ProjectPreview from './ProjectPreview';

export default function ProjectDetailsPage({
  project,
  details,
  labels,
  index,
  isArabic,
  onBack,
}) {
  return (
    <main className="project-case-study container-shell">
      <button type="button" className="case-study-back" onClick={onBack}>
        {isArabic ? <ArrowRight size={17} /> : <ArrowLeft size={17} />}
        {labels.backToProjects}
      </button>

      <section className="case-study-hero">
        <div className="case-study-intro">
          <p className="case-study-eyebrow">
            {labels.caseStudy} <span>/ {String(index).padStart(2, '0')}</span>
          </p>
          <p className="case-study-category">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="case-study-summary">{project.description}</p>
          <div className="case-study-platforms">
            {project.platforms.map((platform) => (
              <span key={platform}>{platform}</span>
            ))}
          </div>

          {project.githubUrl ? (
            <div className="mt-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                aria-label={`${labels.repositoryLabel || 'GitHub'}: ${project.title}`}
              >
                <Github size={14} />
                <span>{labels.repositoryLabel || 'GitHub'}</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          ) : null}
        </div>

        <div className="case-study-preview">
          <span className="case-study-preview-index" aria-hidden="true">
            {String(index).padStart(2, '0')}
          </span>
          <ProjectPreview project={project} />
        </div>
      </section>

      <section className="case-study-facts" aria-label={labels.projectOverview}>
        <div>
          <span>{labels.role}</span>
          <strong>{details.role}</strong>
        </div>
        <div>
          <span>{labels.scope}</span>
          <strong>{details.focus}</strong>
        </div>
        <div>
          <span>{labels.platform}</span>
          <strong>{project.platforms.join(' · ')}</strong>
        </div>
      </section>

      <section className="case-study-content">
        <div className="case-study-story">
          <article>
            <p className="case-study-section-label">01 / {labels.challenge}</p>
            <p className="case-study-story-text">{details.challenge}</p>
          </article>
          <article>
            <p className="case-study-section-label">02 / {labels.approach}</p>
            <p className="case-study-story-text">{details.approach}</p>
          </article>
        </div>

        <aside className="case-study-highlights">
          <div className="case-study-highlights-heading">
            <span className="case-study-icon"><Layers3 size={18} /></span>
            <h2>{labels.highlights}</h2>
          </div>
          <ul>
            {details.highlights.map((highlight) => (
              <li key={highlight}>
                <Check size={16} aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="case-study-stack">
        <div>
          <p className="case-study-section-label">03 / {labels.stack}</p>
          <p>{labels.stackDescription}</p>
        </div>
        <ul>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </section>

      <section className="case-study-contact">
        <div>
          <p>{labels.nextStep}</p>
          <h2>{labels.contactTitle}</h2>
        </div>
        <a href="mailto:khashabarabie@gmail.com">
          {labels.contactButton}
          <ArrowUpRight size={18} />
        </a>
      </section>
    </main>
  );
}
