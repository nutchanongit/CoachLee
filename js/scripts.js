/**
 * Main JavaScript for Coach Lee website
 * Handles smooth scrolling, animations, and general interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll Behavior
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

    // CTA Button Tracking
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.textContent.includes('เริ่ม') ||
                this.textContent.includes('เลือก') ||
                this.textContent.includes('ติดต่อ') ||
                this.textContent.includes('ปรึกษา')) {
                console.log('CTA Button clicked:', this.textContent);
            }
        });
    });

    // Header Scroll Effects
    const header = document.querySelector('header');
    if (header) {
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
    }

    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
});

/**
 * Utility Functions
 */

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
window.CoachLee = {
    trackEvent: trackEvent,
    isInViewport: isInViewport,
    throttle: throttle,
    debounce: debounce
};
