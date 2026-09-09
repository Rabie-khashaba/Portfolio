'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '@/data/projects';

interface ProjectCardProps {
  project: ProjectItem;
  locale: string;
  index?: number;
}

export default function ProjectCard({ project, locale, index = 0 }: ProjectCardProps) {
  const tDetail = useTranslations(`projectDetail.items.${project.slug}`);

  const categoryColors: Record<string, string> = {
    mobile_backend:    'text-blue-400   border-blue-400/30   bg-blue-400/10',
    ecommerce_delivery:'text-orange-400 border-orange-400/30 bg-orange-400/10',
    enterprise_ops:    'text-purple-400 border-purple-400/30 bg-purple-400/10',
    realestate_portal: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
  };

  const colorClass = categoryColors[project.categoryKey] ?? 'text-accent border-accent/30 bg-accent/10';

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/80 backdrop-blur-md transition-colors duration-300 hover:border-accent/30 shadow-sm"
    >
      {/* Top accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-accent/60 via-accent to-accent/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Header */}
      <div className="border-b border-border bg-gradient-to-br from-card to-card/40 p-5 sm:p-8">
        <div className="flex items-start justify-between gap-2.5">
          {/* Year badge */}
          <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest sm:px-3 sm:py-1 ${colorClass}`}>
            {project.year}
          </span>
          {/* API count */}
          <span className="rounded-full border border-border bg-card/60 px-2.5 py-0.5 text-[10px] font-semibold text-text-dim sm:px-3 sm:py-1">
            {project.apiEndpointCount} endpoints
          </span>
        </div>

        <h3 className="mt-4 text-lg font-extrabold leading-tight text-heading transition-colors duration-200 group-hover:text-accent sm:mt-5 sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-text-muted">
          {tDetail('subtitle')}
        </p>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-8">
        <p className="line-clamp-4 text-xs sm:text-sm leading-relaxed text-text-muted">
          {tDetail('description')}
        </p>

        {/* Platforms */}
        <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-6">
          {project.platforms.map((p) => (
            <span
              key={p}
              className="rounded-md border border-border bg-card/60 px-2 py-0.5 text-[10px] font-semibold text-text-muted sm:px-2.5 sm:py-1"
            >
              {p}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="mt-5 grid grid-cols-3 gap-1.5 rounded-2xl border border-border bg-secondary/80 p-2.5 sm:mt-6 sm:gap-2 sm:p-3">
          {project.metrics.map((m, i) => (
            <div key={i} className="text-center">
              <p className="text-[11px] font-black text-heading sm:text-xs">{m.value}</p>
              <p className="mt-0.5 text-[8px] uppercase tracking-wide text-text-dim sm:text-[9px]">{m.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-5 flex items-center justify-end border-t border-border pt-4 sm:mt-6 sm:pt-5">
          <Link
            href={`/${locale}/projects/${project.slug}`}
            className="group/btn inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-accent transition-all duration-300 hover:bg-accent hover:text-white sm:px-4 sm:py-2.5 sm:text-xs"
          >
            <span>View Case Study</span>
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
