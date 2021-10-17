'use strict';
// Shufle and reload pictures in slider
const pictureContainer = document.querySelector('.slider-picture-wrapper');

let picturesSrcArr = ["img_01.jpg", "img_02.jpg", "img_03.jpg", "img_04.jpg", "img_05.jpg", "img_06.jpg", "img_07.jpg", "img_08.jpg", "img_09.jpg", "img_10.jpg", "img_11.jpg", "img_12.jpg", "img_13.jpg", "img_14.jpg", "img_15.jpg", "img_16.jpg", "img_17.jpg", "img_18.jpg", "img_19.jpg", "img_20.jpg", "img_21.jpg", "img_22.jpg", "img_23.jpg", "img_24.jpg", "img_25.jpg", "img_26.jpg", "img_27.jpg", "img_28.jpg", "img_29.jpg", "img_30.jpg", "img_31.jpg", "img_32.jpg", "img_33.jpg", "img_34.jpg", "img_35.jpg", "img_36.jpg", "img_37.jpg", "img_38.jpg", "img_39.jpg", "img_40.jpg", "img_41.jpg", "img_42.jpg", "img_43.jpg", "img_44.jpg", "img_45.jpg", "img_46.jpg", "img_47.jpg", "img_48.jpg", "img_49.jpg", "img_50.jpg", "img_51.jpg", "img_52.jpg", "img_53.jpg", "img_54.jpg", "img_55.jpg", "img_56.jpg", "img_57.jpg", "img_58.jpg", "img_59.jpg", "img_60.jpg"];


function reloadPicture(array) {
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  pictureContainer.innerHTML = "";
  shuffle(picturesSrcArr);
  for (let p = 0; p < 5; p++) {
    if (p == 0) {
      pictureContainer.innerHTML = `
      <div class="slider-item active">
        <img src="img/${picturesSrcArr[p]}" alt="image ${p + 1}" class="slider-picture">
      </div>
      `;
    } else {
      pictureContainer.innerHTML += `
      <div class="slider-item">
        <img src="img/${picturesSrcArr[p]}" alt="image ${p + 1}" class="slider-picture">
      </div>
      `;
    }
    
  }  
}
reloadPicture(picturesSrcArr);
// Show Active slides
const slides = pictureContainer.querySelectorAll('.slider-item'),
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

//Get new Images-  reload page

const btn = document.getElementById('button');
btn.addEventListener('click', () => {
  document.location.reload();
});
