const movieList = [
  {
    id: 1,
    name: "Peaky Blinders",
    year: "2013",
    genre: "Drama",
    type: "Series",
    rating: 8.7,
    cover: "public/images/peaky-blinders-cover.jpg",
    poster: "public/images/peaky-blinders-poster.jpg",
    description:
      "a gripping period crime drama set in Birmingham, England, after World War I. The series follows the exploits of the Shelby family, a notorious gang known for their razor-sharp caps and their ruthless pursuit of power. As they navigate a world of violence, betrayal, and political intrigue, the Peaky Blinders will stop at nothing to protect their territory and secure their legacy.",
  },
  {
    id: 2,
    name: "Alien: Romulus",
    year: 2024,
    genre: "Horror",
    type: "movie",
    rating: 7.2,
    cover: "public/images/alien-cover.jpg",
    poster: "public/images/alien-poster.jpg",
    description:
      "a terrifying sci-fi horror film set in the Alien universe. A group of young space colonists, while exploring a derelict spacecraft, encounter the deadly Xenomorph. As they fight for survival, they uncover the ship's dark secrets and the terrifying force that created it.",
  },
  {
    id: 3,
    name: "Bad Boys For Life",
    year: "2020",
    genre: "action",
    type: "movie",
    rating: 6.5,
    cover: "public/images/bad-boys-cover.jpg",
    poster: "public/images/bad-boys-poster.jpg",
    description:
      "A pair of veteran Miami detectives, Mike Lowrey and Marcus Burnett, reunite to take down a ruthless mother-son duo of drug lords. As they face off against their most dangerous enemies yet, the partners must navigate personal challenges and decide if their legendary partnership is worth risking their lives for one last time.",
  },
  {
    id: 4,
    name: "Breaking Bad",
    year: "2008",
    genre: "Drama",
    type: "Series",
    rating: 9.5,
    cover: "public/images/breaking-bad-cover.jpg",
    poster: "public/images/breaking-bad-poster.jpg",
    description:
      "a high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
  },
  {
    id: 5,
    name: "Deadpool & Wolverine",
    year: "2024",
    genre: "Action",
    type: "movie",
    rating: 7.8,
    cover: "public/images/deadpool&wolverine-cover.jpg",
    poster: "public/images/deadpool&wolverine-poster.jpg",
    description:
      "Wade Wilson, the wise-cracking mercenary known as Deadpool, teams up with the gruff and solitary mutant Wolverine. Together, they embark on a chaotic and violent adventure, filled with non-stop action, dark humor, and unexpected twists.",
  },
  {
    id: 6,
    name: "Dune",
    year: "2021",
    genre: "Sci-Fi",
    type: "movie",
    rating: "8.0",
    cover: "public/images/dune-cover.jpg",
    poster: "public/images/dune-poster.jpg",
    description:
      "A young noble, Paul Atreides, journeys to the most dangerous planet in the universe, Arrakis, to secure his family's future. As he navigates a treacherous world of political intrigue, ecological peril, and interstellar warfare, Paul must embrace his destiny and become the savior of the oppressed Fremen people.",
  },
  {
    id: 7,
    name: "Joker",
    year: "2019",
    genre: "Drama",
    type: "movie",
    rating: 8.4,
    cover: "public/images/joker-cover.jpg",
    poster: "public/images/joker-poster.jpg",
    description:
      "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychophile.",
  },
  {
    id: 8,
    name: "Lioness",
    year: "2024",
    genre: "Action",
    type: "Series",
    rating: 7.7,
    cover: "public/images/lioness-cover.jpg",
    poster: "public/images/lioness-poster.jpg",
    description:
      "A CIA operative recruits a young Marine Raider to bring down a terrorist organization. Together, they navigate a dangerous world of secrets and betrayals, relying on their skills, courage, and unwavering loyalty to each other.",
  },
  {
    id: 9,
    name: "Spider-Man: Across The Spider-Verse",
    year: "2023",
    genre: "Action",
    type: "movie",
    rating: 8.6,
    cover: "public/images/spider-man-cover.jpg",
    poster: "public/images/spider-man-poster.jpg",
    description:
      "A young boy gains powers that he can use to fight evil as he is pulled into a universe where the heroes and villains of various dimensions collide.",
  },
  {
    id: 10,
    name: "Terrifier 3",
    year: "2024",
    genre: "Horror",
    type: "movie",
    rating: 6.7,
    cover: "public/images/terrifier-cover.jpg",
    poster: "public/images/terrifier-poster.jpg",
    description:
      "A terrifying slasher film that follows the return of Art the Clown, a sadistic killer who torments a group of unsuspecting victims on Halloween night. As the body count rises, the survivors must fight for their lives against the relentless and increasingly gruesome attacks of the demonic clown.",
  },
  {
    id: 11,
    name: "The Wolf of Wall Street",
    year: "2008",
    genre: "Comedy",
    type: "movie",
    rating: 8.2,
    cover: "public/images/the-wolf-of-wallstreet.jpg",
    poster: "public/images/the-wolf-of-wallstreet-poster.jpg",
    description:
      "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
  },
  {
    id: 12,
    name: "Top Gun: Maverick",
    year: "2022",
    genre: "Action",
    type: "movie",
    rating: 8.2,
    cover: "public/images/top-gun-mavrick-cover.jpg",
    poster: "public/images/top-gun-maverick-poster.jpg",
    description:
      "A legendary pilot is called back to train a new generation of Top Gun graduates, including the son of his late friend. As they push their limits and confront the dangers of modern aerial warfare, they must confront their past and embrace the uncertain future.",
  },
  {
    id: 13,
    name: "Transformers: Rise of the Beasts",
    year: "2023",
    genre: "Action",
    type: "movie",
    rating: "6.0",
    cover: "public/images/transformers-cover.jpg",
    poster: "public/images/transformers-poster.jpg",
    description:
      "A new generation of Transformers emerges to protect Earth from a terrifying threat. Optimus Prime and Bumblebee team up with a new cast of Autobots and Maximals to battle the evil Terrorcons. As the fate of the planet hangs in the balance, the Transformers must unite to save humanity.",
  },
  {
    id: 14,
    name: "Venom: The Last Dance",
    year: "2024",
    genre: "Action",
    type: "movie",
    rating: 6.2,
    cover: "public/images/venom-cover.jpg",
    poster: "public/images/venom-poster.jpg",
    description:
      "A deadly symbiote and its lethal host, Eddie Brock, return for one final, explosive showdown. As Venom evolves into a more powerful and dangerous creature, Eddie must confront his own dark impulses and battle a new, formidable enemy. The fate of the world hangs in the balance as the two beings clash in a battle that will test the limits of their symbiotic bond.",
  },
  {
    id: 15,
    name: "Vikings",
    year: "2013",
    genre: "Action",
    type: "Series",
    rating: 8.5,
    cover: "public/images/vikings-cover.jpg",
    poster: "public/images/vikings-poster.jpg",
    description:
      "Vikings is a historical fiction drama series that follows the lives of legendary Norse warriors and explorers. The series delves into the brutal and captivating world of Viking culture, exploring themes of family, loyalty, and the relentless pursuit of power and glory.",
  },
];

