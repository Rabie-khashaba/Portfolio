import { siteConfig } from '@/data/site';
import { projects } from '@/data/projects';

export default function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: 'Laravel 12 Backend Engineer',
    url: siteConfig.url,
    sameAs: [
      'https://github.com/Rabie-khashaba',
      'https://www.linkedin.com/in/rabie-khashaba/',
    ],
    knowsAbout: [
      'Laravel',
      'PHP',
      'Python',
      'FastAPI',
      'API Architecture',
      'MySQL',
      'Redis',
      'System Architecture',
    ],
  };

  const projectListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projects.map((p, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: p.title,
      url: `${siteConfig.url}/projects/${p.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectListSchema) }}
      />
    </>
  );
}
