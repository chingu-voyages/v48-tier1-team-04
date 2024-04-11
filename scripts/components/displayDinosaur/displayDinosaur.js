import "./displayDinosaur.styles.scss"; 
import createEle from "../../utils/createEle.js";

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
    </div>
    `; // the innerHTML for our page dynamically generated with conditionals
  const modal = createEle("div", container, parentContainer); // creates an empty div and fills it in with the content above appending it to the parentContainer
  modal.classList = "modal-container fade"; // applies a className of modal-container to the modal
  modal.style.filter = `hue-rotate(${Math.floor(Math.random() * 360)}deg) saturate(5) contrast(1.5)`
  setTimeout(() => {
    modal.classList.remove("a-fade-out");
    modal.classList.add("a-fade-in");
  }, 0); // removes the fade-out class after 100ms to animate the modal in
  const closeBtn = modal.querySelector(".close-btn"); // points to the close button
  closeBtn.onclick = () => {
    modal.classList.remove("a-fade-out");
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
</div>`;

  createEle("div", content, modal); // creates a new div with the content above and appends it to the modal
  // flies to the location using the newly rendered map within the modal
  //flyToLocation(map, coordinates, 4); // calls the flyToLocation function from map.js to fly to the location of the dinosaur
  return "modal popup of " + name + " added to the screen"; // returns a message intended for the console if we wanted to log this function
};

export default displayDinosaur;
