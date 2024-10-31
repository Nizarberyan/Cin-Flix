const movieList = [
  {
    id: 1,
    name: "Peaky Blinders",
    year: "2013",
    genre: "Drama",
    type: "tv",
    cover: "public/images/peaky blinders cover.jpg",
    poster: "public/images/peaky blinders poster.jpg",
    description:
      "a gripping period crime drama set in Birmingham, England, after World War I. The series follows the exploits of the Shelby family, a notorious gang known for their razor-sharp caps and their ruthless pursuit of power. As they navigate a world of violence, betrayal, and political intrigue, the Peaky Blinders will stop at nothing to protect their territory and secure their legacy.",
  },
  {
    id: 2,
    name: "Alien: Romulus",
    year: 2024,
    genre: "Horror",
    type: "movie",
    cover: "public/images/alien-cover.jpg",
    poster: "public/images/alien-poster.jpg",
    description:
      "a terrifying sci-fi horror film set in the Alien universe. A group of young space colonists, while exploring a derelict spacecraft, encounter the deadly Xenomorph. As they fight for survival, they uncover the ship's dark secrets and the terrifying force that created it.",
  },
  {
    id: 3,
    name: "bad boys for life",
    year: "2020",
    genre: "action",
    type: "movie",
    cover: "public/images/bad-boys-cover.jpg",
    poster: "public/images/bad-boys-poster.jpg",
    description:
      "A pair of veteran Miami detectives, Mike Lowrey and Marcus Burnett, reunite to take down a ruthless mother-son duo of drug lords. As they face off against their most dangerous enemies yet, the partners must navigate personal challenges and decide if their legendary partnership is worth risking their lives for one last time.",
  },
  {
    id: 4,
    name: "breaking bad",
    year: "2008",
    genre: "drama",
    type: "tv",
    cover: "public/images/breaking-bad-cover.jpg",
    poster: "public/images/breaking-bad-poster.jpg",
    description:
      "a high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
  },
  {
    id: 5,
    name: "deadpool&wolverine",
    year: "2024",
    genre: "action",
    type: "movie",
    cover: "public/images/deadpool&wolverine-cover.jpg",
    poster: "public/images/deadpool&wolverine-poster.jpg",
    description:
      "Wade Wilson, the wise-cracking mercenary known as Deadpool, teams up with the gruff and solitary mutant Wolverine. Together, they embark on a chaotic and violent adventure, filled with non-stop action, dark humor, and unexpected twists.",
  },
  {
    id: 6,
    name: "dune",
    year: "2021",
    genre: "sci-fi",
    type: "movie",
    cover: "public/images/dune-cover.jpg",
    poster: "public/images/dune-poster.jpg",
    description:
      "A young noble, Paul Atreides, journeys to the most dangerous planet in the universe, Arrakis, to secure his family's future. As he navigates a treacherous world of political intrigue, ecological peril, and interstellar warfare, Paul must embrace his destiny and become the savior of the oppressed Fremen people.",
  },
  {
    id: 7,
    name: "joker",
    year: "2019",
    genre: "drama",
    type: "movie",
    cover: "public/images/joker-cover.jpg",
    poster: "public/images/joker-poster.jpg",
    description:
      "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychophile.",
  },
  {
    id: 8,
    name: "lioness",
    year: "2024",
    genre: "action",
    type: "movie",
    cover: "public/images/lioness-cover.jpg",
    poster: "public/images/lioness-poster.jpg",
    description:
      "A CIA operative recruits a young Marine Raider to bring down a terrorist organization. Together, they navigate a dangerous world of secrets and betrayals, relying on their skills, courage, and unwavering loyalty to each other.",
  },
  {
    id: 9,
    name: "spider-man: across the spider-verse",
    year: "2023",
    genre: "action",
    type: "movie",
    cover: "public/images/spider-man-cover.jpg",
    poster: "public/images/spider-man-poster.jpg",
    description:
      "A young boy gains powers that he can use to fight evil as he is pulled into a universe where the heroes and villains of various dimensions collide.",
  },
  {
    id: 10,
    name: "terrifier",
    year: "2024",
    genre: "horror",
    type: "movie",
    cover: "public/images/terrifier-cover.jpg",
    poster: "public/images/terrifier-poster.jpg",
    description:
      "A terrifying slasher film that follows the return of Art the Clown, a sadistic killer who torments a group of unsuspecting victims on Halloween night. As the body count rises, the survivors must fight for their lives against the relentless and increasingly gruesome attacks of the demonic clown.",
  },
  {
    id: 11,
    name: "the wolf of wall street",
    year: "2008",
    genre: "comedy",
    type: "movie",
    cover: "public/images/the-wolf-of-wallstreet-cover.jpg",
    poster: "public/images/the-wolf-of-wallstreet-poster.jpg",
    description:
      "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
  },
  {
    id: 12,
    name: "topgun: maverick",
    year: "2022",
    genre: "action",
    type: "movie",
    cover: "public/images/top-gun-mavrick-cover.jpg",
    poster: "public/images/top-gun-maverick-poster.jpg",
    description:
      "A legendary pilot is called back to train a new generation of Top Gun graduates, including the son of his late friend. As they push their limits and confront the dangers of modern aerial warfare, they must confront their past and embrace the uncertain future.",
  },
  {
    id: 13,
    name: "Transformers: Rise of the Beasts",
    year: "2023",
    genre: "action",
    type: "movie",
    cover: "public/images/transformers-cover.jpg",
    poster: "public/images/transformers-poster.jpg",
    description:
      "A new generation of Transformers emerges to protect Earth from a terrifying threat. Optimus Prime and Bumblebee team up with a new cast of Autobots and Maximals to battle the evil Terrorcons. As the fate of the planet hangs in the balance, the Transformers must unite to save humanity.",
  },
  {
    id: 14,
    name: "venom: the last dance",
    year: "2024",
    genre: "action",
    type: "movie",
    cover: "public/images/venom-cover.jpg",
    poster: "public/images/venom-poster.jpg",
    description:
      "A deadly symbiote and its lethal host, Eddie Brock, return for one final, explosive showdown. As Venom evolves into a more powerful and dangerous creature, Eddie must confront his own dark impulses and battle a new, formidable enemy. The fate of the world hangs in the balance as the two beings clash in a battle that will test the limits of their symbiotic bond.",
  },
  {
    id: 15,
    name: "Vikings",
    year: "2013",
    genre: "action",
    type: "tv",
    cover: "public/images/vikings-cover.jpg",
    poster: "public/images/vikings-poster.jpg",
    description:
      "Vikings is a historical fiction drama series that follows the lives of legendary Norse warriors and explorers. The series delves into the brutal and captivating world of Viking culture, exploring themes of family, loyalty, and the relentless pursuit of power and glory.",
  },
];

let movies = document.querySelector(".movies");

movies.animate(
  [{ transform: "translateX(0%)" }, { transform: `translateX(-${50}%)` }],
  { duration: 10000, iterations: Infinity }
);
