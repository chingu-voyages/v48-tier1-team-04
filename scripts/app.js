import renderMain from "./components/mainComponent.js";
import renderHeader from "./components/header/header.component.js";
import dinoPie from "./components/chart/dinoDietChart.component.js";
import calculateDiet from "./utils/chartHelpers.js";
import "../styles/main.scss";

const dinoDiet = calculateDiet();
renderHeader();
await renderMain();
dinoPie(document.querySelector('main'), {
  labels: ["carnivorous", "herbivorous", "omnivorous"],
  data: dinoDiet,
});
