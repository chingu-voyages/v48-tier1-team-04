// import data from './data/dinosaurs.json' assert { type: 'json'};
// import dinoListItem from "./components/dinoListItem.js";
// import './utils/hideFooter.js';
// import filterDinosaursByName from "./utils/filterDinosaurs.js";
// import calculateDiet from './utils/chartHelpers.js';
// import dinoPie from './components/dinoDietChart.js';
//import mapComponent from './components/map.js';
// import dinoOfTheDay from './components/randoDino.js';
import renderMain from "./components/main.js";
import "../styles/main.scss";

import renderHeader from './components/header.js';
// data.forEach((dinosaur) => console.log(dinoListItem(dinosaur))); // loop over the json file and call dinoListItem, passing inthe dinosaur each time resulting in a filled list of dinosaurs on screen

// const searchBar = document.getElementById('search-bar')
// const pie = document.getElementById('dietChart')
// const dinoDiet = calculateDiet()
// const dinoOfTheDayContainer = document.getElementById('dino-of-the-day')

// dinoOfTheDay(dinoOfTheDayContainer)

// searchBar.addEventListener('input', () => {
//     document.getElementById('dino-list').innerHTML = ''
//     filterDinosaursByName(searchBar.value).forEach((dinosaur) => console.log(dinoListItem(dinosaur)));
// })

// dinoPie(pie, {
//     labels: ['carnivorous', 'herbivorous', 'omnivorous'],
//     data: dinoDiet
// })

//mapComponent(data)

renderHeader();
renderMain();