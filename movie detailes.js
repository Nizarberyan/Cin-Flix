const hamburger = document.querySelector(".hamburger svg");
const sidePanel = document.getElementById("sidePanel");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
  sidePanel.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  sidePanel.classList.remove("open");
});
let movieList = JSON.parse(localStorage.getItem("movieList"));
let movieContainer = document.querySelector(".movie-details");
let movieId = JSON.parse(localStorage.getItem("movie"));

let title = document.querySelector(".movie-title h1");
let rating = document.querySelector(".movie-rating p");
let genre = document.querySelector(".movie-genre");
let type = document.querySelector(".movie-type");
let country = document.querySelector(".movie-country");
let year = document.querySelector(".movie-release");
let production = document.querySelector(".movie-production");
let discription = document.querySelector(".movie-discription  p");
let poster = document.querySelector(".movie-poster img");

movieList.forEach((movie) => {
  if (movie.id == movieId) {
    title.textContent = movie.name;
    console.log(title.textContent);
    console.log(movie.rating);
    rating.textContent = movie.rating;
    genre.textContent = `genre: ${movie.genre}`;
    type.textContent = `type: ${movie.type}`;
    country.textContent = `country: ${movie.country}`;
    year.textContent = `release: ${movie.year}`;
    production.textContent = `production: ${movie.production}`;
    console.log(movie.description);
    discription.textContent = movie.description;

    poster.src = movie.poster;
  }
});
