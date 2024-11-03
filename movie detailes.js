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