import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fade-up', 
  delay = 0 
}) {
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
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'fade-up':
        return 'animate-fade-in-up';
      case 'fade-down':
        return 'animate-fade-in-down';
      case 'scale-up':
        return 'animate-scale-up';
      case 'fade-in':
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
}

