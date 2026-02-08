// Intersection Observer for scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.letter-card').forEach(card => {
        observer.observe(card);
    });
}

// Smooth scroll behavior between sections
function setupSmoothScroll() {
    document.querySelectorAll('.letter-card').forEach((card, index) => {
        // Add slight delay between automatic scrolls for better UX
        if (index > 0) {
            card.style.scrollMargin = '100px';
        }
    });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    setupScrollAnimations();
    setupSmoothScroll();
    
    // Preload images for smoother experience
    const images = [
        'assets/images/J.jpg',
        'assets/images/O.jpg',
        'assets/images/V.jpg',
        'assets/images/I.jpg',
        'assets/images/A.jpg',
        'assets/images/L.jpg',
        'assets/images/E.jpg'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});