import { useEffect } from 'react';

interface ClickAnimationOptions {
  size?: number;
  color?: string;
  duration?: number;
}

export default function useClickAnimation(options: ClickAnimationOptions = {}) {
  useEffect(() => {
    const {
      size = 100,
      color = 'rgba(255, 215, 0, 0.25)',  // Gold color with low opacity for portfolio theme
      duration = 800
    } = options;
    
    // Function to create the animation
    const createRipple = (event: MouseEvent) => {
      // Use document body as the default click target for full-screen effect
      const body = document.body;
      
      // Create ripple element
      const circle = document.createElement('div');
      const diameter = Math.max(size, 100);
      const radius = diameter / 2;
      
      // Position the ripple at the click coordinates relative to the viewport
      const x = event.clientX - radius;
      const y = event.clientY - radius;
      
      // Add our CSS class from animations.css
      circle.classList.add('click-animation');
      
      // Set styles not covered by the class
      circle.style.width = `${diameter}px`;
      circle.style.height = `${diameter}px`;
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
      circle.style.backgroundColor = color;
      
      // Set custom CSS variable for duration
      circle.style.setProperty('--duration', `${duration}ms`);
      
      // Generate random sparkles around the click area
      if (Math.random() > 0.5) {
        for (let i = 0; i < 3; i++) {
          const sparkle = document.createElement('div');
          const sparkleSize = Math.random() * 10 + 5;
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * 80 + 40;
          
          sparkle.style.position = 'absolute';
          sparkle.style.width = `${sparkleSize}px`;
          sparkle.style.height = `${sparkleSize}px`;
          sparkle.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
          sparkle.style.borderRadius = '50%';
          sparkle.style.left = `${x + radius + Math.cos(angle) * distance}px`;
          sparkle.style.top = `${y + radius + Math.sin(angle) * distance}px`;
          sparkle.style.transform = 'scale(0)';
          sparkle.style.opacity = '1';
          sparkle.style.transition = `all ${duration * 0.75}ms ease-out`;
          sparkle.style.zIndex = '9998';
          sparkle.style.pointerEvents = 'none';
          
          body.appendChild(sparkle);
          
          // Animate sparkle
          setTimeout(() => {
            sparkle.style.transform = 'scale(1)';
            sparkle.style.opacity = '0';
          }, 10);
          
          // Remove sparkle after animation
          setTimeout(() => {
            if (sparkle.parentNode) {
              sparkle.parentNode.removeChild(sparkle);
            }
          }, duration * 0.75);
        }
      }
      
      // Append to body to ensure it's visible regardless of where clicked
      body.appendChild(circle);
      
      // Remove ripple after animation completes
      setTimeout(() => {
        if (circle.parentNode) {
          circle.parentNode.removeChild(circle);
        }
      }, duration);
    };
    
    // Add event listener to the document
    document.addEventListener('click', createRipple);
    
    // Clean up on unmount
    return () => {
      document.removeEventListener('click', createRipple);
    };
  }, [options]);
}