import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import "./ScrollToTop.css";

const SCROLL_THRESHOLD = 480;

export default function ScrollToTop({ shouldReduceMotion }) {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = null;
    let lastProgress = -1;

    const update = () => {
      raf = null;
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrollTop > SCROLL_THRESHOLD);
      const next = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;
      // Only re-render when the change is actually perceptible
      if (Math.abs(next - lastProgress) > 0.002) {
        lastProgress = next;
        setProgress(next);
      }
    };

    const schedule = () => {
      if (raf === null) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      if (raf !== null) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top${visible ? " is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}
    >
      <svg
        className="scroll-to-top-progress"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <circle
          className="scroll-to-top-progress-track"
          cx="24"
          cy="24"
          r="21"
          fill="none"
        />
        <circle
          className="scroll-to-top-progress-bar"
          cx="24"
          cy="24"
          r="21"
          fill="none"
          strokeDasharray={2 * Math.PI * 21}
          strokeDashoffset={2 * Math.PI * 21 * (1 - progress)}
          transform="rotate(-90 24 24)"
        />
      </svg>
      <ArrowUp
        className="scroll-to-top-arrow"
        size={18}
        strokeWidth={2.2}
        aria-hidden="true"
      />
    </button>
  );
}
