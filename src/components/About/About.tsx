'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const fadeSlide = {
  hidden: { opacity: 0, y: 36 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  const t = useTranslations('about');
  const tags: string[] = t.raw('tags');

  return (
    <section id="about" className="relative border-b border-border py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:items-start">

          {/* Left: eyebrow + title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
              {t('eyebrow')}
            </p>
            <h2 className="text-3xl font-black leading-tight text-heading sm:text-4xl lg:text-5xl">
              {t('title')}
            </h2>
          </motion.div>

          {/* Right: text + tags */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 sm:space-y-8"
          >
            <p className="text-sm leading-relaxed text-text-muted sm:text-base lg:text-lg">
              {t('text')}
            </p>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 sm:gap-3">
              {tags.map((tag, i) => (
                <motion.div
                  key={tag}
                  variants={fadeSlide}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-card/60 p-3.5 backdrop-blur-md transition-all duration-200 hover:border-accent/30 hover:bg-card"
                >
                  <CheckCircle2 size={16} className="shrink-0 text-accent" />
                  <span className="text-xs font-bold uppercase tracking-wider text-text-main">
                    {tag}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
