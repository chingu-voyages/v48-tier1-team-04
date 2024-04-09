import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import createEle from "../utils/createEle";
import dinosaurs from "../data/dinosaurs.json";
import randomPhrase from "../utils/randomPhrase";
import renderNav from "./nav";
import { getCoords, placeMarker } from "../utils/mapBox";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOXAPIKEY;

const placeMarkers = (map) =>
  dinosaurs.forEach(async (dinosaur) =>
    placeMarker(map, await getCoords(dinosaur.foundIn), null, dinosaur.name)
  );

const renderHeaderMap = () => {
  const map = new mapboxgl.Map({
    container: "header-map",
    style: "mapbox://styles/mnix-dev/cluiiopsk01ca01ql97063j4f",
    center: [0, 0],
    zoom: 1.75,
    pitch: 0,
    bearing: 0,
    projection: "naturalEarth",
    interactive: false,
  });
  placeMarkers(map);
};

const renderHeader = () => {
  const greetings = [
    "Welcome To Dinosauria",
    "Discover Something New About Dinosaurs",
    "Explore The Past",
    "Dinosauria Awaits",
    "Chingu Raptors presents: Dinosauria",
  ];
  const callToActions = [
    "Learn more",
    "Discover",
    "Explore",
    "Get Started",
    "Find Out More",
  ];
  const headerContent = `
  <div id="header-map"></div>
    <div class="header__logo-box">
      <img src="assets/raptors-logo-transparent.png" class="header__logo" alt="Logo">
    </div>

    <div class="header__text-box">

      <h1 class="heading-primary">
        <span class="heading-primary--main">${
          greetings[Math.floor(Math.random() * greetings.length)]
        }</span>
        <span class="heading-primary--sub">${randomPhrase(
          dinosaurs[Math.floor(Math.random() * dinosaurs.length)]
        )}</span>
      </h1>

      <a href="#" class="btn btn--white btn--animated">
        ${callToActions[Math.floor(Math.random() * callToActions.length)]}
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
  renderHeaderMap();
  renderNav();
  return header;
};

export default renderHeader;
