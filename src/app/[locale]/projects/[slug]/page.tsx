import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { projects, getProjectBySlug } from '@/data/projects';
import { getTechById } from '@/data/tech';
import { routing } from '@/i18n/routing';
import { ArrowLeft, Layers, ArrowRight } from 'lucide-react';

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const project of projects) {
      params.push({ locale, slug: project.slug });
    }
  }
  return params;
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t    = await getTranslations({ locale, namespace: 'projectDetail' });
  const tItem = await getTranslations({ locale, namespace: `projectDetail.items.${project.slug}` });

  const currentIndex  = projects.findIndex((p) => p.slug === project.slug);
  const nextProject   = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="min-h-screen py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">

        {/* ── Back link ── */}
        <Link
          href={`/${locale}#projects`}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent transition-colors hover:text-white"
        >
          <ArrowLeft size={14} />
          {t('backToProjects')}
        </Link>

        {/* ── Hero Banner ── */}
        <header className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-card/80 backdrop-blur-md">
          {/* Accent top bar */}
          <div className="h-1 w-full bg-gradient-to-r from-accent via-accent/60 to-transparent" />

          <div className="p-8 sm:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
                {project.year}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-text-muted">
                {project.platforms.join(' / ')}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-3 text-base font-semibold text-accent">
              {tItem('subtitle')}
            </p>

            <p className="mt-5 text-base leading-relaxed text-text-muted sm:text-lg">
              {tItem('description')}
            </p>

            {/* Metrics */}
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4">
              {project.metrics.map((m, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-primary/60 p-4 text-center">
                  <p className="text-xl font-black text-white">{m.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-text-dim">{m.label}</p>
                </div>
              ))}
              <div className="rounded-2xl border border-white/10 bg-primary/60 p-4 text-center">
                <p className="text-xl font-black text-accent">{project.apiEndpointCount}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-text-dim">API Endpoints</p>
              </div>
            </div>
          </div>
        </header>

        {/* ── Problem & Solution ── */}
        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-card/60 p-8 backdrop-blur-md">
            <h2 className="flex items-center gap-3 text-lg font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-500/10 text-sm text-red-400">!</span>
              Challenge
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">{tItem('problem')}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-card/60 p-8 backdrop-blur-md">
            <h2 className="flex items-center gap-3 text-lg font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-sm text-emerald-400">✓</span>
              Solution
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">{tItem('solution')}</p>
          </div>
        </section>

        {/* ── Architecture ── */}
        <section className="mt-10 rounded-3xl border border-white/10 bg-card/60 p-8 backdrop-blur-md sm:p-10">
          <div className="flex items-center gap-3 border-b border-white/10 pb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Layers size={20} />
            </div>
            <h2 className="text-xl font-bold text-white">{t('architectureTitle')}</h2>
          </div>

          <div className="mt-8 space-y-4">
            {project.architectureLayer.map((layer, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-primary/40 p-4 transition-colors hover:border-accent/30"
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-sm font-medium text-text-main">{layer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tech Stack ── */}
        <section className="mt-10 rounded-3xl border border-white/10 bg-card/60 p-8 backdrop-blur-md sm:p-10">
          <h2 className="text-xl font-bold text-white">{t('techStackTitle')}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.techIds.map((techId) => {
              const tech = getTechById(techId);
              return (
                <div
                  key={techId}
                  className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-card p-3"
                  style={{ borderColor: `${tech.color}40` }}
                >
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: tech.color }} />
                  <span className="text-xs font-bold text-white">{tech.name}</span>
                  <span className="rounded-full bg-white/5 px-2 py-0.5 text-[9px] font-semibold uppercase text-text-dim">
                    {tech.category}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Next Project ── */}
        <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-8">
          <Link
            href={`/${locale}#projects`}
            className="text-xs font-bold uppercase tracking-widest text-text-muted transition-colors hover:text-white"
          >
            {t('backToProjects')}
          </Link>

          <Link
            href={`/${locale}/projects/${nextProject.slug}`}
            className="flex items-center gap-3 rounded-2xl border border-accent bg-accent/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-accent transition-all hover:bg-accent hover:text-white"
          >
            <span>Next: {nextProject.title}</span>
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </article>
  );
}
