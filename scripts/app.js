import renderMain from "./components/mainComponent.js";
import renderBodyMap from "./components/body-map/bodyMap.component.js";
import renderHeader from "./components/header/header.component.js";
import dinoOfTheDay from "./components/randoDino/randoDino.component";
import dinoPie from "./components/chart/dinoDietChart.component.js";
import renderFooter from "./components/footer/footer.component.js";
import calculateDiet from "./utils/chartHelpers.js";
import "../styles/main.scss";

const dinoDiet = calculateDiet();
renderHeader();
await renderMain();
dinoOfTheDay(document.getElementById("dino-of-the-day"));
renderBodyMap();
dinoPie(document.querySelector('.charts-container'), {
  labels: ["carnivorous", "herbivorous", "omnivorous"],
  data: dinoDiet,
});
renderFooter();
