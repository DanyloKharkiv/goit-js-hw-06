const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector('#ingredients');

const liEl = ingredients.map(ingredients => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredients;
  return li;
  console.log(li);
})


listEl.append(...liEl);