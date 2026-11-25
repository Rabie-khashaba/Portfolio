import { motion } from 'framer-motion';
import { CalendarDays, Code2, GraduationCap, Layers3, MapPin } from 'lucide-react';
import './AboutSection.css';

const technologyStack = ['PHP', 'Laravel', 'REST APIs'];

export default function AboutSection({ language, t, shouldReduceMotion, sectionReveal, sectionViewport }) {
  const facts = [
    { label: t.profileExperience, value: t.experienceDuration, icon: CalendarDays, emphasis: true },
    { label: t.shipped, value: t.mobileApps, icon: Layers3, emphasis: true },
    { label: t.profileLocation, value: t.profileLocationValue, icon: MapPin },
    { label: t.profileFocus, value: 'Laravel \u00b7 PHP \u00b7 REST APIs', icon: Code2 },
  ];

  const entrance = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: shouldReduceMotion ? 0 : 0.42, delay: shouldReduceMotion ? 0 : delay },
  });

  return (
    <motion.section
      id="about"
      className="section-shell signature-section"
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView={shouldReduceMotion ? undefined : 'show'}
      viewport={sectionViewport}
      variants={sectionReveal}
    >
      <div className="container-shell">
        <div className="signature-layout">
          <motion.div className="signature-rail" {...entrance()}>
            <span>{t.aboutEyebrow}</span>
            <i aria-hidden="true" />
            <span>{language === 'ar' ? '\u0645\u0644\u0641 \u0634\u062e\u0635\u064a' : 'PERSONAL PORTFOLIO'}</span>
            <b aria-hidden="true" />
          </motion.div>

          <motion.figure className="signature-portrait" {...entrance(0.06)}>
            <img src="/IMG_20260921_214019_936(1).jpg" alt={t.name} loading="lazy" />
            <span className="signature-portrait-frame" aria-hidden="true" />
            <span className="signature-portrait-index" aria-hidden="true">01</span>
            <figcaption className="signature-portrait-caption">
              <span className="signature-caption-mark" aria-hidden="true" />
              <span>{t.aboutRoleTitle}</span>
              <small>{technologyStack.join(' \u00b7 ')}</small>
            </figcaption>
          </motion.figure>

          <motion.div className="signature-identity" {...entrance(0.12)}>
            <p className="signature-role">{t.aboutRoleTitle}</p>
            <h2>{t.name}</h2>
            <p className="signature-summary">{t.summary}</p>
            <div className="signature-technologies" aria-label={language === 'ar' ? '\u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a' : 'Technologies'}>
              {technologyStack.map((technology, index) => (
                <span key={technology}>
                  <i aria-hidden="true">{'\u00b7'}</i>
                  {technology}
                </span>
              ))}
            </div>
          </motion.div>

          <aside className="signature-facts" aria-label={t.profileFactsTitle}>
            {facts.map(({ label, value, icon: Icon, emphasis }, index) => (
              <motion.div className="signature-fact" key={label} {...entrance(0.16 + index * 0.05)}>
                <Icon className="signature-fact-icon" size={18} strokeWidth={1.7} aria-hidden="true" />
                <div>
                  <span>{label}</span>
                  <strong className={emphasis ? 'is-emphasized' : ''}>{value}</strong>
                </div>
              </motion.div>
            ))}
          </aside>

          <motion.section className="signature-education" aria-labelledby="signature-education-title" {...entrance(0.24)}>
            <span className="signature-education-icon" aria-hidden="true">
              <GraduationCap size={24} strokeWidth={1.7} />
            </span>
            <div className="signature-education-copy">
              <p>{t.educationEyebrow}</p>
              <h3 id="signature-education-title">{t.educationDegree}</h3>
              <div className="signature-education-details">
                <span>{t.educationDepartment}</span>
                <i aria-hidden="true">{'\u00b7'}</i>
                <span>{t.educationUniversity}</span>
              </div>
            </div>
            <div className="signature-gpa">
              <span>{t.educationGpaLabel}</span>
              <strong>3.3 <small>/ 4.0</small></strong>
            </div>
          </motion.section>
        </div>
      </div>
    </motion.section>
  );
}
