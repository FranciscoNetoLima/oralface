'use client';

import { useEffect } from 'react';

export function ScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -28px 0px' });

    nodes.forEach((node) => observer.observe(node));
    document.documentElement.classList.add('has-reveal');
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('has-reveal');
    };
  }, []);

  return null;
}
