//animation of anime names on watched page
document.addEventListener('DOMContentLoaded', function() {
    anime({
        targets: '.eac',
        translateY: '15%' ,
        delay: anime.stagger(40),
        duration: 100,
        easing: 'easeInOutSine',
    });
});
//home page tick animation
document.addEventListener('DOMContentLoaded', function() {
    // Check for ?added=1 or ?deleted=1 in the URL
    if (window.location.search.includes('added=1') || window.location.search.includes('deleted=1')) {
        const tick = document.getElementById('tick-animation');
        if (tick) {
            tick.style.display = 'block';
            // Animate the tick with Anime.js
            anime({
                targets: '#tick-animation span',
                scale: [0, 1.5, 1],
                duration: 700,
                easing: 'easeOutElastic(1, .8)'
            });
            // Hide after 1.5 seconds
            setTimeout(() => {
                tick.style.display = 'none';
                // Remove the query string from the URL without reloading
                window.history.replaceState({}, document.title, window.location.pathname);
            }, 650);
        }
    }
});
//animation for homepage content
document.addEventListener('DOMContentLoaded',function(){
    anime({
        targets: '.kow, .add, .delete',
        translateY: [200, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
    })

})
//animation for about page content
document.addEventListener('DOMContentLoaded',function(){
    anime({
        targets: '.write, .comments',
        translateY: [200, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
    })

})
//animation for watched page heading
document.addEventListener('DOMContentLoaded',function(){
    anime({
        targets: '.ani',
        translateY: [200, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
    })

})