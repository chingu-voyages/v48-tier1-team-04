import createEle from "./utils/createEle.js";
import renderBodyMap from "./components/body-map/bodyMap.component.js";
import renderHeader from "./components/header/header.component.js";
import dinoOfTheDay from "./components/dino-of-the-day/dino-of-the-day.component.js";
import renderShowcase from "./components/showcase-section/showcase-section.component.js";
import renderCharts from "./components/chart/dinoDietChart.component.js";
import renderFooter from "./components/footer/footer.component.js";
import renderIntroSection from "./components/intro-section/intro-section.component.js";
import renderAllDinos from "./components/renderAllDinos/renderAllDinos.js";
import "../styles/main.scss";

renderHeader();
createEle('main', '', document.body);
createEle('div', '', document.body, null, 'dinosaur-modal');
renderIntroSection();
dinoOfTheDay();
renderShowcase();
renderBodyMap();
renderAllDinos();
renderCharts();

renderFooter();
