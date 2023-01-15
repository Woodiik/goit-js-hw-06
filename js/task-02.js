const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.map( ingredient => {
   const createEl = document.createElement('li');
   createEl.textContent = ingredient;
   createEl.classList.add('item');
   document.querySelector('#ingredients').append(createEl);
})






