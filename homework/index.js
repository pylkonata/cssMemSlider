const form = document.querySelector('.form');
const start = form.querySelector('.start-btn');
const btnBig = form.querySelector('.big-btn');
const btnBestResult = form.querySelector('.best-result');
const btnBestAll = form.querySelector('.best-all');
const btnClearBR = form.querySelector('.clear-br');
const btnClearAll = form.querySelector('.clear-all');

let delayTimer = 5000;
let count;
let bestResult = 0;
let bestAll={};

function showCountResult() {
  alert(`You clicked ${count} times`);
}

function showBestResult() {
  if (sessionStorage.getItem('bestResult')) {
    bestResult = sessionStorage.getItem('bestResult');    
  }
  alert(`Best result is: ${bestResult}`);
}
function showAllBestResult() {
  if (localStorage.getItem('bestAll')) {
    bestAll = JSON.parse(localStorage.getItem('bestAll'));
  } else {
    bestAll.user = null;
    bestAll.bestResult = 0;
  }
  alert(`Best result for the whole time is: ${bestAll.bestResult} by ${bestAll.user}`);
}
function showClearBR() {
  bestResult = 0;
  sessionStorage.setItem('bestResult', bestResult);
  alert('Best Result was cleared and set to 0');
}
function showClearAllBR() {
  bestAll.user = null;
  bestAll.bestResult = 0;
  localStorage.setItem('bestAll', JSON.stringify(bestAll));
  alert('Best result for the whole time was cleared and set to 0');
}
const countFunc = function (event) {
  if (event) {
    count++;
  }
  setBRToStorage();
};

function setBRToStorage() {
  let temp;
  if (sessionStorage.getItem('bestResult')) {
    bestResult = sessionStorage.getItem('bestResult');
  }  
  if (count > bestResult) {
    const inputValue = document.querySelector('.form-input').value;
    bestResult = count;
    bestAll.user = inputValue;
    bestAll.bestResult = bestResult;
    sessionStorage.setItem('bestResult', bestResult);

    if (localStorage.getItem('bestAll')) {
      temp = JSON.parse(localStorage.getItem('bestAll'));
      if (temp.bestResult >= bestAll.bestResult) {
        bestAll.user = temp.user;
        bestAll.bestResult = temp.bestResult;
      }
    }
    localStorage.setItem('bestAll', JSON.stringify(bestAll));
  }  
}
start.addEventListener('click', () => {
  count = 0;
  const inputValue = document.querySelector('.form-input').value;
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
btnClearBR.addEventListener('click', showClearBR);
btnClearAll.addEventListener('click', showClearAllBR);
