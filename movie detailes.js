const hamburger = document.querySelector(".hamburger svg");
const sidePanel = document.getElementById("sidePanel");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
  sidePanel.classList.add("open");

});

closeBtn.addEventListener("click", () => {
  sidePanel.classList.remove("open");
});
let movieList = JSON.parse(localStorage.getItem("movieList")) || [];
let movieContainer = document.querySelector(".movie-details");
let movie = JSON.parse(localStorage.getItem("movie")) || [];
console.log(movie);

let title = document.querySelector(".movie-title h1");
let rating = document.querySelector(".movie-rating p");
let genre = document.querySelector(".movie-genre");
let type = document.querySelector(".movie-type");
let country = document.querySelector(".movie-country");
let year = document.querySelector(".movie-release");
let production = document.querySelector(".movie-production");
let discription = document.querySelector(".movie-discription");
console.log(title, rating, genre, type, country, year, production, discription);
let movieId = localStorage.getItem("movie");
console.log(movieId);