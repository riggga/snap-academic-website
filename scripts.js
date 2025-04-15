const games = [
  {
    title: "Valorant",
    genre: "Shooter",
    platform: "PC",
    rating: 4.0,
    price: 0,
    image: "images/valorant.png",
    description: "Valorant is a team-based tactical first-person shooter by Riot Games, with character abilities and strategic gameplay."
  },
  {
    title: "Minecraft",
    genre: "Sandbox",
    platform: "PC, Console",
    rating: 4.0,
    price: 29.99,
    image: "images/minecraft.png",
    description: "Minecraft is a sandbox game where players explore, build, and survive in a blocky world."
  },
  {
    title: "Apex Legends",
    genre: "Shooter",
    platform: "PC, Console",
    rating: 4.6,
    price: 0,
    image: "images/apex.png",
    description: "Apex Legends is a squad-based battle royale with unique Legends and fast-paced action."
  },
  {
    title: "Call of Duty: Warzone",
    genre: "Shooter",
    platform: "PC, Console",
    rating: 4.6,
    price: 0,
    image: "images/warzone.png",
    description: "Warzone is a large-scale Call of Duty battle royale game with realism and tactical features."
  },
  {
    title: "Counter-Strike 2",
    genre: "Shooter",
    platform: "PC",
    rating: 4.0,
    price: 0,
    image: "images/cs2.png",
    description: "Counter-Strike 2 is a competitive FPS featuring team-based bomb defusal or hostage rescue."
  },
  {
    title: "Fortnite",
    genre: "Shooter",
    platform: "PC, Console, Mobile",
    rating: 4.8,
    price: 0,
    image: "images/fortnite.png",
    description: "Fortnite is a battle royale with building mechanics and a vibrant cartoon style."
  },
  {
    title: "Rainbow Six Siege",
    genre: "Shooter",
    platform: "PC, Console",
    rating: 4.8,
    price: 19.99,
    image: "images/r6s.png",
    description: "Siege is a tactical shooter focusing on breaching, gadgets, and operator-based strategy."
  },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Adventure",
    platform: "Nintendo Switch",
    rating: 4.9,
    price: 59.99,
    image: "images/zelda_botw.png",
    description: "An open-world masterpiece where players explore Hyrule freely with physics-driven puzzles."
  },
  {
    title: "Elden Ring",
    genre: "RPG",
    platform: "PC, Console",
    rating: 4.9,
    price: 59.99,
    image: "images/elden_ring.png",
    description: "Elden Ring is a massive action RPG by FromSoftware featuring open-world exploration and tough bosses."
  },
  {
    title: "God of War: Ragnarok",
    genre: "Action",
    platform: "PlayStation",
    rating: 4.9,
    price: 69.99,
    image: "images/gow_ragnarok.png",
    description: "Kratos and Atreus return in a mythic Norse adventure filled with emotion and combat."
  },
  {
    title: "Hogwarts Legacy",
    genre: "RPG",
    platform: "PC, Console",
    rating: 4.7,
    price: 59.99,
    image: "images/hogwarts.png",
    description: "Explore the wizarding world as a custom student in this immersive open-world Harry Potter game."
  },
  {
    title: "Genshin Impact",
    genre: "Action RPG",
    platform: "PC, Mobile, Console",
    rating: 4.6,
    price: 0,
    image: "images/genshin.png",
    description: "An anime-style open-world action RPG with elemental combat and gacha mechanics."
  },
  {
    title: "Red Dead Redemption 2",
    genre: "Action-Adventure",
    platform: "PC, Console",
    rating: 4.9,
    price: 59.99,
    image: "images/rdr2.png",
    description: "Live the life of an outlaw in a rich and emotional Wild West open world."
  },
  {
    title: "Grand Theft Auto V",
    genre: "Action",
    platform: "PC, Console",
    rating: 4.8,
    price: 29.99,
    image: "images/gta5.png",
    description: "GTA V offers an explosive sandbox world with story and online multiplayer mayhem."
  },
  {
    title: "League of Legends",
    genre: "MOBA",
    platform: "PC",
    rating: 4.4,
    price: 0,
    image: "images/lol.png",
    description: "A 5v5 competitive MOBA where players battle using champions with unique abilities."
  },
  {
    title: "Dota 2",
    genre: "MOBA",
    platform: "PC",
    rating: 4.3,
    price: 0,
    image: "images/dota2.png",
    description: "Dota 2 is a complex and rewarding competitive game with deep mechanics and strategy."
  },
  {
    title: "PUBG: Battlegrounds",
    genre: "Shooter",
    platform: "PC, Console",
    rating: 4.5,
    price: 0,
    image: "images/pubg.png",
    description: "A realistic battle royale shooter with survival mechanics and a shrinking play zone."
  },
  {
    title: "Among Us",
    genre: "Party",
    platform: "PC, Mobile, Console",
    rating: 4.6,
    price: 4.99,
    image: "images/amongus.png",
    description: "A social deduction game where crewmates try to find the imposter on a spaceship."
  },
  {
    title: "Fall Guys",
    genre: "Party",
    platform: "PC, Console",
    rating: 4.5,
    price: 0,
    image: "images/fallguys.png",
    description: "Compete in wacky obstacle course mini-games with jellybean-like characters."
  },
  {
    title: "The Sims 4",
    genre: "Simulation",
    platform: "PC, Console",
    rating: 4.3,
    price: 39.99,
    image: "images/sims4.png",
    description: "Create and control people in a virtual world with endless life simulation possibilities."
  },
  {
    title: "Stardew Valley",
    genre: "Simulation",
    platform: "PC, Console, Mobile",
    rating: 4.9,
    price: 14.99,
    image: "images/stardew.png",
    description: "A charming farming sim where players manage land, relationships, and explore caves."
  },
  {
    title: "Hades",
    genre: "Roguelike",
    platform: "PC, Console",
    rating: 4.9,
    price: 24.99,
    image: "images/hades.png",
    description: "Battle through the Underworld as Zagreus in this fast, story-rich roguelike dungeon crawler."
  },
  {
    title: "Celeste",
    genre: "Platformer",
    platform: "PC, Console",
    rating: 4.8,
    price: 19.99,
    image: "images/celeste.png",
    description: "Climb a mountain in this emotional, pixel-perfect platformer with tight controls and story."
  },
  {
    title: "Terraria",
    genre: "Sandbox",
    platform: "PC, Console, Mobile",
    rating: 4.7,
    price: 9.99,
    image: "images/terraria.png",
    description: "A 2D sandbox game about building, digging, exploring, and fighting."
  },
  {
    title: "Rocket League",
    genre: "Sports",
    platform: "PC, Console",
    rating: 4.7,
    price: 0,
    image: "images/rocketleague.png",
    description: "Soccer with rocket-powered cars in fast-paced, competitive multiplayer matches."
  },
  {
    title: "Overwatch 2",
    genre: "Shooter",
    platform: "PC, Console",
    rating: 4.2,
    price: 0,
    image: "images/overwatch2.png",
    description: "A team-based hero shooter with roles, abilities, and stylish gameplay."
  },
  {
    title: "Dead by Daylight",
    genre: "Horror",
    platform: "PC, Console",
    rating: 4.4,
    price: 19.99,
    image: "images/dbd.png",
    description: "A 1v4 online horror game where one killer hunts four survivors in terrifying arenas."
  },
  {
    title: "Cyberpunk 2077",
    genre: "RPG",
    platform: "PC, Console",
    rating: 4.5,
    price: 59.99,
    image: "images/cyberpunk.png",
    description: "Explore a dystopian open-world RPG set in Night City with high-tech upgrades and story."
  },
  {
    title: "Monster Hunter: World",
    genre: "Action RPG",
    platform: "PC, Console",
    rating: 4.6,
    price: 29.99,
    image: "images/mhw.png",
    description: "Team up or solo giant monster hunts with deep crafting and epic weapons."
  },
  {
    title: "The Witcher 3: Wild Hunt",
    genre: "RPG",
    platform: "PC, Console",
    rating: 4.9,
    price: 39.99,
    image: "images/witcher3.png",
    description: "Become Geralt and journey through a rich fantasy world full of monsters and choices."
  }
];

