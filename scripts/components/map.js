import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOXAPIKEY; // The API key is stored within `.env` which is not tracked by git therefore you must obtain this information or place your own API key to mapbox in your own .env file using VITE_MAPBOXAPIKEY=<enter api key>

const displayTeamLocations = (map, image) => {
  const teamLocations = [
    "Bolivia",
    "Cincinnati",
    "Chile",
    "Gormania",
    "Pittsburgh",
    "Toronto",
  ];
  teamLocations.forEach((location) => fetchLocation(map, location, image));
};

const fetchLocation = async (map, query, image) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxgl.accessToken}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const coordinates = data.features[0].geometry.coordinates;
      placeMarker(map, coordinates, image);
    });
};

const placeMarker = (map, coordinates, image) => {
  const div = document.createElement("div");
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.backgroundSize = "contain";
  if (image) div.style.backgroundImage = image;
  else {
    const imagesArr = ["dino-icon-1.png", "dino-icon-2.png"];
    const randomImg = imagesArr[Math.floor(Math.random() * imagesArr.length)];
    div.style.backgroundImage = `url(./assets/${randomImg})`;
  }
  new mapboxgl.Marker(div).setLngLat(coordinates).addTo(map);
};

const mapComponent = (data) => {
  const map = new mapboxgl.Map({
    container: "map",
    style: "",
    center: [0, 0],
    zoom: 0,
  });

  displayTeamLocations(map, "url(./assets/chinguheart.png)");
  data.forEach((dinosaur) => fetchLocation(map, dinosaur.foundIn));
};

export default mapComponent;
