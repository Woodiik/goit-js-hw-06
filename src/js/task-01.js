const itemsEl = document.querySelector('#categories').children;
console.log("Number of categories:", itemsEl.length);

const categoryNameEl = document.querySelectorAll('.category-title');

const categoryElements = document.querySelectorAll('.item-list');


console.log('Category:', categoryNameEl[0].textContent);
console.log('Elements:', categoryElements[0].children.length);

console.log('Category:', categoryNameEl[1].textContent);
console.log('Elements:', categoryElements[1].children.length);

console.log('Category:', categoryNameEl[2].textContent);
console.log('Elements:', categoryElements[2].children.length);




