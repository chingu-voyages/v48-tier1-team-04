import createElement from "../utils/createEle.js";

// function to display a dinosaur modal
const displayDinosaur = (dinosaur, anchor) => {
  const {
    description,
    diet,
    foundIn,
    id,
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

  anchor.id = id; // applies an id to the anchor, so grab the close button later

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
    <p><strong>Weight:</strong> ${weight}</p>
    <p><strong>Diet:</strong> ${diet}</p>
    <p><strong>Lived during:</strong> ${whenLived}</p>
    <p><strong>Species Type:</strong> ${typeSpecies}</p>
    <p><strong>Description:</strong> ${description}</p>   
    </div>
    `; // the innerHTML for our page
  const modal = createElement("div", content, anchor); // creates an empty div and fills it in with 
  
  modal.className = "modal-container" // applies a className of modal-container to the modal
  const closeBtn = modal.querySelector(".close-btn"); // points to the close button
  closeBtn.style = "cursor:pointer"; // when hovering over the close button the cursor changes to a pointer
  closeBtn.onclick = () => modal.remove(); // remoove the modal from the dom on click of th close button
  document.body.prepend(anchor); // prepends the anchor to the body
};

export default displayDinosaur