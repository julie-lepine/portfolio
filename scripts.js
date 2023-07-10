// MENU SLIDER
const menuHamburger = document.querySelector('.menuBtn');
const navLinks = document.querySelector('.navLinks');

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobileMenuShow');    
});

// scroll transition
const ratio = 0.1

var options = {
    root: null,
    rootMargin : '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r) {
    observer.observe(r);
})