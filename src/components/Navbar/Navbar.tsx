'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations('nav');
  const tSite = useTranslations('site');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 30);
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    // Replace locale prefix in current path
    let newPath = pathname;
    if (pathname.startsWith(`/${locale}`)) {
      newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    } else {
      newPath = `/${nextLocale}${pathname}`;
    }
    router.push(newPath);
  };

  const navLinks = [
    { href: `/${locale}#home`, label: t('home') },
    { href: `/${locale}#about`, label: t('about') },
    { href: `/${locale}#projects`, label: t('projects') },
    { href: `/${locale}#services`, label: t('services') },
    { href: `/${locale}#skills`, label: t('skills') },
    { href: `/${locale}#contact`, label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div className="h-[2px] w-full bg-white/5">
        <div
          className="h-full bg-accent transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className="glass-nav px-4 py-3 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="group flex items-center gap-2.5 text-lg font-bold tracking-widest text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 border border-accent/30 text-accent font-black transition-all group-hover:scale-105 group-hover:bg-accent group-hover:text-white">
              R
            </span>
            <span className="font-extrabold tracking-wider">{tSite('logo')}</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-text-muted transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Controls: Locale Switcher & Contact CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <button
              onClick={switchLocale}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-card/60 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-text-main transition-all hover:border-accent hover:text-accent"
              aria-label="Switch Language"
            >
              <Globe size={14} className="text-accent" />
              <span>{tSite('switchLang')}</span>
            </button>

            <a
              href={`/${locale}#contact`}
              className="hover-invert-accent flex items-center gap-2 rounded-full border border-accent bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent transition-all"
            >
              <span>{t('contact')}</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={switchLocale}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-card px-2.5 py-1 text-[11px] font-bold text-accent"
            >
              <Globe size={13} />
              <span>{locale === 'en' ? 'AR' : 'EN'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-card text-white"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg bg-card/50 px-4 py-2.5 text-sm font-medium text-text-muted hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
