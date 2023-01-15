let counterValue = 0;
console.log(counterValue);

const valueEl = document.querySelector('#value');

const decrementButtonEl = document.querySelector('button[data-action="decrement"]');
const incrementButtonEl = document.querySelector('button[data-action="increment"]');


decrementButtonEl.addEventListener('click', count => {
   counterValue -= 1;
   valueEl.textContent = counterValue;
});


incrementButtonEl.addEventListener('click', count => {
   counterValue += 1;
   valueEl.textContent = counterValue;
});



