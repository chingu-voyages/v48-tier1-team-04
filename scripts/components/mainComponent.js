import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import dinosaurs from "../data/dinosaurs.json";
import createEle from "../utils/createEle";
import renderFooter from "./footer/footer.component";
import randomDino from "../utils/giveRandoDino";
import { getCoords, placeMarker } from "../utils/mapBox";
import dinoListItem from "./dino-list/dinoListItem.component";
import renderDinoCard from "./card/card.component";
import dinoOfTheDay from "./randoDino/randoDino.component";


mapboxgl.accessToken = import.meta.env.VITE_MAPBOXAPIKEY;
let map;
const placeMarkers = (map) =>
  dinosaurs.forEach(async (dinosaur) =>
    placeMarker(map, await getCoords(dinosaur.foundIn), null, dinosaur.name)
  );

const renderBodyMap = () => {
  map = new mapboxgl.Map({
    container: "body-map",
    style: "mapbox://styles/mnix-dev/cluiiopsk01ca01ql97063j4f",
    center: [0, 0],
    zoom: 1.9,
    pitch: 0,
    bearing: 0,
    projection: "naturalEarth",
    interactive: false,
  });
  placeMarkers(map);
  return map;
};
const callToActions = [
  "Learn More",
  "Find More Information",
  "Discover More Clues",
  "Explore Now",
  "Embark on Exploration",
  "Uncover the Secrets",
  "Start Your Adventure",
];
let i;
const randomCallToAction = () =>
  callToActions[Math.floor(Math.random() * callToActions.length)];

const renderMain = async () => {
  const headings = [
    "Random Dinosaurs",
    "Jump Right In",
    "Discover More",
    "Dinosaurs Galore",
  ];
  const randomDinos = [];
  while (randomDinos.length < 3) {
    const newDino = randomDino();

    if (!randomDinos.includes(newDino)) {
      randomDinos.push(newDino);
    }
  }
  const renderImg = (dino, i) => `<img src="${
    dino.imageSrc
  }" alt="A drawing representing a ${dino.name}"
  class="composition__photo composition__photo--p${i + 1}">`;
  const randomDino1 =
    randomDinos[Math.floor(Math.random() * randomDinos.length)];
  const generateRandomFact = async () =>
    await fetch(
      "https://dinosaur-facts-api.shultzlab.com/dinosaurs/random"
    ).then((res) => res.json());
  const randomFact = await generateRandomFact();
  let currentPage = 1;
  const content = `
  <section class="section-about">
      <div class="u-text-center u-margin-bottom-lg">
        <h2 class="heading-primary">
          ${
            [
              "Dinosaurs are cool",
              "Dinosaurs are awesome",
              "Dinosaurs are amazing",
              "Dinosaurs are fascinating",
              "Fun Facts About Dinosaurs",
              "Who Knew Dinosaurs Were So Interesting?",
              "Give Me More Dinosaurs",
              "Dinosaurs are the best!",
            ][Math.floor(Math.random() * 4)]
          }
        </h2>
      </div>
      <div class="row">
        <div class="col-1-of-2 col-mn">
          <h3 class="heading-tertiary u-margin-bottom-sm">
            ${randomDino1.taxonomy}</h3>
          <p class="paragraph">${randomDino1.description.substring(
            0,
            350
          )}...</p>
          <h3 class="heading-tertiary u-margin-bottom-sm">${randomFact.Name}
            </h3>
          <p class="paragraph">${randomFact.Description}</p>
          <a href="" class="btn-text">${randomCallToAction()} &rarr;</a>
        </div>
        <div class="col-1-of-2">
          <div class="composition">
            ${randomDinos.map((img, i) => renderImg(img, i)).join("")}
          
          </div>
        </div>
      </div>
  </div>
    </section>
    <section class="section-features">
    <div id="dino-of-the-day"></div>
    </section>
         

    </section>
    <section class="section-tours" >
    <div class="u-text-center u-margin-bottom-lg">
      <h2 class="heading-secondary" id="section-tours">
        ${headings[Math.floor(Math.random() * headings.length)]}
      </h2>
    </div>
    <div class="row">
        ${randomDinos
          .map((dino) =>
            renderDinoCard(dino, callToActions, randomCallToAction, i)
          )
          .join("")}
   
    </div>
    <div class="u-text-center u-margin-top-xl">
    <a class="btn btn--white" href="#all-dinosaurs">View All Dinosaurs</a>
  </div>
  </section>
  <section id="body-map" class="section-features">

</section>

<section id="all-dinosaurs" class="section-features">
<h2 class="heading-secondary u-text-center">${
    ["View All Dinosaurs", "All Dinosaurs", "Dinosaurs"][
      Math.floor(Math.random() * 2)
    ]
  }</h2>
  
<div id="dino-list"></div>
<div class="u-text-center u-margin-top-xl"><div class="search"><input id="search-bar" type="text" placeholder="Search For a Dinosaur..."></div><button id="prev" class="btn btn-white">Previous</button> <span id="currentPage" style="border: 2em;">${currentPage}</span><button id="next" class="btn btn-white">Next</button></div>
</section>

<div id="dinosaur-modal"></div>
    `;
    const main = createEle("main", content, document.body);

  const allDinosaurs = document.querySelector("section#all-dinosaurs"); // declares the parent container which is the list of dinosaurs
  allDinosaurs.style.background = `url(./assets/watercolor/${Math.floor(
    Math.random() * 58
  )}.png) fixed`; // sets the background of the parent container to the image of the dinosaur
 // allDinosaurs.style.backgroundSize = "contain"; // sets the background size to cover
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const pagination = (page, prev, reset) => {
    if (prev && currentPage  <= 1) return 
    if (!prev && currentPage >= totalPages) return
    page < 2
      ? (currentPage = 1)
      : page > totalPages
      ? (currentPage = totalPages)
      : (currentPage = page) && updateDinoList();
    reset
      ? (currentPage = 1)
      : prev
      ? (currentPage = currentPage - 1)
      : (currentPage = currentPage + 1);
    
    document.getElementById("dino-list").innerHTML = "";
    document.querySelector("#currentPage").textContent = currentPage;
    const dinosaursToDisplay = displayItems(dinosaurs, currentPage);
    dinosaursToDisplay.forEach((dino) => dinoListItem(dino));
  };
  prevButton.onclick = () => pagination(currentPage, true);
  nextButton.onclick = () => pagination(currentPage);

  renderBodyMap();
  renderFooter();

  const totalItems = dinosaurs.length;
  const itemsPerPage = 5;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const displayItems = (items, page) => {
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    return items.slice(start, end);
  };
  const updateDinoList = () => {
    const dinoList = document.getElementById("dino-list");
    dinoList.classList.add("fade-out");
    setTimeout(() => {
      dinoList.classList.remove("fade-out");
      updatePageNumber(currentPage);
    }, 2);
  };
  const updatePageNumber = (page) => {
    document.querySelector("#currentPage").textContent = page;
  };

  const dinosaursToDisplay = displayItems(dinosaurs, currentPage);

  dinosaursToDisplay.forEach((dino) => dinoListItem(dino));

  const dinoOfTheDayContainer = document.getElementById("dino-of-the-day");
  dinoOfTheDay(dinoOfTheDayContainer);
  const searchBar = document.getElementById("search-bar");
 

  searchBar.addEventListener("input", () => {
    document.getElementById("dino-list").innerHTML = "";
    filterDinosaursByName(searchBar.value).forEach((dinosaur) =>
      dinoListItem(dinosaur)
    );
  });

  
  return main;
};

export default renderMain;
