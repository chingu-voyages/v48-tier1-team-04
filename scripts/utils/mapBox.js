import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOXAPIKEY;
const getCoords = async (query) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxgl.accessToken}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.features[0].geometry.coordinates);
};

const placeMarker = (map, coordinates, image, dinosaur) => {
    const div = document.createElement("div");
    div.id = `marker-${dinosaur.id}`;
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.backgroundSize = "contain";
    if (image) div.style.backgroundImage = image;
    else { 
      div.style.backgroundImage = `url(./assets/dino-icon-1.png)`;
      div.style.cursor = "pointer";
      div.onclick = () => console.log(dinosaur)
    }
    new mapboxgl.Marker(div).setLngLat(coordinates).addTo(map);
  };

export { getCoords, placeMarker };
