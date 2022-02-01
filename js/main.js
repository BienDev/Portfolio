const navbar = document.querySelector('.nav');
const background = document.querySelector('.motion-background');

window.addEventListener('load', function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1.4
  });
  
  scroll.on('call', (args) => { adjustFunction(args)});
  
  function adjustFunction(args) {
    if (args == 'light') {
      navbar.classList.remove('nav-active');
      background.classList.remove('motion-background-opacity');
    } else if (args == 'dark') {
      navbar.classList.add('nav-active');
      background.classList.add('motion-background-opacity');
    }
  }
})