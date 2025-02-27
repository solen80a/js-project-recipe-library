console.log("hej hej") 
//What´s the differens between these 2?
document.getElementById('filter-section').addEventListener('click', function(event) {
  if (event.target.classList.contains('filter-button')) {
      event.target.classList.toggle('filter-button-select');
  }
  console.log("hej min apelsiner") 
});

//
const sortbuttons = document.getElementById("sort-section-buttons")
const sortButtonA = document.getElementById("sort-button-ascending")
const sortButtonD = document.getElementById("sort-button-descending")
const message = document.getElementById("filter-sort-message")

//Some way to bundle these two?

sortButtonA.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("sortButtonA button was clicked")
  sortButtonA.classList.toggle("sort-buttons-select")
  message.textContent = "Most popular first"
  
})

sortButtonD.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("sortButtonD button was clicked")
  sortButtonD.classList.toggle("sort-buttons-select")
  message.textContent = "Not so popular first"  
})

//message()
    
//  

// const filterAll = document.getElementById("filter-button-all")
// const filterVegan = document.getElementById("filter-button-vegan")
// const filterVeg = document.getElementById("filter-button-vegetarian")
// const filterGluten = document.getElementById("filter-button-gluten-free")
// const filterDairy = document.getElementById("filter-button-dairy-free")

const sortA = document.getElementById("sort-buttons-ascending")
const sortD = document.getElementById("sort-buttons-descending")







