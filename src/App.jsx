import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
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
  MessageCircle,
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
import TechnologyGroupTitle from './components/TechnologyGroupTitle';
import PortfolioFooter from './components/PortfolioFooter';
import AboutSection from './components/AboutSection';
import { navigation } from './data/navigation';
import { projectCaseStudies } from './data/projectCaseStudies';
import { getLocalizedProjects, getLocalizedSections } from './data/localizedContent';
import { translations } from './data/translations';
import { getProjectSlug, getProjectSlugFromPath, sectionReveal, sectionViewport } from './utils/portfolio';

const socialLinks = [
  { href: 'mailto:khashabarabie@gmail.com', labelKey: 'email', icon: <Mail size={16} /> },
  { href: 'https://github.com/Rabie-khashaba', labelKey: 'github', icon: <Github size={16} /> },
  { href: 'https://www.linkedin.com/in/rabie-khashaba/', labelKey: 'linkedin', icon: <Linkedin size={16} /> },
];

export default function App() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callMenuOpen, setCallMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(() => window.scrollY > 16);
  const callMenuRef = useRef(null);
  const pointerRafRef = useRef(null);
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
    let previousScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setHeaderScrolled(currentScrollY > 16);
          const diff = currentScrollY - previousScrollY;
          if (Math.abs(diff) > 10 || currentScrollY <= 20) {
            const shouldBeDown = currentScrollY > previousScrollY && currentScrollY > 60;
            setIsScrollingDown((prev) => (prev !== shouldBeDown ? shouldBeDown : prev));
            previousScrollY = currentScrollY;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    document.documentElement.dataset.theme = lightTheme ? 'light' : 'dark';
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      lightTheme ? '#FAF8F4' : '#04151F',
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

  const handleNavClick = (event, href) => {
    setMobileMenuOpen(false);
    if (!href) return;
    if (selectedProject) return;
    if (href.startsWith('#')) {
      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        event?.preventDefault?.();
        targetEl.scrollIntoView({
          behavior: shouldReduceMotion ? 'auto' : 'smooth',
          block: 'start',
        });
        window.history.pushState(null, '', href);
      }
    }
  };

  const handlePointerMove = (event) => {
    if (event.pointerType === 'touch') return;
    const clientX = event.clientX;
    const clientY = event.clientY;
    const target = event.currentTarget;
    if (pointerRafRef.current) return;
    pointerRafRef.current = requestAnimationFrame(() => {
      target.style.setProperty('--pointer-x', `${clientX}px`);
      target.style.setProperty('--pointer-y', `${clientY}px`);
      target.style.setProperty('--pointer-glow-opacity', '1');
      pointerRafRef.current = null;
    });
  };
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

  const localizedProjects = getLocalizedProjects(language);

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
      : 'Rabie Abdelrahman | Backend Engineer & Backend Developer';
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

  const { localizedServices, localizedTechGroups, localizedExperience } = getLocalizedSections(language);
  const visibleTechGroups = localizedTechGroups.filter((group) => !group.items.includes('Flutter'));

  return (
    <div
      className={`portfolio-root ${lightTheme ? 'theme-light' : ''}`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      onPointerMove={handlePointerMove}
      onPointerLeave={(event) => event.currentTarget.style.setProperty('--pointer-glow-opacity', '0')}
    >
      <header className={`portfolio-header sticky top-0 z-50${headerScrolled ? ' is-scrolled' : ''}`}>
        <motion.div
          className="portfolio-scroll-progress"
          style={{ scaleX: scrollYProgress }}
          aria-hidden="true"
        />
        <nav className="container-shell relative mx-auto flex items-center justify-between">
          <a className="portfolio-mobile-brand" href="#home" aria-label="Rabie Abdelrahman home">R<span>.</span>K</a>
          <div className="portfolio-mobile-controls">
          <button
            type="button"
            className="portfolio-icon-button"
            onClick={() => setLightTheme((isLight) => !isLight)}
            aria-label={lightTheme ? t.switchToDark : t.switchToLight}
            aria-pressed={lightTheme}
          >
            {lightTheme ? <Moon size={19} /> : <Sun size={19} />}
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
          <button className="portfolio-mobile-language" type="button" onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} aria-label="Switch language">
            {t.language}<ChevronDown size={14} />
          </button>
          </div>

          <div
            className={`portfolio-desktop-nav ${isScrollingDown ? 'is-scroll-transparent' : ''}`}
            aria-label={language === 'ar' ? 'التنقل' : 'Navigation'}
          >
            {navItems.filter((item) => item.href !== '#contact').map((item) => (
              <a
                key={item.href}
                href={selectedProject ? `/${item.href}` : item.href}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="portfolio-header-actions flex items-center gap-3">
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
                <CalendarDays className="portfolio-contact-desktop-icon" size={16} aria-hidden="true" />
                <MessageCircle className="portfolio-contact-mobile-icon" size={20} aria-hidden="true" />
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
                      onClick={(e) => {
                        setCallMenuOpen(false);
                        handleNavClick(e, '#contact');
                      }}
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
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.24, delay: shouldReduceMotion ? 0 : 0.04 * index }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="portfolio-menu-footer">
              <Button as="a" href={selectedProject ? '/#contact' : '#contact'} onClick={(e) => handleNavClick(e, '#contact')} className="px-5 py-3 text-sm">
                <CalendarDays size={16} />
                {language === 'ar' ? 'تواصل معي' : 'Book a Call'}
              </Button>
              <a
                className="portfolio-menu-cv"
                href="/Rabie-Abdelrahman-Software-Engineer-CV.pdf"
                download="Rabie-Abdelrahman-Software-Engineer-CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="portfolio-menu-cv-icon"><Download size={18} /></span>
                <span className="portfolio-menu-cv-copy">
                  <strong>{language === 'ar' ? 'تحميل السيرة الذاتية' : 'Download CV'}</strong>
                  <small>{language === 'ar' ? 'نسخة PDF من سيرتي المهنية' : 'Professional resume · PDF'}</small>
                </span>
                <ArrowDown className="portfolio-menu-cv-arrow" size={17} />
              </a>
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
          labels={{
            ...t.projectDetails,
            repositoryLabel: t.viewRepository,
          }}
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
              <p className="portfolio-hero-eyebrow">{language === 'ar' ? 'مرحباً، أنا' : "HELLO, I'M"}</p>
              <h1 className="portfolio-hero-name">
                {language === 'ar' ? 'ربيع ' : 'Rabie '}
                <span>{language === 'ar' ? 'عبدالرحمن' : 'Abdelrhman'}</span>
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
                    {language === 'ar' ? 'متاح' : 'Available'}
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
                    <a href={item.href} key={item.href} onClick={(e) => handleNavClick(e, item.href)}>{item.label}</a>
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

              <a className="portfolio-scroll-cue" href="#about" onClick={(e) => handleNavClick(e, '#about')}>
                <span>{language === 'ar' ? 'اكتشف المزيد' : 'Scroll to explore'}</span>
                <ArrowDown size={16} />
              </a>
            </motion.div>
          </div>
        </section>

        <AboutSection
          language={language}
          t={t}
          shouldReduceMotion={shouldReduceMotion}
          sectionReveal={sectionReveal}
          sectionViewport={sectionViewport}
        />

        <motion.section id="projects" className="section-shell" initial="hidden" whileInView="show" viewport={sectionViewport} variants={sectionReveal}>
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
                  initial={shouldReduceMotion ? false : { opacity: 0.4, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '140px 0px 0px 0px', amount: 0.02 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.22, delay: shouldReduceMotion ? 0 : (index % 2) * 0.04 }}
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

        <motion.section id="services" className="section-shell" initial="hidden" whileInView="show" viewport={sectionViewport} variants={sectionReveal}>
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

        <motion.section id="skills" className="section-shell" initial="hidden" whileInView="show" viewport={sectionViewport} variants={sectionReveal}>
          <div className="container-shell">
            <SectionHeading eyebrow={t.techEyebrow} title={t.techTitle} align="center" />

            <div className="portfolio-skills-cloud">
              {visibleTechGroups.map((group, groupIndex) => (
                <div
                  className={`portfolio-skill-row${['Mobile', 'الموبايل'].includes(group.title) ? ' portfolio-skill-row-mobile' : ''}`}
                  key={group.title}
                >
                  <div className="portfolio-skill-group">
                    <span>0{groupIndex + 1}</span>
                    <TechnologyGroupTitle groupIndex={localizedTechGroups.indexOf(group)}>{group.title}</TechnologyGroupTitle>
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

        <motion.section id="experience" className="section-shell" initial="hidden" whileInView="show" viewport={sectionViewport} variants={sectionReveal}>
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
                      <div className="portfolio-timeline-marker absolute top-2 h-5 w-5 rounded-full border border-primary/40 bg-primary/20 left-[10px] md:left-1/2 md:rtl:left-auto md:rtl:right-1/2 md:-translate-x-1/2 md:rtl:translate-x-1/2" aria-hidden="true" />
                      <div className="portfolio-timeline-card rounded-2xl border border-white/10 bg-card p-6">
                        <div className="portfolio-timeline-meta mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
                          <span>{item.role}</span>
                          <span className="text-primary">•</span>
                          <span>{item.company}</span>
                        </div>
                        <p className="text-sm leading-7 text-muted md:text-[15px]">{item.description}</p>
                        <ul className="mt-4 space-y-2">
                          {item.responsibilities.map((task) => (
                            <li key={task} className="portfolio-timeline-task flex items-start gap-2 text-sm text-text">
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

        <motion.section id="expectations" className="section-shell" initial="hidden" whileInView="show" viewport={sectionViewport} variants={sectionReveal}>
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
                      <p className="text-sm text-text">{item}</p>
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

        <motion.section id="other" className="section-shell" initial="hidden" whileInView="show" viewport={sectionViewport} variants={sectionReveal}>
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
                  onClick={(e) => handleNavClick(e, card.href)}
                  initial={shouldReduceMotion ? false : { opacity: 0.4, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '140px 0px 0px 0px', amount: 0.02 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.22, delay: shouldReduceMotion ? 0 : index * 0.04 }}
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

        <motion.section id="contact" className="section-shell" initial="hidden" whileInView="show" viewport={sectionViewport} variants={sectionReveal}>
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

      <PortfolioFooter t={t} />
    </div>
  );
}


