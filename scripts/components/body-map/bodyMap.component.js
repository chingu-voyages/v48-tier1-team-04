import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./bodyMap.styles.scss";
import { getCoords, placeMarker, renderMap } from "../../utils/mapBox";
import dinosaurs from "../../data/dinosaurs";
import createEle from "../../utils/createEle";
import displayDinosaur from "../renderDinosaur/renderDinosaur.component";
mapboxgl.accessToken = import.meta.env.VITE_MAPBOXAPIKEY;

const renderBodyMap = () => {
  const bodyMap = createEle(
    "section",
    "",
    document.querySelector("main"),
    "section-features",
    "body-map"
  );
  const map = renderMap("body-map", null, true);
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
