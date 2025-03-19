//DOM selectors
const recipeCards = document.getElementById("recipe-card")
const filterButton = document.querySelector (".filter-button")
const filterVegan = document.querySelector ("#filter-button-vegan")
const filterVeggi = document.querySelector ("#filter-button-vegetarian")
const filterGluten = document.querySelector ("#filter-button-gluten-free")
const filterDairy = document.querySelector ("#filter-button-dairy-free")
const filterAll = document.querySelector ("#filter-button-all")
const randomRecipe = document.querySelector("#random-button")
const sortAscending = document.querySelector ("#sort-button-ascending")
const sortDescending = document.querySelector ("#sort-button-descending")
const recipeAPI = document.getElementById("recipe-cards-API")

let fetchedRecipes = []
let recipecontent = []

//Fetches recipes from the API
const fetchData = async () => {
  try{
    const response = await fetch("https://api.spoonacular.com/recipes/random?number=50&apiKey=9d61b3a0389f408487f429835c7333f9")

    if (response.status === 402){
      console.warn("Sorry your daily quota limit was reached!")     
      alert("Sorry your daily quota limit was reached!")
      return
    } else if (!response.ok) {
      throw new Error(`Status ${response.status}`)
    } 

    const data = await response.json()
    
    fetchedRecipes = data.recipes //Store recipes globally   
   
    recipeAPI.innerHTML = "" //resets the container before we load recipes  
   
    data.recipes.forEach((recipe) => {  
      // Convert array to a string of list items ingredients
      const ingredientsList = recipe.extendedIngredients
        .map((ingredient) => `<li>${ingredient.original}</li>`)
        .join("")  
      //Display the recipe in the card      
      recipeAPI.innerHTML += `
      <div class="recipe-card-img-content-common">
        <img 
        src="${recipe.image}" 
        alt="${recipe.title}" 
        class="recipe-card-image"> 
        <div class="recipe-card-content">                
          <h2>${recipe.title}</h2> 
          <div class="recipe-cards-common">
            <p><strong>Cuisine:</strong> ${recipe.cuisines.join(", ") || "Unknown"}</p>
            <p><strong>Diets:</strong> ${recipe.diets.join(", ") || "Unknown"}</p>
            <p><strong>Time:</strong> ${recipe.readyInMinutes} minutes</p>
          </div>  
          <p><strong>Ingredients:</strong></p>
          <ul class="recipe-card-content">
            ${ingredientsList} <!-- Displaying ingredients as list items -->
          </ul>  
          </div>
      </div>
          `
        })
    
        
  } catch (error) {
    alert("Oh no, something went wrong!\nThere was an error, please try again later \n" + error)    
    console.error("Error fetching data:", error)
  } 
} 

//Get one random recipe
 randomRecipe.addEventListener("click", () => {   

   if (fetchedRecipes.length > 0) {
    const randomIndex = Math.floor(Math.random() * fetchedRecipes.length)
    const selectedRecipe = fetchedRecipes[randomIndex]

    // Convert array to a string of list items ingredients
    const ingredientsList = selectedRecipe.extendedIngredients
      .map((ingredient) => `<li>${ingredient.original}</li>`)
      .join("")
    // Clear and display only the random recipe
    recipeAPI.innerHTML = `
    <div class="recipe-card-img-content-common">
      <img src="${selectedRecipe.image}" alt="${selectedRecipe.title}" class="recipe-card-image"> 
      <div class="recipe-card-content">                
        <h2>${selectedRecipe.title}</h2> 
        <div class="recipe-cards-common">  
          <p><strong>Cuisine:</strong> ${selectedRecipe.cuisines.join(", ") || "Unknown"}</p>      
          <p><strong>Diets:</strong> ${selectedRecipe.diets.join(", ") || "Unknown"}</p>
          <p><strong>Time:</strong> ${selectedRecipe.readyInMinutes} minutes</p>
        </div>  
        <p><strong>Ingredients:</strong></p>
        <ul class="recipe-card-content">${ingredientsList}</ul>  
      </div>
    </div>`
  } else {
    console.warn("No recipes available! Fetching new recipes...")
    fetchData() // Fetch recipes if none are available
  }
})

// Function to display recipes
const displayRecipes = (recipes) => {
    recipeAPI.innerHTML = "" // Clear previous content
    recipes.forEach((recipe) => {
        const ingredientsList = recipe.extendedIngredients
            .map((ingredient) => `<li>${ingredient.original}</li>`)
            .join("")

        recipeAPI.innerHTML += `
        <div class="recipe-card-img-content-common">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-card-image"> 
            <div class="recipe-card-content">                
                <h2>${recipe.title}</h2> 
                <div class="recipe-cards-common">        
                    <p><strong>Cuisine:</strong> ${recipe.cuisines.join(", ") || "Unknown"}</p>
                    <p><strong>Diets:</strong> ${recipe.diets.join(", ") || "Unknown"}</p>
                    <p><strong>Time:</strong> ${recipe.readyInMinutes} minutes</p>
                </div>  
                <p><strong>Ingredients:</strong></p>
                <ul class="recipe-card-content">${ingredientsList}</ul>  
            </div>
        </div>`
    })
}

//Filter click event listener
document.querySelectorAll(".filter-button").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault()
    document.querySelectorAll(".filter-button").forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.classList.remove("active") // Remove active state on other buttons
      }
    })

    btn.classList.toggle("active") // Exchange active state on clicked button
  })
})

//Event Listeners for Filtering
filterAll.addEventListener("click", () => {
  const allRecipes = fetchedRecipes.filter(recipe => recipe)
  displayRecipes(fetchedRecipes)
})

filterVegan.addEventListener("click", () => {
  const veganRecipes = fetchedRecipes.filter(recipe => recipe.vegan)
  if (veganRecipes.length === 0){
    // Handle case where no recipes match
    displayNoResultsMessage.innerHTML ="Sorry, there are no vegan recipes"
  } else {
    displayRecipes(veganRecipes)
  }      
})

filterVeggi.addEventListener("click", () => {
  const vegRecipes = fetchedRecipes.filter(recipe => recipe.vegetarian)
  if (vegRecipes.length === 0){
    // Handle case where no recipes match
    displayNoResultsMessage.innerHTML ="Sorry,there are no vegetarian recipes"
  } else {
    displayRecipes(vegRecipes)
  }      
})

filterGluten.addEventListener("click", () => {
  const glutenFreeRecipes = fetchedRecipes.filter(recipe => recipe.glutenFree)
  if (glutenFreeRecipes.length === 0){
    displayNoResultsMessage.innerHTML ="Sorry,there are no gluten free recipes"
  } else {
    displayRecipes(glutenFreeRecipes)
  }
})

filterDairy.addEventListener("click", () => {
  const dairyFreeRecipes = fetchedRecipes.filter(recipe => recipe.dairyFree)
  if (dairyFreeRecipes.length === 0) {
    // Handle case where no recipes match
    displayNoResultsMessage.innerHTML ="Sorry,there are no dairy free recipes"
  } else {
    displayRecipes(dairyFreeRecipes)
  }
})

//Event listeners for sorting
sortAscending.addEventListener("change", () => {
  fetchedRecipes.sort((a, b) => a.spoonacularScore - b.spoonacularScore) 
  displayRecipes(fetchedRecipes)  
})
sortDescending.addEventListener("change", () => {
  fetchedRecipes.sort((a, b) => b.spoonacularScore - a.spoonacularScore)      
  displayRecipes(fetchedRecipes) 
})

fetchData()
