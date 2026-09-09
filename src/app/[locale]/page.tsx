import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import ProjectsSection from '@/components/Projects/ProjectsSection';
import Services from '@/components/Services/Services';
import SkillsGrid from '@/components/Skills/SkillsGrid';
import Contact from '@/components/Contact/Contact';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      <Hero locale={locale} />
      <About />
      <ProjectsSection locale={locale} />
      <Services />
      <SkillsGrid />
      <Contact />
    </div>
  );
}
