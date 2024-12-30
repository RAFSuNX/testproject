// Shared animation configuration
export const ANIMATION_CONFIG = {
  duration: 1000,
  staggerDelay: 100,
  easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // Spring-like easing
  smoothEasing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  springEasing: 'cubic-bezier(0.23, 1, 0.32, 1)' // Improved spring effect
};

// Common animation states
export const STATES = {
  hidden: {
    opacity: '0',
    scale: 0.95,
    filter: 'blur(8px)',
    transform: 'translateY(30px) scale(0.95)'
  },
  visible: {
    opacity: '1',
    scale: 1,
    filter: 'blur(0)',
    transform: 'translateY(0) scale(1)'
  }
};