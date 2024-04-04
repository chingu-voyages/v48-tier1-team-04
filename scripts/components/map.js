import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from "mapbox-gl-geocoder";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOXAPIKEY



const map = () => {
    console.log(mapboxgl.accessToken)
}

export default map