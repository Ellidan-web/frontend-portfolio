// scripts/main.js - Main initialization script
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio website initialized');
    initializeApp();
});

function initializeApp() {
    // Set current year in footer
    setCurrentYear();
    
    // Initialize scroll to top button
    initScrollTop();
    
    // Initialize smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Initialize intersection observer for animations
    initScrollAnimations();
    
    // Initialize UI effects
    initUIEffects();
    
    // Initialize EmailJS
    initEmailJS();
    
    // Initialize loading states
    initLoadingStates();
}

function setCurrentYear() {
    const yearElements = document.querySelectorAll('.footer__copyright');
    if (yearElements.length > 0) {
        const currentYear = new Date().getFullYear();
        yearElements.forEach(element => {
            element.textContent = element.textContent.replace('2024', currentYear);
        });
    }
}

function initScrollTop() {
    const scrollTopBtn = document.getElementById('scroll-top');
    
    if (scrollTopBtn) {
        // Show/hide scroll to top button
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });
        
        // Scroll to top functionality
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Add hover effects
        scrollTopBtn.addEventListener('mouseenter', () => {
            scrollTopBtn.style.transform = 'scale(1.1)';
        });
        
        scrollTopBtn.addEventListener('mouseleave', () => {
            scrollTopBtn.style.transform = 'scale(1)';
        });
    }
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 70;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                history.pushState(null, null, targetId);
                
                // Close mobile menu if open
                const navMenu = document.getElementById('nav-menu');
                const navToggle = document.getElementById('nav-toggle');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                    
                    // Reset hamburger icon
                    if (navToggle) {
                        const icon = navToggle.querySelector('i');
                        if (icon) {
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                        }
                    }
                }
            }
        });
    });
}

function initScrollAnimations() {
    // This will be handled by scrollAnimations.js
    console.log('Scroll animations initialized');
}

function initUIEffects() {
    // This will be handled by uiEffects.js
    console.log('UI effects initialized');
}

function initEmailJS() {
    // This will be handled by email.js
    console.log('EmailJS initialized');
}

function initLoadingStates() {
    // Add loading state to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial state
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already loaded
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
});

// Export for use in other modules
window.portfolioApp = {
    initializeApp,
    initScrollTop,
    initSmoothScrolling,
    setCurrentYear
};