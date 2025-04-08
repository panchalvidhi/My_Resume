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
      color = 'rgba(0, 123, 255, 0.3)',
      duration = 800
    } = options;
    
    // Add the keyframe animation to the document once instead of for each click
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(styleElement);
    
    // Function to create the animation
    const createRipple = (event: MouseEvent) => {
      // Use document body as the default click target for full-screen effect
      const body = document.body;
      
      // Create ripple element
      const circle = document.createElement('span');
      const diameter = Math.max(size, 100);
      const radius = diameter / 2;
      
      // Position the ripple at the click coordinates relative to the viewport
      const x = event.clientX - radius;
      const y = event.clientY - radius;
      
      // Style the ripple
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
      circle.style.position = 'fixed'; // Use fixed position to be viewport-relative
      circle.style.borderRadius = '50%';
      circle.style.backgroundColor = color;
      circle.style.pointerEvents = 'none';
      circle.style.transform = 'scale(0)';
      circle.style.zIndex = '9999'; // Ensure it appears above all content
      circle.style.animation = `ripple-animation ${duration}ms linear`;
      
      // Append to body to ensure it's visible regardless of where clicked
      body.appendChild(circle);
      
      // Remove ripple after animation completes
      setTimeout(() => {
        if (circle && circle.parentNode) {
          circle.parentNode.removeChild(circle);
        }
      }, duration);
    };
    
    // Add event listener to the document
    document.addEventListener('click', createRipple);
    
    // Clean up on unmount
    return () => {
      document.removeEventListener('click', createRipple);
      if (styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
    };
  }, [options]);
}