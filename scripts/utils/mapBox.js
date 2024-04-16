import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOXAPIKEY;
const getCoords = async (query) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxgl.accessToken}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.features[0].geometry.coordinates);
};

const renderMap = (container, coords, interactive) => new mapboxgl.Map({
  container: container,
  style: "mapbox://styles/mnix-dev/cluiiopsk01ca01ql97063j4f",
  center: coords ? coords : [0, 0],
  zoom: 1.9,
  pitch: 0,
  bearing: 0,
  projection: "naturalEarth",
  interactive: interactive ? true : false
});

const displayTeamLocations = async (map, image) => {
const teamLocations = [
  "Bolivia",
  "Cincinnati",
  "Gormania",
  "Pittsburgh",
  "Santiago",
  "Toronto",
];
const markers = [];
teamLocations.forEach(async (location) => {
  const coordinates = await getCoords(location);
  markers.push(placeMarker(map, coordinates, image));
});
console.log('%cEaster Egg found!',  'color: red; background-color: aquamarine;');
return markers;
};

const placeMarker = (map, coordinates, image, dinosaur) => {
    const div = document.createElement("div");
    if (dinosaur) div.id = `marker-${dinosaur.id}`;
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.backgroundSize = "contain";
    div.style.cursor = "pointer";
    if (image) div.style.backgroundImage = image;
    else div.style.backgroundImage = `url(./assets/dino-icon-1.png)`;
      
    
    new mapboxgl.Marker(div).setLngLat(coordinates).addTo(map);
    return div;
  };

export { getCoords, placeMarker, displayTeamLocations, renderMap };
