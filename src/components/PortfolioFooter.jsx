import { MapPin } from 'lucide-react';

export default function PortfolioFooter({ t, isProjectPage = false, onNavClick }) {
  const year = new Date().getFullYear();
  const isAr = t?.nav?.home === 'الرئيسية';
  const homeHref = isProjectPage ? '/#home' : '#home';

  return (
    <footer className="ft-root" aria-label={isAr ? 'تذييل الصفحة' : 'Site footer'}>
      <div className="ft-main">
        <div className="container-shell ft-main-shell">

          <div className="ft-summary">
            <div className="ft-identity">
              <a
                href={homeHref}
                onClick={(e) => onNavClick?.(e, '#home')}
                className="ft-logo"
                aria-label={isAr ? 'العودة للأعلى' : 'Rabie Khashaba — home'}
              >
                <span className="ft-logo-mark" aria-hidden="true">RK</span>
                <span className="ft-logo-copy">
                  <span className="ft-logo-name">
                    {isAr ? 'ربيع عبد الرحمن' : <>Rabie <strong>Khashaba</strong></>}
                  </span>
                  <span className="ft-title">
                    {isAr ? 'مطور باك إند | PHP & Laravel' : 'Backend Developer | PHP & Laravel'}
                  </span>
                </span>
              </a>

              <p className="ft-desc">
                {isAr
                  ? 'بناء أنظمة خلفية قابلة للتوسع، وواجهات API موثوقة، وتطبيقات ويب حديثة.'
                  : 'Building scalable backend systems, reliable APIs, and modern web applications.'}
              </p>
            </div>

            <div className="ft-meta">
              <span className="ft-badge" aria-label={isAr ? 'الحالة المهنية' : 'Work status'}>
                <span className="ft-badge-dot" aria-hidden="true" />
                {t?.footerStatus ?? (isAr ? 'متاح للعمل' : 'Available for work')}
              </span>

              <span className="ft-location">
                <MapPin size={13} strokeWidth={1.9} aria-hidden="true" />
                <span>{isAr ? 'القاهرة، مصر · متاح للعمل عن بُعد' : 'Cairo, Egypt · Remote Worldwide'}</span>
              </span>
            </div>
          </div>

          <div className="ft-bar" role="contentinfo">
            <p className="ft-bar-left">
              © {year} {isAr ? 'ربيع خشبة.' : 'Rabie Khashaba.'}{' '}
              <span>{isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</span>
            </p>
            <p className="ft-bar-right">
              {isAr
                ? 'مبني للأداء، والموثوقية، والبنية النظيفة.'
                : 'Built for performance, reliability & clean architecture.'}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
