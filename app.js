const app_id = "b2b6c352";
const app_key = "cdb77ef4be3acd240885cf5d0ed26be8";
var button = document.querySelector("button");
console.log(button);

const get_recipe = async () => {
  var input = document.querySelector("input");

  console.log(input);
  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${input.value}&app_id=${app_id}&app_key=${app_key}`
  );
  var data = await response.json();

  
  console.log(data);
  //   data = data.hits;
  var cards = document.querySelector(".Cards-section");
  cards.innerHTML = "";
  for (let i = 0; i < data.hits.length; i++) {
    cards.innerHTML += `
  <div class="card">
  <div class="card__body">
    <img
      src="${data.hits[i].recipe.image}"
      alt=""
      class="card__image"
    />
    <h2 class="card__title">${data.hits[i].recipe.label}</h2>
    <p class="card__description">
      Savor a delectable blend of flavors that balance savory and sweet notes, providing a satisfying experience whether as a meal or a quick snack.
    </p>
  </div>
  <a href="${data.hits[i].recipe.url}" class="card__btn">View Recipe</a>
</div>

  `;
  }
};

button.addEventListener("click", get_recipe);