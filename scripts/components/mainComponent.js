import dinosaurs from "../data/dinosaurs.json";
import createEle from "../utils/createEle";
import randomDino from "../utils/giveRandoDino";
import dinoListItem from "./dino-list/dinoListItem.component";
import createSearchBar from "./searchBar/searchBar";
import filterDinosaursByName from "../utils/filterDinosaurs";

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
const renderMainContainer = () => createEle("main", '', document.body);
const main = renderMainContainer();
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

  main.innerHTML = content;


  let currentDinoList = dinosaurs

  const allDinosaurs = document.querySelector("section#all-dinosaurs"); // declares the parent container which is the list of dinosaurs
  allDinosaurs.style.background = `url(./assets/watercolor/${Math.floor(Math.random() * 27) + 38}.png) center/contain fixed no-repeat`; // sets the background of the parent container to the image of the dinosaur
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const pagination = (page, prev, reset) => {
    if (prev && currentPage <= 1) return;
    if (!prev && currentPage >= totalPages) return;
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
    const dinosaursToDisplay = displayItems(currentDinoList, currentPage);
    dinosaursToDisplay.forEach((dino) => dinoListItem(dino));
  };
  prevButton.onclick = () => pagination(currentPage, true)
  nextButton.onclick = () => pagination(currentPage);

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
  const dinosaursToDisplay = displayItems(currentDinoList, currentPage);

  dinosaursToDisplay.forEach((dino) => dinoListItem(dino));

  const searchBar = document.getElementById("search-bar");

  searchBar.addEventListener("input", () => {
    currentPage = 1
    document.getElementById("dino-list").innerHTML = "";
    currentDinoList = filterDinosaursByName(searchBar.value)
    const filteredDinosaursToDisplay = displayItems(currentDinoList, currentPage)
    filteredDinosaursToDisplay.forEach((dino) => dinoListItem(dino));
    console.log(currentDinoList);
  });

  return main;
};

export default renderMain;
