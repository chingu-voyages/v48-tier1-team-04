import dinosaurs from "../../../data/dinosaurs";
import createEle from "../../../utils/createEle";
import "./searchBar.styles.scss";
import dinoListItem from "../dino-list/dinoListItem.component";
import filterDinosaursByName from "../../../utils/filterDinosaurs";

const renderSearchBar = () => {
  const dinoList = document.getElementById("dino-list");
  const searchBar = createEle(
    "input",
    "",
    document.querySelector("main .search"),
    null,
    "search-bar"
  );
  searchBar.placeholder = "Search for a dinosaur...";
  let filteredDinosaurs;
  searchBar.oninput = (e) => {
    e.preventDefault();
    const searchValue = e.target.value.toLowerCase();
    dinoList.innerHTML = "";
    filteredDinosaurs = filterDinosaursByName(searchValue);
    const markers =  document.querySelectorAll('.mapboxgl-marker');
    markers.forEach(marker => marker.classList.add('hide'));
   filteredDinosaurs.forEach(dino => {
      dinoListItem(dino);
      const marker = document.getElementById(`marker-${dino.id}`);
      marker.classList.remove('hide');
   })
  
  };

  return "Search bar rendered";
};

export default renderSearchBar;
