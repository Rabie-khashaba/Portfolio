import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUp,
  Check,
  Github,
  Linkedin,
  Mail,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import Badge from './components/Badge';
import Button from './components/Button';
import ProjectCard from './components/ProjectCard';
import SectionHeading from './components/SectionHeading';
import ServiceItem from './components/ServiceItem';
import TechChip from './components/TechChip';
import { navigation } from './data/navigation';
import { projects } from './data/projects';
import { services } from './data/services';
import { techGroups } from './data/technologies';
import { experience } from './data/experience';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      services: 'Services',
      contact: 'Contact',
    },
    logo: 'R.K',
    language: 'EN',
    hello: 'Hello, I’m',
    name: 'Rabie Abdelrahman',
    role: 'Backend Engineer · Laravel Developer',
    summary:
      'I design and develop secure, scalable backend systems in Laravel and PHP to power APIs, business workflows, and digital products that need to perform in production.',
    ctaPrimary: 'View My Work',
    ctaSecondary: 'Get In Touch',
    profile: 'Profile',
    available: 'Available',
    experience: 'Experience',
    focus: 'Focus',
    backend: 'Backend',
    shipped: 'Shipped & Live',
    mobileApps: '3+ Mobile Apps',
    apis: '10+ APIs',
    systems: 'Systems',
    live: 'Live',
    aboutEyebrow: '01 / About',
    aboutTitle: 'Backend systems that keep products running reliably.',
    aboutText:
      'I’m a backend engineer focused on building secure, maintainable, and production-ready systems that power real business workflows. From API architecture and database design to authentication, integrations, and deployment, I build the core engine behind modern digital products.',
    aboutTags: [
      'Laravel Backend',
      'API Architecture',
      'Database Design',
      'Authentication',
      'Payments',
      'Notifications',
      'Cloud Storage',
      'Business Logic',
    ],
    projectsEyebrow: '02 / Selected Work',
    projectsTitle: "Projects I've built",
    projectsDescription:
      'A selection of backend systems and API-driven products designed for scale, reliability, and real business operations.',
    serviceEyebrow: '03 / Services',
    servicesTitle: 'What I build',
    servicesDescription:
      'Laravel and PHP backend solutions designed to support growth, business logic, integrations, and production stability.',
    techEyebrow: 'Tools I work with',
    techTitle: 'Technology stack',
    experienceEyebrow: 'Experience',
    experienceTitle: 'Professional timeline',
    checklistTitle: 'What you can expect',
    checklist: [
      'Clean and maintainable code',
      'Secure API architecture',
      'Scalable database design',
      'Production-ready systems',
      'Proper authentication & authorization',
      'Third-party integrations',
      'Mobile-ready APIs',
      'Performance-focused development',
    ],
    valueTitle: 'Engineering value',
    valueText:
      'I design backend systems that are secure, maintainable, and built for real-world growth — with clean architecture, stable APIs, and business-focused performance.',
    contactEyebrow: '04 / Contact',
    contactTitle: 'Let’s build something reliable.',
    contactDescription: 'Have a project, product, or backend challenge? Let’s talk.',
    startConversation: 'Start a conversation',
    conversationText: 'I build backend systems designed to scale with your product.',
    footerText: '© 2026 Rabie Abdelrahman',
    builtWith: 'Built with React + Tailwind CSS',
    top: 'Back to top',
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من أنا',
      projects: 'المشاريع',
      services: 'الخدمات',
      contact: 'تواصل',
    },
    logo: 'ر.ك',
    language: 'AR',
    hello: 'مرحباً، أنا',
    name: 'ربيع عبد الرحمن',
    role: 'مهندس باك إند · مطور لارافيل',
    summary:
      'أصمم وأبني أنظمة باك إند آمنة وقابلة للتطوير في Laravel وPHP لدعم واجهات API، منطق الأعمال، والمنتجات الرقمية التي تحتاج إلى الاستقرار في الإنتاج.',
    ctaPrimary: 'عرض الأعمال',
    ctaSecondary: 'تواصل معي',
    profile: 'الملف الشخصي',
    available: 'متاح',
    experience: 'الخبرة',
    focus: 'التركيز',
    backend: 'الباك إند',
    shipped: 'تم الإطلاق',
    mobileApps: '3+ تطبيقات جوال',
    apis: '10+ واجهات',
    systems: 'الأنظمة',
    live: 'مباشر',
    aboutEyebrow: '01 / من أنا',
    aboutTitle: 'أنظمة باك إند تدعم المنتجات وتضمن الاستقرار.',
    aboutText:
      'أنا مهندس باك إند أركز على بناء أنظمة آمنة وقابلة للصيانة وجاهزة للإنتاج لدعم عمليات الأعمال الفعلية. من تصميم واجهات API وقواعد البيانات إلى المصادقة والتكاملات والنشر، أُبني المحرك الأساسي خلف المنتجات الرقمية الحديثة.',
    aboutTags: [
      'لارافيل باك إند',
      'هندسة API',
      'تصميم قاعدة البيانات',
      'المصادقة',
      'المدفوعات',
      'الإشعارات',
      'التخزين السحابي',
      'منطق الأعمال',
    ],
    projectsEyebrow: '02 / الأعمال المختارة',
    projectsTitle: 'المشاريع التي قمت ببنائها',
    projectsDescription:
      'مجموعة مختارة من أنظمة باك إند ومنتجات قائمة على API مصممة للتوسع، الموثوقية، وتشغيل الأعمال الحقيقية.',
    serviceEyebrow: '03 / الخدمات',
    servicesTitle: 'ما الذي أعمل عليه',
    servicesDescription:
      'حلول Laravel وPHP backend مصممة لدعم النمو ومنطق الأعمال والتكاملات والاستقرار في الإنتاج.',
    techEyebrow: 'الأدوات التي أعمل بها',
    techTitle: 'المكدس التقني',
    experienceEyebrow: 'الخبرة',
    experienceTitle: 'المسار المهني',
    checklistTitle: 'ما يمكنك توقعه',
    checklist: [
      'كود نظيف وقابل للصيانة',
      'هندسة API آمنة',
      'تصميم قواعد بيانات قابلة للتوسع',
      'أنظمة جاهزة للإنتاج',
      'مصادقة وتفويض صحيح',
      'تكاملات خارجية',
      'واجهات جاهزة للجوال',
      'تطوير موجه للأداء',
    ],
    valueTitle: 'القيمة التقنية',
    valueText:
      'أصمم أنظمة باك إند آمنة وقابلة للصيانة ومعدة للنمو العملي، مع هندسة نظيفة، واجهات مستقرة، وأداء موجه نحو تحقيق أهداف العمل.',
    contactEyebrow: '04 / تواصل',
    contactTitle: 'لنقم بشيء موثوق.',
    contactDescription: 'هل لديك مشروع أو تحدي باك إند؟ دعنا نتحدث.',
    startConversation: 'ابدأ محادثة',
    conversationText: 'أبني أنظمة باك إند مصممة لتتكامل مع منتجك وتوسع معه.',
    footerText: '© 2026 ربيع عبد الرحمن',
    builtWith: 'بنيت باستخدام React + Tailwind CSS',
    top: 'عودة إلى الأعلى',
    email: 'البريد الإلكتروني',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
};

