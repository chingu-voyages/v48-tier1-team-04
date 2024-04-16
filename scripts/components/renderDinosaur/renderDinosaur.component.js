import mapboxgl from "mapbox-gl";
import { getCoords, placeMarker, renderMap } from "../../utils/mapBox.js";
import "./renderDinosaur.styles.scss";
import createEle from "../../utils/createEle.js";

// function to display a dinosaur modal
const renderDinosaur = async (dinosaur) => {
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
    </div>
    `; // the innerHTML for our page dynamically generated with conditionals
  const modal = createEle("div", container, parentContainer, "modal-container a-fade-in"); // creates an empty div and fills it in with the content above appending it to the parentContainer

  setTimeout(() => modal.classList.remove("a-fade-out"), 0); // removes the fade-out class after 100ms to animate the modal in
  const closeBtn = modal.querySelector(".close-btn"); // points to the close button
  closeBtn.onclick = () => {
    modal.classList.remove("a-fade-in");
    modal.classList.add("a-fade-out");
    setTimeout(() => {
      modal.remove(); // removes the modal from html dom on click
      parentContainer.classList.add("hidden"); // sets the outer dark layer to hidden (display: none)
    }, 500); // removes the modal from html dom after 100ms
  }; // remove the modal from the dom on click of th close button and hides the modal
  parentContainer.append(modal); // appends this modal to its parent
  parentContainer.classList.remove("hidden");

  // Create a new instance of the control with the desired title
  const content = `<div class="header-flex">
<h2 class="dinosaur-name">${name} </h2>
<h3 class="dinosaur-name">${taxonomy}</h3>
<img src="${imageSrc}" alt="${name}" />
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
</div><div id="modal-map"></div>`; // creates a new div with the content above and appends it to the modal
const popup = createEle("div", content, modal);
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOXAPIKEY; // sets the mapbox access token
  const coords = await getCoords(foundIn); // gets the coordinates of the location of the dinosaur
  const map = renderMap('modal-map', coords); // renders the map with the coordinates and the popup with the dinosaur information 
  map.setPitch(75);
  map.setProjection("mercator");
  map.setZoom(9);
  placeMarker(map, coords, undefined, dinosaur); // places a marker on the map at the location of the dinosaur
  return popup, {map}; // returns the popup
  //flyToLocation(map, coordinates, 4); // calls the flyToLocation function from map.js to fly to the location of the dinosaur
 
};
export default renderDinosaur;
