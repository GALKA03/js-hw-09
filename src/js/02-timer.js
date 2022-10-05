import "flatpickr/dist/flatpickr.min.css";
const flatpickr = require("flatpickr")
import flatpickr from "flatpickr";

 flatpickr('input[type="text"]', {
 enableTime: true,//включает выбор времени
  time_24hr: true,//время в 24 часа
  defaultDate: new Date(),//Устанавливает начальную выбранную дату
  minuteIncrement: 1, //Регулирует шаг ввода минут (включая прокрутку)
     onClose(selectedDates) {
       console.log(selectedDates[0]);//выбранные даты
      if (selectedDates[0] < Date.now() ) {
        window.alert('Please choose a date in the future')
       refs.btnStart.disabled = true;
      }
      else if (selectedDates[0] >= Date.now()) {
        refs.btnStart.disabled = false;
      }



//     selectedDates.map((element) => {
//       if (element < Date.now() ) {
//         window.alert('Please choose a date in the future')
//        refs.btnStart.disabled = true;
//       }
//       else if (element >= Date.now()) {
//         refs.btnStart.disabled = false;
//       }
// })
  },
 });

const refs = {
  input: document.querySelector('input'),
  btnStart: document.querySelector('[data-start]'),
  daysTimer: document.querySelector('[data-days]'),
  hoursTimer: document.querySelector('[data-hours]'),
  minutesTimer: document.querySelector('[data-minutes]'),
  secondsTimer: document.querySelector('[data-seconds]')
}
 refs.btnStart.addEventListener('click', onBtnClickStart);
refs.input.addEventListener('input',updateTimer )
//targetDate;
function updateTimer() {
  
  // 
}

 function onBtnClickStart(e) {
    const timerID = setInterval(() => {
    console.log(timerID)
    const currentTime = Date.now();
      const delta = selectedDates[0] - currentTime;
      console.log(delta)
      const { days, hours, minutes, seconds } = convertMs(delta);
      console.log(days, hours, minutes, seconds);
      refs.daysTimer.textContent = days;
      refs.hoursTimer.textContent = hours;
      refs.minutesTimer.textContent = minutes;
      refs.secondsTimer.textContent = seconds;
  },1000
  )
   
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

