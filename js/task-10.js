//!======================= Doesn't work, якщо можна то підкажіть як зробити 


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');

const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');

const BoxesEl = document.querySelector('#boxes');



const createBoxes = function (amount) {
   const markup = [];
   let size = 30;
   for (let i = 0; i < amount; i += 1){
      const el = `<div 
      style = "background-color: ${getRandomHexColor}"
      width = "${size}"
      heigth = "${size}"
      ></div>`
      markup.push(el)
      size += 10
   }
   return markup.join('');
}


const updatePage = function (markup) {
   BoxesEl.innerHTML = markup;
   //console.log(BoxesEl.innerHTML = markup)
}

buttonCreate.addEventListener('click', event => {

   const markup = createBoxes(inputEl.value);
   updatePage(markup);
   console.log(updatePage(createBoxes(1)))
})

buttonDestroy.addEventListener('click', event => {
   updatePage('');
})

