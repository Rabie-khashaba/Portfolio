export interface Technology {
  id: string;
  name: string;
  category: 'Backend' | 'Database' | 'AI & ML' | 'Realtime & Cloud' | 'Payments' | 'Frontend & Tools';
  color: string;
  iconName?: string;
}

export const techRegistry: Record<string, Technology> = {
  laravel: { id: 'laravel', name: 'Laravel 12 / 10', category: 'Backend', color: '#FF2D20' },
  php: { id: 'php', name: 'PHP 8.2', category: 'Backend', color: '#777BB4' },
  mysql: { id: 'mysql', name: 'MySQL', category: 'Database', color: '#4479A1' },
  redis: { id: 'redis', name: 'Redis', category: 'Database', color: '#DC382D' },
  python: { id: 'python', name: 'Python', category: 'AI & ML', color: '#3776AB' },
  fastapi: { id: 'fastapi', name: 'FastAPI', category: 'AI & ML', color: '#009688' },
  sanctum: { id: 'sanctum', name: 'Laravel Sanctum', category: 'Backend', color: '#FF2D20' },
  socialite: { id: 'socialite', name: 'Laravel Socialite', category: 'Backend', color: '#FF2D20' },
  spatie: { id: 'spatie', name: 'Spatie RBAC', category: 'Backend', color: '#F45B1E' },
  pusher: { id: 'pusher', name: 'Pusher Realtime', category: 'Realtime & Cloud', color: '#30B3E5' },
  firebase: { id: 'firebase', name: 'Firebase FCM', category: 'Realtime & Cloud', color: '#FFCA28' },
  'aws-s3': { id: 'aws-s3', name: 'AWS S3', category: 'Realtime & Cloud', color: '#FF9900' },
  fawaterak: { id: 'fawaterak', name: 'Fawaterak Payments', category: 'Payments', color: '#10B981' },
  paymob: { id: 'paymob', name: 'Paymob Gateway', category: 'Payments', color: '#00F0FF' },
  excel: { id: 'excel', name: 'Maatwebsite Excel', category: 'Backend', color: '#217346' },
  mpdf: { id: 'mpdf', name: 'mPDF Tax Engine', category: 'Backend', color: '#E11D48' },
  tailwind: { id: 'tailwind', name: 'Tailwind CSS', category: 'Frontend & Tools', color: '#06B6D4' },
  vite: { id: 'vite', name: 'Vite', category: 'Frontend & Tools', color: '#646CFF' },
  alpine: { id: 'alpine', name: 'Alpine.js', category: 'Frontend & Tools', color: '#8BC0D0' },
  blade: { id: 'blade', name: 'Blade Templates', category: 'Frontend & Tools', color: '#F45B1E' },
  pest: { id: 'pest', name: 'Pest Testing', category: 'Frontend & Tools', color: '#A855F7' },
  phpunit: { id: 'phpunit', name: 'PHPUnit', category: 'Frontend & Tools', color: '#3B82F6' },
  breeze: { id: 'breeze', name: 'Laravel Breeze', category: 'Backend', color: '#FF2D20' },
};

export const getTechById = (id: string): Technology => {
  return techRegistry[id] || { id, name: id, category: 'Backend', color: '#94A3B8' };
};
