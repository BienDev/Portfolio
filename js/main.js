const navbar = document.querySelector('.nav');
const background = document.querySelector('.motion-background');

AOS.init();

window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }

    if (window.scrollY > 600) {
        background.classList.add('motion-background-opacity');
    } else {
        background.classList.remove('motion-background-opacity');
    }
};