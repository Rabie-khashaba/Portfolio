'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { techRegistry, Technology } from '@/data/tech';
import { techUsage } from '@/data/projects';
import { Cpu, Server, Database, Cloud, CreditCard, Wrench } from 'lucide-react';

const categoryIcons: Record<string, any> = {
  'Backend':           Server,
  'Database':          Database,
  'AI & ML':           Cpu,
  'Realtime & Cloud':  Cloud,
  'Payments':          CreditCard,
  'Frontend & Tools':  Wrench,
};

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

export default function SkillsGrid() {
  const t = useTranslations('skills');

  const allTechs = Object.values(techRegistry);
  const categories = Array.from(
    new Set(allTechs.map((item) => item.category))
  ) as Array<Technology['category']>;

  return (
    <section id="skills" className="relative border-b border-border py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
            {t('eyebrow')}
          </p>
          <h2 className="text-3xl font-black text-heading sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-3 max-w-xl text-sm text-text-muted sm:mt-4 sm:text-base">
            {t('description')}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category) => {
            const Icon = categoryIcons[category] ?? Server;
            const categoryTechs = allTechs.filter((t) => t.category === category);

            return (
              <motion.div
                key={category}
                variants={cardVariants}
                className="rounded-3xl border border-border bg-card/70 p-5 backdrop-blur-md transition-colors hover:border-accent/30 sm:p-8"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent sm:h-10 sm:w-10">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category}</h3>
                </div>

                {/* Tech list */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="mt-6 space-y-3"
                >
                  {categoryTechs.map((tech) => {
                    const usage = techUsage(tech.id);
                    return (
                      <motion.div
                        key={tech.id}
                        variants={itemVariants}
                        className="flex items-center justify-between rounded-xl border border-white/5 bg-primary/40 p-3 transition-colors hover:border-accent/30 hover:bg-card"
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: tech.color }}
                          />
                          <span className="text-xs font-bold text-white">{tech.name}</span>
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                          {usage} {t('usageLabel')}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
