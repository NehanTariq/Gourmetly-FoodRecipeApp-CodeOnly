
form = document.querySelector('form')
let APP_ID = "ece193d7"
let API_KEY = "9a5fc3dc4c978bfd529c9eef65637ff4"

// Add an event listener to the form that runs the function sendApiRequest when it is clicked
form.addEventListener('submit', function(e){
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    sendApiRequest()
})


// An asynchronous function to fetch data from the API
async function sendApiRequest(){
    let baseUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=20`;
    response = await fetch(baseUrl);
    data = await response.json()
    console.log(data)
    useApiData(data.hits);
}

// Function that handles displaying of data recieved from the API
function useApiData(responses){
    showINHTML = '';
    responses.map((response) =>{
        showINHTML += `
        <div class="card">
        <a href="${response.recipe.url}" target="_blank" rel="noopener noreferrer">
        <img src="${response.recipe.image}" class="card-img-top" alt="...">
        </a>

        <div class="card-body">
          <h3 class="card-title">${response.recipe.label}</h5>
          
            <div class = "recipe-tags"> 
                <p class="tags">${response.recipe.cuisineType}</p>
                <p class="tags">${response.recipe.dishType}</p>
                <p class="tags">${response.recipe.mealType}</p>
            </div>

          <div class="recipe-info">
              <div class="recipe-info">
                <i class="fa-solid fa-bowl-food"></i>
                <p style="font-size: 14px;">${response.recipe.yield} Servings</p>
              </div>
              <div class="recipe-info">
                <i class="fa-solid fa-apple-whole"></i>
                <p style="font-size: 14px;">${response.recipe.calories.toFixed(0)} Calories</p>
              </div>
          </div>
        </div>
      </div>
        `
        document.querySelector("#display-recipes").innerHTML = showINHTML;
    }) 
}


// Load all recipes when query parameter is undefined
const allRecipesBtn = document.getElementById('load-all-recipes');

allRecipesBtn.addEventListener('click', ()=>{
  window.location.href = 'all-recipes.html';
  fetchAllRecipes()
})

async function fetchAllRecipes() {
  try {
    let baseUrl1 = `https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=48&health=crustacean-free`;
    response = await fetch(baseUrl1)
      .then(res => res.json())
      .then(res => displayAllRecipes(res.hits));
  } catch (error) {
    console.log(error)
  }
  }

// Function that handles displaying of data recieved from the API
function displayAllRecipes(responses){
  displayResults = '';
  responses.map((response) =>{
      displayResults += `
      <div class="card">
      <a href="${response.recipe.url}" target="_blank" rel="noopener noreferrer">
      <img src="${response.recipe.image}" class="card-img-top" alt="...">
      </a>

      <div class="card-body">
        <h3 class="card-title">${response.recipe.label}</h5>
        
          <div class = "recipe-tags"> 
              <p class="tags">${response.recipe.cuisineType}</p>
              <p class="tags">${response.recipe.dishType}</p>
              <p class="tags">${response.recipe.mealType}</p>
          </div>

        <div class="recipe-info">
            <div class="recipe-info">
              <i class="fa-solid fa-bowl-food"></i>
              <p style="font-size: 14px;">${response.recipe.yield} Servings</p>
            </div>
            <div class="recipe-info">
              <i class="fa-solid fa-apple-whole"></i>
              <p style="font-size: 14px;">${response.recipe.calories.toFixed(0)} Calories</p>
            </div>
        </div>
      </div>
    </div>
      `
      document.querySelector("#display-all-recipes").innerHTML = displayResults;
  }) 
}


//Load recipes by filtering results by mealType parameter

/* BREAKFAST */
const breakfastRecipes = document.getElementById('breakfast-recipes');

breakfastRecipes.addEventListener('click', ()=>{
  window.location.href = 'breakfast.html';
  fetchBreakfastRecipes()
})

async function fetchBreakfastRecipes() {
  // console.log("hello")
  try {
    let baseUrl2 = `https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=48&mealType=breakfast`;
    response = await fetch(baseUrl2)
      .then(res => res.json())
      .then(res => displayBreakfastRecipes(res.hits));
  } catch (error) {
    console.log(error)
  }
  }

// Function that handles displaying of data recieved from the API
function displayBreakfastRecipes(responses){
  displayResults = '';
  responses.map((response) =>{
      displayResults += `
      <div class="card">
      <a href="${response.recipe.url}" target="_blank" rel="noopener noreferrer">
      <img src="${response.recipe.image}" class="card-img-top" alt="...">
      </a>

      <div class="card-body">
        <h3 class="card-title">${response.recipe.label}</h5>
        
          <div class = "recipe-tags"> 
              <p class="tags">${response.recipe.cuisineType}</p>
              <p class="tags">${response.recipe.dishType}</p>
              <p class="tags">${response.recipe.mealType}</p>
          </div>

        <div class="recipe-info">
            <div class="recipe-info">
              <i class="fa-solid fa-bowl-food"></i>
              <p style="font-size: 14px;">${response.recipe.yield} Servings</p>
            </div>
            <div class="recipe-info">
              <i class="fa-solid fa-apple-whole"></i>
              <p style="font-size: 14px;">${response.recipe.calories.toFixed(0)} Calories</p>
            </div>
        </div>
      </div>
    </div>
      `
      document.querySelector("#display-breakfast-recipes").innerHTML = displayResults;
  }) 
}


/* LUNCH & DINNER */
const lunchRecipes = document.getElementById('lunch-recipes');

lunchRecipes.addEventListener('click', ()=>{
  window.location.href = 'lunch-dinner.html';
  fetchLunchRecipes()
})

async function fetchLunchRecipes() {
  // console.log("hello")
  try {
    let baseUrl3 = `https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=48&mealType=lunch`;
    response = await fetch(baseUrl3)
      .then(res => res.json())
      .then(res => displayLunchRecipes(res.hits));
  } catch (error) {
    console.log(error)
  }
  }

// Function that handles displaying of data recieved from the API
function displayLunchRecipes(responses){
  displayResults = '';
  responses.map((response) =>{
      displayResults += `
      <div class="card">
      <a href="${response.recipe.url}" target="_blank" rel="noopener noreferrer">
      <img src="${response.recipe.image}" class="card-img-top" alt="...">
      </a>

      <div class="card-body">
        <h3 class="card-title">${response.recipe.label}</h5>
        
          <div class = "recipe-tags"> 
              <p class="tags">${response.recipe.cuisineType}</p>
              <p class="tags">${response.recipe.dishType}</p>
              <p class="tags">${response.recipe.mealType}</p>
          </div>

        <div class="recipe-info">
            <div class="recipe-info">
              <i class="fa-solid fa-bowl-food"></i>
              <p style="font-size: 14px;">${response.recipe.yield} Servings</p>
            </div>
            <div class="recipe-info">
              <i class="fa-solid fa-apple-whole"></i>
              <p style="font-size: 14px;">${response.recipe.calories.toFixed(0)} Calories</p>
            </div>
        </div>
      </div>
    </div>
      `
      document.querySelector("#display-lunch-recipes").innerHTML = displayResults;
  }) 
}


/* SNACKS */
const snacksRecipes = document.getElementById('snacks-recipes');

snacksRecipes.addEventListener('click', ()=>{
  window.location.href = 'snacks.html';
  fetchSnacksRecipes()
})

async function fetchSnacksRecipes() {
  // console.log("hello")
  try {
    let baseUrl4 = `https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=48&mealType=snack`;
    response = await fetch(baseUrl4)
      .then(res => res.json())
      .then(res => displaySnacksRecipes(res.hits));
  } catch (error) {
    console.log(error)
  }
  }

// Function that handles displaying of data recieved from the API
function displaySnacksRecipes(responses){
  displayResults = '';
  responses.map((response) =>{
      displayResults += `
      <div class="card">
      <a href="${response.recipe.url}" target="_blank" rel="noopener noreferrer">
      <img src="${response.recipe.image}" class="card-img-top" alt="...">
      </a>

      <div class="card-body">
        <h3 class="card-title">${response.recipe.label}</h5>
        
          <div class = "recipe-tags"> 
              <p class="tags">${response.recipe.cuisineType}</p>
              <p class="tags">${response.recipe.dishType}</p>
              <p class="tags">${response.recipe.mealType}</p>
          </div>

        <div class="recipe-info">
            <div class="recipe-info">
              <i class="fa-solid fa-bowl-food"></i>
              <p style="font-size: 14px;">${response.recipe.yield} Servings</p>
            </div>
            <div class="recipe-info">
              <i class="fa-solid fa-apple-whole"></i>
              <p style="font-size: 14px;">${response.recipe.calories.toFixed(0)} Calories</p>
            </div>
        </div>
      </div>
    </div>
      `
      document.querySelector("#display-snacks-recipes").innerHTML = displayResults;
  }) 
}


/* TEATIME */
const teatimeRecipes = document.getElementById('teatime-recipes');

teatimeRecipes.addEventListener('click', ()=>{
  window.location.href = 'teatime.html';
  fetchTeatimeRecipes()
})

async function fetchTeatimeRecipes() {
  // console.log("hello")
  try {
    let baseUrl5 = `https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=48&mealType=teatime`;
    response = await fetch(baseUrl5)
      .then(res => res.json())
      .then(res => displayTeatimeRecipes(res.hits));
  } catch (error) {
    console.log(error)
  }
  }

// Function that handles displaying of data recieved from the API
function displayTeatimeRecipes(responses){
  displayResults = '';
  responses.map((response) =>{
      displayResults += `
      <div class="card">
      <a href="${response.recipe.url}" target="_blank" rel="noopener noreferrer">
      <img src="${response.recipe.image}" class="card-img-top" alt="...">
      </a>

      <div class="card-body">
        <h3 class="card-title">${response.recipe.label}</h5>
        
          <div class = "recipe-tags"> 
              <p class="tags">${response.recipe.cuisineType}</p>
              <p class="tags">${response.recipe.dishType}</p>
              <p class="tags">${response.recipe.mealType}</p>
          </div>

        <div class="recipe-info">
            <div class="recipe-info">
              <i class="fa-solid fa-bowl-food"></i>
              <p style="font-size: 14px;">${response.recipe.yield} Servings</p>
            </div>
            <div class="recipe-info">
              <i class="fa-solid fa-apple-whole"></i>
              <p style="font-size: 14px;">${response.recipe.calories.toFixed(0)} Calories</p>
            </div>
        </div>
      </div>
    </div>
      `
      document.querySelector("#display-teatime-recipes").innerHTML = displayResults;
  }) 
}

// JavaScript for responsive top navigation bar
const toggleBtn = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleBtn.addEventListener('click', ()=>{
  navbarLinks.classList.toggle('active')
})

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints:{
    1024:{
      slidesPerView:3,
      spaceBetween: 50,
    },
    650:{
      slidesPerView:2,
      spaceBetween: 40,
    }
  }
});

//Load recipes by filtering results by cuisineType parameter

/* BRITISH */
const britishRecipes = document.getElementById('british-recipes');

britishRecipes.addEventListener('click', ()=>{
  window.location.href = 'british.html';
  fetchBritishRecipes()
})

async function fetchBritishRecipes() {
  // console.log("hello")
  try {
    let baseUrl6 = `https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=48&cuisineType=british`;
    response = await fetch(baseUrl6)
      .then(res => res.json())
      .then(res => displayBritishRecipes(res.hits));
  } catch (error) {
    console.log(error)
  }
  }

// Function that handles displaying of data recieved from the API
function displayBritishRecipes(responses){
  displayResults = '';
  responses.map((response) =>{
      displayResults += `
      <div class="card">
      <a href="${response.recipe.url}" target="_blank" rel="noopener noreferrer">
      <img src="${response.recipe.image}" class="card-img-top" alt="...">
      </a>

      <div class="card-body">
        <h3 class="card-title">${response.recipe.label}</h5>
        
          <div class = "recipe-tags"> 
              <p class="tags">${response.recipe.cuisineType}</p>
              <p class="tags">${response.recipe.dishType}</p>
              <p class="tags">${response.recipe.mealType}</p>
          </div>

        <div class="recipe-info">
            <div class="recipe-info">
              <i class="fa-solid fa-bowl-food"></i>
              <p style="font-size: 14px;">${response.recipe.yield} Servings</p>
            </div>
            <div class="recipe-info">
              <i class="fa-solid fa-apple-whole"></i>
              <p style="font-size: 14px;">${response.recipe.calories.toFixed(0)} Calories</p>
            </div>
        </div>
      </div>
    </div>
      `
      document.querySelector("#display-british-recipes").innerHTML = displayResults;
  }) 
}

/* KOREAN */
const koreanRecipes = document.getElementById('korean-recipes');

koreanRecipes.addEventListener('click', ()=>{
  window.location.href = 'korean.html';
  fetchKoreanRecipes()
})

async function fetchKoreanRecipes() {
  // console.log("hello")
  try {
    let baseUrl7 = `https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=48&cuisineType=korean`;
    response = await fetch(baseUrl7)
      .then(res => res.json())
      .then(res => displayKoreanRecipes(res.hits));
  } catch (error) {
    console.log(error)
  }
  }

// Function that handles displaying of data recieved from the API
function displayKoreanRecipes(responses){
  displayResults = '';
  responses.map((response) =>{
      displayResults += `
      <div class="card">
      <a href="${response.recipe.url}" target="_blank" rel="noopener noreferrer">
      <img src="${response.recipe.image}" class="card-img-top" alt="...">
      </a>

      <div class="card-body">
        <h3 class="card-title">${response.recipe.label}</h5>
        
          <div class = "recipe-tags"> 
              <p class="tags">${response.recipe.cuisineType}</p>
              <p class="tags">${response.recipe.dishType}</p>
              <p class="tags">${response.recipe.mealType}</p>
          </div>

        <div class="recipe-info">
            <div class="recipe-info">
              <i class="fa-solid fa-bowl-food"></i>
              <p style="font-size: 14px;">${response.recipe.yield} Servings</p>
            </div>
            <div class="recipe-info">
              <i class="fa-solid fa-apple-whole"></i>
              <p style="font-size: 14px;">${response.recipe.calories.toFixed(0)} Calories</p>
            </div>
        </div>
      </div>
    </div>
      `
      document.querySelector("#display-korean-recipes").innerHTML = displayResults;
  }) 
}


/* INDIAN */
const indianRecipes = document.getElementById('indian-recipes');

indianRecipes.addEventListener('click', ()=>{
  window.location.href = 'indian.html';
  fetchIndianRecipes()
})

async function fetchIndianRecipes() {
  // console.log("hello")
  try {
    let baseUrl8 = `https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=48&cuisineType=indian`;
    response = await fetch(baseUrl8)
      .then(res => res.json())
      .then(res => displayIndianRecipes(res.hits));
  } catch (error) {
    console.log(error)
  }
  }

// Function that handles displaying of data recieved from the API
function displayIndianRecipes(responses){
  displayResults = '';
  responses.map((response) =>{
      displayResults += `
      <div class="card">
      <a href="${response.recipe.url}" target="_blank" rel="noopener noreferrer">
      <img src="${response.recipe.image}" class="card-img-top" alt="...">
      </a>

      <div class="card-body">
        <h3 class="card-title">${response.recipe.label}</h5>
        
          <div class = "recipe-tags"> 
              <p class="tags">${response.recipe.cuisineType}</p>
              <p class="tags">${response.recipe.dishType}</p>
              <p class="tags">${response.recipe.mealType}</p>
          </div>

        <div class="recipe-info">
            <div class="recipe-info">
              <i class="fa-solid fa-bowl-food"></i>
              <p style="font-size: 14px;">${response.recipe.yield} Servings</p>
            </div>
            <div class="recipe-info">
              <i class="fa-solid fa-apple-whole"></i>
              <p style="font-size: 14px;">${response.recipe.calories.toFixed(0)} Calories</p>
            </div>
        </div>
      </div>
    </div>
      `
      document.querySelector("#display-indian-recipes").innerHTML = displayResults;
  }) 
}

/* FRENCH */
const frenchRecipes = document.getElementById('french-recipes');

frenchRecipes.addEventListener('click', ()=>{
  window.location.href = 'french.html';
  fetchFrenchRecipes()
})

async function fetchFrenchRecipes() {
  // console.log("hello")
  try {
    let baseUrl9 = `https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=48&cuisineType=french`;
    response = await fetch(baseUrl9)
      .then(res => res.json())
      .then(res => displayFrenchRecipes(res.hits));
  } catch (error) {
    console.log(error)
  }
  }

// Function that handles displaying of data recieved from the API
function displayFrenchRecipes(responses){
  displayResults = '';
  responses.map((response) =>{
      displayResults += `
      <div class="card">
      <a href="${response.recipe.url}" target="_blank" rel="noopener noreferrer">
      <img src="${response.recipe.image}" class="card-img-top" alt="...">
      </a>

      <div class="card-body">
        <h3 class="card-title">${response.recipe.label}</h5>
        
          <div class = "recipe-tags"> 
              <p class="tags">${response.recipe.cuisineType}</p>
              <p class="tags">${response.recipe.dishType}</p>
              <p class="tags">${response.recipe.mealType}</p>
          </div>

        <div class="recipe-info">
            <div class="recipe-info">
              <i class="fa-solid fa-bowl-food"></i>
              <p style="font-size: 14px;">${response.recipe.yield} Servings</p>
            </div>
            <div class="recipe-info">
              <i class="fa-solid fa-apple-whole"></i>
              <p style="font-size: 14px;">${response.recipe.calories.toFixed(0)} Calories</p>
            </div>
        </div>
      </div>
    </div>
      `
      document.querySelector("#display-french-recipes").innerHTML = displayResults;
  }) 
}

/* ITALIAN */
const italianRecipes = document.getElementById('italian-recipes');

italianRecipes.addEventListener('click', ()=>{
  window.location.href = 'italian.html';
  fetchItalianRecipes()
})

async function fetchItalianRecipes() {
  // console.log("hello")
  try {
    let baseUrl10 = `https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=48&cuisineType=italian`;
    response = await fetch(baseUrl10)
      .then(res => res.json())
      .then(res => displayItalianRecipes(res.hits));
  } catch (error) {
    console.log(error)
  }
  }

// Function that handles displaying of data recieved from the API
function displayItalianRecipes(responses){
  displayResults = '';
  responses.map((response) =>{
      displayResults += `
      <div class="card">
      <a href="${response.recipe.url}" target="_blank" rel="noopener noreferrer">
      <img src="${response.recipe.image}" class="card-img-top" alt="...">
      </a>

      <div class="card-body">
        <h3 class="card-title">${response.recipe.label}</h5>
        
          <div class = "recipe-tags"> 
              <p class="tags">${response.recipe.cuisineType}</p>
              <p class="tags">${response.recipe.dishType}</p>
              <p class="tags">${response.recipe.mealType}</p>
          </div>

        <div class="recipe-info">
            <div class="recipe-info">
              <i class="fa-solid fa-bowl-food"></i>
              <p style="font-size: 14px;">${response.recipe.yield} Servings</p>
            </div>
            <div class="recipe-info">
              <i class="fa-solid fa-apple-whole"></i>
              <p style="font-size: 14px;">${response.recipe.calories.toFixed(0)} Calories</p>
            </div>
        </div>
      </div>
    </div>
      `
      document.querySelector("#display-italian-recipes").innerHTML = displayResults;
  }) 
}