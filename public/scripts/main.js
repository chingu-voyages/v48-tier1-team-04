import data from '../assets/dinosaurs.json' assert { type: 'json'};
import dinoListItem from "./components/dinoListItem.js";
import filterDinosaursByName from "./utils/filterDinosaurs.js";

data.forEach((dinosaur) => console.log(dinoListItem(dinosaur))); // loop over the json file and call dinoListItem, passing inthe dinosaur each time resulting in a filled list of dinosaurs on screen

const searchBar = document.getElementById('search-bar')
searchBar.addEventListener('input', () => {
    //Here comes the displaying of the filtered dinosaurs
    //an array with the dinosaurs filtered is on the function filterDinosaursByName
    console.log(filterDinosaursByName(searchBar.value));
})