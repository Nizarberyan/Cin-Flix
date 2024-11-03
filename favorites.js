// Select elements
const hamburger = document.querySelector(".hamburger svg");
const sidePanel = document.getElementById("sidePanel");
const closeBtn = document.getElementById("closeBtn");

// Open side panel on SVG click
hamburger.addEventListener("click", () => {
  sidePanel.classList.add("open");
});

// Close side panel on button click
closeBtn.addEventListener("click", () => {
  sidePanel.classList.remove("open");
});

const movieList = JSON.parse(localStorage.getItem("movieList")) || [];
let movieContainer = document.querySelector(".favorites-movies");
let favorites = JSON.parse(localStorage.getItem("favorites")) || []; // Ensure it defaults to an empty array

favorites.forEach((favoriteItem) => {
  const movie = movieList.find((movie) => movie.id == favoriteItem.id);
  if (movie) {
    // Prepare the HTML for the movie
    let holder = `<div class="movie">
    <p class="id" style="display: none">${movie.id}</p>
            <svg
              class="remove"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="30"
              height="30"
              x="0"
              y="0"
              viewBox="0 0 32 32"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
            >
              <g>
                <g data-name="Layer 2">
                  <path
                    d="M12.68 27a1 1 0 0 0 1-1V14a1 1 0 0 0-2 0v12a1 1 0 0 0 1 1zM19.32 27a1 1 0 0 0 1-1V14a1 1 0 0 0-2 0v12a1 1 0 0 0 1 1z"
                    fill="#FFFFFF"
                    opacity="1"
                  ></path>
                  <path
                    d="M5 27.48A3.53 3.53 0 0 0 8.52 31h15A3.53 3.53 0 0 0 27 27.48V10.93A1.94 1.94 0 0 0 25.07 9H6.93A1.94 1.94 0 0 0 5 10.93zm20-16.55v16.55A1.52 1.52 0 0 1 23.48 29h-15A1.52 1.52 0 0 1 7 27.48L6.93 11zM20.05 1H12a2 2 0 0 0-2 2v2H6a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2h-4V3a2 2 0 0 0-1.95-2zM12 5V3h8v2z"
                    fill="#FFFFFF"
                    opacity="1"
                  ></path>
                </g>
              </g>
            </svg>
            <img src="${movie.poster}" />
            <h2>${movie.name}</h2>
            <div>
              <p>${movie.year}</p>
              <p>${movie.type}</p>
            </div>
          </div>`;
    // Use insertAdjacentHTML to add the new content
    movieContainer.insertAdjacentHTML("beforeend", holder);
  }
});
let removeBtn = document.querySelectorAll(".remove");
console.log(removeBtn);
removeBtn.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("clicked");
    let parentId = element.parentElement.querySelector("p").textContent;
    favorites.forEach((favoriteItem) => {
      if (favoriteItem.id == parentId) {
        let index = favorites.indexOf(favoriteItem);
        favorites.splice(index, 1);
        console.log(favorites);
      }
    });
    localStorage.setItem("favorites", JSON.stringify(favorites));
    location.reload();
  });
});

window.onload = () => {
  const state = localStorage.getItem("state");
  if (state === "light") {
    document.body.style.backgroundColor = "black";
    document.querySelector("nav").style.backgroundColor = "black";
    let textContent = document.querySelectorAll("h1,h2,p");
    textContent.forEach((element) => {
      element.style.color = "white";
    });
  } else {
    document.body.style.backgroundColor = "rgb(216, 216, 216)";
    document.querySelector("nav").style.backgroundColor = "rgb(216, 216, 216)";
    let textContent = document.querySelectorAll("h1,h2,p");
    textContent.forEach((textContentItem) => {
      textContentItem.style.color = "black";
    });
  }
};
document.querySelector(".search").addEventListener("click", () => {
  if (localStorage.getItem("state") === "dark") {
    document.body.style.backgroundColor = "black";
    document.querySelector("nav").style.backgroundColor = "black";
    localStorage.setItem("state", "light");

    let textContent = document.querySelectorAll("h1,h2,p");
    textContent.forEach((textContentItem) => {
      textContentItem.style.color = "white";
    });
  } else {
    document.body.style.backgroundColor = "rgb(216, 216, 216)";
    document.querySelector("nav").style.backgroundColor = "rgb(216, 216, 216)";
    let textContent = document.querySelectorAll("h1,h2,p");
    textContent.forEach((textContentItem) => {
      textContentItem.style.color = "black";
    });

    console.log(textContent);
    localStorage.setItem("state", "dark");
  }
});
let searchInput = document.querySelector("#search");
let onPageMovies = document.querySelectorAll(".movie");
searchInput.addEventListener("keyup", (e) => {
  let searchValue = e.target.value.toLowerCase();
  onPageMovies.forEach((movie) => {
    let movieName = movie.querySelector("h2").textContent.toLowerCase();
    if (movieName.includes(searchValue)) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
});
