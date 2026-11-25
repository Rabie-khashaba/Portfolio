import { projects } from './projects';
import { services } from './services';
import { techGroups } from './technologies';
import { experience } from './experience';

export function getLocalizedProjects(language) {
  const localizedProjects =
    language === 'ar'
      ? [
          {
            title: 'Home Plate',
            category: 'منصة توصيل طعام',
            description:
              'منصة توصيل متعددة الأطراف مبنية باستخدام Laravel، تربط العملاء والمتاجر والسائقين والإدارة عبر تطبيقات الجوال ولوحة للعمليات.',
            technologies: ['Laravel', 'REST APIs', 'المدفوعات', 'Cloudflare R2', 'Android', 'iOS'],
            platforms: ['Android', 'iOS', 'لوحة إدارة'],
            preview: 'home-plate',
            githubUrl: 'https://github.com/Rabie-khashaba/Home-Plate',
          },
          {
            title: 'MovePoint',
            category: 'منصة ERP وCRM',
            description:
              'نظام مؤسسي لإدارة التوظيف ومسارات المبيعات والعملاء المحتملين والرواتب، مع تكامل WhatsApp ولوحات لمتابعة العمليات.',
            technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'WhatsApp API'],
            platforms: ['منصة ويب'],
            preview: 'movepoint',
            githubUrl: 'https://github.com/Rabie-khashaba/Move-Point',
          },
          {
            title: 'WhatsApp Messaging',
            category: 'المراسلة والأتمتة',
            description:
              'منصة لأتمتة WhatsApp تتيح المصادقة عبر رمز QR وإصدار رموز الوصول وإدارة عدة نسخ لكل رقم هاتف.',
            technologies: ['Laravel', 'PHP', 'المصادقة عبر QR', 'WhatsApp API'],
            platforms: ['منصة ويب'],
            preview: 'whatsapp',
            githubUrl: 'https://github.com/Rabie-khashaba/Whatsapp',
          },
          {
            title: 'Farra',
            category: 'منصة نقل وخدمات لوجستية',
            description:
              'باك إند قابل للتوسع لعمليات النقل والخدمات، يدير طلبات المشاوير، والصلاحيات، وتدفقات العمليات، وإشعارات Firebase، والعمليات اللحظية.',
            technologies: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Firebase', 'إدارة الصلاحيات'],
            platforms: ['تطبيق جوال', 'REST API', 'لوحة تحكم'],
            preview: 'farra',
          },
          {
            title: 'Real Estate Management',
            category: 'إدارة العقارات',
            description:
              'نظام لإدارة العقارات طورت فيه الباك إند والفرونت إند، ويجمع بين القوائم العقارية وبيانات العملاء ومسارات العمل اليومية.',
            technologies: ['Laravel', 'PHP', 'MySQL'],
            platforms: ['منصة ويب'],
            preview: 'real-estate',
            githubUrl: 'https://github.com/Rabie-khashaba/All-star-Real-Estate-Dashboard',
          },
          {
            title: 'Course Management System',
            category: 'إدارة الدورات والعمليات',
            description:
              'نظام لإدارة دورات الإنجليزية والهولندية، وتنظيم الطلاب والجداول وعمليات فرق الكلية.',
            technologies: ['Laravel', 'PHP', 'إدارة الدورات', 'الجدولة'],
            platforms: ['منصة ويب'],
            preview: 'course-management',
            githubUrl: 'https://github.com/Rabie-khashaba/LMS-project-API-',
          },
          {
            title: 'ExpressCare',
            category: 'منصة إدارة الرعاية الصحية',
            description:
              'منصة صحية مبنية بـLaravel، تضم لوحات عربية وإنجليزية، وصلاحيات حسب الدور، ومصادقة WhatsApp OTP، ومسارات API للمرضى والإحالات والحجوزات.',
            technologies: ['Laravel 12', 'PHP', 'REST APIs', 'WhatsApp OTP', 'Firebase', 'Paymob'],
            platforms: ['منصة ويب', 'REST API'],
            preview: 'expresscare',
            githubUrl: 'https://github.com/Rabie-khashaba/expresscare-backend',
          },
          {
            title: 'Salem Shop',
            category: 'باك إند للتجارة الإلكترونية',
            description:
              'باك إند للتجارة مبني بـLaravel لإدارة المنتجات وعروض الأسعار والطلبات، مع توثيق للـAPI ولوحة تحكم إدارية.',
            technologies: ['Laravel', 'PHP', 'REST APIs', 'المنتجات والطلبات', 'لوحة الإدارة'],
            platforms: ['منصة ويب', 'REST API'],
            preview: 'salem-shop',
            githubUrl: 'https://github.com/Rabie-khashaba/salem-shop-backend',
          },
          {
            title: 'Arzaq',
            category: 'منصة إعلانات تجارية ومبوبة',
            description:
              'منصة للإعلانات التجارية والمبوبة تربط البائعين والمشترين مع تصفح مصنف للأقسام، ومسارات نشر الإعلانات، وتكامل منظم مع واجهات REST API.',
            technologies: ['React', 'Vite', 'Tailwind CSS', 'REST APIs', 'Lucide Icons'],
            platforms: ['منصة ويب', 'REST API'],
            preview: 'arzaq',
            githubUrl: 'https://github.com/Rabie-khashaba/Arzaq-website',
          },
          {
            title: 'Meshwary',
            category: 'نظام حجز مشاوير وأسطول ليموزين',
            description:
              'نظام تشغيلي ولوحة تحكم لإدارة حجوزات الليموزين، ومتابعة السائقين، وأسطول السيارات، والمناطق الجغرافية ومسارات الرحلات.',
            technologies: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'إدارة الأساطيل'],
            platforms: ['منصة ويب', 'REST API', 'لوحة تحكم إدارية'],
            preview: 'meshwary',
            githubUrl: 'https://github.com/Rabie-khashaba/meshwary',
          },
        ]
      : projects;
  return localizedProjects;
}

