// ============ PRELOADER ============
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 2800);
});

// ============ CUSTOM CURSOR ============
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
let mouseX = 0,
    mouseY = 0;
let ringX = 0,
    ringY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
    cursorDot.style.transform = 'translate(-50%, -50%)';

    const target = e.target;
    if (target.closest('a') || target.closest('button') || target.closest('.farm-card') || target.closest('.carousel-dot')) {
        cursorRing.classList.add('active');
        cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
    } else {
        cursorRing.classList.remove('active');
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
    }
});

function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
}
animateRing();

// ============ NAVBAR SCROLL ============
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============ STARS GENERATOR ============
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 120; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 60 + '%';
    star.style.setProperty('--duration', (2 + Math.random() * 3) + 's');
    star.style.setProperty('--delay', (Math.random() * 4) + 's');
    star.style.width = (1 + Math.random() * 2) + 'px';
    star.style.height = star.style.width;
    starsContainer.appendChild(star);
}

// ============ CLOUDS ============
const cloudsContainer = document.getElementById('clouds');
for (let i = 0; i < 6; i++) {
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');
    cloud.style.width = (100 + Math.random() * 200) + 'px';
    cloud.style.height = (40 + Math.random() * 80) + 'px';
    cloud.style.top = (10 + Math.random() * 35) + '%';
    cloud.style.left = (-Math.random() * 200) + 'px';
    cloud.style.setProperty('--cloud-duration', (30 + Math.random() * 40) + 's');
    cloud.style.setProperty('--cloud-delay', (Math.random() * 20) + 's');
    cloudsContainer.appendChild(cloud);
}

// ============ BIRDS ============
const birdsContainer = document.getElementById('birds');
const birdSymbols = ['🕊️', '🐦', '🦅'];
for (let i = 0; i < 5; i++) {
    const bird = document.createElement('div');
    bird.classList.add('bird');
    bird.textContent = birdSymbols[Math.floor(Math.random() * birdSymbols.length)];
    bird.style.top = (15 + Math.random() * 30) + '%';
    bird.style.right = (-Math.random() * 200) + 'px';
    bird.style.setProperty('--bird-duration', (20 + Math.random() * 25) + 's');
    bird.style.setProperty('--bird-delay', (Math.random() * 15) + 's');
    bird.style.setProperty('--bird-rise', (Math.random() * 100 - 50) + 'px');
    bird.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
    birdsContainer.appendChild(bird);
}

// ============ WHEAT GENERATOR ============
const wheatContainer = document.getElementById('wheatContainer');
for (let i = 0; i < 80; i++) {
    const wheat = document.createElement('div');
    wheat.classList.add('wheat');
    wheat.style.left = (Math.random() * 100) + '%';
    wheat.style.height = (40 + Math.random() * 80) + 'px';
    wheat.style.setProperty('--sway-duration', (2 + Math.random() * 3) + 's');
    wheat.style.setProperty('--sway-delay', (Math.random() * 3) + 's');
    wheat.style.width = (2 + Math.random() * 2) + 'px';
    wheatContainer.appendChild(wheat);
}

// ============ POLLEN PARTICLES ============
const pollenContainer = document.getElementById('pollenContainer');
for (let i = 0; i < 25; i++) {
    const pollen = document.createElement('div');
    pollen.classList.add('pollen');
    pollen.style.left = (Math.random() * 100) + '%';
    pollen.style.bottom = (-Math.random() * 50) + 'px';
    pollen.style.width = (3 + Math.random() * 6) + 'px';
    pollen.style.height = pollen.style.width;
    pollen.style.setProperty('--pollen-duration', (10 + Math.random() * 15) + 's');
    pollen.style.setProperty('--pollen-delay', (Math.random() * 10) + 's');
    pollen.style.setProperty('--pollen-drift', (Math.random() * 100 - 50) + 'px');
    pollenContainer.appendChild(pollen);
}

// ============ FIREFLIES ============
const fireflyContainer = document.getElementById('fireflyContainer');
for (let i = 0; i < 15; i++) {
    const firefly = document.createElement('div');
    firefly.classList.add('firefly');
    firefly.style.left = (10 + Math.random() * 80) + '%';
    firefly.style.top = (30 + Math.random() * 50) + '%';
    firefly.style.width = (2 + Math.random() * 3) + 'px';
    firefly.style.height = firefly.style.width;
    firefly.style.setProperty('--ff-duration', (4 + Math.random() * 6) + 's');
    firefly.style.setProperty('--ff-delay', (Math.random() * 5) + 's');
    firefly.style.setProperty('--ff-x', (Math.random() * 100 - 50) + 'px');
    firefly.style.setProperty('--ff-y', (Math.random() * 80 - 40) + 'px');
    fireflyContainer.appendChild(firefly);
}

// ============ PARALLAX SCROLL ============
const parallaxLayers = document.querySelectorAll('.parallax-layer');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    parallaxLayers.forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-speed'));
        if (scrollY < window.innerHeight) {
            layer.style.transform = `translateY(${scrollY * speed}px)`;
        }
    });
});

// ============ REVEAL OBSERVER ============
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => observer.observe(el));

// ============ COUNTER ANIMATION ============
const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-count'));
            const duration = 2000;
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeProgress = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(easeProgress * target);
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    el.textContent = target;
                }
            }
            requestAnimationFrame(updateCounter);
            counterObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// ============ TESTIMONIAL CAROUSEL ============
const track = document.getElementById('testimonialTrack');
const slides = track.children;
const dotsContainer = document.getElementById('carouselDots');
let currentSlide = 0;
const slideCount = slides.length;

for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
}
const dots = dotsContainer.children;

function goToSlide(index) {
    currentSlide = index;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    Array.from(dots).forEach((d, i) => {
        d.classList.toggle('active', i === currentSlide);
    });
}

setInterval(() => {
    goToSlide((currentSlide + 1) % slideCount);
}, 5000);

// ============ SCROLL INDICATOR ============
document.getElementById('scrollIndicator').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// ============ SMOOTH SCROLL FOR NAV LINKS ============
document.querySelectorAll('.nav-links a, .footer-links a, .btn').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============ WHEAT SWAY ON MOUSE MOVE ============
const wheatElements = document.querySelectorAll('.wheat');
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    wheatElements.forEach((wheat, i) => {
        const influence = Math.sin(i * 0.5 + x * 3) * 1.5;
        wheat.style.transform = `rotate(${influence}deg)`;
    });
});