import "flatpickr/dist/flatpickr.min.css";
const flatpickr = require("flatpickr")
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
let selectedTime = null;

const refs = {
  input: document.querySelector('input'),
  btnStart: document.querySelector('[data-start]'),
  daysTimer: document.querySelector('[data-days]'),
  hoursTimer: document.querySelector('[data-hours]'),
  minutesTimer: document.querySelector('[data-minutes]'),
  secondsTimer: document.querySelector('[data-seconds]')
}
refs.btnStart.addEventListener('click', onBtnClickStart);
refs.input.addEventListener('input', calendarStart)
refs.btnStart.setAttribute('disabled', true);

 flatpickr(refs.input, {
 enableTime: true,//включает выбор времени
  time_24hr: true,//время в 24 часа
  defaultDate: new Date(),//Устанавливает начальную выбранную дату
  minuteIncrement: 1, //Регулирует шаг ввода минут (включая прокрутку)
     onClose(selectedDates) {
       console.log(selectedDates[0]);//выбранные даты
      if (selectedDates[0] < Date.now() ) {
        //window.alert('Please choose a date in the future')
       Notiflix.Notify.failure('Please choose a date in the future');
        refs.btnStart.disabled = true
        selectedDates[0] = new Date();
      }
      else if (selectedDates[0] >= Date.now()) {
        refs.btnStart.disabled = false;
 selectedTime = selectedDates[0]
      }
  },
 });
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

function onBtnClickStart() {
 
  const timerID = setInterval(() => {
    const currentTime = Date.now();
    const delta = selectedTime - currentTime;
    const calculateDate = convertMs(delta)
    onAllParams(calculateDate) 
    if(calculateDate <= 0){
   clearInterval(timerID)
    }  

  },1000
  )   
}
function calendarStart() {
   if (!selectedTime) {
       refs.btnStart.setAttribute('disabled', true)
  }
   else {
      refs.btnStart.removeAttribute('disabled');
  }
 }

function onAllParams({ days, hours, minutes, seconds }) {
  refs.daysTimer.textContent = String(days).padStart(2, '0');
  refs.hoursTimer.textContent = String(hours).padStart(2, '0');
  refs.minutesTimer.textContent = String(minutes).padStart(2, '0');
  refs.secondsTimer.textContent = String(seconds).padStart(2, '0');
  
}



