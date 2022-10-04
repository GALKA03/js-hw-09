const startBtn = document.querySelector('[data-start]');
console.log(startBtn)
const stopBtn = document.querySelector('[data-stop]')
console.log(stopBtn)
let timerId = null;


startBtn.addEventListener('click', onBtnClickStart);
stopBtn.addEventListener('click', onBtnClickStop)


function getRandomHexColor() {

     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;   
    
  
}

function onBtnClickStart() {
    const colorRandom = getRandomHexColor();
    document.body.style.backgroundColor = colorRandom;
  timerId = setInterval(() => {
    console.log();
  }, 1000);

    }

function onBtnClickStop() {
clearInterval(timerId);
  console.log(timerId);
    }