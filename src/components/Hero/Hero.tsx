'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, Sparkles } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';

interface HeroProps {
  locale: string;
}

const ROLES = [
  'Laravel Backend Engineer',
  'PHP Architect',
  'API Systems Designer',
  'AI Microservices Builder',
  'REST API Specialist',
];

function Typewriter({ texts }: { texts: string[] }) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = texts[textIndex];

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((i) => i + 1), 55);
      return () => clearTimeout(t);
    }
    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex((i) => i - 1), 30);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex((i) => (i + 1) % texts.length);
    }
  }, [charIndex, deleting, textIndex, texts]);

  useEffect(() => {
    setDisplayed(texts[textIndex].slice(0, charIndex));
  }, [charIndex, textIndex, texts]);

  return (
    <span className="text-accent">
      {displayed}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-accent align-middle" />
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero({ locale }: HeroProps) {
  const t = useTranslations('hero');
  const isRtl = locale === 'ar';

  return (
    <section id="home" className="relative min-h-screen overflow-hidden border-b border-white/10">
      <ParticleCanvas />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[140px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div
          className={`flex min-h-screen flex-col gap-12 py-16 sm:py-24 lg:flex-row lg:items-center lg:gap-20 lg:py-0 ${
            isRtl ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* ── Left: Content ── */}
          <div className="flex-1 text-center sm:text-left">
            {/* Available badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-2"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 sm:text-xs">
                {t('available')}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-4xl font-black leading-[1.05] tracking-tight text-heading xs:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              {t('name')}
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-4 flex items-center justify-center gap-3 text-base font-semibold sm:justify-start sm:text-xl"
            >
              <span className="inline-block h-[2px] w-6 rounded-full bg-accent sm:w-8" />
              <Typewriter texts={ROLES} />
            </motion.div>

            {/* Summary */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-5 max-w-xl text-sm leading-relaxed text-text-muted sm:mt-6 sm:text-lg"
            >
              {t('summary')}
            </motion.p>

            {/* Location + exp */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-text-muted sm:justify-start sm:gap-6 sm:text-sm"
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-accent" /> Egypt
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-accent" /> {t('experience')}
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
              className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3.5 sm:gap-4"
            >
              <a
                href="#projects"
                className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-accent px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/40 sm:text-sm"
              >
                {t('ctaProjects')}
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl border border-border bg-card/60 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-text-main backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/10 sm:text-sm"
              >
                {t('ctaContact')}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={6}
              className="mt-10 grid grid-cols-3 gap-2 border-t border-border pt-8 sm:mt-14 sm:gap-4 sm:pt-10"
            >
              {[
                { value: t('experience'), label: t('experienceLabel') },
                { value: '7+', label: t('shippedAppsLabel'), accent: true },
                { value: '10+', label: t('apisCountLabel') },
              ].map((s, i) => (
                <div key={i} className="text-center sm:text-left">
                  <p className={`text-2xl font-black xs:text-3xl lg:text-4xl ${s.accent ? 'text-accent' : 'text-heading'}`}>
                    {s.value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-text-muted sm:text-xs">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[320px] flex-shrink-0 px-1 sm:max-w-[400px] sm:px-0 lg:mx-0 lg:max-w-[460px]"
          >
            {/* Decorative rings */}
            <div className="absolute -inset-2 rounded-[2rem] border border-accent/15 opacity-70 sm:-inset-3 sm:rounded-[2.5rem]" />
            <div className="absolute -inset-4 rounded-[2.5rem] border border-border sm:-inset-6 sm:rounded-[3rem]" />

            {/* Glow blobs */}
            <div className="absolute -right-4 -top-4 h-40 w-40 rounded-full bg-accent/20 blur-[60px] sm:-right-8 sm:-top-8 sm:h-52 sm:w-52 sm:blur-[70px]" />
            <div className="absolute -bottom-4 -left-4 h-36 w-36 rounded-full bg-accent/10 blur-[50px] sm:-bottom-8 sm:-left-8 sm:h-48 sm:w-48 sm:blur-[60px]" />

            {/* Photo */}
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-2xl sm:rounded-[2rem]">
              <div className="relative h-[440px] w-full xs:h-[500px] sm:h-[540px] lg:h-[620px]">
                <Image
                  src="/main.jpg"
                  alt="Rabie Abdelrahman — Laravel 12 Backend Engineer"
                  fill
                  className="object-cover object-[50%_18%] sm:object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 460px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
              </div>

              {/* Overlay info */}
              <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-5">
                <div className="rounded-2xl border border-border bg-card/90 p-3 sm:p-4 backdrop-blur-md shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-text-muted xs:text-[9px] sm:text-[10px] sm:tracking-[0.18em]">
                        Laravel 12 · PHP 8.2 · Python
                      </p>
                      <p className="mt-0.5 text-xs font-bold text-heading sm:text-sm">Backend Engineer</p>
                    </div>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent sm:h-10 sm:w-10">
                      <Sparkles size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge top-right */}
            <div className="absolute right-3 top-5 max-w-[190px] rounded-2xl border border-border bg-card/95 px-3 py-2 shadow-xl backdrop-blur-md sm:-right-8 sm:top-10 sm:max-w-none sm:px-4 sm:py-3">
              <p className="text-[9px] uppercase tracking-widest text-text-muted sm:text-[10px]">Open To Work</p>
              <p className="mt-0.5 text-[11px] font-bold text-heading xs:text-xs sm:text-sm">Freelance · Full-time</p>
            </div>

            {/* Floating badge bottom-left */}
            <div className="absolute bottom-24 left-3 max-w-[210px] rounded-2xl border border-accent/30 bg-card/95 px-3 py-2 shadow-xl backdrop-blur-md sm:-left-8 sm:bottom-28 sm:max-w-none sm:px-4 sm:py-3">
              <p className="text-[9px] uppercase tracking-widest text-accent font-bold sm:text-[10px]">Stack</p>
              <p className="mt-0.5 text-[11px] font-bold text-heading xs:text-xs sm:text-sm">Laravel · FastAPI · AWS</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
    </section>
  );
}
