import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import displayDinosaur from "./displayDinosaur";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOXAPIKEY; // The API key is stored within `.env` which is not tracked by git therefore you must obtain this information or place your own API key to mapbox in your own .env file using VITE_MAPBOXAPIKEY=<enter api key>

const displayTeamLocations = (map, image) => {
  const teamLocations = [
    "Bolivia",
    "Cincinnati",
    "Gormania",
    "Pittsburgh",
    "Santiago",
    "Toronto",
  ];
  teamLocations.forEach(async (location) => {
    const coordinates = await getCoords(location);
    placeMarker(map, coordinates, image);
  });
};

const getCoords = async (query) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxgl.accessToken}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.features[0].geometry.coordinates);
};

const placeMarker = (map, coordinates, image, dinosaur) => {
  const div = document.createElement("div");
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.backgroundSize = "contain";
  if (image) div.style.backgroundImage = image;
  else {
    const imagesArr = ["dino-icon-1.png", "dino-icon-2.png"];
    const randomImg = imagesArr[Math.floor(Math.random() * imagesArr.length)];
    div.style.backgroundImage = `url(./assets/${randomImg})`;
    div.style.cursor = "pointer";
    div.onclick = () => displayDinosaur(dinosaur);
  }
  new mapboxgl.Marker(div).setLngLat(coordinates).addTo(map);
};

const flyToLocation = (map, coordinates, zoom) => {
  window.scrollTo(0, 0);
  map.flyTo({
    center: coordinates,
    zoom: zoom ? zoom : 1,
    speed: 1,
    curve: 3,
    pitch: 0,
  });
};

const randomLatLng = () => [
  Math.random() * 360 - 180,
  Math.random() * 180 - 90,
];

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mnix-dev/cluiiopsk01ca01ql97063j4f",
  center: [0, 0],
  zoom: 1,
  pitch: 0,
  bearing: 0,
  projection: 'naturalEarth'
});
const mapComponent = (data) => {
  displayTeamLocations(map, "url(./assets/chinguheart.png)");
  data.forEach(async (dinosaur) => {
    const coordinates = await getCoords(dinosaur.foundIn);
    placeMarker(map, coordinates, null, dinosaur);
    // disable map zooming 
    map.scrollZoom.disable()
    // disable map panning using click
    map.dragPan.disable();
    // disable map rotation using right click + drag
    map.dragRotate.disable();
    // disable map rotation using touch rotation gesture
    map.touchZoomRotate.disableRotation();

  });
};

export default mapComponent;
export { flyToLocation, getCoords, map };
