import Notiflix from 'notiflix';

const form = document.querySelector('.form')

form.addEventListener('submit',onSubmitForm);

 function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const objectPromise = { position, delay };

    if (shouldResolve) {
      resolve(objectPromise)// Fulfill
    } else {
      reject(objectPromise)// Reject
    }
  })
  }

function onSubmitForm(e) {
  e.preventDefault();
  let delay = e.target.delay.value;
  let amount = e.target.amount.value;
  let step = e.target.step.value;

  for (let position = 1; position <= amount; position += 1) {
    
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
       
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
        }, delay)

      });
  
    delay += step;
    
  }
 form.reset()
 
  }
