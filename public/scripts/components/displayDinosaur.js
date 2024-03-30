import createEle from "../utils/createEle.js";

// function to display a dinosaur modal
const displayDinosaur = (dinosaur) => {
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
  const anchor = document.getElementById("dinosaur-modal");
  anchor.innerHTML = ``;
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
    `; // the innerHTML for our page
  const modal = createEle("div", content, anchor); // creates an empty div and fills it in with

  modal.classList = "modal-container"; // applies a className of modal-container to the modal
  const closeBtn = modal.querySelector(".close-btn"); // points to the close button
  closeBtn.style = "cursor:pointer"; // when hovering over the close button the cursor changes to a pointer
  closeBtn.onclick = () => {
    modal.remove();
    anchor.classList.add("hidden");
  }; // remoove the modal from the dom on click of th close button and hides the modal
  anchor.append(modal);
  anchor.classList.remove("hidden");
  return "modal popup of " + name + " added to the dom";
};

export default displayDinosaur;
