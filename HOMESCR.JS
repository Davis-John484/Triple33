const navToggle=document.querySelector('.nav-toggle');
const mainNav=document.querySelector('.main-nav');
navToggle.addEventListener('click', () => {
    const isVisible=mainNav.classList.contains('visible');
    mainNav.classList.toggle('visible');

    navToggle.setAttribute('aria-expanded',!isVisible);

})