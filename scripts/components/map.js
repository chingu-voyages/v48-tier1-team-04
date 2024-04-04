import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOXAPIKEY; // The API key is stored within `.env` which is not tracked by git therefore you must obtain this information or place your own API key to mapbox in your own .env file using VITE_MAPBOXAPIKEY=<enter api key>

const fetchLocation = async (map, query) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxgl.accessToken}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.features[0].geometry.coordinates);
      const coordinates = data.features[0].geometry.coordinates;
      placeMarker(map, coordinates);
    });
};

const placeMarker = (map, coordinates) => {
  const div = document.createElement("div");
  div.style.backgroundImage = "url(./assets/chinguheart.png)";
  div.style.width = "50px";
  div.style.height = "50px";
  new mapboxgl.Marker(div).setLngLat(coordinates).addTo(map);
};

const mapComponent = (data) => {
  const map = new mapboxgl.Map({
    container: "map",
    style: "",
    center: [0, 0],
    zoom: 0,
  });

  placeMarker(map, [0, 0]);
  fetchLocation(map, "Gormania");
  fetchLocation(map, "Toronto");
  fetchLocation(map, "Vancouver");
  fetchLocation(map, "Cincinatti");
  fetchLocation(map, "Toronto");
  fetchLocation(map, "Pittsburgh");
  fetchLocation(map, "Bolivia");
  
};

export default mapComponent;
