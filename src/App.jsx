import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  CalendarDays,
  ChevronDown,
  Code2,
  Download,
  Github,
  Languages,
  Linkedin,
  Mail,
  LoaderCircle,
  Menu,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import Button from './components/Button';
import ProjectCard from './components/ProjectCard';
import ProjectDetailsPage from './components/ProjectDetailsPage';
import SectionHeading from './components/SectionHeading';
import ServiceItem from './components/ServiceItem';
import TechChip from './components/TechChip';
import { navigation } from './data/navigation';
import { projects } from './data/projects';
import { projectCaseStudies } from './data/projectCaseStudies';
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
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
    hello: 'Hello, I’m',
    name: 'Rabie Abdelrahman',
    role: 'Backend Engineer · Laravel Developer',
    summary:
      'With 2+ years of experience, I design and develop secure, scalable backend systems in Laravel and PHP to power APIs, business workflows, and digital products.',
    ctaPrimary: 'View My Work',
    ctaSecondary: 'Get In Touch',
    answerLabel: 'AI assistant',
    chatLoading: 'Thinking...',
    chatErrorLabel: 'Assistant notice',
    chatErrors: {
      chat_api_unavailable: 'The chat service is not connected. Start the local Worker or deploy the API.',
      gemini_not_configured: 'The Gemini API key is missing. Add GEMINI_API_KEY to the Cloudflare Worker secrets.',
      gemini_auth_failed: 'Gemini rejected the API key. Check the GEMINI_API_KEY secret.',
      gemini_quota_exceeded: 'The Gemini API usage limit was reached. Please try again later.',
      gemini_timeout: 'Gemini took too long to respond. Please try again.',
      gemini_request_failed: 'Gemini could not complete the request. Please try again shortly.',
      empty_ai_response: 'The assistant did not return a reply this time. Please try again shortly.',
      default: 'The assistant could not complete your request. Please try again in a moment.',
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
    projectDetails: {
      backToProjects: 'Back to projects',
      caseStudy: 'Project case study',
      projectOverview: 'Project overview',
      role: 'Role',
      scope: 'Focus',
      platform: 'Platform',
      challenge: 'The challenge',
      approach: 'The approach',
      highlights: 'What I worked on',
      stack: 'Technology stack',
      stackDescription: 'Tools and technologies used across the project.',
      nextStep: 'Have a similar challenge?',
      contactTitle: 'Let’s talk about your project.',
      contactButton: 'Start a conversation',
    },
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
    switchToLight: 'التبديل إلى الوضع الفاتح',
    switchToDark: 'التبديل إلى الوضع الداكن',
    hello: 'مرحباً، أنا',
    name: 'ربيع عبد الرحمن',
    role: 'مهندس باك إند · مطور لارافيل',
    summary:
      'لدي خبرة تزيد عن سنتين في تصميم وبناء أنظمة باك إند آمنة وقابلة للتوسع باستخدام Laravel وPHP لدعم واجهات API وعمليات الأعمال والمنتجات الرقمية.',
    ctaPrimary: 'عرض الأعمال',
    ctaSecondary: 'تواصل معي',
    answerLabel: 'مساعد ذكي',
    chatLoading: 'جاري تجهيز الإجابة...',
    chatErrorLabel: 'تنبيه المساعد',
    chatErrors: {
      chat_api_unavailable: 'خدمة المحادثة غير متصلة. شغّل Worker محليًا أو انشر واجهة API.',
      gemini_not_configured: 'مفتاح Gemini API غير موجود. أضف GEMINI_API_KEY إلى أسرار Cloudflare Worker.',
      gemini_auth_failed: 'رفض Gemini المفتاح. تحقق من قيمة GEMINI_API_KEY.',
      gemini_quota_exceeded: 'وصل استخدام Gemini إلى الحد المسموح. حاول مرة أخرى لاحقًا.',
      gemini_timeout: 'استغرق Gemini وقتًا أطول من المتوقع. حاول مرة أخرى.',
      gemini_request_failed: 'تعذر على Gemini إكمال الطلب. حاول مرة أخرى بعد قليل.',
      empty_ai_response: 'لم يرسل المساعد إجابة هذه المرة. حاول مجددًا بعد قليل.',
      default: 'تعذر إكمال الطلب. حاول مرة أخرى بعد قليل.',
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
    projectDetails: {
      backToProjects: 'العودة إلى المشاريع',
      caseStudy: 'دراسة حالة المشروع',
      projectOverview: 'نظرة عامة على المشروع',
      role: 'الدور',
      scope: 'التركيز',
      platform: 'المنصة',
      challenge: 'التحدي',
      approach: 'طريقة التنفيذ',
      highlights: 'ما عملت عليه',
      stack: 'التقنيات المستخدمة',
      stackDescription: 'الأدوات والتقنيات المستخدمة في المشروع.',
      nextStep: 'لديك تحدٍ مشابه؟',
      contactTitle: 'لنتحدث عن مشروعك.',
      contactButton: 'ابدأ محادثة',
    },
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

const getProjectSlug = (title) =>
  title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const getProjectSlugFromPath = () => window.location.pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1] || null;

export default function App() {
  const shouldReduceMotion = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callMenuOpen, setCallMenuOpen] = useState(false);
  const callMenuRef = useRef(null);
  const [lightTheme, setLightTheme] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('portfolio-theme') === 'light';
  });
  const [heroQuestion, setHeroQuestion] = useState('');
  const [heroAnswer, setHeroAnswer] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [isAnswering, setIsAnswering] = useState(false);
  const [chatError, setChatError] = useState('');
  const [selectedProjectSlug, setSelectedProjectSlug] = useState(() =>
    typeof window === 'undefined' ? null : getProjectSlugFromPath(),
  );
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
    localStorage.setItem('portfolio-theme', lightTheme ? 'light' : 'dark');
    document.documentElement.style.colorScheme = lightTheme ? 'light' : 'dark';
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      lightTheme ? '#F5F7FB' : '#0B1020',
    );
  }, [lightTheme]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!callMenuOpen) return;

    const handlePointerDown = (event) => {
      if (!callMenuRef.current?.contains(event.target)) {
        setCallMenuOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setCallMenuOpen(false);
        callMenuRef.current?.querySelector('button')?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [callMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleHistoryChange = () => setSelectedProjectSlug(getProjectSlugFromPath());
    window.addEventListener('popstate', handleHistoryChange);
    return () => window.removeEventListener('popstate', handleHistoryChange);
  }, []);

  const handleNavClick = () => setMobileMenuOpen(false);
  const handleQuestionSubmit = async (event) => {
    event.preventDefault();
    const question = heroQuestion.trim();
    if (!question || isAnswering) return;

    setIsAnswering(true);
    setChatError(false);
    setHeroAnswer('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ question, history: chatMessages.slice(-6), language }),
      });
      const responseText = await response.text();
      let result;
      try {
        result = JSON.parse(responseText);
      } catch {
        throw new Error('chat_api_unavailable');
      }

      if (!response.ok) {
        throw new Error(result?.error || 'chat_api_unavailable');
      }
      if (typeof result?.answer !== 'string' || !result.answer.trim()) {
        throw new Error('invalid_chat_response');
      }

      const answer = result.answer.trim();
      setHeroAnswer(answer);
      setChatMessages((messages) =>
        [...messages, { role: 'user', content: question }, { role: 'assistant', content: answer }].slice(-6),
      );
      setHeroQuestion('');
    } catch (error) {
      console.error('Portfolio AI chat request failed.', error);
      setChatError(error instanceof TypeError ? 'chat_api_unavailable' : error.message);
    } finally {
      setIsAnswering(false);
    }
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
            category: 'منصة توصيل طعام',
            description:
              'منصة توصيل متعددة الأطراف مبنية باستخدام Laravel، تربط العملاء والمتاجر والسائقين والإدارة عبر تطبيقات الجوال ولوحة للعمليات.',
            technologies: ['Laravel', 'REST APIs', 'المدفوعات', 'Cloudflare R2', 'Android', 'iOS'],
            platforms: ['Android', 'iOS', 'لوحة إدارة'],
            preview: 'home-plate',
          },
          {
            title: 'MovePoint',
            category: 'منصة ERP وCRM',
            description:
              'نظام مؤسسي لإدارة التوظيف ومسارات المبيعات والعملاء المحتملين والرواتب، مع تكامل WhatsApp ولوحات لمتابعة العمليات.',
            technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'WhatsApp API'],
            platforms: ['منصة ويب'],
            preview: 'movepoint',
          },
          {
            title: 'WhatsApp Messaging',
            category: 'المراسلة والأتمتة',
            description:
              'منصة لأتمتة WhatsApp تتيح المصادقة عبر رمز QR وإصدار رموز الوصول وإدارة عدة نسخ لكل رقم هاتف.',
            technologies: ['Laravel', 'PHP', 'المصادقة عبر QR', 'WhatsApp API'],
            platforms: ['منصة ويب'],
            preview: 'whatsapp',
          },
          {
            title: 'Wander',
            category: 'تطبيق اجتماعي قائم على الموقع',
            description:
              'باك إند لتطبيق اجتماعي على الجوال يركز على اكتشاف المستخدمين حسب الموقع وتسجيلات الوصول والمشاركة والخصوصية.',
            technologies: ['Laravel', 'MySQL', 'REST APIs', 'التخزين السحابي'],
            platforms: ['تطبيق جوال', 'REST API'],
            preview: 'wander',
          },
          {
            title: 'Real Estate Management',
            category: 'إدارة العقارات',
            description:
              'نظام لإدارة العقارات طورت فيه الباك إند والفرونت إند، ويجمع بين القوائم العقارية وبيانات العملاء ومسارات العمل اليومية.',
            technologies: ['Laravel', 'PHP', 'MySQL'],
            platforms: ['منصة ويب'],
            preview: 'real-estate',
          },
          {
            title: 'Course Management System',
            category: 'إدارة الدورات والعمليات',
            description:
              'نظام لإدارة دورات الإنجليزية والهولندية، وتنظيم الطلاب والجداول وعمليات فرق الكلية.',
            technologies: ['Laravel', 'PHP', 'إدارة الدورات', 'الجدولة'],
            platforms: ['منصة ويب'],
            preview: 'course-management',
          },
        ]
      : projects;

  const selectedProject = localizedProjects.find((project) => getProjectSlug(project.title) === selectedProjectSlug);
  const projectIndex = localizedProjects.findIndex((project) => getProjectSlug(project.title) === selectedProjectSlug) + 1;
  const projectDetails = selectedProjectSlug ? projectCaseStudies[selectedProjectSlug]?.[language] : null;

  useEffect(() => {
    if (selectedProjectSlug && !selectedProject) {
      window.history.replaceState(null, '', '/');
      setSelectedProjectSlug(null);
    }
  }, [selectedProject, selectedProjectSlug]);

  useEffect(() => {
    document.title = selectedProject
      ? `${selectedProject.title} | Rabie Abdelrahman`
      : 'Rabie Abdelrahman | Backend Engineer & Laravel Developer';
  }, [selectedProject]);

  const handleProjectOpen = (project) => {
    const slug = getProjectSlug(project.title);
    window.history.pushState({ projectSlug: slug }, '', `/projects/${slug}`);
    setSelectedProjectSlug(slug);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleBackToProjects = () => {
    window.history.pushState(null, '', '/#projects');
    setSelectedProjectSlug(null);
    window.setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({
        behavior: shouldReduceMotion ? 'auto' : 'smooth',
      });
    }, 0);
  };

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
            aria-label={lightTheme ? t.switchToDark : t.switchToLight}
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
              <a key={item.href} href={selectedProject ? `/${item.href}` : item.href}>{item.label}</a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="portfolio-language-switch" aria-label={language === 'ar' ? 'اختيار اللغة' : 'Language selection'}>
              <Languages size={16} aria-hidden="true" />
              {['en', 'ar'].map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLanguage(code)}
                  aria-label={`Switch language to ${code === 'en' ? 'English' : 'Arabic'}`}
                  aria-pressed={language === code}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="portfolio-call-dropdown" ref={callMenuRef}>
              <Button
                type="button"
                variant="secondary"
                className="portfolio-call-trigger px-4 py-3 text-sm sm:px-5"
                aria-label={language === 'ar' ? 'فتح قائمة التواصل والسيرة الذاتية' : 'Open contact and CV menu'}
                aria-expanded={callMenuOpen}
                aria-haspopup="menu"
                aria-controls="portfolio-call-menu"
                onClick={() => setCallMenuOpen((open) => !open)}
              >
                <CalendarDays size={16} aria-hidden="true" />
                <span className="portfolio-call-label">
                  {language === 'ar' ? 'لنتحدث' : 'Let’s Talk'}
                </span>
                <ChevronDown
                  className={callMenuOpen ? 'portfolio-call-chevron is-open' : 'portfolio-call-chevron'}
                  size={15}
                  aria-hidden="true"
                />
              </Button>
              <AnimatePresence>
                {callMenuOpen ? (
                  <motion.div
                    id="portfolio-call-menu"
                    className="portfolio-call-menu"
                    role="menu"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={shouldReduceMotion ? {} : { opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.16 }}
                  >
                    <a
                      href={selectedProject ? '/#contact' : '#contact'}
                      role="menuitem"
                      onClick={() => setCallMenuOpen(false)}
                    >
                      <span className="portfolio-call-menu-icon"><CalendarDays size={17} /></span>
                      <span className="portfolio-call-menu-copy">
                        <strong>{language === 'ar' ? 'احجز مكالمة' : 'Book a call'}</strong>
                        <small>{language === 'ar' ? 'لنتحدث عن مشروعك' : 'Let’s discuss your project'}</small>
                      </span>
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                    <a
                      href="/Rabie-Abdelrahman-Software-Engineer-CV.pdf"
                      download="Rabie-Abdelrahman-Software-Engineer-CV.pdf"
                      role="menuitem"
                      onClick={() => setCallMenuOpen(false)}
                    >
                      <span className="portfolio-call-menu-icon"><Download size={17} /></span>
                      <span className="portfolio-call-menu-copy">
                        <strong>{language === 'ar' ? 'تحميل السيرة الذاتية' : 'Download my CV'}</strong>
                        <small>{language === 'ar' ? 'ملف PDF · السيرة المهنية' : 'PDF document · Professional resume'}</small>
                      </span>
                      <Download size={16} aria-hidden="true" />
                    </a>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
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
                  href={selectedProject ? `/${item.href}` : item.href}
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
              <Button as="a" href={selectedProject ? '/#contact' : '#contact'} onClick={handleNavClick} className="px-5 py-3 text-sm">
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

      {selectedProject ? (
        <ProjectDetailsPage
          project={selectedProject}
          details={projectDetails}
          labels={t.projectDetails}
          index={projectIndex}
          isArabic={language === 'ar'}
          onBack={handleBackToProjects}
        />
      ) : (
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
                <div className="portfolio-prompt-heading">
                  <span className="portfolio-prompt-icon" aria-hidden="true">
                    <Sparkles size={18} />
                  </span>
                  <div className="portfolio-prompt-heading-copy">
                    <span className="portfolio-prompt-eyebrow">
                      {language === 'ar' ? 'مساعد البورتفوليو الذكي' : 'PORTFOLIO AI ASSISTANT'}
                    </span>
                    <p className="portfolio-prompt-title">
                      {language === 'ar' ? 'اسألني أي شيء عن عملي' : 'Ask me anything about my work'}
                    </p>
                  </div>
                  <span className="portfolio-prompt-status">
                    <i />
                    {language === 'ar' ? 'تجريبي' : 'BETA'}
                  </span>
                </div>
                <p className="portfolio-prompt-description">
                  {language === 'ar'
                    ? 'أنا مساعد ذكاء اصطناعي أجيب اعتمادًا على معلومات هذا الموقع. اسأل بطريقتك وبالعربية أو الإنجليزية.'
                    : 'I’m an AI assistant that answers from this portfolio. Ask naturally in English or Arabic.'}
                </p>
                <div className="portfolio-prompt-links-label">
                  {language === 'ar' ? 'مواضيع مقترحة' : 'EXPLORE'}
                </div>
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
                <form className="portfolio-prompt-form" onSubmit={handleQuestionSubmit}>
                  <input
                    type="text"
                    value={heroQuestion}
                    onChange={(event) => setHeroQuestion(event.target.value)}
                    placeholder={language === 'ar' ? 'اسألني عن مشاريعي أو مهاراتي...' : 'Ask about my projects, skills, or experience...'}
                    aria-label={language === 'ar' ? 'اسألني عن مشاريعي' : 'Ask me about my work'}
                    maxLength={1200}
                    required
                  />
                  <button
                    type="submit"
                    aria-label={isAnswering ? t.chatLoading : language === 'ar' ? 'إرسال السؤال' : 'Send your question'}
                    disabled={isAnswering}
                  >
                    {isAnswering
                      ? <LoaderCircle size={18} className="animate-spin" />
                      : <ArrowUpRight size={18} />}
                  </button>
                </form>
                {heroAnswer || isAnswering || chatError ? (
                  <div
                    className={`portfolio-prompt-answer${chatError ? ' is-error' : ''}`}
                    role="status"
                    aria-live="polite"
                  >
                    <span>{chatError ? t.chatErrorLabel : t.answerLabel}</span>
                    <p>
                      {isAnswering
                        ? t.chatLoading
                        : chatError
                          ? t.chatErrors[chatError] || t.chatErrors.default
                          : heroAnswer}
                    </p>
                  </div>
                ) : null}
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
                <img src="/IMG_20260921_214019_936(1).jpg" alt={t.name} loading="lazy" />
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
                    onViewDetails={handleProjectOpen}
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

            <div className="portfolio-timeline relative mx-auto max-w-5xl">
              <div className="portfolio-timeline-line absolute left-3 top-0 h-full w-px bg-white/10 md:left-1/2" aria-hidden="true" />

              <div className="space-y-8">
                {localizedExperience.map((item, index) => (
                  <div key={item.company} className="relative grid gap-5 md:grid-cols-2 md:gap-10">
                    <div className={`${index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:col-start-2 md:pl-10'}`}>
                      <div className="portfolio-timeline-period inline-flex items-center rounded-full border border-white/10 bg-card px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                        {item.period}
                      </div>
                    </div>

                    <div className="md:col-span-1">
                      <div className="portfolio-timeline-marker absolute left-[10px] top-2 h-5 w-5 rounded-full border border-primary/40 bg-primary/20 md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />
                      <div className="portfolio-timeline-card rounded-2xl border border-white/10 bg-card p-6">
                        <div className="portfolio-timeline-meta mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
                          <span>{item.role}</span>
                          <span className="text-primary">•</span>
                          <span>{item.company}</span>
                        </div>
                        <p className="text-sm leading-7 text-muted md:text-[15px]">{item.description}</p>
                        <ul className="mt-4 space-y-2">
                          {item.responsibilities.map((task) => (
                            <li key={task} className="portfolio-timeline-task flex items-start gap-2 text-sm text-[#E5E7EB]">
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

        <motion.section id="expectations" className="section-shell" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal}>
          <div className="container-shell">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="portfolio-expectations-card rounded-2xl border border-white/10 bg-card p-6 md:p-8">
                <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  <ShieldCheck size={16} />
                  <span>{t.checklistTitle}</span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {t.checklist.map((item) => (
                    <div key={item} className="portfolio-expectation-item flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-success/12 text-success">
                        <Check size={14} />
                      </span>
                      <p className="text-sm text-[#E5E7EB]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="portfolio-value-card rounded-2xl border border-white/10 bg-card p-6 md:p-8">
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
      )}

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
