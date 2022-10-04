const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;


startBtn.addEventListener('click', onBtnClickStart);
stopBtn.addEventListener('click', onBtnClickStop)


function getRandomHexColor() {

     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;   
    
  
}

function onBtnClickStart(e) {
 
  timerId = setInterval(() => {
  const colorRandom = getRandomHexColor();
    document.body.style.backgroundColor = colorRandom;
    console.log(colorRandom);
  }, 1000);
  if (startBtn.disabled = true) {
    console.log(stopBtn.disabled = false)
  }
    }

function onBtnClickStop(e) {
  clearInterval(timerId);
  //startBtn.disabled = false;
  if(stopBtn.disabled = true) {
  console.log(startBtn.disabled = false)
}
    }