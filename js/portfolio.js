var currentURL = window.location.href;
let params = (new URL(currentURL)).searchParams;
var highlight = params.get('hl')

const convert = {webdev:"Web Development", webopt:"Website Optimization", emaildev:"Email Development", uiux:"UI/UX Design", respo:"Responsive Design", design:"Design Conversion", webauto:"Web Automation", emailauto:"Email Automation", searchopti:"Search Optimization"};

let converted = convert[highlight];


var subtitleContainer = document.getElementsByClassName('portfolio-subtitle');

for (let i = 0; i < subtitleContainer.length; i++) {
  let child = subtitleContainer[i].children;
  for (let i = 0; i < child.length; i++) {
    let childCheck = child[i].textContent;
    if (converted == childCheck) {
      child[i].classList.add('background-white');
    }
  }
}