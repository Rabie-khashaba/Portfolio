import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';
import { projects } from '@/data/projects';
import { routing } from '@/i18n/routing';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    routes.push({
      url: `${siteConfig.url}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    });

    for (const project of projects) {
      routes.push({
        url: `${siteConfig.url}/${locale}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }

  return routes;
}