let movies = document.querySelector(".New-movies");

const carousel = document.querySelector(".movies");
let scrollAmount = 0;

function startCarousel() {
  setInterval(() => {
    carousel.scrollBy({ left: 1, behavior: "smooth" });
    scrollAmount += 1;

    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
      scrollAmount = 0;
    }
  }, 30);
}

startCarousel();

let currentIndex = 0;
let trendingButton = document.querySelector(".trending-button");
trendingButton.addEventListener("click", () => {
  console.log("clicked");
});
let title;
let year;
let genre;
let rating;
let description;
let backgroundOverlay;
let currentMovie;
let landingPage;

function updatelanding() {
  currentMovie = movieList[currentIndex];
  title = document.querySelector(".trending-title");
  year = document.querySelector(".year");
  genre = document.querySelector(".genre");
  rating = document.querySelector(".rating");
  description = document.querySelector(".description");
  backgroundOverlay = document.querySelector(".background-overlay");
  landingPage = document.querySelector(".landing-page");

  // Fade out the overlay and landing-page content
  backgroundOverlay.classList.add("fade-out");
  landingPage.classList.add("fade-out");

  setTimeout(() => {
    // Update background image on the overlay
    backgroundOverlay.style.backgroundImage = `radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, rgb(0, 0, 0) 100%), url(${currentMovie.cover})`;

    // Update text content
    title.textContent = currentMovie.name;
    year.textContent = currentMovie.year;
    genre.textContent = currentMovie.genre;
    rating.textContent = currentMovie.rating;
    description.textContent = currentMovie.description;

    // Fade in the overlay and landing-page content
    backgroundOverlay.classList.remove("fade-out");
    landingPage.classList.remove("fade-out");
  }, 2000); // Match the CSS transition duration

  // Update the index for the next movie
  currentIndex = (currentIndex + 1) % movieList.length;
}
updatelanding();
setInterval(updatelanding, 5000);