const catalogContainer = document.getElementById("game-catalog");
const favoriteCatalogContainer = document.getElementById("favorite-catalog");
const popular_games = [];
let favorite_list = [];
let favorite_page = document.getElementById("Favorite");
let popular = document.getElementById("popular");
let search = document.getElementById("search-bar");
let home_page = document.getElementById("Home");

function displayGames(list){
  catalogContainer.innerHTML = "";

  list.forEach(element => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
                    <img src = "${element.image}" alt="${element.title}">
                    <div class = "card-content">
                      <h1>${element.title}</h1>
                      <p>$${element.price}</p>
                      <p>${element.genre} • ${element.platform} • ${element.rating}</p>
                    
                    </div>
                    
                    `;
    card.addEventListener("mouseenter", () =>{
      card.style.backgroundColor = "rgb(64, 64, 68)";
    });
  
    card.addEventListener("mouseleave", () => {
      card.style.backgroundColor = "rgb(18, 17, 22)";
    });

    card.addEventListener("click", () =>{
      openDesc(element);
    });

    catalogContainer.appendChild(card);
  });
}


function displayFavoriteGames(list) {
  catalogContainer.innerHTML = "";

  list.forEach(element => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${element.image}" alt="${element.title}">
      <div class="card-content">
        <h1>${element.title}</h1>
        <p>$${element.price}</p>
        <p>${element.genre} • ${element.platform} • ${element.rating}</p>
        <button class="remove-favorite">Remove</button>
      </div>
    `;


    card.addEventListener("mouseenter", () => {
      card.style.backgroundColor = "rgb(64, 64, 68)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.backgroundColor = "rgb(18, 17, 22)";
    });

    let remove = card.querySelector(".remove-favorite");
    remove.addEventListener("click", (event) => {
      const index = favorite_list.indexOf(element);
      if (index !== -1) {
        event.stopPropagation();
        favorite_list.splice(index, 1);
        displayFavoriteGames(favorite_list);
      }
    });


    card.addEventListener("click", () => {
      openDesc(element);
    });

    catalogContainer.appendChild(card);
  });
}


