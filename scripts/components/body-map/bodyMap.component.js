import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./bodyMap.styles.scss";
import { getCoords, placeMarker } from "../../utils/mapBox";
import dinosaurs from "../../data/dinosaurs";
import createEle from "../../utils/createEle";
import displayDinosaur from "../renderDinosaur/renderDinosaur.component";
mapboxgl.accessToken = import.meta.env.VITE_MAPBOXAPIKEY;

const renderMap = (container) => new mapboxgl.Map({
  container: container,
  style: "mapbox://styles/mnix-dev/cluiiopsk01ca01ql97063j4f",
  center: [0, 0],
  zoom: 1.9,
  pitch: 0,
  bearing: 0,
  projection: "naturalEarth",
});
const renderBodyMap = () => {
  const bodyMap = createEle(
    "section",
    "",
    document.querySelector("main"),
    "section-features",
    "body-map"
  );
  const map = renderMap("body-map");
  const placeMarkers = (map) =>
    dinosaurs.forEach(async (dinosaur) =>
      placeMarker(map, await getCoords(dinosaur.foundIn), null, dinosaur.name).onclick = () => displayDinosaur(dinosaur)
    );
  map.dragRotate.disable();
  map.touchZoomRotate.disableRotation();
  placeMarkers(map);
  return bodyMap, {map};
};

export default renderBodyMap;
