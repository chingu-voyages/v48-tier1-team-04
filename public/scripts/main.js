import data from '../assets/dinosaurs.json' assert { type: 'json'};
import dinoListItem from "./components/dinoListItem.js";
import filterDinosaursByName from "./utils/filterDinosaurs.js";

data.forEach((dinosaur) => console.log(dinoListItem(dinosaur))); // loop over the json file and call dinoListItem, passing inthe dinosaur each time resulting in a filled list of dinosaurs on screen

const searchBar = document.getElementById('search-bar')
searchBar.addEventListener('keyup', () => {
    document.getElementById('dino-list').innerHTML = ''
    filterDinosaursByName(searchBar.value).forEach((dinosaur) => console.log(dinoListItem(dinosaur)));
})