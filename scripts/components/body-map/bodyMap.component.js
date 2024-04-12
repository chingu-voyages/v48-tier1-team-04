import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { getCoords, placeMarker } from "../../utils/mapBox";
import dinosaurs from "../../data/dinosaurs";
import createEle from "../../utils/createEle";
mapboxgl.accessToken = import.meta.env.VITE_MAPBOXAPIKEY;
let map;
const placeMarkers = (map) =>
  dinosaurs.forEach(async (dinosaur) =>
    placeMarker(map, await getCoords(dinosaur.foundIn), null, dinosaur.name)
  );
const bodyMap = createEle('section',null,document.querySelector('main'),'section-features','body-map');
const renderBodyMap = () => {
  map = new mapboxgl.Map({
    container: "body-map",
    style: "mapbox://styles/mnix-dev/cluiiopsk01ca01ql97063j4f",
    center: [0, 0],
    zoom: 1.9,
    pitch: 0,
    bearing: 0,
    projection: "naturalEarth",
    interactive: false,
  });
  placeMarkers(map);
  return bodyMap;
};

export default renderBodyMap;