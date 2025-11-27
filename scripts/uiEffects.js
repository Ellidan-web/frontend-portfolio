// scripts/uiEffects.js
// UI effects and interactions
class UIEffects {
    constructor() {
        this.init();
    }
    
    init() {
        this.initHoverEffects();
        this.initProjectCards();
        this.initSkillTiles();
        this.initScrollProgress();
    }
    
    initHoverEffects() {
        // Add hover effects to buttons
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', this.createRippleEffect);
        });
        
        // Add hover effects to cards
        const cards = document.querySelectorAll('.project__card, .testimonial__card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px)';
                card.style.boxShadow = 'var(--shadow-xl)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = 'var(--shadow-md)';
            });
        });
    }
    
    createRippleEffect(event) {
        const btn = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(btn.clientWidth, btn.clientHeight);
        const radius = diameter / 2;
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - (btn.getBoundingClientRect().left + radius)}px`;
        circle.style.top = `${event.clientY - (btn.getBoundingClientRect().top + radius)}px`;
        circle.classList.add('btn__ripple');
        
        const ripple = btn.getElementsByClassName('btn__ripple')[0];
        if (ripple) {
            ripple.remove();
        }
        
        btn.appendChild(circle);
    }
    
    initProjectCards() {
        const projectCards = document.querySelectorAll('.project__card');
        
        projectCards.forEach(card => {
            const image = card.querySelector('.project__image');
            const overlay = card.querySelector('.project__overlay');
            const links = card.querySelector('.project__links');
            
            if (image && overlay && links) {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    overlay.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(37, 99, 235, 0.9), rgba(37, 99, 235, 0.7))`;
                });
                
                card.addEventListener('mouseenter', () => {
                    overlay.style.opacity = '1';
                    links.style.opacity = '1';
                    links.style.transform = 'translateY(0)';
                });
                
                card.addEventListener('mouseleave', () => {
                    overlay.style.opacity = '0';
                    links.style.opacity = '0';
                    links.style.transform = 'translateY(20px)';
                });
            }
        });
    }
    
    initSkillTiles() {
        const skillTiles = document.querySelectorAll('.skill-tile');
        
        skillTiles.forEach(tile => {
            tile.addEventListener('mouseenter', () => {
                tile.style.transform = 'scale(1.1) rotate(5deg)';
            });
            
            tile.addEventListener('mouseleave', () => {
                tile.style.transform = 'scale(1) rotate(0)';
            });
        });
    }
    
    initScrollProgress() {
        // Create scroll progress bar
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: var(--primary-color);
            z-index: 1001;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = `${scrolled}%`;
        });
    }
}

// Initialize UI effects
document.addEventListener('DOMContentLoaded', () => {
    new UIEffects();
});

// Add ripple effect styles
const rippleStyles = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .btn__ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.7);
        transform: scale(0);
        animation: ripple 0.6s linear;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--primary-color);
        z-index: 1001;
        transition: width 0.1s ease;
    }
    
    .scroll-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition-normal);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: var(--shadow-lg);
        z-index: 999;
    }
    
    .scroll-top.show {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-top:hover {
        background: var(--primary-dark);
        transform: translateY(-3px);
    }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = rippleStyles;
document.head.appendChild(styleSheet);