import data from '../assets/dinosaurs.json' assert { type: 'json'};
import dinoListItem from "./components/dinoListItem.js";

data.map((dinosaur) => dinoListItem(dinosaur));
