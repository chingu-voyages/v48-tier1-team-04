import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import createEle from "../utils/createEle";
import dinosaurs from "../data/dinosaurs.json";
import randomPhrase from "../utils/randomPhrase";

const createMap = (container, center, zoom) => {
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOXAPIKEY;
  const map = new mapboxgl.Map({
    container: "header-map",
    style: "mapbox://styles/mnix-dev/cluiiopsk01ca01ql97063j4f",
    center: [0, 0],
    zoom: 1.75,
    pitch: 0,
    bearing: 0,
    projection: "naturalEarth",
    interactive: false
  });
  map
  return map;
};
const renderHeader = () => {
  const headerContent = `
  <div id="header-map"></div>
    <div class="header__logo-box">
      <img src="assets/raptors-logo-transparent.png" class="header__logo" alt="Logo">
    </div>

    <div class="header__text-box">

      <h1 class="heading-primary">
        <span class="heading-primary--main">Let's discover something new today</span>
        <span class="heading-primary--sub">${randomPhrase(
          dinosaurs[Math.floor(Math.random() * dinosaurs.length)]
        )}</span>
      </h1>

      <a href="#" class="btn btn--white btn--animated">
        Learn more
      </a>

    </div>
    `;
  const header = createEle(
    "header",
    headerContent,
    document.body,
    "header",
    null,
    true
  );

  createMap("header-map", [-98.5795, 39.8283], 3); // create a map with random coordinates and zoom level 1
  return header;
};

export default renderHeader;
