import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGeocoder from "mapbox-gl-geocoder";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOXAPIKEY; // The API key is stored within `.env` which is not tracked by git therefore you must obtain this information or place your own API key to mapbox in your own .env file using VITE_MAPBOXAPIKEY=<enter api key>

const mapComponent = (data) => {
  const map = new mapboxgl.Map({
    container: "map",
    style: "",
    center: [0, 0],
    zoom: 0,
  });

  const div = document.createElement('div');
  div.style.backgroundImage = 'url(./assets/chinguheart.png)';
  div.style.width = '50px';
  div.style.height = '50px';

  const marker = new mapboxgl.Marker(div)
  .setLngLat([0, 0]) 
  .addTo(map);
};

export default mapComponent;
