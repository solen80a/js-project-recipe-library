
// const recipes = [
//   {
//     id: 1,
//     title: "Vegan Lentil Soup",
//     image: "./Images/img.jpg",
//     readyInMinutes: 30,
//     servings: 4,
//     sourceUrl: "https://example.com/vegan-lentil-soup",
//     diets: ["vegan"],
//     cuisine: "Mediterranean",
//     ingredients: [
//       "red lentils",
//       "carrots",
//       "onion",
//       "garlic",
//       "tomato paste",
//       "cumin",
//       "paprika",
//       "vegetable broth",
//       "olive oil",
//       "salt"
//     ],
//     pricePerServing: 2.5,
//     popularity: 85
//   },
//   {
//     id: 2,
//     title: "Vegetarian Pesto Pasta",
//     image: "./Images/img.jpg",
//     readyInMinutes: 25,
//     servings: 2,
//     sourceUrl: "https://example.com/vegetarian-pesto-pasta",
//     diets: ["vegetarian"],
//     cuisine: "Italian",
//     ingredients: [
//       "pasta",
//       "basil",
//       "parmesan cheese",
//       "garlic",
//       "pine nuts",
//       "olive oil",
//       "salt",
//       "black pepper"
//     ],
//     pricePerServing: 3.0,
//     popularity: 92
//   },
//   {
//     id: 3,
//     title: "Gluten-Free Chicken Stir-Fry",
//     image: "./Images/img.jpg",
//     readyInMinutes: 20,
//     servings: 3,
//     sourceUrl: "https://example.com/gluten-free-chicken-stir-fry",
//     diets: ["gluten-free"],
//     cuisine: "Asian",
//     ingredients: [
//       "chicken breast",
//       "broccoli",
//       "bell pepper",
//       "carrot",
//       "soy sauce (gluten-free)",
//       "ginger",
//       "garlic",
//       "sesame oil",
//       "cornstarch",
//       "green onion",
//       "sesame seeds",
//       "rice"
//     ],
//     pricePerServing: 4.0,
//     popularity: 78
//   },
//   {
//     id: 4,
//     title: "Dairy-Free Tacos",
//     image: "./Images/img.jpg",
//     readyInMinutes: 15,
//     servings: 2,
//     sourceUrl: "https://example.com/dairy-free-tacos",
//     diets: ["dairy-free"],
//     cuisine: "Mexican",
//     ingredients: [
//       "corn tortillas",
//       "ground beef",
//       "taco seasoning",
//       "lettuce",
//       "tomato",
//       "avocado"
//     ],
//     pricePerServing: 2.8,
//     popularity: 88
//   },
//   {
//     id: 5,
//     title: "Middle Eastern Hummus",
//     image: "./Images/img.jpg",
//     readyInMinutes: 10,
//     servings: 4,
//     sourceUrl: "https://example.com/middle-eastern-hummus",
//     diets: ["vegan", "gluten-free"],
//     cuisine: "Middle Eastern",
//     ingredients: [
//       "chickpeas",
//       "tahini",
//       "garlic",
//       "lemon juice",
//       "olive oil"
//     ],
//     pricePerServing: 1.5,
//     popularity: 95
//   },
//   {
//     id: 6,
//     title: "Quick Avocado Toast",
//     image: "./Images/img.jpg",
//     readyInMinutes: 5,
//     servings: 1,
//     sourceUrl: "https://example.com/quick-avocado-toast",
//     diets: ["vegan"],
//     cuisine: "Mediterranean",
//     ingredients: [
//       "bread",
//       "avocado",
//       "lemon juice",
//       "salt"
//     ],
//     pricePerServing: 2.0,
//     popularity: 90
//   },
//   {
//     id: 7,
//     title: "Beef Stew",
//     image: "./Images/img.jpg",
//     readyInMinutes: 90,
//     servings: 5,
//     sourceUrl: "https://example.com/beef-stew",
//     diets: [],
//     cuisine: "European",
//     ingredients: [
//       "beef chunks",
//       "potatoes",
//       "carrots",
//       "onion",
//       "garlic",
//       "tomato paste",
//       "beef broth",
//       "red wine",
//       "bay leaves",
//       "thyme",
//       "salt",
//       "black pepper",
//       "butter",
//       "flour",
//       "celery",
//       "mushrooms"
//     ],
//     pricePerServing: 5.5,
//     popularity: 80
//   }
// ]

const recipeCards = document.getElementById("recipe-card")
const filterButton = document.querySelectorAll (".filter-button")
const filterVegan = document.querySelector ("#filter-button-vegan")
const filterVeggi = document.querySelector ("#filter-button-vegetarian")
const filterGluten = document.querySelector ("#filter-button-gluten-free")
const filterDairy = document.querySelector ("#filter-button-dairy-free")
const filterAll = document.querySelector ("#filter-button-all")
const filterDead = document.querySelector ("#filter-button-dead")
const randomRecipe = document.querySelector("#random-button")

