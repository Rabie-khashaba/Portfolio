'use client';

import { useTranslations } from 'next-intl';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-primary py-12 text-xs text-text-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p>{t('copyright')}</p>
          <p className="mt-1 text-text-dim">{t('builtWith')}</p>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-card px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all hover:border-accent hover:text-accent"
        >
          <span>{t('top')}</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
