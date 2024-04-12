import renderMain from "./components/mainComponent.js";
import renderBodyMap from "./components/body-map/bodyMap.component.js";
import renderHeader from "./components/header/header.component.js";
import dinoOfTheDay from "./components/randoDino/randoDino.component";
import renderShowcase from "./components/showcase-section/showcase-section.component.js";
import renderCharts from "./components/chart/dinoDietChart.component.js";
import renderFooter from "./components/footer/footer.component.js";
import renderIntroSection from "./components/random-dino-section/intro-section.component.js";
import "../styles/main.scss";

renderHeader();
await renderMain();
renderShowcase();
dinoOfTheDay();
renderBodyMap();
renderIntroSection();
renderCharts();


// dinoPie(document.querySelector('main'), {
//   labels: ["carnivorous", "herbivorous", "omnivorous"],
//   data: dinoDiet,
// });
renderFooter();