export function getLocalizedSections(language) {
  const localizedServices =
    language === 'ar'
      ? [
          {
            number: '01',
            title: 'تطوير API',
            description: 'تصميم واجهات REST آمنة وقابلة للتطوير للمنتجات الإلكترونية والتطبيقات والأنظمة الداخلية.',
            tech: ['Laravel', 'PHP', 'MySQL', 'REST'],
            icon: services[0].icon,
          },
          {
            number: '02',
            title: 'بنية الباك إند',
            description: 'بناء أنظمة باك إند قابلة للصيانة ومجهزة للنمو والتطوير والاستخدام في بيئة الإنتاج.',
            tech: ['Laravel', 'Clean Architecture', 'MySQL'],
            icon: services[1].icon,
          },
          {
            number: '03',
            title: 'أنظمة باك إند للجوال',
            description: 'إنشاء بنية خلفية للمنتجات Flutter والمنصات الرقمية الموجهة للمستخدمين عبر الهاتف.',
            tech: ['Laravel', 'Firebase', 'REST APIs'],
            icon: services[2].icon,
          },
          {
            number: '04',
            title: 'التكاملات الخارجية',
            description: 'ربط المدفوعات، الإشعارات، التخزين السحابي، المصادقة والخدمات الخارجية في أنظمة مستقرة.',
            tech: ['Paymob', 'Firebase', 'Cloudflare R2'],
            icon: services[3].icon,
          },
        ]
      : services;

  const localizedTechGroups =
    language === 'ar'
      ? [
          { title: 'الباك إند', items: ['PHP', 'Laravel', 'REST APIs', 'MySQL', 'Redis'] },
          { title: 'الفرونت إند', items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5', 'React.js'] },
          { title: 'الموبايل', items: ['Flutter', 'Dart', 'BLoC', 'Cubit'] },
          { title: 'البنية التقنية', items: ['Docker', 'Git', 'Cloudflare', 'AWS', 'Linux'] },
          { title: 'التكاملات', items: ['Firebase', 'Google APIs', 'Payment APIs'] },
        ]
      : techGroups;

  const localizedExperience =
    language === 'ar'
      ? [
          {
            period: 'سبتمبر 2025 — حتى الآن',
            role: 'مطور باك إند وفرونت إند',
            company: 'Triple Agency',
            description:
              'تطوير وظائف الباك إند وواجهات الفرونت إند لمشاريع الويب في Triple Agency.',
            responsibilities: [
              'تطوير الباك إند',
              'تطوير الفرونت إند',
            ],
          },
          {
            period: '1 يوليو — 1 سبتمبر 2025',
            role: 'متدرب تطوير برمجيات',
            company: 'Harvest',
            description:
              'إتمام فترة تدريب في تطوير البرمجيات لمدة ثلاثة أشهر في Harvest.',
            responsibilities: [
              'تدريب في تطوير البرمجيات',
            ],
          },
        ]
      : experience;
  return { localizedServices, localizedTechGroups, localizedExperience };
}
