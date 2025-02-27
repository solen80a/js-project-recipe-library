//querySelectorAll ist för getElementById

console.log("hej hej") 
const filterAll = document.getElementById("filter-button-all")
const filterVegan = document.getElementById("filter-button-vegan")
const filterVeg = document.getElementById("filter-button-vegetarian")
const filterGluten = document.getElementById("filter-button-gluten-free")
const filterDairy = document.getElementById("filter-button-dairy-free")

const sortbuttons = document.getElementById("sort-section-buttons")
const sortButtonA = document.getElementById("sort-button-ascending")
const sortButtonD = document.getElementById("sort-button-descending")
const message = document.getElementById("filter-sort-message")


//What´s the differens between these 2?
// document.getElementById('filter-section').addEventListener('click', function(event) {
//   if (event.target.classList.contains('filter-button')) {
//       event.target.classList.toggle('filter-button-select');
//   } 
//   console.log("hej min apelsiner") 
// });

//Filter
filterAll.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("filterAll button was clicked")
  filterAll.classList.toggle("filter-button-select")
  message.textContent += "All recipies are displayed."
})

filterVegan.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("filterVegan button was clicked")
  filterVegan.classList.toggle("filter-button-select")
  message.textContent += "Vegan recipies are displayed."  
})

filterVeg.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("filterVeg button was clicked")
  filterVeg.classList.toggle("filter-button-select")
  message.textContent += "Vegetarian recipies are displayed."  
})

filterGluten.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("filterGluten button was clicked")
  filterGluten.classList.toggle("filter-button-select")
  message.textContent += "Gluten-free recipies are displayed."  
})

filterDairy.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("FilterDairy button was clicked")
  filterDairy.classList.toggle("filter-button-select")
  message.textContent += "Dairy-free recipies are displayed."  
})

//


//Some way to bundle these two?
//Sort

sortButtonA.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("sortButtonA button was clicked")
  sortButtonA.classList.toggle("sort-buttons-select")
  message.innerHTML += `<p>Most popular first</p>`
  
})

sortButtonD.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("sortButtonD button was clicked")
  sortButtonD.classList.toggle("sort-buttons-select")
  message.innerHTML += `<p>Not so popular first</p>`
})

message()
    
//  








