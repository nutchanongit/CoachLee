// Coach Lee Vibe - Main JavaScript

// Smooth Scroll Behavior
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Mobile Menu Toggle
  const menuButton = document.querySelector('button[aria-label="Toggle menu"]');
  if (menuButton) {
    menuButton.addEventListener('click', function() {
      console.log('Menu toggled');
      // Add mobile menu functionality here if needed
    });
  }

  // CTA Button Tracking (example)
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
      // You can add analytics tracking here
      if (this.textContent.includes('เริ่มต้น') || this.textContent.includes('เลือก') || this.textContent.includes('ติดต่อ')) {
        console.log('CTA Button clicked:', this.textContent);
      }
    });
  });

  // FAQ Accordion is handled by accordion.js

  // Header Scroll Effects
  const header = document.querySelector('header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add subtle shadow effect on scroll
    if (scrollTop > 0) {
      header.style.boxShadow = '4px 4px 0px #000000, 0 4px 12px rgba(0,0,0,0.1)';
    } else {
      header.style.boxShadow = '4px 4px 0px #000000';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // Intersection Observer for Animation Effects
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe sections for fade-in effect
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(10px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Form Validation (if forms are added)
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      console.log('Form submitted');
    });
  });
});

// Utility Functions

/**
 * Throttle function to limit event handler calls
 */
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Simple analytics event tracking
 */
function trackEvent(eventName, eventData = {}) {
  // Replace with your actual analytics implementation
  console.log('Event:', eventName, eventData);
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Export functions for use in other scripts if needed
window.Coach = {
  trackEvent: trackEvent,
  isInViewport: isInViewport,
  throttle: throttle,
  debounce: debounce
};
