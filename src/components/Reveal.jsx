import React, { useState, useEffect, useRef } from 'react';

// Custom Hook for Scroll Reveal Animation
const useScrollReveal = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isVisible];
};

// Reusable Reveal Component
const Reveal = ({ children, delay = 0, className = "", type = "fade-up" }) => {
  const [ref, isVisible] = useScrollReveal();
  
  const baseClasses = "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]";
  
  const variants = {
    "fade-up": isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
    "fade-in": isVisible ? "opacity-100" : "opacity-0",
    "scale-up": isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
  };

  return (
    <div 
      ref={ref} 
      className={`${baseClasses} ${variants[type]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
