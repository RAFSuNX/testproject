import { ANIMATION_CONFIG, STATES } from './config.js';

export function animateSection(section, direction, offset) {
  const isEntering = offset === 0;
  const duration = ANIMATION_CONFIG.duration;
  
  // Base transition for all states
  const baseTransition = `
    transform ${duration}ms ${ANIMATION_CONFIG.springEasing},
    opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1),
    filter ${duration}ms ${ANIMATION_CONFIG.smoothEasing}
  `;

  if (isEntering) {
    section.style.transition = baseTransition;
    section.classList.add('active');
    
    requestAnimationFrame(() => {
      section.style.opacity = '1';
      section.style.transform = 'translateX(0%) translateY(0) scale(1)';
      section.style.filter = 'blur(0)';
      
      // Animate content with delay
      const content = section.querySelector('.content');
      if (content) {
        content.style.transition = baseTransition;
        content.style.transitionDelay = '150ms';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0) scale(1)';
        content.style.filter = 'blur(0)';
      }
    });
  } else {
    section.style.transition = baseTransition;
    section.classList.remove('active');
    
    requestAnimationFrame(() => {
      section.style.opacity = '0';
      section.style.transform = `translateX(${offset}%) translateY(30px) scale(0.95)`;
      section.style.filter = 'blur(8px)';
      
      const content = section.querySelector('.content');
      if (content) {
        content.style.transition = baseTransition;
        content.style.opacity = '0';
        content.style.transform = 'translateY(30px) scale(0.95)';
        content.style.filter = 'blur(8px)';
      }
    });
  }
}