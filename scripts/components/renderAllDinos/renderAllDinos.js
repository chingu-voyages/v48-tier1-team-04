import dinosaurs from "../../data/dinosaurs";
import createEle from "../../utils/createEle";
import dinoListItem from "./dino-list/dinoListItem.component";
import filterDinosaursByName from "../../utils/filterDinosaurs";

let currentPage = 1;
const renderAllDinosaursList = () => {
  const innerHTML = `
<h2 class="heading-secondary u-text-center">${
    ["View All Dinosaurs", "All Dinosaurs", "Dinosaurs"][
      Math.floor(Math.random() * 2)
    ]
  }</h2>
<div id="dino-list"></div>
<div class="u-text-center u-margin-top-xl">
    <div class="search"><input id="search-bar" type="text" placeholder="Search For a Dinosaur...">
</div>
<button id="prev" class="btn btn-white">Previous</button> 
    <span id="currentPage" style="border: 2em;">
    ${currentPage}
    </span><button id="next" class="btn btn-white">Next</button></div>
`;
  let currentDinoList = dinosaurs;
  const allDinosaurs = createEle(
    "section",
    innerHTML,
    document.querySelector("main"),
    "section-features",
    "all-dinosaurs"
  );
  allDinosaurs.style.background = `url(./assets/watercolor/${
    Math.floor(Math.random() * 27) + 29
  }.png) center/contain fixed no-repeat`; // sets the background of the parent container to the image of the dinosaur
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
  prevButton.onclick = () => pagination(currentPage, true);
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

  const dinosaursToDisplay = displayItems(dinosaurs, currentPage);

  dinosaursToDisplay.forEach((dino) => dinoListItem(dino));

  const searchBar = document.getElementById("search-bar");

  searchBar.addEventListener("input", () => {
    document.getElementById("dino-list").innerHTML = "";
    filterDinosaursByName(searchBar.value).forEach((dinosaur) =>
      dinoListItem(dinosaur)
    );
  });
  return allDinosaurs;
};
export default renderAllDinosaursList;