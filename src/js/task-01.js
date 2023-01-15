const itemsEl = document.querySelector('#categories').children;
console.log("Number of categories:", itemsEl.length);

[...itemsEl].map(item => {
   console.log(`Category: ${item.firstElementChild.textContent}`)
   console.log(`Elements: ${item.lastElementChild.children.length}`)
})









