import createEle from "./utils/createEle.js";
import renderBodyMap from "./components/body-map/bodyMap.component.js";
import renderHeader from "./components/header/header.component.js";
import dinoOfTheDay from "./components/dino-of-the-day/dino-of-the-day.component.js";
import renderShowcase from "./components/showcase-section/showcase-section.component.js";
import renderCharts from "./components/chart/dinoDietChart.component.js";
import renderFooter from "./components/footer/footer.component.js";
import renderIntroSection from "./components/intro-section/intro-section.component.js";
import renderAllDinos from "./components/renderAllDinos/renderAllDinos.component.js";
import arCode from "./components/ar-code/arCode.component";

import "../styles/main.scss";

renderHeader();
createEle('main', '', document.body);
createEle('div', '', document.body, null, 'dinosaur-modal');
renderIntroSection();
dinoOfTheDay();
renderShowcase();
const bodyMap = renderBodyMap();
const map = bodyMap.map;
renderAllDinos();
renderCharts();
renderFooter(map);
setTimeout(() => arCode(document.body), 1000 * 60 ); 