const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = ingredients.map( ingredient => {
   const createEl = document.createElement('li');
   createEl.textContent = ingredient;
   createEl.classList.add('item');
   return createEl;
})
   document.querySelector('#ingredients').append(...ingredientsList);





