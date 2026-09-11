// Music Player Functionality
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
let isPlaying = false;

// Initialize music player
musicToggle.addEventListener('click', toggleMusic);

function toggleMusic() {
    if (isPlaying) {
        backgroundMusic.pause();
        musicToggle.classList.remove('playing');
        isPlaying = false;
    } else {
        backgroundMusic.play().catch(error => {
            console.log('Autoplay prevented:', error);
        });
        musicToggle.classList.add('playing');
        isPlaying = true;
    }
}

// Auto-play on user interaction
document.addEventListener('click', () => {
    if (!isPlaying && backgroundMusic.paused) {
        backgroundMusic.play().catch(error => {
            console.log('Autoplay prevented:', error);
        });
        musicToggle.classList.add('playing');
        isPlaying = true;
    }
}, { once: true });

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animate elements
document.querySelectorAll('.animate-fade-up, .animate-scale').forEach(el => {
    observer.observe(el);
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Mobile Menu - if needed for future enhancements
console.log('Wedding Invitation Loaded - Bismillah, may this union be blessed!');
