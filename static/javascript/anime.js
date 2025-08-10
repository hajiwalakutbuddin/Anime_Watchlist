// Animate anime names on watched page (fade in + slight upward movement)
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.eac')) {
        anime({
            targets: '.eac',
            opacity: [0, 1],
            translateY: [40, 0],
            delay: anime.stagger(80),
            duration: 600,
            easing: 'easeOutCubic',
        });
    }
});

// Animate watched page heading (slide in from left)
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.ani')) {
        anime({
            targets: '.ani',
            opacity: [0, 1],
            translateX: [-100, 0],
            duration: 900,
            easing: 'easeOutExpo',
        });
    }
});

// Animate homepage content (fade in + scale up)
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.kow') || document.querySelector('.add') || document.querySelector('.delete')) {
        anime({
            targets: '.kow, .add, .delete',
            opacity: [0, 1],
            scale: [0.95, 1],
            delay: anime.stagger(120),
            duration: 700,
            easing: 'easeOutBack',
        });
    }
});

// Animate tick on home page (pop in)
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.search.includes('added=1') || window.location.search.includes('deleted=1')) {
        const tick = document.getElementById('tick-animation');
        if (tick) {
            tick.style.display = 'block';
            anime({
                targets: '#tick-animation span',
                scale: [0, 1.5, 1],
                opacity: [0, 1],
                duration: 700,
                easing: 'easeOutElastic(1, .8)'
            });
            setTimeout(() => {
                tick.style.display = 'none';
                window.history.replaceState({}, document.title, window.location.pathname);
            }, 650);
        }
    }
});

// Animate about page content (fade in + slide up)
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.write') || document.querySelector('.comments')) {
        anime({
            targets: '.write, .comments',
            opacity: [0, 1],
            translateY: [60, 0],
            delay: anime.stagger(150),
            duration: 800,
            easing: 'easeOutExpo',
        });
    }
});