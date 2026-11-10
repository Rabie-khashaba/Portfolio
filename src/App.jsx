import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  CalendarDays,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import Button from './components/Button';
import ProjectCard from './components/ProjectCard';
import ProjectPreview from './components/ProjectPreview';
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
      skills: 'Skills',
      services: 'Other',
      other: 'Other',
      contact: 'Contact',
    },
    logo: 'R.K',
    language: 'EN',
    hello: 'Hello, I’m',
    name: 'Rabie Abdelrahman',
    role: 'Backend Engineer · Laravel Developer',
    summary:
      'With 2+ years of experience, I design and develop secure, scalable backend systems in Laravel and PHP to power APIs, business workflows, and digital products.',
    ctaPrimary: 'View My Work',
    ctaSecondary: 'Get In Touch',
    answerLabel: 'A quick answer',
    answers: {
      projects: 'I build backend systems for delivery, transportation, health, HR, bookings, and messaging products. Explore the selected projects below for details.',
      skills: 'My core stack is PHP, Laravel, MySQL, and REST APIs, with experience in integrations, authentication, payments, Firebase, and cloud services.',
      experience: 'I work as a backend engineer building production-ready Laravel systems, APIs, integrations, and data workflows.',
      about: 'I’m Rabie, a backend engineer focused on secure, maintainable Laravel and PHP systems that support real products and business workflows.',
      contact: 'You can reach me at khashabarabie@gmail.com. I’m happy to talk about a project or backend challenge.',
      general: 'I can tell you about my projects, skills, experience, or how to get in touch. Try asking about one of those topics.',
    },
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
      'With 2+ years of experience, I build secure, maintainable, production-ready backend systems. From API architecture and database design to authentication, integrations, and deployment, I build the core engine behind modern digital products.',
    profileFactsTitle: 'A little more about me',
    profileFocus: 'Core focus',
    profileLocation: 'Based in',
    profileLocationValue: 'Egypt · Open to remote',
    profileExperience: 'Experience',
    experienceDuration: '2+ years',
    mindsetTitle: 'Mindset',
    craftTitle: 'Craft',
    journeyCardText: 'Explore the teams, roles, and production systems behind my work.',
    servicesCardText: 'APIs, product backends, integrations, and dependable business workflows.',
    codeCardText: 'Browse my repositories and the code behind selected projects.',
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
    viewProjectDetails: 'View Details',
    projectPlatforms: 'Platforms',
    projectTechnologies: 'Technologies',
    moreEyebrow: '05 / More to explore',
    moreTitle: 'Find me around the web',
    moreDescription: 'Explore my work, connect with me, or get in touch about a project.',
    openLink: 'Open link',
    serviceEyebrow: '03 / Services',
    servicesTitle: 'What I build',
    servicesDescription:
      'Laravel and PHP backend solutions designed to support growth, business logic, integrations, and production stability.',
    techEyebrow: 'Tech stack',
    techTitle: 'My Skills',
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
      skills: 'المهارات',
      services: 'أخرى',
      other: 'أخرى',
      contact: 'تواصل',
    },
    logo: 'ر.ك',
    language: 'AR',
    hello: 'مرحباً، أنا',
    name: 'ربيع عبد الرحمن',
    role: 'مهندس باك إند · مطور لارافيل',
    summary:
      'لدي خبرة تزيد عن سنتين في تصميم وبناء أنظمة باك إند آمنة وقابلة للتوسع باستخدام Laravel وPHP لدعم واجهات API وعمليات الأعمال والمنتجات الرقمية.',
    ctaPrimary: 'عرض الأعمال',
    ctaSecondary: 'تواصل معي',
    answerLabel: 'إجابة سريعة',
    answers: {
      projects: 'أبني أنظمة باك إند للتوصيل والنقل والصحة والموارد البشرية والحجوزات والمراسلات. استكشف المشاريع المختارة بالأسفل لمعرفة التفاصيل.',
      skills: 'تقنياتي الأساسية هي PHP وLaravel وMySQL وواجهات REST، إلى جانب التكاملات والمصادقة والمدفوعات وFirebase والخدمات السحابية.',
      experience: 'أعمل مهندس باك إند على بناء أنظمة Laravel جاهزة للإنتاج وواجهات API والتكاملات وسير البيانات.',
      about: 'أنا ربيع، مهندس باك إند أركز على أنظمة Laravel وPHP الآمنة والقابلة للصيانة لدعم المنتجات وعمليات الأعمال الفعلية.',
      contact: 'يمكنك التواصل معي عبر khashabarabie@gmail.com لمناقشة مشروع أو تحدٍ تقني.',
      general: 'يمكنني إخبارك عن مشاريعي أو مهاراتي أو خبرتي أو طريقة التواصل معي. جرّب السؤال عن أحد هذه المواضيع.',
    },
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
      'لدي خبرة تزيد عن سنتين في بناء أنظمة باك إند آمنة وقابلة للصيانة وجاهزة للإنتاج. من تصميم واجهات API وقواعد البيانات إلى المصادقة والتكاملات والنشر، أبني المحرك الأساسي للمنتجات الرقمية الحديثة.',
    profileFactsTitle: 'نبذة سريعة عني',
    profileFocus: 'مجال التركيز',
    profileLocation: 'الموقع',
    profileLocationValue: 'مصر · متاح للعمل عن بُعد',
    profileExperience: 'سنوات الخبرة',
    experienceDuration: 'سنتان من الخبرة',
    mindsetTitle: 'منهجيتي',
    craftTitle: 'ما أبنيه',
    journeyCardText: 'اكتشف الفرق والأدوار والأنظمة الفعلية التي عملت عليها.',
    servicesCardText: 'واجهات API وأنظمة خلفية وتكاملات وسير أعمال موثوقة.',
    codeCardText: 'تصفح مستودعاتي البرمجية والكود وراء مشاريعي المختارة.',
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
    viewProjectDetails: 'عرض التفاصيل',
    projectPlatforms: 'المنصات',
    projectTechnologies: 'التقنيات',
    moreEyebrow: '05 / المزيد',
    moreTitle: 'تواصل معي عبر الإنترنت',
    moreDescription: 'استكشف أعمالي أو تواصل معي لمناقشة مشروعك.',
    openLink: 'فتح الرابط',
    serviceEyebrow: '03 / الخدمات',
    servicesTitle: 'ما الذي أعمل عليه',
    servicesDescription:
      'حلول Laravel وPHP backend مصممة لدعم النمو ومنطق الأعمال والتكاملات والاستقرار في الإنتاج.',
    techEyebrow: 'المكدس التقني',
    techTitle: 'مهاراتي',
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
  const [lightTheme, setLightTheme] = useState(false);
  const [heroQuestion, setHeroQuestion] = useState('');
  const [heroAnswer, setHeroAnswer] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return localStorage.getItem('portfolio-lang') || 'en';
  });

  const t = translations[language] || translations.en;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-lang', language);
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }
  }, [language]);

  useEffect(() => {
    if (!mobileMenuOpen && !selectedProject) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen, selectedProject]);

  useEffect(() => {
    if (!mobileMenuOpen && !selectedProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen, selectedProject]);

  const handleNavClick = () => setMobileMenuOpen(false);
  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    const question = heroQuestion.trim().toLowerCase();
    const answerKey =
      /(project|work|built|portfolio|مشروع|أعمال|عمل|بنيت)/i.test(question) ? 'projects'
          : /(skill|tech|stack|technology|مهار|تقن|مكدس)/i.test(question) ? 'skills'
          : /(experience|career|job|خبرة|مسار)/i.test(question) ? 'experience'
            : /(contact|email|hire|تواصل|بريد|وظف)/i.test(question) ? 'contact'
              : /(about|who|yourself|من أنت|عنك|عن نفسي|عني)/i.test(question) ? 'about'
                : 'general';
    setHeroAnswer(answerKey);
  };

  const navItems = navigation.map((item) => ({
    ...item,
    label: t.nav[item.href.replace('#', '')],
  }));

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
            preview: 'home-plate',
            link: '#contact',
          },
          {
            title: 'Farra',
            category: 'منصة نقل',
            description:
              'نظام خلفي للعمليات اللوجستية والخدمات يركز على إدارة الطلبات، صلاحيات المستخدمين، وسير الطلبات عبر أنواع مستخدمين متعددة.',
            technologies: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Firebase'],
            platforms: ['Web App'],
            preview: 'farra',
            link: '#contact',
          },
          {
            title: 'Baby-Track',
            category: 'ذكاء اصطناعي وصحة',
            description:
              'منصة ذكية لمراقبة الأطفال تجمع بين تصنيف بكاء الطفل عبر الذكاء الاصطناعي ونظام Laravel موثوق لتحليل البيانات والتقارير.',
            technologies: ['Laravel', 'Python', 'MySQL', 'Machine Learning', 'REST APIs'],
            platforms: ['Web Platform'],
            preview: 'baby-track',
            link: '#contact',
          },
          {
            title: 'MovePoint',
            category: 'نظام مؤسسي',
            description:
              'مركز إداري للموظفين لإدارة الحضور، طلبات الإجازة، الرواتب، الوثائق، والعمليات الداخلية داخل المؤسسة.',
            technologies: ['Laravel', 'PHP', 'REST APIs', 'MySQL', 'Admin Dashboards'],
            platforms: ['Web App'],
            preview: 'movepoint',
            link: '#contact',
          },
          {
            title: 'MVL Lamousine',
            category: 'منصة حجوزات',
            description:
              'منصة حجز سيارات فاخرة مع إدارة دورة الحياة، تدفقات البائعين، العروض، ومعالجة المدفوعات.',
            technologies: ['Laravel', 'PHP', 'REST APIs', 'MySQL', 'Payments'],
            platforms: ['Web App'],
            preview: 'mvl',
            link: '#contact',
          },
          {
            title: 'WhatsApp Messaging',
            category: 'برمجيات مراسلات',
            description:
              'خلفية رسائل SaaS لإدارة الاشتراكات، الحملات، التواصل مع العملاء، وسيروات OTP.',
            technologies: ['Laravel', 'PHP', 'MySQL', 'Sanctum', 'REST APIs'],
            platforms: ['Web SaaS'],
            preview: 'whatsapp',
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
    <div
      className={`portfolio-root ${lightTheme ? 'theme-light' : ''}`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      onPointerMove={(event) => {
        if (event.pointerType === 'touch') return;
        const bounds = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
        event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
        event.currentTarget.style.setProperty('--pointer-glow-opacity', '1');
      }}
      onPointerLeave={(event) => event.currentTarget.style.setProperty('--pointer-glow-opacity', '0')}
    >
      <header className="portfolio-header sticky top-0 z-50">
        <nav className="container-shell relative mx-auto flex items-center justify-between">
          <button
            type="button"
            className="portfolio-icon-button"
            onClick={() => setLightTheme((isLight) => !isLight)}
            aria-label={lightTheme ? 'Switch to dark theme' : 'Switch to light theme'}
            aria-pressed={lightTheme}
          >
            {lightTheme ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            type="button"
            className="portfolio-icon-button portfolio-menu-toggle absolute left-1/2 -translate-x-1/2"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="portfolio-menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <div className="portfolio-desktop-nav" aria-label={language === 'ar' ? 'التنقل' : 'Navigation'}>
            {navItems.filter((item) => item.href !== '#contact').map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button as="a" href="#contact" variant="secondary" className="hidden px-5 py-3 text-sm sm:inline-flex">
              <CalendarDays size={16} />
              {language === 'ar' ? 'تواصل معي' : 'Book a Call'}
            </Button>
            <Button as="a" href="#contact" variant="secondary" className="px-4 py-3 text-sm sm:hidden" aria-label={t.ctaSecondary}>
              <CalendarDays size={16} />
            </Button>
          </div>

        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            className="portfolio-menu-backdrop"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? {} : { opacity: 0 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) handleNavClick();
            }}
          >
          <motion.div
            id="portfolio-menu"
            role="dialog"
            aria-modal="true"
            aria-label={language === 'ar' ? 'القائمة الرئيسية' : 'Main navigation'}
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="portfolio-menu-panel w-[min(86vw,960px)] p-5 sm:p-8"
          >
            <nav className="portfolio-menu-links" aria-label={language === 'ar' ? 'التنقل' : 'Navigation'}>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.24, delay: shouldReduceMotion ? 0 : 0.04 * index }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="portfolio-menu-footer">
              <Button as="a" href="#contact" onClick={handleNavClick} className="px-5 py-3 text-sm">
                <CalendarDays size={16} />
                {language === 'ar' ? 'تواصل معي' : 'Book a Call'}
              </Button>
              <div className="flex overflow-hidden rounded-full border border-white/10 bg-card p-1">
                {['en', 'ar'].map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLanguage(code)}
                    className={`rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                      language === code ? 'bg-primary text-white' : 'text-muted'
                    }`}
                    aria-label={`Switch language to ${code === 'en' ? 'English' : 'Arabic'}`}
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            className="project-details-backdrop"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? {} : { opacity: 0 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setSelectedProject(null);
            }}
          >
          <motion.article
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-details-title"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="project-details-panel"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="portfolio-icon-button project-details-close"
              aria-label={language === 'ar' ? 'إغلاق تفاصيل المشروع' : 'Close project details'}
            >
              <X size={19} />
            </button>
            <div className="project-details-image">
              <ProjectPreview project={selectedProject} />
            </div>
            <div className="project-details-content">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {selectedProject.category}
              </p>
              <h2 id="project-details-title">{selectedProject.title}</h2>
              <p className="project-details-description">{selectedProject.description}</p>
              <div className="project-details-meta">
                <div>
                  <h3>{t.projectPlatforms}</h3>
                  <p>{selectedProject.platforms.join(' / ')}</p>
                </div>
                <div>
                  <h3>{t.projectTechnologies}</h3>
                  <ul>
                    {selectedProject.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <a className="project-details-contact" href="mailto:khashabarabie@gmail.com">
                {t.startConversation}
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main id="home">
        <section className="portfolio-hero">
          <div className="container-shell portfolio-hero-inner">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              <h1>
                {language === 'ar' ? 'مرحباً، أنا' : 'Hi, I’m'} <span>{t.name}</span>
              </h1>
              <p className="portfolio-hero-role">{t.role}</p>

              <div className="portfolio-prompt">
                <p className="portfolio-prompt-title">
                  {language === 'ar' ? 'اسألني أي شيء عن عملي' : 'Ask me anything about my work'}
                </p>
                <form className="portfolio-prompt-form" onSubmit={handleQuestionSubmit}>
                  <input
                    type="text"
                    value={heroQuestion}
                    onChange={(event) => setHeroQuestion(event.target.value)}
                    placeholder={language === 'ar' ? 'اسألني عن مشاريعي أو مهاراتي...' : 'Ask about my projects, skills, or experience...'}
                    aria-label={language === 'ar' ? 'اسألني عن مشاريعي' : 'Ask me about my work'}
                    required
                  />
                  <button type="submit" aria-label={language === 'ar' ? 'إرسال السؤال' : 'Send your question'}>
                    <ArrowUpRight size={18} />
                  </button>
                </form>
                {heroAnswer ? (
                  <p className="portfolio-prompt-answer" role="status" aria-live="polite">
                    <span>{t.answerLabel}</span>
                    {t.answers[heroAnswer]}
                  </p>
                ) : null}
                <div className="portfolio-prompt-links">
                  {[
                    { href: '#projects', label: language === 'ar' ? 'المشاريع' : 'Projects' },
                    { href: '#about', label: language === 'ar' ? 'من أنا' : 'About me' },
                    { href: '#skills', label: t.nav.skills },
                    { href: '#contact', label: t.nav.contact },
                  ].map((item) => (
                    <a href={item.href} key={item.href}>{item.label}</a>
                  ))}
                </div>
              </div>

              <a className="portfolio-scroll-cue" href="#about">
                <span>{language === 'ar' ? 'اكتشف المزيد' : 'Scroll to explore'}</span>
                <ArrowDown size={16} />
              </a>
            </motion.div>
          </div>
        </section>

        <motion.section id="about" className="section-shell" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={sectionReveal}>
          <div className="container-shell">
            <div className="portfolio-intro-grid">
              <article className="profile-identity-card">
                <div>
                  <p className="profile-card-eyebrow">{t.aboutEyebrow}</p>
                  <p className="profile-identity-overline">{language === 'ar' ? 'مهندس برمجيات' : 'Backend engineer'}</p>
                </div>
                <h2 className="identity-wordmark">{t.name}</h2>
                <p className="profile-identity-role">{t.role}</p>
                <div className="profile-tech-line" aria-label="PHP, Laravel, and APIs">
                  <span>PHP</span><i /><span>Laravel</span><i /><span>APIs</span>
                </div>
              </article>

              <article className="profile-facts-card">
                <div className="profile-facts-heading">
                  <div>
                    <p className="profile-card-eyebrow">{language === 'ar' ? 'الملف الشخصي' : 'PROFILE'}</p>
                    <h3>{t.profileFactsTitle}</h3>
                  </div>
                  <span className="profile-status"><i />{t.available}</span>
                </div>
                <div className="profile-facts-grid">
                  {[
                    { label: t.profileFocus, value: 'Laravel · PHP · APIs' },
                    { label: t.profileLocation, value: t.profileLocationValue },
                    { label: t.profileExperience, value: t.experienceDuration },
                    { label: t.shipped, value: t.mobileApps },
                  ].map((fact, index) => (
                    <div className="profile-fact" key={fact.label}>
                      <span>0{index + 1}</span>
                      <p>{fact.label}</p>
                      <strong>{fact.value}</strong>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <div className="portfolio-about-editorial">
              <article className="profile-editorial-card">
                <p className="profile-card-eyebrow">{t.mindsetTitle}</p>
                <h3>{t.aboutTitle}</h3>
                <p>{t.aboutText}</p>
              </article>

              <div className="about-portrait overflow-hidden rounded-[1.75rem] border border-white/10">
                <img src="/main.jpg" alt={t.name} loading="lazy" />
                <div className="portrait-caption">
                  <span>{t.role}</span>
                  <span className="portrait-stack">PHP <i /> Laravel <i /> APIs</span>
                </div>
              </div>

              <article className="profile-editorial-card profile-craft-card">
                <p className="profile-card-eyebrow">{t.craftTitle}</p>
                <h3>{t.valueTitle}</h3>
                <p>{t.valueText}</p>
                <div className="profile-craft-tags">
                  {t.aboutTags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            </div>
          </div>
        </motion.section>

        <motion.section id="projects" className="section-shell" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={sectionReveal}>
          <div className="container-shell">
            <SectionHeading
              eyebrow={t.projectsEyebrow}
              title={t.projectsTitle}
              description={t.projectsDescription}
            />

            <div className="portfolio-project-grid grid gap-6 md:grid-cols-2">
              {localizedProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: shouldReduceMotion ? 0 : index * 0.07 }}
                >
                  <ProjectCard
                    project={project}
                    index={index + 1}
                    viewDetailsLabel={t.viewProjectDetails}
                    onViewDetails={setSelectedProject}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="services" className="section-shell" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={sectionReveal}>
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

        <motion.section id="skills" className="section-shell" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={sectionReveal}>
          <div className="container-shell">
            <SectionHeading eyebrow={t.techEyebrow} title={t.techTitle} align="center" />

            <div className="portfolio-skills-cloud">
              {localizedTechGroups.map((group, groupIndex) => (
                <div
                  className={`portfolio-skill-row${['Mobile', 'الموبايل'].includes(group.title) ? ' portfolio-skill-row-mobile' : ''}`}
                  key={group.title}
                >
                  <div className="portfolio-skill-group">
                    <span>0{groupIndex + 1}</span>
                    <h3>{group.title}</h3>
                  </div>
                  <ul>
                    {group.items.map((item) => (
                      <TechChip key={item}>{item}</TechChip>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="experience" className="section-shell" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={sectionReveal}>
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

        <motion.section className="section-shell" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal}>
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

        <motion.section id="other" className="section-shell" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal}>
          <div className="container-shell">
            <SectionHeading
              eyebrow={t.moreEyebrow}
              title={t.moreTitle}
              description={t.moreDescription}
            />
            <div className="portfolio-explore-grid">
              {[
                {
                  href: '#experience',
                  title: t.experienceTitle,
                  description: t.journeyCardText,
                  icon: <BriefcaseBusiness size={22} />,
                },
                {
                  href: '#services',
                  title: t.servicesTitle,
                  description: t.servicesCardText,
                  icon: <Sparkles size={22} />,
                },
                {
                  href: 'https://github.com/Rabie-khashaba',
                  title: t.github,
                  description: t.codeCardText,
                  icon: <Code2 size={22} />,
                },
              ].map((card, index) => (
                <motion.a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.35, delay: shouldReduceMotion ? 0 : index * 0.08 }}
                  className="portfolio-explore-link group"
                >
                  <span className="portfolio-explore-main">
                    <span className="portfolio-explore-icon" aria-hidden="true">{card.icon}</span>
                    <span className="portfolio-explore-copy">
                      <strong>{card.title}</strong>
                      <span>{card.description}</span>
                    </span>
                  </span>
                  <ArrowUpRight size={18} className="portfolio-explore-arrow" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="contact" className="section-shell" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal}>
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

      <footer>
        <div className="container-shell flex flex-col gap-4 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>{t.footerText}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="https://github.com/Rabie-khashaba" target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a>
            <a href="https://www.linkedin.com/in/rabie-khashaba/" target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
            <a href="mailto:khashabarabie@gmail.com" className="hover:text-primary">{t.email}</a>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p>{t.builtWith}</p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="portfolio-icon-button portfolio-footer-top"
              aria-label={t.top}
              title={t.top}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
