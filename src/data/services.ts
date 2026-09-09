export interface ServiceItem {
  id: string;
  number: string;
  iconName: string;
  techIds: string[];
}

export const services: ServiceItem[] = [
  {
    id: 'backend',
    number: '01',
    iconName: 'Server',
    techIds: ['laravel', 'php', 'mysql', 'redis'],
  },
  {
    id: 'api',
    number: '02',
    iconName: 'Code2',
    techIds: ['sanctum', 'socialite', 'spatie'],
  },
  {
    id: 'ai_ml',
    number: '03',
    iconName: 'Cpu',
    techIds: ['python', 'fastapi'],
  },
  {
    id: 'payments_ecommerce',
    number: '04',
    iconName: 'CreditCard',
    techIds: ['fawaterak', 'paymob', 'excel'],
  },
  {
    id: 'realtime_notifications',
    number: '05',
    iconName: 'Zap',
    techIds: ['pusher', 'firebase', 'aws-s3'],
  },
  {
    id: 'dashboards',
    number: '06',
    iconName: 'LayoutDashboard',
    techIds: ['blade', 'tailwind', 'alpine', 'vite'],
  },
];
