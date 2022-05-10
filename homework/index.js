const form = document.querySelector('.form');
const start = form.querySelector('.start-btn');
const btnBig = form.querySelector('.big-btn');
const btnBestResult = form.querySelector('.best-result');
const btnBestAll = form.querySelector('.best-all');
const btnClearBR = form.querySelector('.clear-br');
const btnClearAll = form.querySelector('.clear-all');

let delayTimer = 5000;
let count = 0;
let bestResult;
let bestAll = {};

function showCountResult() {
  alert(`You clicked ${count} times`);
}

function showBestResult() {
  bestResult = localStorage.getItem('bestResult');
  alert(`Best result is: ${bestResult}`);
}
function showAllBestResult() {
  bestAll = JSON.parse(localStorage.getItem('bestAll'));
  alert(`Best result for the whole time is: ${bestAll.bestResult} by ${bestAll.user}`);
}
const countFunc = function (event) {
  if (event) {
    count++;
  }
  console.log(count);
  setBRToLocalStorage();
};
function setBRToLocalStorage() {
  bestResult = localStorage.getItem('bestResult');
  if (count > bestResult) {
    const inputValue = document.querySelector('.form-input').value;
    bestResult = count;
    bestAll.user = inputValue;
    bestAll.bestResult = bestResult;
    localStorage.setItem('bestResult', bestResult);
    localStorage.setItem('bestAll', JSON.stringify(bestAll));
  }
}

// window.addEventListener('storage', console.log('localStorage update'));

start.addEventListener('click', () => {
  count = 0;
  const inputValue = document.querySelector('.form-input').value;
  console.log(inputValue);
  try {
    if (!/\w+/gi.test(inputValue)) {
      throw new Error('Empty nickname');
    }
  } catch (error) {
    alert('Empty nickname');
  }
  setTimeout(() => {
    showCountResult();
    btnBig.removeEventListener('click', countFunc);
  }, delayTimer);
 
  btnBig.addEventListener('click', countFunc);

});


btnBestResult.addEventListener('click', showBestResult);
btnBestAll.addEventListener('click', showAllBestResult);
