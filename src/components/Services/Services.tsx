'use client';

import { useTranslations } from 'next-intl';
import { Server, Code2, Cpu, CreditCard, Zap, LayoutDashboard } from 'lucide-react';
import { services } from '@/data/services';
import { getTechById } from '@/data/tech';

const iconMap: Record<string, any> = {
  Server,
  Code2,
  Cpu,
  CreditCard,
  Zap,
  LayoutDashboard,
};

export default function Services() {
  const t = useTranslations('services');

  return (
    <section id="services" className="relative border-b border-border py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
            {t('eyebrow')}
          </p>
          <h2 className="text-3xl font-black text-heading sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-3 max-w-xl text-sm text-text-muted sm:mt-4 sm:text-base">
            {t('description')}
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => {
            const Icon = iconMap[item.iconName] || Server;
            const itemTitle = t(`items.${item.id}.title`);
            const itemDesc = t(`items.${item.id}.description`);

            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card/70 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-card hover:shadow-2xl sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border pb-5 sm:pb-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent transition-transform group-hover:scale-110 group-hover:bg-accent group-hover:text-white sm:h-12 sm:w-12">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-black tracking-widest text-text-dim sm:text-sm">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-heading group-hover:text-accent sm:mt-6 sm:text-xl">
                    {itemTitle}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-text-muted sm:mt-3 sm:text-sm">
                    {itemDesc}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {item.techIds.map((techId) => {
                    const tech = getTechById(techId);
                    return (
                      <span
                        key={techId}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-text-muted"
                      >
                        {tech.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