let counter = 0;

games.forEach(element => {
  if (counter < 5 && element.rating >= 4.5) {
    popular_games.push(element);
    counter++;
  }
});


function displayPopularGamesNav(list){

  const container = document.getElementById("popular-nav");
  container.innerHTML = "";

  list.forEach(element => {
    let card = document.createElement("div");
    card.className = "popular-nav-card";
    card.innerHTML = `
                      <img src = "${element.image}" alt = "${element.title}">
                      <div class = "popular-nav-content" > 
                        <p>${element.title}</p>
                      </div>
                      `
    

    card.addEventListener("mouseenter", () => {
      card.style.backgroundColor = "rgb(64, 64, 68)";
    });
  
    card.addEventListener("mouseleave", () => {
      card.style.backgroundColor = "rgb(18, 17, 22)";
    });

    card.addEventListener("click", () => {
      let display = document.getElementById("popular-display");
      display.innerHTML = "";
      displayPopularGames(element);
    });


    container.appendChild(card);
    
    
  })


}


function displayPopularGames(element){
  const container = document.getElementById("popular-display");
  let card = document.createElement("div");
    card.className = "popular-card fade-slide";
    card.innerHTML = `
                      <img src = "${element.image}" alt = "${element.title}">
                      <div class = "popular-content" > 
                        <h1>${element.title}</h1>
          
                        <button class = "favorite-button" id = "popular-favorite-button" >Add To Favorite</button>
                      </div>
                      `

  container.appendChild(card);

  let button = document.getElementById("popular-favorite-button");
  button.addEventListener("click", ()=>{
    if(!favorite_list.includes(element)){
      favorite_list.push(element);
    }
  });

}

function displayFilter() {
  const container = document.getElementById("filter-container");

  let display = document.createElement("div");
  display.className = "filter-card";
  display.innerHTML = `
    <div id="filter-button">Filter</div>
    <div class="filter-options">
      <div class="filter-elements">Genre: <input id="genre-input" type="text" placeholder="genre" /></div>
      <div class="filter-elements">Platform: <input id="platform-input" type="text" placeholder="platform" /></div>
      <div class="filter-elements">Price: 
        <input id="price-min-input" type="text" placeholder="min" />
        <input id="price-max-input" type="text" placeholder="max" />
      </div>
    </div>
  `;
  container.appendChild(display);

  let filter_button = document.getElementById("filter-button");
  filter_button.addEventListener("click", () => {
    changeFilter();
  });

  filterGenre();
  filterPlatform();
  filterPrice();
}

let visible = false;
function changeFilter(){
  let cards = document.querySelectorAll(".filter-options");

  visible = !visible;
  cards.forEach(card =>{
    if(visible){
      card.style.display = "flex";
    } else{
      card.style.display = "none";
    }
  });

}

function sortName(){
  games.sort((a,b) => {return a.title.localeCompare(b.title)});
  displayGames(games);
}

function sortPrice(){
  games.sort((a,b) => {
    if(a.price < b.price){
      return -1;
    }
    else if(a.price > b.price){
      return 1;
    } else{
      return 0;
    }
  });
  displayGames(games);
}

function displaySort() {
  const container = document.getElementById("sort-container");

  container.innerHTML = `
    <p id="sort-icon">Sort By: </p>
    <button id="sort-name" >Name</button>
    <button id="sort-price" >Price</button>
  `;

  let name_button = document.getElementById("sort-name");
  let price_button = document.getElementById("sort-price");
  name_button.addEventListener("click", sortName);
  price_button.addEventListener("click", sortPrice);


}

displaySort();



