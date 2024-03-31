import data from '../assets/dinosaurs.json' with { type: 'json'};
import dinoListItem from "./components/dinoListItem.js";
import './utils/hideFooter.js';

data.forEach((dinosaur) => dinoListItem(dinosaur)); // loop over the json file and call dinoListItem, passing inthe dinosaur each time resulting in a filled list of dinosaurs on screen



