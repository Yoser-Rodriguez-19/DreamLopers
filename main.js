
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
    // el toggle es para que cada ves que se haga click, si tiene la clase se quita y si no la tiene se agregar
})


ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 300});
ScrollReveal().reveal('.cards-banner-one', {delay: 300});
ScrollReveal().reveal('.cards-banner-two', {delay: 300});
ScrollReveal().reveal('.social', {delay: 300});
ScrollReveal().reveal('.footer-links', {delay: 300});