let currentMovieId;
document.querySelector(".trending-button").addEventListener("click", () => {
  currentMovieId = currentMovie.id;
  console.log("current movie id is ", currentMovieId);
});
document.querySelector(".trending-button").addEventListener("click", () => {
  movieList.forEach((movie) => {
    if (movie.id == currentMovieId) {
      console.log(`current ${movie.type} is ${movie.name}`);
    }
  });
});
document.querySelector(".scroll-button-right").addEventListener("click", () => {
  console.log(movies);

  movies.scrollBy(150, 0);
  console.log(movieList.length);
});
document.querySelector(".scroll-button-left").addEventListener("click", () => {
  console.log(movies);

  movies.scrollBy(-150, 0);
  console.log(movieList.length);
});

window.onload = () => {
  const state = localStorage.getItem("state");
  if (state === "light") {
    document.querySelector(".this-week-trending h1").style.color = "white";
    document.querySelector(".Alltime-trending h1").style.color = "white";
    document.querySelector(".new-releases h1").style.color = "white";
    document.querySelector(".scroll-button-left g path").style.fill = "white";
    document.querySelector(".scroll-button-right g path").style.fill = "white";
    document.querySelectorAll(".movie h2, .movie p").forEach((element) => {
      element.style.color = "white";
    });
    document.body.style.backgroundColor = "black";
  } else {
    document.querySelector(".this-week-trending h1").style.color = "black";
    document.querySelector(".Alltime-trending h1").style.color = "black";
    document.querySelector(".new-releases h1").style.color = "black";
    document.querySelector(".scroll-button-left g path").style.fill = "black";
    document.querySelector(".scroll-button-right g path").style.fill = "black";
    document.querySelectorAll(".movie h2, .movie p").forEach((element) => {
      element.style.color = "black";
    });
    document.body.style.backgroundColor = "rgb(216, 216, 216)";
  }
};
document.querySelector(".search").addEventListener("click", () => {
  if (localStorage.getItem("state") === "dark") {
    document.querySelector(".this-week-trending h1").style.color = "white";
    document.querySelector(".Alltime-trending h1").style.color = "white";
    document.querySelector(".new-releases h1").style.color = "white";
    document.querySelector(".scroll-button-left g path").style.fill = "white";
    document.querySelector(".scroll-button-right g path").style.fill = "white";
    document.querySelectorAll(".movie h2, .movie p").forEach((element) => {
      element.style.color = "white";
    });
    document.body.style.backgroundColor = "black";
    localStorage.setItem("state", "light");
  } else {
    document.querySelector(".this-week-trending h1").style.color = "black";
    document.querySelector(".Alltime-trending h1").style.color = "black";
    document.querySelector(".new-releases h1").style.color = "black";
    document.querySelector(".scroll-button-left g path").style.fill = "black";
    document.querySelector(".scroll-button-right g path").style.fill = "black";
    document.querySelectorAll(".movie h2, .movie p").forEach((element) => {
      element.style.color = "black";
    });
    document.body.style.backgroundColor = "rgb(216, 216, 216)";
    localStorage.setItem("state", "dark");
  }
});
