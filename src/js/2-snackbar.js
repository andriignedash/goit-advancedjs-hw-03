import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delayInput = form.elements.delay.value;
  const stateInput = form.elements.state.value;

  const delay = Number(delayInput);

  createPromise(delay, stateInput)
    .then(message => {
      iziToast.success({
        title: 'Success',
        message: message,
      });
    })
    .catch(message => {
      iziToast.error({
        title: 'Error',
        message: message,
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}
