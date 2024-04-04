import createEle from "../utils/createEle.js";
import { flyToLocation, getCoords, map } from "./map.js";

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
  const content = `
    <div class="header-flex">
    <h1 class="dinosaur-name">${name} (${taxonomy})</h1>
    <p><strong>Named By:</strong> ${namedBy}</p>
    <span class="close-btn">&times;</span>
    </div>
    <div class="dinosaur-image-container">
    <img class="dinosaur-detail-image"
      src="${imageSrc}"
      alt="Artwork reperesenting a ${name}}" />
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
    </div>
    `; // the innerHTML for our page dynamically generated with conditionals
  const modal = createEle("div", content, parentContainer); // creates an empty div and fills it in with the content above appending it to the parentContainer
  modal.classList = "modal-container"; // applies a className of modal-container to the modal
  const closeBtn = modal.querySelector(".close-btn"); // points to the close button
  closeBtn.onclick = () => {
    modal.remove(); // removes the modal from html dom on click
    parentContainer.classList.add("hidden"); // sets the outer dark layer to hidden (display: none)
  }; // remove the modal from the dom on click of th close button and hides the modal
  parentContainer.append(modal); // appends this modal to its parent
  parentContainer.classList.remove("hidden");
  const coordinates = await getCoords(foundIn); // gets the coordinates of the location the dinosaur was found
  flyToLocation(map, coordinates); // calls the flyToLocation function from map.js to fly to the location of the dinosaur
  return "modal popup of " + name + " added to the screen"; // returns a message intended for the console if we wanted to log this function
};

export default displayDinosaur;
