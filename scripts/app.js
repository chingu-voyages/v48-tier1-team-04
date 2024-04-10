// import data from './data/dinosaurs.json' assert { type: 'json'};
// import dinoListItem from "./components/dinoListItem.js";
import renderFooter from "./components/footer.js";
// import './utils/hideFooter.js';
// import filterDinosaursByName from "./utils/filterDinosaurs.js";
import calculateDiet from "./utils/chartHelpers.js";
import dinoPie from "./components/dinoDietChart.js";
//import mapComponent from './components/map.js';
import dinoOfTheDay from "./components/randoDino.js";
import renderMain from "./components/mainComponent.js";
import "../styles/main.scss";

import renderHeader from "./components/header.js";
//data.forEach((dinosaur) => console.log(dinoListItem(dinosaur))); // loop over the json file and call dinoListItem, passing inthe dinosaur each time resulting in a filled list of dinosaurs on screen

//mapComponent(data)

renderHeader();
renderMain();
