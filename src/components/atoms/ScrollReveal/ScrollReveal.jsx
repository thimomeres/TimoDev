import { useEffect, useRef, useState } from "react";
import "./ScrollReveal.css";

function ScrollReveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return undefined;
    }

    const reveal = () => setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    const fallbackTimer = window.setTimeout(reveal, 8000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal${isVisible ? " scroll-reveal--visible" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={{ "--scroll-reveal-delay": `${delay}ms` }}
    >
      <div className="scroll-reveal__content">{children}</div>
    </div>
  );
}

export default ScrollReveal;
