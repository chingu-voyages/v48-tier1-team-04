import mapboxgl from "mapbox-gl";
import dinosaurs from "../data/dinosaurs.json";
import createEle from "../utils/createEle";
import renderFooter from "./footer";
import randomDino from "../utils/giveRandoDino";
import { getCoords, placeMarker } from "../utils/mapBox";
import dinoListItem from "./dino-list/dinoListItem";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOXAPIKEY;

const placeMarkers = (map) =>
  dinosaurs.forEach(async (dinosaur) =>
    placeMarker(map, await getCoords(dinosaur.foundIn), null, dinosaur.name)
  );

const renderBodyMap = () => {
  const map = new mapboxgl.Map({
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
const renderDinoCard = (dino) => {
  const renderDinoPopup = (dino) =>
    createEle(
      "div",
      `
    <div class="popup__content">
<div class="popup__left"><img src="img/nat-8.jpg" alt="Tour Photo" class="popup__img"><img src="${
        dino.imageSrc
      }" alt="Tour Photo" class="popup__img"></div>
    <div class="popup__right">
      <a href="#section-tours" class="popup__close">&times;</a>
      <h2 class="heading-secondary u-margin-bottom-sm">Start booking now!</h2>
      <h3 class="heading-tertiary u-margin-bottom-sm">Important &ndash; Please read these terms before booking</h3>
      <p class="popup__text">
        Garrett County Adventures is just a fictional idea for now. I would personally love to offer services similar to those offered on this website, but my main reason for making this webpage was for practice learning the styling language SASS. If you like what you see, please consider hiring me for a future project =) Or, maybe you are nearby Garrett County and are looking for a tour, I can help with that too xD
      </p>
    <a href="#section-tours" class="btn btn--green">${randomCallToAction()}</a>
    </div>
  </div>
    `,
      document.body,
      "popup",
      `popup`
    );

  const div = document.createElement("div");
  div.innerHTML = `
        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--1" style="background-image:url(${
              dino.imageSrc
            })">
              &nbsp;
            </div>
            <h4 class="card__heading">
              <span class="card__heading-span card__heading-span--1">
                ${dino.name}
              </span>
            </h4>
            <div class="card__details">
              <ul>
                <li>Discovered in ${dino.foundIn}</li>
                <li>Weighed ${dino.weight} tons</li>
                <li>Stood ${dino.length} meters long</li>
                <li>${dino.diet}</li>
               </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back-1" style="background-image:url(${
            dino.imageSrc
          })">
            <div class="card__slide card__slide--back card__slide--back-1">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-value">${dino.name}</p>
                  <p class="card__price-only">(${dino.taxonomy})</p>
                </div>
                <a href="#popup" class="btn btn--black">${
                  callToActions[
                    Math.floor(Math.random() * callToActions.length)
                  ]
                }</a>
              </div>
            </div>
          </div>
        </div>
     `;
  div.classList.add("col-1-of-3");
  renderDinoPopup(dino);
  i++;
  return div.outerHTML;
};

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
        <h2 class="heading-secondary">
          ${
            [
              "Dinosaurs are cool",
              "Dinosaurs are awesome",
              "Dinosaurs are amazing",
              "Dinosaurs are fascinating",
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
    
         

    </section>
    <section class="section-tours" >
    <div class="u-text-center u-margin-bottom-lg">
      <h2 class="heading-secondary" id="section-tours">
        ${headings[Math.floor(Math.random() * headings.length)]}
      </h2>
    </div>
    <div class="row">
        ${randomDinos.map((dino) => renderDinoCard(dino)).join("")}
   
    </div>
    <div class="u-text-center u-margin-top-xl">
    <a class="btn btn--white" href="#all-dinosaurs">View All Dinosaurs</a>
  </div>
  </section>
  <section id="body-map" class="section-features">

</section>

<section id="all-dinosaurs" class="section-features">
<h2 class="heading-secondary u-text-center">${["View All Dinosaurs", "All Dinosaurs", "Dinosaurs"][Math.floor(Math.random()*2)]}</h2>
<div id="dino-list"></div>
<div class="u-text-center"><button id="prev" class="btn btn-white">Previous</button> <span id="currentPage" style="border: 2em;">${currentPage}</span><button id="next" class="btn btn-white">Next</button></div>
</section>

    `;
  const main = createEle("main", content, document.body); 
  
  const allDinosaurs = document.querySelector('section#all-dinosaurs'); // declares the parent container which is the list of dinosaurs
  allDinosaurs.style.background = `url(./assets/watercolor/${Math.floor(Math.random()*58)}.png) fixed`; // sets the background of the parent container to the image of the dinosaur
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  prevButton.onclick = () => {
    currentPage = currentPage - 1;
    document.getElementById("dino-list").innerHTML = "";
    document.querySelector("#currentPage").textContent = currentPage;
    const dinosaursToDisplay = displayItems(dinosaurs, currentPage);
    dinosaursToDisplay.forEach((dino) => dinoListItem(dino));
  };
  nextButton.onclick = () => {
    currentPage = currentPage + 1;
    document.getElementById("dino-list").innerHTML = "";
    document.querySelector("#currentPage").textContent = currentPage;
    const dinosaursToDisplay = displayItems(dinosaurs, currentPage);
    dinosaursToDisplay.forEach((dino) => dinoListItem(dino));
  };

  renderBodyMap();
  renderFooter();

  const itemsPerPage = 5;

  const displayItems = (items, page) => {
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    return items.slice(start, end);
  };

  const updatePageNumber = (page) => (currentPage = page);
  updatePageNumber(8);
  const dinosaursToDisplay = displayItems(dinosaurs, currentPage);

  dinosaursToDisplay.forEach((dino) => dinoListItem(dino));
  return main;
};

export default renderMain;