const stats = [
  { id: '01', labelKey: 'backendEngineering' },
  { id: '02', labelKey: 'laravel' },
  { id: '03', labelKey: 'rest' },
  { id: '04', labelKey: 'country' },
];

const socialLinks = [
  { href: 'mailto:khashabarabie@gmail.com', labelKey: 'email', icon: <Mail size={16} /> },
  { href: 'https://github.com/Rabie-khashaba', labelKey: 'github', icon: <Github size={16} /> },
  { href: 'https://www.linkedin.com/in/rabie-khashaba/', labelKey: 'linkedin', icon: <Linkedin size={16} /> },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function App() {
  const shouldReduceMotion = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return localStorage.getItem('portfolio-lang') || 'en';
  });

  const t = translations[language] || translations.en;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-lang', language);
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }
  }, [language]);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 420);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = () => setMobileMenuOpen(false);

  const navItems = navigation.map((item) => ({
    ...item,
    label: t.nav[item.href.replace('#', '')],
  }));

  const statLabels = {
    backendEngineering: language === 'ar' ? 'هندسة الباك إند' : 'Backend Engineering',
    laravel: language === 'ar' ? 'لارافيل و PHP' : 'Laravel & PHP',
    rest: language === 'ar' ? 'واجهات REST' : 'RESTful APIs',
    country: language === 'ar' ? 'مصر' : 'Egypt',
  };

  const localizedProjects =
    language === 'ar'
      ? [
          {
            title: 'Home Plate',
            category: 'تطبيق جوال',
            description:
              'نظام توصيل طعام جاهز للإنتاج يربط بين العملاء والبائعين والسائقين والإدارة مع عمليات مبسطة ودفع آمن.',
            technologies: ['Flutter', 'BLoC / Cubit', 'Clean Architecture', 'Laravel', 'REST APIs', 'MySQL'],
            platforms: ['Google Play', 'App Store'],
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
            link: '#contact',
          },
          {
            title: 'Farra',
            category: 'منصة نقل',
            description:
              'نظام خلفي للعمليات اللوجستية والخدمات يركز على إدارة الطلبات، صلاحيات المستخدمين، وسير الطلبات عبر أنواع مستخدمين متعددة.',
            technologies: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Firebase'],
            platforms: ['Web App'],
            image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
            link: '#contact',
          },
          {
            title: 'Baby-Track',
            category: 'ذكاء اصطناعي وصحة',
            description:
              'منصة ذكية لمراقبة الأطفال تجمع بين تصنيف بكاء الطفل عبر الذكاء الاصطناعي ونظام Laravel موثوق لتحليل البيانات والتقارير.',
            technologies: ['Laravel', 'Python', 'MySQL', 'Machine Learning', 'REST APIs'],
            platforms: ['Web Platform'],
            image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
            link: '#contact',
          },
          {
            title: 'MovePoint',
            category: 'نظام مؤسسي',
            description:
              'مركز إداري للموظفين لإدارة الحضور، طلبات الإجازة، الرواتب، الوثائق، والعمليات الداخلية داخل المؤسسة.',
            technologies: ['Laravel', 'PHP', 'REST APIs', 'MySQL', 'Admin Dashboards'],
            platforms: ['Web App'],
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
            link: '#contact',
          },
          {
            title: 'MVL Lamousine',
            category: 'منصة حجوزات',
            description:
              'منصة حجز سيارات فاخرة مع إدارة دورة الحياة، تدفقات البائعين، العروض، ومعالجة المدفوعات.',
            technologies: ['Laravel', 'PHP', 'REST APIs', 'MySQL', 'Payments'],
            platforms: ['Web App'],
            image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
            link: '#contact',
          },
          {
            title: 'WhatsApp Messaging',
            category: 'برمجيات مراسلات',
            description:
              'خلفية رسائل SaaS لإدارة الاشتراكات، الحملات، التواصل مع العملاء، وسيروات OTP.',
            technologies: ['Laravel', 'PHP', 'MySQL', 'Sanctum', 'REST APIs'],
            platforms: ['Web SaaS'],
            image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80',
            link: '#contact',
          },
        ]
      : projects;

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
          { title: 'الموبايل', items: ['Flutter', 'Dart', 'BLoC', 'Cubit'] },
          { title: 'البنية التقنية', items: ['Docker', 'Git', 'Cloudflare', 'AWS', 'Linux'] },
          { title: 'التكاملات', items: ['Firebase', 'Google APIs', 'Payment APIs'] },
        ]
      : techGroups;

  const localizedExperience =
    language === 'ar'
      ? [
          {
            period: '2024 — حتى الآن',
            role: 'مهندس باك إند',
            company: 'Triple Agency',
            description:
              'بناء أنظمة باك إند قابلة للتوسع وواجهات API موثوقة لتطبيقات الجوال مع تركيز قوي على الموثوقية وقابلية الصيانة والهندسة النظيفة.',
            responsibilities: [
              'تطوير Laravel',
              'هندسة REST API',
              'تصميم قواعد البيانات',
              'المصادقة',
              'تكامل المدفوعات',
              'أنظمة الإشعارات',
              'التخزين السحابي',
              'النشر في الإنتاج',
            ],
          },
          {
            period: '2023 — 2024',
            role: 'مطور لارافيل',
            company: 'Product Teams',
            description:
              'تسليم أنظمة باك إند للوجستيات والتجارة والعمليات التشغيلية مع التركيز على الكود المعياري، سلامة البيانات، والاستقرار في بيئة الإنتاج.',
            responsibilities: [
              'أنظمة الإدارة الداخلية',
              'واجهات للعملاء',
              'صلاحيات حسب الدور',
              'تصميم MySQL',
              'تكاملات خارجية',
            ],
          },
        ]
      : experience;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,87,34,0.12),transparent_32%),linear-gradient(180deg,#0d0e12_0%,#11141a_100%)] text-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {isLoading ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#0d0e12]">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-2xl font-black tracking-[0.2em] text-primary shadow-[0_0_35px_rgba(255,87,34,0.4)]">
              R.K
            </div>
            <div className="flex items-center gap-2 text-sm uppercase tracking-[0.45em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span>{language === 'ar' ? 'ربيع عبد الرحمن' : 'Rabie Abdelrahman'}</span>
            </div>
          </div>
        </div>
      ) : null}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-shell/80 backdrop-blur-md">
        <div className="container-shell">
          <nav className="mx-auto flex max-w-7xl items-center justify-between py-4">
            <a href="#home" className="flex items-center gap-2 text-lg font-semibold tracking-[0.18em] text-white" aria-label="Go to top">
              <span className="flex items-center gap-2">
                <span className="font-bold">{t.logo}</span>
                <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              </span>
            </a>

            <div className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative text-sm font-medium text-muted transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full scale-x-0 bg-primary transition-transform duration-200 group-hover:scale-x-100" />
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <div className="flex overflow-hidden rounded-full border border-white/10 bg-card p-1">
                {['en', 'ar'].map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLanguage(code)}
                    className={`rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                      language === code ? 'bg-primary text-white' : 'text-muted'
                    }`}
                    aria-label={`Switch language to ${code === 'en' ? 'English' : 'Arabic'}`}
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>
              <Button as="a" href="#contact" className="px-5 py-2.5 text-sm">
                {t.ctaSecondary}
              </Button>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <div className="flex overflow-hidden rounded-full border border-white/10 bg-card p-1">
                {['en', 'ar'].map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLanguage(code)}
                    className={`rounded-full px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                      language === code ? 'bg-primary text-white' : 'text-muted'
                    }`}
                    aria-label={`Switch language to ${code === 'en' ? 'English' : 'Arabic'}`}
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>
              <button
                type="button"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((open) => !open)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-card text-white"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>

          {mobileMenuOpen ? (
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
              exit={shouldReduceMotion ? {} : { opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/10 pb-4 lg:hidden"
            >
              <div className="mt-3 flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className="rounded-xl border border-white/10 bg-card px-4 py-3 text-sm text-muted hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <Button as="a" href="#contact" onClick={handleNavClick} className="mt-2 w-full justify-center py-3 text-sm">
                  {t.ctaSecondary}
                </Button>
              </div>
            </motion.div>
          ) : null}
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="container-shell relative py-16 md:py-20 lg:py-24">
            <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(255,87,34,0.14),transparent_35%)]" />
            <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Badge className="mb-6">{t.hello}</Badge>
                <h1 className="max-w-xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-6xl lg:text-7xl">
                  {t.name}
                </h1>
                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#F3F4F6] md:text-base">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
                  <span>{t.role}</span>
                </div>
                <p className="mt-7 max-w-xl text-base leading-8 text-muted md:text-lg">{t.summary}</p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button as="a" href="#projects" className="px-6 py-3.5 text-sm sm:text-base">
                    {t.ctaPrimary}
                    <ArrowRight size={18} />
                  </Button>
                  <Button as="a" variant="secondary" href="#contact" className="px-6 py-3.5 text-sm sm:text-base">
                    {t.ctaSecondary}
                  </Button>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.id} className="rounded-2xl border border-white/10 bg-card/80 p-4 transition-all duration-200 hover:border-primary/40 hover:-translate-y-0.5">
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-xs font-bold text-primary">
                        {stat.id}
                      </div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted">{statLabels[stat.labelKey]}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                className="relative"
              >
                <div className="rounded-[2rem] border border-white/10 bg-card p-4 shadow-soft transition-all duration-500 hover:border-primary/50 hover:shadow-[0_20px_60px_rgba(255,87,34,0.18)] md:p-5">
                  <div className="rounded-[1.5rem] border border-white/10 bg-[#20232B] p-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.24em] text-muted">{t.profile}</p>
                        <h2 className="mt-2 text-2xl font-semibold text-white">Rabie</h2>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-success">
                        <span className="h-2 w-2 rounded-full bg-success" />
                        {t.available}
                      </div>
                    </div>

                    <div className="mt-4 grid gap-4">
                      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#151922]">
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0d0e12] via-transparent to-primary/10 opacity-80 transition-all duration-500 group-hover:opacity-100" />
                        <img
                          src="/main.jpg"
                          alt="Rabie Abdelrahman"
                          className="h-[340px] w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 md:h-[420px]"
                          loading="eager"
                        />
                        <div className="absolute inset-x-4 bottom-4 z-20 flex items-center justify-between rounded-2xl border border-white/10 bg-[#0d0e12]/75 px-3 py-2 backdrop-blur-md transition-all duration-500 group-hover:border-primary/40 group-hover:bg-[#0d0e12]/85">
                          <div>
                            <p className="text-[9px] uppercase tracking-[0.25em] text-muted">Backend</p>
                            <p className="mt-1 text-sm font-semibold text-white">Laravel · PHP</p>
                          </div>
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-base font-bold text-primary">R</span>
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                          <p className="text-[10px] uppercase tracking-[0.22em] text-muted">{t.experience}</p>
                          <p className="mt-2 text-xl font-semibold text-white">1.5 Years</p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                          <p className="text-[10px] uppercase tracking-[0.22em] text-muted">{t.focus}</p>
                          <p className="mt-2 text-xl font-semibold text-white">{t.backend}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="absolute -bottom-4 right-4 max-w-[240px] rounded-2xl border border-white/10 bg-[#141821]/95 p-4 shadow-soft backdrop-blur-md"
                >
                  <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                    <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                    <span>{t.shipped}</span>
                  </div>
                  <div className="space-y-3 text-sm text-white">
                    <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-2">
                      <span className="text-muted">{t.mobileApps}</span>
                      <span className="text-base font-semibold">03</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-2">
                      <span className="text-muted">{t.apis}</span>
                      <span className="text-base font-semibold">10</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-muted">{t.systems}</span>
                      <span className="text-base font-semibold">{t.live}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <motion.section id="about" className="section-shell" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={sectionReveal}>
          <div className="container-shell">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">{t.aboutEyebrow}</p>
                <h2 className="max-w-md text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[2.75rem]">
                  {t.aboutTitle}
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-base leading-8 text-muted md:text-lg">{t.aboutText}</p>

                <div className="flex flex-wrap gap-2">
                  {t.aboutTags.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-card px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-[#E5E7EB]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="projects" className="section-shell border-t border-white/10 bg-panel/80" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={sectionReveal}>
          <div className="container-shell">
            <SectionHeading
              eyebrow={t.projectsEyebrow}
              title={t.projectsTitle}
              description={t.projectsDescription}
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {localizedProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="services" className="section-shell border-t border-white/10" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={sectionReveal}>
          <div className="container-shell">
            <SectionHeading
              eyebrow={t.serviceEyebrow}
              title={t.servicesTitle}
              description={t.servicesDescription}
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {localizedServices.map((item) => (
                <ServiceItem key={item.number} item={item} />
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section className="section-shell border-t border-white/10 bg-panel/80" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={sectionReveal}>
          <div className="container-shell">
            <SectionHeading eyebrow={t.techEyebrow} title={t.techTitle} align="center" />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {localizedTechGroups.map((group) => (
                <div key={group.title} className="rounded-2xl border border-white/10 bg-card p-5">
                  <h3 className="mb-4 text-lg font-semibold text-white">{group.title}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <TechChip key={item}>{item}</TechChip>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section className="section-shell border-t border-white/10" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={sectionReveal}>
          <div className="container-shell">
            <SectionHeading eyebrow={t.experienceEyebrow} title={t.experienceTitle} />

            <div className="relative mx-auto max-w-5xl">
              <div className="absolute left-3 top-0 h-full w-px bg-white/10 md:left-1/2" aria-hidden="true" />

              <div className="space-y-8">
                {localizedExperience.map((item, index) => (
                  <div key={item.company} className="relative grid gap-5 md:grid-cols-2 md:gap-10">
                    <div className={`${index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:col-start-2 md:pl-10'}`}>
                      <div className="inline-flex items-center rounded-full border border-white/10 bg-card px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                        {item.period}
                      </div>
                    </div>

                    <div className="md:col-span-1">
                      <div className="absolute left-[10px] top-2 h-5 w-5 rounded-full border border-primary/40 bg-primary/20 md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />
                      <div className="rounded-2xl border border-white/10 bg-card p-6">
                        <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
                          <span>{item.role}</span>
                          <span className="text-primary">•</span>
                          <span>{item.company}</span>
                        </div>
                        <p className="text-sm leading-7 text-muted md:text-[15px]">{item.description}</p>
                        <ul className="mt-4 space-y-2">
                          {item.responsibilities.map((task) => (
                            <li key={task} className="flex items-start gap-2 text-sm text-[#E5E7EB]">
                              <span className="mt-1 text-primary">•</span>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section className="section-shell border-t border-white/10 bg-panel/80" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal}>
          <div className="container-shell">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="rounded-2xl border border-white/10 bg-card p-6 md:p-8">
                <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  <ShieldCheck size={16} />
                  <span>{t.checklistTitle}</span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {t.checklist.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-success/12 text-success">
                        <Check size={14} />
                      </span>
                      <p className="text-sm text-[#E5E7EB]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-card p-6 md:p-8">
                <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  <Sparkles size={16} />
                  <span>{t.valueTitle}</span>
                </div>
                <p className="text-base leading-8 text-muted md:text-lg">{t.valueText}</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="contact" className="section-shell border-t border-white/10" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal}>
          <div className="container-shell">
            <SectionHeading
              eyebrow={t.contactEyebrow}
              title={t.contactTitle}
              description={t.contactDescription}
              align="center"
            />

            <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-card p-6 md:p-8">
              <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
                <div>
                  <p className="text-xl font-semibold text-white md:text-2xl">{t.startConversation}</p>
                  <p className="mt-2 text-sm text-muted">{t.conversationText}</p>
                </div>
                <Button as="a" href="mailto:khashabarabie@gmail.com" className="px-6 py-3.5 text-sm">
                  {t.startConversation}
                  <ArrowRight size={18} />
                </Button>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.labelKey}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-base font-medium text-white transition-all duration-200 hover:border-primary/40 hover:text-primary"
                  >
                    {link.icon}
                    <span>{t[link.labelKey]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/10 bg-shell">
        <div className="container-shell flex flex-col gap-4 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>{t.footerText}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="https://github.com/Rabie-khashaba" target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a>
            <a href="https://www.linkedin.com/in/rabie-khashaba/" target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
            <a href="mailto:khashabarabie@gmail.com" className="hover:text-primary">{t.email}</a>
          </div>
          <p>{t.builtWith}</p>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-shell text-white shadow-soft transition-all duration-200 hover:bg-primary hover:text-white ${showBackToTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
        aria-label={t.top}
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}
