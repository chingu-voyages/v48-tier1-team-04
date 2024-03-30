import data from '../assets/dinosaurs.json' assert { type: 'json'};
import dinoListItem from "./components/dinoListItem.js";

data.forEach((dinosaur) => dinoListItem(dinosaur)); // loop over the json file and call dinoListItem, passing inthe dinosaur each time resulting in a filled list of dinosaurs on screen
