import createEle from "../../../utils/createEle";
import "./searchBar.styles.scss";
import dinoListItem from "../dino-list/dinoListItem.component";
import filterDinosaursByName from "../../../utils/filterDinosaurs";

const renderSearchBar = () => {
  const dinoList = document.getElementById("dino-list");
  const searchBar = createEle(
    "input",
    "",
    document.querySelector("#all-dinosaurs .search"),
    null,
    "search-bar"
  );
  searchBar.placeholder = "Search for a dinosaur...";
  searchBar.oninput = (e) => {
    const searchValue = e.target.value.toLowerCase();
    dinoList.innerHTML = "";
    filterDinosaursByName(searchValue).forEach((dinosaur) => {
      dinoListItem(dinosaur);
    });
  };
  return "Search bar rendered";
};

export default renderSearchBar;
