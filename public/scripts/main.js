import data from "./json.js";
import dinoListItem from "./components/dinoListItem.js";

data.map((dinosaur) => dinoListItem(dinosaur));
