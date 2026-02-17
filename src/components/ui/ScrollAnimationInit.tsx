'use client';

import { useEffect } from 'react';

export function ScrollAnimationInit() {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -20% 0px' }
    );

    document
      .querySelectorAll('.animate-on-scroll, .animate-scale-in, .animate-slide-left, .stagger-children, .chat-stagger')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
