// scripts/scrollAnimations.js - Scroll-triggered animations
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.animationDelay = 100;
        this.animatedElements = new Set();
        
        this.init();
    }
    
    init() {
        this.initRevealAnimations();
        this.initSkillBars();
        this.initTestimonialSlider();
        this.initCounterAnimations();
        //this.initParallaxEffects();
        
        console.log('🎬 Scroll animations initialized');
    }
    
    initRevealAnimations() {
        const revealElements = document.querySelectorAll(
            '.hero__content, .hero__image, .about__content, .about__image, ' +
            '.project__card, .timeline__item, .skill, .skill-tile, ' +
            '.testimonial__card, .contact__info, .contact__form'
        );
        
        const staggerObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
                    this.animatedElements.add(entry.target);
                    
                    // Stagger animation delay
                    const delay = index * this.animationDelay;
                    
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1)';
                        entry.target.style.visibility = 'visible';
                    }, delay);
                    
                    staggerObserver.unobserve(entry.target);
                }
            });
        }, this.observerOptions);
        
        // Set initial styles for animation
        revealElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px) scale(0.95)';
            element.style.visibility = 'hidden';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease, visibility 0.6s ease';
            element.style.transitionDelay = `${index * 0.1}s`;
            
            staggerObserver.observe(element);
        });
    }
    
    initSkillBars() {
        const skillBars = document.querySelectorAll('.skill__progress');
        let animatedSkills = new Set();
        
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animatedSkills.has(entry.target)) {
                    animatedSkills.add(entry.target);
                    
                    const progressBar = entry.target;
                    const width = progressBar.getAttribute('data-width') || '0';
                    
                    // Animate progress bar
                    setTimeout(() => {
                        progressBar.style.width = `${width}%`;
                        
                        // Animate percentage counter
                        const percentageElement = progressBar.closest('.skill').querySelector('.skill__percentage');
                        if (percentageElement) {
                            this.animateCounter(percentageElement, 0, parseInt(width), 1500);
                        }
                    }, 300);
                    
                    skillObserver.unobserve(progressBar);
                }
            });
        }, this.observerOptions);
        
        skillBars.forEach(bar => {
            bar.style.width = '0%';
            skillObserver.observe(bar);
        });
    }
    
    animateCounter(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value + '%';
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    initTestimonialSlider() {
        const track = document.querySelector('.testimonials__track');
        const cards = document.querySelectorAll('.testimonial__card');
        const prevBtn = document.querySelector('.testimonials__btn--prev');
        const nextBtn = document.querySelector('.testimonials__btn--next');
        const dotsContainer = document.querySelector('.testimonials__dots');
        
        if (!track || !cards.length) return;
        
        let currentIndex = 0;
        const totalSlides = cards.length;
        let autoSlideInterval;
        
        // Create dots if container exists
        if (dotsContainer && !dotsContainer.querySelector('.testimonials__dot')) {
            cards.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.className = `testimonials__dot ${index === 0 ? 'active' : ''}`;
                dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
                dot.addEventListener('click', () => this.goToSlide(index));
                dotsContainer.appendChild(dot);
            });
        }
        
        const updateSlider = () => {
            const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);
            track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            
            // Update dots
            const dots = document.querySelectorAll('.testimonials__dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
            
            // Update ARIA attributes
            cards.forEach((card, index) => {
                card.setAttribute('aria-hidden', index !== currentIndex);
            });
        };
        
        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        };
        
        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        };
        
        this.goToSlide = (index) => {
            currentIndex = index;
            updateSlider();
            resetAutoSlide();
        };
        
        // Button event listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoSlide();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoSlide();
            });
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });
        
        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        
        track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
                resetAutoSlide();
            }
        };
        
        // Auto-advance testimonials
        const startAutoSlide = () => {
            autoSlideInterval = setInterval(nextSlide, 5000);
        };
        
        const resetAutoSlide = () => {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        };
        
        // Initialize
        updateSlider();
        startAutoSlide();
        
        // Pause auto-slide on hover
        const slider = document.querySelector('.testimonials__slider');
        if (slider) {
            slider.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
            slider.addEventListener('mouseleave', startAutoSlide);
        }
    }
    
    initCounterAnimations() {
        const counters = document.querySelectorAll('.highlight__number');
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.textContent.replace('+', ''));
                    const suffix = counter.textContent.includes('+') ? '+' : '';
                    
                    this.animateCounter(counter, 0, target, 2000, suffix);
                    counterObserver.unobserve(counter);
                }
            });
        }, this.observerOptions);
        
        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }
    
    initParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.hero, .about');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                const elementTop = element.offsetTop;
                const elementHeight = element.offsetHeight;
                
                if (scrolled > elementTop - window.innerHeight && scrolled < elementTop + elementHeight) {
                    const yPos = -(scrolled * speed);
                    element.style.transform = `translateY(${yPos}px)`;
                }
            });
        });
    }
    
    // Utility function to check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const scrollAnimations = new ScrollAnimations();
    window.portfolioAnimations = scrollAnimations;
});