//const URL = `https://api.spoonacular.com/recipes/random?number=1&apiKey=9d61b3a0389f408487f429835c7333f9`

//console.log(URL)

const recipeAPI = document.getElementById("recipe-cards-API")

fetch("https://api.spoonacular.com/recipes/random?number=10&apiKey=9d61b3a0389f408487f429835c7333f9")
  .then((response) => {
    return response.json()
  })
  .then((json) => {
   
    console.log(json)
    recipeAPI.innerHTML = "" //resets the container before we load recipes

     json.recipes.forEach((recipe) => {

      const ingredientsList = recipe.extendedIngredients
        .map((ingredient) => `<li>${ingredient.original}</li>`)
        .join(""); // Convert array to a string of list items


       recipeAPI.innerHTML += `<div class="recipe-card-img-content-common">
        <img 
          src="${recipe.image}" 
          alt="${recipe.title}" 
          class="recipe-card-image"> 
        <div class="recipe-card-content">                
          <h2>${recipe.title}</h2> 
        <div class="recipe-cards-common">        
          <p><strong>Cuisine:</strong> ${recipe.cuisines}</p>
          <p><strong>Time:</strong> ${recipe.readyInMinutes} minutes</p>
        </div>  
          <p><strong>Ingredients:</strong></p>
          <ul class="recipe-card-content">
              ${ingredientsList} <!-- Displaying ingredients as list items -->
            </ul>  
        </div>
      </div>
        `
     });
  })
  .catch((error) => console.error("Error fetching recipe:", error));

// const loadRecipes = (recipeArray) => {
//   recipeCards.innerHTML = "" //resets the container before we load recipes
//   recipeArray.forEach(recipe => {
//     recipeCards.innerHTML += 
//       `<div class="recipe-card-img-content-common">
//         <img 
//           src="${recipe.image}" 
//           alt="${recipe.title}" 
//           class="recipe-card-image"> 
//         <div class="recipe-card-content">                
//           <h2>${recipe.title}</h2> 
//         <div class="recipe-cards-common">        
//           <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
//           <p><strong>Time:</strong> ${recipe.readyInMinutes} minutes</p>
//         </div>  
//           <p><strong>Ingredients:</strong></p>            
//           <li class="recipe-card-content">${recipe.ingredients.join("<br>")}
//           </li>
//         </div>
//       </div>
//         `
//   })
// }

const filterRecipe = (dietsValue) => {  
  const filteredArray = recipes.filter(recipe => recipe.diets.includes(dietsValue))
  //console.log(`diets clicked recipies:`, filteredArray)
  //console.log(recipes)
  if (filteredArray.length === 0) {
    recipeCards.innerHTML = `<p>☠️ Sorry, no recipes found for this filter ☠️ </p>`;
  } else {
    loadRecipes(filteredArray);
  }
}

randomRecipe.addEventListener("click", () => {
  console.log("random button clicked")
  const randomArray = Math.floor(Math.random() * recipes.length)
  loadRecipes([recipes[randomArray]]);
}) 

//Make the ALL button work, don´t forget to create a const filterAll!
filterAll.addEventListener("click", (event) => {
   event.preventDefault()
   console.log("ALL filter button was clicked")
   event.target.classList.toggle("filter-button-select") 
   loadRecipes(recipes)      
})

filterVegan.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("Vegan filter button was clicked")
    event.target.classList.toggle("filter-button-select") 
    filterRecipe("vegan")    
})

filterVeggi.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("Vegetarian filter button was clicked")
  event.target.classList.toggle("filter-button-select") 
  filterRecipe("vegetarian")    
})

filterGluten.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("Gluten-free filter button was clicked")
  event.target.classList.toggle("filter-button-select") 
  filterRecipe("gluten-free")    
})

filterDairy.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("Dairy-free filter button was clicked")
  event.target.classList.toggle("filter-button-select") 
  filterRecipe("dairy-free")    
})

filterDead.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("This is a dead end")
  filterRecipe("dead")
})

//loadRecipes(recipes)

// const sortButton = document.querySelectorAll(".sort-button");

// sortButton.forEach((sortButton) => {
//   sortButton.addEventListener("change", (event) => {  // Use "change" instead of "click" for radio buttons
//     console.log("A sort button was selected");

//     // Remove class from all buttons first (so only one is active)
//     sortButton.forEach((btn) => btn.classList.remove(".sort-buttons-select"));

//     // Add class only to the selected radio button
//     event.target.classList.add("sort-buttons-select");
//   });
// });

// An array of mockup recipes week 6





 

 