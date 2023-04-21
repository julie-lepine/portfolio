// MENU SLIDER
const menuHamburger = document.querySelector('.menuBtn');
const navLinks = document.querySelector('.navLinks');

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');    
});

/* changer la classe active quand on clique sur un lien du menu */