import mapboxgl from "mapbox-gl";
import createEle from "../utils/createEle.js";
import { flyToLocation, getCoords, map } from "./map.js";

// Define a new control class
class TitleControl {
  constructor(titleText) {
    this._titleText = titleText;
    this._container = document.createElement("div");
    this._container.className = "mapboxgl-ctrl";
    this._container.innerHTML = this._titleText;
  }

  onAdd(map) {
    this._map = map;
    return this._container;
  }

  onRemove() {
    this._container.parentNode.removeChild(this._container);
    this._map = undefined;
  }
}

const placeMarker = (map, coordinates, image, dinosaur) => {
  const div = document.createElement("div");
  div.innerHTML = `<div class="dino-popup" style="block-size: 220px; inline-size: 220px; background-image: url(${dinosaur.imageSrc})">
    
  </div>`;
  const pin = document.createElement("div");
  pin.style.width = "50px";
  pin.style.height = "50px";
  pin.style.backgroundSize = "contain";
  if (image) pin.style.backgroundImage = image;
  else {
    const imagesArr = ["dino-icon-1.png", "dino-icon-2.png"];
    const randomImg = imagesArr[Math.floor(Math.random() * imagesArr.length)];
    pin.style.backgroundImage = `url(./assets/${randomImg})`;
  }
  new mapboxgl.Marker(pin).setLngLat(coordinates).addTo(map);
  new mapboxgl.Popup({
    offset: 25,
    closeOnClick: false,
  })
    .setLngLat(coordinates)
    .setDOMContent(div)
    .addTo(map);
};

// function to display a dinosaur modal
const displayDinosaur = async (dinosaur) => {
  const {
    description,
    diet,
    foundIn,
    imageSrc,
    length,
    name,
    namedBy,
    taxonomy,
    typeOfDinosaur,
    typeSpecies,
    weight,
    whenLived,
  } = dinosaur;
  // destructures the dinosaur object
  const parentContainer = document.getElementById("dinosaur-modal"); // declares where we are going to append this container
  parentContainer.innerHTML = ``; // resets the innerHTML of the parentContainer so that we can update with new content
  const container = `
    <div class="header-flex">
    <span class="close-btn">&times;</span>
    <div id="dino-map"></div>
    </div>
    `; // the innerHTML for our page dynamically generated with conditionals
  const modal = createEle("div", container, parentContainer); // creates an empty div and fills it in with the content above appending it to the parentContainer
  modal.classList = "modal-container fade"; // applies a className of modal-container to the modal
  setTimeout(() => {
    modal.classList.remove("fade");
    modal.classList.add("fade-in");
  }, 0); // removes the fade-out class after 100ms to animate the modal in
  const closeBtn = modal.querySelector(".close-btn"); // points to the close button
  closeBtn.onclick = () => {
    flyToLocation(map, [0, 0]);
    modal.classList.remove("fade-in");
    modal.classList.add("fade"); // adds the fade-out class to the modal
    setTimeout(() => {
      modal.remove(); // removes the modal from html dom on click
      parentContainer.classList.add("hidden"); // sets the outer dark layer to hidden (display: none)
    }, 500); // removes the modal from html dom after 100ms
  }; // remove the modal from the dom on click of th close button and hides the modal
  parentContainer.append(modal); // appends this modal to its parent
  parentContainer.classList.remove("hidden");
  const coordinates = await getCoords(foundIn); // gets the coordinates of the location the dinosaur was found

  const dinoMap = new mapboxgl.Map({
    container: "dino-map",
    style: "mapbox://styles/mnix-dev/cluiiopsk01ca01ql97063j4f",
    center: [0, 0],
    zoom: 1,
    pitch: 0,
    bearing: 0,
  });
  dinoMap.addLayer({});
  dinoMap.flyTo({
    center: coordinates,
    zoom: 4,
    speed: 0.491,
    curve: 3,
    pitch: 45,
  });
  // disable map zooming
  dinoMap.scrollZoom.disable();
  // disable map panning using click
  dinoMap.dragPan.disable();
  // disable map rotation using right click + drag
  dinoMap.dragRotate.disable();
  // disable map rotation using touch rotation gesture
  dinoMap.touchZoomRotate.disableRotation();
  placeMarker(dinoMap, coordinates, null, dinosaur);
  // Create a new instance of the control with the desired title
  const content = `<div class="header-flex">
<h1 class="dinosaur-name">${name} (${taxonomy})</h1>
<p><strong>Named By:</strong> ${namedBy}</p>
</div>
<div class="container">
<p><strong>Found In:</strong> ${foundIn}</p>
<p><strong>Type:</strong> ${typeOfDinosaur}</p>
<p><strong>Length:</strong> ${length}</p>
${weight > 0 ? `<p><strong>Weight:</strong> ${weight} Kg</p>` : ``}
<p><strong>Diet:</strong> ${diet}</p>
<p><strong>Lived during:</strong> ${whenLived}</p>
<p><strong>Species Type:</strong> ${typeSpecies}</p>
<p><strong>Description:</strong> ${description}</p>   
</div>`;
  const titleControl = new TitleControl(content);

  // Add the control to the map
  dinoMap.addControl(titleControl, "top-left");

  // flies to the location using the newly rendered map within the modal
  flyToLocation(map, coordinates, 4); // calls the flyToLocation function from map.js to fly to the location of the dinosaur
  return "modal popup of " + name + " added to the screen"; // returns a message intended for the console if we wanted to log this function
};

export default displayDinosaur;
