import { Code2, Database, Smartphone, Shuffle } from 'lucide-react';

export const services = [
  {
    number: '01',
    title: 'Laravel Backend Development',
    description: 'Designing secure and scalable Laravel-based systems, APIs, and business logic for real-world products.',
    tech: ['Laravel', 'PHP', 'MySQL', 'REST'],
    icon: Code2,
  },
  {
    number: '02',
    title: 'API & System Architecture',
    description: 'Building maintainable backend architecture for growth, modularity, performance, and production stability.',
    tech: ['Laravel', 'Clean Architecture', 'MySQL'],
    icon: Database,
  },
  {
    number: '03',
    title: 'Web & Mobile Backend Infrastructure',
    description: 'Creating backend systems that support web apps, mobile products, and connected digital ecosystems.',
    tech: ['Laravel', 'Firebase', 'REST APIs'],
    icon: Smartphone,
  },
  {
    number: '04',
    title: 'Integrations & Automation',
    description: 'Connecting payments, notifications, cloud storage, authentication, and external services into stable business systems.',
    tech: ['Paymob', 'Firebase', 'Cloudflare R2'],
    icon: Shuffle,
  },
];
