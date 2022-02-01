const mediaQuery = window.matchMedia('(max-width: 768px)');
const maxMediaQuery = window.matchMedia('(min-width: 769px)');

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    let div = document.getElementsByClassName('portfolio-section-left');

    let afterDiv = document.getElementsByClassName('portfolio-section-right');
  
    div[1].after(afterDiv[1]);
    div[3].after(afterDiv[3]);
    div[5].after(afterDiv[5]);
  };
};

function handleComputerChange(e) {
  // Check if the media query is true
  if (e.matches) {
    let div = document.getElementsByClassName('portfolio-section-left');

    let afterDiv = document.getElementsByClassName('portfolio-section-right');
  
    afterDiv[1].after(div[1]);
    afterDiv[3].after(div[3]);
    afterDiv[5].after(div[5]);
  };
};



  // Register event listener
  mediaQuery.addListener(handleTabletChange);

  maxMediaQuery.addListener(handleComputerChange);

  // Initial check
  handleTabletChange(mediaQuery);

  handleComputerChange(maxMediaQuery);


const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function() {
  //Current index of word
  const current = this.wordIndex % this.words.length;
  //Get full text of current word
  const fullTxt = this.words[current];

  if(this.isDeleting) {
    //Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    //Add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  //Insert txt into Element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

  //Type Speed
  let typeSpeed = 300;
  
  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  // If word is complete
  if(!this.isDeleting && this.txt === fullTxt) {
    //Make pause at end
    typeSpeed = this.wait;
    //Set Delete to true
    this.isDeleting = true;
  } else if(this.isDeleting && this.txt === ''){
    this.isDeleting = false;
    // Move to the next word
    this.wordIndex++;
    // Pause  before start typing
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed)
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  new TypeWriter(txtElement, words, wait);
}