function openDesc(element) {
  const container = document.getElementById("desc-container");
  container.innerHTML = ""; 
  container.style.display = "flex"; 

  const display = document.createElement("div");
  display.className = "desc-display";
  display.innerHTML = `
    
    <div id="desc-content">
      <button id = "desc-close-button">Close</button>
      <h1>${element.title}</h1>
      <h2>${element.rating}</h2>
      <img src="${element.image}" alt="${element.title}">
      <h3>${element.description}</h3>
      <h4>Price: $${element.price}</h4>
      <h5>Genre: ${element.genre}</h5>
      <h6>Platforms Available: ${element.platform}</h6>
      <button class = "favorite-button" id="desc-favorite-button">Add To Favorite</button>
      
    </div>
    
  `;

  container.appendChild(display);

  let descCloseButton = document.getElementById("desc-close-button");
  descCloseButton.addEventListener("click", ()=>{
    closeDesc();
  });


  
  let button = document.getElementById("desc-favorite-button");
  button.addEventListener("click", ()=>{
    if(!favorite_list.includes(element)){
      favorite_list.push(element);
    }
  });
 

}

function closeDesc(){
  let container = document.getElementById("desc-container");
  container.style.display = "none";
}


function filterGenre(){
  let item = document.getElementById("genre-input");
  item.addEventListener("input", ()=>{
    let temp_list = [];
    let type = item.value.toLowerCase();
    games.forEach(game=>{
      if(game.genre.toLowerCase().includes(type)){
        temp_list.push(game);
      }
    });
    displayGames(temp_list);
  })
}

function filterPlatform(){
  let item = document.getElementById("platform-input");
  item.addEventListener("input", ()=>{
    let inputStrings = item.value.toLowerCase();
    let temp_list = [];
    games.forEach(game=>{
      if(game.platform.toLowerCase().includes(inputStrings)){
        temp_list.push(game);
      }
    });

    displayGames(temp_list);
  });
}

function filterPrice(){
  let min = document.getElementById("price-min-input");
  let max = document.getElementById("price-max-input");

  function filter(){
    let temp_list = [];
    let minInput = parseFloat(min.value) || 0;
    let maxInput = parseFloat(max.value) || Infinity;

    games.forEach(game=>{
      if(game.price >= minInput && game.price <= maxInput){
        temp_list.push(game);
      }
    });
    displayGames(temp_list);
  }

  min.addEventListener("input", filter);
  max.addEventListener("input", filter);
}

function searchGame(){
  let search_element = document.getElementById("searchInput");
  search_element.addEventListener("input", ()=>{
    let search_value = search_element.value.toLowerCase();
    let temp_list = [];

    games.forEach(game=>{
      if(game.title.toLowerCase().includes(search_value)){
        temp_list.push(game);
      }
    });

    displayGames(temp_list);
    
  });


}

let formVisibility = false;
function addItem(){
  let add_container = document.getElementById("add-container");
  let add_button = document.getElementById("add");

  add_button.addEventListener("click", ()=>{
    if(formVisibility == false){
      formVisibility = true;
      add_container.innerHTML = `
                            <div id="add-form">
                              <p>Title: <input id="input-title" type="text" placeholder="title"></p>
                              <p>Genre: <input id="input-genre" "type="text" placeholder="genre"></p>
                              <p>Platform: <input id="input-platform" type="text" placeholder="platform"></p>
                              <p>Rating: <input id="input-rating" type="text" placeholder="rating"></p>
                              <p>Price: <input id="input-price" type="text" placeholder="price"></p>
                              <p>Description: <input id="input-description" type="text" placeholder="description"></p>
                              <p>Image: <input id="input-image" type="file" accept="image/*"></p>
                              <button id="submit-item">Add Game</button>
                            </div>`;

                            
      let submit_button = document.getElementById("submit-item");
      submit_button.addEventListener("click", ()=>{
        const title = document.getElementById("input-title").value;
        const genre = document.getElementById("input-genre").value;
        const platform = document.getElementById("input-platform").value;
        const rating = parseFloat(document.getElementById("input-rating").value);
        const price = parseFloat(document.getElementById("input-price").value);
        const description = document.getElementById("input-description").value;
        const image = document.getElementById("input-image");
        const file = image.files[0];

        if(file){
          let reader = new FileReader();
          reader.readAsDataURL(file); 
          reader.onload = (e)=>{
            const imageData = e.target.result; 
            const temp = {
              title,
              genre,
              platform,
              rating,
              price,
              description,
              image: imageData
            };

            games.push(temp);
            displayGames(games);
            formVisibility = false;
            add_container.innerHTML = "";
          };
        }
        else {
          alert("Please select an image.");
        }
      });
    } 
    else{
      formVisibility = false;
      add_container.innerHTML = "";
    }
    
  });
  
}




favorite_page.addEventListener("click", ()=>{
  search.style.display = "none";
  popular.style.display = "none";
  displayFavoriteGames(favorite_list);
});

home_page.addEventListener("click", ()=>{
  popular.style.display = "flex";
  search.style.display = "flex";
  displayGames(games);
});


addItem();
searchGame()
displayFilter();
displayPopularGames(games[3]);
displayPopularGamesNav(popular_games);
displayGames(games);

