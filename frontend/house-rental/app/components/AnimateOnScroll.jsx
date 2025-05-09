"use client";

import { useEffect, useRef, useState } from 'react';

const AnimateOnScroll = ({ 
  children, 
  className = "", 
  threshold = 0.1,
  animation = "fade-up", // Options: fade-up, fade-down, fade-left, fade-right, zoom-in
  delay = 0, // Delay in ms
  duration = 800, // Duration in ms
  once = true // Whether to animate only once or every time the element enters the viewport
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Define animation classes
  const animationClasses = {
    'fade-up': 'translate-y-10 opacity-0',
    'fade-down': 'translate-y-[-10px] opacity-0',
    'fade-left': 'translate-x-[-10px] opacity-0',
    'fade-right': 'translate-x-10 opacity-0',
    'zoom-in': 'scale-95 opacity-0',
  };

  const animationStyle = {
    transition: `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? '' : animationClasses[animation] || 'opacity-0'}`}
      style={animationStyle}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
