//querySelectorAll ist för getElementById
//You can have multiple id´s, classes!!

const filterAll = document.getElementById("filter-button-all")
const filterVegan = document.getElementById("filter-button-vegan")
const filterVeg = document.getElementById("filter-button-vegetarian")
const filterGluten = document.getElementById("filter-button-gluten-free")
const filterDairy = document.getElementById("filter-button-dairy-free")

const sortbuttons = document.getElementById("sort-section")
const sortButtonA = document.getElementById("sort-button-ascending")
const sortButtonD = document.getElementById("sort-button-descending")
//const message = document.getElementById("filter-sort-message")


//What´s the differens between these 2?
// document.getElementById('filter-section').addEventListener('click', function(event) {
//   if (event.target.classList.contains('filter-button')) {
//       event.target.classList.toggle('filter-button-select');
//   } 
//   console.log("hej min apelsiner") 
// });

//Change click ti change
//Filter
filterAll.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("filterAll button was clicked")
  filterAll.classList.toggle("filter-button-select")
  //message.innerHTML += `<p>All recipies are displayed.</p>` 
})

filterVegan.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("filterVegan button was clicked")
  filterVegan.classList.toggle("filter-button-select")
  //message.innerHTML += `<p>Vegan recipies are displayed.</p>` 
})

filterVeg.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("filterVeg button was clicked")
  filterVeg.classList.toggle("filter-button-select")
  //message.innerHTML += `<p>Vegetarian recipies are displayed.</p>` 
})

filterGluten.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("filterGluten button was clicked")
  filterGluten.classList.toggle("filter-button-select")  
  //message.innerHTML += `<p>Gluten-free recipies are displayed.</p>` 
})

filterDairy.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("FilterDairy button was clicked")
  filterDairy.classList.toggle("filter-button-select")
  //message.innerHTML += `<p>Dairy-free recipies are displayed.</p>` 
})

//


//Some way to bundle these two?
//Sort

sortButtonA.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("sortButtonA button was clicked")
  sortButtonA.classList.toggle("sort-buttons-select")
  //message.innerHTML += `<p>Most popular first</p>`
  
})

sortButtonD.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("sortButtonD button was clicked")
  sortButtonD.classList.toggle("sort-buttons-select")
  //message.innerHTML += `<p>Not so popular first</p>`
})
    
//

// An array of mockup recipes week 6
const recipes = [
  {
    id: 1,
    title: "Vegan Lentil Soup",
    image: "./chicken.webp",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "red lentils",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "cumin",
      "paprika",
      "vegetable broth",
      "olive oil",
      "salt"
    ],
    pricePerServing: 2.5,
    popularity: 85
  },
  {
    id: 2,
    title: "Vegetarian Pesto Pasta",
    image: "./chicken.webp",
    readyInMinutes: 25,
    servings: 2,
    sourceUrl: "https://example.com/vegetarian-pesto-pasta",
    diets: ["vegetarian"],
    cuisine: "Italian",
    ingredients: [
      "pasta",
      "basil",
      "parmesan cheese",
      "garlic",
      "pine nuts",
      "olive oil",
      "salt",
      "black pepper"
    ],
    pricePerServing: 3.0,
    popularity: 92
  },
  {
    id: 3,
    title: "Gluten-Free Chicken Stir-Fry",
    image: "./chicken.webp",
    readyInMinutes: 20,
    servings: 3,
    sourceUrl: "https://example.com/gluten-free-chicken-stir-fry",
    diets: ["gluten-free"],
    cuisine: "Asian",
    ingredients: [
      "chicken breast",
      "broccoli",
      "bell pepper",
      "carrot",
      "soy sauce (gluten-free)",
      "ginger",
      "garlic",
      "sesame oil",
      "cornstarch",
      "green onion",
      "sesame seeds",
      "rice"
    ],
    pricePerServing: 4.0,
    popularity: 78
  },
  {
    id: 4,
    title: "Dairy-Free Tacos",
    image: "./chicken.webp",
    readyInMinutes: 15,
    servings: 2,
    sourceUrl: "https://example.com/dairy-free-tacos",
    diets: ["dairy-free"],
    cuisine: "Mexican",
    ingredients: [
      "corn tortillas",
      "ground beef",
      "taco seasoning",
      "lettuce",
      "tomato",
      "avocado"
    ],
    pricePerServing: 2.8,
    popularity: 88
  },
  {
    id: 5,
    title: "Middle Eastern Hummus",
    image: "./chicken.webp",
    readyInMinutes: 10,
    servings: 4,
    sourceUrl: "https://example.com/middle-eastern-hummus",
    diets: ["vegan", "gluten-free"],
    cuisine: "Middle Eastern",
    ingredients: [
      "chickpeas",
      "tahini",
      "garlic",
      "lemon juice",
      "olive oil"
    ],
    pricePerServing: 1.5,
    popularity: 95
  },
  {
    id: 6,
    title: "Quick Avocado Toast",
    image: "./chicken.webp",
    readyInMinutes: 5,
    servings: 1,
    sourceUrl: "https://example.com/quick-avocado-toast",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "bread",
      "avocado",
      "lemon juice",
      "salt"
    ],
    pricePerServing: 2.0,
    popularity: 90
  },
  {
    id: 7,
    title: "Beef Stew",
    image: "./chicken.webp",
    readyInMinutes: 90,
    servings: 5,
    sourceUrl: "https://example.com/beef-stew",
    diets: [],
    cuisine: "European",
    ingredients: [
      "beef chunks",
      "potatoes",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "beef broth",
      "red wine",
      "bay leaves",
      "thyme",
      "salt",
      "black pepper",
      "butter",
      "flour",
      "celery",
      "mushrooms"
    ],
    pricePerServing: 5.5,
    popularity: 80
  }
]

const recipeCards = document.querySelectorAll(".recipe-card"); // Selects all `.recipe-card` elements

 recipes.forEach((recipe, index) => {
   if (recipeCards[index]) { // Ensure there is a `.recipe-card` for this recipe
     recipeCards[index].innerHTML = `
       <div>
         <img src="${recipe.image}" alt="${recipe.title}">
         <h3>${recipe.title}</h3>
          <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
         <p><strong>Time:</strong> ${recipe.readyInMinutes} minutes</p>
       <p><strong>Ingredients:</strong><br> ${recipe.ingredients.join("<br>")}</p>
       </div>`;
   }
 });


