//querySelectorAll ist för getElementById

console.log("hej hej") 
const filterAll = document.getElementById("filter-button-all")
const filterVegan = document.getElementById("filter-button-vegan")
const filterVeg = document.getElementById("filter-button-vegetarian")
const filterGluten = document.getElementById("filter-button-gluten-free")
const filterDairy = document.getElementById("filter-button-dairy-free")

const sortbuttons = document.getElementById("sort-section")
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
  message.innerHTML += `<p>All recipies are displayed.</p>` 
})

filterVegan.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("filterVegan button was clicked")
  filterVegan.classList.toggle("filter-button-select")
  message.innerHTML += `<p>Vegan recipies are displayed.</p>` 
})

filterVeg.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("filterVeg button was clicked")
  filterVeg.classList.toggle("filter-button-select")
  message.innerHTML += `<p>Vegetarian recipies are displayed.</p>` 
})

filterGluten.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("filterGluten button was clicked")
  filterGluten.classList.toggle("filter-button-select")  
  message.innerHTML += `<p>Gluten-free recipies are displayed.</p>` 
})

filterDairy.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("FilterDairy button was clicked")
  filterDairy.classList.toggle("filter-button-select")
  message.innerHTML += `<p>Dairy-free recipies are displayed.</p>` 
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








