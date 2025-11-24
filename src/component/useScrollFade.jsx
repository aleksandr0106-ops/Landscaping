import { useEffect } from "react";

export function useScrollFade(selector) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = "translateY(20px)";
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    elements.forEach((el) => {

      el.style.opacity = 0;
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";

      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector]);
}