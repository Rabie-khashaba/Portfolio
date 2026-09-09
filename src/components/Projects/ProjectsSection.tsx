'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
  locale: string;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ProjectsSection({ locale }: ProjectsSectionProps) {
  const t = useTranslations('projects');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all',               label: t('filterAll') },
    { id: 'mobile_backend',    label: t('filterMobile') },
    { id: 'ecommerce_delivery',label: t('filterEcommerce') },
    { id: 'enterprise_ops',    label: t('filterEnterprise') },
    { id: 'realestate_portal', label: t('filterRealEstate') },
  ];

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.categoryKey === activeCategory);

  return (
    <motion.section
      id="projects"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="relative border-b border-border py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">

        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
              {t('eyebrow')}
            </p>
            <h2 className="text-3xl font-black text-heading sm:text-4xl lg:text-5xl">
              {t('title')}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-muted sm:mt-4 sm:text-base">
              {t('description')}
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="mt-8 flex overflow-x-auto gap-2 border-b border-border pb-4 pt-1 sm:mt-10 sm:flex-wrap sm:pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 sm:px-5 sm:py-2.5 sm:text-xs ${
                activeCategory === tab.id
                  ? 'bg-accent text-white shadow-lg shadow-accent/25'
                  : 'border border-border bg-card/60 text-text-muted hover:border-accent/40 hover:text-heading'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid — AnimatePresence handles exit/enter on filter change */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                locale={locale}
                index={i}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
