'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { socialLinks } from '@/data/social';

export default function Contact() {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative border-b border-border py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Contact Details */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
              {t('eyebrow')}
            </p>
            <h2 className="text-3xl font-black text-heading sm:text-4xl lg:text-5xl">
              {t('title')}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted sm:mt-4 sm:text-base">
              {t('description')}
            </p>

            <div className="mt-6 space-y-3.5 sm:mt-8 sm:space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-3.5 sm:p-4 transition-all hover:border-accent/40 hover:bg-card"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Mail size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-dim">
                    Direct Email
                  </p>
                  <p className="truncate text-xs font-bold text-heading sm:text-sm">{siteConfig.email}</p>
                </div>
              </a>

              <div className="flex gap-3 pt-1">
                {socialLinks.map((social) => {
                  const Icon = social.id === 'github' ? Github : social.id === 'linkedin' ? Linkedin : Mail;
                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover-invert-accent flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card/60 text-text-main transition-all sm:h-12 sm:w-12"
                      aria-label={social.name}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-border bg-card/80 p-5 backdrop-blur-md sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center sm:py-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 sm:h-16 sm:w-16">
                  <CheckCircle size={28} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-heading sm:text-xl">Message Sent!</h3>
                <p className="mt-2 text-xs text-text-muted sm:text-sm">{t('formSuccess')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-text-muted">
                    {t('formName')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-primary/60 px-4 py-3.5 text-sm text-white placeholder-text-dim focus:border-accent focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-text-muted">
                    {t('formEmail')}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-primary/60 px-4 py-3.5 text-sm text-white placeholder-text-dim focus:border-accent focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-text-muted">
                    {t('formMessage')}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-primary/60 px-4 py-3.5 text-sm text-white placeholder-text-dim focus:border-accent focus:outline-none"
                    placeholder="Project goals, timeline, architecture requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="hover-invert-accent flex w-full items-center justify-center gap-3 rounded-2xl border border-accent bg-accent px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-accent/25"
                >
                  <span>{t('formSubmit')}</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
