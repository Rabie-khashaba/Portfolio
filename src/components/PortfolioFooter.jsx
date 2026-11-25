import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function PortfolioFooter({ t }) {
  return (
    <footer className="portfolio-footer border-t border-white/10 bg-card/30 backdrop-blur-md">
      <div className="container-shell py-10 md:py-14">
        <div className="portfolio-footer-main flex flex-col gap-6 pb-8 border-b border-white/10 md:flex-row md:items-center md:justify-between">
          <div className="portfolio-footer-profile space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-xs font-bold text-primary">
                RK
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">{t.name}</h3>
                <p className="text-xs text-muted">{t.footerRole}</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-[11px] font-medium text-success">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span>{t.footerStatus}</span>
            </div>
          </div>

          <div className="portfolio-footer-social flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href="https://github.com/Rabie-khashaba"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-white transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary active:scale-95"
              aria-label="GitHub Profile"
            >
              <Github size={15} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rabie-khashaba/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-white transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary active:scale-95"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:khashabarabie@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-white transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary active:scale-95"
              aria-label="Email Address"
            >
              <Mail size={15} />
              <span>{t.email}</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-5 pt-6 text-xs text-muted sm:flex-row">
          <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-start">
            <p className="font-medium text-text">{t.footerText}</p>
            <p className="text-[11px] text-muted/80">{t.footerRights}</p>
          </div>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-text transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary active:scale-95"
            aria-label={t.top}
          >
            <span>{t.top}</span>
            <ArrowUp size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
