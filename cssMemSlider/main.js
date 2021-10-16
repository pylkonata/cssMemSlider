'use strict';
window.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slider-item'),
    		squares = document.querySelectorAll('.square'),
    		squaresWrap = document.querySelectorAll('.square-wrap'),
    		textInspire = document.querySelectorAll('.text-inspire');
          
  let index = 0;

  const activeSlide = s => {
    
    for (let slide of slides) {
      slide.classList.remove('active');
    }
    slides[s].classList.add('active');
  };

  const activeSquares = s => {
    for (let square of squares) {
      square.classList.remove('active');
    }
    squares[s].classList.add('active');
  };
  const activeTextInspire  = s => {
    for (let text of textInspire) {
      text.classList.remove('active');
    }
    textInspire[s].classList.add('active');
  };

  const outputCurrentSlide = (n) => {
    activeSlide(n);
		activeSquares(n);
		activeTextInspire(n);
  };
 
  squaresWrap.forEach((item, indexSq) => {
    item.addEventListener('click', () => {
      index = indexSq;
      outputCurrentSlide(index);
    });
  });
});