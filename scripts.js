// alert('Bonjour, ce portfolio est optimisé pour les appareils mobiles. \nRevenez bientôt pour la version pc !')

// MENU SLIDER
const menuHamburger = document.querySelector('.menuBtn');
const navLinks = document.querySelector('.navLinks');

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');    
});

